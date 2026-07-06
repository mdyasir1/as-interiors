'use client'

import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  className = '',
}: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating
              ? 'fill-accent-gold text-accent-gold'
              : 'fill-primary-200 text-primary-200'
          }`}
        />
      ))}
    </div>
  )
}
