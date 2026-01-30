import Link from "next/link";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Image from "next/image";

export const metadata = {
  title: "Portfolio - Woods Websites",
  description:
    "Explore our web design and development portfolio showcasing redesigns and new builds for businesses.",
};

export default function Portfolio() {
  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />

        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            <p
              className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Our Work
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              PORT-
              <br />
              FOLIO
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              Real results for real businesses. From complete redesigns to brand
              new builds, every project is a partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="space-y-48">
            {/* Aviation Expeditions */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                <div className="space-y-6">
                  <span
                    className="inline-block px-4 py-2 border border-amber-500/30 text-amber-500 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Case Study 01
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-black text-white leading-tight"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Aviation
                    <br />
                    Expeditions
                  </h2>
                  <div className="w-24 h-px bg-amber-500" />
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Complete website transformation for an Alaskan flightseeing
                    tour company. Modernized the brand, improved user
                    experience, and optimized for conversions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3
                    className="text-sm uppercase tracking-wider text-zinc-500"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    What We Did
                  </h3>
                  <ul className="space-y-3 text-zinc-400">
                    {[
                      "Complete visual redesign with custom photography",
                      "Improved navigation and user flow",
                      "Performance optimization (50% faster)",
                      "SEO improvements with descriptive content",
                      "Mobile-responsive design",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-amber-500 mt-1">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Redesign", "Performance", "SEO", "Next.js"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider hover:border-amber-500/30 hover:text-amber-500 transition-colors"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="https://aviation-expeditions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-amber-500 hover:text-amber-400 font-bold text-sm uppercase tracking-wider transition-colors"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  Visit Live Site
                  <svg
                    className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 border border-amber-500/10" />
                <BeforeAfterSlider
                  beforeImage="/images/aviation-before.jpg"
                  afterImage="/images/aviation-after.jpg"
                />
              </div>
            </div>

            {/* Svens Hostel - Reversed */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 lg:order-1 relative">
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-amber-500/10" />
                <BeforeAfterSlider
                  beforeImage="/images/svens-before.jpg"
                  afterImage="/images/svens-after.jpg"
                />
              </div>

              <div className="lg:col-span-5 lg:order-2 space-y-8 lg:sticky lg:top-32">
                <div className="space-y-6">
                  <span
                    className="inline-block px-4 py-2 border border-amber-500/30 text-amber-500 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Case Study 02
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-black text-white leading-tight"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Sven's
                    <br />
                    Basecamp
                  </h2>
                  <div className="w-24 h-px bg-amber-500" />
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Modern redesign with seamless Cloudbeds booking integration.
                    Transformed an outdated site into a vibrant, mobile-friendly
                    experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3
                    className="text-sm uppercase tracking-wider text-zinc-500"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    What We Did
                  </h3>
                  <ul className="space-y-3 text-zinc-400">
                    {[
                      "Full website redesign with fresh branding",
                      "Custom Cloudbeds integration for bookings",
                      "Enhanced mobile experience (70% of traffic)",
                      "Streamlined customer journey",
                      "Improved accessibility and performance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-amber-500 mt-1">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Redesign", "Integration", "Cloudbeds", "Responsive"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider hover:border-amber-500/30 hover:text-amber-500 transition-colors"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="https://svensbasecamphostel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-amber-500 hover:text-amber-400 font-bold text-sm uppercase tracking-wider transition-colors"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  Visit Live Site
                  <svg
                    className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Ovens Soccer */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                <div className="space-y-6">
                  <span
                    className="inline-block px-4 py-2 border border-amber-500/30 text-amber-500 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Case Study 03
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-black text-white leading-tight"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Ovens
                    <br />
                    Soccer
                  </h2>
                  <div className="w-24 h-px bg-amber-500" />
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Brand new website built from scratch for a sports
                    organization. Clean, modern design with easy content
                    management and mobile-first approach.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3
                    className="text-sm uppercase tracking-wider text-zinc-500"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    What We Did
                  </h3>
                  <ul className="space-y-3 text-zinc-400">
                    {[
                      "Custom website design from scratch",
                      "Mobile-first responsive layout",
                      "Easy content management system",
                      "Fast load times on all devices",
                      "SEO-friendly structure",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-amber-500 mt-1">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["New Build", "Custom", "Mobile-First"].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider hover:border-amber-500/30 hover:text-amber-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 border border-amber-500/10" />
                <div className="relative aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p
                    className="text-zinc-600 font-bold text-sm uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
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

        <div className="relative z-10 max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <p
              className="text-zinc-950/60 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Start Your Project
            </p>
            <h2
              className="text-5xl md:text-7xl font-black text-zinc-950 leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              READY TO
              <br />
              JOIN THEM?
            </h2>
            <p className="text-zinc-950/80 text-xl max-w-xl mb-10 italic border-l-4 border-zinc-950/30 pl-6">
              Let's discuss how we can transform your online presence.
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
