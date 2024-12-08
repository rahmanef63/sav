import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Configure which paths need authentication
export const config = {
  matcher: [
    // Match all routes in (sav) group
    '/(sav)/:path*',
    // Match admin blog routes
    '/blog/:path*',
    // Exclude public blog listing
    '/((?!blog$).*)',
  ]
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the request is for protected routes
  const isProtectedRoute = 
    request.nextUrl.pathname.startsWith('/(sav)') || 
    (request.nextUrl.pathname.startsWith('/blog') && request.nextUrl.pathname !== '/blog')
    
  if (isProtectedRoute) {
    // TODO: Add proper authentication check here
    const isAuthenticated = request.cookies.has('auth_token')
    
    if (!isAuthenticated) {
      // Store the original URL to redirect back after login
      const from = request.nextUrl.pathname
      return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, request.url))
    }
  }
 
  return NextResponse.next()
}
