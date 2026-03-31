"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Design & Dev",
    slug: "design-dev",
    description:
      "Custom websites built from the ground up, designed around your brand identity and engineered to convert visitors into paying customers. Mobile-first, performance-focused, and tailored to your exact needs.",
    tags: ["Custom Design", "Mobile-First", "CMS", "Landing Pages", "E-Commerce"],
  },
  {
    number: "02",
    title: "Redesigns",
    slug: "redesigns",
    description:
      "Breathe new life into an outdated site. We modernise the look, sharpen the UX, and rebuild for the performance your business deserves, without losing what makes you, you.",
    tags: ["UX Audit", "Visual Refresh", "Content Migration", "Speed Boost"],
  },
  {
    number: "03",
    title: "Performance",
    slug: "performance",
    description:
      "Blazing-fast load times, Core Web Vitals in the green, and SEO foundations that help you rank and stay there. We optimise every layer so your site works as hard as you do.",
    tags: ["Core Web Vitals", "SEO", "Analytics", "Accessibility"],
  },
  {
    number: "04",
    title: "Integrations",
    slug: "integrations",
    description:
      "Booking systems, payments, CRMs: we wire your site into the tools you already rely on. Seamless, reliable connections that save you time and keep everything running smoothly.",
    tags: ["Booking Systems", "Payments", "CRM", "API", "Automation"],
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 60%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const active = services[activeIndex];

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
              className="group/hdr inline-flex items-center gap-3 font-sans text-sm tracking-wide"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <span className="transition-colors duration-300 group-hover/hdr:text-white">
                See All Services
              </span>
              <span className="relative inline-flex h-4 items-center overflow-hidden">
                <span
                  className="inline-block transition-all duration-500 group-hover/hdr:translate-x-full"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </span>
                <span
                  className="absolute left-0 -translate-x-full transition-all duration-500 group-hover/hdr:translate-x-0"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* DD.NYC-style: stacked titles left, detail panel right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

          {/* Left: service list */}
          <div className="lg:flex-1 flex flex-col">
            {services.map((service, i) => (
              <button
                key={service.title}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className="group/item flex items-baseline gap-4 text-left cursor-default select-none py-5 focus:outline-none"
              >
                {/* Number */}
                <span
                  className="w-7 flex-shrink-0 font-mono text-xs tracking-wide transition-colors duration-500"
                  style={{
                    color: i === activeIndex
                      ? "rgba(46,196,182,0.75)"
                      : "rgba(255,255,255,0.2)",
                  }}
                >
                  {service.number}
                </span>

                {/* Title */}
                <span
                  className="font-display font-bold leading-none tracking-tight transition-all duration-500"
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 4rem)",
                    color: i === activeIndex
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.16)",
                  }}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:w-[44%] xl:w-[42%] lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mb-7">
                  {active.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/services/${active.slug}`}
                      className="inline-flex items-center rounded-full px-4 py-2 font-sans text-sm transition-colors duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.62)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(46,196,182,0.1)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(46,196,182,0.3)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.62)";
                      }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="font-sans text-base leading-relaxed mb-10"
                  style={{ color: "rgba(255,255,255,0.48)" }}
                >
                  {active.description}
                </p>

                {/* Learn more + rule */}
                <Link
                  href={`/services/${active.slug}`}
                  className="group/lm inline-flex items-center gap-1.5 font-sans text-sm mb-6"
                  style={{ color: "var(--accent)" }}
                >
                  <span className="transition-opacity duration-300 group-hover/lm:opacity-70">
                    Learn more
                  </span>
                  <span className="text-base transition-transform duration-300 group-hover/lm:translate-x-1">
                    ›
                  </span>
                </Link>

                <div
                  className="h-px w-full"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
