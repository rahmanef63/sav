"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function LatestBlogs() {
  const blogs = [
    {
      id: 1,
      title: "2024 Interior Design Trends",
      author: "Emma Wilson",
      date: "March 15, 2024",
      excerpt: "Discover the latest trends shaping interior design this year..."
    },
    {
      id: 2,
      title: "Sustainable Materials in Modern Homes",
      author: "Michael Brown",
      date: "March 14, 2024",
      excerpt: "How to incorporate eco-friendly materials in your design..."
    },
    {
      id: 3,
      title: "Color Psychology in Interior Design",
      author: "Lisa Chen",
      date: "March 13, 2024",
      excerpt: "Understanding how colors affect mood and atmosphere..."
    }
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest from the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between text-sm">
                    <span>{blog.author}</span>
                    <span className="text-muted-foreground">{blog.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}