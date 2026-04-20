'use client'

import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { InstagramIcon } from './Icons'
import { CONTACT, WHATSAPP_CITA, PHONE, PHONE_LINK, EMAIL, EMAIL_LINK, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/constants'

const ease = [0.25, 0.1, 0.25, 1] as const

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #18CB96, #0F6B57)' }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="uppercase font-semibold text-xs tracking-[0.1em] text-white/80 mb-4"
        >
          {CONTACT.label}
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-[30px] lg:text-[44px] font-bold text-white leading-tight"
        >
          {CONTACT.h2}
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-5 text-white/85 text-lg max-w-[560px] mx-auto"
        >
          {CONTACT.paragraph}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8"
        >
          <a
            href={WHATSAPP_CITA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-brand-deep font-bold text-base rounded-full px-8 py-4 hover:bg-brand-mint transition-all duration-200"
          >
            {CONTACT.cta}
          </a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[15px]"
          >
            <Phone size={20} strokeWidth={1.5} />
            {PHONE}
          </a>
          <a
            href={EMAIL_LINK}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[15px]"
          >
            <Mail size={20} strokeWidth={1.5} />
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[15px]"
          >
            <InstagramIcon size={20} />
            {INSTAGRAM_HANDLE}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
