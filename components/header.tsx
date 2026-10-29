"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { WhatsApp, ChevronDown, Menu, Close } from "./icons";

const anchors = [
  { href: "/#trust", label: "信任" },
  { href: "/#process", label: "流程" },
  { href: "/#faq", label: "常見問題" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-zinc-900">
              {SITE.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        {/* 桌面導覽 */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            首頁
          </Link>

          <div className="group relative">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              服務
              <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-56 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block rounded-md px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    {s.navTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {anchors.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              {a.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            <WhatsApp className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp 查詢</span>
            <span className="sm:hidden">查詢</span>
          </a>
          <button
            type="button"
            aria-label={open ? "關閉選單" : "開啟選單"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 md:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* 手機選單 */}
      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              首頁
            </Link>
            <p className="px-3 pt-2 pb-1 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
              服務
            </p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
              >
                {s.navTitle}
              </Link>
            ))}
            {anchors.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
              >
                {a.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
