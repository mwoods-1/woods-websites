"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section
      className="relative overflow-hidden border-t py-32 md:py-40"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(46,196,182,0.06), transparent)",
        }}
      />

      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <p
          className="mb-4 font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          Let's Work Together
        </p>
        <h2
          className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          style={{ color: "var(--text)" }}
        >
          Ready to build{" "}
          <br className="hidden sm:block" />
          something{" "}
          <span style={{ color: "var(--accent)" }}>great?</span>
        </h2>
        <p
          className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Tell us about your project. We'll get back to you within 24 hours with
          ideas and a plan.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-sm font-medium transition-all duration-300 hover:opacity-85"
            style={{ background: "var(--accent)", color: "#050505" }}
          >
            Start a Project
            <span className="relative inline-flex h-4 items-center overflow-hidden">
              <span className="inline-block transition-all duration-500 group-hover:translate-x-full">
                →
              </span>
              <span className="absolute left-0 -translate-x-full transition-all duration-500 group-hover:translate-x-0">
                →
              </span>
            </span>
          </Link>

          <a
            href="mailto:woodswebsites@gmail.com"
            className="font-sans text-sm tracking-wide transition-colors duration-300 hover:text-white"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            woodswebsites@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
