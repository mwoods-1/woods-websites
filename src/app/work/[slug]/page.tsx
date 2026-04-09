import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";
import type { ProjectScreenshot } from "@/data/projects";

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
      images: [{ url: project.content.heroImage }],
    },
  };
}

function ScreenshotImage({
  screenshot,
  priority = false,
  className = "",
}: {
  screenshot: ProjectScreenshot;
  priority?: boolean;
  className?: string;
}) {
  const isMobile = screenshot.type === "mobile";
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: "16px",
        background: "#111",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={isMobile ? 390 : 1440}
        height={isMobile ? 844 : 900}
        className="w-full h-auto"
        sizes={isMobile ? "200px" : "(max-width: 768px) 100vw, 80vw"}
        priority={priority}
        quality={90}
      />
    </div>
  );
}

const storyIcons = {
  challenge: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
  approach: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10M18 20V4M6 20v-4" />
    </svg>
  ),
  result: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </svg>
  ),
};

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

  const { screenshots } = project.content;
  const desktopScreenshots = screenshots.filter((s) => s.type === "desktop");
  const mobileScreenshots = screenshots.filter((s) => s.type === "mobile");

  const heroShot = desktopScreenshots[0];
  const galleryShots = desktopScreenshots.slice(1);

  const storyCards = [
    { key: "challenge", label: "The Challenge", number: "01", icon: storyIcons.challenge, text: project.content.challenge },
    { key: "approach", label: "Our Approach", number: "02", icon: storyIcons.approach, text: project.content.approach },
    { key: "result", label: "The Result", number: "03", icon: storyIcons.result, text: project.content.result },
  ];

  return (
    <main>
      {/* ─── Hero ─── */}
      <section
        className="relative"
        style={{ paddingTop: "clamp(7rem, 10vw, 10rem)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Back + meta */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="font-sans text-sm transition-colors duration-300 hover:text-white"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              ← Back to Work
            </Link>
            <span
              className="hidden sm:inline-block h-4 w-px"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
            <div className="flex items-center gap-3">
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
          </div>

          {/* Title */}
          <h1
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: "#fff" }}
          >
            {project.name}
          </h1>
          <p
            className="mt-4 max-w-2xl font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {project.description}
          </p>

          {/* Visit site + tags */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-all duration-300 hover:opacity-85"
              style={{ background: project.accent, color: "#050505" }}
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
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 font-mono text-xs tracking-wide"
                style={{
                  background: `color-mix(in srgb, ${project.accent} 10%, transparent)`,
                  color: project.accent,
                  border: `1px solid color-mix(in srgb, ${project.accent} 20%, transparent)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hero Screenshot ─── */}
      {heroShot && (
        <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
          <ScreenshotImage screenshot={heroShot} priority />
        </section>
      )}

      {/* ─── Story Cards (Challenge / Approach / Result) ─── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <p
          className="mb-10 font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: project.accent }}
        >
          The Story
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {storyCards.map((card) => (
            <div
              key={card.key}
              className="relative rounded-2xl p-6 md:p-8 transition-colors duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Number + icon */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: `color-mix(in srgb, ${project.accent} 12%, transparent)`,
                    color: project.accent,
                  }}
                >
                  {card.icon}
                </div>
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {card.number}
                </span>
              </div>

              {/* Label */}
              <h3
                className="mb-3 font-display text-lg font-bold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {card.label}
              </h3>

              {/* Text */}
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Desktop Screenshots Gallery ─── */}
      {galleryShots.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <p
            className="mb-10 font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: project.accent }}
          >
            Key Pages
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {galleryShots.map((shot) => (
              <div key={shot.src}>
                <ScreenshotImage screenshot={shot} />
                <p
                  className="mt-3 font-sans text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {shot.alt}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Mobile Showcase ─── */}
      {mobileScreenshots.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="mb-10">
            <p
              className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: project.accent }}
            >
              Built for Every Screen
            </p>
            <p
              className="max-w-md font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Every page is designed mobile-first, so it looks and works perfectly on any device.
            </p>
          </div>
          <div
            className="flex items-start justify-center gap-6 md:gap-14 lg:gap-20 rounded-2xl py-10 md:py-16 px-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {mobileScreenshots.map((shot) => (
              <div
                key={shot.src}
                className="flex-none"
                style={{ width: "clamp(100px, 20vw, 180px)" }}
              >
                {/* Phone frame — crop top status bar from screenshots */}
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: "24px",
                    border: "3px solid rgba(255,255,255,0.12)",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={390}
                    height={844}
                    className="w-full h-auto"
                    style={{ marginTop: "-3.5%" }}
                    sizes="180px"
                    quality={85}
                  />
                </div>
                <p
                  className="mt-3 text-center font-sans text-[10px] tracking-wide"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {shot.alt}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Testimonial ─── */}
      {project.content.testimonial && (
        <section
          className="mt-20 md:mt-28 border-t border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
            <span
              className="mb-6 block font-display text-6xl font-bold leading-none"
              style={{ color: project.accent, opacity: 0.3 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote
              className="font-sans text-lg leading-relaxed italic md:text-xl lg:text-2xl"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {project.content.testimonial.quote}
            </blockquote>
            <p
              className="mt-8 font-display text-sm font-bold tracking-wide"
              style={{ color: project.accent }}
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
        </section>
      )}

      {/* ─── Previous / Next ─── */}
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
