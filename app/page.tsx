import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "./components/CaseStudyCard";
import CTASection from "./components/CTASection";
import ScrollReveal from "./components/ScrollReveal";

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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left column - Main headline */}
            <div className="lg:col-span-7 space-y-8 slide-up">
              <h1
                className="font-display text-[2.5rem] md:text-6xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight"
              >
                WEB DESIGN<br/>
                THAT<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 animate-shimmer">
                  WORKS
                </span>
              </h1>

              <div className="flex items-start gap-8 pt-4">
                <div className="w-px h-20 bg-gradient-to-b from-amber-500 to-transparent shrink-0" />
                <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                  Transforming digital presence through bold design and precision engineering
                </p>
              </div>
            </div>

            {/* Right column - CTA */}
            <div className="lg:col-span-5 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="border-t border-zinc-800 pt-8 space-y-4">
                <p className="font-display text-zinc-500 text-xs uppercase tracking-[0.2em]">
                  Ready to start?
                </p>
                <Link
                  href="/portfolio"
                  className="font-display group relative px-8 py-6 bg-amber-500 text-zinc-950 overflow-hidden font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all flex items-center justify-between"
                >
                  <span className="relative z-10">View Work</span>
                  <span className="relative z-10 text-lg leading-none group-hover:translate-x-1 transition-transform duration-200">→</span>
                  <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="font-display px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-zinc-950 transition-all font-bold text-sm uppercase tracking-wider flex items-center justify-between"
                >
                  <span>Start Project</span>
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator — hidden on mobile to avoid content collision */}
          <div className="hidden md:flex absolute bottom-8 left-8 items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-500 to-transparent animate-scroll" />
            <span className="font-display text-white text-xs uppercase tracking-widest rotate-90 origin-left">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* Stats Strip — supporting credentials below the fold */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-zinc-800">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "<2s", label: "Avg Load Time" },
                { number: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="py-10 px-6 md:px-8 text-center">
                  <div
                    className="font-display text-2xl md:text-3xl font-black text-white mb-1"
                  >
                    {stat.number}
                  </div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Portfolio - Card Grid */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent to-amber-500/30" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          {/* Section header */}
          <ScrollReveal>
            <div className="mb-24 max-w-4xl">
              <div className="flex items-start gap-8 mb-8">
                <div className="w-2 h-2 bg-amber-500 mt-4 animate-pulse" />
                <div>
                  <p className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6">
                    Selected Work
                  </p>
                  <h2
                    className="font-display text-5xl md:text-7xl font-black text-white leading-[0.9] mb-6"
                  >
                    FEATURED<br/>PROJECTS
                  </h2>
                  <p className="text-zinc-400 text-xl max-w-2xl italic leading-relaxed border-l-2 border-amber-500/30 pl-6">
                    Elevating digital experiences through strategic design and technical excellence
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Project cards grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {featuredProjects.map((project, index, arr) => {
              const isOrphan = arr.length % 2 !== 0 && index === arr.length - 1;
              return (
                <ScrollReveal
                  key={project.title}
                  delay={index * 120}
                  className={isOrphan ? "md:col-span-2" : ""}
                >
                  <CaseStudyCard
                    {...project}
                    priority={index === 0}
                    horizontal={isOrphan}
                  />
                </ScrollReveal>
              );
            })}
          </div>

          {/* View All CTA */}
          <ScrollReveal>
            <div className="mt-20 flex justify-center">
              <Link
                href="/portfolio"
                className="font-display group relative px-12 py-6 bg-transparent border-2 border-amber-500 text-amber-500 overflow-hidden font-bold text-sm uppercase tracking-wider hover:text-zinc-950 transition-colors"
              >
                <span className="relative z-10">View All Projects</span>
                <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services - Brutalist Grid */}
      <section className="py-32 bg-zinc-900 text-white relative">
        {/* Diagonal line accent */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-amber-500/20" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <ScrollReveal>
            <div className="mb-24 grid lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6">
                  Capabilities
                </p>
                <h2
                  className="font-display text-5xl md:text-7xl font-black text-white leading-[0.9]"
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
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-zinc-800">
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
                className="p-10 bg-zinc-900 hover:bg-zinc-800 transition-colors group border-r border-b border-zinc-800 relative overflow-hidden"
              >
                {/* Amber accent line slides in on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500/60 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <div className="font-display text-xs text-amber-500/50 tracking-[0.3em] mb-5 group-hover:text-amber-500/80 transition-colors">
                  {service.number}
                </div>
                <h3
                  className="font-display text-xl font-bold mb-4 text-white uppercase tracking-wider"
                >
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-20 flex justify-center">
              <Link
                href="/services"
                className="font-display group relative px-12 py-6 bg-transparent border-2 border-amber-500 text-amber-500 overflow-hidden font-bold text-sm uppercase tracking-wider hover:text-zinc-950 transition-colors"
              >
                <span className="relative z-10">All Services</span>
                <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        label="Start Your Project"
        headline={<>READY TO<br/>TRANSFORM<br/>YOUR SITE?</>}
        subtitle="Let's talk about your project and how we can help you achieve your goals."
        buttonText="Get Started"
        secondaryButton={{ text: "View Portfolio", href: "/portfolio" }}
        size="large"
      />
    </div>
  );
}
