'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Search, Target, Rocket, BarChart2, LucideIcon } from 'lucide-react'
import { HOW_WE_WORK } from '@/lib/constants'

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Target,
  Rocket,
  BarChart2,
}

export default function HowWeWorkSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="como-trabajamos"
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
          {HOW_WE_WORK.label}
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
          {HOW_WE_WORK.h2}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...(shouldReduce ? {} : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true, margin: '-60px' },
          })}
          className="font-sans font-normal text-[17px] text-brand-text-gray text-center max-w-[600px] mx-auto mb-16 md:mb-20"
        >
          {HOW_WE_WORK.subtitle}
        </motion.p>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-brand-mint z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {HOW_WE_WORK.steps.map((step, i) => {
              const Icon = ICON_MAP[step.icon]
              return (
                <motion.div
                  key={step.number}
                  {...(shouldReduce ? {} : {
                    initial: { opacity: 0, y: 28 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
                    viewport: { once: true, margin: '-40px' },
                  })}
                  className="text-center flex flex-col items-center"
                >
                  {/* Large number */}
                  <span className="font-sans font-bold text-[48px] text-brand-mint leading-none mb-1 block" aria-hidden="true">
                    {step.number}
                  </span>

                  {/* Icon circle */}
                  <div className="w-[52px] h-[52px] rounded-full bg-brand-mint flex items-center justify-center mb-4">
                    {Icon && <Icon size={24} className="text-brand-green" aria-hidden="true" />}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-[18px] text-brand-dark m-0 mb-2">
                    {step.title}
                  </h3>

                  {/* Text */}
                  <p className="font-sans font-normal text-[15px] text-brand-text-gray m-0 leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
