import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8 sm:py-12" style={{ borderColor: "rgba(255,255,255,0.08)", background: "#0d0d0d" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <span className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>
              WOODS WEBSITES<span style={{ color: "var(--accent)" }}>.</span>
            </span>
            <p className="mt-1 font-sans text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Web design & development by two brothers.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { label: "Work", href: "/portfolio" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-wide transition-colors duration-300 hover:text-white"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center gap-6 border-t pt-8"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Woods Websites. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="font-mono text-xs transition-colors duration-300 hover:text-white"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="font-mono text-xs transition-colors duration-300 hover:text-white"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
