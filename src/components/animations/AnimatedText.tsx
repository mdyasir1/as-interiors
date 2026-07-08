'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useMediaQuery'

type AnimatedTextVariant = 'words' | 'characters' | 'lines'
type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

interface AnimatedTextProps {
  children: ReactNode
  as?: TextElement
  variant?: AnimatedTextVariant
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function AnimatedText({
  children,
  as: Component = 'p',
  variant = 'words',
  delay = 0,
  duration = 0.4,
  className = '',
  once = true,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion()

  if (typeof children !== 'string') {
    return <Component className={className}>{children}</Component>
  }

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>
  }

  const words = children.split(' ')

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      variants={containerVariants}
      custom={delay}
      aria-label={children}
    >
      <Component className={className} aria-hidden="true">
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  )
}
