'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HERO, WHATSAPP_CONSULTA } from '@/lib/constants'
import { LucideIcon } from './LucideIcon'

const ease = [0.25, 0.1, 0.25, 1] as const

function SplitWords({ text, highlight }: { text: string; highlight: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => {
        // Check if this word (stripped of punctuation) matches the highlight
        const cleanWord = word.replace(/[.,!?]/g, '')
        const isHighlight = highlight.split(' ').includes(cleanWord)
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease }}
            className={`inline-block mr-[0.3em] ${isHighlight ? 'text-brand-green' : ''}`}
          >
            {word}
          </motion.span>
        )
      })}
    </>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden pt-[72px]">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-mint opacity-60 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-green opacity-[0.08] blur-[60px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left column — text (55%) */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="inline-flex self-start items-center gap-2 bg-brand-mint text-brand-deep font-semibold text-[13px] rounded-full px-3.5 py-1.5 mb-6"
          >
            <LucideIcon name={HERO.badgeIcon} size={14} strokeWidth={2.5} />
            {HERO.badge}
          </motion.span>

          {/* H1 */}
          <h1 className="text-[36px] lg:text-[52px] font-bold text-brand-dark leading-[1.15] flex flex-wrap">
            <SplitWords text={HERO.h1} highlight={HERO.h1Highlight} />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mt-5 text-brand-text-gray text-base lg:text-lg max-w-[520px]"
          >
            {HERO.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mt-3 text-brand-text-gray text-base max-w-[520px]"
          >
            {HERO.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75, ease }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={WHATSAPP_CONSULTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-green text-white font-bold text-[15px] rounded-full px-7 py-3.5 hover:bg-brand-medium hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(24,203,150,0.35)] transition-all duration-200"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center border-2 border-brand-green text-brand-green font-semibold text-[15px] rounded-full px-7 py-3.5 hover:bg-brand-mint transition-all duration-200"
            >
              {HERO.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right column — mockup (45%) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="w-full lg:w-[45%] relative"
        >
          <div className="bg-brand-bg-light rounded-3xl p-4 overflow-hidden shadow-sm">
            <Image
              src="/images/hero-mockup-instagram.png"
              alt="Mockup de celular con feed de Instagram profesional para Clickcore"
              width={400}
              height={700}
              priority={true}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-2.5 shadow-[0_2px_16px_rgba(55,54,67,0.07)] flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-mint flex items-center justify-center text-brand-green">
              <LucideIcon name={HERO.floatingBadgeIcon} size={18} strokeWidth={2} />
            </div>
            <span className="font-semibold text-[13px] text-brand-dark">
              {HERO.floatingBadge}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
