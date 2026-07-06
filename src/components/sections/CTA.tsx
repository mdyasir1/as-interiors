'use client'

import { Phone, ArrowRight } from 'lucide-react'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export default function CTA() {
  return (
    <section className="bg-accent-gold py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold via-accent-gold to-accent-darkGold" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <AnimatedText
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary-900 mb-3 sm:mb-4 md:mb-6"
        >
          Ready to Transform Your Space?
        </AnimatedText>

        <AnimatedText
          as="p"
          delay={0.2}
          className="text-sm sm:text-base md:text-lg text-primary-800/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          Get a free consultation and quote for your project. Our experts are
          ready to help you bring your vision to life.
        </AnimatedText>

        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Get Free Quote
            </Button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-accent-gold px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 min-h-[48px] w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </FadeIn>

        <AnimatedText
          as="p"
          delay={0.6}
          className="mt-6 sm:mt-8 text-xs sm:text-sm text-primary-800/70"
        >
          Free consultation • No obligation • Quick response
        </AnimatedText>
      </div>
    </section>
  )
}
