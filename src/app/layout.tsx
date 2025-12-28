import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the base URL for metadata. 
// In production (Heroku), set the NEXT_PUBLIC_APP_URL environment variable.
const baseUrl = process.env.NEXT_PUBLIC_APP_URL 
  ? new URL(process.env.NEXT_PUBLIC_APP_URL) 
  : new URL('http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: "The Rise of AI (Without Hype)",
  description: "An interactive web documentary explaining AI evolution, capabilities, and limitations without marketing, fear, or buzzwords.",
  keywords: ["AI", "artificial intelligence", "machine learning", "documentary", "education", "tech"],
  authors: [{ name: "Muhammad Imran" }],
  openGraph: {
    title: "The Rise of AI (Without Hype)",
    description: "Understanding AI evolution without the hype. An interactive web documentary.",
    url: baseUrl,
    siteName: "The Rise of AI",
    type: "website",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Rise of AI (Without Hype)",
    description: "Understanding AI evolution without the hype.",
  },
  alternates: {
    canonical: baseUrl,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
