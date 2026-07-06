'use client'

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  fullWidth?: boolean
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-gold text-white hover:bg-accent-darkGold hover:shadow-lg hover:shadow-accent-gold/20 active:bg-accent-darkGold',
  secondary:
    'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white',
  ghost:
    'text-primary-600 hover:bg-primary-100 hover:text-primary-800',
  dark:
    'bg-primary-800 text-white hover:bg-primary-700 hover:shadow-lg',
  danger:
    'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5 min-h-[36px]',
  md: 'px-6 py-3 text-base gap-2 min-h-[44px]',
  lg: 'px-8 py-4 text-lg gap-2.5 min-h-[48px]',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'right',
      href,
      fullWidth = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center font-medium rounded-lg
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      active:scale-[0.98]
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `

    const content = (
      <>
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </>
    )

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
