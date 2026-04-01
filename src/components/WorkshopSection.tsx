/**
 * WorkshopSection — Scroll-Stop Animation
 * =========================================
 * A scroll-driven animation where a monitor with floating tech cards
 * emerges as the user scrolls through a 500vh sticky container.
 *
 * Dependencies:
 *   npm install motion
 *
 * CSS variables expected (set these in your globals.css or parent):
 *   --bg:          #050505    (background)
 *   --bg-alt:      #0d0d0d   (card background)
 *   --bg-elevated: #111111   (monitor screen)
 *   --accent:      #2ec4b6   (teal accent)
 *   --text:        #f0f0f0   (primary text)
 *
 * Font classes expected (via Tailwind or custom CSS):
 *   .font-display  — bold display font (e.g., Unbounded)
 *   .font-mono     — monospace font (e.g., JetBrains Mono)
 *
 * Usage:
 *   import WorkshopSection from './WorkshopSection';
 *   // Place in your page — it creates its own 500vh scroll container
 *   <WorkshopSection />
 */

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

// Semi-oval: a=290 (horizontal), b=255 (vertical), θ=20°→160° in 8 even steps
// Right side low→high, then left side high→low
const items = [
  { icon: "◎", label: "SEO",        color: "#38bdf8", delay: [0.06, 0.16] as [number, number], endX:  220, endY:  -75, rotation:  20, desktopOnly: true },
  { icon: "📱", label: "Responsive", color: "#34d399", delay: [0.09, 0.19] as [number, number], endX:  222, endY: -164, rotation:  12 },
  { icon: "{ }", label: "Code",     color: "var(--accent)", delay: [0.12, 0.22] as [number, number], endX: 145, endY: -221, rotation: 10 },
  { icon: "⟡", label: "Booking",    color: "#f97316", delay: [0.15, 0.25] as [number, number], endX:   50, endY: -251, rotation:   5 },
  { icon: "↗", label: "Convert",    color: "#f87171", delay: [0.18, 0.28] as [number, number], endX:  -50, endY: -251, rotation: -12 },
  { icon: "⚡", label: "Speed",      color: "#fbbf24", delay: [0.21, 0.31] as [number, number], endX: -145, endY: -221, rotation:  -8 },
  { icon: "◆", label: "Design",     color: "#a78bfa", delay: [0.24, 0.34] as [number, number], endX: -222, endY: -164, rotation: -15 },
  { icon: "✦", label: "Support",    color: "var(--accent)", delay: [0.27, 0.37] as [number, number], endX: -220, endY:  -75, rotation: -18, desktopOnly: true },
];

function FloatingCard({
  icon,
  label,
  color,
  delay,
  endX,
  endY,
  rotation,
  desktopOnly,
  progress,
}: {
  icon: string;
  label: string;
  color: string;
  delay: [number, number];
  endX: number;
  endY: number;
  rotation: number;
  desktopOnly?: boolean;
  progress: ReturnType<typeof useSpring>;
}) {
  const opacity = useTransform(progress, [delay[0], delay[1]], [0, 1]);
  const x = useTransform(progress, [delay[0], delay[1], delay[1] + 0.15], [0, endX * 0.3, endX]);
  const y = useTransform(progress, [delay[0], delay[1], delay[1] + 0.15], [0, endY * 0.3, endY]);
  const rotate = useTransform(progress, [delay[0], delay[1] + 0.15], [0, rotation]);
  const scale = useTransform(progress, [delay[0], delay[1]], [0, 1]);

  return (
    <motion.div
      className={desktopOnly ? "hidden md:flex" : "flex"}
      style={{
        opacity,
        x,
        y,
        rotate,
        scale,
        position: "absolute",
        left: "50%",
        top: "55%",
        marginLeft: -40,
        marginTop: -40,
        width: 80,
        height: 80,
        background: "var(--bg-alt)",
        border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        boxShadow: `0 4px 20px color-mix(in srgb, ${color} 8%, transparent)`,
      }}
    >
      <span style={{ fontSize: 24 }}>{icon}</span>
      <span
        className="font-mono"
        style={{
          color,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function WorkshopSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
  });

  const deskOpacity = useTransform(smoothProgress, [0, 0.12], [0, 1]);
  const deskY = useTransform(smoothProgress, [0, 0.12], [60, 0]);
  const taglineOpacity = useTransform(smoothProgress, [0.45, 0.55], [0, 1]);

  return (
    <div ref={containerRef} className="relative z-10" style={{ height: "250vh" }}>
      <div
        className="sticky top-0 flex items-center justify-center overflow-hidden"
        style={{ height: "100vh", background: "var(--bg)" }}
      >
        {/* Monitor/desk scene */}
        <motion.div
          style={{
            opacity: deskOpacity,
            y: deskY,
            position: "relative",
            width: "min(80vw, 500px)",
          }}
        >
          {/* Monitor */}
          <div
            style={{
              width: "60%",
              margin: "0 auto",
              aspectRatio: "16/10",
              background: "var(--bg-elevated)",
              borderRadius: "8px 8px 0 0",
              border: "1px solid rgba(46,196,182,0.19)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Screen shimmer */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(46,196,182,0.06), var(--bg))",
                  "linear-gradient(135deg, var(--bg), rgba(46,196,182,0.06))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              style={{ position: "absolute", inset: 0 }}
            />
            <span
              className="font-display"
              style={{
                color: "var(--accent)",
                fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
                fontWeight: 900,
                zIndex: 1,
              }}
            >
              W
            </span>
          </div>
          {/* Stand */}
          <div style={{ width: 40, height: 20, background: "#222", margin: "0 auto" }} />
          {/* Desk surface */}
          <div
            style={{
              width: "100%",
              height: 6,
              background: "linear-gradient(90deg, transparent, rgba(46,196,182,0.25), transparent)",
              borderRadius: 3,
            }}
          />
        </motion.div>

        {/* Floating cards — scaled down on mobile so they stay on-screen */}
        <div className="absolute inset-0 scale-[0.5] sm:scale-[0.7] md:scale-100 pointer-events-none">
          {items.map((item, i) => (
            <FloatingCard key={i} {...item} progress={smoothProgress} />
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="font-mono"
          style={{
            opacity: taglineOpacity,
            position: "absolute",
            bottom: "7rem",
            color: "var(--accent)",
            fontSize: "1.6rem",
            letterSpacing: "0.15em",
            textAlign: "center",
          }}
        >
          Built around your business.{" "}<br />Built to get results.
        </motion.p>
      </div>
    </div>
  );
}
