import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Building2, Store, Paintbrush } from 'lucide-react'

const services = [
  {
    title: 'Desain Rumah',
    description: 'Desain interior rumah yang nyaman dan sesuai gaya hidup Anda',
    icon: <Home className="w-10 h-10" />
  },
  {
    title: 'Desain Kantor',
    description: 'Ruang kerja yang meningkatkan produktivitas dan kolaborasi',
    icon: <Building2 className="w-10 h-10" />
  },
  {
    title: 'Desain Komersial',
    description: 'Desain yang menarik untuk ruang retail dan komersial',
    icon: <Store className="w-10 h-10" />
  },
  {
    title: 'Konsultasi',
    description: 'Konsultasi profesional untuk kebutuhan desain interior Anda',
    icon: <Paintbrush className="w-10 h-10" />
  }
]

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan desain interior profesional untuk memenuhi kebutuhan Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
