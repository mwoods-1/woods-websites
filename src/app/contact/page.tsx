import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We'll get back to you within 24 hours with ideas and a plan.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        heading={
          <>
            Let&apos;s <span style={{ color: "var(--accent)" }}>Talk</span>
          </>
        }
        subtitle="Tell us about your project. We'll get back to you within 24 hours."
      />
      <ContactForm />
    </main>
  );
}
