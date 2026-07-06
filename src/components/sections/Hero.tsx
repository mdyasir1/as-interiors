'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-accent-gold/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        </div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 169, 98, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201, 169, 98, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <span className="text-accent-gold text-xs sm:text-sm font-medium">
                {SITE_CONFIG.experience} of Excellence
              </span>
            </div>
          </FadeIn>

          {/* Main Heading */}
          <AnimatedText
            as="h1"
            delay={0.4}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 sm:mb-6 leading-tight"
          >
            Your One-Stop Solution for
          </AnimatedText>

          <AnimatedText
            as="h1"
            delay={0.8}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-gradient">Aluminium & Glass Works</span>
          </AnimatedText>

          {/* Subtitle */}
          <FadeIn delay={1.2} direction="up">
            <p className="text-base sm:text-lg md:text-xl text-primary-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Premium mosquito doors, aluminium windows, automated shutters, cupboards,
              and glass partitions. Serving all of Andhra Pradesh with unmatched quality.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={1.4} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
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
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Our Services
              </Button>
            </div>
          </FadeIn>

          {/* Trust Badges */}
          <FadeIn delay={1.6} direction="up">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 sm:mt-12 text-xs sm:text-sm text-primary-400 px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>{SITE_CONFIG.projectsCompleted} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>All of Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>Premium Quality</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] sm:text-xs text-primary-400 tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}
