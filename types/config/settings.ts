export interface AppSettings {
  site: {
    name: string
    description: string
    url: string
    ogImage: string
  }
  theme: {
    defaultMode: 'light' | 'dark' | 'system'
    allowUserTheme: boolean
  }
  auth: {
    requireVerification: boolean
    allowRegistration: boolean
    providers: ('email' | 'google' | 'facebook')[]
    sessionDuration: number // in days
  }
  features: {
    blog: boolean
    portfolio: boolean
    consultation: boolean
    partnerRegistration: boolean
    newsletter: boolean
    testimonials: boolean
  }
  contact: {
    email: string
    phone: string
    address: string
    socials: {
      platform: string
      url: string
    }[]
  }
  seo: {
    titleTemplate: string
    defaultDescription: string
    defaultKeywords: string[]
    robotsEnabled: boolean
  }
  api: {
    baseUrl: string
    timeout: number
    retryAttempts: number
  }
  cache: {
    enabled: boolean
    duration: number // in seconds
  }
  analytics: {
    enabled: boolean
    provider: 'google' | 'plausible' | 'custom'
    trackingId?: string
  }
  performance: {
    imageOptimization: boolean
    lazyLoading: boolean
    prefetching: boolean
    minification: boolean
  }
  localization: {
    defaultLocale: string
    availableLocales: string[]
    fallbackLocale: string
  }
  security: {
    rateLimit: {
      enabled: boolean
      maxRequests: number
      windowMs: number
    }
    cors: {
      enabled: boolean
      origins: string[]
    }
    csrf: {
      enabled: boolean
      cookieName: string
    }
  }
}
