'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedText as="h1" className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6">
            Privacy Policy
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300">
              Last updated: January 2025
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper bg="light" className="py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif text-primary-800 mb-4">1. Information We Collect</h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                When you visit our website or contact us, we may collect personal information
                such as your name, email address, phone number, and project details. This
                information is collected solely to respond to your inquiries and provide our services.
              </p>

              <h2 className="text-2xl font-serif text-primary-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-primary-600 mb-4 leading-relaxed">We use your information to:</p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Process your service requests</li>
                <li>Improve our website and services</li>
                <li>Send you updates about your project (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-serif text-primary-800 mb-4">3. Information Protection</h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                We implement appropriate security measures to protect your personal information.
                Your data is stored securely and is only accessed by authorized personnel who
                need it to perform their job functions.
              </p>

              <h2 className="text-2xl font-serif text-primary-800 mb-4">4. Third-Party Sharing</h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to
                outside parties. This does not include trusted third parties who assist us
                in operating our website and servicing you, as long as those parties agree
                to keep this information confidential.
              </p>

              <h2 className="text-2xl font-serif text-primary-800 mb-4">5. Cookies</h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Our website may use cookies to enhance your experience. You can choose to
                have your computer warn you each time a cookie is being sent, or you can
                choose to turn off all cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-serif text-primary-800 mb-4">6. Your Rights</h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                You have the right to access, correct, or delete your personal information.
                If you wish to exercise any of these rights, please contact us using the
                information provided on our contact page.
              </p>

              <h2 className="text-2xl font-serif text-primary-800 mb-4">7. Changes to This Policy</h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be
                posted on this page with an updated revision date.
              </p>

              <h2 className="text-2xl font-serif text-primary-800 mb-4">8. Contact Us</h2>
              <p className="text-primary-600 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <p className="text-primary-800 font-medium mt-2">
                A.S Interiors<br />
                Email: bzasaad786@gmail.com<br />
                Phone: +91 79959 44686
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  )
}
