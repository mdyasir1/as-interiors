'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection
    setPage([newPage, newDirection])
    if (newDirection > 0) {
      next()
    } else {
      prev()
    }
  }

  return (
    <SectionWrapper bg="white" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <AnimatedText
            as="p"
            className="text-accent-gold font-medium tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            Testimonials
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.2}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-3 sm:mb-4"
          >
            What Our Customers Say
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.4}
            className="text-sm sm:text-base text-primary-600 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our work.
          </AnimatedText>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
                className="bg-primary-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg md:text-xl text-primary-700 mb-6 sm:mb-8 leading-relaxed italic">
                  &ldquo;{TESTIMONIALS[current].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-gold font-bold text-lg sm:text-xl">
                      {TESTIMONIALS[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-800 text-sm sm:text-base">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-xs sm:text-sm text-primary-500">
                      {TESTIMONIALS[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i)
                    setPage([i, i > current ? 1 : -1])
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-accent-gold' : 'bg-primary-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* View More on Google */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.google.com/search?q=A.S.+Interiors+Vijayawada+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 font-medium transition-colors text-sm sm:text-base"
          >
            View More Reviews on Google
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
