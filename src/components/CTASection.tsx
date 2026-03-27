"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxOpacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  color: string;
  burst: boolean;
  life: number;
}

function makeFirefly(w: number, h: number, burst?: { x: number; y: number }): Firefly {
  const colors = ["46,196,182", "52,211,153", "110,231,183", "240,240,240"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  if (burst) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 5;
    return {
      x: burst.x, y: burst.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2.5,
      size: 2 + Math.random() * 3,
      maxOpacity: 0.9,
      pulseSpeed: 0.4 + Math.random() * 0.4,
      pulseOffset: Math.random() * Math.PI * 2,
      color, burst: true, life: 1,
    };
  }
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25,
    vy: -(0.15 + Math.random() * 0.35),
    size: 1.5 + Math.random() * 2.5,
    maxOpacity: 0.25 + Math.random() * 0.5,
    pulseSpeed: 0.3 + Math.random() * 0.5,
    pulseOffset: Math.random() * Math.PI * 2,
    color, burst: false, life: 1,
  };
}

function PineTree({ height, flip }: { height: number; flip?: boolean }) {
  const w = height * 0.55;
  return (
    <svg width={w} height={height} viewBox="0 0 55 100"
      style={{ transform: flip ? "scaleX(-1)" : undefined, display: "block" }}
    >
      <polygon points="27,2 0,45 54,45"  fill="rgba(46,196,182,0.18)" />
      <polygon points="27,22 0,62 54,62" fill="rgba(46,196,182,0.14)" />
      <polygon points="27,42 0,82 54,82" fill="rgba(46,196,182,0.10)" />
      <rect x="22" y="82" width="11" height="18" fill="rgba(46,196,182,0.10)" />
    </svg>
  );
}

const TREES = [
  { h: 120, left: "1%",   flip: false },
  { h: 165, left: "6%",   flip: true  },
  { h: 135, left: "12%",  flip: false },
  { h: 195, left: "17%",  flip: true  },
  { h: 145, left: "23%",  flip: false },
  { h: 180, right: "1%",  flip: true  },
  { h: 148, right: "6%",  flip: false },
  { h: 205, right: "12%", flip: true  },
  { h: 128, right: "18%", flip: false },
  { h: 170, right: "24%", flip: true  },
];

export default function CTASection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Firefly[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      firefliesRef.current = Array.from({ length: 55 }, () =>
        makeFirefly(canvas.width, canvas.height)
      );
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onClick = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      for (let i = 0; i < 18; i++)
        firefliesRef.current.push(makeFirefly(canvas.width, canvas.height, {
          x: e.clientX - r.left,
          y: e.clientY - r.top,
        }));
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);

    function animate(t: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const ts = t * 0.001;

      firefliesRef.current = firefliesRef.current.filter(f => !f.burst || f.life > 0.02);
      while (firefliesRef.current.filter(f => !f.burst).length < 55)
        firefliesRef.current.push(makeFirefly(canvas.width, canvas.height));

      firefliesRef.current.forEach(f => {
        const dx = f.x - mx;
        const dy = f.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 0) {
          const force = ((130 - dist) / 130) * 0.55;
          f.vx += (dx / dist) * force;
          f.vy += (dy / dist) * force;
        }

        f.vx *= 0.96;
        f.vy *= 0.96;

        if (f.burst) {
          f.vy += 0.12;
          f.life -= 0.018;
        } else {
          f.vy -= 0.04;
        }

        f.x += f.vx;
        f.y += f.vy;

        const pulse = 0.5 + 0.5 * Math.sin(ts * f.pulseSpeed * Math.PI * 2 + f.pulseOffset);
        const alpha = f.burst ? f.life * f.maxOpacity : f.maxOpacity * pulse;

        if (!f.burst) {
          if (f.y < -10) { f.y = canvas.height + 10; f.x = Math.random() * canvas.width; }
          if (f.x < -10) f.x = canvas.width + 10;
          if (f.x > canvas.width + 10) f.x = -10;
        }

        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 4);
        grad.addColorStop(0, `rgba(${f.color},${alpha})`);
        grad.addColorStop(1, `rgba(${f.color},0)`);
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${f.color},${Math.min(alpha * 2.5, 1)})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-40 md:pt-52"
      style={{ background: "#0d0d0d", paddingBottom: 220 }}
    >
      {/* Firefly canvas — masked so fireflies stay off the tree line */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full cursor-crosshair"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 55%, transparent 80%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 55%, transparent 80%)",
        }}
      />

      {/* Top fade — blends from WorkshopSection */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{ height: "35%", background: "linear-gradient(to bottom, #050505 0%, transparent 100%)", zIndex: 1 }}
      />

      {/* Content */}
      <motion.div
        ref={scrollRef}
        style={{ opacity, y, position: "relative", zIndex: 10 }}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <p className="mb-4 font-mono text-xs tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
          Let's Work Together
        </p>
        <h2
          className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          style={{ color: "var(--text)" }}
        >
          Ready to build{" "}
          <br className="hidden sm:block" />
          something{" "}
          <span style={{ color: "var(--accent)" }}>great?</span>
        </h2>
        <p
          className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          We start with a free call to discuss your goals and set up a plan before any build begins.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-sm font-medium transition-all duration-300 hover:opacity-85"
            style={{ background: "var(--accent)", color: "#050505" }}
          >
            Contact Us
            <span className="relative inline-flex h-4 items-center overflow-hidden">
              <span className="inline-block transition-all duration-500 group-hover:translate-x-full">→</span>
              <span className="absolute left-0 -translate-x-full transition-all duration-500 group-hover:translate-x-0">→</span>
            </span>
          </Link>
          <a
            href="mailto:woodswebsites@gmail.com"
            className="font-sans text-sm tracking-wide transition-colors duration-300 hover:text-white"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            woodswebsites@gmail.com
          </a>
        </div>
      </motion.div>

      {/* Pine trees at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0" style={{ height: 220 }}>
        {TREES.map((tree, i) => (
          <div
            key={i}
            className="absolute bottom-0"
            style={{
              left: (tree as { left?: string }).left,
              right: (tree as { right?: string }).right,
            }}
          >
            <PineTree height={tree.h} flip={tree.flip} />
          </div>
        ))}
      </div>
    </section>
  );
}
