'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'
import StarRating from './StarRating'

// Base Card Props
interface BaseCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

// Service Card Props
interface ServiceCardProps extends BaseCardProps {
  variant: 'service'
  title: string
  description: string
  image?: string
  imageAlt?: string
  price?: string
  priceLabel?: string
  features?: string[]
  href?: string
}

// Portfolio Card Props
interface PortfolioCardProps extends BaseCardProps {
  variant: 'portfolio'
  title: string
  category?: string
  image?: string
  imageAlt?: string
  href?: string
}

// Testimonial Card Props
interface TestimonialCardProps extends BaseCardProps {
  variant: 'testimonial'
  name: string
  role?: string
  content: string
  rating?: number
  avatar?: string
}

// Stats Card Props
interface StatsCardProps extends BaseCardProps {
  variant: 'stats'
  value: string | number
  label: string
  icon?: ReactNode
}

// Feature Card Props
interface FeatureCardProps extends BaseCardProps {
  variant: 'feature'
  title: string
  description: string
  icon?: ReactNode
  number?: number
}

type CardProps =
  | ServiceCardProps
  | PortfolioCardProps
  | TestimonialCardProps
  | StatsCardProps
  | FeatureCardProps

function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  price,
  priceLabel,
  features,
  href,
  className = '',
  hover = true,
}: Omit<ServiceCardProps, 'variant'>) {
  const content = (
    <div
      className={`
        bg-white rounded-xl overflow-hidden
        ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      <div className="aspect-[16/10] relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder text={title} className="w-full h-full" />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-primary-800 mb-2">{title}</h3>
        <p className="text-primary-600 text-sm mb-4 line-clamp-2">{description}</p>
        {features && features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-sm text-primary-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-primary-100">
          {price && (
            <div>
              {priceLabel && (
                <p className="text-xs text-primary-400">{priceLabel}</p>
              )}
              <p className="text-accent-gold font-semibold">{price}</p>
            </div>
          )}
          {href && (
            <Link
              href={href}
              className="text-accent-gold hover:text-accent-darkGold flex items-center gap-1 text-sm font-medium transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}

function PortfolioCard({
  title,
  category,
  image,
  imageAlt,
  href,
  className = '',
  hover = true,
}: Omit<PortfolioCardProps, 'variant'>) {
  const content = (
    <div
      className={`
        group relative aspect-square rounded-xl overflow-hidden
        ${hover ? 'hover:shadow-xl' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <ImagePlaceholder text={title} className="w-full h-full" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {category && (
            <p className="text-accent-gold text-sm font-medium mb-1">{category}</p>
          )}
          <h3 className="text-white text-lg font-serif">{title}</h3>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}

function TestimonialCard({
  name,
  role,
  content,
  rating = 5,
  avatar,
  className = '',
  hover = true,
}: Omit<TestimonialCardProps, 'variant'>) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6
        ${hover ? 'hover:shadow-lg' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-100">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-primary-400 font-semibold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-primary-800">{name}</h4>
          {role && <p className="text-sm text-primary-500">{role}</p>}
        </div>
      </div>
      <StarRating rating={rating} className="mb-4" />
      <p className="text-primary-600 italic leading-relaxed">&ldquo;{content}&rdquo;</p>
    </div>
  )
}

function StatsCard({
  value,
  label,
  icon,
  className = '',
  hover = false,
}: Omit<StatsCardProps, 'variant'>) {
  return (
    <div
      className={`
        text-center p-6
        ${hover ? 'hover:bg-white hover:shadow-lg rounded-xl' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {icon && (
        <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mx-auto mb-4 text-accent-gold">
          {icon}
        </div>
      )}
      <p className="text-3xl md:text-4xl font-serif text-accent-gold font-semibold mb-2">
        {value}
      </p>
      <p className="text-primary-600">{label}</p>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon,
  number,
  className = '',
  hover = true,
}: Omit<FeatureCardProps, 'variant'>) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6
        ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-accent-gold/10 flex items-center justify-center mb-4 text-accent-gold">
          {icon}
        </div>
      )}
      {number && !icon && (
        <div className="w-12 h-12 rounded-full bg-accent-gold text-white flex items-center justify-center mb-4 text-lg font-semibold">
          {number}
        </div>
      )}
      <h3 className="text-lg font-semibold text-primary-800 mb-2">{title}</h3>
      <p className="text-primary-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function Card(props: CardProps) {
  switch (props.variant) {
    case 'service':
      return <ServiceCard {...props} />
    case 'portfolio':
      return <PortfolioCard {...props} />
    case 'testimonial':
      return <TestimonialCard {...props} />
    case 'stats':
      return <StatsCard {...props} />
    case 'feature':
      return <FeatureCard {...props} />
    default:
      return null
  }
}
