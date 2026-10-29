import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Trust } from "@/components/trust";
import { Process } from "@/components/process";
import { PricingNote } from "@/components/pricing-note";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { SITE, faqs } from "@/lib/site";
import { services } from "@/lib/services";

const HOMEPAGE_TITLE =
  "香港換鎖師傅｜上門裝鎖・換門安裝・家私組裝・櫃安裝・門鎖維修";

export const metadata: Metadata = {
  title: {
    absolute: HOMEPAGE_TITLE,
  },
  description: SITE.description,
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
    "WhatsApp 報價",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    url: "/",
    siteName: SITE.name,
    title: HOMEPAGE_TITLE,
    description: SITE.description,
  },
};

function buildStructuredData() {
  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "zh-Hant-HK",
  };

  const business = {
    "@type": "Locksmith",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    areaServed: SITE.serviceArea.map((a) => ({
      "@type": "City",
      name: a,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "服務項目",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        url: `${SITE.url}/services/${s.slug}`,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDesc,
        },
      })),
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, business, faqPage],
  };
}

export default function Home() {
  const data = buildStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <Hero />
      <Services />
      <Trust />
      <Process />
      <PricingNote />
      <Faq />
      <Cta />
    </>
  );
}
