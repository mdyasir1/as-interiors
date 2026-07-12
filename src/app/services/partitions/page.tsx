'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Phone } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import ImageCarousel from '@/components/ui/ImageCarousel'
import Button from '@/components/ui/Button'

const partitionImages = [
  { src: '/partitions/partition-01.jpg', alt: 'Partition Installation' },
  { src: '/partitions/partition-02.jpg', alt: 'Partition Design' },
  { src: '/partitions/partition-03.jpg', alt: 'Partition Model' },
  { src: '/partitions/partition-04.jpg', alt: 'Partition Range' },
  { src: '/partitions/partition-05.jpg', alt: 'Partition Style' },
  { src: '/partitions/partition-06.jpg', alt: 'Partition Detail' },
  { src: '/partitions/partition-07.jpg', alt: 'Partition Collection' },
  { src: '/partitions/partition-08.jpg', alt: 'Partition Showcase' },
]

const aluminiumFeatures = [
  '50% Sound Proof',
  'Termite Proof',
  'Easy Maintenance',
]

const glassFeatures = [
  'Fireproof',
  'Bulletproof',
  'Shatterproof',
  'Soundproof',
]

const types = [
  'Aluminium Partitions',
  'Aluminium Cabins',
  'Toughened Glass Partitions',
  'Front Glass Doors',
  'Laminated Glass Works',
  'Sandwich Vacuum Glass Works',
]

export default function PartitionsPage() {
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
            Partitions
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl mb-8">
              Aluminium and glass partition solutions starting at ₹349/sft. Create beautiful,
              functional spaces.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                Get Free Quote
              </Button>
              <div className="bg-white/10 rounded-xl px-6 py-3">
                <p className="text-xs text-primary-400">Starting from</p>
                <p className="text-2xl font-bold text-accent-gold">₹349/sft</p>
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
              <div className="space-y-3 mb-8">
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
              <h3 className="text-xl font-serif text-primary-800 mb-4">Aluminium Cabin Features</h3>
              <div className="space-y-3 mb-8">
                {aluminiumFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-primary-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    {feature}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <h3 className="text-xl font-serif text-primary-800 mb-4">Laminated & Vacuum Glass Features</h3>
              <div className="space-y-3">
                {glassFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-primary-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    {feature}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="right">
              <div className="mb-8">
                <ImageCarousel
                  images={partitionImages}
                  autoPlayInterval={4500}
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-serif text-primary-800 mb-3">Perfect For</h3>
                <ul className="space-y-2 text-primary-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Office cabins and workspaces
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Conference rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Shop fronts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Main entrance doors
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-accent-gold py-16">
        <div className="text-center">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl font-serif text-primary-900 mb-4">
            Create Beautiful Spaces
          </AnimatedText>
          <Button href="/contact" variant="dark" size="lg">Get Free Quote</Button>
        </div>
      </section>
    </>
  )
}
