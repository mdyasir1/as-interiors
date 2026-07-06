'use client'

import { MapPin } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'
import { ANDHRA_PRADESH_CITIES } from '@/lib/constants'

export default function ServiceAreas() {
  return (
    <SectionWrapper bg="white" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <AnimatedText
          as="p"
          className="text-accent-gold font-medium tracking-widest uppercase mb-4"
        >
          Service Areas
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.2}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-4"
        >
          Serving All of Andhra Pradesh
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.4}
          className="text-primary-600 max-w-2xl mx-auto"
        >
          We provide our premium services across all major cities in Andhra Pradesh.
          No matter where you are, we&apos;ve got you covered.
        </AnimatedText>
      </div>

      <StaggerChildren
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        stagger={0.05}
      >
        {ANDHRA_PRADESH_CITIES.map((city, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-primary-50 hover:bg-accent-gold/10 rounded-xl p-4 transition-all duration-300 group cursor-default"
          >
            <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-300 flex-shrink-0">
              <MapPin className="w-5 h-5 text-accent-gold" />
            </div>
            <span className="text-primary-700 font-medium group-hover:text-accent-gold transition-colors duration-300">
              {city}
            </span>
          </div>
        ))}
      </StaggerChildren>

      {/* Additional Note */}
      <AnimatedText
        as="p"
        delay={0.6}
        className="text-center text-primary-500 mt-8 text-sm"
      >
        And many more cities across Andhra Pradesh. Contact us to check if we serve your area.
      </AnimatedText>
    </SectionWrapper>
  )
}
