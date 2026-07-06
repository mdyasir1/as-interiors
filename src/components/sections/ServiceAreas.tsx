'use client'

import { MapPin } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'
import { ANDHRA_PRADESH_CITIES } from '@/lib/constants'

export default function ServiceAreas() {
  return (
    <SectionWrapper bg="light" className="py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <AnimatedText
          as="p"
          className="text-accent-gold font-medium tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm"
        >
          Coverage Area
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.2}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-3 sm:mb-4"
        >
          Serving All of Andhra Pradesh
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.4}
          className="text-sm sm:text-base text-primary-600 max-w-2xl mx-auto px-4 sm:px-0"
        >
          We provide our premium services across all major cities in Andhra Pradesh.
          Wherever you are, we&apos;re ready to serve you.
        </AnimatedText>
      </div>

      {/* Cities Grid */}
      <StaggerChildren
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        stagger={0.05}
      >
        {ANDHRA_PRADESH_CITIES.map((city) => (
          <div
            key={city}
            className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary-100 hover:border-accent-gold/30 hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-gold/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-accent-gold/20 transition-colors">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold" />
            </div>
            <h3 className="font-medium text-primary-800 text-xs sm:text-sm">
              {city}
            </h3>
          </div>
        ))}
      </StaggerChildren>

      {/* Additional Info */}
      <AnimatedText
        as="p"
        delay={0.8}
        className="text-center text-primary-600 mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm px-4 sm:px-0"
      >
        Don&apos;t see your city? Contact us - we may still be able to help!
      </AnimatedText>
    </SectionWrapper>
  )
}
