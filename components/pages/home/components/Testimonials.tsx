import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { TestimonialItem } from '@/types/home'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface TestimonialsProps {
  testimonials: TestimonialItem[]
  className?: string
  title?: string
  description?: string
}

const Testimonials = ({ 
  testimonials,
  className,
  title = "Apa Kata Mereka",
  description = "Dengarkan pengalaman langsung dari klien yang telah mempercayakan proyek mereka kepada kami"
}: TestimonialsProps) => {
  return (
    <section className={cn("py-20 bg-muted/50", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    {testimonial.company && (
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    )}
                  </div>
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
