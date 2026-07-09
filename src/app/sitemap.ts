import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/services/mosquito-doors',
    '/services/aluminium-windows',
    '/services/automated-shutters',
    '/services/aluminium-cupboards',
    '/services/partitions',
    '/portfolio',
    '/contact',
    '/privacy-policy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' ? 0.9 : 0.8,
  }))
}
