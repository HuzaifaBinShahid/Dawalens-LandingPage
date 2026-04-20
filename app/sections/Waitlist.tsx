"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { NastaliqMark } from "@/components/visual/NastaliqMark";
import { Grain } from "@/components/visual/Grain";
import { CheckCircle2 } from "lucide-react";

/**
 * Replace this with your Formspree form ID (https://formspree.io/f/<id>).
 * Until it's replaced, submissions will fail and a helper note surfaces below the form.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
const IS_PLACEHOLDER = FORMSPREE_ENDPOINT.includes("your-form-id");

type Status = "idle" | "submitting" | "success" | "error";

export function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (IS_PLACEHOLDER) {
      setStatus("error");
      setErrorMsg("The Formspree endpoint hasn't been configured yet.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again in a moment.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="relative bg-[color:var(--color-deep)] text-[color:var(--color-paper)] py-28 md:py-40 overflow-hidden scroll-mt-24"
    >
      <Grain opacity={0.08} />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 0%, color-mix(in oklch, var(--color-accent) 22%, transparent) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 0% 100%, color-mix(in oklch, var(--color-deep-dark) 80%, transparent) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1300px] px-6 sm:px-8 md:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-accent)]">
              <span className="editorial-rule" />
              <span>Join the waitlist</span>
              <NastaliqMark text="فہرست" className="text-base opacity-80" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="waitlist-title"
              className="text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.96] tracking-[-0.02em] max-w-[15ch]"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
            >
              Be first to hold it
              <br />
              <span className="italic text-[color:var(--color-accent)]">in your hand.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-[17px] md:text-[19px] leading-[1.55] max-w-[52ch] text-[color:var(--color-paper)]/80">
              We&rsquo;re still tuning the OCR against regional packaging. Leave your number
              and we&rsquo;ll ping you on WhatsApp the moment DawaLens goes live &mdash; no
              marketing, no noise.
            </p>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.2} className="lg:col-span-6">
          <div className="relative bg-[color:var(--color-paper)] text-[color:var(--color-ink)] p-6 sm:p-8 md:p-10">
            <span
              aria-hidden
              className="absolute -top-3 -left-3 text-[11px] tracking-[0.24em] uppercase bg-[color:var(--color-accent)] text-[color:var(--color-ink)] px-3 py-1.5"
            >
              Early access
            </span>

            {status === "success" ? (
              <SuccessCard />
            ) : (
              <form onSubmit={onSubmit} noValidate className="pt-4 space-y-6">
                <EditorialField
                  name="name"
                  label="Full name"
                  required
                  autoComplete="name"
                  placeholder="e.g. Ayesha Khan"
                />
                <EditorialField
                  name="email"
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@household.pk"
                />
                <EditorialField
                  name="phone"
                  label="Phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+92 300 1234567"
                />
                <EditorialField
                  name="country"
                  label="City / country"
                  autoComplete="address-level2"
                  placeholder="Karachi, Pakistan"
                />

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-3 px-7 py-4 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-ink)] transition-colors disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Add me to the list"}
                    <span
                      aria-hidden
                      className="inline-block w-6 h-px bg-current translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </button>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-slate)]">
                    No spam. One email at launch.
                  </span>
                </div>

                {status === "error" && (
                  <p role="alert" className="text-[12px] text-[color:var(--color-danger)]">
                    {errorMsg}
                  </p>
                )}
              </form>
            )}

            {IS_PLACEHOLDER && status !== "success" && (
              <p className="mt-6 pt-6 border-t border-[color:var(--color-bone-deep)] text-[10px] tracking-[0.14em] text-[color:var(--color-slate)] leading-relaxed break-words">
                <strong className="text-[color:var(--color-accent)] uppercase tracking-[0.22em]">
                  Dev note &middot;
                </strong>{" "}
                Set <code className="font-mono break-all">FORMSPREE_ENDPOINT</code> in{" "}
                <code className="font-mono break-all">app/sections/Waitlist.tsx</code> to activate
                submissions.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EditorialField({
  name,
  label,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="block text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-slate)] mb-2">
        {label}
        {required && <span className="text-[color:var(--color-accent)]"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-[color:var(--color-bone-deep)] focus:border-[color:var(--color-primary)] focus:outline-none pb-2 pt-1 text-[16px] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-slate-soft)] transition-colors"
      />
    </label>
  );
}

function SuccessCard() {
  return (
    <div className="py-6 flex items-start gap-4">
      <CheckCircle2
        size={28}
        strokeWidth={1.6}
        className="text-[color:var(--color-success)] shrink-0 mt-1"
      />
      <div>
        <div className="text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-success)] mb-2">
          You&rsquo;re on the list
        </div>
        <h3
          className="text-[26px] leading-tight tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We&rsquo;ll ping you the moment DawaLens goes live.
        </h3>
        <p className="mt-3 text-[color:var(--color-slate)] leading-[1.55]">
          Keep an eye on the inbox &mdash; and on WhatsApp if you left your number.
        </p>
      </div>
    </div>
  );
}
