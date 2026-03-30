import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceSubContent from "../ServiceSubContent";

export const metadata: Metadata = {
  title: "Design & Development",
  description:
    "Custom websites built from the ground up — designed around your brand and engineered to convert. Mobile-first, performance-focused, tailored to your needs.",
};

export default function DesignDevPage() {
  return (
    <main>
      <PageHero
        eyebrow="Design & Dev"
        heading={
          <>
            Built to <span style={{ color: "var(--accent)" }}>convert</span>
          </>
        }
        subtitle="Custom websites from the ground up — designed around your brand identity and engineered to turn visitors into customers."
      />
      <ServiceSubContent
        number="01"
        intro="No templates. No page builders. Every site we build is custom-coded to perform, look great on every device, and represent your business exactly as it should be."
        features={[
          {
            title: "Custom Design",
            description:
              "Every layout, colour, and interaction is designed specifically for you. We start with your brand, your goals, and your audience — and build from there.",
          },
          {
            title: "Mobile-First Development",
            description:
              "Your customers are on their phones. We build mobile-first as standard, then scale up — so the experience is seamless on every screen size.",
          },
          {
            title: "CMS Integration",
            description:
              "Want to update your own content? We integrate easy-to-use CMS platforms so you're in control, without needing a developer every time.",
          },
          {
            title: "Landing Pages",
            description:
              "High-converting landing pages built around a single goal — whether that's lead capture, bookings, or sales. Every element earns its place.",
          },
          {
            title: "E-Commerce",
            description:
              "Online stores that make buying effortless. From product pages to checkout, we build commerce experiences that convert and scale.",
          },
        ]}
        closing="Whether you need a simple brochure site or a complex multi-page platform, we bring the same attention to detail and commitment to performance to every project."
      />
      <CTASection />
    </main>
  );
}
