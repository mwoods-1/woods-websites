"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, your audience, and your goals. What does success look like? What isn't working today? This conversation shapes everything that follows.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create visual designs that match your brand and serve your users. You'll see realistic mockups and prototypes before a single line of code is written — no surprises.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build with modern technologies — fast, accessible, mobile-first. Every site is custom-coded for performance. No page builders, no bloated templates.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle deployment, DNS, SSL, analytics setup, and final testing. Your site goes live on fast, reliable infrastructure with everything configured correctly from day one.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We don't disappear after launch. Ongoing maintenance, updates, and improvements keep your site performing at its best. We're a long-term partner, not a one-time vendor.",
  },
];

const primaryServices = [
  {
    title: "Custom Website Design & Development",
    description:
      "Beautiful, high-performance websites built from scratch for your business. No templates, no page builders — just clean, custom code that loads fast and looks great on every device.",
    icon: "🎨",
  },
  {
    title: "Website Redesigns & Modernisation",
    description:
      "Transform your outdated website into a modern, mobile-friendly experience. We rebuild from the ground up while preserving what works and fixing what doesn't.",
    icon: "🔄",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Online stores that convert. Whether it's Shopify, WooCommerce, or a fully custom solution — we build commerce experiences that make buying effortless.",
    icon: "🛒",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Booking systems, payment processors, CRMs, email platforms — we integrate the tools your business runs on, seamlessly embedded into your website.",
    icon: "🔗",
  },
  {
    title: "Performance Optimisation & SEO",
    description:
      "Speed matters. We optimise for Core Web Vitals, implement technical SEO best practices, and make sure your site ranks for the terms your customers are searching.",
    icon: "⚡",
  },
];

const additionalServices = [
  { title: "Ongoing Maintenance & Support", description: "Regular updates, security patches, and content changes to keep your site running smoothly." },
  { title: "Custom Web Applications", description: "Bespoke software solutions — dashboards, portals, internal tools — built for your specific workflow." },
  { title: "Brand & Digital Strategy", description: "Strategic guidance on positioning, messaging, and digital presence that aligns with your business goals." },
  { title: "Analytics & Conversion Optimisation", description: "Data-driven improvements to turn more visitors into customers." },
  { title: "Mobile-First Development", description: "Every site is built mobile-first — because that's where your customers are." },
  { title: "Accessibility & Compliance", description: "WCAG-compliant sites that work for everyone and meet accessibility standards." },
  { title: "API Development & Integration", description: "Custom APIs and third-party connections that extend your website's capabilities." },
  { title: "Content Management Systems", description: "Easy-to-use CMS solutions so you can update your own content without technical knowledge." },
];

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 40%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ServicesContent() {
  return (
    <>
      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <AnimatedSection>
          <p
            className="mb-10 font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Our Process
          </p>
        </AnimatedSection>

        <div className="space-y-0">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.number}>
              <div
                className="grid gap-6 border-t py-10 md:grid-cols-[80px_200px_1fr]"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-display text-xl font-bold tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed md:text-base"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Primary Services */}
      <section
        className="border-t py-24"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <p
              className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Core Services
            </p>
            <h2
              className="mb-16 font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              What we do best
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {primaryServices.map((service) => (
              <AnimatedSection key={service.title}>
                <div
                  className="grid gap-6 border-t py-10 md:grid-cols-[1fr_2fr]"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <h3
                    className="font-display text-lg font-bold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed md:text-base"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section
        className="border-t py-24"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <p
              className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              We Also Offer
            </p>
            <h2
              className="mb-16 font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Additional expertise
            </h2>
          </AnimatedSection>

          <div className="grid gap-px sm:grid-cols-2">
            {additionalServices.map((service) => (
              <AnimatedSection key={service.title}>
                <div
                  className="border-t p-6 md:p-8"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <h3
                    className="mb-2 font-display text-sm font-bold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
