import Link from "next/link";

export const metadata = {
  title: "Services - Woods Websites",
  description: "Professional web design, development, and optimization services. From custom builds to platform integrations.",
};

export default function Services() {
  const services = [
    {
      title: "Custom Website Design",
      description:
        "We create beautiful, unique websites tailored to your brand and business goals. No templates, no shortcuts—just thoughtful design that reflects who you are.",
      features: [
        "Custom visual design",
        "Brand-aligned aesthetics",
        "User experience optimization",
        "Responsive across all devices",
        "Modern, clean code",
      ],
      icon: "🎨",
    },
    {
      title: "Website Redesigns",
      description:
        "Breathe new life into your outdated website. We modernize your design, improve performance, and enhance user experience while preserving what works.",
      features: [
        "Complete visual overhaul",
        "Improved navigation & UX",
        "Performance optimization",
        "SEO improvements",
        "Content migration",
      ],
      icon: "✨",
    },
    {
      title: "Platform Integrations",
      description:
        "Connect your website with the tools you use. From booking systems to payment processors, we build seamless integrations that work flawlessly.",
      features: [
        "Cloudbeds & booking systems",
        "Payment gateway integration",
        "CRM & email marketing",
        "Custom API development",
        "Third-party service connections",
      ],
      icon: "🔗",
    },
    {
      title: "Performance Optimization",
      description:
        "Speed matters. We optimize your site to load faster, rank better, and convert more visitors into customers. Every millisecond counts.",
      features: [
        "Page load time reduction",
        "Image & asset optimization",
        "Code minification",
        "CDN implementation",
        "Core Web Vitals improvements",
      ],
      icon: "⚡",
    },
    {
      title: "SEO & Analytics",
      description:
        "Get found online. We implement SEO best practices and set up analytics so you can understand your traffic and make data-driven decisions.",
      features: [
        "On-page SEO optimization",
        "Meta tags & structured data",
        "Google Analytics setup",
        "Performance tracking",
        "Conversion optimization",
      ],
      icon: "📈",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "We're here for the long haul. From content updates to technical fixes, we provide ongoing support to keep your site running smoothly.",
      features: [
        "Regular updates & patches",
        "Content changes",
        "Bug fixes & troubleshooting",
        "Performance monitoring",
        "Security updates",
      ],
      icon: "🛟",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Comprehensive web design and development services tailored to your needs.
            From initial concept to ongoing support, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-8 border border-slate-100"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h2
                className="text-3xl font-bold text-navy-900 mb-4"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {service.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h3 className="font-bold text-navy-900 mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-slate-600">
                      <span className="text-orange-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              How We Work
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our proven process ensures smooth collaboration and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and audience to create the perfect solution.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We craft a custom design that reflects your brand and delights your visitors.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your site with clean code, optimized performance, and attention to detail.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We launch your site and provide ongoing support to ensure continued success.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-6xl font-bold text-orange-600 mb-4 opacity-20"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-bold text-navy-900 mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Modern, reliable tools for fast, scalable websites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Next.js", description: "React framework" },
              { name: "Tailwind CSS", description: "Utility-first CSS" },
              { name: "TypeScript", description: "Type-safe JavaScript" },
              { name: "Cloudflare", description: "CDN & hosting" },
              { name: "Vercel", description: "Deployment platform" },
              { name: "Git", description: "Version control" },
              { name: "Node.js", description: "Backend runtime" },
              { name: "APIs", description: "Custom integrations" },
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg border border-slate-200 hover:border-orange-400 transition-colors"
              >
                <h3 className="font-bold text-navy-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-600">{tech.description}</p>
              </div>
            ))}
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
            Let's Build Something Great
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Ready to get started? Schedule a free consultation to discuss your project.
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
