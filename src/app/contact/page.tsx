'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedText from '@/components/animations/AnimatedText'
import FadeIn from '@/components/animations/FadeIn'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

const serviceOptions = [
  { value: 'mosquito-doors', label: 'Mosquito Doors' },
  { value: 'aluminium-windows', label: 'Aluminium Windows' },
  { value: 'automated-shutters', label: 'Automated Shutters' },
  { value: 'aluminium-cupboards', label: 'Aluminium Cupboards' },
  { value: 'partitions', label: 'Partitions' },
  { value: 'other', label: 'Other' },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 1500)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-4 py-2 mb-6">
              <span className="text-accent-gold text-sm font-medium">Contact Us</span>
            </div>
          </FadeIn>
          <AnimatedText as="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Get In Touch
          </AnimatedText>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-primary-300 max-w-2xl">
              Ready to start your project? Contact us for a free consultation and quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <SectionWrapper bg="light" className="py-16 sm:py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <FadeIn direction="left">
              <h2 className="text-2xl sm:text-3xl font-serif text-primary-800 mb-6">
                Contact Information
              </h2>
              <p className="text-primary-600 mb-8">
                Reach out to us through any of the following channels. We&apos;re here to help!
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn direction="left" delay={0.1}>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Phone</h3>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-accent-gold hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                    {SITE_CONFIG.secondaryPhone && (
                      <p className="text-sm text-primary-500 mt-1">
                        Alt: {SITE_CONFIG.secondaryPhone}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Email</h3>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-gold hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Address</h3>
                    <p className="text-primary-600 text-sm">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.area},<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.4}>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Working Hours</h3>
                    <p className="text-primary-600 text-sm">{SITE_CONFIG.workingHours}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-serif text-primary-800 mb-6">
                Send Us a Message
              </h2>

              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Message Sent!</h3>
                  <p className="text-primary-600">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    label="Your Name"
                    placeholder="Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="rajesh@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Select
                    label="Service Interested In"
                    options={serviceOptions}
                    placeholder="Select a service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  />
                  <Textarea
                    label="Your Message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={formStatus === 'submitting'}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper bg="white" className="py-16">
        <div className="text-center mb-8">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl font-serif text-primary-800 mb-4">
            Find Us
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-primary-600 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
            {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
          </AnimatedText>
        </div>
        <FadeIn direction="up">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-primary-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1234567890123!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3566f2f1e1e1e1%3A0x1234567890abcdef!2sPNT%20Colony%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520015!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A.S Interiors Location - Vijayawada"
              className="w-full h-full"
            />
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  )
}
