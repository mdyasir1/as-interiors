'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import StarRating from '@/components/ui/StarRating'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <SectionWrapper bg="light" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText
            as="p"
            className="text-accent-gold font-medium tracking-widest uppercase mb-4"
          >
            Testimonials
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.2}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-4"
          >
            What Our Clients Say
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.4}
            className="text-primary-600 max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our work.
          </AnimatedText>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <FadeIn key={current} direction="up">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-8 text-accent-gold/10">
                <Quote className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <StarRating
                  rating={TESTIMONIALS[current].rating}
                  size="lg"
                  className="justify-center mb-6"
                />

                <p className="text-lg md:text-xl text-primary-700 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                  &ldquo;{TESTIMONIALS[current].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold text-xl">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-primary-800">
                      {TESTIMONIALS[current].name}
                    </h4>
                    <p className="text-sm text-primary-500">
                      {TESTIMONIALS[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-600 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-accent-gold w-8'
                      : 'bg-primary-200 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-600 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
