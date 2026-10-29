import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsApp, Check } from "./icons";

const badges = ["盡快安排", "報價透明", "師傅本人接單", "現場拍照確認"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-600">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            香港各區 · 師傅本人接單
          </p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-[3.25rem]">
            香港換鎖師傅 —
            <span className="mt-2 block">
              門鎖維修、上門裝鎖、換門安裝、家私組裝、櫃安裝
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {SITE.name} — 唔經中介，師傅親自接聽、親自到場。一切先 WhatsApp 我哋發相報價，價錢視乎鎖款／門款／現場情況，現場拍照確認，避免爭議。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              <WhatsApp className="h-5 w-5" />
              WhatsApp 即時查詢報價
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-6 py-3.5 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
            >
              睇服務
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 text-sm text-zinc-600"
              >
                <Check className="h-4 w-4 text-green-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
