"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { RESULTS } from "@/lib/constants";

export default function ResultsSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="resultados" className="bg-brand-bg-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.p
          {...(shouldReduce
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
                viewport: { once: true, margin: "-60px" },
              })}
          className="font-sans font-semibold text-[12px] text-brand-green tracking-[0.1em] uppercase text-center mb-3"
        >
          {RESULTS.label}
        </motion.p>

        {/* H2 */}
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
          className="font-sans font-bold text-brand-dark text-center m-0 mb-3 text-[30px] md:text-[44px]"
        >
          {RESULTS.h2}
        </motion.h2>

        {/* Subtitle */}
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
          className="font-sans font-normal text-[17px] text-brand-text-gray text-center max-w-[560px] mx-auto mb-12"
        >
          {RESULTS.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {RESULTS.cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...(shouldReduce
                ? {}
                : {
                    initial: { opacity: 0, y: 28 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: {
                      duration: 0.5,
                      delay: Math.min(i * 0.08, 0.4),
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                    viewport: { once: true, margin: "-40px" },
                    whileHover: { y: -5 },
                  })}
              className="bg-white rounded-2xl border border-brand-dark/5 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-250 ease-in-out cursor-default"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/2] bg-white border-b border-brand-dark/5 overflow-hidden group">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={800}
                  height={533}
                  loading="lazy"
                  quality={100}
                  className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Pill */}
                <span className="inline-block bg-brand-mint text-brand-deep font-sans font-semibold text-[12px] px-3 py-1 rounded-full mb-3">
                  {card.pill}
                </span>

                <h3 className="font-sans font-bold text-[18px] text-brand-dark m-0 mb-1.5">
                  {card.title}
                </h3>

                <p className="font-sans font-normal text-sm text-brand-text-gray m-0">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
