import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ServiceItem } from '@/types/home'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FeaturedServicesProps {
  services: ServiceItem[]
  className?: string
  title?: string
  description?: string
}

const FeaturedServices = ({ 
  services, 
  className,
  title = "Layanan Kami",
  description = "Kami menyediakan berbagai layanan desain interior profesional untuk memenuhi kebutuhan Anda"
}: FeaturedServicesProps) => {
  return (
    <section className={cn("py-20 bg-muted/50", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="text-center">
                <Link href={service.link || '#'}>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {Icon && <Icon className="w-10 h-10" />}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
