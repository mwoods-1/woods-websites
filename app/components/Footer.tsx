import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg)] border-t border-border">
      {/* Teal gradient accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* Main 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">

          {/* Left: Logo mark + description */}
          <div className="flex flex-col gap-6">
            <span
              className="font-display text-7xl font-black text-accent leading-none"
              aria-label="Woods Websites"
            >
              W
            </span>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
              Creating beautiful, high-performance websites that help your business grow.
            </p>
          </div>

          {/* Center: Quick nav links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Work", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[var(--text-muted)] hover:text-accent transition-colors text-sm uppercase tracking-wider"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA + email */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Get in touch
            </h4>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Let&apos;s build something great together.
            </p>
            <a
              href="mailto:woodswebsites.com@gmail.com"
              className="text-accent hover:text-accent/70 transition-colors text-sm break-all"
            >
              woodswebsites.com@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-faint)] text-xs uppercase tracking-widest">
            © {currentYear} Woods Websites
          </p>
          <div className="flex gap-8 text-xs text-[var(--text-faint)] uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
