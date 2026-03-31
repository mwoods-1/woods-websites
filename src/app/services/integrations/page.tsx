import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceSubContent from "../ServiceSubContent";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Booking systems, payments, CRMs: we wire your site into the tools your business already relies on. Seamless, reliable, and built to save you time.",
};

export default function IntegrationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Integrations"
        heading={
          <>
            Your tools,{" "}
            <span style={{ color: "var(--accent)" }}>connected</span>
          </>
        }
        subtitle="We wire your website into the systems your business runs on, so everything works together, automatically."
      />
      <ServiceSubContent
        number="04"
        intro="Your website shouldn't exist in isolation. We connect it to the tools you rely on every day, so bookings, payments, and customer data flow seamlessly without manual effort."
        features={[
          {
            title: "Booking Systems",
            description:
              "Calendly, Acuity, custom booking flows: we embed appointment and reservation systems directly into your site so customers can book without leaving your page.",
          },
          {
            title: "Payments",
            description:
              "Stripe, PayPal, and other payment processors integrated cleanly into your site. Secure, fast checkouts that work on every device.",
          },
          {
            title: "CRM",
            description:
              "Connect your site to HubSpot, Salesforce, or your CRM of choice. Lead forms, contact data, and customer interactions all flow straight into your pipeline.",
          },
          {
            title: "API Connections",
            description:
              "Need to pull in live data, connect to a third-party service, or build a custom integration? We handle the API work so your site stays in sync with your business.",
          },
          {
            title: "Automation",
            description:
              "From email sequences triggered by form submissions to Zapier workflows that keep your tools in sync, we help you automate the repetitive stuff.",
          },
        ]}
        closing="The result is a website that doesn't just sit there looking good. It actively works with your business, saving you time and reducing the friction between you and your customers."
      />
      <CTASection />
    </main>
  );
}
