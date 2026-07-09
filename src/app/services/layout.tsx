import { Metadata } from 'next'
import { generateMetadata as getMetadata, SERVICES_SEO } from '@/lib/seo'

export const metadata: Metadata = getMetadata(SERVICES_SEO)

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
