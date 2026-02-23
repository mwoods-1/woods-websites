import React from "react";

interface PageHeroProps {
  label: string;
  headline: React.ReactNode;
  description: React.ReactNode;
}

export default function PageHero({ label, headline, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-amber-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <p className="font-display text-amber-500 uppercase tracking-[0.3em] text-xs mb-6">
            {label}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
            {headline}
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
