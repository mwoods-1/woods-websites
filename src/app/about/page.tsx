import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Meet the Team Behind Woods Websites",
  description:
    "Meet Sean and Mark Woods — two Sydney-based brothers helping small businesses grow with high-converting websites, booking systems, and smart automation.",
  openGraph: {
    title: "About Us | Woods Websites",
    description:
      "Two brothers from Sydney helping businesses get more customers through better websites.",
  },
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
