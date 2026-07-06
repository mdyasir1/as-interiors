'use client'

interface PriceTagProps {
  price: string
  label?: string
  className?: string
}

export default function PriceTag({
  price,
  label,
  className = '',
}: PriceTagProps) {
  return (
    <div className={className}>
      {label && (
        <p className="text-xs text-primary-400 mb-0.5">{label}</p>
      )}
      <p className="text-accent-gold font-semibold text-lg">{price}</p>
    </div>
  )
}
