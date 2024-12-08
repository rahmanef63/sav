import { LucideIcon } from 'lucide-react'

export interface MenuItem {
  title: string
  href: string
  icon?: LucideIcon
  description?: string
  disabled?: boolean
}

export interface NavItem extends MenuItem {
  children?: MenuItem[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: LucideIcon
}

export interface MetaData {
  title: string
  description: string
  keywords?: string[]
  image?: string
}
