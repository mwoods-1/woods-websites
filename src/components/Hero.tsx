"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-24 pt-32">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 0.22 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="h-full w-full"
        >
          <video
            ref={videoRef}
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
        {/* Gradient overlay — heavier at top and bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.3) 40%, rgba(5,5,5,0.3) 60%, #050505 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Eyebrow */}
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          style={{ color: "var(--text)" }}
        >
          More customers.{" "}
          <br className="hidden sm:block" />
          <span style={{ color: "var(--accent)" }}>Better websites.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-lg font-sans text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          We help businesses grow with high-converting websites, built-in booking & payments, and easy self-management.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/work"
            className="group flex items-center gap-3 font-sans text-sm font-medium tracking-wide transition-colors duration-300"
            style={{ color: "var(--text)" }}
          >
            View our work
            {/* Expanding arrow — Deep.co.uk style */}
            <span className="relative inline-flex h-5 items-center overflow-hidden">
              <span
                className="inline-block transition-all duration-500 group-hover:translate-x-full"
                style={{ color: "var(--accent)" }}
              >
                →
              </span>
              <span
                className="absolute left-0 inline-block -translate-x-full transition-all duration-500 group-hover:translate-x-0"
                style={{ color: "var(--accent)" }}
              >
                →
              </span>
            </span>
          </Link>

          <Link
            href="/contact"
            className="rounded-full px-6 py-3 font-sans text-sm font-medium transition-all duration-300 hover:opacity-80"
            style={{ background: "var(--accent)", color: "#050505" }}
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
