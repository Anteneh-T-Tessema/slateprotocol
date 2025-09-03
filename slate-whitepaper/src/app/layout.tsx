import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Slate Blueprint v2.0: The Go-To L1 for Decentralized Applications",
  description: "Slate is a unified modular blockchain with a decentralized core and a robust economic flywheel, engineered to be the foundational layer for the next generation of Web3.",
  keywords: ["blockchain", "L1", "modular", "Web3", "DeFi", "cryptocurrency"],
  authors: [{ name: "Slate Protocol Team" }],
  openGraph: {
    title: "Slate Protocol - The Go-To L1 for Web3",
    description: "Unified modular blockchain solving the trilemma with decentralized sequencing and atomic composability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
