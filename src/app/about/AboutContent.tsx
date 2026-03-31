"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const values = [
  {
    number: "01",
    title: "Quality over quantity",
    description:
      "We take on a small number of projects at a time so every client gets our full attention. No assembly lines, no rushing to the next job.",
  },
  {
    number: "02",
    title: "Fit for purpose",
    description:
      "We match the approach to the project. Whether that's a fully custom build or a well-configured template, we focus on what delivers the best outcome for your goals and budget.",
  },
  {
    number: "03",
    title: "Built to perform",
    description:
      "Fast load times, clean code, mobile-first design, and proper SEO. We don't just make things look good. We make them work.",
  },
  {
    number: "04",
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

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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
      {/* ── Founders section ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-0 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:grid-cols-[5fr_6fr]">

          {/* Photo column */}
          <AnimatedSection className="relative mb-12 lg:mb-0">
            {/* Teal accent line */}
            <div
              className="absolute -left-3 top-8 h-32 w-px"
              style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
            />

            <div className="relative overflow-hidden rounded-2xl"
              style={{
                boxShadow: "0 0 0 1px rgba(46,196,182,0.12), 0 32px 64px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="/images/founders_about_photo.png"
                alt="Sean and Mark Woods, founders of Woods Websites"
                width={700}
                height={700}
                className="w-full object-cover"
                priority
              />

              {/* Subtle teal gradient overlay at bottom */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 100%)",
                }}
              />

              {/* Name caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="font-mono text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Sean &amp; Mark Woods
                </p>
                <p
                  className="mt-1 font-sans text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Co-founders, Woods Websites
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Story column */}
          <AnimatedSection className="flex flex-col justify-center">
            <p
              className="mb-4 font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Our Story
            </p>

            {/* Large opening statement */}
            <h2
              className="mb-8 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]"
              style={{ color: "var(--text)" }}
            >
              Two brothers.<br />
              One obsession:<br />
              <span style={{ color: "var(--accent)" }}>building it right.</span>
            </h2>

            <div className="space-y-5">
              <p
                className="font-sans text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Woods Websites is run by Sean and Mark Woods, two brothers who
                share an obsession with building things properly. We started
                building websites because we kept seeing businesses stuck with
                slow, outdated sites that didn&apos;t reflect the quality of what they
                actually do.
              </p>
              <p
                className="font-sans text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                We&apos;re not a big agency. We don&apos;t have account managers or
                project coordinators standing between you and the people doing
                the work. When you hire us, you work directly with us,
                the people designing, building, and maintaining your site.
              </p>
              <p
                className="font-sans text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                That matters because it means faster communication, better
                decisions, and a final product that actually matches what you
                had in mind. We treat every project like it&apos;s our own, because
                our name is on it.
              </p>
            </div>

            {/* Stat strip */}
            <div
              className="mt-10 flex gap-6 border-t pt-8 sm:gap-10"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {[
                { value: "↑", label: "Traffic & bookings" },
                { value: "0", label: "Middlemen" },
                { value: "Free", label: "Discovery call" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display text-2xl font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-0.5 font-mono text-xs tracking-wide uppercase"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="border-t py-28"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
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
                  className="group relative border-t p-8 transition-colors duration-300 md:p-10"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  {/* Hover accent fill */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(46,196,182,0.03) 0%, transparent 60%)",
                    }}
                  />

                  <p
                    className="mb-4 font-mono text-xs tracking-[0.2em]"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  >
                    {value.number}
                  </p>
                  <h3
                    className="mb-3 font-display text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]"
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

      {/* ── Tech Stack ── */}
      <section
        className="border-t py-28"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
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
                  className="group relative overflow-hidden rounded-full border px-5 py-2.5 font-mono text-xs tracking-wide transition-all duration-300 hover:border-[rgba(46,196,182,0.4)]"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(46,196,182,0.08), transparent 70%)",
                    }}
                  />
                  <span className="relative transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {tech}
                  </span>
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
