import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesShowcase from '@/components/sections/ServicesShowcase'
import HorizontalShowcase from '@/components/sections/HorizontalShowcase'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import ServiceAreas from '@/components/sections/ServiceAreas'
import CTA from '@/components/sections/CTA'
import { generateMetadata as getMetadata } from '@/lib/seo'
import { HOME_SEO } from '@/lib/seo'

export const metadata: Metadata = getMetadata(HOME_SEO)

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
