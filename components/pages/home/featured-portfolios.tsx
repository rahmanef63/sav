"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function FeaturedPortfolios() {
  const portfolios = [
    {
      id: 1,
      title: "Modern Minimalist Home",
      designer: "Jane Cooper",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
      category: "Residential"
    },
    {
      id: 2,
      title: "Urban Coffee Shop",
      designer: "John Smith",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Luxury Villa Design",
      designer: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      category: "Residential"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Portfolios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{portfolio.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {portfolio.designer}</p>
                  <p className="text-sm text-primary mt-2">{portfolio.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}