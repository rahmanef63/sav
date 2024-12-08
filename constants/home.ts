import { 
  HeroContent, 
  ServiceItem, 
  ProjectItem, 
  TestimonialItem, 
  CTAContent 
} from '@/types/home'
import { createIconComponent } from '@/lib/icons'
import { 
  HERO_DATA, 
  SERVICES_DATA, 
  PROJECTS_DATA, 
  TESTIMONIALS_DATA, 
  CTA_DATA 
} from './data/home'

export const HERO_CONTENT: HeroContent = {
  title: HERO_DATA.title,
  subtitle: HERO_DATA.subtitle,
  primaryCTA: HERO_DATA.cta.primary,
  secondaryCTA: HERO_DATA.cta.secondary
}

export const FEATURED_SERVICES: ServiceItem[] = SERVICES_DATA.map(service => ({
  title: service.title,
  description: service.description,
  icon: createIconComponent(service.Icon),
  link: `/services/${service.slug}`
}))

export const FEATURED_PROJECTS: ProjectItem[] = PROJECTS_DATA.map(project => ({
  ...project
}))

export const TESTIMONIALS: TestimonialItem[] = TESTIMONIALS_DATA.map(testimonial => ({
  ...testimonial
}))

export const CTA_CONTENT: CTAContent = {
  ...CTA_DATA
}
