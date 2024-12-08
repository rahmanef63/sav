import { Home, Building2, Store, Paintbrush, LucideIcon } from 'lucide-react'
import { ServiceItem, ProjectItem, TestimonialItem, HeroContent, CTAContent } from '@/types/home'
import { Service } from '@/types/data/services'
import { IconType } from '@/types/common'

export const HERO_DATA = {
  title: 'Wujudkan Ruang Impian Anda',
  subtitle: 'Kami membantu Anda menciptakan ruang yang tidak hanya indah, tetapi juga fungsional dan mencerminkan kepribadian Anda.',
  cta: {
    primary: {
      text: 'Konsultasi Gratis',
      link: '/consultation'
    },
    secondary: {
      text: 'Lihat Portfolio',
      link: '/portfolio'
    }
  }
} as const

type ServiceData = Omit<Service, 'features' | 'pricing' | 'faqs' | 'process' | 'icon'> & {
  iconName: string
  Icon: LucideIcon
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 'residential',
    title: 'Desain Rumah',
    slug: 'desain-rumah',
    description: 'Desain interior rumah yang nyaman dan sesuai gaya hidup Anda',
    shortDescription: 'Desain interior rumah yang nyaman',
    iconName: 'home',
    Icon: Home
  },
  {
    id: 'office',
    title: 'Desain Kantor',
    slug: 'desain-kantor',
    description: 'Ruang kerja yang meningkatkan produktivitas dan kolaborasi',
    shortDescription: 'Ruang kerja yang produktif',
    iconName: 'building2',
    Icon: Building2
  },
  {
    id: 'commercial',
    title: 'Desain Komersial',
    slug: 'desain-komersial',
    description: 'Desain yang menarik untuk ruang retail dan komersial',
    shortDescription: 'Desain retail dan komersial',
    iconName: 'store',
    Icon: Store
  },
  {
    id: 'consultation',
    title: 'Konsultasi Desain',
    slug: 'konsultasi-desain',
    description: 'Konsultasi profesional untuk kebutuhan desain interior Anda',
    shortDescription: 'Konsultasi desain profesional',
    iconName: 'paintbrush',
    Icon: Paintbrush
  }
] as const

export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'Modern Minimalist Home',
    category: 'residential',
    image: '/projects/home-1.jpg',
    description: 'Desain rumah minimalis modern dengan sentuhan alami',
    date: '2023',
    client: 'Keluarga Sanjaya',
    location: 'Jakarta Selatan'
  },
  {
    id: '2',
    title: 'Creative Office Space',
    category: 'office',
    image: '/projects/office-1.jpg',
    description: 'Ruang kerja kreatif untuk startup teknologi',
    date: '2023',
    client: 'TechStart Indonesia',
    location: 'Jakarta Pusat'
  }
] as const

export const TESTIMONIALS_DATA = [
  {
    id: '1',
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'TechStart Indonesia',
    content: 'SAV Design Studio berhasil menciptakan ruang kerja yang luar biasa untuk tim kami. Sangat puas dengan hasilnya!',
    rating: 5,
    image: '/testimonials/person-1.jpg'
  },
  {
    id: '2',
    name: 'Linda Wijaya',
    role: 'Homeowner',
    content: 'Terima kasih SAV Design Studio telah mewujudkan rumah impian kami. Hasilnya melebihi ekspektasi!',
    rating: 5,
    image: '/testimonials/person-2.jpg'
  }
] as const

export const CTA_DATA = {
  title: 'Siap Mewujudkan Ruang Impian Anda?',
  description: 'Konsultasikan kebutuhan desain interior Anda dengan tim profesional kami',
  primaryButton: {
    text: 'Konsultasi Gratis',
    link: '/consultation'
  },
  secondaryButton: {
    text: 'Pelajari Lebih Lanjut',
    link: '/about'
  }
} as const
