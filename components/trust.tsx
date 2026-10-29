import { trustPoints } from "@/lib/site";
import { iconMap } from "./icon-map";

export function Trust() {
  return (
    <section id="trust" className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-green-700">
            點解揀我
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            四個信任點
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
          {trustPoints.map((t) => (
            <div key={t.title} className="bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-green-50 text-green-700">
                {iconMap[t.icon]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
