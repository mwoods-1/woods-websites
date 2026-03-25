import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Woods Websites — Custom Web Design & Development",
    template: "%s | Woods Websites",
  },
  description:
    "Custom-built, high-performance websites crafted with care. No templates. No shortcuts. Web design and development by Sean and Mark Woods.",
  metadataBase: new URL("https://woodswebsites.com"),
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
