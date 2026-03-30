"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ProcessTimeline from "@/components/ProcessTimeline";

interface Feature {
  title: string;
  description: string;
}

interface ServiceSubContentProps {
  number: string;
  intro: string;
  features: Feature[];
  closing: string;
}

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 40%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ServiceSubContent({ intro, features, closing }: ServiceSubContentProps) {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-24">

        {/* Intro */}
        <AnimatedSection>
          <p
            className="mb-16 font-sans text-lg leading-relaxed md:text-xl max-w-2xl"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {intro}
          </p>
        </AnimatedSection>

        {/* Features */}
        <div className="space-y-0">
          {features.map((feature) => (
            <AnimatedSection key={feature.title}>
              <div
                className="grid gap-6 border-t py-10 md:grid-cols-[220px_1fr]"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <h3
                  className="font-display text-lg font-bold tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed md:text-base"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing */}
        <AnimatedSection>
          <p
            className="mt-14 border-t pt-14 font-sans text-base leading-relaxed md:text-lg max-w-2xl"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            {closing}
          </p>
        </AnimatedSection>

      </section>
      <ProcessTimeline />
    </>
  );
}
