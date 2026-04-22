'use client'

import { useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { BRANDS } from '@/lib/constants'


const ALL_LOGOS = [
  { name: 'Marca 1',   file: '/images/logos/1.webp' },
  { name: 'Marca 2',   file: '/images/logos/2.webp' },
  { name: 'Marca 3',   file: '/images/logos/3.webp' },
  { name: 'Marca 4',   file: '/images/logos/4.webp' },
  { name: 'Marca 5',   file: '/images/logos/5.webp' },
  { name: 'Marca 7',   file: '/images/logos/7.webp' },
  { name: 'Marca 8',   file: '/images/logos/8.webp' },
  { name: 'Marca 9',   file: '/images/logos/9.webp' },
  { name: 'Marca 10',  file: '/images/logos/10.webp' },
  { name: 'Marca 11',  file: '/images/logos/11.webp' },
  { name: 'Marca 12',  file: '/images/logos/12.webp' },
  { name: 'Marca 13',  file: '/images/logos/13.webp' },
  { name: 'Marca 14',  file: '/images/logos/14.webp' },
  { name: 'Marca 18',  file: '/images/logos/18.webp' },
  { name: 'Marca 20',  file: '/images/logos/20.webp' },
  { name: 'Marca 22',  file: '/images/logos/22.webp' },
  { name: 'Marca 24',  file: '/images/logos/24.webp' },
  { name: 'Marca 25',  file: '/images/logos/25.webp' },
]

// Duplicate the list to create seamless infinite loop
const TRACK_LOGOS = [...ALL_LOGOS, ...ALL_LOGOS]

export default function BrandsSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="marcas"
      className="bg-white py-16 border-t border-brand-dark/5 overflow-hidden"
    >
      {/* CSS keyframes — injected once, zero runtime JS cost */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className="font-sans font-semibold text-[12px] text-brand-green tracking-[0.1em] uppercase text-center mb-3">
          {BRANDS.label}
        </p>

        {/* H2 */}
        <h2 className="font-sans font-bold text-brand-dark text-center m-0 mb-3 text-[26px] md:text-[36px]">
          {BRANDS.h2}
        </h2>

        {/* Subtitle */}
        <p className="font-sans font-normal text-[17px] text-brand-text-gray text-center max-w-[560px] mx-auto mb-12">
          {BRANDS.subtitle}
        </p>
      </div>

      {/* ── Marquee strip — full viewport width, no padding ───────────── */}
      {/* Left and right fade masks */}
      <div className="relative w-full">
        {/* Fade left */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
        />
        {/* Fade right */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
        />

        {/* Marquee container */}
        <div
          className="overflow-hidden w-full"
          aria-label="Marcas que trabajaron con Clickcore"
          role="list"
        >
          <div
            className={shouldReduce ? "flex flex-wrap justify-center gap-6 px-6" : "marquee-track gap-0"}
          >
            {TRACK_LOGOS.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                role="listitem"
                className="flex items-center justify-center py-4 px-8 shrink-0 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-250 ease-in-out"
              >
                <Image
                  src={logo.file}
                  alt={`Logo ${logo.name}`}
                  width={130}
                  height={52}
                  loading="lazy"
                  className="object-contain max-h-[52px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
