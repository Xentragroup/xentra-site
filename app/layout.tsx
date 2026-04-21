import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://xentragroup.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Xentra Group — OnlyFans Management Agency",
    template: "%s | Xentra Group",
  },
  description:
    "We help creators turn OnlyFans into real income. No bad agencies, no guessing — just structure, consistency, and growth.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "Xentra Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@xentragroup",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xentra Group",
  url: BASE_URL,
  email: "admin@xentragroup.co.uk",
  description:
    "OnlyFans management agency helping creators build consistent, growing income through strategy, brand, and professional management.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
