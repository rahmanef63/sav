import React from 'react'
import Hero from './components/Hero'
import FeaturedServices from './components/FeaturedServices'
import RecentProjects from './components/RecentProjects'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import { 
  HERO_CONTENT, 
  FEATURED_SERVICES, 
  FEATURED_PROJECTS, 
  TESTIMONIALS,
  CTA_CONTENT 
} from '@/constants/home'

const HomePage = () => {
  return (
    <main>
      <Hero content={HERO_CONTENT} />
      <FeaturedServices services={FEATURED_SERVICES} />
      <RecentProjects projects={FEATURED_PROJECTS} />
      <Testimonials testimonials={TESTIMONIALS} />
      <CallToAction content={CTA_CONTENT} />
    </main>
  )
}

export default HomePage
