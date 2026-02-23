"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const desktopLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `transition-colors text-sm uppercase tracking-widest font-medium ${
      isActive ? "text-amber-500" : "text-zinc-400 hover:text-white"
    }`;
  };

  const mobileLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `transition-colors py-3 text-sm uppercase tracking-widest font-medium border-b border-zinc-900 ${
      isActive ? "text-amber-500" : "text-zinc-400 hover:text-white"
    }`;
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-white hover:text-amber-500 transition-colors text-sm font-black uppercase tracking-wider"
        >
          WOODS WEBSITES
        </Link>

        {/* Desktop Navigation */}
        <div className="font-display hidden md:flex items-center gap-10">
          <Link
            href="/"
            className={desktopLinkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className={desktopLinkClass("/portfolio")}
          >
            Work
          </Link>
          <Link
            href="/services"
            className={desktopLinkClass("/services")}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={desktopLinkClass("/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-display ml-6 px-8 py-3 bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all font-bold text-xs uppercase tracking-widest"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu — always mounted for animation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="font-display px-6 py-6 flex flex-col gap-1">
          <Link
            href="/"
            className={mobileLinkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className={mobileLinkClass("/portfolio")}
          >
            Work
          </Link>
          <Link
            href="/services"
            className={mobileLinkClass("/services")}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={mobileLinkClass("/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-display mt-4 px-6 py-4 bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all text-center font-bold text-xs uppercase tracking-widest"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
