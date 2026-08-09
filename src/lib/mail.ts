import nodemailer from 'nodemailer'
import {
  toContactData,
  renderContactNotification,
  renderContactAutoReply,
} from '@/lib/email-templates'
import { SITE_CONFIG } from '@/lib/constants'

export interface ContactFormData {
  name: string
  phone: string
  email?: string
  service?: string
  message?: string
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

const MAX_LENGTHS: Record<keyof ContactFormData, number> = {
  name: 100,
  phone: 20,
  email: 200,
  service: 100,
  message: 5000,
}

function validateForm(data: ContactFormData): { valid: boolean; error?: string } {
  const name = data.name?.trim() ?? ''
  const phone = data.phone?.trim() ?? ''

  if (!name) return { valid: false, error: 'Please enter your name.' }
  if (name.length > MAX_LENGTHS.name) return { valid: false, error: 'Name is too long.' }

  if (!phone) return { valid: false, error: 'Please enter your phone number.' }
  if (phone.length > MAX_LENGTHS.phone) return { valid: false, error: 'Phone number is too long.' }
  if (!/^[+\d][\d\s-]{6,19}$/.test(phone)) {
    return { valid: false, error: 'Please enter a valid phone number.' }
  }

  const email = data.email?.trim() ?? ''
  if (email && email.length > MAX_LENGTHS.email) return { valid: false, error: 'Email is too long.' }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: 'Please enter a valid email address.' }
  }

  if ((data.service?.trim() ?? '').length > MAX_LENGTHS.service) {
    return { valid: false, error: 'Service is too long.' }
  }
  if ((data.message?.trim() ?? '').length > MAX_LENGTHS.message) {
    return { valid: false, error: 'Message is too long.' }
  }

  return { valid: true }
}

let transporter: nodemailer.Transporter | null = null

function getTransporter(): nodemailer.Transporter {
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_APP_PASSWORD

  if (!user || !pass) {
    throw new Error('Email credentials are not configured.')
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user, pass },
      connectionTimeout: 15_000,
      greetingTimeout: 15_000,
      socketTimeout: 20_000,
    })
  }

  return transporter
}

function notificationText(data: ReturnType<typeof toContactData>): string {
  return [
    `New enquiry received from the ${SITE_CONFIG.name} website (${SITE_CONFIG.url.replace('https://', '')}).`,
    '',
    `Name:    ${data.name}`,
    `Phone:   ${data.phone}`,
    `Email:   ${data.email || 'Not provided'}`,
    `Service: ${data.service || 'Not specified'}`,
    '',
    'Message:',
    data.message || 'No message',
  ].join('\n')
}

function autoReplyText(data: ReturnType<typeof toContactData>): string {
  const firstName = data.name.split(' ')[0]
  return [
    `Dear ${firstName},`,
    '',
    `Thank you for contacting ${SITE_CONFIG.name}. We received your enquiry${data.service ? ` about ${data.service}` : ''}.`,
    '',
    'Our team will contact you shortly within one business day (Mon-Sat, 9 AM - 8 PM).',
    '',
    'You can also reach us directly:',
    `Phone: ${SITE_CONFIG.phone}`,
    `Email: ${SITE_CONFIG.email}`,
    `WhatsApp: https://wa.me/${SITE_CONFIG.social.whatsapp}`,
    '',
    `Thank you for choosing ${SITE_CONFIG.name} - premium aluminium & glass works across Andhra Pradesh.`,
  ].join('\n')
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { valid, error } = validateForm(data)
  if (!valid) throw new ValidationError(error ?? 'Invalid form data.')

  const user = process.env.EMAIL_USER!
  const contact = toContactData(data)

  const sender = `"A.S Interiors" <${user}>`

  await getTransporter().sendMail({
    from: sender,
    to: user,
    replyTo: contact.email || user,
    subject: `New Enquiry: ${contact.name} (${contact.service || 'General'})`,
    text: notificationText(contact),
    html: renderContactNotification(contact),
  })

  if (contact.email) {
    await getTransporter().sendMail({
      from: sender,
      to: contact.email,
      subject: 'Thank You for Contacting A.S Interiors',
      text: autoReplyText(contact),
      html: renderContactAutoReply(contact),
    })
  }
}