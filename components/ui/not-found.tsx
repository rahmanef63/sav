import Link from 'next/link'
import { Button } from './button'

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Style Not Found</h1>
      <p className="text-muted-foreground mb-8">The style you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/styles">
        <Button>Back to Styles</Button>
      </Link>
    </div>
  )
} 