import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const values = [
  {
    title: 'Kualitas',
    description: 'Kami berkomitmen untuk memberikan desain dan layanan berkualitas tinggi.'
  },
  {
    title: 'Inovasi',
    description: 'Selalu mengikuti tren terbaru dan menciptakan solusi kreatif.'
  },
  {
    title: 'Kepuasan Klien',
    description: 'Kepuasan klien adalah prioritas utama dalam setiap proyek.'
  }
]

const Values = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nilai-Nilai Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
