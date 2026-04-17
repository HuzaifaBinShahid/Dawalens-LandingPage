"use client";

import { motion, useReducedMotion } from "motion/react";

export function PillScan() {
  const reduced = useReducedMotion();
  const d = (n: number) => (reduced ? 0 : n);

  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated illustration of a medicine pill being scanned and identified"
      className="w-full h-auto"
    >
      {/* Outer scan frame corners */}
      <g stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square">
        {[
          "M60 100 L60 60 L100 60",
          "M420 60 L460 60 L460 100",
          "M460 420 L460 460 L420 460",
          "M100 460 L60 460 L60 420",
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: d(0.8),
              delay: d(0.2 + i * 0.12),
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </g>

      {/* Scan line sweep */}
      <motion.line
        x1="80"
        x2="440"
        y1="260"
        y2="260"
        stroke="var(--color-accent)"
        strokeWidth="1"
        strokeDasharray="6 6"
        initial={{ y1: 80, y2: 80, opacity: 0 }}
        animate={{
          y1: [80, 440, 80],
          y2: [80, 440, 80],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: d(3.2),
          delay: d(1.0),
          ease: "easeInOut",
          repeat: reduced ? 0 : Infinity,
          repeatDelay: 1.5,
        }}
      />

      {/* Pill capsule — two halves */}
      <g>
        <motion.rect
          x="170"
          y="225"
          width="90"
          height="70"
          rx="35"
          fill="var(--color-primary)"
          initial={{ x: 130, opacity: 0 }}
          animate={{ x: 170, opacity: 1 }}
          transition={{ duration: d(0.9), delay: d(0.6), ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.rect
          x="260"
          y="225"
          width="90"
          height="70"
          rx="35"
          fill="var(--color-primary-tint)"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 260, opacity: 1 }}
          transition={{ duration: d(0.9), delay: d(0.7), ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Seam */}
        <motion.line
          x1="260"
          x2="260"
          y1="225"
          y2="295"
          stroke="var(--color-ink)"
          strokeOpacity="0.25"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: d(0.4), delay: d(1.4) }}
        />
      </g>

      {/* Data pull-out lines — editorial */}
      <g stroke="var(--color-paper)" strokeOpacity="0.4" strokeWidth="1">
        {[
          { x1: 170, y1: 260, x2: 110, y2: 150, label: "Dosage" },
          { x1: 350, y1: 260, x2: 410, y2: 150, label: "Interactions" },
          { x1: 260, y1: 295, x2: 260, y2: 420, label: "Safety" },
        ].map((ln, i) => (
          <g key={i}>
            <motion.line
              x1={ln.x1}
              y1={ln.y1}
              x2={ln.x2}
              y2={ln.y2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: d(0.7), delay: d(1.6 + i * 0.2) }}
            />
            <motion.circle
              cx={ln.x2}
              cy={ln.y2}
              r="3"
              fill="var(--color-accent)"
              stroke="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: d(0.3), delay: d(2.3 + i * 0.2) }}
            />
          </g>
        ))}
      </g>

      {/* Label dots for data pull-outs */}
      <g fill="var(--color-paper)" opacity="0.85" style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.14em" }}>
        {[
          { x: 110, y: 138, t: "DOSAGE" },
          { x: 410, y: 138, t: "INTERACTIONS", anchor: "end" as const },
          { x: 260, y: 442, t: "SAFETY", anchor: "middle" as const },
        ].map((l, i) => (
          <motion.text
            key={i}
            x={l.x}
            y={l.y}
            textAnchor={l.anchor ?? "start"}
            initial={{ opacity: 0, y: l.y + 8 }}
            animate={{ opacity: 0.85, y: l.y }}
            transition={{ duration: d(0.4), delay: d(2.4 + i * 0.2) }}
          >
            {l.t}
          </motion.text>
        ))}
      </g>

      {/* Orange punctuation dot — the skill's "single sharp accent" */}
      <motion.circle
        cx="470"
        cy="50"
        r="4"
        fill="var(--color-accent)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: d(0.3), delay: d(0.1) }}
      />
    </svg>
  );
}
