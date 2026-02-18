import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, development, and optimization services. Custom builds, redesigns, platform integrations, and ongoing support.",
};

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Custom Website Design",
      description:
        "Beautiful, unique websites tailored to your brand and business goals. No templates, no shortcuts—just thoughtful design that reflects who you are.",
      features: [
        "Custom visual design",
        "Brand-aligned aesthetics",
        "User experience optimization",
        "Responsive across all devices",
        "Modern, clean code",
      ],
    },
    {
      number: "02",
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
    },
    {
      number: "03",
      title: "Platform Integrations",
      description:
        "Connect your website with the tools you use. From booking systems to payment processors, we build seamless integrations that work flawlessly.",
      features: [
        "Cloudbeds & booking systems",
        "Payment gateway integration",
        "CRM & email marketing",
        "Custom API development",
        "Third-party connections",
      ],
    },
    {
      number: "04",
      title: "Performance Optimization",
      description:
        "Speed matters. We optimize your site to load faster, rank better, and convert more visitors into customers. Every millisecond counts.",
      features: [
        "Page load time reduction",
        "Image & asset optimization",
        "Code minification",
        "CDN implementation",
        "Core Web Vitals",
      ],
    },
    {
      number: "05",
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
    },
    {
      number: "06",
      title: "Ongoing Support",
      description:
        "We're here for the long haul. From content updates to technical fixes, we provide ongoing support to keep your site running smoothly.",
      features: [
        "Regular updates & patches",
        "Content changes",
        "Bug fixes & troubleshooting",
        "Performance monitoring",
        "Security updates",
      ],
    },
  ];

  const process = [
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
      title: "Launch",
      description:
        "We launch your site and provide ongoing support to ensure continued success.",
    },
  ];

  const technologies = [
    { name: "Next.js", description: "React framework" },
    { name: "Tailwind CSS", description: "Utility-first CSS" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
    { name: "Cloudflare", description: "CDN & hosting" },
    { name: "Vercel", description: "Deployment platform" },
    { name: "Git", description: "Version control" },
    { name: "Node.js", description: "Backend runtime" },
    { name: "APIs", description: "Custom integrations" },
  ];

  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <p
              className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              What We Offer
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              OUR
              <br />
              SERVICES
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              Comprehensive web design and development services tailored to your
              needs. From initial concept to ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-px bg-zinc-800">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-10 lg:p-12 bg-zinc-950 hover:bg-zinc-900 transition-colors group"
              >
                <div
                  className="text-7xl font-black text-amber-500/20 mb-6 group-hover:text-amber-500/40 transition-colors"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {service.number}
                </div>
                <h2
                  className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {service.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors"
                    >
                      <span className="text-amber-500 mt-0.5">+</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-amber-500/20" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20">
            <p
              className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Our Process
            </p>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-[0.9]"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              HOW WE
              <br />
              WORK
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className="text-8xl font-black text-amber-500/10 mb-4"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-black text-white mb-4 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20 max-w-2xl">
            <p
              className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Our Stack
            </p>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-[0.9] mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              TECH WE
              <br />
              USE
            </h2>
            <p className="text-zinc-400 text-lg italic">
              Modern, reliable tools for fast, scalable websites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-colors group"
              >
                <h3
                  className="font-bold text-white mb-1 group-hover:text-amber-500 transition-colors"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {tech.name}
                </h3>
                <p className="text-sm text-zinc-500">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-amber-500 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] border-4 border-zinc-950/10 rotate-12 translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <p
              className="text-zinc-950/60 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Get Started
            </p>
            <h2
              className="text-5xl md:text-7xl font-black text-zinc-950 leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              GREAT
            </h2>
            <p className="text-zinc-950/80 text-xl max-w-xl mb-10 italic border-l-4 border-zinc-950/30 pl-6">
              Ready to get started? Schedule a free consultation to discuss your
              project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-950 text-amber-500 font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition-all"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Get Your Free Consultation
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
