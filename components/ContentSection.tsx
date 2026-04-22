"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import {
  CONTENT,
  WHATSAPP_PLAN_REDES,
  WHATSAPP_INTEGRAL,
} from "@/lib/constants";

export default function ContentSection() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration: 0.55,
            delay,
            ease: [0.25, 0.1, 0.25, 1] as const,
          },
          viewport: { once: true, margin: "-60px" as const },
        };

  return (
    <section id="contenido" className="bg-brand-bg-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.p
          {...fadeUp(0)}
          className="font-sans font-semibold text-[12px] text-brand-green tracking-[0.1em] uppercase text-center mb-3"
        >
          {CONTENT.label}
        </motion.p>

        {/* H2 */}
        <motion.h2
          {...fadeUp(0.1)}
          className="font-sans font-bold text-brand-dark text-center mx-auto mb-3 max-w-[700px] text-[30px] md:text-[44px]"
        >
          {CONTENT.h2}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-sans font-normal text-[17px] text-brand-text-gray text-center mb-4"
        >
          {CONTENT.subtitle}
        </motion.p>

        {/* Paragraphs */}
        <div className="max-w-[720px] mx-auto mb-12 text-center">
          {CONTENT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.25 + i * 0.08)}
              className="font-sans font-normal text-[17px] text-brand-text-gray leading-relaxed mb-4"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Mockup — Centered below text */}
        <motion.div
          {...fadeUp(0.3)}
          className="max-w-[1100px] mx-auto mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-sm"
        >
          <Image
            src="/images/feed-instagram-mockup.webp"
            alt="Ejemplo de feed de Instagram gestionado por Clickcore"
            width={1408}
            height={768}
            loading="lazy"
            quality={100}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Plans layout: Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-[1100px] mx-auto">
          {/* Plan de Redes — gradient card */}
          <motion.div
            {...fadeUp(0.1)}
            className="bg-linear-to-br from-brand-green to-brand-deep rounded-2xl p-8 md:p-10 flex flex-col h-full"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white font-sans font-semibold text-[12px] px-3.5 py-1.5 rounded-full mb-4 self-start">
              <Star size={14} fill="white" className="text-white" aria-hidden="true" />
              {CONTENT.planRedes.badge}
            </span>

            <h3 className="font-sans font-bold text-[26px] text-white m-0 mb-1">
              {CONTENT.planRedes.name}
            </h3>

            <p className="font-sans font-bold text-[36px] lg:text-[40px] text-white m-0 mb-4 leading-[1.1]">
              {CONTENT.planRedes.price}
            </p>

            <p className="font-sans font-normal text-[15px] text-white/85 m-0 mb-5 leading-relaxed">
              {CONTENT.planRedes.description}
            </p>

            {/* Items list */}
            <ul className="list-none p-0 m-0 mb-5 flex flex-col gap-2">
              {CONTENT.planRedes.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-sans font-normal text-[15px] text-white/90"
                >
                  <Check size={16} className="text-white" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Ideal para */}
            <div className="mt-auto">
              <p className="font-sans font-semibold text-[14px] text-white m-0 mb-1">
                Ideal para:
              </p>
              <p className="font-sans font-normal text-[14px] text-white/85 m-0 mb-6 leading-relaxed">
                {CONTENT.planRedes.idealFor}
              </p>

              {/* CTA */}
              <motion.a
                href={WHATSAPP_PLAN_REDES}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-block bg-white text-brand-deep font-sans font-bold text-[15px] px-7 py-3.5 rounded-full no-underline"
              >
                {CONTENT.planRedes.cta}
              </motion.a>
            </div>
          </motion.div>

          {/* Plan Integral — dark card */}
          <motion.div
            {...fadeUp(0.2)}
            className="bg-brand-dark rounded-2xl p-8 md:p-10 flex flex-col h-full"
          >
            <span className="inline-block bg-brand-green/15 text-brand-green font-sans font-semibold text-[12px] px-3.5 py-1.5 rounded-full mb-4 self-start">
              {CONTENT.planIntegral.badge}
            </span>

            <h3 className="font-sans font-bold text-[22px] text-white m-0 mb-1">
              {CONTENT.planIntegral.name}
            </h3>

            <p className="font-sans font-bold text-[34px] text-brand-green m-0 mb-3 leading-[1.1]">
              {CONTENT.planIntegral.price}
            </p>

            <p className="font-sans font-normal text-[15px] text-white/70 m-0 mb-4 leading-relaxed">
              {CONTENT.planIntegral.description}
            </p>

            <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2">
              {CONTENT.planIntegral.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-sans font-normal text-[15px] text-white/85"
                >
                  <Check
                    size={16}
                    className="text-brand-green"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <motion.a
                href={WHATSAPP_INTEGRAL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 24px rgba(24,203,150,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-block bg-brand-green hover:bg-brand-medium text-white font-sans font-bold text-[15px] px-7 py-3.5 rounded-full no-underline transition-colors duration-200"
              >
                {CONTENT.planIntegral.cta}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
