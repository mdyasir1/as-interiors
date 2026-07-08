'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useMediaQuery'

type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: FadeDirection
  className?: string
  once?: boolean
}

const directionVariants: Record<FadeDirection, { x?: number; y?: number }> = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
  none: {},
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  direction = 'up',
  className = '',
  once = true,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionVariants[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
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
