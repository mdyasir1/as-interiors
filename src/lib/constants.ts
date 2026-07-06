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
    facebook: 'a.s_interior__works',
    whatsapp: '917995944686',
  },
  workingHours: 'Mon-Sat: 9AM - 8PM',
  experience: '7+ Years',
  projectsCompleted: '500+',
}

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
    image: '/images/services/mosquito-doors.jpg',
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
    image: '/images/services/aluminium-windows.jpg',
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
      'Transform your home with our automated shutters. Control light, privacy, and security with a remote. Motor included for seamless automation.',
    image: '/images/services/automated-shutters.jpg',
    startingPrice: '₹699/sft',
    motorPrice: '₹18,999 (excluded + GST)',
    features: [
      'Remote control operation',
      'Motorized operation',
      'Premium quality',
      'Easy maintenance',
    ],
  },
  {
    id: 'aluminium-cupboards',
    title: 'Aluminium Cupboards',
    shortDescription: 'Durable aluminium cupboards for modern storage.',
    description:
      'Premium aluminium cupboards available in Indian profile, imported profile, and ACP sheet options with multiple colors. Choose between open or sliding door designs.',
    image: '/images/services/aluminium-cupboards.jpg',
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
    image: '/images/services/partitions.jpg',
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
    name: 'Rajesh Kumar',
    role: 'Homeowner, Vijayawada',
    content:
      'A.S Interiors transformed our home with their premium mosquito doors. Excellent quality and professional installation!',
    rating: 5,
    image: '/images/testimonials/rajesh.jpg',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    content:
      'Working with A.S Interiors was a pleasure. Their automated shutters are top-notch and add a luxury feel to any space.',
    rating: 5,
    image: '/images/testimonials/priya.jpg',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Business Owner',
    content:
      'Best aluminium windows we have installed. Great quality, perfect fit, and excellent after-sales support.',
    rating: 5,
    image: '/images/testimonials/amit.jpg',
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
