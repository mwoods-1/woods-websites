import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Woods Websites Case Study`,
      description: project.description,
      images: [{ url: project.cardImage }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.indexOf(project);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <main>
      {/* Hero image */}
      <section className="relative pt-24">
        <div
          className="relative mx-4 overflow-hidden md:mx-8"
          style={{ height: "60vh", borderRadius: "24px", background: "#0a0a0a" }}
        >
          <Image
            src={project.content.heroImage}
            alt={`${project.name} — ${project.type} website by Woods Websites`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mx-auto max-w-5xl">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 font-mono text-xs tracking-wide"
                  style={{
                    background: `color-mix(in srgb, ${project.accent} 15%, transparent)`,
                    color: project.accent,
                    border: `1px solid color-mix(in srgb, ${project.accent} 25%, transparent)`,
                  }}
                >
                  {project.type}
                </span>
                <span
                  className="font-mono text-xs tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {project.industry}
                </span>
              </div>
              <h1
                className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                style={{ color: "#fff" }}
              >
                {project.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Metadata bar */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <div
          className="flex flex-wrap items-center gap-6 border-b pb-8"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <Link
            href="/work"
            className="font-sans text-sm transition-colors duration-300 hover:text-white"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            ← Back to Work
          </Link>
          <div className="ml-auto">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300 hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Visit live site
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M2 14L14 2M14 2H6M14 2V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              The Challenge
            </p>
          </div>
          <p
            className="font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {project.content.challenge}
          </p>
        </div>

        <div
          className="my-16 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        />

        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Our Approach
            </p>
          </div>
          <p
            className="font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {project.content.approach}
          </p>
        </div>

        <div
          className="my-16 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        />

        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              The Result
            </p>
          </div>
          <p
            className="font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {project.content.result}
          </p>
        </div>

        {/* Testimonial (if available) */}
        {project.content.testimonial && (
          <>
            <div
              className="my-16 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            />
            <div className="mx-auto max-w-2xl text-center">
              <span
                className="mb-4 block font-display text-5xl font-bold leading-none"
                style={{ color: "var(--accent)", opacity: 0.25 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote
                className="font-sans text-lg leading-relaxed italic md:text-xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {project.content.testimonial.quote}
              </blockquote>
              <p
                className="mt-6 font-display text-sm font-bold tracking-wide"
                style={{ color: "var(--accent)" }}
              >
                {project.content.testimonial.author}
              </p>
              <p
                className="mt-1 font-sans text-xs"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {project.content.testimonial.role}
              </p>
            </div>
          </>
        )}
      </section>

      {/* Previous / Next navigation */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto grid max-w-5xl md:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col gap-2 border-b p-8 transition-colors duration-300 hover:bg-white/[0.02] md:border-b-0 md:border-r md:p-12"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <span
                className="font-mono text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ← Previous
              </span>
              <span
                className="font-display text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-white"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {prev.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-end gap-2 p-8 text-right transition-colors duration-300 hover:bg-white/[0.02] md:p-12"
            >
              <span
                className="font-mono text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Next →
              </span>
              <span
                className="font-display text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-white"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {next.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
