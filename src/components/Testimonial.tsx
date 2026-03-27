"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/*
 * ──────────────────────────────────────────────
 * TESTIMONIAL — swap placeholder for real quote
 * ──────────────────────────────────────────────
 */
const testimonial = {
  quote:
    "They fixed our outdated website and built us something modern and professional. Since the new site went live, we're ranking higher in Google and getting more enquiries and bookings than ever before.",
  author: "Sven Haltmann",
  business: "Aviation Expeditions",
  industry: "Tourism · Alaska",
};

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [40, 0]);

  return (
    <section
      className="border-t py-20 sm:py-28 md:py-32"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        {/* Large quotation mark */}
        <span
          className="mb-6 block font-display text-6xl font-bold leading-none sm:text-7xl md:text-8xl"
          style={{ color: "var(--accent)", opacity: 0.25 }}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Quote */}
        <blockquote
          className="font-sans text-lg leading-relaxed italic sm:text-xl md:text-2xl"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          {testimonial.quote}
        </blockquote>

        {/* Attribution */}
        <div className="mt-8">
          <p
            className="font-display text-sm font-bold tracking-wide sm:text-base"
            style={{ color: "var(--accent)" }}
          >
            {testimonial.author}
          </p>
          <p
            className="mt-1 font-sans text-xs sm:text-sm"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {testimonial.business} · {testimonial.industry}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
