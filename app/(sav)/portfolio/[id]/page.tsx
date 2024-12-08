"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, Share2 } from "lucide-react"
import Link from "next/link"

// Mock data - In a real app, this would come from your database
const portfolioData = {
  id: "1",
  title: "Modern Minimalist Villa",
  designer: "Sarah Anderson",
  location: "Beverly Hills, CA",
  year: "2024",
  category: "Residential",
  description: "A stunning modern villa that embraces minimalist design principles while maintaining warmth and functionality. The project focuses on clean lines, natural materials, and abundant natural light.",
  images: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80"
  ],
  details: [
    "5,000 sq ft living space",
    "4 bedrooms, 5 bathrooms",
    "Open concept living area",
    "Custom furniture throughout",
    "Smart home integration"
  ]
}

export default function PortfolioPage() {
  const params = useParams()
  const { id } = params

  return (
    <main className="min-h-screen py-10">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" asChild>
              <Link href="/portfolio" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Portfolio</span>
              </Link>
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {portfolioData.images.map((image, index) => (
                  <Card key={index}>
                    <CardContent className="p-2">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image}
                          alt={`${portfolioData.title} - Image ${index + 1}`}
                          className="rounded-md object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h1 className="text-3xl font-bold mb-4">{portfolioData.title}</h1>
                  <p className="text-muted-foreground mb-4">by {portfolioData.designer}</p>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground">{portfolioData.location}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Year</h3>
                      <p className="text-muted-foreground">{portfolioData.year}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Category</h3>
                      <p className="text-muted-foreground">{portfolioData.category}</p>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h3 className="font-semibold mb-4">Project Details</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {portfolioData.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-6" />

                  <p className="text-muted-foreground">{portfolioData.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}