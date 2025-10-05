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
  title: "Pravas Chandra Sarkar - AI Web Developer | CodeMyPixel",
  description: "AI Web Developer specializing in Next.js, OpenAI integrations, and intelligent web systems. Building SaaS platforms and AI-powered WordPress plugins for clients worldwide.",
  authors: [{ name: "Pravas Chandra Sarkar" }],
  openGraph: {
    title: "Pravas Chandra Sarkar - AI Web Developer",
    description: "Building Intelligent Web Experiences with AI + Next.js",
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
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
