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
  metadataBase: new URL('https://kspgeneralcontractors.sg'),
  title: {
    default: 'KSP General Contractors | General Contracting Perfected by KSP',
    template: '%s | KSP General Contractors'
  },
  description: 'KSP General Contractors are your go-to experts for all general contracting needs in Singapore. We have a reputation for excellence in concrete ceiling repairs, waterproofing, P.U. pressure grouting, polycarbonate roofing, bird netting, and more. Our team of trained professionals is committed to delivering high-quality workmanship and exceptional customer service. Whether a small repair or a large-scale project, KSP General Contractors provides reliable solutions and free project estimates. Contact us today for top-notch general contracting services in Singapore. Available 24/7 for your convenience.',
  keywords: [
    'KSP General Contractors', 'General Contractors in Singapore', 'Concrete Ceiling Repairs Singapore', 'Waterproofing Services Singapore', 'P.U. Pressure Grouting Singapore', 'Polycarbonate Roofing Singapore'
  ],
  authors: [{ name: 'KSP General Contractors' }],
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://kspgeneralcontractors.sg',
    siteName: 'KSP General Contractors',
    title: 'KSP General Contractors | General Contracting in Singapore',
    description: 'KSP General Contractors deliver top-notch construction solutions in Singapore, specializing in quality craftsmanship, timely completion, and client satisfaction.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'KSP General Contractors Singapore'
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
