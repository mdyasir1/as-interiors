'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Phone } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Button from '@/components/ui/Button'
import FeatureList from '@/components/ui/FeatureList'
import { SERVICES, SITE_CONFIG } from '@/lib/constants'

const service = SERVICES.find(s => s.id === 'mosquito-doors')!

const types = [
  'Aluminium Open Mosquito Doors',
  'Open Grill Mosquito Doors',
  'Sliding Mosquito Doors',
  'Metal Security Mosquito Doors',
  'Fibre Magnetic Mosquito Curtain',
]

const benefits = [
  'Lock System for Security',
  'Waterproof Materials',
  'Rustproof Construction',
  'Termite Proof',
  'Heavy Quality Material',
  'Easy Maintenance',
]

export default function MosquitoDoorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        </div>
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-accent-gold mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">All Services</span>
          </Link>
          <AnimatedText as="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Mosquito Doors
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl mb-8">
              Premium mosquito protection doors starting at just ₹1,499. Keep your home
              mosquito-free without compromising on style.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                Get Free Quote
              </Button>
              <div className="bg-white/10 rounded-xl px-6 py-3">
                <p className="text-xs text-primary-400">Starting from</p>
                <p className="text-2xl font-bold text-accent-gold">₹1,499</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper bg="light" className="py-16 sm:py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <FadeIn direction="left">
              <h2 className="text-2xl sm:text-3xl font-serif text-primary-800 mb-6">
                Types Available
              </h2>
              <div className="space-y-4 mb-8">
                {types.map((type) => (
                  <div key={type} className="flex items-center gap-3 p-4 bg-white rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-gold" />
                    </div>
                    <span className="text-primary-700">{type}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h3 className="text-xl font-serif text-primary-800 mb-4">Window Types</h3>
              <ul className="space-y-2 text-primary-600 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  PVC Mosquito Mats
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  1 Inch Window Mosquito Door
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  Sleek Panel Mosquito Frames
                </li>
              </ul>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="right">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
                <ImagePlaceholder text="Mosquito Doors" className="w-full h-full" />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <h3 className="text-xl font-serif text-primary-800 mb-4">Key Benefits</h3>
              <FeatureList features={benefits} variant="default" />
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-accent-gold py-16">
        <div className="text-center">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl font-serif text-primary-900 mb-4">
            Ready to Protect Your Home?
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-800/80 mb-6">
            Get a free consultation and quote for mosquito doors.
          </AnimatedText>
          <Button href="/contact" variant="dark" size="lg">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  )
}
