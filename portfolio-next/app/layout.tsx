import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, Newsreader, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientShell } from "@/components/ClientShell";

const GeistSans = localFont({
  src: "./fonts/GeistSans-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const GeistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-slab",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keynt Harly Adol — Side A / Side B",
  description:
    "A music-driven portfolio for Keynt Harly Adol — developer, designer, researcher, artist. Each track unlocks a different identity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${newsreader.variable} ${playfair.variable}`}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
