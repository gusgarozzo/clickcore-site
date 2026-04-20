'use client'

import { motion } from 'framer-motion'
import { WHAT_WE_DO } from '@/lib/constants'
import { LucideIcon } from './LucideIcon'

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

export default function WhatWeDoSection() {
  return (
    <section id="que-hacemos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="uppercase font-semibold text-xs tracking-[0.1em] text-brand-green mb-4 text-center"
        >
          {WHAT_WE_DO.label}
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-[30px] lg:text-[44px] font-bold text-brand-dark leading-tight text-center whitespace-pre-line max-w-3xl mx-auto"
        >
          <HighlightedH2 text={WHAT_WE_DO.h2} highlight={WHAT_WE_DO.h2Highlight} />
        </motion.h2>

        {/* Paragraphs */}
        <div className="mt-8 max-w-[640px] mx-auto text-center space-y-4">
          {WHAT_WE_DO.paragraphs.map((p, i) => (
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

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 flex flex-wrap justify-center gap-5 lg:gap-6 max-w-6xl mx-auto"
        >
          {WHAT_WE_DO.chips.map((chip, i) => (
            <div
              key={i}
              className="w-full md:w-[340px] bg-brand-mint/40 border border-brand-green/10 text-brand-deep font-semibold text-[15px] rounded-full px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:bg-brand-mint hover:scale-[1.02] hover:shadow-sm"
            >
              <LucideIcon name={chip.icon} size={20} strokeWidth={2.5} className="text-brand-green flex-shrink-0" />
              <span>{chip.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
