'use client'

import { useState } from 'react'
import { Grid3X3, LayoutGrid, Maximize } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const categories = ['All', 'Mosquito Doors', 'Windows', 'Shutters', 'Cupboards', 'Partitions']

const projects = [
  { id: 1, title: 'Modern Mosquito Door Installation', category: 'Mosquito Doors', location: 'Vijayawada' },
  { id: 2, title: 'Sliding Aluminium Windows', category: 'Windows', location: 'Guntur' },
  { id: 3, title: 'Automated Shop Shutter', category: 'Shutters', location: 'Vijayawada' },
  { id: 4, title: 'Office Partition Work', category: 'Partitions', location: 'Visakhapatnam' },
  { id: 5, title: 'Kitchen Cupboard Installation', category: 'Cupboards', location: 'Vijayawada' },
  { id: 6, title: 'Security Mosquito Door', category: 'Mosquito Doors', location: 'Guntur' },
  { id: 7, title: 'Domal Window Replacement', category: 'Windows', location: 'Vijayawada' },
  { id: 8, title: 'Garage Automated Shutter', category: 'Shutters', location: 'Krishna' },
  { id: 9, title: 'Glass Cabin Partition', category: 'Partitions', location: 'Vijayawada' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-4 py-2 mb-6">
              <span className="text-accent-gold text-sm font-medium">Our Work</span>
            </div>
          </FadeIn>
          <AnimatedText as="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Portfolio
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl">
              Browse through our completed projects across Andhra Pradesh.
              Quality work that speaks for itself.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <SectionWrapper bg="light" className="py-16 sm:py-20 md:py-28">
        {/* Filter Tabs */}
        <FadeIn direction="up">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-accent-gold text-white'
                    : 'bg-white text-primary-600 hover:bg-primary-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImagePlaceholder
                  text={project.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-accent-gold font-medium mb-1">{project.category}</p>
                <h3 className="text-lg font-serif text-primary-800 mb-1">{project.title}</h3>
                <p className="text-sm text-primary-500">{project.location}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary-500">No projects found in this category.</p>
          </div>
        )}
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="dark" className="py-16">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-6">
            Want Similar Work Done?
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-300 mb-8">
            Contact us today for a free consultation and quote.
          </AnimatedText>
          <FadeIn delay={0.4} direction="up">
            <a href="/contact" className="inline-flex items-center justify-center bg-accent-gold text-white px-8 py-4 rounded-xl font-medium hover:bg-accent-darkGold transition-colors">
              Get Started
            </a>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  )
}
