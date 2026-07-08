'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useMediaQuery'

interface SlideUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.4,
  distance = 20,
  className = '',
  once = true,
}: SlideUpProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
