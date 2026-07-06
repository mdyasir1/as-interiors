'use client'

import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  width?: number
  height?: number
  text?: string
  className?: string
}

export default function ImagePlaceholder({
  text = 'Image',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br from-primary-100 to-primary-200 flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-300" />
      <span className="text-xs sm:text-sm text-primary-400 font-medium">{text}</span>
    </div>
  )
}
