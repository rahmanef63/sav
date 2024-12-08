import Hero from '@/components/pages/about/components/Hero'
import Team from '@/components/pages/about/components/Team'
import Values from '@/components/pages/about/components/Values'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Values />
      <Team />
    </main>
  )
}