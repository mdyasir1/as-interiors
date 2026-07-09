import { Metadata } from 'next'
import { generateMetadata as getMetadata, PRIVACY_SEO } from '@/lib/seo'

export const metadata: Metadata = getMetadata(PRIVACY_SEO)

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
