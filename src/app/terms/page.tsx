import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the Woods Websites website and services.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        heading={<>Terms of Service</>}
        subtitle="Last updated: March 2026"
      />

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <div className="space-y-12">
          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Agreement to Terms
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              By accessing and using this website (woodswebsites.com), you agree
              to be bound by these Terms of Service. If you do not agree with
              any part of these terms, please do not use the website.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Services
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Woods Websites provides web design, development, and related
              digital services. Specific project terms, deliverables, timelines,
              and pricing are agreed upon separately for each engagement through
              a project proposal or contract.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Intellectual Property
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              The content, design, and code of this website are the property of
              Woods Websites unless otherwise stated. For client projects,
              intellectual property ownership is defined in the individual
              project agreement. Generally, clients own the final deliverables
              upon full payment.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Limitation of Liability
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              This website is provided "as is" without warranties of any kind.
              Woods Websites shall not be liable for any direct, indirect,
              incidental, or consequential damages arising from the use of this
              website or our services, except as outlined in individual project
              agreements.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              External Links
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              This website may contain links to external sites. We are not
              responsible for the content or privacy practices of those sites.
              External links do not imply endorsement.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Changes to Terms
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              We reserve the right to update these terms at any time. Changes
              will be posted on this page with an updated revision date.
              Continued use of the website after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Contact
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:woodswebsites.com@gmail.com"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: "var(--accent)" }}
              >
                woodswebsites.com@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
