import React from 'react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wujudkan Ruang Impian Anda
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Kami membantu Anda menciptakan ruang yang tidak hanya indah,
            tetapi juga fungsional dan mencerminkan kepribadian Anda.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Konsultasi Gratis</Button>
            <Button size="lg" variant="outline">
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
