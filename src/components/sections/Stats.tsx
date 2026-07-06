'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Award, Clock, Users, MapPin } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'
import { STATS } from '@/lib/constants'

const iconMap = {
  'Projects Completed': Award,
  'Years Experience': Clock,
  'Happy Customers': Users,
  'Cities Served': MapPin,
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, target])

  return (
    <div ref={ref} className="mb-2">
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent-gold tabular-nums" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {count}
      </span>
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-gold">{suffix}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <SectionWrapper bg="white" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 169, 98, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10">
        <AnimatedText
          as="h2"
          className="text-center text-2xl sm:text-3xl md:text-4xl font-serif text-primary-800 mb-10 sm:mb-12 md:mb-16"
        >
          Our Track Record Speaks
        </AnimatedText>

        <StaggerChildren
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12"
          stagger={0.15}
        >
          {STATS.map((stat) => {
            const Icon = iconMap[stat.label as keyof typeof iconMap] || Award
            return (
              <div key={stat.label} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent-gold" />
                </div>
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-primary-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
