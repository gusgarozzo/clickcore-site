'use client'
import { motion } from 'framer-motion'

const chips = [
  '✓ Redes sociales con enfoque comercial',
  '✓ Publicidad en plataformas clave',
  '✓ Automatización',
  '✓ Branding profesional',
  '✓ Soporte a ventas online y offline',
]

export default function WhatWeDoSection() {
  return (
    <section id="que-hacemos" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1] as [number, number, number, number] }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-[#18CB96] text-[12px] font-semibold uppercase 
            tracking-[0.1em] mb-4"
        >
          Nuestra propuesta
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25,0.1,0.25,1] as [number, number, number, number] }}
          viewport={{ once: true, margin: '-60px' }}
          className="font-bold text-[44px] md:text-[44px] text-[30px] 
            leading-[1.15] text-[#373643] mb-6"
        >
          No necesitás trabajar más.{' '}
          <span className="text-[#18CB96]">Necesitás comunicar mejor.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.25,0.1,0.25,1] as [number, number, number, number] }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-3 mb-10"
        >
          <p className="text-[#6B7280] text-[17px] leading-relaxed max-w-[640px] mx-auto">
            Diseñamos sistemas simples para que tu negocio gane presencia, genere
            contactos y venda con más claridad.
          </p>
          <p className="text-[#6B7280] text-[17px] leading-relaxed max-w-[640px] mx-auto">
            Combinamos estrategia, creatividad y herramientas digitales en acciones
            concretas orientadas a resultados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.25,0.1,0.25,1] as [number, number, number, number] }}
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-4 max-w-2xl mx-auto"
        >
          {chips.map((chip, i) => (
            <span key={i} className="bg-[#DDF8EF] text-[#0F6B57] font-semibold 
              text-[14px] px-6 py-[12px] rounded-full shadow-sm">
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
