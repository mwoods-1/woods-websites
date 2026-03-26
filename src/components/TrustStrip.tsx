"use client";

import Image from "next/image";

/*
 * ──────────────────────────────────────────────
 * CLIENT LOGOS — edit this array to add/remove
 * ──────────────────────────────────────────────
 *
 * To add a new client:
 *   1. Drop their logo into public/images/logos/
 *   2. Add an entry below with name, src, and height
 *
 * To use text instead of a logo:
 *   Set src to null (the name will render as styled text)
 */
const clients: { name: string; src: string | null; height: number }[] = [
  { name: "Aviation Expeditions", src: null, height: 0 },
  { name: "Kingdom Property Care", src: "/images/logos/kingdom.png", height: 40 },
  { name: "Sven's Basecamp Hostel", src: null, height: 0 },
  { name: "Ovens Soccer", src: "/images/logos/ovens.png", height: 34 },
];

function ClientItem({ client }: { client: (typeof clients)[number] }) {
  if (client.src) {
    return (
      <div
        className="relative shrink-0 opacity-50 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
        style={{ height: Math.round(client.height * 0.75) }}
      >
        <Image
          src={client.src}
          alt={client.name}
          height={client.height}
          width={client.height * 3}
          className="h-full w-auto object-contain"
          style={{ filter: "brightness(1.5)" }}
        />
      </div>
    );
  }

  return (
    <span
      className="shrink-0 whitespace-nowrap font-display text-sm font-semibold tracking-wide opacity-40 transition-opacity duration-300 hover:opacity-70 sm:text-base"
      style={{ color: "var(--text)" }}
    >
      {client.name}
    </span>
  );
}

function MarqueeSet() {
  return (
    <div className="flex shrink-0 items-center gap-8 sm:gap-14 md:gap-20">
      {clients.map((client) => (
        <ClientItem key={client.name} client={client} />
      ))}
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section
      className="border-y py-5 sm:py-7 overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <p
        className="mb-4 sm:mb-5 text-center font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        Trusted by businesses across industries
      </p>

      {/* Marquee — scrolls right-to-left continuously */}
      <div className="marquee-track flex items-center gap-8 sm:gap-14 md:gap-20">
        <MarqueeSet />
        <MarqueeSet />
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </section>
  );
}
