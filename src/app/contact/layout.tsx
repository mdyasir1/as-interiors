import { Metadata } from 'next'
import { generateMetadata as getMetadata, CONTACT_SEO } from '@/lib/seo'

export const metadata: Metadata = getMetadata(CONTACT_SEO)

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
