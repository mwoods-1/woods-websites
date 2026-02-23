import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";

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


  return (
    <div className="bg-zinc-950">
      <PageHero
        label="Who We Are"
        headline={<>ABOUT<br />US</>}
        description="Two brothers with a passion for creating beautiful, functional websites that help businesses succeed online."
      />

      {/* Our Story */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p
                className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              >
                Our Story
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-black text-white leading-[0.9]"
              >
                WHY WE
                <br />
                DO THIS
              </h2>
            </div>

            <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
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
              className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
            >
              Our Values
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9]"
            >
              WHAT WE
              <br />
              BELIEVE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-zinc-800">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative overflow-hidden p-8 lg:p-10 bg-zinc-900 hover:bg-zinc-950 transition-colors group border-r border-b border-zinc-800"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div
                  className="font-display text-5xl font-black text-amber-500/20 mb-4 group-hover:text-amber-500/40 transition-colors"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-display text-xl font-black text-white mb-4 uppercase tracking-tight"
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
                className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6"
              >
                Capabilities
              </p>
              <h2
                className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9]"
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

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="font-display px-6 py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm uppercase tracking-wider hover:border-amber-500/30 hover:text-amber-500 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Work With Us"
        headline={<>LET'S WORK<br />TOGETHER</>}
        subtitle="Ready to start your project? We'd love to hear from you."
        buttonText="Get In Touch"
      />
    </div>
  );
}
