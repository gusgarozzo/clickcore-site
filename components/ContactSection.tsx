'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Phone, Mail, ArrowRight } from 'lucide-react'

function InstagramIcon({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none"/>
    </svg>
  )
}
import {
  CONTACT,
  PHONE,
  PHONE_LINK,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_REUNION,
} from '@/lib/constants'

export default function ContactSection() {
  const shouldReduce = useReducedMotion()

  const fadeUp = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as const },
          viewport: { once: true, margin: '-60px' as const },
        }

  return (
    <section
      id="contacto"
      className="bg-linear-to-br from-brand-green to-brand-deep py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.p
          {...fadeUp(0)}
          className="font-sans font-semibold text-[12px] text-white/80 tracking-[0.1em] uppercase mb-3"
        >
          {CONTACT.label}
        </motion.p>

        {/* H2 */}
        <motion.h2
          {...fadeUp(0.1)}
          className="font-sans font-bold text-white text-center m-0 mb-4 text-[30px] md:text-[44px]"
        >
          {CONTACT.h2}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-sans font-normal text-[18px] text-white/85 text-center max-w-[560px] mx-auto mb-10 leading-relaxed"
        >
          {CONTACT.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.3)} className="mb-10">
          <motion.a
            href={WHATSAPP_REUNION}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 bg-white text-brand-deep font-sans font-bold text-base px-10 py-4.5 rounded-full no-underline"
          >
            {CONTACT.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </motion.a>
        </motion.div>

        {/* Contact details */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap justify-center gap-8"
        >
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 text-white font-sans font-normal text-[15px] no-underline hover:opacity-75 transition-opacity duration-200"
          >
            <Phone size={18} className="text-white/80" aria-hidden="true" />
            {PHONE}
          </a>

          <a
            href={EMAIL_LINK}
            className="flex items-center gap-2 text-white font-sans font-normal text-[15px] no-underline hover:opacity-75 transition-opacity duration-200"
          >
            <Mail size={18} className="text-white/80" aria-hidden="true" />
            {EMAIL}
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-sans font-normal text-[15px] no-underline hover:opacity-75 transition-opacity duration-200"
          >
            <InstagramIcon size={18} color="rgba(255,255,255,0.8)" />
            {INSTAGRAM_HANDLE}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
