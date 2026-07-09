import { Metadata } from 'next'
import { generateMetadata as getMetadata, PORTFOLIO_SEO } from '@/lib/seo'

export const metadata: Metadata = getMetadata(PORTFOLIO_SEO)

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
