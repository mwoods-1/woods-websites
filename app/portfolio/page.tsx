import Link from "next/link";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Image from "next/image";

export const metadata = {
  title: "Portfolio - Woods Websites",
  description: "Explore our web design and development portfolio showcasing redesigns and new builds for businesses.",
};

export default function Portfolio() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Real results for real businesses. From complete redesigns to brand new builds,
            we take pride in every project we deliver.
          </p>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-32">
          {/* Aviation Expeditions */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="sticky top-32">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
                Redesign
              </div>
              <h2
                className="text-4xl font-bold text-navy-900 mb-4"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Aviation Expeditions
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Complete website transformation for an Alaskan flightseeing tour company.
                The old site was dated and difficult to navigate. We created a modern,
                immersive experience that showcases their Arctic adventures.
              </p>

              <div className="mb-6">
                <h3 className="font-bold text-navy-900 mb-3">What We Did</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Complete visual redesign with custom photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Improved navigation and user flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Performance optimization (50% faster load times)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>SEO improvements with descriptive content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Mobile-responsive design</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  SEO
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Performance
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://aviation-expeditions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-semibold"
                >
                  Visit Site
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <BeforeAfterSlider
                beforeImage="/images/aviation-before.jpg"
                afterImage="/images/aviation-after.jpg"
              />
            </div>
          </div>

          {/* Svens Hostel */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="md:order-2 sticky top-32">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
                Redesign + Integration
              </div>
              <h2
                className="text-4xl font-bold text-navy-900 mb-4"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Sven's Basecamp Hostel
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Modern redesign with seamless Cloudbeds booking integration. We transformed
                an outdated site into a vibrant, mobile-friendly experience that captures
                the hostel's unique personality.
              </p>

              <div className="mb-6">
                <h3 className="font-bold text-navy-900 mb-3">What We Did</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Full website redesign with fresh branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Custom Cloudbeds integration for direct bookings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Enhanced mobile experience (70% of traffic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Streamlined customer journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Improved accessibility and performance</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Cloudbeds API
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Responsive Design
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Cloudflare
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://svensbasecamphostel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-semibold"
                >
                  Visit Site
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:order-1">
              <BeforeAfterSlider
                beforeImage="/images/svens-before.jpg"
                afterImage="/images/svens-after.jpg"
              />
            </div>
          </div>

          {/* Ovens Soccer */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="sticky top-32">
              <div className="inline-block px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-semibold mb-4">
                New Build
              </div>
              <h2
                className="text-4xl font-bold text-navy-900 mb-4"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Ovens Soccer
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Brand new website built from the ground up for a youth sports organization.
                Clean, modern design with intuitive navigation and easy content management
                for coaches and administrators.
              </p>

              <div className="mb-6">
                <h3 className="font-bold text-navy-900 mb-3">What We Did</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Custom website design from scratch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Mobile-first responsive layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Easy content management system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Fast load times optimized for all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>SEO-friendly structure</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Modern Design
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Mobile-First
                </span>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ovens-new.jpg"
                alt="Ovens Soccer Website"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-50 to-navy-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss how we can help transform your online presence.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:shadow-xl font-semibold text-lg"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
