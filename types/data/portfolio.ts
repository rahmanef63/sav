export interface Project {
  id: string
  title: string
  slug: string
  description: string
  category: ProjectCategory
  images: ProjectImage[]
  client: string
  location: string
  completionDate: string
  services: string[]
  tags: string[]
  featured: boolean
  stats?: ProjectStats
  testimonial?: ProjectTestimonial
}

export interface ProjectCategory {
  id: string
  name: string
  slug: string
  description?: string
}

export interface ProjectImage {
  id: string
  url: string
  alt: string
  isFeatured: boolean
  width: number
  height: number
}

export interface ProjectStats {
  area: number // in square meters
  duration: number // in days
  budget: number
}

export interface ProjectTestimonial {
  clientName: string
  role: string
  content: string
  rating: number
  image?: string
}
