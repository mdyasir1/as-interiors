'use client'

import { MessageSquare, Palette, Ruler, Wrench, Headphones } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'
import { PROCESS_STEPS } from '@/lib/constants'

const iconMap = {
  Consultation: MessageSquare,
  'Select Design': Palette,
  Measurements: Ruler,
  Installation: Wrench,
  Support: Headphones,
}

export default function Process() {
  return (
    <SectionWrapper bg="white" className="py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <AnimatedText
          as="p"
          className="text-accent-gold font-medium tracking-widest uppercase mb-4"
        >
          How It Works
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.2}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-4"
        >
          Simple 5-Step Process
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.4}
          className="text-primary-600 max-w-2xl mx-auto"
        >
          From initial consultation to final installation, we make the entire
          process smooth and hassle-free.
        </AnimatedText>
      </div>

      {/* Process Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop Connecting Line */}
        <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent-gold/0 via-accent-gold/30 to-accent-gold/0" />

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4"
          stagger={0.15}
        >
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.title as keyof typeof iconMap] || Wrench
            return (
              <div key={step.step} className="relative text-center group">
                {/* Step Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-accent-gold/30 flex items-center justify-center mx-auto group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-gold" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-gold text-white text-sm font-semibold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile Connector */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-8 bg-accent-gold/20 -translate-x-1/2 translate-y-4" />
                )}
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
