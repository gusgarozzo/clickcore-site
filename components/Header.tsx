'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_DIAGNOSTICO } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline" aria-label="Clickcore — Inicio">
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 4 L18 4 L18 8 L8 8 L8 18 L4 18 Z" fill="#18CB96" />
            <path d="M14 14 L28 14 L28 18 L18 18 L18 28 L14 28 Z" fill="#18CB96" opacity="0.7" />
          </svg>
          <span className="font-sans font-bold text-2xl text-brand-dark tracking-tight">
            clickcore
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-sans font-semibold text-sm text-brand-dark hover:text-brand-green transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a
          href={WHATSAPP_DIAGNOSTICO}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(24,203,150,0.35)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="hidden md:inline-flex items-center bg-brand-green hover:bg-brand-medium text-white font-sans font-bold text-[15px] px-7 py-3.5 rounded-full transition-colors duration-200 no-underline"
          aria-label="Solicitar diagnóstico gratuito"
        >
          Solicitar diagnóstico
        </motion.a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-brand-dark"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-white/98 backdrop-blur-md border-t border-brand-dark/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-0">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="font-sans font-normal text-lg text-brand-dark no-underline py-4 border-b border-brand-dark/5 block"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="block mt-4 bg-brand-green text-white font-sans font-bold text-[15px] p-4 rounded-full text-center mb-2 no-underline"
              >
                Solicitar diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
