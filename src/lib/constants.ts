export const SITE_CONFIG = {
  name: 'A.S Interiors',
  tagline: 'Crafting Perfect Spaces',
  description:
    'Premium mosquito doors, aluminium windows, automated home shutters, and mosquito protection solutions.',
  url: 'https://asinteriors.com', // TODO: Replace with actual domain
  email: 'info@asinteriors.com', // TODO: Replace with actual email
  phone: '+91 98765 43210', // TODO: Replace with actual phone
  address: {
    street: '123 Interior Design Street', // TODO: Replace
    city: 'Mumbai',
    state: 'Maharashtra',
    zip: '400001',
    country: 'India',
  },
  social: {
    instagram: 'https://instagram.com/asinteriors', // TODO: Replace
    facebook: 'https://facebook.com/asinteriors', // TODO: Replace
    youtube: 'https://youtube.com/@asinteriors', // TODO: Replace
    whatsapp: '919876543210', // TODO: Replace
  },
}

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Mosquito Doors', href: '/services/mosquito-doors' },
      { name: 'Aluminium Windows', href: '/services/aluminium-windows' },
      { name: 'Automated Shutters', href: '/services/automated-shutters' },
      { name: 'Mosquito Protection', href: '/services/mosquito-protection' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'mosquito-doors',
    title: 'Mosquito Doors',
    shortDescription: 'Premium mosquito protection doors for every entrance.',
    description:
      'Our mosquito doors provide maximum protection without compromising on style. Available in sliding, hinged, and magnetic closure options.',
    image: '/images/services/mosquito-doors.jpg', // TODO: Replace
    features: ['Anti-rust aluminum frame', 'Premium mesh quality', 'Easy installation', 'Custom sizes available'],
  },
  {
    id: 'aluminium-windows',
    title: 'Aluminium Windows',
    shortDescription: 'Modern aluminium windows for contemporary homes.',
    description:
      'Sleek, durable, and energy-efficient aluminium windows that enhance your home aesthetics while providing excellent ventilation.',
    image: '/images/services/aluminium-windows.jpg', // TODO: Replace
    features: ['Thermal break technology', 'Noise reduction', 'Powder coated finish', 'Weather resistant'],
  },
  {
    id: 'automated-shutters',
    title: 'Automated Shutters',
    shortDescription: 'Smart home shutters at the touch of a button.',
    description:
      'Transform your home with our automated shutters. Control light, privacy, and security with a remote or smartphone app.',
    image: '/images/services/automated-shutters.jpg', // TODO: Replace
    features: ['Remote control operation', 'Smart home integration', 'Motorized blinds', 'Timer settings'],
  },
  {
    id: 'mosquito-protection',
    title: 'Mosquito Protection',
    shortDescription: 'Complete mosquito protection for your entire home.',
    description:
      'From windows to doors to outdoor areas, we provide comprehensive mosquito protection solutions for a bite-free living.',
    image: '/images/services/mosquito-protection.jpg', // TODO: Replace
    features: ['Full home coverage', 'Pet friendly', 'Long lasting mesh', 'Easy maintenance'],
  },
]

export const STATS = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Happy Customers', value: 350, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Cities Served', value: 5, suffix: '+' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    content:
      'A.S Interiors transformed our home with their premium mosquito doors. Excellent quality and professional installation!',
    rating: 5,
    image: '/images/testimonials/rajesh.jpg', // TODO: Replace
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    content:
      'Working with A.S Interiors was a pleasure. Their automated shutters are top-notch and add a luxury feel to any space.',
    rating: 5,
    image: '/images/testimonials/priya.jpg', // TODO: Replace
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Business Owner',
    content:
      'Best aluminium windows we have installed. Great quality, perfect fit, and excellent after-sales support.',
    rating: 5,
    image: '/images/testimonials/amit.jpg', // TODO: Replace
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We discuss your requirements and take measurements.',
  },
  {
    step: 2,
    title: 'Design',
    description: 'Our team creates a custom design tailored to your space.',
  },
  {
    step: 3,
    title: 'Installation',
    description: 'Professional installation by our expert team.',
  },
  {
    step: 4,
    title: 'Support',
    description: 'Ongoing maintenance and warranty support.',
  },
]
