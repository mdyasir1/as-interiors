'use client'

import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'

const reasons = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We never compromise on quality, using only premium materials.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Projects completed on schedule with minimal disruption.',
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Skilled professionals with years of industry experience.',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    description: 'We stand behind our work with reliable support.',
  },
]

export default function WhyChooseUs() {
  return (
    <SectionWrapper bg="dark" className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-accent-gold/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <AnimatedText
            as="p"
            className="text-accent-gold font-medium tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            Why Us
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.2}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 sm:mb-4"
          >
            Why Choose A.S Interiors
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.4}
            className="text-sm sm:text-base text-primary-300 max-w-2xl mx-auto px-4 sm:px-0"
          >
            We stand apart through our unwavering commitment to quality,
            transparency, and customer satisfaction.
          </AnimatedText>
        </div>

        {/* Reasons Grid */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
          stagger={0.1}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-accent-gold/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-accent-gold" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-serif text-white mb-2 sm:mb-3">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
