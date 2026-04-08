import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work | Web Design Portfolio",
  description:
    "See our portfolio of custom websites built for small businesses across tourism, hospitality, sports coaching, and property services. Real results for real businesses.",
  openGraph: {
    title: "Our Work | Woods Websites Portfolio",
    description:
      "Custom websites built for small businesses across tourism, hospitality, sports, and more.",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        heading={
          <>
            Our <span style={{ color: "var(--accent)" }}>Work</span>
          </>
        }
        subtitle="Custom websites built for businesses who care about quality. Every project is a partnership."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group"
            >
              <div
                className="relative aspect-video overflow-hidden"
                style={{ borderRadius: "16px", background: "#0a0a0a" }}
              >
                <Image
                  src={project.cardImage}
                  alt={`${project.name} — ${project.type} website by Woods Websites`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[10px] tracking-wide"
                      style={{
                        background: `color-mix(in srgb, ${project.accent} 15%, transparent)`,
                        color: project.accent,
                        border: `1px solid color-mix(in srgb, ${project.accent} 25%, transparent)`,
                      }}
                    >
                      {project.type}
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-wide"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {project.industry}
                    </span>
                  </div>
                  <h3
                    className="font-display text-lg font-bold tracking-tight"
                    style={{ color: "#fff" }}
                  >
                    {project.name}
                  </h3>
                </div>
              </div>
              <p
                className="mt-3 font-sans text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Testimonial />
      <CTASection />
    </main>
  );
}
