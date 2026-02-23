import type { ReactNode } from "react";
import Link from "next/link";

const GRAIN_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

interface SecondaryButton {
  text: string;
  href: string;
}

interface CTASectionProps {
  label: string;
  headline: ReactNode;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  secondaryButton?: SecondaryButton;
  size?: "default" | "large";
}

export default function CTASection({
  label,
  headline,
  subtitle,
  buttonText,
  buttonHref = "/contact",
  secondaryButton,
  size = "default",
}: CTASectionProps) {
  const isLarge = size === "large";

  return (
    <section
      className={`relative ${isLarge ? "py-48" : "py-32"} bg-amber-500 overflow-hidden`}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />

      {/* Geometric accent */}
      <div
        className={`absolute bottom-0 right-0 ${
          isLarge ? "w-[600px] h-[600px]" : "w-[400px] h-[400px]"
        } border-4 border-zinc-950/10 rotate-12 translate-x-1/3 translate-y-1/3`}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
        <div className={isLarge ? "max-w-5xl" : "max-w-3xl"}>
          {isLarge ? (
            // Homepage layout: pulsing dot + flex wrapper + secondary button
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="w-2 h-2 bg-zinc-950 mt-6 animate-pulse" />
                <div>
                  <p className="font-display text-zinc-950/60 uppercase tracking-[0.3em] text-xs mb-8">
                    {label}
                  </p>
                  <h2 className="font-display text-4xl md:text-8xl lg:text-9xl font-black text-zinc-950 leading-[0.85] mb-12">
                    {headline}
                  </h2>
                  <p className="text-zinc-950/80 text-xl md:text-2xl max-w-2xl italic leading-relaxed mb-12 border-l-4 border-zinc-950/30 pl-4 md:pl-8">
                    {subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      href={buttonHref}
                      className="font-display group relative px-12 py-6 bg-zinc-950 text-amber-500 overflow-hidden font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition-all"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {buttonText}
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
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
                      </span>
                    </Link>
                    {secondaryButton && (
                      <Link
                        href={secondaryButton.href}
                        className="font-display px-12 py-6 border-4 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-amber-500 transition-all font-black text-sm uppercase tracking-wider"
                      >
                        {secondaryButton.text}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Subpage layout: clean flat structure
            <>
              <p className="font-display text-zinc-950/60 uppercase tracking-[0.3em] text-xs mb-6">
                {label}
              </p>
              <h2 className="font-display text-4xl md:text-7xl font-black text-zinc-950 leading-[0.9] mb-8">
                {headline}
              </h2>
              <p className="text-zinc-950/80 text-xl max-w-xl mb-10 italic border-l-4 border-zinc-950/30 pl-6">
                {subtitle}
              </p>
              <Link
                href={buttonHref}
                className="font-display inline-flex items-center gap-3 px-10 py-5 bg-zinc-950 text-amber-500 font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition-all"
              >
                {buttonText}
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
