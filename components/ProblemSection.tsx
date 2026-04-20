'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingDown, Palette } from 'lucide-react'
import { PROBLEM, WHATSAPP_DEFAULT } from '@/lib/constants'

const iconMap = { Clock, TrendingDown, Palette } as const

const ease = [0.25, 0.1, 0.25, 1] as const

function HighlightedH2({ text, highlight }: { text: string; highlight: string }) {
  const parts = text.split(highlight)
  return (
    <>
      {parts[0]}
      <span className="text-brand-green">{highlight}</span>
      {parts[1] ?? ''}
    </>
  )
}

export default function ProblemSection() {
  return (
    <section id="problema" className="bg-brand-bg-light py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="uppercase font-semibold text-xs tracking-[0.1em] text-brand-green mb-4 text-center"
        >
          {PROBLEM.label}
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-[30px] lg:text-[44px] font-bold text-brand-dark leading-tight text-center whitespace-pre-line max-w-3xl mx-auto"
        >
          <HighlightedH2 text={PROBLEM.h2} highlight={PROBLEM.h2Highlight} />
        </motion.h2>

        {/* Paragraphs */}
        <div className="mt-8 max-w-[700px] mx-auto text-center space-y-4">
          {PROBLEM.paragraphs.map((p, i) => (
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

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {PROBLEM.cards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                viewport={{ once: true, margin: '-60px' }}
                className="bg-white border border-brand-dark/[0.08] rounded-[16px] shadow-[0_2px_16px_rgba(55,54,67,0.07)] p-6 text-center hover:shadow-[0_12px_32px_rgba(55,54,67,0.12)] transition-shadow duration-250"
              >
                <Icon size={24} className="text-brand-green mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="font-bold text-base text-brand-dark mb-2">{card.title}</h3>
                <p className="text-brand-text-gray text-sm">{card.text}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 text-center"
        >
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-green text-white font-bold text-[15px] rounded-full px-7 py-3.5 hover:bg-brand-medium hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(24,203,150,0.35)] transition-all duration-200"
          >
            {PROBLEM.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
