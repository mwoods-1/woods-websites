import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web design, development, redesigns, integrations, and ongoing support. Everything your business needs to win online.",
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
        subtitle="From first concept to ongoing support — everything your business needs to win online."
      />
      <ServicesContent />
      <CTASection />
    </main>
  );
}
