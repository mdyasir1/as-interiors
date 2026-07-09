import { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms and conditions for ${COMPANY_NAME} services. Read our terms for aluminium and glass works installations, payments, warranties, and more.`,
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: `Terms & Conditions | ${COMPANY_NAME}`,
    description: `Terms and conditions for ${COMPANY_NAME} services.`,
    url: `${SITE_URL}/terms`,
    type: 'website'
  }
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
