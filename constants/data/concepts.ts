export const DESIGN_CONCEPTS = [
  {
    id: 'minimalist',
    name: 'Minimalis Modern',
    description: 'Desain yang mengutamakan kesederhanaan dan fungsionalitas',
    characteristics: [
      'Garis-garis bersih',
      'Palet warna netral',
      'Furnitur multifungsi',
      'Ruang terbuka'
    ],
    suitableFor: [
      'Apartemen',
      'Rumah kecil',
      'Kantor modern'
    ]
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Gaya yang menampilkan elemen struktural dan material mentah',
    characteristics: [
      'Ekspos material',
      'Langit-langit tinggi',
      'Pencahayaan pendant',
      'Aksen metal'
    ],
    suitableFor: [
      'Loft',
      'Kantor kreatif',
      'Kafe'
    ]
  },
  {
    id: 'scandinavian',
    name: 'Skandinavia',
    description: 'Desain yang mengutamakan kehangatan dan kesederhanaan',
    characteristics: [
      'Warna-warna terang',
      'Material kayu',
      'Tekstur natural',
      'Pencahayaan alami'
    ],
    suitableFor: [
      'Rumah keluarga',
      'Apartemen',
      'Ruang kerja'
    ]
  }
]

export const STYLE_QUIZ = {
  questions: [
    {
      id: 1,
      text: 'Bagaimana gaya hidup Anda sehari-hari?',
      options: [
        { value: 'minimalist', text: 'Simpel dan terorganisir' },
        { value: 'industrial', text: 'Dinamis dan kreatif' },
        { value: 'scandinavian', text: 'Santai dan natural' }
      ]
    },
    // Add more questions
  ],
  scoring: {
    minimalist: {
      description: 'Anda cocok dengan gaya Minimalis Modern',
      recommendation: 'Fokus pada furnitur multifungsi dan storage yang efisien'
    },
    industrial: {
      description: 'Gaya Industrial cocok untuk Anda',
      recommendation: 'Pertimbangkan penggunaan material ekspos dan aksen metal'
    },
    scandinavian: {
      description: 'Gaya Skandinavia sesuai dengan preferensi Anda',
      recommendation: 'Gunakan material natural dan maksimalkan pencahayaan alami'
    }
  }
}
