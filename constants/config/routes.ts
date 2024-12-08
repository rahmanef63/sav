export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  BLOG: '/blog',
  CONTACT: '/contact',
  CONSULTATION: '/consultation',
  PARTNER: '/partner',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password'
  },
  ADMIN: {
    DASHBOARD: '/admin',
    PARTNERS: '/admin/partners',
    PROJECTS: '/admin/projects',
    BLOG: '/admin/blog',
    SETTINGS: '/admin/settings'
  }
} as const
