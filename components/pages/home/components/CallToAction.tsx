import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { CTAContent } from '@/types/home'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CallToActionProps {
  content: CTAContent
  className?: string
}

const CallToAction = ({ content, className }: CallToActionProps) => {
  const { title, description, primaryButton, secondaryButton } = content

  return (
    <section className={cn("py-20 bg-primary text-primary-foreground", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={primaryButton.link}>
                {primaryButton.text}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            {secondaryButton && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryButton.link}>
                  {secondaryButton.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
