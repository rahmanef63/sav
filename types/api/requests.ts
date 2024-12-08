import { Project } from '../data/portfolio'
import { Service } from '../data/services'

// Authentication Requests
export interface LoginRequest {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
  role: 'client' | 'partner'
  phone?: string
  company?: string
}

// Project Requests
export interface CreateProjectRequest {
  title: string
  description: string
  category: string
  client: string
  location: string
  services: string[]
  images: {
    url: string
    alt: string
    isFeatured: boolean
  }[]
  stats?: {
    area: number
    duration: number
    budget: number
  }
}

export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {
  id: string
}

// Consultation Requests
export interface ConsultationRequest {
  name: string
  email: string
  phone: string
  projectType: 'residential' | 'commercial' | 'office'
  budget: number
  timeline: string
  description: string
  preferredContact: 'email' | 'phone' | 'whatsapp'
  attachments?: File[]
}

// Partner Registration
export interface PartnerRegistrationRequest {
  name: string
  email: string
  phone: string
  company: string
  experience: number
  portfolio?: File[]
  services: string[]
  locations: string[]
  about: string
  website?: string
  social?: {
    instagram?: string
    linkedin?: string
    facebook?: string
  }
}

// Contact Form
export interface ContactFormRequest {
  name: string
  email: string
  subject: string
  message: string
  newsletter?: boolean
}
