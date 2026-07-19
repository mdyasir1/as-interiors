export const SITE_CONFIG = {
  name: 'A.S Interiors',
  tagline: 'Your One-Stop Solution for Aluminium & Glass Works',
  description:
    'Premium mosquito doors, aluminium windows, automated shutters, aluminium cupboards, and glass partitions. Serving all of Andhra Pradesh with 7+ years of experience.',
  url: 'https://asinteriors.co.in',
  email: 'bzasaad786@gmail.com',
  phone: '+91 79959 44686',
  secondaryPhone: '+91 70958 66278',
  whatsapp: '+91 79959 44686',
  address: {
    street: 'Lakshmi Tulasi Complex, 9th Road, PNT Colony',
    area: 'Ambapuram',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    zip: '520015',
    country: 'India',
  },
  social: {
    instagram: 'a.s_interior__works',
    facebook: 'https://www.facebook.com/share/1BaFRagfUu/',
    whatsapp: '917995944686',
  },
  workingHours: 'Mon-Sat: 9AM - 8PM',
  experience: '7+ Years',
  projectsCompleted: '500+',
}

// Individual exports for SEO and other modules
export const SITE_URL = SITE_CONFIG.url
export const COMPANY_NAME = SITE_CONFIG.name
export const PHONE = SITE_CONFIG.phone
export const EMAIL = SITE_CONFIG.email
export const ADDRESS = SITE_CONFIG.address

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Mosquito Doors & Windows', href: '/services/mosquito-doors' },
      { name: 'Aluminium Windows', href: '/services/aluminium-windows' },
      { name: 'Automated Shutters', href: '/services/automated-shutters' },
      { name: 'Aluminium Cupboards', href: '/services/aluminium-cupboards' },
      { name: 'Partitions', href: '/services/partitions' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'mosquito-doors',
    title: 'Mosquito Doors & Windows',
    shortDescription: 'Premium aluminium mosquito protection for every entrance.',
    description:
      'Our mosquito doors provide maximum protection without compromising on style. Available in aluminum open, grill, sliding, metal security, and fibre magnetic options. Window types include PVC mats, 1-inch frames, and sleek panel frames.',
    image: '/mosquito doors/mosquito-door-09.jpg',
    startingPrice: '₹1,499',
    features: [
      'Lock system',
      'Waterproof',
      'Rustproof',
      'Termiteproof',
      'Heavy quality material',
    ],
    types: {
      doors: [
        'Aluminum Open Mosquito Doors',
        'Open Grill Mosquito Doors',
        'Sliding Mosquito Doors',
        'Metal Security Mosquito Doors',
        'Fibre Magnetic Mosquito Curtain',
      ],
      windows: [
        'PVC Mosquito Mats',
        '1 Inch Window Mosquito Door',
        'Sleek Panel Mosquito Frames',
      ],
    },
  },
  {
    id: 'aluminium-windows',
    title: 'Aluminium Windows',
    shortDescription: 'Modern aluminium windows for contemporary homes.',
    description:
      'Sleek, durable, and energy-efficient aluminium windows that enhance your home aesthetics while providing excellent ventilation. Available in sliding and domal designs with multiple glass options.',
    image: '/aluminium windows/window-09.jpg',
    startingPrice: '₹549/sft',
    features: [
      'Lock system',
      'Waterproof',
      'Rustproof',
      'Termiteproof',
      'Heavy quality material',
    ],
    glassTypes: [
      'Toughened Glass',
      'Kacha Glass',
      'Multiple colors & models as per requirement',
    ],
    types: ['Sliding Windows', 'Domal Aluminium Sliding Windows'],
  },
  {
    id: 'automated-shutters',
    title: 'Automated Shutters',
    shortDescription: 'Smart home shutters at the touch of a button.',
    description:
      'Transform your home with our automated shutters. Control light, privacy, and security with a remote. Motor included for seamless automation. Our shutters are built with high-quality aluminium alloy construction and foam-filled profiles for additional strength and silent operation.',
    image: '/shutters/shutter-04.jpg',
    startingPrice: '₹699/sft',
    motorPrice: '₹18,999 (excluded + GST)',
    features: [
      'Temperature control',
      'Weather protection',
      'Energy savings',
      'Waterproof',
      'Dust & pollution protection',
      'Privacy & light control',
      'Noise reduction',
      'Property & furniture protection',
    ],
    specifications: {
      construction: [
        'High quality Aluminium alloy construction',
        'Foam filled profile for additional strength and silent operation',
        'Double wall extruded commercial profile',
        'Double coated + lacquer for abrasion resistant finish',
        'High quality internal sealed bearings',
        'Width up to 2900 mm',
      ],
      operation: [
        'Can be manually operated or motorised',
        'Roll tight design',
        'High quality painted finish',
        'Wide range of colours',
      ],
    },
    benefits: [
      'Temperature control',
      'Weather protection',
      'Energy savings',
      'Waterproof',
      'Avoid dust / Avoid air pollution',
      'Privacy and light control',
      'Noise reduction / avoid noise pollution',
      'For light, heat and noise reduction',
      'For property / furniture protection',
    ],
  },
  {
    id: 'aluminium-cupboards',
    title: 'Aluminium Cupboards',
    shortDescription: 'Durable aluminium cupboards for modern storage.',
    description:
      'Premium aluminium cupboards available in Indian profile, imported profile, and ACP sheet options with multiple colors. Choose between open or sliding door designs.',
    image: '/cupboards/cupboard-01.jpg',
    startingPrice: '₹649/sft',
    features: [
      'Waterproof',
      'Rustproof',
      'Termiteproof',
      'Fireproof',
      'Heavy quality material',
      'Zero maintenance',
    ],
    types: [
      'Indian Profile Cupboards',
      'Imported Profile Cupboards',
      'ACP Sheet Cupboards (Multiple Colors)',
    ],
    doorTypes: ['Open Doors', 'Sliding Doors'],
  },
  {
    id: 'partitions',
    title: 'Partitions',
    shortDescription: 'Aluminium and glass partitions for spaces.',
    description:
      'Premium partition solutions including aluminium cabins, toughened glass partitions, front glass doors, laminated glass works, and sandwich vacuum glass works.',
    image: '/partitions/partition-01.jpg',
    startingPrice: '₹349/sft',
    features: {
      aluminium: ['50% Sound Proof', 'Termite Proof', 'Easy Maintenance'],
      glass: ['Fireproof', 'Bulletproof', 'Shatterproof', 'Soundproof'],
    },
    types: [
      'Aluminium Partitions',
      'Aluminium Cabins',
      'Toughened Glass Partitions',
      'Front Glass Doors',
      'Laminated Glass Works',
      'Sandwich Vacuum Glass Works',
    ],
  },
]

export const STATS = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 7, suffix: '+' },
  { label: 'Happy Customers', value: 350, suffix: '+' },
  { label: 'Cities Served', value: 13, suffix: '+' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sathya Ravi Teja',
    role: '10 months ago',
    content:
      'I have contacted lot of similar interior works all around Vijayawada. But A.S interior works provided me the best quality service at reasonable prices. They have stunning designs for the homes, offices. They did interior works for my home it was fabulous. Thank you A.S interior works for the service. Wishing you a good business.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Krishna Kishore',
    role: '4 weeks ago',
    content:
      'Very professional and good quality of work. Highly recommend.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohammad Fariyaz',
    role: '9 months ago',
    content:
      'Excellent service! Mr. Usman did an amazing job with the mosquito net repair work installation at my home. Highly recommended! Thank you Mr. Saadh.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Basha Sk',
    role: '10 months ago',
    content:
      'Talking language is very good friendly staff. I am happy to give my work to A.S Interiors. Very good quality and finishing work and very reasonable price. I am satisfied.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Sramayeva Jayathe',
    role: '9 months ago',
    content:
      'Very excellent! We are happy with this folding mesh door with the aluminium grill and it looks very beautiful.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Kommu Laxmna',
    role: '4 days ago',
    content:
      'Very nice and good work. Finishing is nice.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Kesavarao Darsinala',
    role: '10 months ago',
    content:
      'Excellent work.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Kuramarao 359',
    role: '10 months ago',
    content:
      'Good work, good quality.',
    rating: 5,
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We discuss your requirements and understand your needs.',
  },
  {
    step: 2,
    title: 'Select Design',
    description: 'Choose from our range of designs or get a custom solution.',
  },
  {
    step: 3,
    title: 'Measurements',
    description: 'Our team takes precise measurements for perfect fit.',
  },
  {
    step: 4,
    title: 'Installation',
    description: 'Professional installation by our expert team.',
  },
  {
    step: 5,
    title: 'Support',
    description: 'Ongoing maintenance and warranty support.',
  },
]

export const ANDHRA_PRADESH_CITIES = [
  'Vijayawada',
  'Visakhapatnam',
  'Guntur',
  'Nellore',
  'Kurnool',
  'Rajahmundry',
  'Tirupati',
  'Kakinada',
  'Kadapa',
  'Anantapur',
  'Ongole',
  'Eluru',
  'Machilipatnam',
]
