"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const values = [
  {
    title: "Quality over quantity",
    description:
      "We take on a small number of projects at a time so every client gets our full attention. No assembly lines, no rushing to the next job.",
  },
  {
    title: "No templates",
    description:
      "Every website we build is custom-coded from scratch. Your business is unique, and your website should be too.",
  },
  {
    title: "Built to perform",
    description:
      "Fast load times, clean code, mobile-first design, and proper SEO. We don't just make things look good. We make them work.",
  },
  {
    title: "Ongoing partnership",
    description:
      "We don't disappear after launch. We're here for updates, improvements, and support for as long as you need us.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "Node.js",
  "PostgreSQL",
  "Figma",
  "Git",
  "Cloudflare",
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

export default function AboutContent() {
  return (
    <>
      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <AnimatedSection>
            <p
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Our Story
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-6">
              <p
                className="font-sans text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Woods Websites is run by Sean and Mark Woods, two brothers who
                share an obsession with building things properly. We started
                building websites because we kept seeing businesses stuck with
                slow, outdated sites that didn't reflect the quality of what they
                actually do.
              </p>
              <p
                className="font-sans text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                We're not a big agency. We don't have account managers or
                project coordinators standing between you and the people doing
                the work. When you hire us, you work directly with us,
                people designing, building, and maintaining your site.
              </p>
              <p
                className="font-sans text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                That matters because it means faster communication, better
                decisions, and a final product that actually matches what you
                had in mind. We treat every project like it's our own, because
                our name is on it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
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
              How We Work
            </p>
            <h2
              className="mb-16 font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              What we believe in
            </h2>
          </AnimatedSection>

          <div className="grid gap-px sm:grid-cols-2">
            {values.map((value) => (
              <AnimatedSection key={value.title}>
                <div
                  className="border-t p-8 md:p-10"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <h3
                    className="mb-3 font-display text-lg font-bold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
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
              Our Tools
            </p>
            <h2
              className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Built with modern tech
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-4 py-2 font-mono text-xs tracking-wide"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
