import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "./components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Custom Web Design & Development | Woods Websites",
  description:
    "Bold web design and development by Woods Websites. We build fast, stunning, custom websites that transform your business's online presence.",
};

const featuredProjects = [
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
    tags: ["Redesign", "Integration", "Cloudbeds"],
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
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Woods Websites",
    url: "https://woodswebsites.com",
    logo: "https://woodswebsites.com/images/og-default.jpg",
    email: "woodswebsites.com@gmail.com",
    description:
      "Professional web design and development by two brothers who build fast, stunning websites tailored to your business.",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 2,
    },
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Next.js",
      "SEO",
      "Performance Optimization",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Woods Websites",
    url: "https://woodswebsites.com",
  },
];

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section - Editorial Brutalist */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 pt-24 pb-20">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        {/* Geometric accent elements */}
        <div className="absolute top-32 right-0 w-[600px] h-[600px] border border-amber-500/10 rotate-45 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-2 bg-gradient-to-r from-amber-500 to-transparent opacity-80 animate-pulse-subtle" />

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left column - Main headline */}
            <div className="lg:col-span-7 space-y-8 slide-up">
              <div className="space-y-4">
                <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light" style={{ fontFamily: "var(--font-unbounded)" }}>
                  Portfolio 2026
                </p>
                <h1
                  className="text-5xl md:text-8xl lg:text-[9rem] font-black text-white leading-[0.85] tracking-tight"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  WEB<br/>
                  DESIGN<br/>
                  THAT<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 animate-shimmer">
                    WORKS
                  </span>
                </h1>
              </div>

              <div className="flex items-start gap-8 pt-8">
                <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent" />
                <p className="text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed italic">
                  Transforming digital presence through bold design and precision engineering
                </p>
              </div>
            </div>

            {/* Right column - Stats and CTA */}
            <div className="lg:col-span-5 space-y-12 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-amber-500/20">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "100%", label: "Satisfaction" },
                  { number: "<2s", label: "Load Time" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="border border-zinc-800 p-6 hover:border-amber-500/30 transition-colors group">
                    <div
                      className="text-4xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/portfolio"
                  className="group relative px-8 py-6 bg-amber-500 text-zinc-950 overflow-hidden font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all flex items-center justify-between"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  <span className="relative z-10">View Work</span>
                  <span className="relative z-10 text-lg leading-none group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-zinc-950 transition-all font-bold text-sm uppercase tracking-wider flex items-center justify-between"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  <span>Start Project</span>
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-8 flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-500 to-transparent animate-scroll" />
            <span className="text-white text-xs uppercase tracking-widest rotate-90 origin-left" style={{ fontFamily: "var(--font-unbounded)" }}>
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* Featured Portfolio - Card Grid */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent to-amber-500/30" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          {/* Section header */}
          <div className="mb-24 max-w-4xl">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-2 h-2 bg-amber-500 mt-4 animate-pulse" />
              <div>
                <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
                  Selected Work
                </p>
                <h2
                  className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-6"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  FEATURED<br/>PROJECTS
                </h2>
                <p className="text-zinc-400 text-xl max-w-2xl italic leading-relaxed border-l-2 border-amber-500/30 pl-6">
                  Elevating digital experiences through strategic design and technical excellence
                </p>
              </div>
            </div>
          </div>

          {/* Project cards grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.title} {...project} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-20 flex justify-center">
            <Link
              href="/portfolio"
              className="group relative px-12 py-6 bg-transparent border-2 border-amber-500 text-amber-500 overflow-hidden font-bold text-sm uppercase tracking-wider hover:text-zinc-950 transition-colors"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services - Brutalist Grid */}
      <section className="py-32 bg-zinc-900 text-white relative">
        {/* Diagonal line accent */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-amber-500/20" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-24 grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
                Capabilities
              </p>
              <h2
                className="text-5xl md:text-7xl font-black text-white leading-[0.9]"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                WHAT<br/>WE DO
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-zinc-400 text-lg italic max-w-lg">
                Full-service web design and development tailored to your needs
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-amber-500/10">
            {[
              {
                number: "01",
                title: "Custom Website Design",
                description:
                  "Beautiful, modern websites crafted specifically for your brand and audience.",
              },
              {
                number: "02",
                title: "Website Redesigns",
                description:
                  "Transform your outdated site into a modern, high-performing digital experience.",
              },
              {
                number: "03",
                title: "Platform Integrations",
                description:
                  "Connect your website with Cloudflare, booking systems, payment processors, and more.",
              },
              {
                number: "04",
                title: "Performance Optimization",
                description:
                  "Speed up your site for better user experience and search rankings.",
              },
              {
                number: "05",
                title: "SEO & Analytics",
                description:
                  "Get found online and understand your visitors with proper SEO and tracking.",
              },
              {
                number: "06",
                title: "Ongoing Support",
                description:
                  "We're here to help maintain and grow your site long after launch.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-10 bg-zinc-900 hover:bg-zinc-950 transition-colors group border border-zinc-800 hover:border-amber-500/30"
              >
                <div className="text-6xl font-black text-amber-500/20 mb-6 group-hover:text-amber-500/40 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>
                  {service.number}
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-white uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/services"
              className="group relative px-12 py-6 bg-transparent border-2 border-amber-500 text-amber-500 overflow-hidden font-bold text-sm uppercase tracking-wider hover:text-zinc-950 transition-colors"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              <span className="relative z-10">All Services</span>
              <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Editorial */}
      <section className="relative py-48 bg-amber-500 overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        {/* Geometric accent */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border-4 border-zinc-950/10 rotate-12 translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="w-2 h-2 bg-zinc-950 mt-6 animate-pulse" />
                <div>
                  <p className="text-zinc-950/60 uppercase tracking-[0.3em] text-xs mb-8" style={{ fontFamily: "var(--font-unbounded)" }}>
                    Start Your Project
                  </p>
                  <h2
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-zinc-950 leading-[0.85] mb-12"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    READY TO<br/>
                    TRANSFORM<br/>
                    YOUR SITE?
                  </h2>
                  <p className="text-zinc-950/80 text-2xl max-w-2xl italic leading-relaxed mb-12 border-l-4 border-zinc-950/30 pl-8">
                    Let's talk about your project and how we can help you achieve your goals.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      href="/contact"
                      className="group relative px-12 py-6 bg-zinc-950 text-amber-500 overflow-hidden font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition-all"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Get Started
                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="px-12 py-6 border-4 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-amber-500 transition-all font-black text-sm uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
