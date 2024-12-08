"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HomeHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-background to-secondary">
      <div className="container px-4 mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to DYNAMIS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Connect with top interior designers, explore stunning portfolios, and stay updated with the latest design trends
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Button size="lg" variant="default">
            Explore Portfolios
          </Button>
          <Button size="lg" variant="outline">
            Read Blog
          </Button>
        </motion.div>
      </div>
    </section>
  )
}