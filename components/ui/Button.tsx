import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-accent)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-accent)] border border-[color:var(--color-accent)]",
  ghost:
    "bg-transparent text-[color:var(--color-paper)] hover:text-[color:var(--color-accent)]",
  outline:
    "bg-transparent text-[color:var(--color-paper)] border border-[color:var(--color-paper)]/30 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "group inline-flex items-center gap-2 px-6 py-3 text-[13px] tracking-[0.18em] uppercase font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-none";

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
