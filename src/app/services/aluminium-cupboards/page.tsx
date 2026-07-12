'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Phone } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import ImageCarousel from '@/components/ui/ImageCarousel'
import Button from '@/components/ui/Button'
import FeatureList from '@/components/ui/FeatureList'

const cupboardImages = [
  { src: '/cupboards/cupboard-01.jpg', alt: 'Aluminium Cupboard Installation' },
  { src: '/cupboards/cupboard-02.jpg', alt: 'Cupboard Design' },
  { src: '/cupboards/cupboard-03.jpg', alt: 'Cupboard Interior' },
  { src: '/cupboards/cupboard-04.jpg', alt: 'Kitchen Cupboard' },
  { src: '/cupboards/cupboard-05.jpg', alt: 'Storage Cupboard' },
  { src: '/cupboards/cupboard-06.jpg', alt: 'Cupboard Finish' },
  { src: '/cupboards/cupboard-07.jpg', alt: 'Cupboard Detail' },
  { src: '/cupboards/cupboard-08.jpg', alt: 'Premium Cupboard' },
  { src: '/cupboards/cupboard-09.jpg', alt: 'Cupboard Model' },
  { src: '/cupboards/cupboard-10.jpg', alt: 'Cupboard Range' },
  { src: '/cupboards/cupboard-11.jpg', alt: 'Cupboard Collection' },
  { src: '/cupboards/cupboard-12.jpg', alt: 'Cupboard Showcase' },
  { src: '/cupboards/cupboard-13.jpg', alt: 'Cupboard Style' },
  { src: '/cupboards/cupboard-14.jpg', alt: 'Cupboard Range' },
  { src: '/cupboards/cupboard-15.png', alt: 'Cupboard Screenshot' },
]

const types = [
  'Indian Profile Cupboards',
  'Imported Profile Cupboards',
  'ACP Sheet Cupboards (Multiple Colors)',
]

const models = [
  'Open Door Model',
  'Sliding Door Model',
]

const benefits = [
  'Waterproof',
  'Rustproof',
  'Termite Proof',
  'Fireproof',
  'Heavy Quality Material',
  'Zero Maintenance',
]

export default function AluminiumCupboardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-accent-gold mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">All Services</span>
          </Link>
          <AnimatedText as="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Aluminium Cupboards
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl mb-8">
              Premium aluminium cupboards starting at ₹649/sft. Durable, stylish, and
              maintenance-free storage solutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                Get Free Quote
              </Button>
              <div className="bg-white/10 rounded-xl px-6 py-3">
                <p className="text-xs text-primary-400">Starting from</p>
                <p className="text-2xl font-bold text-accent-gold">₹649/sft</p>
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
              <h2 className="text-2xl sm:text-3xl font-serif text-primary-800 mb-6">Types Available</h2>
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
              <h3 className="text-xl font-serif text-primary-800 mb-4">Door Models</h3>
              <div className="flex gap-4 mb-8">
                {models.map((model) => (
                  <div key={model} className="flex-1 p-4 bg-white rounded-xl text-center">
                    <span className="text-primary-700 font-medium">{model}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <h3 className="text-xl font-serif text-primary-800 mb-4">Key Benefits</h3>
              <FeatureList features={benefits} variant="default" />
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="right">
              <div className="mb-8">
                <ImageCarousel
                  images={cupboardImages}
                  autoPlayInterval={4500}
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-serif text-primary-800 mb-3">Why Aluminium Cupboards?</h3>
                <p className="text-primary-600 text-sm leading-relaxed">
                  Unlike wooden cupboards, our aluminium cupboards are completely waterproof,
                  termite-proof, and fireproof. They require zero maintenance and will last
                  for decades without losing their appearance.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-accent-gold py-16">
        <div className="text-center">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl font-serif text-primary-900 mb-4">
            Upgrade Your Storage
          </AnimatedText>
          <Button href="/contact" variant="dark" size="lg">Get Free Quote</Button>
        </div>
      </section>
    </>
  )
}
