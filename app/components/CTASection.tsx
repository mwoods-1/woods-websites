import type { ReactNode } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  headline: ReactNode;
  subtitle?: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CTASection({
  headline,
  subtitle,
  buttonText,
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-32 bg-[var(--bg-alt)]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--text)] leading-[0.9]">
              {headline}
            </h2>
            {subtitle && (
              <p className="text-[var(--text-muted)] text-xl mt-6 max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
            <Link
              href={buttonHref}
              className="mt-10 inline-flex px-10 py-5 bg-accent text-accent-fg font-display font-bold text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
