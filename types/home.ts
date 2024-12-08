import { ReactNode } from 'react'
import { IconType } from '@/types/common'

export interface ServiceItem {
  title: string
  description: string
  icon?: IconType | ReactNode
  link?: string
}

export interface ProjectItem {
  id: string
  title: string
  category: string
  image: string
  description?: string
  date?: string
  client?: string
  location?: string
}

export interface TestimonialItem {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image?: string
  company?: string
}

export interface HeroContent {
  title: string
  subtitle: string
  primaryCTA: {
    text: string
    link: string
  }
  secondaryCTA?: {
    text: string
    link: string
  }
  backgroundImage?: string
}

export interface CTAContent {
  title: string
  description: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
}
