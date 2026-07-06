'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const highlights = [
  'Own Manufacturing Workshop',
  'No Quality Compromise',
  'Affordable Prices',
  'Timely Delivery',
]

export default function AboutPreview() {
  return (
    <SectionWrapper bg="light" className="py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <FadeIn direction="left">
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent-gold text-sm font-medium">About Us</span>
            </div>
          </FadeIn>

          <AnimatedText
            as="h2"
            delay={0.2}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-6 leading-tight"
          >
            Quality Work at Affordable Prices
          </AnimatedText>

          <FadeIn delay={0.4} direction="up">
            <p className="text-primary-600 mb-4 leading-relaxed">
              With over 7 years of experience, A.S Interiors has been delivering premium
              aluminium and glass solutions across Andhra Pradesh. We started with a simple
              mission: to provide high-quality work at honest prices.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <p className="text-primary-600 mb-8 leading-relaxed">
              Today, we have our own manufacturing workshop and office, serving 500+
              satisfied customers across 13+ cities. Our commitment to quality has made
              us one of the most trusted names in the industry.
            </p>
          </FadeIn>

          {/* Highlights */}
          <FadeIn delay={0.6} direction="up">
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-gold" />
                  </div>
                  <span className="text-sm text-primary-700">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.7} direction="up">
            <Button
              href="/about"
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Learn More About Us
            </Button>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn direction="right" delay={0.3}>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImagePlaceholder
                text="Our Workshop"
                className="w-full h-full"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
                <span className="text-accent-gold font-bold text-xl">7+</span>
              </div>
              <div>
                <p className="font-semibold text-primary-800">Years</p>
                <p className="text-sm text-primary-500">of Experience</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
