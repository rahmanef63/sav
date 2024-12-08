import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: 'Proyek Berkualitas',
    description: 'Akses ke proyek-proyek desain interior berkualitas tinggi'
  },
  {
    title: 'Penghasilan Kompetitif',
    description: 'Dapatkan penghasilan yang kompetitif dari setiap proyek'
  },
  {
    title: 'Fleksibilitas',
    description: 'Atur jadwal kerja Anda sendiri dengan fleksibilitas penuh'
  },
  {
    title: 'Dukungan Profesional',
    description: 'Dapatkan dukungan dan bimbingan dari tim profesional kami'
  }
]

const PartnerBenefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center space-x-4">
            <CheckCircle className="w-6 h-6 text-primary" />
            <CardTitle className="text-lg">{benefit.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{benefit.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default PartnerBenefits
