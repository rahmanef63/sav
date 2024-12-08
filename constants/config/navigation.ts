import { NavItem } from '@/types/common/ui'
import { ROUTES } from './routes'
import { 
  Home, 
  Info, 
  Briefcase, 
  Image, 
  FileText, 
  Mail,
  UserPlus 
} from 'lucide-react'

export const MAIN_NAV: NavItem[] = [
  {
    title: 'Beranda',
    href: ROUTES.HOME,
    icon: Home
  },
  {
    title: 'Tentang Kami',
    href: ROUTES.ABOUT,
    icon: Info
  },
  {
    title: 'Layanan',
    href: ROUTES.SERVICES,
    icon: Briefcase,
    children: [
      {
        title: 'Desain Rumah',
        href: `${ROUTES.SERVICES}/residential`,
        description: 'Layanan desain interior untuk hunian'
      },
      {
        title: 'Desain Kantor',
        href: `${ROUTES.SERVICES}/office`,
        description: 'Solusi desain ruang kerja profesional'
      },
      {
        title: 'Desain Komersial',
        href: `${ROUTES.SERVICES}/commercial`,
        description: 'Desain untuk ruang retail dan komersial'
      }
    ]
  },
  {
    title: 'Portofolio',
    href: ROUTES.PORTFOLIO,
    icon: Image
  },
  {
    title: 'Blog',
    href: ROUTES.BLOG,
    icon: FileText
  },
  {
    title: 'Kontak',
    href: ROUTES.CONTACT,
    icon: Mail
  },
  {
    title: 'Daftar Mitra',
    href: ROUTES.PARTNER,
    icon: UserPlus
  }
]

export const ADMIN_NAV: NavItem[] = [
  {
    title: 'Dashboard',
    href: ROUTES.ADMIN.DASHBOARD,
    icon: Home
  },
  {
    title: 'Mitra',
    href: ROUTES.ADMIN.PARTNERS,
    icon: UserPlus
  },
  {
    title: 'Proyek',
    href: ROUTES.ADMIN.PROJECTS,
    icon: Briefcase
  },
  {
    title: 'Blog',
    href: ROUTES.ADMIN.BLOG,
    icon: FileText
  },
  {
    title: 'Pengaturan',
    href: ROUTES.ADMIN.SETTINGS,
    icon: Mail
  }
]
