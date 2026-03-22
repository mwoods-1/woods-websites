"use client";

import React from "react";
import { motion } from "motion/react";

interface PageHeroProps {
  label: string;
  headline: React.ReactNode;
  description: React.ReactNode;
}

export default function PageHero({ label, headline, description }: PageHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(46,196,182,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(46,196,182,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <p
              className="text-accent uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              {label}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h1
              className="font-black leading-[0.9] text-[var(--text)] mb-8"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
              }}
            >
              {headline}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-[var(--text-muted)] text-xl max-w-2xl leading-relaxed italic border-l-2 border-accent/30 pl-6">
              {description}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
