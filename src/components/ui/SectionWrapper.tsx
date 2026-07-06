'use client'

import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  bg?: 'light' | 'dark' | 'white' | 'cream'
  className?: string
  id?: string
  as?: 'section' | 'div'
}

const bgClasses = {
  light: 'bg-background-light',
  dark: 'bg-primary-900 text-white',
  white: 'bg-white',
  cream: 'bg-accent-cream',
}

export default function SectionWrapper({
  children,
  bg = 'light',
  className = '',
  id,
  as: Component = 'section',
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={`section-padding ${bgClasses[bg]} ${className}`}
    >
      <div className="container-custom mx-auto">{children}</div>
    </Component>
  )
}
