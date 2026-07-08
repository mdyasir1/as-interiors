import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesShowcase from '@/components/sections/ServicesShowcase'
import HorizontalShowcase from '@/components/sections/HorizontalShowcase'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import ServiceAreas from '@/components/sections/ServiceAreas'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesShowcase />
      <HorizontalShowcase />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <CTA />
    </main>
  )
}
