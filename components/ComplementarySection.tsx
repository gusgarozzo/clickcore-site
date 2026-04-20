'use client'

import { motion } from 'framer-motion'
import { Layers, Heart, ShoppingBag, Zap } from 'lucide-react'
import { COMPLEMENTARY, WHATSAPP_DEFAULT } from '@/lib/constants'

const iconMap = { Layers, Heart, ShoppingBag, Zap } as const
const ease = [0.25, 0.1, 0.25, 1] as const

export default function ComplementarySection() {
  return (
    <section id="servicios-complementarios" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="uppercase font-semibold text-xs tracking-[0.1em] text-brand-green mb-4 text-center"
        >
          {COMPLEMENTARY.label}
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-[30px] lg:text-[44px] font-bold text-brand-dark leading-tight text-center max-w-3xl mx-auto"
        >
          {COMPLEMENTARY.h2}
        </motion.h2>

        {/* Grid 2x2 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPLEMENTARY.cards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                viewport={{ once: true, margin: '-60px' }}
                className="bg-white border border-brand-dark/[0.08] rounded-[16px] shadow-[0_2px_16px_rgba(55,54,67,0.07)] p-7 hover:shadow-[0_12px_32px_rgba(55,54,67,0.12)] transition-shadow duration-250 flex flex-col"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center mb-4">
                  <Icon size={28} className="text-brand-green" strokeWidth={1.5} />
                </div>

                <h3 className="font-bold text-lg text-brand-dark mb-2">{card.title}</h3>
                <p className="text-brand-text-gray text-[15px] mb-4">{card.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-brand-bg-light text-brand-text-gray text-xs font-medium rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-brand-dark font-semibold text-sm mt-auto mb-3">{card.price}</p>

                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green font-semibold text-[15px] hover:text-brand-deep transition-colors"
                >
                  {card.cta}
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
