'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { SITE_CONFIG, SERVICES, STATS, PROCESS_STEPS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent" />
        </div>

        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              variants={staggerItem}
              className="text-accent-gold font-medium tracking-widest uppercase mb-4"
            >
              Welcome to A.S Interiors
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6"
            >
              Your One-Stop Solution for{' '}
              <span className="text-gradient">Aluminium & Glass Works</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-primary-300 mb-8 max-w-2xl mx-auto"
            >
              Premium mosquito doors, aluminium windows, automated shutters, cupboards, and glass partitions. Serving all of Andhra Pradesh.
            </motion.p>
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <SectionWrapper bg="white" className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-accent-gold font-semibold">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-primary-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper bg="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-accent-gold font-medium tracking-widest uppercase mb-2">
              About Us
            </p>
            <h2 className="heading-primary mb-6">
              Quality Work at Affordable Prices
            </h2>
            <p className="text-primary-600 mb-4">
              With over 7 years of experience, A.S Interiors has been delivering premium aluminium and glass solutions across Andhra Pradesh. We started with a simple mission: to provide high-quality work at honest prices.
            </p>
            <p className="text-primary-600 mb-6">
              Today, we have our own manufacturing workshop and office, serving 500+ satisfied customers across 13+ cities.
            </p>
            <Link href="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="aspect-[4/3] bg-primary-200 rounded-lg overflow-hidden">
              {/* TODO: Replace with actual workshop/office image */}
              <div className="w-full h-full flex items-center justify-center text-primary-400">
                Workshop Image
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper bg="white">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p
            variants={staggerItem}
            className="text-accent-gold font-medium tracking-widest uppercase mb-2"
          >
            Our Services
          </motion.p>
          <motion.h2 variants={staggerItem} className="heading-primary">
            What We Offer
          </motion.h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className="group bg-background-light rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-primary-200 rounded-lg mb-4 overflow-hidden">
                {/* TODO: Replace with service image */}
                <div className="w-full h-full flex items-center justify-center text-primary-400">
                  {service.title}
                </div>
              </div>
              <h3 className="text-xl font-serif text-primary-800 mb-2 group-hover:text-accent-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-primary-600 text-sm mb-4">{service.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-accent-gold font-semibold">{service.startingPrice}</span>
                <Link
                  href={`/services/${service.id}`}
                  className="text-accent-gold hover:text-accent-darkGold flex items-center gap-1 text-sm font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper bg="light">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p
            variants={staggerItem}
            className="text-accent-gold font-medium tracking-widest uppercase mb-2"
          >
            How It Works
          </motion.p>
          <motion.h2 variants={staggerItem} className="heading-primary">
            Our Process
          </motion.h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-5 gap-4"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent-gold text-white flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                {step.step}
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">{step.title}</h3>
              <p className="text-sm text-primary-600">{step.description}</p>
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-accent-gold/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper bg="dark" className="text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-300 mb-8">
            Get a free consultation and quote for your project. Serving all of Andhra Pradesh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              WhatsApp Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Form
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  )
}
