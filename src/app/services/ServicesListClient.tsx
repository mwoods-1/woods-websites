"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

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
  {
    number: "05",
    title: "Software Solutions",
    slug: "software",
    description:
      "Beyond websites — we build custom software tools tailored to how your business actually operates. Client portals, scheduling systems, automated invoicing, review collectors, and more. If it can save you time or make you money, we can build it.",
    tags: ["Client Portals", "Scheduling", "Invoicing", "Dashboards", "Custom Tools"],
  },
];

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

          {/* Left: service titles */}
          <div className="lg:flex-1 flex flex-col">
            {services.map((service, i) => (
              <button
                key={service.title}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className="flex items-baseline gap-4 text-left cursor-default select-none py-5 focus:outline-none"
              >
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
                <span
                  className="font-display font-bold leading-none tracking-tight transition-all duration-500"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 4rem)",
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
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full px-4 py-2 font-sans text-sm"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.62)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="font-sans text-base leading-relaxed mb-6"
                  style={{ color: "rgba(255,255,255,0.48)" }}
                >
                  {active.description}
                </p>

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
