"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="font-display text-lg font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Woods
            <span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-sans text-sm tracking-wide transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <span className="transition-colors duration-300 group-hover:text-white">
                {link.label}
              </span>
              {/* Underline reveal */}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--accent)" }}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border px-5 py-2 font-sans text-sm font-medium text-[var(--text)] transition-all duration-300 hover:bg-white hover:!text-black"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "var(--text)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="overflow-hidden transition-all duration-500 md:hidden"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          background: "rgba(5,5,5,0.97)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b py-4 font-sans text-sm tracking-wide"
              style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.06)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 rounded-full py-3 text-center font-sans text-sm font-medium"
            style={{ background: "var(--accent)", color: "#050505" }}
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
