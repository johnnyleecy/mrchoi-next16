import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, type ServiceDetail } from "@/lib/services";
import { SITE } from "@/lib/site";
import { ServiceDetailView } from "@/components/service-detail";
import { Cta } from "@/components/cta";

// 靜態內容站：路由由 generateStaticParams 提供，允許其阻斷以讀取 params，
// 避免 Cache Components 的「params 需包在 <Suspense>」dev 驗證錯誤。
export const instant = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {};
  }

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      siteName: SITE.name,
      type: "website",
      locale: "zh_HK",
    },
  };
}

function buildStructuredData(service: ServiceDetail) {
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首頁",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "服務",
        item: `${SITE.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE.url}/services/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@type": "Service",
    name: service.title,
    description: service.intro,
    url: `${SITE.url}/services/${service.slug}`,
    provider: {
      "@type": "Locksmith",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      telephone: SITE.phone,
    },
    areaServed: SITE.serviceArea.map((a) => ({
      "@type": "City",
      name: a,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
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
    "@graph": [breadcrumb, serviceSchema, faqPage],
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const data = buildStructuredData(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <ServiceDetailView service={service} />
      <Cta />
    </>
  );
}
