declare interface Window {
  gtag: (
    command: 'config' | 'event' | 'set',
    targetId: string,
    config?: Record<string, any>
  ) => void
  plausible: (
    eventName: string,
    options?: {
      props?: Record<string, string | number | boolean>
      callback?: () => void
    }
  ) => void
}

export interface TrackingEvent {
  name: string
  category?: string
  action?: string
  label?: string
  value?: number
  nonInteraction?: boolean
  metadata?: Record<string, any>
}

export interface PageView extends TrackingEvent {
  path: string
  title: string
  referrer?: string
}

export interface UserEvent extends TrackingEvent {
  userId?: string
  userType: 'guest' | 'client' | 'partner' | 'admin'
}

export interface ConversionEvent extends TrackingEvent {
  conversionId: string
  revenue?: number
  currency?: string
}

export interface ErrorEvent extends TrackingEvent {
  error: Error
  componentStack?: string
  metadata?: Record<string, any>
}

export type TrackingProvider = 'google-analytics' | 'plausible' | 'custom'

export interface TrackingConfig {
  enabled: boolean
  provider: TrackingProvider
  trackingId?: string
  options?: {
    anonymizeIp?: boolean
    useSessionStorage?: boolean
    debug?: boolean
  }
}
