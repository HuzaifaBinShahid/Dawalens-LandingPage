"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const quotes = [
  {
    q: "For the first time, I can explain my mother's prescription to her in Urdu without paraphrasing away the warnings. That matters.",
    a: "Zainab R.",
    r: "Karachi — caregiver",
  },
  {
    q: "Scanned a strip I found in a cabinet at my clinic. Identified the molecule in under a second and flagged a renal-dose mismatch I would've missed.",
    a: "Dr. Omar A.",
    r: "General physician, Lahore",
  },
  {
    q: "My father kept asking if his blood pressure pill was the one he shouldn't take with grapefruit. DawaLens answered him in his own script.",
    a: "Fatima S.",
    r: "Islamabad",
  },
];

export function Testimonials() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((n) => (n + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, [reduced]);

  const current = quotes[i];

  return (
    <section
      aria-labelledby="voices-title"
      className="relative bg-[color:var(--color-primary-tint)] text-[color:var(--color-ink)] py-28 md:py-40 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1200px] px-8 md:px-14">
        <div className="flex items-center gap-4 mb-10 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-primary)]">
          <span className="editorial-rule" />
          <span id="voices-title">Voices from the beta</span>
        </div>

        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -16 }}
              transition={{ duration: reduced ? 0.1 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -top-16 -left-4 md:-left-10 text-[180px] md:text-[240px] leading-none text-[color:var(--color-primary)]/20 pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                  fontStyle: "italic",
                }}
              >
                &ldquo;
              </span>
              <p
                className="relative text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.25] tracking-[-0.01em] max-w-[22ch] md:max-w-[30ch]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {current.q}
              </p>
              <footer className="mt-10 flex items-center gap-4 text-[12px] tracking-[0.18em] uppercase">
                <span className="inline-block w-10 h-10 rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-paper)] flex items-center justify-center text-sm" aria-hidden>
                  {current.a.charAt(0)}
                </span>
                <span>
                  <span className="block text-[color:var(--color-ink)]">{current.a}</span>
                  <span className="block text-[color:var(--color-slate)] normal-case tracking-normal text-[13px] mt-0.5">
                    {current.r}
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="mt-14 flex gap-3">
          {quotes.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`View testimonial ${k + 1}`}
              aria-current={k === i}
              className={`h-px transition-all duration-500 ${
                k === i ? "w-16 bg-[color:var(--color-accent)]" : "w-8 bg-[color:var(--color-ink)]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
