'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import PriceTag from '@/components/ui/PriceTag'
import { SERVICES } from '@/lib/constants'

export default function ServicesShowcase() {
  return (
    <SectionWrapper bg="white" className="py-20 md:py-28">
      {/* Header */}
      <div className="text-center mb-16">
        <AnimatedText
          as="p"
          className="text-accent-gold font-medium tracking-widest uppercase mb-4"
        >
          What We Offer
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.2}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-800 mb-4"
        >
          Our Premium Services
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.4}
          className="text-primary-600 max-w-2xl mx-auto"
        >
          From mosquito doors to automated shutters, we provide comprehensive
          aluminium and glass solutions for your home and business.
        </AnimatedText>
      </div>

      {/* Services Grid */}
      <StaggerChildren
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        stagger={0.1}
      >
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="group block"
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-primary-100 hover:border-accent-gold/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <ImagePlaceholder
                  text={service.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <PriceTag
                    price={service.startingPrice}
                    label="Starting from"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif text-primary-800 mb-2 group-hover:text-accent-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary-600 text-sm mb-4 flex-1 line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(service.features)
                    ? service.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))
                    : Object.values(service.features)
                        .flat()
                        .slice(0, 3)
                        .map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-accent-gold font-medium text-sm group-hover:gap-2 transition-all duration-300">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </StaggerChildren>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-darkGold font-medium transition-colors group"
        >
          <span>View All Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </SectionWrapper>
  )
}
