import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Woods Websites | Web Design & Development for Small Business",
    template: "%s | Woods Websites",
  },
  description:
    "We help small businesses get more customers with high-converting websites, booking systems, and easy self-management. Sydney-based web design & development.",
  metadataBase: new URL("https://woodswebsites.com"),
  icons: {
    icon: [
      { url: "/images/logo/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Woods Websites",
    title: "Woods Websites | Web Design & Development for Small Business",
    description:
      "We help small businesses get more customers with high-converting websites, booking systems, and easy self-management.",
    images: [{ url: "/images/logo/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woods Websites | Web Design & Development for Small Business",
    description:
      "We help small businesses get more customers with high-converting websites, booking systems, and easy self-management.",
    images: ["/images/logo/og-image.png"],
  },
  alternates: {
    canonical: "https://woodswebsites.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Woods Websites",
  url: "https://woodswebsites.com",
  logo: "https://woodswebsites.com/images/logo/og-image.png",
  description:
    "We help small businesses get more customers with high-converting websites, booking systems, and easy self-management.",
  email: "info@woodswebsites.com",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: [
    "Web Design",
    "Web Development",
    "Website Redesign",
    "Booking System Integration",
    "Payment Integration",
    "SEO",
  ],
  founder: [
    { "@type": "Person", name: "Sean Woods" },
    { "@type": "Person", name: "Mark Woods" },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {/* JSON-LD structured data — static, hardcoded content (no user input) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
