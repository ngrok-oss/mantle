---
"@ngrok/mantle": patch
---

Change `font-display` from `swap` to `fallback` in all `@font-face` declarations to eliminate layout shift (font bounce) while still downloading and caching fonts for subsequent loads
