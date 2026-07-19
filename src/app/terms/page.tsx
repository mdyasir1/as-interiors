'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import { SITE_CONFIG } from '@/lib/constants'

const sections = [
  {
    title: 'Our Services',
    content: `We specialize in aluminium and glass works — including mosquito doors & windows, aluminium windows, automated shutters, aluminium cupboards, and glass partitions. Each product is crafted and installed by our experienced team.`
  },
  {
    title: 'Quotations & Pricing',
    content: `Prices quoted are indicative and based on the specifications discussed. Final pricing may vary slightly after actual measurements. We will confirm the final price before starting any work.`
  },
  {
    title: 'Orders & Payments',
    content: `Once you confirm an order, we require an advance payment to begin work. The remaining amount is due after installation is complete. We accept cash, UPI, and bank transfers.`
  },
  {
    title: 'Installation Timeline',
    content: `We complete installations within the timeframe discussed at the time of order. Delays may occur due to weather or material availability — we will keep you informed if anything changes.`
  },
  {
    title: 'Warranty',
    content: `We stand by the quality of our work. Our installations come with a warranty covering manufacturing defects and installation issues under normal use. Damage from misuse or accidents is not covered.`
  },
  {
    title: 'Cancellations',
    content: `You may cancel before work begins for a full refund. Once we start production or installation, a cancellation charge may apply based on the work done so far.`
  },
  {
    title: 'Contact Us',
    content: `Have questions? Reach out anytime:\n\n${SITE_CONFIG.name}\nPhone: ${SITE_CONFIG.phone}\nEmail: ${SITE_CONFIG.email}\nAddress: ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}`
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedText as="h1" className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6">
            Terms & Conditions
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-300 text-sm sm:text-base max-w-2xl">
            Please read these terms carefully before using our services.
          </AnimatedText>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper bg="light" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-primary-600 text-sm sm:text-base mb-8">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </FadeIn>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div>
                  <h2 className="text-lg sm:text-xl font-serif text-primary-800 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base text-primary-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
