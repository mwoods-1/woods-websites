import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import OutcomesSection from "@/components/OutcomesSection";
import WorkshopSection from "@/components/WorkshopSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Woods Websites | Web Design & Development for Small Business",
  description:
    "We help small businesses get more customers with high-converting websites, booking systems, payments, and easy self-management. Based in Sydney, Australia.",
  openGraph: {
    title: "Woods Websites | Web Design & Development for Small Business",
    description:
      "High-converting websites with built-in booking, payments, and easy self-management. Helping businesses grow online.",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <OutcomesSection />
      <ProjectsSection />
      <WorkshopSection />
      <CTASection />
    </main>
  );
}
