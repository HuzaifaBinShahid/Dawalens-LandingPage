"use client";

import { motion, useReducedMotion } from "motion/react";

export function BilingualShowcase() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="bilingual-title"
      className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)] py-32 md:py-48 overflow-hidden"
    >
      {/* Vertical editorial notation */}
      <div
        aria-hidden
        className="absolute top-10 left-8 md:left-14 text-[11px] tracking-[0.24em] uppercase opacity-40 origin-top-left rotate-0 md:-rotate-0"
      >
        Section 04 &nbsp; &mdash; &nbsp; Language
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-14">
        {/* Massive Nastaliq centerpiece */}
        <div className="relative flex items-center justify-center min-h-[40vh]">
          <motion.span
            lang="ur"
            dir="rtl"
            initial={{ opacity: 0, scale: reduced ? 1 : 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduced ? 0.15 : 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="block text-center leading-[1.1] select-none"
            style={{
              fontFamily: "var(--font-urdu)",
              fontSize: "clamp(7rem, 28vw, 22rem)",
              color: "color-mix(in oklch, var(--color-primary) 70%, transparent)",
              textShadow: "0 30px 80px color-mix(in oklch, var(--color-primary) 40%, transparent)",
            }}
          >
            دوا
          </motion.span>

          {/* English word layered with blend mode */}
          <motion.span
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduced ? 0.15 : 1.2, delay: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span
              className="italic"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 10vw, 8rem)",
                fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1',
                color: "var(--color-paper)",
                mixBlendMode: "difference",
              }}
            >
              medicine.
            </span>
          </motion.span>
        </div>

        <div className="relative grid grid-cols-12 gap-8 mt-24">
          <div className="col-span-12 md:col-span-4 md:col-start-1">
            <div
              className="text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-accent)] mb-4"
            >
              <span className="editorial-rule" /> Bilingual, not translated
            </div>
            <h2
              id="bilingual-title"
              className="text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.2] tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The word for medicine sits in two scripts. So does our app.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-7">
            <p className="text-[color:var(--color-paper)]/75 leading-[1.65] text-[17px]">
              Urdu speakers don&rsquo;t want a translation layer bolted on top of an English app.
              DawaLens renders drug names, dosage units, and warnings natively in{" "}
              <span lang="ur" dir="rtl" style={{ fontFamily: "var(--font-urdu)" }} className="text-[color:var(--color-paper)]">
                نستعلیق
              </span>{" "}
              &mdash; the script your grandmother actually reads &mdash; while keeping the clinical
              vocabulary technically precise in English.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 text-sm border-t border-[color:var(--color-paper)]/10 pt-6">
              <div>
                <div className="text-[color:var(--color-paper)]/50 text-[11px] tracking-[0.22em] uppercase mb-2">
                  Dosage
                </div>
                <div className="text-[color:var(--color-paper)] text-base">500 mg / twice daily</div>
                <div lang="ur" dir="rtl" style={{ fontFamily: "var(--font-urdu)" }} className="mt-1 text-[color:var(--color-paper)]/70">
                  ۵۰۰ ملی گرام / دن میں دو بار
                </div>
              </div>
              <div>
                <div className="text-[color:var(--color-paper)]/50 text-[11px] tracking-[0.22em] uppercase mb-2">
                  Warning
                </div>
                <div className="text-[color:var(--color-paper)] text-base">Avoid with alcohol</div>
                <div lang="ur" dir="rtl" style={{ fontFamily: "var(--font-urdu)" }} className="mt-1 text-[color:var(--color-paper)]/70">
                  شراب کے ساتھ استعمال نہ کریں
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
