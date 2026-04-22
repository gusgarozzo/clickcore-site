'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, BarChart2, Target, Zap, Check } from 'lucide-react'
import { HERO, WHATSAPP_DIAGNOSTICO } from '@/lib/constants'

export default function HeroSection() {
  const shouldReduce = useReducedMotion()

  const words = HERO.h1.split(' ')

  const fadeUp = shouldReduce
    ? {}
    : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } }

  return (
    <section
      id="hero"
      className="bg-white py-20 md:py-24 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-14 -right-20 w-[400px] h-[400px] bg-brand-mint rounded-full blur-[60px] opacity-60 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-14 -left-20 w-[300px] h-[300px] bg-brand-green rounded-full blur-[80px] opacity-5 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 items-center">
          {/* Left column */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div
              {...(shouldReduce ? {} : {
                initial: { opacity: 0, y: -16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.1 },
              })}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-1.5 bg-brand-mint text-brand-deep font-sans font-semibold text-[13px] px-3.5 py-1.5 rounded-full">
                <Check size={14} strokeWidth={3} />
                {HERO.badge}
              </span>
            </motion.div>

            {/* H1 with word-by-word stagger */}
            <h1 className="font-sans font-bold leading-[1.15] text-brand-dark m-0 text-4xl md:text-[52px]">
              {words.map((word, i) => {
                const isHighlight = word === HERO.h1Highlight || word.replace(/[.,!?]/g, '') === HERO.h1Highlight
                return (
                  <motion.span
                    key={i}
                    {...(shouldReduce ? {} : {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
                    })}
                    className={`inline-block mr-[0.25em] ${isHighlight ? 'text-brand-green' : 'text-brand-dark'}`}
                  >
                    {word}
                  </motion.span>
                )
              })}
            </h1>

            {/* Subtitle */}
            <motion.p
              {...(shouldReduce ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, delay: 0.55 },
              })}
              className="font-sans font-normal text-brand-text-gray leading-relaxed max-w-[520px] mt-5 mb-0 text-base md:text-lg"
            >
              {HERO.subtitle}
            </motion.p>

            {/* Industries */}
            <motion.p
              {...(shouldReduce ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, delay: 0.65 },
              })}
              className="font-sans font-semibold text-[13px] text-brand-text-gray tracking-wider mt-4 mb-0"
            >
              {HERO.industries}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...(shouldReduce ? {} : {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.75 },
              })}
              className="flex flex-wrap gap-3 mt-8"
            >
              <motion.a
                href={WHATSAPP_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(24,203,150,0.35)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center bg-brand-green hover:bg-brand-medium text-white font-sans font-bold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 no-underline"

              >
                {HERO.ctaPrimary}
              </motion.a>

              <motion.a
                href="#resultados"
                whileHover={{ background: '#DDF8EF' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center bg-transparent hover:bg-brand-mint border-2 border-brand-green text-brand-green font-sans font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 no-underline"
              >
                {HERO.ctaSecondary}
              </motion.a>
            </motion.div>
          </div>

          {/* Right column — decorative visual panel (no image) */}
          <motion.div
            {...(shouldReduce ? {} : {
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
            })}
            className="hidden md:block relative"
          >
            <div className="bg-brand-bg-light rounded-3xl p-8 relative overflow-hidden min-h-[480px] flex flex-col gap-4">
              {/* Decorative background circle */}
              <div aria-hidden="true" className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-brand-mint to-brand-green opacity-25 pointer-events-none" />

              {/* Card 1 — Campañas activas */}
              <motion.div
                {...(shouldReduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4, duration: 0.5 } })}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-brand-dark/5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                  <Target size={22} color="#18CB96" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-2xl text-brand-dark m-0 leading-none">+120</p>
                  <p className="font-sans font-normal text-[13px] text-brand-text-gray mt-0.5 m-0">Campañas gestionadas</p>
                </div>
              </motion.div>

              {/* Card 2 — ROAS */}
              <motion.div
                {...(shouldReduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5, duration: 0.5 } })}
                className="bg-gradient-to-br from-brand-green to-brand-deep rounded-2xl p-5 md:p-6 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <TrendingUp size={22} color="#FFFFFF" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-2xl text-white m-0 leading-none">+7 años</p>
                  <p className="font-sans font-normal text-[13px] text-white/80 mt-0.5 m-0">Impulsando negocios</p>
                </div>
              </motion.div>

              {/* Card 3 — Inversión optimizada */}
              <motion.div
                {...(shouldReduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6, duration: 0.5 } })}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-brand-dark/5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                  <BarChart2 size={22} color="#18CB96" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-2xl text-brand-dark m-0 leading-none">Meta + Google</p>
                  <p className="font-sans font-normal text-[13px] text-brand-text-gray mt-0.5 m-0">Plataformas especializadas</p>
                </div>
              </motion.div>

              {/* Card 4 — Optimización continua */}
              <motion.div
                {...(shouldReduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.7, duration: 0.5 } })}
                className="bg-brand-dark rounded-2xl p-5 md:p-6 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-green/15 flex items-center justify-center shrink-0">
                  <Zap size={22} color="#18CB96" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-2xl text-white m-0 leading-none">Optimización</p>
                  <p className="font-sans font-normal text-[13px] text-white/65 mt-0.5 m-0">Continua, medible y clara</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom */}
              <motion.div
                {...(shouldReduce ? {} : { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.8, duration: 0.4 } })}
                className="bg-white rounded-xl p-3 px-4 shadow-sm flex items-center gap-2 self-start border border-brand-dark/5"
              >
                <TrendingUp size={16} className="text-brand-green" aria-hidden="true" />
                <span className="font-sans font-semibold text-[13px] text-brand-dark">
                  {HERO.floatingBadge}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
