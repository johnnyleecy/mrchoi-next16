## 技術棧

| 項目 | 版本 | 備註 |
|---|---|---|
| Next.js | 16.4.3 | App Router + Turbopack |
| Node v22.19.0
| React | 19.3 | Server Components 為主 |
| Tailwind CSS | v4 | 
| TypeScript | ^5 | strict |
| ESLint | eslint-config-next | core-web-vitals + typescript |

---

## 網頁架構分佈（Routes）

| 路由 | 頁面 | 類型 |
|---|---|---|
| `/` | 首頁（香港 SEO 著陸頁） | 靜態 |
| `/services` | 服務總覽 | 靜態 |
| `/services/door-lock-repair` | 門鎖維修 | 靜態（generateStaticParams） |
| `/services/change-lock` | 換鎖 | 靜態 |
| `/services/install-lock` | 裝鎖 | 靜態 |
| `/services/change-door` | 換門 | 靜態 |
| `/services/install-door` | 裝門 | 靜態 |
| `/services/install-cabinet` | 裝櫃 | 靜態 |
| `/services/furniture-assembly` | 家私組裝 | 靜態 |


## lib/ 檔案說明（資料層）

資料與 UI 分離 —— 改文案、改報價方式、改服務內容，都只改 `lib/`，唔使動元件。

### `lib/site.ts` —— 站台集中設定檔

全站共用的資料都放喺度：

| 匯出 | 功能 |
|---|---|
| `SITE` | 店名、tagline、description、網域 `url`、WhatsApp 號碼、電話、地址、服務範圍、營業時間、價位 |
| `whatsappMessage` | WhatsApp 預填查詢訊息 |
| `whatsappLink(message?)` | 組裝 `https://wa.me/<號碼>?text=...` 連結的 helper（已 URL encode） |
| `IconName` | 圖示名稱 union type（配合 `icon-map.tsx`） |
| `trustPoints` | 首頁四大信任點（圖示＋標題＋描述） |
| `processSteps` | 四步服務流程（編號＋標題＋描述） |
| `faqs` | 首頁 FAQ（問題＋答案） |

> ⚠️ 上線前請改 `SITE.url`、`SITE.whatsappNumber`、`SITE.phone`。

---

## components/ 檔案說明（UI 元件）

| 檔案 | 類型 | 功能 |
|---|---|---|
| `header.tsx` | Client | **Navbar**：sticky 導覽列。品牌 logo + 桌面「服務」下拉選單（7 項）+ 信任／流程／FAQ 錨點 + WhatsApp 按鈕 + 手機漢堡選單（`useState` 控制開關） |
| `hero.tsx` | Server | **首頁主視覺**：H1 關鍵字、副標、雙 CTA（WhatsApp + 睇服務）、信任徽章、工業網格背景 |
| `services.tsx` | Server | **首頁服務卡片網格**：7 張卡（圖示＋標題＋短描述＋了解更多），整卡是 `<Link>` 連結到詳細頁 |
| `trust.tsx` | Server | **信任點區塊**：2×2 網格，讀 `trustPoints`，細分隔線設計 |
| `process.tsx` | Server | **四步流程區塊**：讀 `processSteps`，等寬字體步驟編號 |
| `pricing-note.tsx` | Server | **報價透明說明卡**：綠底強調「唔寫死定價、WhatsApp 發相報價」 |
| `faq.tsx` | Server | **首頁 FAQ**：原生 `<details>/<summary>` 手風琴（無 JS、SEO 友好），讀 `faqs` |
| `cta.tsx` | Server | **底部 CTA 區**：深色大標題 + WhatsApp 大按鈕 + 電話／服務範圍 |
| `footer.tsx` | Server | **頁尾**：品牌、服務連結、聯絡資料、WhatsApp 按鈕、版權行（獨立自僱師傅、非有限公司） |
| `whatsapp-float.tsx` | Server | **右下角浮動 WhatsApp 按鈕**：fixed 定位，全站可見 |
| `service-detail.tsx` | Server | **服務詳細頁共用渲染**：麵包屑、H1、intro、CTA 側欄、服務內容／適用情況、長文正文（`<article>`）、流程、FAQ、其他服務 |
| `icons.tsx` | Server | **SVG 圖示庫**：19 個 stroke 圖示（Check/Clock/Camera/User/List/Lock/Key/Wrench/Door/Frame/Cabinet/Package/Phone/MapPin/ChevronDown/Menu/Close/ArrowRight）+ 1 個 fill 圖示（WhatsApp） |
| `icon-map.tsx` | Server | **圖示對照表**：把 `IconName` 字串對應到實際 `<Icon>` 元件（供 services/trust 動態取圖示） |


---

## 如何修改內容

| 想改咩 | 改邊度 |
|---|---|
| 店名／WhatsApp 號碼／電話／網域／營業時間 | `lib/site.ts` 的 `SITE` |
| 信任點、流程、首頁 FAQ | `lib/site.ts` 的 `trustPoints`／`processSteps`／`faqs` |
| 7 個服務的標題、SEO、長文、FAQ | `lib/services.ts` 對應的 service 物件 |
| 版面／配色／按鈕樣式 | `components/` 對應元件 |

改完 `lib/` 後，全站（首頁、總覽、詳細頁、sitemap、JSON-LD）會自動同步，唔使逐頁改。

