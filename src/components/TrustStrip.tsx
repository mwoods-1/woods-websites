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
const clients: { name: string; src: string | null; height: number; width: number }[] = [
  { name: "Aviation Expeditions", src: "/images/website_logos/logo_aviation_expeditions.png", height: 80, width: 91 },
  { name: "Kingdom Property Care", src: "/images/website_logos/logo_kingdom_property_care.png", height: 50, width: 207 },
  { name: "Sven's Basecamp Hostel", src: "/images/website_logos/logo_svens_basecamp_hostel.png", height: 50, width: 228 },
  { name: "Ovens Soccer", src: "/images/website_logos/logo_ovens_soccer.png", height: 50, width: 173 },
];

function ClientItem({ client }: { client: (typeof clients)[number] }) {
  if (client.src) {
    return (
      <div
        className="relative shrink-0 opacity-50 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
      >
        <Image
          src={client.src}
          alt={client.name}
          height={client.height}
          width={client.width}
          className="h-auto w-auto object-contain"
          style={{ filter: "brightness(1.5)", maxHeight: `${client.height}px` }}
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
        className="mb-4 sm:mb-5 text-center font-mono text-xs sm:text-sm tracking-[0.25em] uppercase"
        style={{ color: "rgba(255,255,255,0.5)" }}
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
