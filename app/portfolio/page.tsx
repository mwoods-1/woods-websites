import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "../components/CaseStudyCard";
import CTASection from "../components/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/PageHero";

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
      <PageHero
        label="Our Work"
        headline={<>PORTFOLIO</>}
        description="Real results for real businesses. From complete redesigns to brand new builds, every project is a partnership."
      />

      {/* Portfolio Grid */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index, arr) => {
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
        </div>
      </section>

      <CTASection
        label="Start Your Project"
        headline={<>READY TO<br />JOIN THEM?</>}
        subtitle="Let's discuss how we can transform your online presence."
        buttonText="Get Your Free Consultation"
      />
    </div>
  );
}
