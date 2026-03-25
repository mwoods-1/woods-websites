"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Custom Website Design",
    description:
      "Beautiful, unique websites tailored to your brand. No templates, no shortcuts — just thoughtful design that reflects who you are.",
  },
  {
    number: "02",
    title: "Website Redesigns",
    description:
      "Breathe new life into your outdated website. We modernise your design, improve performance, and enhance user experience.",
  },
  {
    number: "03",
    title: "Platform Integrations",
    description:
      "Connect your website with booking systems, payment processors, and the tools you rely on — built to work flawlessly.",
  },
  {
    number: "04",
    title: "Performance & SEO",
    description:
      "Speed matters. We optimise your site to load faster, rank better, and convert more visitors into customers.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "We're here for the long haul. From content updates to technical fixes, we keep your site running at its best.",
  },
];

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, borderColor: "rgba(255,255,255,0.08)" }}
      className="group flex items-start gap-6 border-t py-8 transition-colors duration-300 hover:border-accent/30 md:gap-10 md:py-10"
    >
      <span
        className="shrink-0 font-mono text-xs tracking-widest pt-1"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        {service.number}
      </span>
      <div className="flex-1">
        <h3
          className="font-display text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-white sm:text-2xl"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {service.title}
        </h3>
        <p
          className="mt-2 max-w-xl font-sans text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {service.description}
        </p>
      </div>
      <div
        className="shrink-0 self-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ color: "var(--accent)", transform: "translateX(-8px)" }}
      >
        →
      </div>
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
        <motion.div style={{ opacity, y }} className="mb-4">
          <p
            className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            What We Do
          </p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "var(--text)" }}
            >
              Our services
            </h2>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 font-sans text-sm tracking-wide"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <span className="transition-colors duration-300 group-hover:text-white">
                See all services
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

        {/* Service rows */}
        <div className="mt-4">
          {services.map((service, i) => (
            <ServiceRow key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
