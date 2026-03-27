import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sean and Mark Woods, two brothers who build custom, high-performance websites for businesses that care about quality.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who We Are"
        heading={
          <>
            About <span style={{ color: "var(--accent)" }}>Us</span>
          </>
        }
        subtitle="Two brothers. High-performance websites. Tailored to your needs. Delivered with precision."
      />
      <AboutContent />
      <CTASection />
    </main>
  );
}
