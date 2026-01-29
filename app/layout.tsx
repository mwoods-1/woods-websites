import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Woods Websites - Custom Web Design & Development",
  description: "Professional web design and development services. We create stunning, high-performance websites tailored to your business needs.",
  keywords: "web design, web development, custom websites, platform integrations, website optimization, Cloudflare",
  openGraph: {
    title: "Woods Websites - Custom Web Design & Development",
    description: "Professional web design services that transform your online presence",
    url: "https://woodswebsites.com",
    siteName: "Woods Websites",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-dm-sans)' }}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
