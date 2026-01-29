import Link from "next/link";
import BeforeAfterSlider from "./components/BeforeAfterSlider";

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-orange-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-navy-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="animate-fadeInUp">
            <h1
              className="text-5xl md:text-7xl font-bold text-navy-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Web Design That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Actually Works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We create stunning, high-performance websites that help your business grow.
              From custom designs to complex integrations, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:shadow-xl font-semibold text-lg"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-navy-800 border-2 border-navy-800 rounded-lg hover:bg-navy-800 hover:text-white transition-all font-semibold text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "Fast", label: "Turnaround Time" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Transformations We're Proud Of
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses elevate their online presence with modern,
              high-performing websites.
            </p>
          </div>

          <div className="space-y-20">
            {/* Portfolio Item: Aviation Expeditions */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3
                  className="text-3xl font-bold text-navy-900 mb-4"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Aviation Expeditions
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Complete website redesign for an Alaskan flightseeing tour company.
                  Modernized the brand, improved user experience, and optimized for conversions.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Redesign
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Performance Optimization
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    SEO
                  </span>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                >
                  View Case Study
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <BeforeAfterSlider
                  beforeImage="/images/aviation-before.jpg"
                  afterImage="/images/aviation-after.jpg"
                />
              </div>
            </div>

            {/* Portfolio Item: Svens Hostel */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3
                  className="text-3xl font-bold text-navy-900 mb-4"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Sven's Basecamp Hostel
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Modern redesign with custom Cloudbeds integration for seamless bookings.
                  Enhanced mobile experience and streamlined the customer journey.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Redesign
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Custom Integration
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Booking System
                  </span>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                >
                  View Case Study
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <div className="md:order-1">
                <BeforeAfterSlider
                  beforeImage="/images/svens-before.jpg"
                  afterImage="/images/svens-after.jpg"
                />
              </div>
            </div>

            {/* Portfolio Item: Ovens Soccer */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3
                  className="text-3xl font-bold text-navy-900 mb-4"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Ovens Soccer
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Brand new website built from scratch for a sports organization.
                  Clean, modern design with easy content management and mobile-first approach.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-medium">
                    New Build
                  </span>
                  <span className="px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-medium">
                    Custom Design
                  </span>
                  <span className="px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-medium">
                    Mobile-First
                  </span>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                >
                  View Case Study
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-200 to-slate-300 flex items-center justify-center">
                  <p className="text-navy-600 font-medium">Screenshot Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              What We Do Best
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Full-service web design and development tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Website Design",
                description:
                  "Beautiful, modern websites crafted specifically for your brand and audience.",
                icon: "🎨",
              },
              {
                title: "Website Redesigns",
                description:
                  "Transform your outdated site into a modern, high-performing digital experience.",
                icon: "✨",
              },
              {
                title: "Platform Integrations",
                description:
                  "Connect your website with Cloudflare, booking systems, payment processors, and more.",
                icon: "🔗",
              },
              {
                title: "Performance Optimization",
                description:
                  "Speed up your site for better user experience and search rankings.",
                icon: "⚡",
              },
              {
                title: "SEO & Analytics",
                description:
                  "Get found online and understand your visitors with proper SEO and tracking.",
                icon: "📈",
              },
              {
                title: "Ongoing Support",
                description:
                  "We're here to help maintain and grow your site long after launch.",
                icon: "🛟",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-navy-800 rounded-xl hover:bg-navy-700 transition-colors"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:shadow-xl font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-navy-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's talk about your project and how we can help you achieve your goals.
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
