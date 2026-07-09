'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'
import { useReducedMotion, useIsMobile } from '@/hooks/useMediaQuery'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const shouldAnimate = isMounted && !prefersReducedMotion

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />

        {/* Floating Elements - disabled on reduced motion or mobile for performance */}
        {shouldAnimate && !isMobile && (
          <>
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-accent-gold/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-32 right-[15%] w-48 h-48 sm:w-80 sm:h-80 bg-accent-gold/8 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/2 right-[10%] w-32 h-32 sm:w-48 sm:h-48 bg-accent-gold/5 rounded-full blur-2xl"
            />
          </>
        )}

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

      {/* Content */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          {shouldAnimate ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <span className="text-accent-gold text-xs sm:text-sm font-medium">
                {SITE_CONFIG.experience} of Excellence
              </span>
            </motion.div>
          ) : isMounted ? (
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-gold" />
              <span className="text-accent-gold text-xs sm:text-sm font-medium">
                {SITE_CONFIG.experience} of Excellence
              </span>
            </div>
          ) : null}

          {/* Main Heading 1 */}
          {shouldAnimate ? (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
            >
              Your One-Stop Solution for
            </motion.h1>
          ) : isMounted ? (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              Your One-Stop Solution for
            </h1>
          ) : null}

          {/* Main Heading 2 */}
          {shouldAnimate ? (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 leading-tight drop-shadow-lg"
            >
              <span className="text-gradient">Aluminium & Glass Works</span>
            </motion.h1>
          ) : isMounted ? (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 leading-tight drop-shadow-lg">
              <span className="text-gradient">Aluminium & Glass Works</span>
            </h1>
          ) : null}

          {/* Subtitle */}
          {shouldAnimate ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-primary-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow"
            >
              Premium mosquito doors, aluminium windows, automated shutters, cupboards,
              and glass partitions. Serving all of Andhra Pradesh with unmatched quality.
            </motion.p>
          ) : isMounted ? (
            <p className="text-base sm:text-lg md:text-xl text-primary-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Premium mosquito doors, aluminium windows, automated shutters, cupboards,
              and glass partitions. Serving all of Andhra Pradesh with unmatched quality.
            </p>
          ) : null}

          {/* CTA Buttons */}
          {shouldAnimate ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Get Free Quote
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Our Services
              </Button>
            </motion.div>
          ) : isMounted ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Get Free Quote
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Our Services
              </Button>
            </div>
          ) : null}

          {/* Trust Badges */}
          {shouldAnimate ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 sm:mt-14 text-sm text-primary-300"
            >
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
            </motion.div>
          ) : isMounted ? (
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 sm:mt-14 text-sm text-primary-300">
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
          ) : null}
        </div>
      </div>

      {/* Scroll Indicator */}
      {shouldAnimate ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-primary-400 tracking-widest uppercase">
              Scroll Down
            </span>
            <ChevronDown className="w-5 h-5 text-accent-gold" />
          </motion.div>
        </motion.div>
      ) : isMounted ? (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-primary-400 tracking-widest uppercase">
              Scroll Down
            </span>
            <ChevronDown className="w-5 h-5 text-accent-gold" />
          </div>
        </div>
      ) : null}
    </section>
  )
}
