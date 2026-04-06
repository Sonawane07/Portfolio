import type { Metadata } from "next";
import { Suspense } from "react";
import { Syne, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/content";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Portfolio`,
  description:
    "Portfolio of Darshan Sunil Sonawane, software engineer and AI/ML engineer based in Atlanta, GA.",
  openGraph: {
    title: `${SITE.name} | Portfolio`,
    description:
      "Software engineer and AI/ML engineer in Atlanta: full stack, mobile, RAG, diffusion, and cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
