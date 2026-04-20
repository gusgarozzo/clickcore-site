'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ABOUT, WHATSAPP_DEFAULT } from '@/lib/constants'
import { LucideIcon } from './LucideIcon'

const ease = [0.25, 0.1, 0.25, 1] as const

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-brand-bg-light py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative"
          >
            <div className="relative group overflow-hidden rounded-[20px]">
              <Image
                src="/images/josefina-arredondo.jpg"
                alt="Josefina Arredondo - Fundadora de Clickcore"
                width={480}
                height={600}
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-[0_2px_16px_rgba(55,54,67,0.07)] flex items-center gap-2">
                <LucideIcon name={ABOUT.badgeIcon} size={15} strokeWidth={2.5} className="text-brand-green" />
                <span className="font-semibold text-[13px] text-brand-dark">
                  {ABOUT.badge}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              viewport={{ once: true, margin: '-60px' }}
              className="uppercase font-semibold text-xs tracking-[0.1em] text-brand-green mb-4"
            >
              {ABOUT.label}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              viewport={{ once: true, margin: '-60px' }}
              className="text-[30px] lg:text-[44px] font-bold text-brand-dark leading-tight"
            >
              {ABOUT.h2}
            </motion.h2>

            <div className="mt-6 space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="text-brand-text-gray text-[17px] leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease }}
              viewport={{ once: true, margin: '-60px' }}
              className="mt-8"
            >
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-green text-white font-bold text-[15px] rounded-full px-7 py-3.5 hover:bg-brand-medium hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(24,203,150,0.35)] transition-all duration-200"
              >
                {ABOUT.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
