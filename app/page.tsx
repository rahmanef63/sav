'use client';

import { useState } from 'react'
import { HomeHero } from "@/components/pages/home/hero"
import { FeaturedPortfolios } from "@/components/pages/home/featured-portfolios"
import { LatestBlogs } from "@/components/pages/home/latest-blogs"
import { PartnerCTA } from "@/components/pages/home/partner-cta"
import { HOME_HERO } from '@/constants/content/hero';
import  QuizSection  from '@/components/modal/quiz/QuizSection';

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HomeHero />
      <QuizSection />
      <FeaturedPortfolios />
      <LatestBlogs />
      <PartnerCTA />
    </main>
  )
}