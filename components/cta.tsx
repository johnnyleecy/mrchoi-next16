import { SITE, whatsappLink } from "@/lib/site";
import { WhatsApp, Phone, MapPin } from "./icons";

export function Cta() {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            即刻 WhatsApp 查詢報價
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-300">
            發鎖款／門款／現場相片，師傅本人覆你。
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-green-500"
          >
            <WhatsApp className="h-5 w-5" />
            WhatsApp 即時查詢報價
          </a>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-zinc-400 sm:flex-row sm:gap-8">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {SITE.serviceArea.join(" · ")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
