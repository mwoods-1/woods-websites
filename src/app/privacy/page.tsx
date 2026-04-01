import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Woods Websites collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        heading={<>Privacy Policy</>}
        subtitle="Last updated: March 2026"
      />

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <div className="space-y-12">
          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Information We Collect
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              When you use our contact form, we collect your name, email address,
              and any information you provide in your message. We also collect
              standard web analytics data (page views, referral sources, device
              type) through privacy-friendly analytics that do not use cookies or
              track individuals across sites.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              How We Use Your Information
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              We use the information you provide through our contact form solely
              to respond to your enquiry and discuss potential projects. We do
              not sell, rent, or share your personal information with third
              parties for marketing purposes. Analytics data is used in aggregate
              to understand how visitors use our site and to improve the
              experience.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Third-Party Services
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Our contact form is processed by FormSubmit.co, which receives the
              data you submit and forwards it to our email. Our site is hosted on
              Vercel. These services have their own privacy policies governing
              how they handle data.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Cookies
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              This website does not use tracking cookies. We may use essential
              cookies required for the site to function properly (such as form
              submission handling), but we do not use cookies for advertising or
              cross-site tracking.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 font-display text-xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Data Retention
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Contact form submissions are retained in our email for as long as
              necessary to respond to your enquiry and maintain a record of our
              communications. You may request deletion of your data at any time
              by emailing us.
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
              If you have questions about this privacy policy or want to request
              deletion of your personal data, please contact us at{" "}
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
