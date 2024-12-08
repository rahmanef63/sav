import { SocialLink } from '@/types/common/ui'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/savinterior',
    icon: Instagram
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/savinterior',
    icon: Facebook
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/savinterior',
    icon: Twitter
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/savinterior',
    icon: Linkedin
  }
]

export const CONTACT_CHANNELS = [
  {
    name: 'WhatsApp',
    value: '+62 812-3456-7890',
    link: 'https://wa.me/6281234567890'
  },
  {
    name: 'Email',
    value: 'info@savinterior.com',
    link: 'mailto:info@savinterior.com'
  },
  {
    name: 'Office',
    value: 'Jl. Example No. 123, Jakarta',
    link: 'https://goo.gl/maps/example'
  }
]
