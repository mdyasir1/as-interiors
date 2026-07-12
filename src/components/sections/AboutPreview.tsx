'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'

const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AKwA//9k='

const highlights = [
  'Own Manufacturing Workshop',
  'No Quality Compromise',
  'Affordable Prices',
  'Timely Delivery',
]

export default function AboutPreview() {
  return (
    <SectionWrapper bg="light" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Content */}
        <div>
          <FadeIn direction="left">
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6">
              <span className="text-accent-gold text-xs sm:text-sm font-medium">About Us</span>
            </div>
          </FadeIn>

          <AnimatedText
            as="h2"
            delay={0.2}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-4 sm:mb-6 leading-tight"
          >
            Quality Work at Affordable Prices
          </AnimatedText>

          <FadeIn delay={0.4} direction="up">
            <p className="text-sm sm:text-base text-primary-600 mb-3 sm:mb-4 leading-relaxed">
              With over 7 years of experience, A.S Interiors has been delivering premium
              aluminium and glass solutions across Andhra Pradesh. We started with a simple
              mission: to provide high-quality work at honest prices.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <p className="text-sm sm:text-base text-primary-600 mb-6 sm:mb-8 leading-relaxed">
              Today, we have our own manufacturing workshop and office, serving 500+
              satisfied customers across 13+ cities. Our commitment to quality has made
              us one of the most trusted names in the industry.
            </p>
          </FadeIn>

          {/* Highlights */}
          <FadeIn delay={0.6} direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <div className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-gold" />
                  </div>
                  <span className="text-xs sm:text-sm text-primary-700">{item}</span>
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
              className="w-full sm:w-auto"
            >
              Learn More About Us
            </Button>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn direction="right" delay={0.3}>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
              <Image
                src="/shop/shop-inside.jpg"
                alt="A.S Interiors Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
                <span className="text-accent-gold font-bold text-lg sm:text-xl">7+</span>
              </div>
              <div>
                <p className="font-semibold text-primary-800 text-sm sm:text-base">Years</p>
                <p className="text-xs sm:text-sm text-primary-500">of Experience</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
