import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesShowcase from '@/components/sections/ServicesShowcase'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
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
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <CTA />
    </main>
  )
}
