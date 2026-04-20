'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, WHATSAPP_CONSULTA } from '@/lib/constants'

function ClickcoreLogo({ color = '#373643' }: { color?: string }) {
  return (
    <a href="#hero" className="flex items-center gap-2">
      {/* SVG logo icon — double geometric cursors in green */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L14 4 L14 7 L7 7 L7 14 L4 14 Z" fill="#18CB96" />
        <path d="M10 10 L20 10 L20 13 L13 13 L13 20 L10 20 Z" fill="#18CB96" opacity="0.7" />
      </svg>
      <span className="font-bold text-lg" style={{ color }}>
        clickcore
      </span>
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(55,54,67,0.08)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <ClickcoreLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-brand-dark font-semibold text-sm hover:text-brand-green transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_CONSULTA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center bg-brand-green text-white font-bold text-[15px] rounded-full px-7 py-3.5 hover:bg-brand-medium hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(24,203,150,0.35)] transition-all duration-200"
        >
          Agendá tu consulta gratis
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-white"
          >
            <nav className="flex flex-col px-6 pb-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-dark font-semibold text-lg py-4 border-b border-brand-bg-light hover:text-brand-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_CONSULTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center bg-brand-green text-white font-bold text-[15px] rounded-full px-7 py-3.5 hover:bg-brand-medium transition-all duration-200"
              >
                Agendá tu consulta gratis
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
