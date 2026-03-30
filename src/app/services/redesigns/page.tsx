import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceSubContent from "../ServiceSubContent";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Website Redesigns",
  description:
    "Transform your outdated website into a modern, high-performance experience. Better UX, sharper visuals, and measurably improved results.",
};

export default function RedesignsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Redesigns"
        heading={
          <>
            Your site,{" "}
            <span style={{ color: "var(--accent)" }}>reimagined</span>
          </>
        }
        subtitle="Breathe new life into an outdated website. Sharper visuals, better UX, and the performance your business deserves — without losing what makes you, you."
      />
      <ServiceSubContent
        number="02"
        intro="An outdated site costs you customers every day. We modernise your web presence from the ground up — preserving what works, fixing what doesn't, and raising the bar on everything else."
        features={[
          {
            title: "UX Audit",
            description:
              "Before we redesign anything, we analyse how your current site performs. We identify friction points, drop-off areas, and missed opportunities so the new site fixes real problems.",
          },
          {
            title: "Visual Refresh",
            description:
              "Updated typography, colour systems, and layouts that feel modern and on-brand. We don't just make it look different — we make it look better and work harder.",
          },
          {
            title: "Content Migration",
            description:
              "Moving to a new site shouldn't mean losing your history. We migrate your existing content cleanly, preserving SEO value and ensuring nothing gets left behind.",
          },
          {
            title: "Speed Boost",
            description:
              "Old sites accumulate bloat. We rebuild for performance from the start — stripping out the dead weight and optimising for fast, reliable load times on every device.",
          },
        ]}
        closing="The end result is a site that looks and feels like it belongs to your business today — not five years ago. Faster, cleaner, and designed to keep pace with your growth."
      />

      {/* Before & After section */}
      <section
        className="border-t pb-24"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto max-w-5xl px-6 pt-16">
          <p
            className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            The Work
          </p>
          <h2
            className="mb-16 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Before &amp; after
          </h2>

          <div className="space-y-16">
            {/* Sven's Basecamp */}
            <div>
              <p
                className="mb-4 font-display text-lg font-bold tracking-tight"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Sven&apos;s Basecamp
              </p>
              <BeforeAfterSlider
                before="/images/svens-after.jpg"
                after="/images/svens-before.jpg"
                alt="Sven's Basecamp"
              />
            </div>

            {/* Aviation Expeditions */}
            <div>
              <p
                className="mb-4 font-display text-lg font-bold tracking-tight"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Aviation Expeditions
              </p>
              <BeforeAfterSlider
                before="/images/aviation-after.jpg"
                after="/images/aviation-before.jpg"
                alt="Aviation Expeditions"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
