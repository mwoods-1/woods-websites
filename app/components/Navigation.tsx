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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/woods-websites-logo.jpg"
              alt="Woods Websites Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div
              className="text-xl font-bold text-navy-900 group-hover:text-orange-600 transition-colors"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              Woods Websites
            </div>
            <div className="text-xs text-slate-600">Web Design & Development</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:shadow-lg font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-navy-900 transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-navy-900 transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-navy-900 transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-navy-700 hover:text-orange-600 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-navy-700 hover:text-orange-600 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="text-navy-700 hover:text-orange-600 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-navy-700 hover:text-orange-600 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all text-center font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
