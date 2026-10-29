import { faqs } from "@/lib/site";
import { ChevronDown } from "./icons";

export function Faq() {
  return (
    <section id="faq" className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-green-700">
            常見問題
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            有咩想知？
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
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
  );
}
