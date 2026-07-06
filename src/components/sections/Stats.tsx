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
    const increment = target / (duration / 16)

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
    <div ref={ref}>
      <span className="text-4xl md:text-5xl font-serif text-accent-gold font-semibold">
        {count}
        {suffix}
      </span>
    </div>
  )
}

export default function Stats() {
  return (
    <SectionWrapper bg="white" className="py-16 relative overflow-hidden">
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
          className="text-center text-3xl md:text-4xl font-serif text-primary-800 mb-12"
        >
          Our Track Record Speaks
        </AnimatedText>

        <StaggerChildren
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          stagger={0.15}
        >
          {STATS.map((stat) => {
            const Icon = iconMap[stat.label as keyof typeof iconMap] || Award
            return (
              <div key={stat.label} className="text-center group">
                <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent-gold" />
                </div>
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-primary-600 mt-2 text-sm md:text-base">{stat.label}</p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
