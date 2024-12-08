import React from 'react'
import Hero from './components/Hero'
import Team from './components/Team'
import Values from './components/Values'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
      <Hero />
      <Values />
      <Team />
    </div>
  )
}

export default AboutPage
