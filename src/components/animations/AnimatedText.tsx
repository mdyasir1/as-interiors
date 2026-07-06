'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

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
      staggerChildren: 0.05,
      delayChildren: delay,
    },
  }),
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function AnimatedText({
  children,
  as: Component = 'p',
  variant = 'words',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
}: AnimatedTextProps) {
  if (typeof children !== 'string') {
    return <Component className={className}>{children}</Component>
  }

  const words = children.split(' ')

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
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
