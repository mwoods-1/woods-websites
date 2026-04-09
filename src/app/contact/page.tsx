import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Discovery Call",
  description:
    "Get in touch with Woods Websites. Book a free discovery call to discuss your business goals and get a plan before any build begins.",
  openGraph: {
    title: "Contact Us | Woods Websites",
    description:
      "Book a free discovery call to discuss your business goals and get a website plan.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm isHero />
      <ProcessTimeline />
    </main>
  );
}
