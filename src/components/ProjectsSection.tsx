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
  href: `/portfolio/${p.slug}`,
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
            href="/portfolio"
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
                className="relative mx-4 overflow-hidden md:mx-8"
                style={{
                  height: "85vh",
                  borderRadius: "24px",
                  background: "#0a0a0a",
                }}
              >
                {/* Full-bleed background image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                  priority={i === 0}
                />

                {/* Dark overlay so text is readable */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
                  }}
                />

                {/* Content — bottom left */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
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
                      className="hidden shrink-0 h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 md:flex"
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
