export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'partner' | 'client'
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
  role: 'partner' | 'client'
}
