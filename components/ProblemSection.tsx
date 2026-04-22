'use client'
import { motion } from 'framer-motion'
import { Clock, TrendingDown, Palette } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-60px' }
}

const problems = [
  {
    icon: Clock,
    title: 'Falta de tiempo',
    text: 'No alcanza el tiempo para comunicar todo lo que tu negocio hace y ofrece.'
  },
  {
    icon: TrendingDown,
    title: 'Campañas sin seguimiento',
    text: 'Las campañas se lanzan pero no se miden ni se optimizan para mejorar resultados.'
  },
  {
    icon: Palette,
    title: 'Marca desactualizada',
    text: 'Una imagen que no refleja el valor real de tu negocio ni conecta con los clientes actuales.'
  }
]

export default function ProblemSection() {
  return (
    <section id="problema" className="bg-[#F6F8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p {...fadeUp} className="text-[#18CB96] text-[12px] font-semibold 
          uppercase tracking-[0.1em] text-center mb-4">
          El problema que frenó tu crecimiento
        </motion.p>

        <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="font-bold text-[44px] leading-[1.15] text-[#373643] text-center
            md:text-[44px] text-[30px] max-w-2xl mx-auto mb-6">
          Tenés el valor.{' '}
          <span className="text-[#18CB96]">Te falta visibilidad estratégica.</span>
        </motion.h2>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="max-w-[700px] mx-auto text-center space-y-4 mb-14">
          <p className="text-[#6B7280] text-[17px] leading-relaxed">
            Muchos negocios tienen buenos productos, excelente atención y clientes
            que los recomiendan. Sin embargo, muchas personas que hoy están buscando
            exactamente lo que ofrecés todavía no te conocen o no llegaron a
            descubrir tu marca.
          </p>
          <p className="text-[#6B7280] text-[17px] leading-relaxed">
            Y muchas veces incluso tus propios clientes no se enteran de tus
            novedades, nuevos productos, promociones o servicios que también
            podrían volver a elegir.
          </p>
          <p className="text-[#6B7280] text-[17px] leading-relaxed">
            Necesitás una estrategia clara para ganar visibilidad, fortalecer el
            vínculo con tus clientes actuales y convertir oportunidades en ventas
            constantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25,0.1,0.25,1] }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[rgba(55,54,67,0.08)] rounded-2xl 
                p-7 text-center shadow-[0_2px_16px_rgba(55,54,67,0.07)]
                transition-shadow duration-250 hover:shadow-[0_12px_32px_rgba(55,54,67,0.12)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#DDF8EF] flex items-center 
                justify-center mx-auto mb-4">
                <item.icon size={24} className="text-[#18CB96]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[16px] text-[#373643] mb-2">{item.title}</h3>
              <p className="text-[#6B7280] text-[14px] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="flex justify-center mt-10">
          <motion.a
            href="https://wa.me/542494004281?text=Hola%20Josefina%2C%20quiero%20crecer"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="bg-[#18CB96] text-white font-bold text-[15px] px-7 py-[14px] 
              rounded-full hover:bg-[#159F78] transition-all duration-200
              hover:shadow-[0_8px_24px_rgba(24,203,150,0.35)]"
          >
            Quiero crecer →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
