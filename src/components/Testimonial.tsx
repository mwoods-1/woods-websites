"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

const testimonials = [
  {
    quote:
      "They fixed our outdated website and built us something modern and professional. Since the new site went live, we're ranking higher in Google and getting more enquiries and bookings than ever before.",
    author: "Sven Haltmann",
    business: "Aviation Expeditions",
    industry: "Tourism · Alaska",
    initials: "SH",
  },
  {
    quote:
      "From the first meeting they understood exactly what we needed. The new site has transformed how customers find us — our bookings have doubled since launch.",
    author: "Max Ancic",
    business: "Kingdom Property Care",
    industry: "Property Services",
    initials: "MA",
  },
  {
    quote:
      "Professional, fast, and they actually listened. The website captures exactly what our club is about. Parents love how easy it is to find info and register.",
    author: "Brae Ovens",
    business: "Ovens Soccer",
    industry: "Sports",
    initials: "BO",
  },
];

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [40, 0]);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const current = testimonials[active];

  return (
    <section
      className="border-t py-20 sm:py-28 md:py-32"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="relative mx-auto max-w-3xl px-6 text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Animated quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
              {current.quote}
            </blockquote>

            {/* Attribution */}
            <div className="mt-8">
              <p
                className="font-display text-sm font-bold tracking-wide sm:text-base"
                style={{ color: "var(--accent)" }}
              >
                {current.author}
              </p>
              <p
                className="mt-1 font-sans text-xs sm:text-sm"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {current.business} · {current.industry}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View testimonial ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === active ? 48 : 32,
                height: 4,
                borderRadius: 2,
                background:
                  i === active ? "var(--accent)" : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Avatar tabs */}
        <div className="mt-6 flex items-center justify-center gap-8">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-1.5 border-none bg-transparent transition-opacity duration-300"
              style={{
                opacity: i === active ? 1 : 0.35,
                cursor: "pointer",
                padding: "8px",
              }}
              aria-label={`Testimonial from ${t.author}`}
            >
              <div
                className="flex items-center justify-center rounded-full font-display text-sm font-bold"
                style={{
                  width: 36,
                  height: 36,
                  background:
                    "linear-gradient(135deg, #2ec4b6 0%, #1a8a7f 100%)",
                  color: "#050505",
                }}
              >
                {t.initials}
              </div>
              <span
                className="font-display text-[11px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {t.author.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
