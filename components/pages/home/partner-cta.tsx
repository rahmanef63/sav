"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PartnerCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Designer Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Showcase your work to thousands of potential clients and connect with other designers
          </p>
          <Button size="lg" variant="secondary">
            Apply as Partner
          </Button>
        </motion.div>
      </div>
    </section>
  )
}