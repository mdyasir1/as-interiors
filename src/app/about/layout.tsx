import { Metadata } from 'next'
import { generateMetadata as getMetadata, ABOUT_SEO } from '@/lib/seo'

export const metadata: Metadata = getMetadata(ABOUT_SEO)

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
