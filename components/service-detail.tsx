import Link from "next/link";
import Image from "next/image";
import { services, type ServiceDetail } from "@/lib/services";
import { SITE, whatsappLink } from "@/lib/site";
import { Process } from "./process";
import { WhatsApp, Check, ChevronDown } from "./icons";
export function ServiceDetailView({ service }: { service: ServiceDetail }) {
  const others = services.filter((s) => s.slug !== service.slug);
  return (
    <>
      {/* Banner 1600x560 */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6">
          <div className="relative w-full aspect-[1600/560] overflow-hidden rounded-xl">
            <Image
              src={service.bannerImage}
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* 標題區 */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <nav aria-label="breadcrumb" className="text-sm text-zinc-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="transition hover:text-zinc-900">
                  首頁
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="transition hover:text-zinc-900">
                  服務
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-zinc-900">{service.title}</li>
            </ol>
          </nav>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {service.intro}
              </p>
            </div>
            <aside className="h-fit rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-base font-semibold text-zinc-900">
                想查詢報價？
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                價錢視乎鎖款／門款／現場情況，WhatsApp 發相報價最準確。
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                <WhatsApp className="h-4 w-4" />
                WhatsApp 即時查詢報價
              </a>
              <p className="mt-4 text-sm text-zinc-500">
                電話：{SITE.phone}
                <br />
                服務範圍：{SITE.serviceArea.join("、")}
              </p>
            </aside>
          </div>
        </div>
      </section>
      {/* 服務內容 + 適用情況 */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                服務內容
              </h2>
              <ul className="mt-5 space-y-3">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-zinc-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                適用情況
              </h2>
              <ul className="mt-5 space-y-3">
                {service.suitableFor.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" />
                    <span className="text-zinc-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 長文正文（SEO 文章） */}
      <article className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          {service.content.map((section) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-zinc-700">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
      {/* 服務流程 */}
      <Process />
      {/* 本服務 FAQ */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            {service.title} 常見問題
          </h2>
          <div className="mt-6 space-y-3">
            {service.faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-zinc-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-zinc-900">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition group-open:rotate-180" />
                </summary>
                <p className="border-t border-zinc-100 px-5 py-4 text-sm leading-relaxed text-zinc-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* 其他服務 */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            其他服務
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg border border-zinc-200 bg-white px-5 py-4 transition hover:border-green-600/40 hover:shadow-sm"
              >
                <span className="font-semibold text-zinc-900">{s.title}</span>
                <span className="mt-1 block text-sm text-zinc-600">
                  {s.shortDesc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
