import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pravas Chandra Sarkar - AI Product Engineer | 20+ Production Apps",
  description: "AI Product Engineer building SaaS ecosystems, automation platforms, and AI-powered applications with Next.js, OpenAI, and TypeScript. Shipped 20+ production apps for clients in UK, USA, and Netherlands. Open to remote roles.",
  authors: [{ name: "Pravas Chandra Sarkar" }],
  openGraph: {
    title: "Pravas Chandra Sarkar - AI Product Engineer",
    description: "Built and shipped a full SaaS ecosystem — lead gen, SEO, social automation, voice agents, legal AI, and project management. 20+ production apps delivered. Open to remote.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravas Chandra Sarkar - AI Product Engineer",
    description: "Built and shipped a full SaaS ecosystem. 20+ production apps. Open to remote roles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
