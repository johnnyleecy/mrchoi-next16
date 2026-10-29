import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";
import { iconMap } from "@/components/icon-map";
import { ArrowRight } from "@/components/icons";
import { Cta } from "@/components/cta";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "香港換鎖師傅提供門鎖維修、換鎖、裝鎖、換門、裝門、櫃安裝及家私組裝，上門盡快安排，WhatsApp 發相報價。",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "服務項目｜蔡師傅",
    description:
      "香港換鎖師傅提供門鎖維修、換鎖、裝鎖、換門、裝門、櫃安裝及家私組裝。",
    url: "/services",
    siteName: SITE.name,
    type: "website",
    locale: "zh_HK",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-green-700">
              服務項目
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              香港換鎖師傅 — 門鎖、換鎖、裝門、家私、櫃安裝
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              師傅本人接單、報價透明、現場拍照確認。揀你要嘅服務，WhatsApp 發相報價。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-lg border border-zinc-200 bg-white p-6 transition hover:border-green-600/40 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-zinc-900 text-white">
                  {iconMap[s.icon]}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-zinc-900">
                  {s.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {s.shortDesc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-700">
                  了解更多
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
