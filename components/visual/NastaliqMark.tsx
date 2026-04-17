import type { CSSProperties } from "react";

export function NastaliqMark({
  text = "دوا",
  className,
  style,
  lang = "ur",
}: {
  text?: string;
  className?: string;
  style?: CSSProperties;
  lang?: string;
}) {
  return (
    <span
      lang={lang}
      dir="rtl"
      className={className}
      style={{ fontFamily: "var(--font-urdu)", ...style }}
    >
      {text}
    </span>
  );
}
