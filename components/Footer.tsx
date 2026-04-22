'use client'

import { Phone, Mail } from 'lucide-react'

function InstagramIcon({ size = 15, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none"/>
    </svg>
  )
}
import {
  NAV_LINKS,
  FOOTER,
  PHONE,
  PHONE_LINK,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Col 1 — Logo + tagline */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-3 no-underline mb-4"
              aria-label="Clickcore — Inicio"
            >
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 4 L18 4 L18 8 L8 8 L8 18 L4 18 Z" fill="#18CB96" />
                <path d="M14 14 L28 14 L28 18 L18 18 L18 28 L14 28 Z" fill="#18CB96" opacity="0.7" />
              </svg>
              <span className="font-sans font-bold text-xl text-white tracking-tight">
                clickcore
              </span>
            </a>
            <p className="font-sans font-normal text-sm text-white/55 m-0 leading-relaxed max-w-[240px]">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="font-sans font-semibold text-xs text-brand-green tracking-widest uppercase mb-4">
              Navegación
            </p>
            <nav aria-label="Navegación del footer">
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans font-normal text-sm text-white/65 no-underline hover:text-brand-green transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="font-sans font-semibold text-xs text-brand-green tracking-widest uppercase mb-4">
              Contacto
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 font-sans font-normal text-sm text-white/65 no-underline hover:text-brand-green transition-colors duration-200"
                >
                  <Phone size={15} aria-hidden="true" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_LINK}
                  className="flex items-center gap-2 font-sans font-normal text-sm text-white/65 no-underline hover:text-brand-green transition-colors duration-200 break-all sm:break-normal"
                >
                  <Mail size={15} aria-hidden="true" className="shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans font-normal text-sm text-white/65 no-underline hover:text-brand-green transition-colors duration-200"
                >
                  <InstagramIcon size={15} />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <p
            className="font-sans font-normal text-[13px] text-white/40 m-0 text-center"
          >
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
