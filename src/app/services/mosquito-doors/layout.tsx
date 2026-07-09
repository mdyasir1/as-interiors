import { Metadata } from 'next'
import { generateMetadata as getMetadata, SERVICE_PAGES_SEO } from '@/lib/seo'

const seoData = SERVICE_PAGES_SEO['mosquito-doors']

export const metadata: Metadata = getMetadata(seoData)

export default function MosquitoDoorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
