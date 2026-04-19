"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { PhoneFrame } from "@/components/visual/PhoneFrame";
import { NastaliqMark } from "@/components/visual/NastaliqMark";

const phones = [
  {
    label: "Scan",
    urdu: "تصویر",
    fig: "A",
    src: "/assets/screen-scan.jpeg",
    alt: "DawaLens scan viewport detecting medicine packaging",
    tilt: -4,
    scale: 0.88,
    offsetY: 32,
    priority: false,
  },
  {
    label: "Identify",
    urdu: "شناخت",
    fig: "B",
    src: "/assets/screen-search.jpeg",
    alt: "DawaLens search screen with suggested medicines",
    tilt: 0,
    scale: 1,
    offsetY: 0,
    priority: true,
  },
  {
    label: "Understand",
    urdu: "آگاہی",
    fig: "C",
    src: "/assets/screen-details.jpeg",
    alt: "DawaLens medicine detail screen with safety alert",
    tilt: 4,
    scale: 0.88,
    offsetY: 32,
    priority: false,
  },
];

export function AppShowcase() {
  const reduced = useReducedMotion();

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-title"
      className="relative bg-[color:var(--color-paper)] text-[color:var(--color-ink)] py-28 md:py-40 overflow-hidden scroll-mt-24"
    >
      {/* Decorative typographic bleed in background */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="text-[28vw] leading-none italic"
          style={{
            fontFamily: "var(--font-display)",
            fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
            color: "color-mix(in oklch, var(--color-primary) 5%, transparent)",
          }}
        >
          inside.
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-8 md:px-14">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-slate)]">
              <span className="editorial-rule" />
              <span>Inside the app</span>
              <NastaliqMark text="ایپ کے اندر" className="text-base opacity-70" />
            </div>
            <h2
              id="showcase-title"
              className="text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[0.98] tracking-[-0.02em] max-w-[14ch]"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
            >
              What you&rsquo;ll actually
              <br />
              <span className="italic text-[color:var(--color-primary)]">see on the screen.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[38ch] text-[color:var(--color-slate)] leading-[1.55]">
              Every layout, every warning card, every bilingual label &mdash; rendered exactly the way
              your phone will render it on launch day.
            </p>
          </Reveal>
        </div>

        {/* Phones — center one elevated & larger, flanks offset back */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end justify-items-center">
          {phones.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: reduced ? 0 : 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: reduced ? 0.15 : 1.0,
                delay: reduced ? 0 : 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-[300px]"
              style={{ marginTop: reduced ? 0 : p.offsetY }}
            >
              <PhoneFrame tilt={reduced ? 0 : p.tilt} scale={p.scale}>
                <div className="absolute inset-0">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 300px"
                    className="object-cover object-top"
                    priority={p.priority}
                  />
                </div>
              </PhoneFrame>

              <div className="mt-8 text-center">
                <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-primary)] mb-1">
                  Fig. {p.fig}
                </div>
                <div
                  className="text-[22px] leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.label}
                </div>
                <NastaliqMark
                  text={p.urdu}
                  className="block mt-1 text-sm text-[color:var(--color-primary)] opacity-75"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
