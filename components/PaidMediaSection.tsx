"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PAID_MEDIA, WHATSAPP_CAMPANAS } from "@/lib/constants";

export default function PaidMediaSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="servicios" className="pt-24 pb-0">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 md:mb-20">
        <motion.p
          {...(shouldReduce
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
                viewport: { once: true, margin: "-60px" },
              })}
          className="font-sans font-semibold text-[12px] text-brand-green tracking-[0.1em] uppercase mb-3"
        >
          {PAID_MEDIA.label}
        </motion.p>

        <motion.h2
          {...(shouldReduce
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.55,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                },
                viewport: { once: true, margin: "-60px" },
              })}
          className="font-sans font-bold text-brand-dark max-w-[800px] mx-auto mb-4 text-[30px] md:text-[44px]"
        >
          {PAID_MEDIA.h2}
        </motion.h2>

        <motion.p
          {...(shouldReduce
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.55,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                },
                viewport: { once: true, margin: "-60px" },
              })}
          className="font-sans font-normal text-[17px] text-brand-text-gray max-w-[680px] mx-auto"
        >
          {PAID_MEDIA.subtitle}
        </motion.p>
      </div>

      {/* 4 alternating blocks */}
      {PAID_MEDIA.blocks.map((block) => (
        <div
          key={block.id}
          className={`${block.bg === "light" ? "bg-brand-bg-light" : "bg-white"} py-20`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                {...(shouldReduce
                  ? {}
                  : {
                      initial: { opacity: 0, x: block.imageLeft ? -40 : 40 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                      viewport: { once: true, margin: "-60px" },
                    })}
                className={`order-first ${block.imageLeft ? "md:order-first" : "md:order-last"}`}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-brand-dark/5 aspect-[3/2] relative group cursor-zoom-in">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    width={block.imageWidth}
                    height={block.imageHeight}
                    loading={
                      block.id === "search" || block.id === "pmax"
                        ? undefined
                        : "lazy"
                    }
                    priority={block.id === "search" || block.id === "pmax"}
                    quality={100}
                    className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                {...(shouldReduce
                  ? {}
                  : {
                      initial: { opacity: 0, x: block.imageLeft ? 40 : -40 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: {
                        duration: 0.6,
                        delay: 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                      viewport: { once: true, margin: "-60px" },
                    })}
                className={`order-last ${block.imageLeft ? "md:order-last" : "md:order-first"} flex flex-col`}
              >
                {/* Pill */}
                <span className="inline-block bg-brand-mint text-brand-deep font-sans font-semibold text-[13px] px-3.5 py-1.5 rounded-full mb-5 self-start">
                  {block.pill}
                </span>

                <h3 className="font-sans font-bold text-brand-dark m-0 mb-4 leading-[1.25] text-2xl md:text-[32px]">
                  {block.h3}
                </h3>

                <p className="font-sans font-normal text-[17px] text-brand-text-gray m-0 mb-6 leading-relaxed">
                  {block.paragraph}
                </p>

                {/* Highlight line */}
                <div className="flex items-center gap-2">
                  <ArrowRight
                    size={18}
                    className="text-brand-green"
                    aria-hidden="true"
                  />
                  <span className="font-sans font-semibold text-[15px] text-brand-dark">
                    {block.highlight}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA block — Editorial Minimalism (Integrated version) */}
      <div className="border-t border-[#F6F8F7] py-40 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                  viewport: { once: true },
                })}
            className="font-sans font-bold text-[#373643] m-0 text-[32px] md:text-[52px] leading-tight tracking-[-0.02em]"
          >
            ¿Listo para hacer crecer tu negocio con publicidad?
          </motion.h3>

          <motion.p
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                  viewport: { once: true },
                })}
            className="font-sans font-normal text-[#6B7280] text-[18px] md:text-[21px] m-0 mt-6 mb-12"
          >
            Resultados medibles y optimización constante.
          </motion.p>

          <motion.div
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.98 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { duration: 0.4, delay: 0.2 },
                  viewport: { once: true },
                })}
          >
            <motion.a
              href={WHATSAPP_CAMPANAS}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 0 4px rgba(24,203,150,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 bg-[#18CB96] text-white font-sans font-bold text-base px-12 py-5 rounded-full no-underline transition-all duration-250"
            >
              {PAID_MEDIA.cta}
              <ArrowRight size={22} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
