import { Service } from '@/types/data/services'

export const SERVICES: Service[] = [
  {
    id: 'interior-design',
    title: 'Desain Interior',
    slug: 'interior-design',
    description: 'Layanan desain interior komprehensif untuk berbagai jenis ruangan',
    shortDescription: 'Solusi desain interior profesional untuk ruang impian Anda',
    icon: 'PenTool',
    features: [
      {
        title: 'Konsep Desain',
        description: 'Pengembangan konsep desain yang sesuai dengan kebutuhan dan gaya Anda',
        icon: 'Lightbulb'
      },
      {
        title: 'Space Planning',
        description: 'Optimalisasi tata letak dan fungsi ruang',
        icon: 'LayoutGrid'
      },
      {
        title: 'Material Selection',
        description: 'Pemilihan material berkualitas yang sesuai dengan budget',
        icon: 'Palette'
      },
      {
        title: 'Visualisasi 3D',
        description: 'Render 3D untuk memvisualisasikan desain final',
        icon: 'Cube'
      }
    ],
    pricing: [
      {
        name: 'Basic',
        price: 150000,
        description: 'Paket dasar untuk ruangan tunggal',
        features: [
          'Konsultasi awal',
          'Konsep desain',
          'Layout 2D',
          'Material recommendation'
        ]
      },
      {
        name: 'Premium',
        price: 300000,
        description: 'Solusi lengkap untuk keseluruhan ruangan',
        features: [
          'Semua fitur Basic',
          'Visualisasi 3D',
          'Detail konstruksi',
          'Shopping list'
        ],
        isPopular: true
      }
    ],
    faqs: [
      {
        question: 'Berapa lama proses desain interior?',
        answer: 'Waktu yang dibutuhkan bervariasi tergantung kompleksitas proyek, umumnya 2-4 minggu untuk konsep desain.'
      },
      {
        question: 'Apakah bisa revisi desain?',
        answer: 'Ya, kami menyediakan 2 kali revisi untuk memastikan hasil sesuai dengan keinginan Anda.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Konsultasi',
        description: 'Diskusi awal untuk memahami kebutuhan dan preferensi Anda',
        icon: 'MessageCircle'
      },
      {
        step: 2,
        title: 'Konsep Desain',
        description: 'Pengembangan konsep dan mood board',
        icon: 'Palette'
      },
      {
        step: 3,
        title: 'Pengembangan',
        description: 'Detail desain dan visualisasi',
        icon: 'PenTool'
      },
      {
        step: 4,
        title: 'Finalisasi',
        description: 'Revisi dan finalisasi desain',
        icon: 'CheckCircle'
      }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovasi',
    slug: 'renovation',
    description: 'Layanan renovasi profesional untuk memperbarui ruangan Anda',
    shortDescription: 'Ubah ruangan Anda menjadi lebih baik dengan layanan renovasi kami',
    icon: 'Tool',
    features: [
      {
        title: 'Perencanaan Renovasi',
        description: 'Perencanaan detail untuk proses renovasi yang efisien',
        icon: 'ClipboardList'
      },
      {
        title: 'Manajemen Proyek',
        description: 'Pengawasan proyek dari awal hingga akhir',
        icon: 'GitBranch'
      },
      {
        title: 'Quality Control',
        description: 'Kontrol kualitas untuk hasil terbaik',
        icon: 'Shield'
      }
    ],
    pricing: [
      {
        name: 'Standard',
        price: 500000,
        description: 'Renovasi ringan untuk ruangan tunggal',
        features: [
          'Konsultasi',
          'Perencanaan renovasi',
          'Pengawasan proyek',
          'Quality control'
        ]
      },
      {
        name: 'Complete',
        price: 1000000,
        description: 'Renovasi menyeluruh untuk multiple ruangan',
        features: [
          'Semua fitur Standard',
          'Material procurement',
          'Custom furniture',
          'After service support'
        ],
        isPopular: true
      }
    ],
    faqs: [
      {
        question: 'Berapa lama proses renovasi?',
        answer: 'Waktu renovasi bervariasi, umumnya 1-3 bulan tergantung skala proyek.'
      },
      {
        question: 'Apakah termasuk material?',
        answer: 'Ya, kami menyediakan opsi paket termasuk material atau hanya jasa renovasi.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Survey',
        description: 'Survey lokasi dan analisis kebutuhan',
        icon: 'Search'
      },
      {
        step: 2,
        title: 'Perencanaan',
        description: 'Perencanaan detail renovasi',
        icon: 'FileText'
      },
      {
        step: 3,
        title: 'Eksekusi',
        description: 'Pelaksanaan renovasi',
        icon: 'Tool'
      },
      {
        step: 4,
        title: 'Finishing',
        description: 'Quality control dan finishing',
        icon: 'CheckSquare'
      }
    ]
  }
]
