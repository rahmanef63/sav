import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ProjectItem } from '@/types/home'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface RecentProjectsProps {
  projects: ProjectItem[]
  className?: string
  title?: string
  description?: string
  viewAllLink?: string
}

const RecentProjects = ({ 
  projects, 
  className,
  title = "Proyek Terbaru",
  description = "Lihat beberapa proyek terbaru yang telah kami selesaikan",
  viewAllLink = "/portfolio"
}: RecentProjectsProps) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href={viewAllLink}>
              Lihat Semua
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group cursor-pointer">
              <Link href={`/portfolio/${project.id}`}>
                <div className="aspect-video relative">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary">Lihat Detail</Button>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  {project.location && (
                    <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                  )}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
