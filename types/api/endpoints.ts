import { ApiResponse, PaginatedResponse } from './response'
import { Project } from '../data/portfolio'
import { Service } from '../data/services'
import {
  LoginRequest,
  RegisterRequest,
  CreateProjectRequest,
  UpdateProjectRequest,
  ConsultationRequest,
  PartnerRegistrationRequest,
  ContactFormRequest
} from './requests'

export type ApiEndpoints = {
  // Auth Endpoints
  'POST /auth/login': {
    request: LoginRequest
    response: ApiResponse<{ token: string; user: any }>
  }
  'POST /auth/register': {
    request: RegisterRequest
    response: ApiResponse<{ token: string; user: any }>
  }
  'POST /auth/logout': {
    request: void
    response: ApiResponse<void>
  }

  // Project Endpoints
  'GET /projects': {
    request: {
      page?: number
      limit?: number
      category?: string
      featured?: boolean
    }
    response: PaginatedResponse<Project>
  }
  'GET /projects/:id': {
    request: void
    response: ApiResponse<Project>
  }
  'POST /projects': {
    request: CreateProjectRequest
    response: ApiResponse<Project>
  }
  'PUT /projects/:id': {
    request: UpdateProjectRequest
    response: ApiResponse<Project>
  }
  'DELETE /projects/:id': {
    request: void
    response: ApiResponse<void>
  }

  // Service Endpoints
  'GET /services': {
    request: void
    response: ApiResponse<Service[]>
  }
  'GET /services/:id': {
    request: void
    response: ApiResponse<Service>
  }

  // Form Submissions
  'POST /consultation': {
    request: ConsultationRequest
    response: ApiResponse<{ consultationId: string }>
  }
  'POST /partner/register': {
    request: PartnerRegistrationRequest
    response: ApiResponse<{ partnerId: string }>
  }
  'POST /contact': {
    request: ContactFormRequest
    response: ApiResponse<void>
  }
}

// Helper type to get request type for an endpoint
export type RequestType<T extends keyof ApiEndpoints> = ApiEndpoints[T]['request']

// Helper type to get response type for an endpoint
export type ResponseType<T extends keyof ApiEndpoints> = ApiEndpoints[T]['response']
