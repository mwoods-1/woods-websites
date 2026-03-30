import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "We start with a free call to discuss your goals and set up a plan before any build begins.",
};

export default function ContactPage() {
  return (
    <main>
      <ProcessTimeline isHero />
      <ContactForm />
    </main>
  );
}
