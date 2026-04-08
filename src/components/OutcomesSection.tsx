"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const outcomes = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    title: "Get More Customers",
    description:
      "Websites designed to convert visitors into bookings and paying clients.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Build Instant Trust",
    description:
      "Professional, modern design that makes your business credible from the first click.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Save Time & Automate",
    description:
      "Booking systems, payments, and a CMS so you can update your site yourself — no coding needed.",
  },
];

export default function OutcomesSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 65%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <section ref={ref} className="py-14 md:py-20">
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-7xl px-6"
      >
        <p
          className="mb-3 text-center font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          What You Get
        </p>
        <h2
          className="mx-auto mb-14 max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--text)" }}
        >
          Real results for{" "}
          <span style={{ color: "var(--accent)" }}>your business</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(46,196,182,0.2)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(46,196,182,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="mb-5 inline-flex items-center justify-center rounded-xl p-3"
                style={{
                  background: "rgba(46,196,182,0.08)",
                  color: "var(--accent)",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="mb-3 font-display text-lg font-bold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {item.title}
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
