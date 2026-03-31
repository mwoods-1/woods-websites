"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface PageHeroProps {
  eyebrow: string;
  heading: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, heading, subtitle }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-48 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(46,196,182,0.05), transparent)",
        }}
      />

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl px-6"
      >
        <p
          className="mb-4 font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          {eyebrow}
        </p>
        <h1
          className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: "var(--text)" }}
        >
          {heading}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-xl font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
