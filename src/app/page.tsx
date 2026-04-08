import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import OutcomesSection from "@/components/OutcomesSection";
import WorkshopSection from "@/components/WorkshopSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

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
