import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";

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
      <PageHero
        label="What We Offer"
        headline={<>OUR<br />SERVICES</>}
        description="Comprehensive web design and development services tailored to your needs. From initial concept to ongoing support."
      />

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 border-l border-t border-zinc-800">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 md:p-10 lg:p-12 bg-zinc-950 hover:bg-zinc-900 transition-colors group border-r border-b border-zinc-800"
              >
                {index === 0 && (
                  <p className="font-display text-[9px] text-amber-500/70 tracking-[0.4em] uppercase mb-4">
                    Core Service
                  </p>
                )}
                <div
                  className="font-display text-xs text-amber-500/50 tracking-[0.3em] mb-5 group-hover:text-amber-500/80 transition-colors"
                >
                  {service.number}
                </div>
                <h2
                  className={`font-display ${index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'} font-black text-white mb-4 uppercase tracking-tight`}
                >
                  {service.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-zinc-800/60">
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-amber-500/20" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20">
            <p
              className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
            >
              Our Process
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9]"
            >
              HOW WE
              <br />
              WORK
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className="font-display text-8xl font-black text-amber-500/10 mb-6"
                >
                  {item.step}
                </div>
                <h3
                  className="font-display text-xl font-black text-white mb-4 uppercase tracking-tight"
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
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20 max-w-2xl">
            <p
              className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
            >
              Our Stack
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9] mb-6"
            >
              TECH WE
              <br />
              USE
            </h2>
            <p className="text-zinc-400 text-lg italic">
              Modern, reliable tools for fast, scalable websites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-colors group"
              >
                <h3
                  className="font-display font-bold text-white mb-1 group-hover:text-amber-500 transition-colors"
                >
                  {tech.name}
                </h3>
                <p className="text-sm text-zinc-500">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Get Started"
        headline={<>LET'S BUILD<br />SOMETHING<br />GREAT</>}
        subtitle="Ready to get started? Schedule a free consultation to discuss your project."
        buttonText="Get Your Free Consultation"
      />
    </div>
  );
}
