'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import { SITE_CONFIG } from '@/lib/constants'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the services of ${SITE_CONFIG.name} ("Company," "we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`
  },
  {
    title: '2. Services',
    content: `We provide aluminium and glass works services including but not limited to mosquito doors and windows, aluminium windows, automated shutters, aluminium cupboards, and glass partitions. All services are subject to availability and our acceptance of your order.`
  },
  {
    title: '3. Quotations and Pricing',
    content: `All quotations provided are valid for 30 days from the date of issue. Prices are subject to change without prior notice. Final pricing will be confirmed upon order confirmation and may vary based on final measurements and specifications. Prices mentioned on the website are indicative starting prices and may vary based on size, design, and material selection.`
  },
  {
    title: '4. Orders and Confirmation',
    content: `An order is considered confirmed only after receiving the agreed advance payment and written confirmation. Any changes to the confirmed order may result in additional charges and timeline adjustments.`
  },
  {
    title: '5. Payment Terms',
    content: `Payment terms will be agreed upon at the time of order confirmation. Typically, an advance payment is required before work begins, with the balance due upon completion. We accept payments via cash, bank transfer, UPI, and other agreed payment methods. Late payments may incur additional charges.`
  },
  {
    title: '6. Installation Timeline',
    content: `We strive to complete all installations within the agreed timeline. However, timelines are estimates and may be affected by factors beyond our control including weather, site conditions, material availability, and force majeure events. We will communicate any delays promptly.`
  },
  {
    title: '7. Warranty',
    content: `We provide warranty on our installations as per the warranty card provided at the time of handover. Warranty covers manufacturing defects and installation issues under normal use conditions. Warranty does not cover damage from misuse, accidents, unauthorized modifications, or natural wear and tear.`
  },
  {
    title: '8. Customer Responsibilities',
    content: `The customer is responsible for providing accurate measurements and specifications. Any discrepancies in measurements provided by the customer that result in rework will be charged separately. The customer must ensure adequate access to the installation site.`
  },
  {
    title: '9. Cancellation Policy',
    content: `Orders may be cancelled before work begins with a full refund of the advance payment. Once work has commenced, cancellation charges may apply based on the work completed and materials procured. Custom-made items cannot be cancelled once production has started.`
  },
  {
    title: '10. Limitation of Liability',
    content: `Our liability is limited to the value of the services provided. We are not liable for any indirect, incidental, or consequential damages. We are not responsible for delays caused by force majeure events including but not limited to natural disasters, government actions, or pandemic-related restrictions.`
  },
  {
    title: '11. Intellectual Property',
    content: `All designs, images, and content on this website are the property of ${SITE_CONFIG.name} and are protected by intellectual property laws. Reproduction or distribution without written permission is prohibited.`
  },
  {
    title: '12. Privacy',
    content: `Your use of our services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. Please review our Privacy Policy available at /privacy-policy.`
  },
  {
    title: '13. Dispute Resolution',
    content: `Any disputes arising from these terms or our services shall be resolved through good faith negotiation. If resolution cannot be reached, disputes shall be subject to the jurisdiction of courts in Vijayawada, Andhra Pradesh, India.`
  },
  {
    title: '14. Modifications',
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.`
  },
  {
    title: '15. Contact Information',
    content: `For any questions about these Terms and Conditions, please contact us at:\n\n${SITE_CONFIG.name}\nPhone: ${SITE_CONFIG.phone}\nEmail: ${SITE_CONFIG.email}\nAddress: ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}`
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
