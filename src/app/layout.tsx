import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Woods Websites — Custom Web Design & Development",
    template: "%s | Woods Websites",
  },
  description:
    "Custom-built, high-performance websites crafted with care. No templates. No shortcuts. Web design and development by Sean and Mark Woods.",
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
    title: "Woods Websites — Custom Web Design & Development",
    description:
      "Custom-built, high-performance websites crafted with care. No templates. No shortcuts.",
    images: [{ url: "/images/logo/og-image.png", width: 1200, height: 630 }],
  },
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
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
