"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

const steps = [
  {
    number: "01",
    label: "Kickoff",
    description:
      "We start with a free discovery call to understand your business, your goals, and what success looks like. No jargon, no pressure — just an honest conversation that shapes everything we build together.",
  },
  {
    number: "02",
    label: "Design",
    description:
      "We create visual mockups and interactive prototypes built around your brand. You'll see exactly what you're getting — and have the chance to shape it — before a single line of code is written.",
  },
  {
    number: "03",
    label: "Build",
    description:
      "Custom-coded, mobile-first, and optimised for speed from day one. No templates, no bloated builders — just clean, performant code that represents your business exactly as it should.",
  },
  {
    number: "04",
    label: "Launch",
    description:
      "We handle deployment, DNS, SSL, analytics setup, and final testing. Your site goes live on fast, reliable infrastructure with everything configured correctly from the start.",
  },
  {
    number: "05",
    label: "Support",
    description:
      "We don't disappear after launch. Ongoing maintenance, content updates, and continuous improvements keep your site performing at its best — and keep us in your corner long-term.",
  },
];

const INTERVAL = 3800;

interface ProcessTimelineProps {
  /** Set true when this is the first section on the page — adds nav clearance and removes the top border */
  isHero?: boolean;
}

export default function ProcessTimeline({ isHero = false }: ProcessTimelineProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActive((i) => (i + 1) % steps.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, [paused, advance]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={isHero ? undefined : { borderTop: "1px solid rgba(255,255,255,0.08)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Hero radial glow (contact page only) */}
      {isHero && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(46,196,182,0.05), transparent)",
          }}
        />
      )}

      {/* Ghost background number */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(16rem, 35vw, 28rem)",
              color: "rgba(255,255,255,0.022)",
              letterSpacing: "-0.06em",
            }}
          >
            {steps[active].number}
          </motion.span>
        </AnimatePresence>
      </div>

      <div
        className="relative mx-auto max-w-7xl px-6 pb-24 md:pb-32"
        style={{ paddingTop: isHero ? "clamp(8rem, 12vw, 12rem)" : "6rem" }}
      >
        {/* Tagline */}
        <div className="mb-16 md:mb-20">
          <p
            className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Our Process
          </p>
          <h2
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--text)", maxWidth: "640px" }}
          >
            We&apos;ve got you covered{" "}
            <span style={{ color: "var(--accent)" }}>
              every step of the way.
            </span>
          </h2>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:flex items-start mb-14">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center flex-1 last:flex-none">
              <button
                onMouseEnter={() => select(i)}
                onClick={() => select(i)}
                className="flex flex-col items-center gap-3 flex-none focus:outline-none"
                style={{ cursor: "pointer" }}
              >
                {/* Circle */}
                <div
                  className="relative flex items-center justify-center rounded-full transition-all duration-500"
                  style={{
                    width: 52,
                    height: 52,
                    background: i === active
                      ? "var(--accent)"
                      : i < active
                        ? "rgba(46,196,182,0.12)"
                        : "rgba(255,255,255,0.04)",
                    border: i === active
                      ? "none"
                      : i < active
                        ? "1px solid rgba(46,196,182,0.35)"
                        : "1px solid rgba(255,255,255,0.12)",
                    boxShadow: i === active
                      ? "0 0 0 6px rgba(46,196,182,0.12), 0 0 24px rgba(46,196,182,0.35)"
                      : "none",
                    transform: i === active ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <span
                    className="font-mono text-xs font-bold tracking-wide"
                    style={{
                      color: i === active
                        ? "#050505"
                        : i < active
                          ? "var(--accent)"
                          : "rgba(255,255,255,0.28)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Label */}
                <span
                  className="font-mono text-[11px] tracking-widest uppercase transition-colors duration-500"
                  style={{
                    color: i === active
                      ? "rgba(255,255,255,0.9)"
                      : i < active
                        ? "rgba(46,196,182,0.55)"
                        : "rgba(255,255,255,0.22)",
                  }}
                >
                  {step.label}
                </span>
              </button>

              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div
                  className="flex-1 h-px mx-4 mb-9 overflow-hidden rounded-full"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "var(--accent)", opacity: 0.5 }}
                    initial={{ width: i < active ? "100%" : "0%" }}
                    animate={{ width: i < active ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="flex md:hidden flex-col mb-10">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col">
              <button
                onMouseEnter={() => select(i)}
                onClick={() => select(i)}
                className="flex items-center gap-4 py-2.5 text-left focus:outline-none"
              >
                <div
                  className="flex-none flex items-center justify-center rounded-full transition-all duration-500"
                  style={{
                    width: 40,
                    height: 40,
                    background: i === active ? "var(--accent)" : "rgba(255,255,255,0.04)",
                    border: i === active ? "none" : "1px solid rgba(255,255,255,0.12)",
                    boxShadow: i === active
                      ? "0 0 0 4px rgba(46,196,182,0.12), 0 0 16px rgba(46,196,182,0.3)"
                      : "none",
                    transform: i === active ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: i === active ? "#050505" : "rgba(255,255,255,0.28)" }}
                  >
                    {step.number}
                  </span>
                </div>
                <span
                  className="font-mono text-xs tracking-widest uppercase transition-colors duration-500"
                  style={{
                    color: i === active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.22)",
                  }}
                >
                  {step.label}
                </span>
              </button>
              {i < steps.length - 1 && (
                <div
                  className="ml-5 w-px transition-colors duration-500"
                  style={{
                    height: 20,
                    background: i < active ? "rgba(46,196,182,0.4)" : "rgba(255,255,255,0.08)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.5)", maxWidth: "600px" }}
          >
            {steps[active].description}
          </motion.p>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-10">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                height: 4,
                width: i === active ? 28 : 6,
                background: i === active ? "var(--accent)" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
          {!paused && (
            <span
              className="ml-3 font-mono text-[10px] tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Auto
            </span>
          )}
        </div>

        {/* Bottom progress bar */}
        {!paused && (
          <motion.div
            key={`bar-${active}`}
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ background: "var(--accent)", opacity: 0.4 }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: INTERVAL / 1000, ease: "linear" }}
          />
        )}

      </div>
    </section>
  );
}
