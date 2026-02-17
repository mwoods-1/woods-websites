import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for Woods Websites web design and development services. Read about our service agreements, intellectual property, and liability.",
};

export default function Terms() {
  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />

        <div className="max-w-[1800px] mx-auto px-12 lg:px-24">
          <div className="max-w-4xl">
            <p
              className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Legal
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              TERMS OF
              <br />
              SERVICE
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              The terms and conditions that govern your use of this website and
              our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-12 lg:px-24">
          <div className="max-w-3xl space-y-16">
            <p className="text-zinc-500 text-sm uppercase tracking-wider">
              Last updated: February 2026
            </p>

            {/* Overview */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Overview
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                These terms of service govern your use of the Woods Websites
                website and any web design, development, or related services we
                provide. By using this website or engaging our services, you
                agree to these terms.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Our Services
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Woods Websites provides web design, development, and related
                digital services including but not limited to:
              </p>
              <ul className="space-y-3 text-zinc-400 text-lg leading-relaxed pl-6">
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Custom website design and development
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Website redesigns and modernization
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Third-party platform integrations
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Performance optimization and SEO
                </li>
                <li className="relative before:content-[''] before:absolute before:-left-6 before:top-3 before:w-2 before:h-px before:bg-amber-500">
                  Ongoing website maintenance and support
                </li>
              </ul>
              <p className="text-zinc-400 text-lg leading-relaxed">
                The specific scope, deliverables, timeline, and cost of any
                project will be agreed upon in writing before work begins.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Intellectual Property
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Upon full payment for a completed project, you own the custom
                design and content created specifically for your website. This
                includes custom layouts, graphics, and copy produced as part of
                your project.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We retain the right to use general techniques, tools, and
                knowledge gained during your project in future work. We also
                reserve the right to showcase completed projects in our portfolio
                unless you request otherwise in writing.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Third-party assets such as fonts, stock images, or open-source
                libraries remain subject to their respective licenses.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Limitation of Liability
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Woods Websites provides services on an &quot;as is&quot; basis.
                While we strive for excellence in every project, we cannot
                guarantee specific business outcomes such as increased traffic,
                sales, or search engine rankings.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                To the fullest extent permitted by law, Woods Websites shall not
                be liable for any indirect, incidental, or consequential damages
                arising from the use of our services or this website. Our total
                liability for any claim shall not exceed the amount paid for the
                specific service giving rise to the claim.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Disclaimers
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                This website and its content are provided for informational
                purposes. While we make every effort to keep information current
                and accurate, we do not warrant that the content is error-free
                or uninterrupted.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We are not responsible for the content, availability, or
                practices of third-party websites linked from this site,
                including client project sites featured in our portfolio.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Governing Law
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                These terms are governed by and construed in accordance with the
                laws of the United States. Any disputes arising from these terms
                or our services shall be resolved through good-faith negotiation
                first, and if necessary, through the appropriate legal channels.
              </p>
            </div>

            {/* Changes */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Changes to These Terms
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We may update these terms from time to time. Any changes will be
                reflected on this page with an updated revision date. Continued
                use of our website or services after changes are posted
                constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Contact Us
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                If you have any questions about these terms, please contact us:
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
          </div>
        </div>
      </section>
    </div>
  );
}
