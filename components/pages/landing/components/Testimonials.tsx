import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Homeowner',
    content: 'SAV Interior mengubah rumah kami menjadi tempat yang lebih nyaman dan indah. Proses kerja mereka sangat profesional.',
    rating: 5
  },
  {
    name: 'Jane Smith',
    role: 'Business Owner',
    content: 'Desain kantor yang mereka buat sangat membantu meningkatkan produktivitas tim kami. Terima kasih SAV Interior!',
    rating: 5
  },
  {
    name: 'David Wilson',
    role: 'Restaurant Owner',
    content: 'Restoran kami mendapatkan banyak pujian dari pelanggan berkat desain interior yang dibuat oleh SAV Interior.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengarkan pengalaman langsung dari klien yang telah mempercayakan proyek mereka kepada kami
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
