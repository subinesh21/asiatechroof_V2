import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://asiatechroof.sg'),
  title: {
    default: 'Asia Tech Roofing | #1 Roofing Specialist Singapore Since 2004',
    template: '%s | Asia Tech Roofing Singapore'
  },
  description: 'Singapore\'s trusted roofing contractor since 2004. Expert roof repair, waterproofing, leak repair & structural works for HDB, landed homes, commercial & industrial. Free inspection. Call now.',
  keywords: [
    'roofing contractor Singapore', 'roof repair Singapore', 'roof leak repair Singapore', 'waterproofing Singapore'
  ],
  authors: [{ name: 'Asia Tech Roofing Specialist' }],
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://asiatechroof.sg',
    siteName: 'Asia Tech Roofing Specialist',
    title: 'Asia Tech Roofing | #1 Roofing Specialist Singapore',
    description: 'Expert roofing, waterproofing & leak repair across Singapore since 2004. Free site inspection. 24hr emergency response.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Asia Tech Roofing Singapore'
    }]
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
