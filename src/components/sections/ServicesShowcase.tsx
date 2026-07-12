'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'
import PriceTag from '@/components/ui/PriceTag'
import { SERVICES } from '@/lib/constants'

const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AKwA//9k='

export default function ServicesShowcase() {
  return (
    <SectionWrapper bg="white" className="py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <AnimatedText
          as="p"
          className="text-accent-gold font-medium tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm"
        >
          What We Offer
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.2}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-3 sm:mb-4"
        >
          Our Premium Services
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.4}
          className="text-sm sm:text-base text-primary-600 max-w-2xl mx-auto px-4 sm:px-0"
        >
          From mosquito doors to automated shutters, we provide comprehensive
          aluminium and glass solutions for your home and business.
        </AnimatedText>
      </div>

      {/* Services Grid */}
      <StaggerChildren
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        stagger={0.1}
      >
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="group block"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-primary-100 hover:border-accent-gold/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                {/* Price Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg">
                  <PriceTag
                    price={service.startingPrice}
                    label="Starting from"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-serif text-primary-800 mb-2 group-hover:text-accent-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-1 line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {(() => {
                    const features = Array.isArray(service.features)
                      ? service.features
                      : [
                          ...((service.features as any)?.aluminium || []),
                          ...((service.features as any)?.glass || []),
                        ]
                    return features.slice(0, 3).map((feature: string, i: number) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))
                  })()}
                </div>

                {/* CTA */}
                <div className="flex items-center text-accent-gold font-medium text-xs sm:text-sm group-hover:gap-2 transition-all duration-300">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </StaggerChildren>

      {/* View All CTA */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-darkGold font-medium text-sm sm:text-base transition-colors group"
        >
          <span>View All Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </SectionWrapper>
  )
}
