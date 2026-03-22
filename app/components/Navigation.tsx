"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const NAV_LINKS = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Escape key closes overlay
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const desktopLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `font-display text-[0.75rem] uppercase tracking-wider transition-colors ${
      isActive
        ? "text-accent"
        : "text-[var(--text-muted)] hover:text-[var(--text)]"
    }`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-[var(--bg)]/80 border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          {/* Logo — "W" letter mark */}
          <Link
            href="/"
            className="font-display text-accent hover:text-accent-hover transition-colors text-xl font-black uppercase tracking-wider"
            aria-label="Woods Websites — Home"
          >
            W
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={desktopLinkClass(href)}>
                {label}
              </Link>
            ))}

            {/* Contact button */}
            <Link
              href="/contact"
              className="font-display ml-4 px-6 py-2.5 border border-accent text-accent hover:bg-accent hover:text-accent-fg transition-all text-[0.75rem] uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="w-6 h-0.5 bg-accent" />
            <span className="w-6 h-0.5 bg-accent" />
            <span className="w-6 h-0.5 bg-accent" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-[var(--bg)]/98 backdrop-blur-xl md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Top bar inside overlay */}
            <div className="flex items-center justify-between px-6 py-6">
              <Link
                href="/"
                className="font-display text-accent text-xl font-black uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Woods Websites — Home"
              >
                W
              </Link>

              {/* Close button */}
              <button
                className="w-10 h-10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="3" x2="17" y2="17" />
                  <line x1="17" y1="3" x2="3" y2="17" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <motion.div key={href} variants={linkVariants}>
                    <Link
                      href={href}
                      className={`font-display block text-3xl font-black uppercase tracking-wider py-3 transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-[var(--text-muted)] hover:text-[var(--text)]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Contact button at bottom */}
            <motion.div
              className="px-8 pb-12"
              variants={linkVariants}
            >
              <Link
                href="/contact"
                className="font-display block w-full py-4 border border-accent text-accent hover:bg-accent hover:text-accent-fg transition-all text-center text-[0.75rem] uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
