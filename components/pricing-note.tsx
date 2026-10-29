import { whatsappLink } from "@/lib/site";
import { WhatsApp } from "./icons";

export function PricingNote() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-lg border border-green-600/30 bg-green-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-zinc-900">報價合理公平 視乎情況而定</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                價格視乎鎖款／門款／現場情況而定，WhatsApp 發相報價最準確。我哋唔預設固定價目，避免到場後出現爭議 — 每個個案都先講清楚、再施工。
              </p>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <WhatsApp className="h-4 w-4" />
              發相報價
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
