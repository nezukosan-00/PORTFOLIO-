import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STUDIO | Building Digital Experiences That Stand Out",
  description:
    "Premium digital studio crafting web applications, AI-powered platforms, and cutting-edge Web3 solutions. We build experiences that captivate and deliver results.",
  keywords: [
    "web development",
    "AI integration",
    "Web3",
    "NFT",
    "portfolio",
    "digital studio",
    "UI/UX design",
    "mobile development",
  ],
  openGraph: {
    title: "STUDIO | Building Digital Experiences That Stand Out",
    description:
      "Premium digital studio crafting web applications, AI-powered platforms, and cutting-edge Web3 solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "STUDIO | Building Digital Experiences That Stand Out",
    description:
      "Premium digital studio crafting web applications, AI-powered platforms, and cutting-edge Web3 solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} antialiased`}
    >
      <body
        className="min-h-screen"
        style={{ background: "#272121", color: "#F6E9E9" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
