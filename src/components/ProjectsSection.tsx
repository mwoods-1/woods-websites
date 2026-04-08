"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";

const projects = allProjects.map((p, i) => ({
  index: String(i + 1).padStart(2, "0"),
  name: p.name,
  type: p.type,
  industry: p.industry,
  description: p.description,
  href: `/work/${p.slug}`,
  image: p.cardImage,
  tags: p.tags,
  accent: p.accent,
}));

export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "start 40%"],
  });
  const headerOpacity = useTransform(headerProgress, [0, 1], [0, 1]);
  const headerY = useTransform(headerProgress, [0, 1], [40, 0]);

  return (
    <section className="pb-0">
      {/* Section header */}
      <motion.div
        ref={headerRef}
        style={{ opacity: headerOpacity, y: headerY }}
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <p
          className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          Selected Work
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Projects we're proud of
          </h2>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 font-sans text-sm tracking-wide"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <span className="transition-colors duration-300 group-hover:text-white">
              View all work
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

      {/* Sticky stacking cards — ID Studio style */}
      <div className="relative">
        {projects.map((project, i) => (
          <div
            key={project.index}
            className="sticky"
            style={{
              top: `${40 + i * 12}px`,
              marginTop: i === 0 ? 0 : "6px",
              zIndex: 10 + i,
            }}
          >
            <Link href={project.href} className="group block">
              <div
                className="relative mx-6 flex flex-col overflow-hidden md:mx-16 lg:mx-24 h-[60vh] md:h-[80vh]"
                style={{
                  borderRadius: "24px",
                  background: "#0a0a0a",
                }}
              >
                {/* Website screenshot — top portion */}
                <div className="relative overflow-hidden aspect-video md:aspect-auto md:flex-1 md:min-h-0">
                  <Image
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 85vw"
                    priority={i === 0}
                  />
                  {/* Subtle fade to bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.6) 20%, transparent 50%)",
                    }}
                  />
                </div>

                {/* Content — solid dark area at bottom */}
                <div className="relative z-10 shrink-0 px-5 pb-5 pt-2 sm:px-8 sm:pb-8 md:px-12 md:pb-10">
                  <div className="flex items-end justify-between gap-6">
                    <div className="max-w-lg">
                      {/* Index + industry */}
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className="font-mono text-xs tracking-widest uppercase"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {project.index}
                        </span>
                        <span
                          className="font-mono text-xs tracking-widest uppercase"
                          style={{ color: project.accent }}
                        >
                          {project.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                        style={{ color: "#fff" }}
                      >
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p
                        className="mt-3 max-w-md font-sans text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-3 py-1 font-mono text-xs tracking-wide"
                            style={{
                              background: `color-mix(in srgb, ${project.accent} 15%, transparent)`,
                              color: project.accent,
                              border: `1px solid color-mix(in srgb, ${project.accent} 25%, transparent)`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View project arrow */}
                    <div
                      className="flex shrink-0 h-9 w-9 items-center justify-center rounded-full border transition-colors duration-500 md:h-12 md:w-12"
                      style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <path
                          d="M2 14L14 2M14 2H6M14 2V10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        {/* Spacer so last card unsticks properly */}
        <div style={{ height: "40vh" }} />
      </div>
    </section>
  );
}
