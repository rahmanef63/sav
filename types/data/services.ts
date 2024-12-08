export interface Service {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  icon?: string
  features: ServiceFeature[]
  pricing: ServicePricing[]
  faqs: ServiceFAQ[]
  process: ServiceProcess[]
}

export interface ServiceFeature {
  title: string
  description: string
  icon?: string
}

export interface ServicePricing {
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
  icon?: string
}
