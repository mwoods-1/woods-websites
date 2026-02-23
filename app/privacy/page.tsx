import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Woods Websites collects, uses, and protects your personal information. We value your privacy and only collect what we need.",
};

export default function Privacy() {
  return (
    <div className="bg-zinc-950">
      <PageHero
        label="Legal"
        headline={<>PRIVACY<br />POLICY</>}
        description="Your privacy matters. Here's how we handle your information."
      />

      {/* Policy Content */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="prose-width space-y-16">
            <p className="text-zinc-500 text-sm uppercase tracking-wider">
              Last updated: February 2026
            </p>

            {/* Information We Collect */}
            <div className="space-y-6">
              <h2
                className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
              >
                Information We Collect
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We only collect information that you voluntarily provide through
                our contact form. This includes:
              </p>
              <ul className="space-y-3 text-zinc-400 text-lg leading-relaxed pl-6">
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Your name
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Email address
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Phone number (if provided)
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Company name (if provided)
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Project details and message content
                </li>
              </ul>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We do not use cookies, tracking pixels, or any client-side
                storage mechanisms on this website.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-6">
              <h2
                className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
              >
                How We Use Your Information
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                The information you submit through our contact form is used
                solely to respond to your inquiry. We may use your contact
                details to follow up on your project request, provide a quote,
                or answer questions about our services.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="space-y-6">
              <h2
                className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
              >
                Third-Party Services
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We use the following third-party services to operate this
                website:
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-amber-500/30 pl-6">
                  <h3
                    className="font-display text-lg font-bold text-white mb-2"
                  >
                    FormSubmit.co
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Our contact form submissions are delivered via FormSubmit.co.
                    When you submit the form, your data is processed by their
                    servers to deliver the message to us. You can review their
                    privacy practices at formsubmit.co.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500/30 pl-6">
                  <h3
                    className="font-display text-lg font-bold text-white mb-2"
                  >
                    Cloudflare
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    This website is hosted on Cloudflare Pages and uses
                    Cloudflare Web Analytics. Cloudflare Web Analytics is a
                    privacy-first analytics service that does not use cookies or
                    track individual visitors. It collects aggregated,
                    non-personally-identifiable data such as page views and
                    referrer information.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="space-y-6">
              <h2
                className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
              >
                Data Retention
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Contact form submissions are retained in our email inbox for as
                long as necessary to respond to your inquiry and maintain a
                record of our communication. We do not maintain a separate
                database of form submissions.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-6">
              <h2
                className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
              >
                Your Rights
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-3 text-zinc-400 text-lg leading-relaxed pl-6">
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Request access to any personal data we hold about you
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Request correction of inaccurate data
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Request deletion of your data from our records
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Withdraw consent for us to contact you
                </li>
              </ul>
              <p className="text-zinc-400 text-lg leading-relaxed">
                To exercise any of these rights, please contact us using the
                details below.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h2
                className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
              >
                Contact Us
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                If you have any questions about this privacy policy or how we
                handle your data, you can reach us at:
              </p>
              <div className="border-l-2 border-amber-500/30 pl-6 space-y-2">
                <p className="text-white text-lg">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:woodswebsites.com@gmail.com"
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    woodswebsites.com@gmail.com
                  </a>
                </p>
                <p className="text-white text-lg">
                  <strong>Website:</strong>{" "}
                  <Link
                    href="/contact"
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    woodswebsites.com/contact
                  </Link>
                </p>
              </div>
            </div>

            {/* Changes */}
            <div className="space-y-6">
              <h2
                className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
              >
                Changes to This Policy
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We may update this privacy policy from time to time. Any changes
                will be reflected on this page with an updated revision date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
