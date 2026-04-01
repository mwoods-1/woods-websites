"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const projectTypes = [
  "New Website",
  "Website Redesign",
  "E-Commerce",
  "Integration",
  "Other",
];

const BUDGET_MIN = 500;
const BUDGET_MAX = 20000;
const BUDGET_STEP = 500;
const BUDGET_DEFAULT = 2500;

function formatBudget(val: number) {
  if (val >= BUDGET_MAX) return "$20,000+";
  return `$${val.toLocaleString()}`;
}

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 40%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState(BUDGET_DEFAULT);

  return (
    <section className="pt-16 md:pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <p
          className="mb-3 font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          Get In Touch
        </p>
        <h2
          className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          style={{ color: "var(--text)" }}
        >
          Let&apos;s{" "}
          <span style={{ color: "var(--accent)" }}>talk.</span>
        </h2>
      </div>
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="mx-auto max-w-7xl px-6 grid gap-10 md:gap-16 md:grid-cols-[1fr_2fr]"
      >
        {/* Sidebar */}
        <div>
          <p
            className="mb-6 font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Project Details
          </p>
          <p
            className="mb-8 font-sans text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Fill out the form and we'll get back to you within 24 hours. Or
            if you prefer, drop us an email directly.
          </p>
          <a
            href="mailto:woodswebsites@gmail.com"
            className="font-sans text-sm transition-colors duration-300 hover:text-white"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            woodswebsites@gmail.com
          </a>
        </div>

        {/* Form */}
        {submitted ? (
          <div
            className="flex flex-col items-center justify-center rounded-2xl border p-16 text-center"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="mb-4 font-display text-4xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              ✓
            </div>
            <h3
              className="mb-2 font-display text-xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Message sent
            </h3>
            <p
              className="font-sans text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We'll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form
            action="https://formsubmit.co/woodswebsites@gmail.com"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-6"
          >
            {/* Honeypot & config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_subject"
              value="New project enquiry from woodswebsites.com"
            />
            <input type="text" name="_honey" className="hidden" />

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-sans text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border px-4 py-3 font-sans text-sm outline-none transition-colors duration-300 focus:border-[var(--accent)]"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text)",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-sans text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border px-4 py-3 font-sans text-sm outline-none transition-colors duration-300 focus:border-[var(--accent)]"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text)",
                }}
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="mb-2 block font-sans text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Company / Business name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-lg border px-4 py-3 font-sans text-sm outline-none transition-colors duration-300 focus:border-[var(--accent)]"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text)",
                }}
              />
            </div>

            {/* Project type */}
            <div>
              <label
                htmlFor="project-type"
                className="mb-2 block font-sans text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Project type
              </label>
              <select
                id="project-type"
                name="project_type"
                className="w-full appearance-none rounded-lg border px-4 py-3 font-sans text-sm outline-none transition-colors duration-300 focus:border-[var(--accent)]"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <option value="" style={{ background: "#111" }}>
                  Select...
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} style={{ background: "#111" }}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget slider */}
            <div>
              <style>{`
                .budget-slider { -webkit-appearance: none; appearance: none; height: 4px; border-radius: 2px; outline: none; cursor: pointer; width: 100%; }
                .budget-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 28px; height: 28px; border-radius: 50%; background: var(--accent); cursor: pointer; box-shadow: 0 0 0 4px rgba(46,196,182,0.18), 0 2px 8px rgba(0,0,0,0.5); transition: box-shadow 0.2s; }
                .budget-slider::-webkit-slider-thumb:hover, .budget-slider::-webkit-slider-thumb:active { box-shadow: 0 0 0 8px rgba(46,196,182,0.22), 0 2px 8px rgba(0,0,0,0.5); }
                .budget-slider::-moz-range-thumb { width: 28px; height: 28px; border-radius: 50%; background: var(--accent); cursor: pointer; border: none; box-shadow: 0 0 0 4px rgba(46,196,182,0.18), 0 2px 8px rgba(0,0,0,0.5); }
              `}</style>
              <div className="mb-4 flex items-baseline justify-between">
                <label
                  className="font-sans text-xs tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Budget (Indicative)
                </label>
                <span
                  className="font-display text-2xl font-bold tabular-nums"
                  style={{ color: "var(--accent)" }}
                >
                  {formatBudget(budget)}
                </span>
              </div>
              <input
                type="range"
                className="budget-slider"
                min={BUDGET_MIN}
                max={BUDGET_MAX}
                step={BUDGET_STEP}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100}%, rgba(255,255,255,0.1) ${((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                }}
              />
              <div
                className="mt-2 flex justify-between font-mono text-[10px] tracking-wide"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                <span>$500</span>
                <span>$20,000+</span>
              </div>
              <input type="hidden" name="budget" value={formatBudget(budget)} />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-sans text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Tell us about your project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border px-4 py-3 font-sans text-sm leading-relaxed outline-none transition-colors duration-300 focus:border-[var(--accent)]"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text)",
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-4 inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-sm font-medium transition-all duration-300 hover:opacity-85"
              style={{ background: "var(--accent)", color: "#050505" }}
            >
              Send Message
              <span className="relative inline-flex h-4 items-center overflow-hidden">
                <span className="inline-block transition-all duration-500 group-hover:translate-x-full">
                  →
                </span>
                <span className="absolute left-0 -translate-x-full transition-all duration-500 group-hover:translate-x-0">
                  →
                </span>
              </span>
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
