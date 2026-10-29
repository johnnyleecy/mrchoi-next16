import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-green-700">
            服務流程
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            四步搞掂
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p) => (
            <li
              key={p.step}
              className="rounded-lg border border-zinc-200 bg-white p-6"
            >
              <span className="font-mono text-sm font-bold text-green-700">
                {p.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
