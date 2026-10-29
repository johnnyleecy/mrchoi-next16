import Link from "next/link";
import { services } from "@/lib/services";
import { iconMap } from "./icon-map";
import { ArrowRight } from "./icons";

export function Services() {
  return (
    <section id="services" className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-green-700">
            服務項目
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            門鎖、換鎖、裝門、家私，一對一上門服務
          </h2>
          <p className="mt-3 text-zinc-600">
            價錢視乎鎖款／門款／現場情況，WhatsApp 發相報價最準確。
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
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {s.title}
              </h3>
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
  );
}
