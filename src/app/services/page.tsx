'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren from '@/components/animations/StaggerChildren'
import PriceTag from '@/components/ui/PriceTag'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'

const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AKwA//9k='

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-4 py-2 mb-6">
              <span className="text-accent-gold text-sm font-medium">Our Services</span>
            </div>
          </FadeIn>
          <AnimatedText
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Premium Solutions
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl">
              From mosquito doors to automated shutters, we provide comprehensive
              aluminium and glass solutions for your home and business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper bg="light" className="py-16 sm:py-20 md:py-28">
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          stagger={0.1}
        >
          {SERVICES.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <PriceTag price={service.startingPrice} label="Starting from" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-serif text-primary-800 mb-3 group-hover:text-accent-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-primary-600 text-sm mb-4 flex-1 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-accent-gold font-medium text-sm group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="dark" className="py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-6">
            Not Sure What You Need?
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-300 mb-8">
            Our experts can help you choose the right solution for your space and budget.
          </AnimatedText>
          <FadeIn delay={0.4} direction="up">
            <Button href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </Button>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  )
}
