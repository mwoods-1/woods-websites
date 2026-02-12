import type { Metadata } from "next";
import { Unbounded, Libre_Baskerville } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
  variable: "--font-unbounded",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodswebsites.com"),
  title: {
    default: "Woods Websites - Custom Web Design & Development",
    template: "%s | Woods Websites",
  },
  description:
    "Professional web design and development by two brothers who build fast, stunning websites tailored to your business.",
  keywords:
    "web design, web development, custom websites, platform integrations, website optimization, Cloudflare",
  openGraph: {
    title: "Woods Websites - Custom Web Design & Development",
    description:
      "Professional web design services that transform your online presence",
    url: "https://woodswebsites.com",
    siteName: "Woods Websites",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${libreBaskerville.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-libre-baskerville)' }}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
