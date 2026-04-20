'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, Target, Search, BarChart2 } from 'lucide-react'
import { SERVICE_REDES, SERVICE_ADS, SERVICE_INTEGRAL, WHATSAPP_DEFAULT } from '@/lib/constants'
import { LucideIcon } from './LucideIcon'

const adIconMap = { Target, Search, BarChart2 } as const
const ease = [0.25, 0.1, 0.25, 1] as const

function CheckItem({ text, white = false }: { text: string; white?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check
        size={18}
        className={`mt-0.5 flex-shrink-0 ${white ? 'text-white' : 'text-brand-green'}`}
        strokeWidth={2}
      />
      <span className={white ? 'text-white/90' : 'text-brand-dark'}>{text}</span>
    </li>
  )
}

/* ── Redes Sociales ────────────────────────────────────────── */
function RedesSocialesBlock() {
  const { h3, h4, paragraph, plans } = SERVICE_REDES

  return (
    <div className="mt-12">
      <motion.h3
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        viewport={{ once: true, margin: '-60px' }}
        className="text-2xl font-bold text-brand-dark"
      >
        {h3}
      </motion.h3>
      <motion.h4
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease }}
        viewport={{ once: true, margin: '-60px' }}
        className="text-lg text-brand-text-gray mt-2"
      >
        {h4}
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease }}
        viewport={{ once: true, margin: '-60px' }}
        className="text-brand-text-gray mt-3 max-w-2xl"
      >
        {paragraph}
      </motion.p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Plans column (3/5) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Standard Plan */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            transition={{ duration: 0.55, ease }}
            viewport={{ once: true, margin: '-60px' }}
            className="bg-white border border-brand-dark/[0.08] rounded-[16px] shadow-[0_2px_16px_rgba(55,54,67,0.07)] p-7 hover:shadow-[0_12px_32px_rgba(55,54,67,0.12)] transition-shadow duration-250"
          >
            <span className="inline-block bg-brand-bg-light text-brand-text-gray font-semibold text-sm rounded-full px-4 py-1.5 mb-4">
              {plans.standard.badge}
            </span>
            <p className="text-[32px] font-bold text-brand-dark">{plans.standard.price}</p>
            <p className="text-sm text-brand-text-gray mt-1 mb-5">{plans.standard.description}</p>
            <ul className="space-y-2.5 text-[15px] mb-6">
              {plans.standard.items.map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-brand-green text-white font-bold text-[15px] rounded-full py-3.5 hover:bg-brand-medium hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(24,203,150,0.35)] transition-all duration-200"
            >
              {plans.standard.cta}
            </a>
          </motion.div>

          {/* Full Plan (gradient) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-[16px] p-7 hover:shadow-[0_12px_32px_rgba(55,54,67,0.12)] transition-shadow duration-250"
            style={{ background: 'linear-gradient(135deg, #18CB96, #0F6B57)' }}
          >
            <span className="inline-flex items-center gap-2 bg-white/25 text-white font-semibold text-sm rounded-full px-4 py-1.5 mb-4">
              <LucideIcon name={plans.full.badge.icon} size={14} strokeWidth={2.5} />
              {plans.full.badge.text}
            </span>
            <p className="text-[32px] font-bold text-white">{plans.full.price}</p>
            <p className="text-sm text-white/85 mt-1 mb-5">{plans.full.description}</p>
            <ul className="space-y-2.5 text-[15px] mb-6">
              {plans.full.items.map((item, i) => (
                <CheckItem key={i} text={item} white />
              ))}
            </ul>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-brand-deep font-bold text-[15px] rounded-full py-3.5 hover:bg-brand-mint transition-all duration-200"
            >
              {plans.full.cta}
            </a>
          </motion.div>
        </div>

        {/* Mockup column (2/5) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="lg:col-span-2 hidden lg:flex items-center justify-center"
        >
          <div className="bg-brand-bg-light rounded-3xl p-4 w-full max-w-[300px] overflow-hidden shadow-sm">
            <Image
              src="/images/mockup-redes-sociales.png"
              alt="Mockup de gestión de redes sociales por Clickcore"
              width={300}
              height={530}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* ── Publicidad Digital ────────────────────────────────────── */
function PublicidadBlock() {
  const { h3, h4, paragraph, plans } = SERVICE_ADS

  return (
    <div className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        viewport={{ once: true, margin: '-60px' }}
        className="text-2xl font-bold text-brand-dark"
      >
        {h3}
      </motion.h3>
      <motion.h4
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease }}
        viewport={{ once: true, margin: '-60px' }}
        className="text-lg text-brand-text-gray mt-2"
      >
        {h4}
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease }}
        viewport={{ once: true, margin: '-60px' }}
        className="text-brand-text-gray mt-3 max-w-2xl"
      >
        {paragraph}
      </motion.p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => {
          const Icon = adIconMap[plan.icon]
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
              <Icon size={32} className="text-brand-green mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-lg text-brand-dark">{plan.name}</h4>
              <p className="text-[28px] font-bold text-brand-dark mt-2">{plan.price}</p>
              <p className="text-sm text-brand-text-gray mt-1 mb-5">{plan.description}</p>
              <ul className="space-y-2.5 text-[15px] mb-6 flex-1">
                {plan.items.map((item, j) => (
                  <CheckItem key={j} text={item} />
                ))}
              </ul>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border-2 border-brand-green text-brand-green font-semibold text-[15px] rounded-full py-3.5 hover:bg-brand-mint transition-all duration-200"
              >
                {plan.cta}
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Plan Integral ─────────────────────────────────────────── */
function IntegralBlock() {
  const { badge, h3, subtitle, price, description, includes, idealFor, cta } = SERVICE_INTEGRAL

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease }}
      viewport={{ once: true, margin: '-60px' }}
      className="mt-20 rounded-3xl p-8 md:p-12 text-white"
      style={{ background: 'linear-gradient(135deg, #0F6B57, #373643)' }}
    >
      <span className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold text-sm rounded-full px-4 py-1.5 mb-6">
        <LucideIcon name={badge.icon} size={14} strokeWidth={2.5} />
        {badge.text}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold">{h3}</h3>
      <p className="text-white/85 text-lg mt-2">{subtitle}</p>
      <p className="text-[40px] md:text-[48px] font-bold mt-6">{price}</p>
      <p className="text-white/85 mt-3 max-w-2xl text-base">{description}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="font-semibold text-[15px] text-white/90 mb-3">Incluye:</p>
          <ul className="space-y-2.5">
            {includes.map((item, i) => (
              <CheckItem key={i} text={item} white />
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[15px] text-white/90 mb-3">Ideal si buscás:</p>
          <ul className="space-y-2.5">
            {idealFor.map((item, i) => (
              <CheckItem key={i} text={item} white />
            ))}
          </ul>
        </div>
      </div>

      <a
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center mt-10 bg-white text-brand-deep font-bold text-[15px] rounded-full px-7 py-3.5 hover:bg-brand-mint transition-all duration-200"
      >
        {cta}
      </a>
    </motion.div>
  )
}

/* ── Main Section ──────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-brand-bg-light py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="uppercase font-semibold text-xs tracking-[0.1em] text-brand-green mb-4"
        >
          Servicios
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-[30px] lg:text-[44px] font-bold text-brand-dark leading-tight max-w-xl"
        >
          Todo lo que tu marca necesita para crecer
        </motion.h2>

        <RedesSocialesBlock />
        <PublicidadBlock />
        <IntegralBlock />
      </div>
    </section>
  )
}
