'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export default function CTA() {
  return (
    <SectionWrapper bg="dark" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
            <span className="text-accent-gold text-sm font-medium">
              Ready to Get Started?
            </span>
          </div>
        </FadeIn>

        <AnimatedText
          as="h2"
          delay={0.2}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight"
        >
          Ready to Transform Your Space?
        </AnimatedText>

        <AnimatedText
          as="p"
          delay={0.4}
          className="text-primary-300 text-lg mb-10 max-w-2xl mx-auto"
        >
          Get a free consultation and quote for your project. Our team is ready
          to help you create the perfect space.
        </AnimatedText>

        {/* CTA Buttons */}
        <FadeIn delay={0.6} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`https://wa.me/${SITE_CONFIG.social.whatsapp}?text=Hello%20A.S%20Interiors!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary-900">
                <Phone className="w-5 h-5 mr-2" />
                Contact Form
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Trust Indicators */}
        <FadeIn delay={0.8} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span>Prompt Response</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
