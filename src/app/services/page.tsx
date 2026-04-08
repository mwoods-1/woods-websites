import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServicesList from "./ServicesListClient";

export const metadata: Metadata = {
  title: "Services | Web Design, Development & Integrations",
  description:
    "Custom web design, development, booking systems, payment integration, and CMS setup. Everything your small business needs to get more customers online.",
  openGraph: {
    title: "Our Services | Woods Websites",
    description:
      "Custom web design, development, booking systems, payment integration, and CMS setup for small businesses.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Do"
        heading={
          <>
            Our <span style={{ color: "var(--accent)" }}>Services</span>
          </>
        }
        subtitle="From first concept to ongoing support, everything your business needs to win online."
      />
      <ServicesList />
      <CTASection />
    </main>
  );
}
