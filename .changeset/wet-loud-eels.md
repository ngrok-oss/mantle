---
"@ngrok/mantle": patch
---

Fix theme flash on hydration by reading the theme cookie during SSR. `useInitialHtmlThemeProps` now accepts an optional `ssrCookie` string so the server can render the correct theme class, eliminating the mismatch between server HTML and the inline script.
