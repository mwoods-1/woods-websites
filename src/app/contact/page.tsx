import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "We start with a free call to discuss your goals and set up a plan before any build begins.",
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
        subtitle="We start with a free call to discuss your goals and set up a plan before any build begins."
      />
      <ContactForm />
    </main>
  );
}
