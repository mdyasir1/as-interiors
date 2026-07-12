'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'

const categories = ['All', 'Mosquito Doors', 'Windows', 'Shutters', 'Cupboards', 'Partitions']

const categoryMeta: Record<string, { title: string; subtitle: string }> = {
  'Mosquito Doors': { title: 'Mosquito Doors', subtitle: 'Premium Protection' },
  'Windows': { title: 'Aluminium Windows', subtitle: 'Modern Design' },
  'Shutters': { title: 'Automated Shutters', subtitle: 'Smart Automation' },
  'Cupboards': { title: 'Aluminium Cupboards', subtitle: 'Custom Storage' },
  'Partitions': { title: 'Partitions & Glass', subtitle: 'Elegant Spaces' },
}

const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AKwA//9k='

const allProjects = [
  { id: 'md1', src: '/mosquito doors/mosquito-door-01.jpg', category: 'Mosquito Doors' },
  { id: 'md2', src: '/mosquito doors/mosquito-door-02.jpg', category: 'Mosquito Doors' },
  { id: 'md3', src: '/mosquito doors/mosquito-door-03.jpg', category: 'Mosquito Doors' },
  { id: 'md4', src: '/mosquito doors/mosquito-door-04.jpg', category: 'Mosquito Doors' },
  { id: 'md5', src: '/mosquito doors/mosquito-door-05.webp', category: 'Mosquito Doors' },
  { id: 'md6', src: '/mosquito doors/mosquito-door-06.jpg', category: 'Mosquito Doors' },
  { id: 'md7', src: '/mosquito doors/mosquito-door-07.jpg', category: 'Mosquito Doors' },
  { id: 'md8', src: '/mosquito doors/mosquito-door-08.jpg', category: 'Mosquito Doors' },
  { id: 'md9', src: '/mosquito doors/mosquito-door-09.jpg', category: 'Mosquito Doors' },
  { id: 'md10', src: '/mosquito doors/mosquito-door-10.jpg', category: 'Mosquito Doors' },

  { id: 'w1', src: '/aluminium windows/window-01.jpg', category: 'Windows' },
  { id: 'w2', src: '/aluminium windows/window-02.jpg', category: 'Windows' },
  { id: 'w3', src: '/aluminium windows/window-03.jpg', category: 'Windows' },
  { id: 'w4', src: '/aluminium windows/window-04.jpg', category: 'Windows' },
  { id: 'w5', src: '/aluminium windows/window-05.jpg', category: 'Windows' },
  { id: 'w6', src: '/aluminium windows/window-06.jpg', category: 'Windows' },
  { id: 'w7', src: '/aluminium windows/window-07.jpg', category: 'Windows' },
  { id: 'w8', src: '/aluminium windows/window-08.jpg', category: 'Windows' },
  { id: 'w9', src: '/aluminium windows/window-09.jpg', category: 'Windows' },
  { id: 'w10', src: '/aluminium windows/window-10.jpg', category: 'Windows' },

  { id: 's1', src: '/shutters/shutter-01.jpg', category: 'Shutters' },
  { id: 's2', src: '/shutters/shutter-02.jpg', category: 'Shutters' },
  { id: 's3', src: '/shutters/shutter-03.jpg', category: 'Shutters' },
  { id: 's4', src: '/shutters/shutter-04.jpg', category: 'Shutters' },
  { id: 's5', src: '/shutters/shutter-05.jpg', category: 'Shutters' },
  { id: 's6', src: '/shutters/shutter-06.jpg', category: 'Shutters' },
  { id: 's7', src: '/shutters/shutter-07.jpg', category: 'Shutters' },

  { id: 'c1', src: '/cupboards/cupboard-01.jpg', category: 'Cupboards' },
  { id: 'c2', src: '/cupboards/cupboard-02.jpg', category: 'Cupboards' },
  { id: 'c3', src: '/cupboards/cupboard-03.jpg', category: 'Cupboards' },
  { id: 'c4', src: '/cupboards/cupboard-04.jpg', category: 'Cupboards' },
  { id: 'c5', src: '/cupboards/cupboard-05.jpg', category: 'Cupboards' },
  { id: 'c6', src: '/cupboards/cupboard-06.jpg', category: 'Cupboards' },
  { id: 'c7', src: '/cupboards/cupboard-07.jpg', category: 'Cupboards' },
  { id: 'c8', src: '/cupboards/cupboard-08.jpg', category: 'Cupboards' },
  { id: 'c9', src: '/cupboards/cupboard-09.jpg', category: 'Cupboards' },
  { id: 'c10', src: '/cupboards/cupboard-10.jpg', category: 'Cupboards' },
  { id: 'c11', src: '/cupboards/cupboard-11.jpg', category: 'Cupboards' },
  { id: 'c12', src: '/cupboards/cupboard-12.jpg', category: 'Cupboards' },
  { id: 'c13', src: '/cupboards/cupboard-13.jpg', category: 'Cupboards' },
  { id: 'c14', src: '/cupboards/cupboard-14.jpg', category: 'Cupboards' },
  { id: 'c15', src: '/cupboards/cupboard-15.png', category: 'Cupboards' },

  { id: 'p1', src: '/partitions/partition-01.jpg', category: 'Partitions' },
  { id: 'p2', src: '/partitions/partition-02.jpg', category: 'Partitions' },
  { id: 'p3', src: '/partitions/partition-03.jpg', category: 'Partitions' },
  { id: 'p4', src: '/partitions/partition-04.jpg', category: 'Partitions' },
  { id: 'p5', src: '/partitions/partition-05.jpg', category: 'Partitions' },
  { id: 'p6', src: '/partitions/partition-06.jpg', category: 'Partitions' },
  { id: 'p7', src: '/partitions/partition-07.jpg', category: 'Partitions' },
  { id: 'p8', src: '/partitions/partition-08.jpg', category: 'Partitions' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory)

  const isCupboardsOnly = activeCategory === 'Cupboards'
  const isOtherOnly = activeCategory !== 'All' && activeCategory !== 'Cupboards'

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

        {/* Cupboards masonry layout */}
        {isCupboardsOnly && (
          <div className="mb-12">
            <FadeIn direction="up">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-serif text-primary-800">{categoryMeta['Cupboards'].title}</h2>
                <p className="text-primary-500 text-sm mt-1">{categoryMeta['Cupboards'].subtitle}</p>
              </div>
            </FadeIn>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <Image
                    src={project.src}
                    alt={categoryMeta[project.category].title}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index < 6 ? 'eager' : 'lazy'}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other categories masonry layout */}
        {(isOtherOnly || activeCategory === 'All') && (
          <div>
            {activeCategory !== 'All' && activeCategory !== 'Cupboards' && (
              <FadeIn direction="up">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-serif text-primary-800">{categoryMeta[activeCategory]?.title}</h2>
                  <p className="text-primary-500 text-sm mt-1">{categoryMeta[activeCategory]?.subtitle}</p>
                </div>
              </FadeIn>
            )}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {(isOtherOnly ? filteredProjects : filteredProjects.filter(p => p.category !== 'Cupboards')).map((project, index) => {
                const meta = categoryMeta[project.category]
                return (
                  <div key={project.id} className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <Image
                      src={project.src}
                      alt={meta.title}
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 6 ? 'eager' : 'lazy'}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/80 to-transparent p-4">
                      <p className="text-xs text-accent-gold font-medium mb-0.5">{meta.subtitle}</p>
                      <p className="text-white text-sm font-medium">{meta.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

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
