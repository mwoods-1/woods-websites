import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Woods Websites
            </h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Creating beautiful, high-performance websites that help your business grow.
              From custom designs to platform integrations, we've got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 text-orange-400">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Custom Web Design</li>
              <li>Website Redesigns</li>
              <li>Platform Integrations</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Woods Websites. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
