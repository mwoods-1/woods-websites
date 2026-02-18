"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/woodswebsites.com@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            company: formData.company || "Not provided",
            "Project Type": formData.projectType,
            "Estimated Budget": formData.budget || "Not specified",
            "Preferred Timeline": formData.timeline || "Not specified",
            message: formData.message,
            _subject: "New inquiry from Woods Websites",
            _honey: "",
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error("Form submission unsuccessful");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: "Email Us",
      value: "woodswebsites.com@gmail.com",
    },
    {
      label: "Response Time",
      value: "Within 24 hours",
    },
    {
      label: "Free Consultation",
      value: "No obligation, honest advice",
    },
  ];

  const process = [
    "We'll review your inquiry and respond within 24 hours",
    "Schedule a call to discuss your project in detail",
    "Receive a proposal with timeline and pricing",
    "Get started building your amazing website",
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
              Get In Touch
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              LET'S
              <br />
              TALK
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              Ready to start your project? Fill out the form and we'll get back
              to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2
                  className="text-3xl font-black text-white mb-6 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  Get Started
                  <br />
                  Today
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Whether you need a complete redesign, a brand new website, or
                  custom integrations, we're here to help. Let's discuss your
                  project and explore how we can bring your vision to life.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-amber-500/30 pl-6 hover:border-amber-500/60 transition-colors group"
                  >
                    <p
                      className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-1"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-white text-lg font-medium group-hover:text-amber-500/90 transition-colors">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative p-6 bg-zinc-900 border border-zinc-800 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/80 to-amber-500/10" />
                <h3
                  className="font-bold text-white mb-6 text-sm uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  What Happens Next?
                </h3>
                <ol className="space-y-5">
                  {process.map((step, index) => (
                    <li key={index} className="flex gap-4 text-zinc-400">
                      <span
                        className="text-amber-500 font-bold flex-shrink-0"
                        style={{ fontFamily: "var(--font-unbounded)" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-8 lg:p-10 bg-zinc-900 border border-zinc-800"
              >
                <div className="mb-8 pb-6 border-b border-zinc-800">
                  <p
                    className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-3"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Project Enquiry
                  </p>
                  <h3
                    className="text-2xl font-black text-white uppercase leading-tight"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Tell Us What
                    <br />
                    You Need
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="new-website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="integration">Platform Integration</option>
                    <option value="optimization">
                      Performance Optimization
                    </option>
                    <option value="support">Ongoing Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-20k">$10,000 - $20,000</option>
                      <option value="20k-plus">$20,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-unbounded)" }}
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your goals, challenges, and what you're looking for..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-400">
                    Thanks for reaching out! We'll get back to you within 24
                    hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400">
                    Oops! Something went wrong. Please try again or email us
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-5 bg-amber-500 text-zinc-950 font-black text-sm uppercase tracking-wider hover:bg-amber-400 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && (
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
