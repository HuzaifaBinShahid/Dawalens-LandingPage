import { Fraunces, Geist, Noto_Nastaliq_Urdu } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-urdu",
});
