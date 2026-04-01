"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [pastHero, setPastHero] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleEnter() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setLogoHovered(true);
  }

  function handleLeave() {
    leaveTimer.current = setTimeout(() => setLogoHovered(false), 150);
  }

  return (
    <>
      {/* ── Hero nav bar (visible before scrolling past hero) ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          opacity: pastHero ? 0 : 1,
          pointerEvents: pastHero ? "none" : "auto",
          transform: pastHero ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group flex items-center gap-2">
            <span
              className="font-display text-lg font-bold"
              style={{ color: "var(--text)", letterSpacing: "-0.04em" }}
            >
              WOODS WEBSITES
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
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block h-px w-6 transition-all duration-300" style={{ background: "var(--text)", transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }} />
            <span className="block h-px w-6 transition-all duration-300" style={{ background: "var(--text)", opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-px w-6 transition-all duration-300" style={{ background: "var(--text)", transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="overflow-hidden transition-all duration-500 md:hidden"
          style={{
            maxHeight: menuOpen ? "400px" : "0",
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
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Persistent logo + fanning links (past hero) ── */}
      <AnimatePresence>
        {pastHero && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-5 left-6 z-50 flex items-center gap-4"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* Single expanding pill — logo + links */}
          <div
            className="flex items-center rounded-full border overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.3)]"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              background: "rgba(5,5,5,0.85)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center px-4 py-2">
              <span
                className="font-display text-sm font-bold whitespace-nowrap"
                style={{ color: "var(--text)", letterSpacing: "-0.04em" }}
              >
                WOODS WEBSITES
                <span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </Link>

            {/* Expanding links */}
            <AnimatePresence>
              {logoHovered && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-6 overflow-hidden"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {/* Divider */}
                  <span className="h-3 w-px shrink-0" style={{ background: "rgba(255,255,255,0.15)" }} />
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group relative font-sans text-sm tracking-wide transition-colors duration-200 hover:text-white"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {link.label}
                        <span
                          className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                          style={{ background: "var(--accent)" }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                  <span className="pr-2" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Contact Us button (bottom-right, past hero) ── */}
      <div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500"
        style={{
          opacity: pastHero ? 1 : 0,
          pointerEvents: pastHero ? "auto" : "none",
          transform: pastHero ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="block rounded-full px-7 py-4 font-sans text-base font-semibold"
          style={{
            background: "var(--accent)",
            color: "#050505",
            boxShadow: "0 4px 24px rgba(46,196,182,0.35)",
          }}
        >
          Contact Us
        </motion.a>
      </div>
    </>
  );
}
