import type { ContactFormData } from '@/lib/mail'

const COLORS = {
  dark: '#0d0d0d',
  card: '#161616',
  line: '#2a2a2a',
  gold: '#C9A962',
  goldDark: '#A68B4B',
  cream: '#F5F0E8',
  creamLight: '#efe9dc',
  muted: '#8a8478',
  text: '#1a1a1a',
  sub: '#737373',
}

const PHONE_DISPLAY = '+91 79959 44686'
const PHONE_TEL = 'tel:+917995944686'
const BUSINESS_EMAIL = 'bzasaad786@gmail.com'
const WHATSAPP = 'https://wa.me/917995944686'

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export type ContactData = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export function toContactData(data: ContactFormData): ContactData {
  return {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email?.trim() ?? '',
    service: data.service?.trim() ?? '',
    message: data.message?.trim() ?? '',
  }
}

interface ShellOptions {
  preheader: string
  body: string
}

const RESPONSIVE_STYLES = `
@media only screen and (max-width: 620px) {
  .outer-pad { padding: 12px 8px !important; }
  .hdr-pad { padding: 24px 16px 18px !important; }
  .body-pad { padding: 24px 16px !important; }
  .ftr-pad { padding: 18px 16px !important; }
  .brand-title { font-size: 20px !important; }
  .brand-sub { font-size: 9px !important; letter-spacing: 2px !important; }
  .body-h2 { font-size: 20px !important; }
  .body-text { font-size: 13px !important; line-height: 1.6 !important; }
  .detail-label { width: 86px !important; padding: 8px 10px !important; }
  .detail-value { padding: 8px 0 8px 12px !important; font-size: 13px !important; }
  .info-box { padding: 12px 14px !important; }
  .ftr-call { font-size: 12px !important; }
}
`

function shell({ preheader, body }: ShellOptions): string {
  const year = new Date().getFullYear()
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="dark" />
<meta name="x-color-scheme" content="dark" />
<style>${RESPONSIVE_STYLES}</style>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.dark};font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
<span style="display:none!important;font-size:1px;color:${COLORS.dark};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${preheader}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.dark};">
  <tr>
    <td align="center" class="outer-pad" style="padding:24px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:${COLORS.card};border-radius:14px;overflow:hidden;border:1px solid ${COLORS.line};">
        <tr>
          <td class="hdr-pad" style="padding:30px 28px 22px;text-align:center;background-color:${COLORS.dark};border-bottom:1px solid ${COLORS.line};">
            <p class="brand-title" style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:24px;letter-spacing:3px;font-weight:bold;color:${COLORS.gold};">A.S INTERIORS</p>
            <p class="brand-sub" style="margin:8px 0 0;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${COLORS.sub};">Aluminium &amp; Glass Works &bull; Vijayawada</p>
            <div style="margin:14px auto 0;width:42px;height:2px;background-color:${COLORS.gold};"></div>
          </td>
        </tr>
        <tr>
          <td class="body-pad" style="padding:30px 32px;background-color:${COLORS.cream};">
            ${body}
          </td>
        </tr>
      </table>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin-top:16px;">
        <tr>
          <td class="ftr-pad" style="padding:20px 28px;text-align:center;background-color:#0a0a0a;border:1px solid ${COLORS.line};border-radius:12px;">
            <p class="ftr-call" style="margin:0;font-size:13px;color:${COLORS.muted};line-height:1.9;">
              <strong style="color:#f0e9da;">Call:</strong> <a href="${PHONE_TEL}" style="color:${COLORS.gold};text-decoration:none;">${PHONE_DISPLAY}</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <strong style="color:#f0e9da;">Email:</strong> <a href="mailto:${BUSINESS_EMAIL}" style="color:${COLORS.gold};text-decoration:none;">${BUSINESS_EMAIL}</a>
            </p>
            <p style="margin:6px 0 0;font-size:12px;color:${COLORS.muted};line-height:1.7;">
              Lakshmi Tulasi Complex, PNT Colony, Vijayawada &mdash; 520015 &bull; Mon&ndash;Sat 9AM&ndash;8PM
            </p>
            <p style="margin:10px 0 0;font-size:11px;color:#55503f;">&copy; ${year} A.S Interiors &mdash; All rights reserved</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td class="detail-label" style="padding:10px 14px;background-color:#ece6da;color:#6b6559;font-size:11px;font-weight:bold;letter-spacing:1px;width:110px;vertical-align:top;border-radius:6px;">${label}</td>
    <td class="detail-value" style="padding:10px 0 10px 18px;color:${COLORS.text};font-size:14px;vertical-align:top;">${value || 'Not provided'}</td>
  </tr>`
}

function linkText(value: string, href?: string): string {
  return href
    ? `<a href="${escapeHtml(href)}" style="color:${COLORS.text};text-decoration:underline;">${escapeHtml(value)}</a>`
    : escapeHtml(value)
}

export function renderContactNotification(data: ContactData): string {
  const body = `
    <h2 class="body-h2" style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${COLORS.text};">New Website Enquiry</h2>
    <p class="body-text" style="margin:0 0 22px;font-size:13px;color:${COLORS.muted};line-height:1.6;">A customer filled the contact form on asinteriors.co.in</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${detailRow('NAME', linkText(data.name))}
      ${detailRow('PHONE', linkText(data.phone, `tel:${data.phone}`))}
      ${detailRow('EMAIL', data.email ? linkText(data.email, `mailto:${data.email}`) : 'Not provided')}
      ${detailRow('SERVICE', linkText(data.service))}
      <tr>
        <td class="detail-label" style="padding:12px 14px;background-color:#ece6da;color:#6b6559;font-size:11px;font-weight:bold;letter-spacing:1px;width:110px;vertical-align:top;border-radius:6px;">MESSAGE</td>
        <td class="detail-value" style="padding:12px 0 12px 18px;color:${COLORS.text};font-size:14px;vertical-align:top;white-space:pre-line;">${escapeHtml(data.message || 'No message')}</td>
      </tr>
    </table>
    <p class="info-box" style="margin:22px 0 0;padding:13px 16px;background-color:${COLORS.creamLight};border-left:3px solid ${COLORS.gold};font-size:12px;color:#83796a;border-radius:0 8px 8px 0;">
      Reply to this enquiry directly from your inbox &mdash; reach the customer back within business hours.
    </p>`

  return shell({
    preheader: `New enquiry from ${data.name} — ${data.service || 'General'}`,
    body,
  })
}

export function renderContactAutoReply(data: ContactData): string {
  const firstName = data.name.split(' ')[0]

  const body = `
    <h2 class="body-h2" style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:24px;color:${COLORS.text};">Thank You, ${escapeHtml(firstName)}!</h2>
    <p class="body-text" style="margin:0 0 16px;font-size:14px;color:${COLORS.muted};line-height:1.7;">
      We received your enquiry${data.service ? ` about <strong style="color:${COLORS.text};">${escapeHtml(data.service)}</strong>` : ''}
      and we&rsquo;re excited to help bring your space to life.
    </p>
    <p class="body-text" style="margin:0 0 16px;font-size:14px;color:${COLORS.muted};line-height:1.7;">
      One of our team members will contact you shortly at
      <strong style="color:${COLORS.text};">${escapeHtml(data.phone)}</strong>
      ${data.email ? `or <strong style="color:${COLORS.text};">${escapeHtml(data.email)}</strong>` : ''}
      within one business day (Mon&ndash;Sat, 9 AM &ndash; 8 PM).
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td class="info-box" style="padding:16px 20px;background-color:${COLORS.creamLight};border-radius:10px;border:1px solid #ded6c3;">
          <p style="margin:0;font-size:11px;color:#83796a;letter-spacing:1px;text-transform:uppercase;">You can also reach us directly</p>
          <p style="margin:8px 0 0;font-size:17px;color:${COLORS.text};font-weight:bold;">
            <a href="${PHONE_TEL}" style="color:${COLORS.text};text-decoration:none;">${PHONE_DISPLAY}</a>
          </p>
          <p style="margin:6px 0 0;font-size:13px;color:#83796a;">
            <a href="${WHATSAPP}" style="color:${COLORS.goldDark};text-decoration:none;">Chat with us on WhatsApp &rarr;</a>
          </p>
        </td>
      </tr>
    </table>
    <p class="body-text" style="margin:20px 0 0;font-size:13px;color:${COLORS.muted};line-height:1.7;">
      Thank you for choosing <strong style="color:${COLORS.text};">A.S Interiors</strong> &mdash; premium aluminium &amp; glass works across Andhra Pradesh.
    </p>`

  return shell({
    preheader: 'Thank you for contacting A.S Interiors',
    body,
  })
}