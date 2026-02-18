import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Two brothers building exceptional websites. Learn about our approach to web design, our values, and why businesses trust Woods Websites.",
};

export default function About() {
  const values = [
    {
      title: "Quality Over Quantity",
      description:
        "We take on fewer projects so we can give each one the attention it deserves. Your website isn't a line item—it's a partnership.",
    },
    {
      title: "Clear Communication",
      description:
        "No jargon, no surprises. We explain things in plain language and keep you in the loop every step of the way.",
    },
    {
      title: "Built to Last",
      description:
        "We use modern, proven technologies and write clean code that's easy to maintain. Your site will stay fast and secure for years.",
    },
    {
      title: "Performance First",
      description:
        "Speed matters. Every millisecond counts. We optimize relentlessly so your visitors have a smooth, fast experience.",
    },
    {
      title: "Mobile Matters",
      description:
        "Most of your visitors are on mobile. We design mobile-first to ensure a great experience on every device.",
    },
    {
      title: "Always Improving",
      description:
        "The web moves fast. We stay current with best practices and continually refine our craft to deliver better results.",
    },
  ];

  const skills = [
    "UI/UX Design",
    "Responsive Layouts",
    "Next.js Development",
    "React Components",
    "Tailwind CSS",
    "TypeScript",
    "API Integrations",
    "Performance Optimization",
    "SEO Best Practices",
    "Cloudflare Workers",
    "Git & Version Control",
    "Booking Systems",
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
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
              Who We Are
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              ABOUT
              <br />
              US
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              Two brothers with a passion for creating beautiful, functional
              websites that help businesses succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <p
                className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Our Story
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-white leading-[0.9]"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                WHY WE
                <br />
                DO THIS
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8 text-zinc-400 text-lg leading-relaxed">
              <p>
                Woods Websites was born from a simple idea: businesses deserve
                websites that actually work for them—not just generic templates
                that look like everyone else's.
              </p>
              <p>
                As brothers, we've combined our complementary skills to build a
                web design and development practice focused on quality,
                performance, and real results. One of us specializes in
                redesigns and optimizations, transforming outdated sites into
                modern, high-performing experiences. The other focuses on
                building beautiful new sites from scratch with clean,
                maintainable code.
              </p>
              <div className="w-12 h-px bg-amber-500/40" />
              <p>
                Together, we handle everything from initial design to complex
                platform integrations, deployment, and ongoing support. We've
                worked with businesses across industries—from hospitality and
                tourism to sports organizations—and we love the challenge of
                solving unique problems for each client.
              </p>
              <p className="border-l-4 border-amber-500/50 pl-6 italic text-zinc-300">
                What sets us apart? We genuinely care about your success. Your
                website isn't just a project to us—it's a partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-amber-500/20" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20 max-w-2xl">
            <p
              className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Our Values
            </p>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-[0.9]"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              WHAT WE
              <br />
              BELIEVE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative overflow-hidden p-8 lg:p-10 bg-zinc-900 hover:bg-zinc-950 transition-colors group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div
                  className="text-5xl font-black text-amber-500/20 mb-4 group-hover:text-amber-500/40 transition-colors"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-xl font-black text-white mb-4 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {value.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-12">
            <div className="lg:col-span-4">
              <p
                className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                Capabilities
              </p>
              <h2
                className="text-5xl md:text-6xl font-black text-white leading-[0.9]"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                WHAT WE'RE
                <br />
                GOOD AT
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-end">
              <p className="text-zinc-500 italic text-lg leading-relaxed">
                From design to deployment — {skills.length} capabilities that
                cover every stage of your project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm uppercase tracking-wider hover:border-amber-500/30 hover:text-amber-500 transition-colors cursor-default"
                style={{ fontFamily: "var(--font-unbounded)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 bg-zinc-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-800 divide-y divide-x divide-zinc-800 md:divide-y-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 lg:p-12 text-center group hover:bg-zinc-800/40 transition-colors"
              >
                <div className="w-8 h-px bg-amber-500/40 mx-auto mb-6 group-hover:bg-amber-500/80 transition-colors" />
                <div
                  className="text-5xl md:text-6xl font-black text-amber-500 mb-3"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-zinc-400 uppercase tracking-wider text-xs"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  {stat.label}
                </div>
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
              Work With Us
            </p>
            <h2
              className="text-5xl md:text-7xl font-black text-zinc-950 leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              LET'S WORK
              <br />
              TOGETHER
            </h2>
            <p className="text-zinc-950/80 text-xl max-w-xl mb-10 italic border-l-4 border-zinc-950/30 pl-6">
              Ready to start your project? We'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-950 text-amber-500 font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition-all"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Get In Touch
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
