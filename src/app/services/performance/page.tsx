import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceSubContent from "../ServiceSubContent";

export const metadata: Metadata = {
  title: "Performance & SEO",
  description:
    "Blazing-fast load times, Core Web Vitals optimised, and SEO that actually ranks. We make your site work as hard as you do.",
};

export default function PerformancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Performance"
        heading={
          <>
            Fast sites,{" "}
            <span style={{ color: "var(--accent)" }}>real results</span>
          </>
        }
        subtitle="Blazing-fast load times, Core Web Vitals in the green, and SEO foundations that help you rank and stay there."
      />
      <ServiceSubContent
        number="03"
        intro="Speed isn't a nice-to-have — it directly affects your search rankings, bounce rate, and conversions. We optimise every layer of your site so it performs at its best, always."
        features={[
          {
            title: "Core Web Vitals",
            description:
              "We audit and optimise for Google's Core Web Vitals — LCP, INP, and CLS — the metrics that directly influence your search rankings and user experience scores.",
          },
          {
            title: "SEO",
            description:
              "Technical SEO built into the foundation: clean URL structures, semantic HTML, schema markup, sitemap generation, and metadata that search engines understand.",
          },
          {
            title: "Analytics",
            description:
              "We set up the tracking you need to make informed decisions — GA4, conversion goals, event tracking, and dashboards that show you what's actually working.",
          },
          {
            title: "Accessibility",
            description:
              "WCAG-compliant sites that work for every user. Accessibility isn't just compliance — it improves SEO, widens your audience, and reflects well on your brand.",
          },
        ]}
        closing="Whether we're optimising an existing site or building performance in from day one, the goal is the same: a site that loads fast, ranks well, and keeps visitors engaged."
      />
      <CTASection />
    </main>
  );
}
