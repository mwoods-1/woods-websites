"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import Link from "next/link";

const processSteps = [
  "Discovery",
  "Design",
  "Build",
  "Launch",
  "Support",
];

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Design & Dev",
    description:
      "Custom websites from the ground up — designed around your brand and built to convert.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M8 7l4-4 4 4" />
        <rect x="4" y="14" width="16" height="7" rx="1" />
      </svg>
    ),
    title: "Redesigns",
    description:
      "Modernise your outdated site with a fresh look, better UX, and improved performance.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Performance",
    description:
      "Blazing-fast load times, Core Web Vitals optimised, and SEO that actually ranks.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <circle cx="8" cy="6" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="10" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Integrations",
    description:
      "Booking systems, payments, CRMs — we wire your site into the tools you already use.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl border p-6 sm:p-8 transition-colors duration-300"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.12}s`,
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {/* Icon */}
      <div
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
        style={{
          color: "var(--accent)",
          background: "rgba(46, 196, 182, 0.08)",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="font-display text-lg font-bold tracking-tight sm:text-xl"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="mt-2 font-sans text-sm leading-relaxed"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {service.description}
      </p>

      {/* Hover glow effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at 50% 0%, rgba(46,196,182,0.04), transparent 70%)",
        }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 60%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-12 md:mb-16">
          <p
            className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            What We Do
          </p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--text)" }}
            >
              Everything your business needs to{" "}
              <span style={{ color: "var(--accent)" }}>win online</span>
            </h2>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 font-sans text-sm tracking-wide"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <span className="transition-colors duration-300 group-hover:text-white">
                See All Services
              </span>
              <span className="relative inline-flex h-4 items-center overflow-hidden">
                <span
                  className="inline-block transition-all duration-500 group-hover:translate-x-full"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </span>
                <span
                  className="absolute left-0 -translate-x-full transition-all duration-500 group-hover:translate-x-0"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Process timeline */}
        <motion.div style={{ opacity, y }} className="mb-14 md:mb-20">
          {/* Desktop: horizontal */}
          <div className="hidden sm:flex items-center gap-3">
            {processSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="inline-flex items-center rounded-full px-4 py-1.5 font-mono text-xs tracking-wide"
                  style={{
                    background: "rgba(46, 196, 182, 0.08)",
                    color: "var(--accent)",
                    border: "1px solid rgba(46, 196, 182, 0.15)",
                  }}
                >
                  {step}
                </span>
                {i < processSteps.length - 1 && (
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          {/* Mobile: vertical */}
          <div className="flex sm:hidden flex-wrap gap-2">
            {processSteps.map((step) => (
              <span
                key={step}
                className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] tracking-wide"
                style={{
                  background: "rgba(46, 196, 182, 0.08)",
                  color: "var(--accent)",
                  border: "1px solid rgba(46, 196, 182, 0.15)",
                }}
              >
                {step}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4-column service grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
