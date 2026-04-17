"use client";

import { motion, useReducedMotion } from "motion/react";
import { PillScan } from "@/components/visual/PillScan";
import { Grain } from "@/components/visual/Grain";
import { NastaliqMark } from "@/components/visual/NastaliqMark";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper)] pt-32 md:pt-40"
      aria-labelledby="hero-title"
    >
      <Grain opacity={0.1} />

      {/* Diagonal deep accent gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 85% 20%, color-mix(in oklch, #0160B8 30%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-8 md:px-14 grid grid-cols-12 gap-6 items-center">
        {/* LEFT — headline, 7/12, with a broken overlap on md+ */}
        <div className="col-span-12 md:col-span-7 relative z-10">
          {/* Kicker with Urdu accent */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.1 : 0.6, delay: reduced ? 0 : 0.1 }}
            className="flex items-center gap-4 mb-8 text-[11px] tracking-[0.24em] uppercase opacity-70"
          >
            <span className="editorial-rule" />
            <span>A pharmacy in your pocket</span>
            <NastaliqMark text="جیب میں دوا خانہ" className="text-base opacity-80" />
          </motion.div>

          <h1
            id="hero-title"
            className="font-display text-[clamp(3rem,7.8vw,7rem)] leading-[0.95] tracking-[-0.03em] font-normal"
            style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0' }}
          >
            <SplitWord word="Know" delay={0.25} />{" "}
            <SplitWord word="what" delay={0.32} />{" "}
            <SplitWord word="you&rsquo;re" delay={0.4} />
            <br />
            <span className="italic text-[color:var(--color-accent)]">
              <SplitWord word="taking." delay={0.52} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.1 : 0.7, delay: reduced ? 0 : 0.9 }}
            className="mt-10 max-w-[48ch] text-[17px] md:text-[19px] leading-[1.55] text-[color:var(--color-paper)]/80"
          >
            Snap any medicine packaging. DawaLens identifies the drug and surfaces
            dosage, interactions, and contraindications — in plain language,
            in the two scripts your household already speaks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.1 : 0.6, delay: reduced ? 0 : 1.1 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="#beta"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[color:var(--color-accent)] text-[color:var(--color-ink)] text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-[color:var(--color-paper)] transition-colors"
            >
              Try the beta
              <span
                aria-hidden
                className="inline-block w-6 h-px bg-current translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
              />
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase opacity-70 hover:opacity-100 hover:text-[color:var(--color-accent)] transition"
            >
              <ArrowDown size={14} strokeWidth={1.5} />
              How it works
            </a>
          </motion.div>
        </div>

        {/* RIGHT — PillScan, 5/12, overlapping up into header area */}
        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduced ? 0.1 : 1.0, delay: reduced ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-5 relative z-0 md:-mt-10"
        >
          <div className="relative aspect-square w-full max-w-[560px] mx-auto">
            <PillScan />
          </div>
        </motion.div>
      </div>

      {/* Bottom editorial strip */}
      <div className="relative mx-auto max-w-[1400px] px-8 md:px-14 mt-20 md:mt-32 pb-10 flex items-end justify-between text-[11px] tracking-[0.22em] uppercase opacity-55">
        <span>
          01 &nbsp;&mdash;&nbsp; Introducing DawaLens
        </span>
        <span className="hidden md:block">
          South Asia &nbsp;/&nbsp; English &amp; اردو
        </span>
        <span>Beta 2026</span>
      </div>
    </section>
  );
}

/* Split the word into a block that reveals with its own delay.
   Keeps the letter shapes intact — no letter-by-letter dance (that's gimmicky). */
function SplitWord({ word, delay }: { word: string; delay: number }) {
  const reduced = useReducedMotion();
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <motion.span
        className="inline-block"
        initial={{ y: reduced ? 0 : "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: reduced ? 0.1 : 0.9, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
        dangerouslySetInnerHTML={{ __html: word }}
      />
    </span>
  );
}
