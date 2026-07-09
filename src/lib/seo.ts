import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME, PHONE, EMAIL, ADDRESS } from './constants'

const SITE_NAME = COMPANY_NAME
const DEFAULT_DESCRIPTION = 'A.S Interiors - Premium aluminium and glass works in Vijayawada, Andhra Pradesh. Mosquito doors, aluminium windows, automated shutters, cupboards & partitions. 7+ years experience, 500+ projects.'

interface PageSEO {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
}

export function generateMetadata({
  title,
  description,
  path,
  image = '/og-default.jpg',
  noindex = false
}: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`
        }
      ],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl]
    }
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.5062,
      longitude: 80.6480
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    priceRange: '₹₹',
    image: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.instagram.com/a.s_interior__works/',
      'https://www.facebook.com/a.s_interior__works/'
    ]
  }
}

interface ServiceSchema {
  name: string
  description: string
  path: string
  price: string
}

export function generateServiceSchema({ name, description, path, price }: ServiceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      telephone: PHONE
    },
    areaServed: {
      '@type': 'State',
      name: 'Andhra Pradesh'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        price,
        unitText: 'Starting price'
      }
    }
  }
}

interface BreadcrumbItem {
  name: string
  path: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi', 'Telugu']
    },
    sameAs: [
      'https://www.instagram.com/a.s_interior__works/',
      'https://www.facebook.com/a.s_interior__works/'
    ]
  }
}

export const HOME_SEO: PageSEO = {
  title: 'Premium Aluminium & Glass Works',
  description: 'A.S Interiors - Vijayawada\'s trusted aluminium and glass works specialist. Mosquito doors from ₹1499, aluminium windows, automated shutters, cupboards & partitions. 7+ years experience, 500+ projects completed.',
  path: '/'
}

export const ABOUT_SEO: PageSEO = {
  title: 'About Us',
  description: 'Learn about A.S Interiors - 7+ years of excellence in aluminium and glass works across Andhra Pradesh. 500+ projects, 350+ satisfied customers in 13+ cities.',
  path: '/about'
}

export const SERVICES_SEO: PageSEO = {
  title: 'Our Services',
  description: 'Complete aluminium and glass solutions - Mosquito doors, aluminium windows, automated shutters, aluminium cupboards, and glass partitions. Premium quality at competitive prices.',
  path: '/services'
}

export const PORTFOLIO_SEO: PageSEO = {
  title: 'Our Portfolio',
  description: 'View our completed projects - 500+ aluminium and glass works installations across Andhra Pradesh. Mosquito doors, windows, shutters, cupboards & more.',
  path: '/portfolio'
}

export const CONTACT_SEO: PageSEO = {
  title: 'Contact Us',
  description: 'Get in touch with A.S Interiors. Call +91 79959 44686 or visit us at Lakshmi Tulasi Complex, PNT Colony, Vijayawada 520015. Free consultation available.',
  path: '/contact',
  noindex: false
}

export const PRIVACY_SEO: PageSEO = {
  title: 'Privacy Policy',
  description: 'Privacy policy for A.S Interiors website. Learn how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
  noindex: true
}

export const SERVICE_PAGES_SEO = {
  'mosquito-doors': {
    title: 'Mosquito Doors in Vijayawada',
    description: 'Premium mosquito doors starting ₹1499. Custom sizes, magnetic closure, durable mesh. Professional installation in Vijayawada and across Andhra Pradesh.',
    path: '/services/mosquito-doors',
    price: '1499'
  },
  'aluminium-windows': {
    title: 'Aluminium Windows',
    description: 'High-quality aluminium windows starting ₹549/sft. Sliding, casement, and custom designs. Energy-efficient and low maintenance.',
    path: '/services/aluminium-windows',
    price: '549'
  },
  'automated-shutters': {
    title: 'Automated Shutters',
    description: 'Motorized automated shutters starting ₹699/sft + ₹18,999 for motor. Remote control operation, enhanced security for commercial spaces.',
    path: '/services/automated-shutters',
    price: '699'
  },
  'aluminium-cupboards': {
    title: 'Aluminium Cupboards',
    description: 'Custom aluminium cupboards starting ₹649/sft. Modern designs, rust-proof, termite-proof. Perfect for kitchens, bedrooms, and offices.',
    path: '/services/aluminium-cupboards',
    price: '649'
  },
  'partitions': {
    title: 'Glass & Aluminium Partitions',
    description: 'Elegant glass and aluminium partitions starting ₹349/sft. Office cabins, room dividers, commercial spaces. Customizable designs.',
    path: '/services/partitions',
    price: '349'
  }
}
