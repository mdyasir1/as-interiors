'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { useLenis } from '@/components/providers/LenisContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { lenis } = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Lock scroll using Lenis API when mobile menu is open
  useEffect(() => {
    if (!lenis) return

    if (isOpen) {
      lenis.stop()
    } else {
      lenis.start()
    }

    return () => {
      lenis.start()
    }
  }, [isOpen, lenis])

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const textColor = isScrolled ? 'text-primary-800' : 'text-white'
  const textSecondaryColor = isScrolled ? 'text-primary-600' : 'text-white/80'
  const hoverColor = isScrolled ? 'hover:text-accent-gold' : 'hover:text-accent-gold'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="A.S Interiors"
                className={`h-8 md:h-10 w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-0' : ''
                }`}
                width={40}
                height={40}
              />
              <span className={`text-lg md:text-2xl font-serif font-semibold ${textColor} group-hover:text-accent-gold transition-colors duration-300`}>
                A.S Interiors
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 py-2 text-sm font-medium ${hoverColor} transition-colors duration-200 ${
                      pathname === link.href ? 'text-accent-gold' : textSecondaryColor
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 pt-2"
                      >
                        <div className="bg-white rounded-lg shadow-lg border border-primary-100 py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors duration-200 ${
                                pathname === child.href
                                  ? 'bg-accent-cream text-accent-darkGold'
                                  : 'text-primary-600 hover:bg-primary-50 hover:text-accent-gold'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={`flex items-center gap-2 ${textSecondaryColor} hover:text-accent-gold transition-colors duration-300`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Us</span>
              </a>
              <Link href="/contact" className="btn-primary text-sm">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${textColor} hover:text-accent-gold transition-colors duration-200`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Rendered OUTSIDE header for proper z-index stacking */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              key="mobile-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-white shadow-xl z-[100] lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-primary-100">
                  <div className="flex items-center gap-2">
                    <img
                      src="/logo.png"
                      alt="A.S Interiors"
                      className="h-7 w-auto brightness-0"
                      width={28}
                      height={28}
                    />
                    <span className="text-lg font-serif font-semibold text-primary-800">
                      A.S Interiors
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-600 hover:text-accent-gold transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.children ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(link.name)}
                            className={`w-full flex items-center justify-between px-6 py-3.5 text-left transition-colors duration-200 min-h-[48px] ${
                              pathname === link.href
                                ? 'text-accent-gold bg-accent-cream'
                                : 'text-primary-600 hover:text-accent-gold hover:bg-primary-50'
                            }`}
                          >
                            <span className="font-medium">{link.name}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === link.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-primary-50"
                              >
                                {link.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className={`block pl-10 pr-6 py-3 text-sm transition-colors duration-200 min-h-[44px] flex items-center ${
                                      pathname === child.href
                                        ? 'text-accent-gold bg-accent-cream'
                                        : 'text-primary-500 hover:text-accent-gold hover:bg-primary-100'
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block px-6 py-3.5 font-medium transition-colors duration-200 min-h-[48px] flex items-center ${
                            pathname === link.href
                              ? 'text-accent-gold bg-accent-cream'
                              : 'text-primary-600 hover:text-accent-gold hover:bg-primary-50'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Menu Footer */}
                <div className="p-4 border-t border-primary-100 space-y-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-2 text-primary-600 hover:text-accent-gold transition-colors duration-200 py-3 min-h-[48px]"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">{SITE_CONFIG.phone}</span>
                  </a>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block py-3 min-h-[48px] flex items-center justify-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
