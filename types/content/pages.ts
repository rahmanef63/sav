import { MetaData } from '../common/ui'

export interface PageContent {
  meta: MetaData
  hero?: HeroSection
  sections: Section[]
}

export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage?: string
  cta: {
    primary?: ActionButton
    secondary?: ActionButton
  }
}

export interface Section {
  id: string
  type: 'text' | 'gallery' | 'cards' | 'form' | 'cta'
  title?: string
  content: any
  style?: Record<string, string>
}

export interface ActionButton {
  text: string
  href: string
  variant?: 'default' | 'outline' | 'ghost'
}
