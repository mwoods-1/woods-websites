import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sean and Mark Woods — two brothers helping businesses get more customers through high-converting websites, booking systems, and smart automation.",
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
        subtitle="We help businesses grow with websites that actually deliver results."
      />
      <AboutContent />
      <CTASection />
    </main>
  );
}
