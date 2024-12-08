import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mewujudkan Ruang Impian Anda?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Konsultasikan kebutuhan desain interior Anda dengan tim profesional kami.
            Kami siap membantu mewujudkan ruang impian yang sesuai dengan gaya dan kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Konsultasi Gratis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
