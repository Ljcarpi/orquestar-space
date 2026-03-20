import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GradientButton } from '@/components/ui/gradient-button'
import { Menu, X } from 'lucide-react'

const WA_URL = 'https://wa.me/5491162857653?text=Hola%2C%20quiero%20una%20demo%20de%20OrquestAr'

const NAV_LINKS = [
  { label: 'Solución', href: '#solucion' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10,1,24,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,67,0.1)' : 'none',
        paddingTop: scrolled ? '12px' : '20px',
        paddingBottom: scrolled ? '12px' : '20px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="OrquestAr" className="h-9 w-auto" />
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            OrquestAr
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
            >
              <span className="relative">
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: '#d4a843' }}
                />
              </span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            <GradientButton>Quiero una demo</GradientButton>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-3 rounded-lg transition-colors"
          style={{ color: '#f0e6d3', background: 'rgba(255,255,255,0.06)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(10,1,24,0.98)', borderBottom: '1px solid rgba(212,168,67,0.12)' }}
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 px-3 text-base font-medium rounded-lg transition-colors"
                  style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <GradientButton className="w-full">Quiero una demo</GradientButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
