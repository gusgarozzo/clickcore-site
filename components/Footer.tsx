import { NAV_LINKS, PHONE, EMAIL, INSTAGRAM_HANDLE, PHONE_LINK, EMAIL_LINK, INSTAGRAM_URL, FOOTER, WHATSAPP_DEFAULT } from '@/lib/constants'
import { Phone, Mail } from 'lucide-react'
import { InstagramIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Logo */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-3">
              {/* Logo white */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4 L14 4 L14 7 L7 7 L7 14 L4 14 Z" fill="#18CB96" />
                <path d="M10 10 L20 10 L20 13 L13 13 L13 20 L10 20 Z" fill="#18CB96" opacity="0.7" />
              </svg>
              <span className="font-bold text-lg text-white">clickcore</span>
            </a>
            <p className="text-white/60 text-sm">{FOOTER.tagline}</p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="uppercase font-semibold text-xs tracking-[0.1em] text-brand-green mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="uppercase font-semibold text-xs tracking-[0.1em] text-brand-green mb-4">
              Contacto
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/70 hover:text-brand-green transition-colors">
                  <Phone size={18} strokeWidth={1.5} className="text-brand-green" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_LINK} className="flex items-center gap-2.5 text-white/70 hover:text-brand-green transition-colors">
                  <Mail size={18} strokeWidth={1.5} className="text-brand-green" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/70 hover:text-brand-green transition-colors">
                  <InstagramIcon size={18} className="text-brand-green" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-white/40 text-[13px] text-center">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
