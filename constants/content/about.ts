import { PageContent } from '@/types/content/pages'
import { TEAM_MEMBERS, EXPERTISE_AREAS } from '../data/team'

export const ABOUT_CONTENT: PageContent = {
  meta: {
    title: 'Tentang Kami | SAV Interior',
    description: 'Pelajari lebih lanjut tentang SAV Interior, studio desain interior profesional yang mengutamakan kenyamanan dan estetika',
    keywords: ['tentang sav interior', 'studio desain interior', 'desainer interior profesional']
  },
  hero: {
    title: 'Menciptakan Ruang yang Bermakna',
    subtitle: 'Kami percaya bahwa setiap ruang memiliki potensi untuk menjadi tempat yang istimewa',
    backgroundImage: '/images/about/hero-bg.jpg',
    cta: {
      primary: {
        text: 'Konsultasi Gratis',
        href: '/consultation'
      }
    }
  },
  sections: [
    {
      id: 'vision-mission',
      type: 'text',
      title: 'Visi & Misi',
      content: {
        vision: {
          title: 'Visi Kami',
          description: 'Menjadi mitra terpercaya dalam menciptakan ruang yang menghadirkan keseimbangan antara fungsi dan estetika.'
        },
        mission: {
          title: 'Misi Kami',
          points: [
            'Memberikan solusi desain yang personal dan inovatif',
            'Mengutamakan kualitas dan detail dalam setiap proyek',
            'Menjalin kolaborasi yang berkelanjutan dengan klien dan mitra',
            'Mendukung penggunaan material dan praktik desain yang ramah lingkungan'
          ]
        }
      }
    },
    {
      id: 'values',
      type: 'cards',
      title: 'Nilai-Nilai Kami',
      content: {
        cards: [
          {
            title: 'Inovasi',
            description: 'Selalu mencari solusi kreatif dan mengikuti perkembangan tren desain',
            icon: 'Lightbulb'
          },
          {
            title: 'Kualitas',
            description: 'Berkomitmen pada standar tertinggi dalam setiap aspek pekerjaan',
            icon: 'Award'
          },
          {
            title: 'Kolaborasi',
            description: 'Membangun hubungan yang kuat dengan klien dan mitra',
            icon: 'Users'
          },
          {
            title: 'Keberlanjutan',
            description: 'Mengutamakan praktik desain yang ramah lingkungan',
            icon: 'Leaf'
          }
        ]
      }
    },
    {
      id: 'team',
      type: 'gallery',
      title: 'Tim Kami',
      content: {
        description: 'Bertemu dengan para profesional berbakat yang siap mewujudkan ruang impian Anda',
        members: TEAM_MEMBERS
      }
    },
    {
      id: 'expertise',
      type: 'cards',
      title: 'Keahlian Kami',
      content: {
        areas: EXPERTISE_AREAS
      }
    },
    {
      id: 'cta',
      type: 'cta',
      content: {
        title: 'Siap Memulai Proyek Anda?',
        description: 'Konsultasikan kebutuhan desain interior Anda dengan tim profesional kami',
        cta: {
          primary: {
            text: 'Konsultasi Gratis',
            href: '/consultation'
          },
          secondary: {
            text: 'Pelajari Layanan',
            href: '/services'
          }
        }
      }
    }
  ]
}
