import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import { generateMetadata as getMetadata } from '@/lib/seo'
import { HOME_SEO } from '@/lib/seo'

const Stats = dynamic(() => import('@/components/sections/Stats'), { ssr: false })
const AboutPreview = dynamic(() => import('@/components/sections/AboutPreview'), { ssr: false })
const ServicesShowcase = dynamic(() => import('@/components/sections/ServicesShowcase'), { ssr: false })
const HorizontalShowcase = dynamic(() => import('@/components/sections/HorizontalShowcase'), { ssr: false })
const Process = dynamic(() => import('@/components/sections/Process'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: false })
const ServiceAreas = dynamic(() => import('@/components/sections/ServiceAreas'), { ssr: false })
const CTA = dynamic(() => import('@/components/sections/CTA'), { ssr: false })

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
