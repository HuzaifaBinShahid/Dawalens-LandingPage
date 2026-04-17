"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsetFor = (dir: Direction): { x?: number; y?: number } => {
  switch (dir) {
    case "up": return { y: 28 };
    case "down": return { y: -28 };
    case "left": return { x: 28 };
    case "right": return { x: -28 };
    default: return {};
  }
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "span" | "h1" | "h2" | "h3" | "p";
}) {
  const reducedMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const initial = reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, ...offsetFor(direction) };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reducedMotion ? 0.15 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
  initialDelay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  initialDelay?: number;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const reducedMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : gap,
        delayChildren: reducedMotion ? 0 : initialDelay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.15 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
