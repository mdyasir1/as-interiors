'use client'

import { Droplets, Shield, Bug, Flame } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'

const features = [
  {
    icon: Droplets,
    title: 'Waterproof',
    description:
      'All our products are designed to withstand water exposure, ensuring long-lasting performance even in heavy rain conditions.',
  },
  {
    icon: Shield,
    title: 'Rustproof',
    description:
      'Premium aluminium construction with special coatings that prevent rust, maintaining the appearance and strength for years.',
  },
  {
    icon: Bug,
    title: 'Termiteproof',
    description:
      'Unlike wood, our aluminium products are completely immune to termite damage, giving you worry-free durability.',
  },
  {
    icon: Flame,
    title: 'Fireproof',
    description:
      'Selected products offer fire-resistant properties, adding an extra layer of safety to your home or business.',
  },
]

export default function WhyChooseUs() {
  return (
    <SectionWrapper bg="light" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText
            as="p"
            className="text-accent-gold font-medium tracking-widest uppercase mb-4"
          >
            Why Choose Us
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.2}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-4"
          >
            Built to Last
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.4}
            className="text-primary-600 max-w-2xl mx-auto"
          >
            Our products are engineered with premium materials and craftsmanship
            to deliver unmatched durability and performance.
          </AnimatedText>
        </div>

        {/* Features Grid */}
        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.12}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-gold/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
