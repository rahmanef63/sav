'use client';

import { motion } from 'framer-motion';
import { DESIGN_STYLES } from '@/constants/data/quiz-questions/styles';
import { ROUTES } from '@/constants/data/quiz-questions/routes';
import { Button } from '@/components/ui/button';
import { StyleCard } from '@/components/ui/style-card';
import Link from 'next/link';
import { ArrowRight, Compass, Palette, Users } from 'lucide-react';
import { QuizButton } from './QuizButton';

export default function QuizSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <Compass className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Perfect
            <span className="text-primary block">Interior Design Style</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take our interactive quiz to find the perfect interior design style that matches
            your personality and preferences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <QuizButton />
            <Link href={ROUTES.STYLES}>
              <Button size="lg" variant="outline" className="text-lg">
                Explore Styles
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Quiz?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Personalized Results',
                description: 'Get tailored recommendations based on your unique preferences and lifestyle.'
              },
              {
                icon: Users,
                title: 'Expert Insights',
                description: 'Benefit from professional interior designers\' knowledge and experience.'
              },
              {
                icon: Compass,
                title: 'Practical Guidance',
                description: 'Receive actionable tips and suggestions to implement your style.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-background shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Styles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Popular Design Styles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(DESIGN_STYLES).map((style, index) => (
              <StyleCard key={style.id} style={style} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={ROUTES.STYLES}>
              <Button size="lg" variant="outline">
                View All Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}