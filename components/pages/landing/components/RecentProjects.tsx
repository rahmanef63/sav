import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Modern Minimalist Home',
    category: 'Residential',
    image: '/portfolio/project1.jpg'
  },
  {
    title: 'Creative Office Space',
    category: 'Commercial',
    image: '/portfolio/project2.jpg'
  },
  {
    title: 'Luxury Apartment',
    category: 'Residential',
    image: '/portfolio/project3.jpg'
  }
]

const RecentProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Proyek Terbaru</h2>
            <p className="text-muted-foreground">
              Lihat beberapa proyek terbaru yang telah kami selesaikan
            </p>
          </div>
          <Button variant="outline">
            Lihat Semua
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="aspect-video relative">
                {/* Add image here */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary">Lihat Detail</Button>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
