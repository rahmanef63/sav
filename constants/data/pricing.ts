export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Solusi dasar untuk ruangan tunggal',
    price: {
      amount: 150000,
      unit: 'per m²'
    },
    features: [
      'Konsultasi desain',
      'Layout 2D',
      'Mood board',
      'Material recommendation',
      'Shopping list'
    ],
    limitations: [
      'Maksimal 1 ruangan',
      '2 kali revisi',
      'Tidak termasuk visualisasi 3D'
    ],
    recommended: false
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Solusi lengkap untuk keseluruhan ruangan',
    price: {
      amount: 300000,
      unit: 'per m²'
    },
    features: [
      'Semua fitur Basic',
      'Multiple ruangan',
      'Visualisasi 3D',
      'Detail konstruksi',
      'Custom furniture design',
      'Project supervision'
    ],
    limitations: [
      'Maksimal 3 ruangan',
      '3 kali revisi',
      'Dalam satu area/lantai'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solusi premium untuk proyek besar',
    price: {
      amount: 500000,
      unit: 'per m²'
    },
    features: [
      'Semua fitur Premium',
      'Unlimited ruangan',
      'VR visualization',
      'Detail engineering',
      'Material procurement',
      'Full project management'
    ],
    limitations: [
      'Minimal luas 200m²',
      '5 kali revisi',
      'Multiple lantai'
    ],
    recommended: false
  }
]

export const ADDITIONAL_SERVICES = [
  {
    id: 'consultation',
    name: 'Konsultasi Desain',
    price: 500000,
    unit: 'per sesi',
    duration: '2 jam'
  },
  {
    id: '3d-render',
    name: 'Visualisasi 3D',
    price: 1000000,
    unit: 'per view',
    notes: 'Minimal 3 view'
  },
  {
    id: 'supervision',
    name: 'Pengawasan Proyek',
    price: 2500000,
    unit: 'per bulan',
    notes: 'Termasuk site visit 2x seminggu'
  }
]

export const PAYMENT_TERMS = {
  downPayment: 50,
  installments: [
    {
      percentage: 30,
      milestone: 'Setelah approval desain'
    },
    {
      percentage: 20,
      milestone: 'Setelah selesai proyek'
    }
  ],
  methods: [
    'Bank Transfer',
    'Credit Card',
    'Cicilan 0%'
  ]
}
