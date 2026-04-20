"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PillScan } from "@/components/visual/PillScan";
import { Grain } from "@/components/visual/Grain";
import { NastaliqMark } from "@/components/visual/NastaliqMark";
import { ArrowDown, ArrowRight } from "lucide-react";

type Lang = "en" | "ur";

/** How long each language dwells before swapping. */
const CYCLE_MS = 4000;
/** Delay before the very first swap — enough for the English reveal to settle. */
const FIRST_SWAP_MS = 3200;

/** Urdu copy — edit these strings to refine the translation. */
const UR_HEADLINE = {
  lead: "جانیں آپ کیا",
  accent: "لے رہے ہیں",
};
const UR_PARAGRAPH =
  "کسی بھی دوا کی پیکنگ کی تصویر لیں۔ دوا لینز دوا کو پہچانتی ہے اور خوراک، تعاملات، اور احتیاطی تدابیر سامنے لاتی ہے — آسان زبان میں، ان دونوں زبانوں میں جو آپ کا گھرانہ بولتا ہے۔";

export function Hero() {
  const reduced = useReducedMotion();
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (reduced) return;
    let cycle: ReturnType<typeof setInterval> | undefined;
    const first = setTimeout(() => {
      setLang("ur");
      cycle = setInterval(() => {
        setLang((prev) => (prev === "en" ? "ur" : "en"));
      }, CYCLE_MS);
    }, FIRST_SWAP_MS);
    return () => {
      clearTimeout(first);
      if (cycle) clearInterval(cycle);
    };
  }, [reduced]);

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-[color:var(--color-hero-bg)] text-[color:var(--color-primary)] pt-32 md:pt-40"
      aria-labelledby="hero-title"
    >
      <Grain opacity={0.04} />

      {/* Soft blue-tinted depth — two barely-there primary washes, one pooling
          toward the bottom-left, the other glowing in the top-right. Keeps the
          background from going flat-white. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 8% 115%, color-mix(in oklch, var(--color-primary) 16%, transparent) 0%, transparent 55%), radial-gradient(ellipse 35% 45% at 92% 10%, color-mix(in oklch, var(--color-primary) 10%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-14 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-6 items-center">
        <div className="md:col-span-7 relative z-10">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.1 : 0.6, delay: reduced ? 0 : 0.1 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-primary)]/80"
          >
            <span className="editorial-rule" />
            <span>A pharmacy in your pocket</span>
            <NastaliqMark text="جیب میں دوا خانہ" className="text-base opacity-90" />
          </motion.div>

          {/* Headline — cycles between English and Urdu. A min-height holds the
              column stable while the script swaps. Tighter on mobile so the
              English variant doesn't leave a large gap below itself. */}
          <div className="relative min-h-[7.5em] md:min-h-[11em]">
            <AnimatePresence mode="wait" initial={false}>
              {lang === "en" ? (
                <motion.h1
                  key="headline-en"
                  id="hero-title"
                  initial={{ opacity: reduced ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: reduced ? 0 : -16, transition: { duration: 0.45 } }}
                  transition={{ duration: reduced ? 0.1 : 0.5 }}
                  className="font-display text-[clamp(3rem,7.8vw,7rem)] leading-[0.95] tracking-[-0.03em] font-normal"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0',
                  }}
                >
                  <SplitWord word="Know" delay={0.1} />{" "}
                  <SplitWord word="what" delay={0.18} />{" "}
                  <SplitWord word="you&rsquo;re" delay={0.26} />
                  <br />
                  <span className="italic text-[color:var(--color-primary-dark)]">
                    <SplitWord word="taking." delay={0.38} />
                  </span>
                </motion.h1>
              ) : (
                <motion.h1
                  key="headline-ur"
                  id="hero-title"
                  lang="ur"
                  dir="rtl"
                  initial={{ opacity: 0, y: reduced ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduced ? 0 : -16, transition: { duration: 0.45 } }}
                  transition={{ duration: reduced ? 0.1 : 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[clamp(2.2rem,5.6vw,5rem)] leading-[1.5] tracking-normal text-center"
                  style={{ fontFamily: "var(--font-urdu)" }}
                >
                  <span className="block">{UR_HEADLINE.lead}</span>
                  <span className="block text-[color:var(--color-primary-dark)]">
                    {UR_HEADLINE.accent}
                  </span>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Paragraph — cycles with the headline. */}
          <div className="relative mt-5 md:mt-10 min-h-[5em] md:min-h-[6.5em]">
            <AnimatePresence mode="wait" initial={false}>
              {lang === "en" ? (
                <motion.p
                  key="para-en"
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduced ? 0 : -12, transition: { duration: 0.4 } }}
                  transition={{ duration: reduced ? 0.1 : 0.7, delay: reduced ? 0 : 0.5 }}
                  className="max-w-[48ch] text-[17px] md:text-[19px] leading-[1.55] text-[color:var(--color-slate)]"
                >
                  Snap any medicine packaging. DawaLens identifies the drug and surfaces
                  dosage, interactions, and contraindications &mdash; in plain language,
                  in the two scripts your household already speaks.
                </motion.p>
              ) : (
                <motion.p
                  key="para-ur"
                  lang="ur"
                  dir="rtl"
                  initial={{ opacity: 0, y: reduced ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduced ? 0 : -12, transition: { duration: 0.4 } }}
                  transition={{ duration: reduced ? 0.1 : 0.7, delay: reduced ? 0 : 0.15 }}
                  className="max-w-[52ch] text-[17px] md:text-[19px] leading-[2.1] text-[color:var(--color-slate)]"
                  style={{ fontFamily: "var(--font-urdu)" }}
                >
                  {UR_PARAGRAPH}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.1 : 0.6, delay: reduced ? 0 : 1.1 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[color:var(--color-primary)] text-[color:var(--color-paper)] text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-[color:var(--color-primary-dark)] transition-colors"
            >
              Join the waitlist
              <ArrowRight
                aria-hidden
                size={16}
                strokeWidth={1.8}
                className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </a>

            <a
              href="#showcase"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-primary)] opacity-85 hover:opacity-100 hover:text-[color:var(--color-primary-dark)] transition"
            >
              <ArrowDown size={14} strokeWidth={1.5} />
              See the app
            </a>
          </motion.div>
        </div>

        {/* RIGHT — PillScan */}
        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduced ? 0.1 : 1.0, delay: reduced ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative z-0 md:-mt-10"
        >
          <div className="relative aspect-square w-full max-w-[560px] mx-auto">
            <PillScan />
          </div>
        </motion.div>
      </div>

      {/* Bottom editorial strip */}
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-14 mt-20 md:mt-32 pb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-slate)]">
        <span>
          01 &nbsp;&mdash;&nbsp; Introducing DawaLens
        </span>
        <span className="hidden md:block">
          South Asia &nbsp;/&nbsp; English &amp; اردو
        </span>
        <span>Launching 2026</span>
      </div>
    </section>
  );
}

/* Split-word reveal — each word slides up inside an overflow mask. The mask is
   padded vertically + horizontally so italic descenders ("g" in "taking.")
   aren't clipped. */
function SplitWord({ word, delay }: { word: string; delay: number }) {
  const reduced = useReducedMotion();
  return (
    <span className="inline-block overflow-hidden align-baseline pb-[0.22em] -mb-[0.22em] pr-[0.08em] -mr-[0.08em]">
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
