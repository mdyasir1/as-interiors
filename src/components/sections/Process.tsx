'use client'

import { MessageSquare, Palette, Ruler, Wrench, Headphones } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'
import { PROCESS_STEPS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  'Consultation': MessageSquare,
  'Select Design': Palette,
  'Measurements': Ruler,
  'Installation': Wrench,
  'Support': Headphones,
}

export default function Process() {
  return (
    <SectionWrapper bg="light" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <AnimatedText
            as="p"
            className="text-accent-gold font-medium tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            How We Work
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.2}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-3 sm:mb-4"
          >
            Our Simple Process
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.4}
            className="text-sm sm:text-base text-primary-600 max-w-2xl mx-auto px-4 sm:px-0"
          >
            From initial consultation to final installation, we make the
            process smooth and hassle-free.
          </AnimatedText>
        </div>

        {/* Steps */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-0 relative"
          stagger={0.1}
        >
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.title] || MessageSquare
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Line (desktop only) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-200 z-0" />
                )}

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center mb-4 group-hover:border-accent-gold transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-gold" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-serif text-primary-800 mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary-600 max-w-[200px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
