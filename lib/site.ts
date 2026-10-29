// 網站集中設定檔 — 所有可改的資料都放喺度（店名、WhatsApp、電話、信任點、流程等）
// 服務詳細內容見 lib/services.ts
// 上線前請改成本身資料（WhatsApp 號碼、電話、網域）

export const SITE = {
  name: "蔡師傅",
  tagline: "門鎖 · 換鎖 · 裝門 · 家私",
  description:
    "香港換鎖師傅，上門門鎖維修、換鎖、裝鎖、換門安裝、裝門、櫃安裝及家私組裝。師傅本人接單、報價透明、現場拍照確認。一切先 WhatsApp 我哋發相報價，香港島、九龍、新界各區。",
  // ⚠️ 上線前請改成本身網域（例如 https://www.yourdomain.com）
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ragstore.org",
  // ⚠️ 上線前請換成實際 WhatsApp 號碼（國際格式，不加 +，例：85291234567）
  whatsappNumber: "85254448744",
  // ⚠️ 上線前請換成實際電話
  phone: "+852 5444 8744",
  addressLocality: "香港",
  addressRegion: "香港",
  addressCountry: "HK",
  serviceArea: ["香港島", "九龍", "新界"],
  openingHours: "每日 06:00 – 21:00",
  priceRange: "$$",
} as const;

// WhatsApp 預設查詢訊息
export const whatsappMessage =
  "你好，我想查詢報價（會附上鎖款／門款／現場相片），麻煩覆我，唔該。";

export function whatsappLink(message: string = whatsappMessage): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type IconName =
  | "lock"
  | "key"
  | "wrench"
  | "door"
  | "frame"
  | "cabinet"
  | "package"
  | "clock"
  | "list"
  | "user"
  | "camera";

export const trustPoints = [
  {
    icon: "clock",
    title: "電話 WhatsApp 聯絡",
    desc: "一切先 WhatsApp 我哋，師傅會回覆同安排。緊急情況視乎師傅檔期，盡可能幫助。",
  },
  {
    icon: "list",
    title: "報價透明",
    desc: "先報價、後施工，逐項講清楚，無隱藏收費。"
  },
  {
    icon: "user",
    title: "師傅本人接單",
    desc: "唔經中介、唔經客服轉介，師傅親自接聽、親自到場。",
  },
  {
    icon: "camera",
    title: "現場拍照確認",
    desc: "施工前後現場拍照，確認完成效果，避免爭議。",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "WhatsApp 發相",
    desc: "發鎖款／門款／現場相片，簡單講下問題。",
  },
  {
    step: "02",
    title: "透明報價",
    desc: "師傅按相片及現場情況初步報價，講明範圍。",
  },
  {
    step: "03",
    title: "盡快安排",
    desc: "視乎師傅檔期，約好時間上門，現場再確認細節。",
  },
  {
    step: "04",
    title: "拍照確認",
    desc: "完工後現場拍照確認，滿意先收工。",
  },
] as const;

export const faqs = [
  {
    q: "上門報價要收費嗎？",
    a: "一切先 WhatsApp 我哋發相，師傅會按相片回覆同初步報價；實際價錢以現場情況為準，會先講清楚再施工。",
  },
  {
    q: "緊急情況可以即刻到場嗎？",
    a: "緊急情況會視乎師傅當時檔期，盡可能幫助。請先 WhatsApp 我哋，方便盡快回覆同安排。",
  },
  {
    q: "價錢點計？",
    a: "視乎鎖款、門款及現場情況（例如門框、舊鎖拆裝難度），先 WhatsApp 我哋發相可加快報價。",
  },
  {
    q: "服務範圍係邊區？",
    a: "香港島、九龍、新界各區都去，偏遠地區可先 WhatsApp 確認。",
  },
  {
    q: "係咪師傅本人接單？",
    a: "係。唔經中介，師傅親自接聽同到場，溝通直接清楚。",
  },
] as const;
