<p align="center">
  <img src="icon128.png" width="96" alt="AniPace">
</p>

<h1 align="center">AniPace・1 倍速警察</h1>

<p align="center">看動畫就應該用 1 倍速觀看。</p>

---

在 [動畫瘋](https://ani.gamer.com.tw)(`ani.gamer.com.tw`)上,只要影片被調成 **非 1 倍速**,就會被立刻拉回 **1 倍速**,並跳出通知:

> 看動畫就應該用 1 倍速觀看

只在動畫瘋生效,不碰 Netflix、YouTube 或其他網站——因為那些不一定是看動畫。

## 運作方式

在捕獲階段掛一個 `ratechange` 監聽器就能管到頁面上所有 `<video>`(包含播放器 iframe 內、動態插入的)。偵測到 `playbackRate !== 1` 就重設為 `1` 並跳一個頁內 toast(全螢幕時會自動掛到全螢幕元素上,才不會被蓋住)。

零權限、零外部相依、約 30 行。

## 安裝

### 開發者模式(手動載入)

1. 下載 / `git clone` 這個 repo
2. Chrome 開 `chrome://extensions`
3. 右上角開「開發者模式」
4. 「載入未封裝項目」→ 選這個資料夾

### Chrome Web Store

審核通過後補上連結。

## 授權

[MIT](LICENSE)
