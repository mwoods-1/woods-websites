import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand - Large Statement */}
          <div className="lg:col-span-6">
            <h3
              className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight uppercase"
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
            <h4 className="font-display font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio"
                  className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider">
                  Custom Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider">
                  Website Redesigns
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider">
                  Platform Integrations
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-display text-zinc-400 hover:text-white transition-colors uppercase text-sm tracking-wider">
                  Performance Optimization
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display text-zinc-500 text-xs uppercase tracking-widest">
            © {currentYear} Woods Websites
          </p>
          <div className="font-display flex gap-8 text-xs text-zinc-500 uppercase tracking-widest">
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
