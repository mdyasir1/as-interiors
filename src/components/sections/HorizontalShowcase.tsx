'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Award, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const highlights = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Premium materials with zero compromise on quality.',
    stat: '500+',
    statLabel: 'Projects',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Projects completed on schedule, every time.',
    stat: '7+',
    statLabel: 'Years',
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Skilled professionals with industry experience.',
    stat: '350+',
    statLabel: 'Happy Clients',
  },
  {
    icon: Star,
    title: 'Premium Finish',
    description: 'Attention to detail in every installation.',
    stat: '13+',
    statLabel: 'Cities',
  },
]

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContentRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContent = scrollContentRef.current
      if (!scrollContent) return

      const totalWidth = scrollContent.scrollWidth - window.innerWidth

      gsap.to(scrollContent, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress * 100)
          },
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-primary-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 169, 98, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201, 169, 98, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content wrapper - handles layout flow */}
      <div className="relative h-full flex flex-col">
        {/* Header - static positioned, always visible at top */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-4 sm:pb-6">
          <div className="container-custom mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-accent-gold text-xs sm:text-sm font-medium tracking-widest uppercase mb-2">
                  Why Choose Us
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                  Excellence in Every Detail
                </h2>
              </div>
              <div className="hidden sm:block">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-lightGold transition-colors"
                >
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cards container - takes remaining height, cards positioned from top */}
        <div className="flex-1 relative overflow-hidden">
          <div
            ref={scrollContentRef}
            className="absolute top-0 left-0 h-full flex items-start gap-6 sm:gap-8 pl-8 sm:pl-16 lg:pl-24 pr-[50vw]"
            style={{ width: 'max-content' }}
          >
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] pt-4 sm:pt-6"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-[380px] sm:h-[420px] flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group">
                    <div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent-gold" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-primary-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-3xl sm:text-4xl font-bold text-accent-gold mb-1">
                        {item.stat}
                      </p>
                      <p className="text-xs sm:text-sm text-primary-400">{item.statLabel}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Final CTA Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] pt-4 sm:pt-6">
              <div className="bg-accent-gold rounded-2xl p-6 sm:p-8 h-[380px] sm:h-[420px] flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl sm:text-3xl font-serif text-primary-900 mb-4">
                  Ready to Start?
                </h3>
                <p className="text-primary-800/80 mb-6 text-sm sm:text-base">
                  Get a free consultation and quote for your project.
                </p>
                <Button href="/contact" variant="dark" size="lg">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-primary-400"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-800/50 z-10">
        <div
          className="h-full bg-accent-gold transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  )
}
