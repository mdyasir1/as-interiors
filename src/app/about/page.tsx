'use client'

import { Award, Clock, Users, MapPin, Heart, Shield, Target, Eye } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on materials or workmanship.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Every measurement, every cut, every installation is precise.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No hidden costs, no surprises. Honest pricing.',
  },
]

const milestones = [
  { year: '2017', event: 'Started with a small workshop' },
  { year: '2019', event: 'Opened our own manufacturing unit' },
  { year: '2021', event: 'Completed 200+ projects' },
  { year: '2023', event: 'Expanded to 13+ cities in AP' },
  { year: '2025', event: 'Crossed 500+ satisfied customers' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-4 py-2 mb-6">
              <span className="text-accent-gold text-sm font-medium">About Us</span>
            </div>
          </FadeIn>
          <AnimatedText
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Our Story
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl">
              Building trust through quality work since 2017. Learn about our journey
              from a small workshop to Andhra Pradesh&apos;s trusted aluminium and glass specialists.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper bg="light" className="py-16 sm:py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-800 mb-6">
                How We Started
              </h2>
              <div className="space-y-4 text-primary-600 leading-relaxed">
                <p>
                  A.S Interiors was born from a simple observation: quality work was being compromised
                  in the pursuit of profits. Our founder, after working in the industry for several years,
                  saw how many companies cut corners to offer lower prices.
                </p>
                <p>
                  In 2017, we started with a small workshop and a big dream - to provide premium
                  aluminium and glass solutions without compromising on quality. We believed that
                  customers deserved better.
                </p>
                <p>
                  Today, we have our own manufacturing workshop and office, serving over 500
                  satisfied customers across 13+ cities in Andhra Pradesh. Our commitment to
                  quality has made us one of the most trusted names in the industry.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImagePlaceholder text="Our Workshop" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-accent-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-primary-800">7+</p>
                    <p className="text-sm text-primary-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper bg="white" className="py-16 sm:py-20 md:py-28">
        <div className="text-center mb-12">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-800 mb-4">
            Our Values
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-600 max-w-2xl mx-auto">
            These core values guide everything we do, from the first consultation to the final installation.
          </AnimatedText>
        </div>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center p-6 rounded-2xl bg-primary-50 hover:bg-accent-gold/5 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent-gold" />
                </div>
                <h3 className="text-lg font-serif text-primary-800 mb-2">{value.title}</h3>
                <p className="text-sm text-primary-600">{value.description}</p>
              </div>
            )
          })}
        </StaggerChildren>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper bg="dark" className="py-16 sm:py-20 md:py-28">
        <div className="text-center mb-12">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
            Our Journey
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-300 max-w-2xl mx-auto">
            From humble beginnings to becoming a trusted name in Andhra Pradesh.
          </AnimatedText>
        </div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <FadeIn key={milestone.year} delay={index * 0.1} direction="up">
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-gold font-bold text-sm">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-accent-gold/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-white text-lg">{milestone.event}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper bg="white" className="py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: Award, value: '500+', label: 'Projects Completed' },
            { icon: Clock, value: '7+', label: 'Years Experience' },
            { icon: Users, value: '350+', label: 'Happy Customers' },
            { icon: MapPin, value: '13+', label: 'Cities Served' },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <FadeIn key={stat.label} direction="up">
                <div className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent-gold" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">{stat.value}</p>
                  <p className="text-sm text-primary-600">{stat.label}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-accent-gold py-16 sm:py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-900 mb-6">
            Ready to Work With Us?
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-800/80 mb-8">
            Experience the A.S Interiors difference. Get in touch today for a free consultation.
          </AnimatedText>
          <FadeIn delay={0.4} direction="up">
            <Button href="/contact" variant="dark" size="lg">
              Contact Us Today
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
