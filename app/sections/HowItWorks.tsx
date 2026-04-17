"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { NastaliqMark } from "@/components/visual/NastaliqMark";
import { EditorialImage } from "@/components/visual/EditorialImage";

const steps = [
  {
    n: "01",
    t: "Snap",
    u: "تصویر",
    d: "Hold your phone over any medicine box, strip, or bottle. DawaLens reads the label — no typing, no guessing.",
    text: "md:col-start-1 md:col-end-6 md:row-start-1",
    img: "md:col-start-8 md:col-end-13 md:row-start-1",
    imgSrc: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    imgCaption: "Strip in hand",
    imgIndex: "01",
    imgRatio: [3, 4] as const,
  },
  {
    n: "02",
    t: "Identify",
    u: "شناخت",
    d: "The scanner cross-references packaging against our indexed database and confirms the exact molecule, brand, and strength.",
    text: "md:col-start-7 md:col-end-13 md:row-start-2",
    img: "md:col-start-1 md:col-end-6 md:row-start-2",
    imgSrc: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=80",
    imgCaption: "Capsule lattice",
    imgIndex: "02",
    imgRatio: [4, 5] as const,
  },
  {
    n: "03",
    t: "Understand",
    u: "آگاہی",
    d: "Read dosage, interactions, pregnancy & lactation flags, and contraindications — in plain language, in the script you prefer.",
    text: "md:col-start-2 md:col-end-8 md:row-start-3",
    img: "md:col-start-9 md:col-end-13 md:row-start-3",
    imgSrc: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=900&q=80",
    imgCaption: "Pharmacist&rsquo;s reading",
    imgIndex: "03",
    imgRatio: [3, 4] as const,
  },
];

export function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <section
      id="how"
      aria-labelledby="how-title"
      className="relative bg-[color:var(--color-paper)] text-[color:var(--color-ink)] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-8 md:px-14">
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-slate)]">
              <span className="editorial-rule" />
              <span>The flow</span>
            </div>
            <h2
              id="how-title"
              className="text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[0.98] tracking-[-0.02em] max-w-[16ch]"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
            >
              Three gestures.
              <br />
              <span className="italic text-[color:var(--color-primary)]">Real clarity.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[38ch] text-[color:var(--color-slate)] leading-[1.55]">
              Every step is built around the reality of a busy household — a strip of
              pills on a kitchen counter, an elderly parent asking if this is the one
              that keeps their blood pressure down.
            </p>
          </Reveal>
        </div>

        {/* Broken grid — text and image share the row, alternating sides */}
        <ol className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-40 gap-x-8">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: reduced ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: reduced ? 0.15 : 0.9,
                delay: reduced ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${s.text} relative md:self-center`}
            >
              <div className="flex items-baseline gap-6 mb-4">
                <span
                  className="text-[72px] md:text-[110px] leading-none text-[color:var(--color-accent)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1',
                    fontStyle: "italic",
                  }}
                >
                  {s.n}
                </span>
                <div>
                  <NastaliqMark
                    text={s.u}
                    className="block text-xl md:text-2xl text-[color:var(--color-primary)] opacity-80"
                  />
                  <span
                    className="block text-[32px] md:text-[44px] leading-tight tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.t}
                  </span>
                </div>
              </div>
              <p className="text-[color:var(--color-slate)] leading-[1.6] max-w-[50ch] pl-0 md:pl-[calc(72px+1.5rem)]">
                {s.d}
              </p>
            </motion.li>
          ))}
          {steps.map((s) => (
            <div key={`${s.n}-img`} className={`${s.img} relative`}>
              <EditorialImage
                src={s.imgSrc}
                alt={`Step ${s.n} — ${s.t}`}
                width={s.imgRatio[0]}
                height={s.imgRatio[1]}
                caption={s.imgCaption}
                index={s.imgIndex}
              />
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
}
