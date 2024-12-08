import { Project, ProjectCategory } from '@/types/data/portfolio'

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'residential',
    name: 'Residential',
    slug: 'residential',
    description: 'Proyek desain interior untuk hunian pribadi'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    slug: 'commercial',
    description: 'Desain ruang komersial dan retail'
  },
  {
    id: 'office',
    name: 'Office',
    slug: 'office',
    description: 'Solusi desain ruang kerja profesional'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    slug: 'hospitality',
    description: 'Desain untuk hotel dan restoran'
  }
]

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Minimalist Home',
    slug: 'modern-minimalist-home',
    description: 'Desain interior minimalis untuk rumah modern di Jakarta Selatan',
    category: PROJECT_CATEGORIES[0],
    images: [
      {
        id: '1',
        url: '/images/portfolio/project-1/main.jpg',
        alt: 'Living Room View',
        isFeatured: true,
        width: 1920,
        height: 1080
      }
    ],
    client: 'Keluarga Wijaya',
    location: 'Jakarta Selatan',
    completionDate: '2023-12',
    services: ['Interior Design', 'Furniture Selection', 'Lighting Design'],
    tags: ['minimalist', 'modern', 'residential'],
    featured: true,
    stats: {
      area: 150,
      duration: 90,
      budget: 250000000
    }
  },
  {
    id: '2',
    title: 'Creative Office Space',
    slug: 'creative-office-space',
    description: 'Ruang kerja kreatif untuk startup teknologi',
    category: PROJECT_CATEGORIES[2],
    images: [
      {
        id: '1',
        url: '/images/portfolio/project-2/main.jpg',
        alt: 'Office Overview',
        isFeatured: true,
        width: 1920,
        height: 1080
      }
    ],
    client: 'TechStart Indonesia',
    location: 'Jakarta Pusat',
    completionDate: '2023-10',
    services: ['Space Planning', 'Interior Design', 'Custom Furniture'],
    tags: ['office', 'modern', 'creative'],
    featured: true,
    stats: {
      area: 300,
      duration: 120,
      budget: 500000000
    }
  }
]

export const PORTFOLIO_FILTERS = {
  categories: PROJECT_CATEGORIES.map(cat => ({
    value: cat.id,
    label: cat.name
  })),
  sortOptions: [
    { value: 'latest', label: 'Terbaru' },
    { value: 'oldest', label: 'Terlama' },
    { value: 'budget-high', label: 'Budget Tertinggi' },
    { value: 'budget-low', label: 'Budget Terendah' }
  ],
  serviceTypes: [
    { value: 'interior-design', label: 'Interior Design' },
    { value: 'renovation', label: 'Renovation' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'furniture', label: 'Custom Furniture' }
  ]
}
