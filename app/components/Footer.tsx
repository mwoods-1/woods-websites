import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand - Large Statement */}
          <div className="lg:col-span-6">
            <h3
              className="text-5xl md:text-6xl font-black mb-6 leading-tight uppercase"
              style={{ fontFamily: "var(--font-unbounded)" }}
            >
              Woods<br/>
              <span className="text-amber-500">Websites</span>
            </h3>
            <div className="w-24 h-px bg-amber-500 mb-6" />
            <p className="text-zinc-400 text-lg max-w-lg italic leading-relaxed">
              Creating beautiful, high-performance websites that help your business grow.
              From custom designs to platform integrations, we've got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs" style={{ fontFamily: "var(--font-unbounded)" }}>Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio"
                  className="text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-unbounded)" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs" style={{ fontFamily: "var(--font-unbounded)" }}>Services</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li>Custom Web Design</li>
              <li>Website Redesigns</li>
              <li>Platform Integrations</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-unbounded)" }}>
            © {currentYear} Woods Websites
          </p>
          <div className="flex gap-8 text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "var(--font-unbounded)" }}>
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
