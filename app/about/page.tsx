import Link from "next/link";

export const metadata = {
  title: "About Us - Woods Websites",
  description: "Meet the team behind Woods Websites. Brothers combining creativity and technical expertise to build exceptional web experiences.",
};

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            About Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Two brothers with a passion for creating beautiful, functional websites
            that help businesses succeed online.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2
            className="text-4xl font-bold text-navy-900 mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p>
              Woods Websites was born from a simple idea: businesses deserve websites
              that actually work for them—not just generic templates that look like
              everyone else's.
            </p>
            <p>
              As brothers, we've combined our complementary skills to build a web design
              and development practice focused on quality, performance, and real results.
              One of us specializes in redesigns and optimizations, transforming outdated
              sites into modern, high-performing experiences. The other focuses on building
              beautiful new sites from scratch with clean, maintainable code.
            </p>
            <p>
              Together, we handle everything from initial design to complex platform
              integrations, deployment, and ongoing support. We've worked with businesses
              across industries—from hospitality and tourism to sports organizations—and
              we love the challenge of solving unique problems for each client.
            </p>
            <p>
              What sets us apart? We genuinely care about your success. Your website isn't
              just a project to us—it's a partnership. We're available when you need us,
              we communicate clearly, and we don't disappear after launch. Whether you
              need a complete redesign, a brand new build, or custom integrations with
              platforms like Cloudbeds, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              What We Believe
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide every project we take on
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Over Quantity",
                description:
                  "We take on fewer projects so we can give each one the attention it deserves. Your website isn't a line item—it's a partnership.",
                icon: "⭐",
              },
              {
                title: "Clear Communication",
                description:
                  "No jargon, no surprises. We explain things in plain language and keep you in the loop every step of the way.",
                icon: "💬",
              },
              {
                title: "Built to Last",
                description:
                  "We use modern, proven technologies and write clean code that's easy to maintain. Your site will stay fast and secure for years.",
                icon: "🏗️",
              },
              {
                title: "Performance First",
                description:
                  "Speed matters. Every millisecond counts. We optimize relentlessly so your visitors have a smooth, fast experience.",
                icon: "⚡",
              },
              {
                title: "Mobile Matters",
                description:
                  "Most of your visitors are on mobile. We design mobile-first to ensure a great experience on every device.",
                icon: "📱",
              },
              {
                title: "Always Improving",
                description:
                  "The web moves fast. We stay current with best practices and continually refine our craft to deliver better results.",
                icon: "📈",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3
                  className="text-xl font-bold text-navy-900 mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              What We're Good At
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A combination of design skills, technical expertise, and business understanding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
              "Booking System Integrations",
              "Custom CMS Setup",
              "Analytics & Tracking",
              "Accessibility Standards",
              "Browser Compatibility",
              "Deployment & Hosting",
              "Ongoing Support",
            ].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-navy-50 rounded-lg text-center font-medium text-navy-800 hover:bg-orange-100 hover:text-orange-900 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "3+ Years", label: "Combined Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-5xl font-bold text-orange-500 mb-2"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
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
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Ready to start your project? We'd love to hear from you.
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
