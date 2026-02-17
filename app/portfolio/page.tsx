import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "../components/CaseStudyCard";

const projects = [
  {
    image: "/images/aviation-card.jpg",
    alt: "Aviation Expeditions homepage featuring a mountain landscape hero and flightseeing tour booking options",
    title: "Aviation Expeditions",
    description:
      "Complete website transformation for an Alaskan flightseeing tour company. Modernized the brand, improved user experience, and optimized for conversions.",
    tags: ["Redesign", "Performance", "SEO", "Next.js"],
    liveUrl: "https://aviation-expeditions.com",
  },
  {
    image: "/images/svens-card.jpg",
    alt: "Sven's Basecamp Hostel homepage with vibrant hostel photography and Cloudbeds booking integration",
    title: "Sven's Basecamp Hostel",
    description:
      "Modern redesign with seamless Cloudbeds booking integration. Transformed an outdated site into a vibrant, mobile-friendly experience.",
    tags: ["Redesign", "Integration", "Cloudbeds", "Responsive"],
    liveUrl: "https://svensbasecamphostel.com",
  },
  {
    image: "/images/ovens-card.jpg",
    alt: "Ovens Soccer homepage with bold sports branding and team information layout",
    title: "Ovens Soccer",
    description:
      "Brand new website built from scratch for a sports organization. Clean, modern design with easy content management and mobile-first approach.",
    tags: ["New Build", "Custom", "Mobile-First"],
    liveUrl: "https://ovenssoccer.com",
  },
  {
    image: "/images/kingdom-card.jpg",
    alt: "Kingdom Property Care homepage showcasing property maintenance services with a clean professional layout",
    title: "Kingdom Property Care",
    description:
      "Professional website for a property maintenance company. Clean design showcasing services, service areas, and easy contact options.",
    tags: ["New Build", "Business", "Responsive"],
    liveUrl: "https://kingdompropertycare.com",
  },
];

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our web design portfolio featuring redesigns and custom builds for businesses across tourism, hospitality, and sports.",
};

export default function Portfolio() {
  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />

        <div className="max-w-[1800px] mx-auto px-12 lg:px-24">
          <div className="max-w-4xl">
            <p
              className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Our Work
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              PORT-
              <br />
              FOLIO
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              Real results for real businesses. From complete redesigns to brand
              new builds, every project is a partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <CaseStudyCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-amber-500 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] border-4 border-zinc-950/10 rotate-12 translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-[1800px] mx-auto px-12 lg:px-24">
          <div className="max-w-3xl">
            <p
              className="text-zinc-950/60 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Start Your Project
            </p>
            <h2
              className="text-5xl md:text-7xl font-black text-zinc-950 leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              READY TO
              <br />
              JOIN THEM?
            </h2>
            <p className="text-zinc-950/80 text-xl max-w-xl mb-10 italic border-l-4 border-zinc-950/30 pl-6">
              Let's discuss how we can transform your online presence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-950 text-amber-500 font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition-all"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Get Your Free Consultation
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
