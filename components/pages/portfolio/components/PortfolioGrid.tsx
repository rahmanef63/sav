import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Modern Minimalist Home',
    category: 'Residential',
    image: '/portfolio/project1.jpg'
  },
  {
    title: 'Contemporary Office Space',
    category: 'Commercial',
    image: '/portfolio/project2.jpg'
  },
  // Add more projects
]

const PortfolioGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="aspect-video relative">
            {/* Add image here */}
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default PortfolioGrid
