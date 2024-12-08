import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedServices from './components/FeaturedServices'
import RecentProjects from './components/RecentProjects'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedServices />
      <RecentProjects />
      <Testimonials />
      <CallToAction />
    </main>
  )
}

export default LandingPage
