import { whatsappLink, whatsappMessage } from "@/lib/site";
import { WhatsApp } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp 即時查詢報價"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition hover:scale-105 hover:bg-green-500"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
