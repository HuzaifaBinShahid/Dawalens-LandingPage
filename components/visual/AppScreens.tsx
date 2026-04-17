import { StatusBar } from "./PhoneFrame";
import { ChevronLeft, AlertTriangle, CheckCircle2, ScanLine, Pill, Heart, Share2 } from "lucide-react";

/* -------- Screen 01: Scan -------- */
export function ScanScreen() {
  return (
    <div className="relative w-full h-full" style={{ background: "#0a0e1a", fontFamily: "var(--font-body)" }}>
      <StatusBar tone="light" />

      {/* Top bar */}
      <div className="absolute top-[54px] left-0 right-0 flex items-center justify-between px-5 z-10 text-[color:var(--color-paper)]">
        <button aria-label="Back" className="w-8 h-8 rounded-full bg-[color:var(--color-paper)]/10 flex items-center justify-center">
          <ChevronLeft size={16} strokeWidth={1.6} />
        </button>
        <span className="text-[12px] tracking-[0.18em] uppercase opacity-80">Scan</span>
        <span className="w-8" />
      </div>

      {/* Scan viewport */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
        <div className="relative w-[72%] aspect-[3/4] rounded-md">
          {/* Corner brackets */}
          {[
            "top-0 left-0 border-t-2 border-l-2",
            "top-0 right-0 border-t-2 border-r-2",
            "bottom-0 left-0 border-b-2 border-l-2",
            "bottom-0 right-0 border-b-2 border-r-2",
          ].map((p, i) => (
            <span key={i} className={`absolute ${p} w-6 h-6 border-[color:var(--color-accent)]`} aria-hidden />
          ))}

          {/* Fake pill/blister hint */}
          <div className="absolute inset-[22%] rounded-sm opacity-80" style={{
            background: "repeating-linear-gradient(45deg, #e5eff8 0 14px, #0160b8 14px 18px)",
            clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
          }} />
          {/* Scan sweep line */}
          <div
            aria-hidden
            className="absolute left-2 right-2 h-px"
            style={{
              top: "55%",
              background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
              boxShadow: "0 0 12px var(--color-accent)",
            }}
          />
        </div>

        <p className="mt-6 text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-paper)]/70 text-center px-6">
          Align the medicine packaging
          <br />
          within the frame
        </p>
      </div>

      {/* Bottom action strip */}
      <div className="absolute bottom-0 left-0 right-0 pb-[26px] pt-5 flex items-center justify-around px-6 bg-gradient-to-t from-[#0a0e1a] to-transparent">
        <button aria-label="Flash" className="w-10 h-10 rounded-full border border-[color:var(--color-paper)]/30 flex items-center justify-center text-[color:var(--color-paper)] text-[10px]">
          A
        </button>
        <button aria-label="Capture" className="w-14 h-14 rounded-full bg-[color:var(--color-accent)] flex items-center justify-center">
          <ScanLine size={22} strokeWidth={1.6} color="#0a0e1a" />
        </button>
        <button aria-label="Gallery" className="w-10 h-10 rounded-[10px] border border-[color:var(--color-paper)]/30" />
      </div>
    </div>
  );
}

/* -------- Screen 02: Medicine Detail -------- */
export function DetailScreen() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#F8FAFC", fontFamily: "var(--font-body)" }}>
      <StatusBar tone="dark" />

      {/* Blue header */}
      <div className="relative pt-[52px] pb-5 px-5" style={{ background: "var(--color-primary)" }}>
        <div className="flex items-center justify-between text-[color:var(--color-paper)]">
          <button aria-label="Back" className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
            <ChevronLeft size={14} strokeWidth={1.8} />
          </button>
          <span className="text-[10px] tracking-[0.22em] uppercase">Medicine</span>
          <div className="flex gap-1">
            <button aria-label="Share" className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <Share2 size={12} strokeWidth={1.8} />
            </button>
            <button aria-label="Save" className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <Heart size={12} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
            <Pill size={22} strokeWidth={1.4} color="#F8FAFC" />
          </div>
          <div className="text-[color:var(--color-paper)]">
            <div className="text-[10px] tracking-[0.22em] uppercase opacity-80">Biguanide</div>
            <div className="text-[17px] leading-tight font-medium">Metformin 500mg</div>
            <div lang="ur" dir="rtl" style={{ fontFamily: "var(--font-urdu)" }} className="text-[11px] opacity-80 mt-0.5">
              میٹفارمن
            </div>
          </div>
        </div>
      </div>

      {/* Scroll area */}
      <div className="px-5 pt-5 pb-6 space-y-4 text-[color:var(--color-ink)]">
        {/* Quick stats row */}
        <div className="flex gap-2">
          <Stat label="Dose" value="500 mg" tone="primary" />
          <Stat label="Frequency" value="2× / day" />
          <Stat label="Form" value="Oral" />
        </div>

        {/* Uses */}
        <SectionBlock title="Uses" icon={<CheckCircle2 size={12} strokeWidth={1.8} color="#16a34a" />}>
          <div className="text-[11px] leading-[1.5] text-[color:var(--color-slate)]">
            Type 2 Diabetes &middot; PCOS &middot; Prediabetes
          </div>
        </SectionBlock>

        {/* Contraindication */}
        <div className="rounded-lg p-3" style={{ background: "#fff1e8", border: "1px solid #ea580c33" }}>
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle size={12} strokeWidth={1.8} color="#ea580c" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#ea580c" }}>
              Contraindication
            </span>
          </div>
          <div className="text-[11px] leading-[1.5] text-[color:var(--color-ink)]">
            Avoid with iodinated contrast dye &mdash; risk of lactic acidosis.
          </div>
        </div>

        {/* Bottom tabs hint */}
        <div className="pt-2 flex gap-4 text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-slate)]">
          <span className="text-[color:var(--color-primary)] border-b-2 pb-1" style={{ borderColor: "var(--color-primary)" }}>Dosage</span>
          <span>Interactions</span>
          <span>Pregnancy</span>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "primary" }) {
  return (
    <div
      className="flex-1 px-2.5 py-2 rounded-md"
      style={{
        background: tone === "primary" ? "#e5eff8" : "#ffffff",
        border: "1px solid #e2e8f0",
      }}
    >
      <div className="text-[8px] tracking-[0.22em] uppercase text-[color:var(--color-slate)]">{label}</div>
      <div className="text-[12px] mt-0.5" style={{ color: tone === "primary" ? "var(--color-primary-dark)" : "var(--color-ink)", fontWeight: 600 }}>
        {value}
      </div>
    </div>
  );
}

function SectionBlock({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg p-3 border" style={{ borderColor: "#e2e8f0" }}>
      <div className="flex items-center gap-2 mb-1.5">
        {icon}
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-ink)]">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* -------- Screen 03: Safety / Interactions -------- */
export function SafetyScreen() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#F8FAFC", fontFamily: "var(--font-body)" }}>
      <StatusBar tone="dark" />

      {/* Header */}
      <div className="pt-[52px] pb-3 px-5 flex items-center justify-between">
        <button aria-label="Back" className="w-7 h-7 rounded-full bg-[color:var(--color-primary-tint)] flex items-center justify-center">
          <ChevronLeft size={14} strokeWidth={1.8} color="#0160B8" />
        </button>
        <span className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-slate)]">Safety</span>
        <span className="w-7" />
      </div>

      <div className="px-5 pt-2">
        <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-accent)] mb-1">Drug interactions</div>
        <h3 className="text-[18px] leading-tight tracking-[-0.01em] text-[color:var(--color-ink)]" style={{ fontFamily: "var(--font-display)" }}>
          3 flags found with your current list.
        </h3>
      </div>

      <div className="px-5 mt-4 space-y-2.5">
        <WarningRow
          tone="danger"
          title="Iodinated contrast"
          severity="High"
          note="Hold metformin 48 h pre- and post-procedure."
        />
        <WarningRow
          tone="warn"
          title="Alcohol &mdash; daily use"
          severity="Moderate"
          note="Increased lactic acidosis risk."
        />
        <WarningRow
          tone="info"
          title="Cimetidine"
          severity="Mild"
          note="May elevate metformin plasma levels."
        />
      </div>

      <div className="mx-5 mt-4 p-3 rounded-lg border flex items-start gap-2" style={{ background: "#ecfdf5", borderColor: "#16a34a33" }}>
        <CheckCircle2 size={14} strokeWidth={1.8} color="#16a34a" />
        <div>
          <div className="text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#16a34a" }}>Pregnancy: Category B</div>
          <div className="text-[10.5px] text-[color:var(--color-slate)] leading-[1.5] mt-0.5">
            Safe when benefits outweigh risks &mdash; consult your physician.
          </div>
        </div>
      </div>
    </div>
  );
}

function WarningRow({
  tone,
  title,
  severity,
  note,
}: {
  tone: "danger" | "warn" | "info";
  title: string;
  severity: string;
  note: string;
}) {
  const palette = {
    danger: { bg: "#fef2f2", border: "#dc262633", dot: "#dc2626", sev: "#dc2626" },
    warn: { bg: "#fff1e8", border: "#ea580c33", dot: "#ea580c", sev: "#ea580c" },
    info: { bg: "#eff6ff", border: "#0160b833", dot: "#0160b8", sev: "#0160b8" },
  }[tone];

  return (
    <div className="rounded-lg p-3 border flex items-start gap-2.5" style={{ background: palette.bg, borderColor: palette.border }}>
      <span className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: palette.dot }} />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[11.5px] font-semibold text-[color:var(--color-ink)]" dangerouslySetInnerHTML={{ __html: title }} />
          <span className="text-[9px] tracking-[0.2em] uppercase font-semibold" style={{ color: palette.sev }}>{severity}</span>
        </div>
        <div className="text-[10.5px] text-[color:var(--color-slate)] mt-0.5 leading-[1.5]">{note}</div>
      </div>
    </div>
  );
}
