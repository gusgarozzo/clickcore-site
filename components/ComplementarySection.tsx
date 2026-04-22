'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Compass, Layout, Paintbrush, MessageSquare, LucideIcon, ArrowRight } from 'lucide-react'
import { COMPLEMENTARY, WHATSAPP_CONSULTAR } from '@/lib/constants'

const ICON_MAP: Record<string, LucideIcon> = {
  Compass,
  Layout,
  Paintbrush,
  MessageSquare,
}

export default function ComplementarySection() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="servicios-complementarios"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.p
          {...(shouldReduce ? {} : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true, margin: '-60px' },
          })}
          className="font-sans font-semibold text-[12px] text-brand-green tracking-[0.1em] uppercase text-center mb-3"
        >
          {COMPLEMENTARY.label}
        </motion.p>

        {/* H2 */}
        <motion.h2
          {...(shouldReduce ? {} : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true, margin: '-60px' },
          })}
          className="font-sans font-bold text-brand-dark text-center m-0 mb-3 text-[30px] md:text-[44px]"
        >
          {COMPLEMENTARY.h2}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...(shouldReduce ? {} : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true, margin: '-60px' },
          })}
          className="font-sans font-normal text-[17px] text-brand-text-gray text-center mb-12"
        >
          {COMPLEMENTARY.subtitle}
        </motion.p>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPLEMENTARY.cards.map((card, i) => {
            const Icon = ICON_MAP[card.icon]
            return (
              <motion.div
                key={card.title}
                {...(shouldReduce ? {} : {
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
                  viewport: { once: true, margin: '-40px' },
                  whileHover: { y: -6 },
                })}
                className="bg-white border border-brand-dark/10 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-250 ease-in-out"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center mb-4" aria-hidden="true">
                  {Icon && <Icon size={24} className="text-brand-green" />}
                </div>

                <h3 className="font-sans font-bold text-[18px] text-brand-dark m-0 mb-2">
                  {card.title}
                </h3>

                <p className="font-sans font-normal text-[15px] text-brand-text-gray m-0 mb-4 leading-relaxed">
                  {card.description}
                </p>

                <a
                  href={WHATSAPP_CONSULTAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans font-semibold text-[14px] text-brand-green no-underline hover:text-brand-medium transition-colors duration-200"
                >
                  {card.cta}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
