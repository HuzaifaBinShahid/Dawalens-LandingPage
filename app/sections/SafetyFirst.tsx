import { Reveal } from "@/components/motion/Reveal";
import { AlertTriangle, Shield, HeartPulse } from "lucide-react";

export function SafetyFirst() {
  return (
    <section
      id="safety"
      aria-labelledby="safety-title"
      className="relative bg-[color:var(--color-bone)] text-[color:var(--color-ink)] py-28 md:py-40 overflow-hidden"
    >
      {/* Decorative typographic bleed */}
      <div
        aria-hidden
        className="absolute -bottom-24 -right-16 text-[22vw] leading-none pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
          fontStyle: "italic",
          color: "color-mix(in oklch, var(--color-accent) 12%, transparent)",
        }}
      >
        first.
      </div>

      <div className="relative mx-auto max-w-[1400px] px-8 md:px-14 grid grid-cols-12 gap-10 items-start">
        {/* LEFT — the example card */}
        <Reveal direction="left" className="col-span-12 lg:col-span-6 xl:col-span-5 lg:col-start-1">
          <figure className="bg-[color:var(--color-paper)] p-8 md:p-10 border border-[color:var(--color-bone-deep)] shadow-[0_30px_80px_-40px_rgba(10,14,26,0.25)]">
            <div className="flex items-center gap-3 text-[color:var(--color-accent)] text-[11px] tracking-[0.24em] uppercase mb-6">
              <AlertTriangle size={14} strokeWidth={1.8} />
              <span>Contraindication flagged</span>
            </div>

            <div className="pb-6 mb-6 border-b border-[color:var(--color-bone-deep)]">
              <span
                className="block text-[34px] md:text-[42px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Metformin 500mg
              </span>
              <span className="block mt-2 text-[color:var(--color-slate)] text-sm tracking-wide">
                Biguanide &middot; Type 2 Diabetes
              </span>
            </div>

            <ul className="space-y-4 text-[15px] leading-[1.55]">
              <li className="flex gap-3">
                <span
                  className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)] shrink-0"
                  aria-hidden
                />
                <span>
                  Avoid with contrast dye (<em>iodinated radiocontrast</em>) &mdash; risk of lactic acidosis.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)] shrink-0"
                  aria-hidden
                />
                <span>Reduce dose with impaired renal function (eGFR &lt; 45 mL/min).</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-success)] shrink-0"
                  aria-hidden
                />
                <span className="text-[color:var(--color-slate)]">
                  Safe in pregnancy when benefits outweigh risks &mdash; physician review recommended.
                </span>
              </li>
            </ul>

            <figcaption className="mt-8 pt-6 border-t border-[color:var(--color-bone-deep)] flex items-center gap-4 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-slate)]">
              <Shield size={14} strokeWidth={1.8} />
              Sourced from national formularies &amp; peer-reviewed guidelines
            </figcaption>
          </figure>
        </Reveal>

        {/* RIGHT — the promise */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-6 xl:col-start-7">
          <Reveal>
            <div className="flex items-center gap-4 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-accent)]">
              <span className="editorial-rule" />
              <span>The safety promise</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="safety-title"
              className="text-[clamp(2.4rem,5.6vw,5rem)] leading-[0.98] tracking-[-0.02em] max-w-[14ch]"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 10' }}
            >
              We refuse to{" "}
              <span className="italic text-[color:var(--color-accent)]">guess.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-[18px] md:text-[19px] leading-[1.6] text-[color:var(--color-slate)] max-w-[52ch]">
              Every contraindication, every interaction, every pregnancy and lactation flag is
              traced back to a published source. No generative summaries of prescriptions.
              No &ldquo;probably safe.&rdquo; When we don&rsquo;t know, we say so &mdash; and point you to the people who do.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {[
                { i: <HeartPulse size={18} strokeWidth={1.6} />, t: "Pregnancy & lactation", d: "Category flags with source references" },
                { i: <AlertTriangle size={18} strokeWidth={1.6} />, t: "Drug interactions", d: "Cross-checked at scan time" },
                { i: <Shield size={18} strokeWidth={1.6} />, t: "Renal & hepatic dosing", d: "Adjustment notes where applicable" },
                { i: <AlertTriangle size={18} strokeWidth={1.6} />, t: "Counterfeit signals", d: "Packaging mismatch heuristics" },
              ].map((f, i) => (
                <li key={i} className="flex gap-4 pt-4 border-t border-[color:var(--color-bone-deep)]">
                  <span className="text-[color:var(--color-primary)] shrink-0 mt-0.5">{f.i}</span>
                  <span>
                    <strong className="block font-medium">{f.t}</strong>
                    <span className="block text-[color:var(--color-slate)] text-[13px]">{f.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
