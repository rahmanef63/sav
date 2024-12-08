declare namespace NodeJS {
  interface ProcessEnv {
    // App
    NEXT_PUBLIC_APP_URL: string
    NEXT_PUBLIC_APP_NAME: string
    NODE_ENV: 'development' | 'production' | 'test'
    
    // API
    NEXT_PUBLIC_API_URL: string
    API_SECRET_KEY: string
    
    // Database
    DATABASE_URL: string
    
    // Authentication
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    
    // OAuth Providers
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    FACEBOOK_CLIENT_ID: string
    FACEBOOK_CLIENT_SECRET: string
    
    // Storage
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string
    CLOUDINARY_API_KEY: string
    CLOUDINARY_API_SECRET: string
    
    // Email
    SMTP_HOST: string
    SMTP_PORT: string
    SMTP_USER: string
    SMTP_PASSWORD: string
    SMTP_FROM_EMAIL: string
    
    // Analytics
    NEXT_PUBLIC_GA_TRACKING_ID: string
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: string
    
    // External Services
    NEXT_PUBLIC_MAPS_API_KEY: string
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string
    RECAPTCHA_SECRET_KEY: string
    
    // Feature Flags
    NEXT_PUBLIC_ENABLE_BLOG: string
    NEXT_PUBLIC_ENABLE_PORTFOLIO: string
    NEXT_PUBLIC_ENABLE_CONSULTATION: string
    
    // Performance
    NEXT_PUBLIC_IMAGE_DOMAINS: string
    NEXT_PUBLIC_CACHE_DURATION: string
  }
}
