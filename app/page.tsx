import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "./components/CaseStudyCard";
import CTASection from "./components/CTASection";
import ScrollReveal from "./components/ScrollReveal";
import TextReveal from "./components/TextReveal";
import MagneticButton from "./components/MagneticButton";
import WorkshopSection from "./components/WorkshopSection";

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

const services = [
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
];

export default function Home() {
  return (
    <div className="bg-[var(--bg)]">
      {/* JSON-LD structured data — static constant, no user input */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg)] pt-24 pb-20">
        {/* Subtle teal grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,184,166,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 w-full flex flex-col items-center text-center">
          {/* Headline — two TextReveal lines */}
          <div className="mb-6">
            <TextReveal
              as="h1"
              className="font-display font-black text-[clamp(3rem,8vw,7rem)] text-white leading-[0.9] tracking-tight"
            >
              WOODS
            </TextReveal>
            <TextReveal
              as="h1"
              delay={0.15}
              className="font-display font-black text-[clamp(3rem,8vw,7rem)] text-accent leading-[0.9] tracking-tight"
            >
              WEBSITES
            </TextReveal>
          </div>

          {/* Tagline */}
          <p className="text-[var(--text-muted)] text-lg md:text-xl mb-12 max-w-md">
            Web design &amp; development by two brothers
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton
              as="a"
              href="/portfolio"
              className="bg-accent text-accent-fg font-display font-bold text-sm uppercase tracking-wider px-8 py-5 hover:bg-accent-hover transition-colors"
            >
              View Our Work
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/contact"
              className="border border-accent text-accent font-display font-bold text-sm uppercase tracking-wider px-8 py-5 hover:bg-accent hover:text-accent-fg transition-colors"
            >
              Get In Touch
            </MagneticButton>
          </div>
        </div>

        {/* Bouncing scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60" aria-hidden>
          <span className="text-[var(--text-muted)] text-xl animate-bounce block">
            ↓
          </span>
        </div>
      </section>

      {/* Section 2: Workshop */}
      <WorkshopSection />

      {/* Section 3: Featured Work */}
      <section className="py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <ScrollReveal>
            <div className="mb-24">
              <p className="text-accent font-display uppercase tracking-[0.3em] text-xs mb-6">
                SELECTED WORK
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-[var(--text)] leading-[0.9]">
                FEATURED PROJECTS
              </h2>
            </div>
          </ScrollReveal>

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

          <ScrollReveal>
            <div className="mt-20 flex justify-center">
              <Link
                href="/portfolio"
                className="text-accent hover:text-accent-hover font-display font-bold text-sm uppercase tracking-wider transition-colors"
              >
                View All Work →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Services Overview */}
      <section className="py-32 bg-[var(--bg-alt)] text-[var(--text)] relative">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <ScrollReveal>
            <div className="mb-24">
              <p className="text-accent font-display uppercase tracking-[0.3em] text-xs mb-6">
                WHAT WE DO
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-[var(--text)] leading-[0.9]">
                OUR SERVICES
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="p-10 bg-[var(--bg-alt)] hover:bg-[var(--bg)] transition-colors group border-r border-b border-border relative overflow-hidden"
                >
                  {/* Teal top-border accent slides in on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="font-display text-xs text-accent/50 tracking-[0.3em] mb-5 group-hover:text-accent/80 transition-colors">
                    {service.number}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-[var(--text)] uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: CTA */}
      <CTASection
        headline={<>LET&apos;S BUILD<br />SOMETHING.</>}
        subtitle="Ready to transform your online presence? Let's talk."
        buttonText="Start a Project"
      />
    </div>
  );
}
