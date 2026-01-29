"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 flex items-center justify-between">
        {/* Logo - Editorial Brutalist */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 overflow-hidden border border-amber-500/30 group-hover:border-amber-500 transition-colors">
            <Image
              src="/images/woods-websites-logo.jpg"
              alt="Woods Websites Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div
              className="text-lg font-black text-white group-hover:text-amber-500 transition-colors uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-unbounded)' }}
            >
              Woods
            </div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest" style={{ fontFamily: 'var(--font-unbounded)' }}>Web Design</div>
          </div>
        </Link>

        {/* Desktop Navigation - Minimal */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-5 py-2 text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
            style={{ fontFamily: 'var(--font-unbounded)' }}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="px-5 py-2 text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
            style={{ fontFamily: 'var(--font-unbounded)' }}
          >
            Work
          </Link>
          <Link
            href="/services"
            className="px-5 py-2 text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
            style={{ fontFamily: 'var(--font-unbounded)' }}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="px-5 py-2 text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
            style={{ fontFamily: 'var(--font-unbounded)' }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all font-bold text-xs uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-unbounded)' }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-amber-500 transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-amber-500 transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-amber-500 transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800">
          <div className="px-8 py-6 flex flex-col gap-1">
            <Link
              href="/"
              className="text-zinc-400 hover:text-white transition-colors py-3 text-sm uppercase tracking-widest font-medium border-b border-zinc-900"
              style={{ fontFamily: 'var(--font-unbounded)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-zinc-400 hover:text-white transition-colors py-3 text-sm uppercase tracking-widest font-medium border-b border-zinc-900"
              style={{ fontFamily: 'var(--font-unbounded)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/services"
              className="text-zinc-400 hover:text-white transition-colors py-3 text-sm uppercase tracking-widest font-medium border-b border-zinc-900"
              style={{ fontFamily: 'var(--font-unbounded)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition-colors py-3 text-sm uppercase tracking-widest font-medium border-b border-zinc-900"
              style={{ fontFamily: 'var(--font-unbounded)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="mt-4 px-6 py-4 bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all text-center font-bold text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-unbounded)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
