'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Phone, Zap } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Button from '@/components/ui/Button'

const features = [
  'Automated Opening & Closing',
  'Remote Control Operation',
  'Smooth & Silent Motor',
  'Premium Aluminium Build',
  'Weather Resistant',
  'Easy Maintenance',
]

export default function AutomatedShuttersPage() {
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
            Automated Shutters
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl mb-8">
              Smart home shutters that open and close with a button. Premium quality automation
              for your convenience.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                Get Free Quote
              </Button>
              <div className="bg-white/10 rounded-xl px-6 py-3">
                <p className="text-xs text-primary-400">Starting from</p>
                <p className="text-2xl font-bold text-accent-gold">₹699/sft</p>
                <p className="text-xs text-primary-400">+ Motor ₹18,999 + GST</p>
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
                Smart Automation
              </h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Experience the future of home security with our automated shutter systems.
                Control your shutters with a remote, smartphone, or voice assistant.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h3 className="text-xl font-serif text-primary-800 mb-4">Key Features</h3>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-4 bg-white rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-gold" />
                    </div>
                    <span className="text-primary-700">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="mt-8 bg-accent-gold/10 border border-accent-gold/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-accent-gold" />
                  <h4 className="font-semibold text-primary-800">Motor Included</h4>
                </div>
                <p className="text-sm text-primary-600">
                  Premium motor priced at ₹18,999 (excluded from sft pricing) + applicable GST.
                  Long-lasting and whisper-quiet operation.
                </p>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="right">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
                <ImagePlaceholder text="Automated Shutters" className="w-full h-full" />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-serif text-primary-800 mb-3">Perfect For</h3>
                <ul className="space-y-2 text-primary-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Shop fronts and commercial spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Garage doors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Warehouse entrances
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    Home security shutters
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
            Automate Your Space
          </AnimatedText>
          <Button href="/contact" variant="dark" size="lg">Get Free Quote</Button>
        </div>
      </section>
    </>
  )
}
