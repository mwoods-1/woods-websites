"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfterSlider({ before, after, alt }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    updatePos(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    updatePos(e.touches[0].clientX);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updatePos(e.clientX);
    const onTouch = (e: TouchEvent) => updatePos(e.touches[0].clientX);
    const stop = () => setDragging(false);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", stop);
    document.addEventListener("touchmove", onTouch, { passive: true });
    document.addEventListener("touchend", stop);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", stop);
      document.removeEventListener("touchmove", onTouch);
      document.removeEventListener("touchend", stop);
    };
  }, [dragging, updatePos]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden rounded-2xl"
      style={{
        aspectRatio: "16/10",
        cursor: dragging ? "ew-resize" : "col-resize",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Before */}
      <Image
        src={before}
        alt={`${alt} — before`}
        fill
        sizes="(max-width: 1024px) 100vw, 900px"
        className="object-cover object-top"
        draggable={false}
      />

      {/* After — clipped to right of divider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={after}
          alt={`${alt} — after`}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2"
        style={{
          left: `${pos}%`,
          background: "rgba(255,255,255,0.9)",
          boxShadow: "0 0 12px rgba(0,0,0,0.6)",
        }}
      />

      {/* Handle */}
      <div
        className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
        style={{
          left: `${pos}%`,
          width: 44,
          height: 44,
          background: "white",
          boxShadow: "0 2px 16px rgba(0,0,0,0.5)",
          color: "#050505",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 8l-4 4 4 4" />
          <path d="M17 8l4 4-4 4" />
          <path d="M3 12h18" />
        </svg>
      </div>

      {/* Before label */}
      <div
        className="pointer-events-none absolute bottom-4 left-4 rounded-full px-3 py-1 font-mono text-[11px] tracking-widest uppercase transition-opacity duration-200"
        style={{
          background: "rgba(0,0,0,0.55)",
          color: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(6px)",
          opacity: pos > 12 ? 1 : 0,
        }}
      >
        Before
      </div>

      {/* After label */}
      <div
        className="pointer-events-none absolute bottom-4 right-4 rounded-full px-3 py-1 font-mono text-[11px] tracking-widest uppercase transition-opacity duration-200"
        style={{
          background: "rgba(46,196,182,0.15)",
          color: "var(--accent)",
          border: "1px solid rgba(46,196,182,0.3)",
          backdropFilter: "blur(6px)",
          opacity: pos < 88 ? 1 : 0,
        }}
      >
        After
      </div>
    </div>
  );
}
