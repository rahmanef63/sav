import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroContent } from '@/types/home'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface HeroProps {
  content: HeroContent
  className?: string
}

const Hero = ({ content, className }: HeroProps) => {
  const { title, subtitle, primaryCTA, secondaryCTA, backgroundImage } = content

  return (
    <section 
      className={cn(
        "relative h-[90vh] flex items-center",
        className
      )}
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {subtitle}
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href={primaryCTA.link}>
                {primaryCTA.text}
              </Link>
            </Button>
            {secondaryCTA && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCTA.link}>
                  {secondaryCTA.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
