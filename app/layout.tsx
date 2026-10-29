import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#18181b",
  colorScheme: "light",
};

const HOMEPAGE_TITLE =
  "香港換鎖師傅｜上門裝鎖・換門安裝・家私組裝・櫃安裝・門鎖維修";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: HOMEPAGE_TITLE,
    template: "%s｜蔡師傅",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "香港換鎖師傅",
    "上門裝鎖",
    "換門安裝",
    "家私組裝",
    "櫃安裝",
    "門鎖維修",
    "師傅上門",
    "換鎖",
    "裝鎖",
    "換門",
    "裝門",
    "裝櫃",
    "香港鎖匠",
    "電子鎖安裝",
    "WhatsApp 報價",
    "九龍換鎖",
    "新界裝門",
    "香港島門鎖",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "home services",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    url: "/",
    siteName: SITE.name,
    title: HOMEPAGE_TITLE,
    description: SITE.description,
  },
  twitter: {
    card: "summary",
    title: HOMEPAGE_TITLE,
    description: SITE.description,
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-HK"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
