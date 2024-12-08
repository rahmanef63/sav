import React from 'react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Tentang SAV Interior</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Kami adalah studio desain interior yang berdedikasi untuk menciptakan ruang yang indah,
              fungsional, dan mencerminkan kepribadian klien kami.
            </p>
            <Button size="lg">Hubungi Kami</Button>
          </div>
          <div className="relative h-[400px]">
            {/* Add image here */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
