import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { WhatsApp } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{SITE.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed">{SITE.description}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">服務</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition hover:text-white"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">聯絡</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{SITE.phone}</li>
              <li>服務範圍：{SITE.serviceArea.join("、")}</li>
              <li>營業時間：{SITE.openingHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>所有報價以現場確認為準，WhatsApp 發相報價最準確。</p>
        </div>
      </div>
    </footer>
  );
}
