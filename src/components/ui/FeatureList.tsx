'use client'

import { Check } from 'lucide-react'

interface FeatureListProps {
  features: string[]
  variant?: 'default' | 'compact' | 'checkmark'
  className?: string
}

export default function FeatureList({
  features,
  variant = 'checkmark',
  className = '',
}: FeatureListProps) {
  if (variant === 'compact') {
    return (
      <ul className={`flex flex-wrap gap-2 ${className}`}>
        {features.map((feature, i) => (
          <li
            key={i}
            className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
          >
            {feature}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className={`space-y-2 ${className}`}>
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2">
          {variant === 'checkmark' && (
            <span className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-accent-gold" />
            </span>
          )}
          <span className="text-primary-600 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  )
}
