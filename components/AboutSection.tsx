'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Award } from 'lucide-react'
import { ABOUT, WHATSAPP_NEGOCIO } from '@/lib/constants'

export default function AboutSection() {
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
      id="sobre-mi"
      className="bg-brand-bg-light py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div {...fadeUp(0)} className="relative">
            <div className="rounded-2xl overflow-hidden relative bg-brand-mint/30 aspect-[520/640]">
              {/* josefina-arredondo.webp
                  Convertido desde: josefina-arredondo.png
                  Comando: cwebp -q 85 josefina-arredondo.png -o josefina-arredondo.webp */}
              <Image
                src="/images/josefina-arredondo.webp"
                alt="Josefina Arredondo - Especialista en Meta Ads y Google Ads - Clickcore"
                width={520}
                height={640}
                loading="lazy"
                className="rounded-2xl w-full h-full object-cover object-[center_top]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl p-3 px-4 shadow-sm flex items-center gap-2 z-10">
              <Award size={18} className="text-brand-green" aria-hidden="true" />
              <span className="font-sans font-semibold text-[13px] text-brand-dark">
                {ABOUT.badge}
              </span>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="flex flex-col">
            {/* Label */}
            <motion.p {...fadeUp(0)} className="font-sans font-semibold text-[12px] text-brand-green tracking-[0.1em] uppercase mb-3">
              {ABOUT.label}
            </motion.p>

            {/* H2 */}
            <motion.h2 {...fadeUp(0.1)} className="font-sans font-bold text-brand-dark m-0 mb-6 leading-[1.2] text-[28px] md:text-[38px]">
              {ABOUT.h2}
            </motion.h2>

            {/* Paragraphs */}
            {ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.2 + i * 0.1)}
                className="font-sans font-normal text-brand-text-gray leading-relaxed m-0 mb-4 text-[17px]"
              >
                {p}
              </motion.p>
            ))}

            {/* CTA */}
            <motion.div {...fadeUp(0.5)} className="mt-2">
              <motion.a
                href={WHATSAPP_NEGOCIO}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(24,203,150,0.35)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-block bg-brand-green hover:bg-brand-medium text-white font-sans font-bold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 no-underline"
              >
                {ABOUT.cta}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
