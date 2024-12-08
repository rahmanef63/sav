export const FAQ_CATEGORIES = [
  {
    id: 'general',
    title: 'Umum',
    icon: 'HelpCircle',
    questions: [
      {
        question: 'Apa itu SAV Interior?',
        answer: 'SAV Interior adalah studio desain interior profesional yang fokus pada menciptakan ruang yang nyaman dan estetis untuk klien kami. Kami menyediakan layanan desain interior lengkap dari konsultasi hingga implementasi.'
      },
      {
        question: 'Dimana lokasi kantor SAV Interior?',
        answer: 'Kantor kami berlokasi di Jakarta Selatan. Namun kami melayani proyek di seluruh Jabodetabek dan kota-kota besar lainnya di Indonesia.'
      },
      {
        question: 'Apakah SAV Interior memiliki portofolio?',
        answer: 'Ya, Anda dapat melihat portofolio proyek kami di halaman Portfolio. Kami telah menyelesaikan berbagai proyek dari residential hingga commercial.'
      }
    ]
  },
  {
    id: 'services',
    title: 'Layanan',
    icon: 'Package',
    questions: [
      {
        question: 'Apa saja layanan yang ditawarkan?',
        answer: 'Kami menawarkan layanan desain interior lengkap termasuk konsultasi, perencanaan ruang, desain 3D, pemilihan material, dan pengawasan proyek.'
      },
      {
        question: 'Berapa lama proses desain interior?',
        answer: 'Waktu yang dibutuhkan bervariasi tergantung kompleksitas proyek. Umumnya 2-4 minggu untuk konsep desain dan 2-3 bulan untuk implementasi.'
      },
      {
        question: 'Apakah bisa request revisi desain?',
        answer: 'Ya, kami menyediakan kesempatan revisi sesuai dengan paket yang dipilih. Paket Basic mendapat 2 kali revisi, Premium 3 kali, dan Enterprise 5 kali revisi.'
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Biaya',
    icon: 'DollarSign',
    questions: [
      {
        question: 'Berapa biaya desain interior?',
        answer: 'Biaya bervariasi tergantung luas ruangan dan kompleksitas proyek. Kami memiliki paket mulai dari Rp 150.000/m² untuk Basic hingga Rp 500.000/m² untuk Enterprise.'
      },
      {
        question: 'Apakah ada biaya konsultasi awal?',
        answer: 'Konsultasi awal gratis untuk mengetahui kebutuhan dan budget Anda. Setelah itu kami akan merekomendasikan paket yang sesuai.'
      },
      {
        question: 'Bagaimana sistem pembayaran?',
        answer: 'Kami menerapkan sistem pembayaran bertahap: 50% di awal, 30% setelah approval desain, dan 20% setelah proyek selesai.'
      }
    ]
  },
  {
    id: 'process',
    title: 'Proses Kerja',
    icon: 'GitBranch',
    questions: [
      {
        question: 'Bagaimana proses kerja SAV Interior?',
        answer: 'Proses dimulai dari konsultasi, pengembangan konsep, desain detail, approval, hingga implementasi. Setiap tahap akan dikomunikasikan dengan jelas.'
      },
      {
        question: 'Apakah klien dilibatkan dalam proses desain?',
        answer: 'Ya, kami menerapkan proses kolaboratif dimana klien dilibatkan dalam setiap pengambilan keputusan penting.'
      },
      {
        question: 'Bagaimana dengan pengawasan proyek?',
        answer: 'Kami menyediakan layanan pengawasan proyek untuk memastikan implementasi sesuai dengan desain yang disetujui.'
      }
    ]
  }
]

export const QUICK_FAQS = FAQ_CATEGORIES.reduce((acc, category) => {
  return [...acc, ...category.questions]
}, [] as typeof FAQ_CATEGORIES[0]['questions'])

export const FAQ_SEARCH_TAGS = [
  'biaya',
  'harga',
  'durasi',
  'waktu',
  'revisi',
  'konsultasi',
  'pembayaran',
  'lokasi',
  'portofolio',
  'proses',
  'pengawasan',
  'material'
]
