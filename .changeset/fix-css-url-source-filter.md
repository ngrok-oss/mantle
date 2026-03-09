---
"@ngrok/mantle-vite-plugins": patch
---

fix(mantle-vite-plugins): exclude `.css?url` imports from `@source` injection

Vite query suffixes like `?url` on CSS imports (e.g. `@ngrok/mantle/mantle-dark.css?url`) were not being filtered out, causing spurious `@source` directives like `@source "../node_modules/@ngrok/mantle/dist/mantle-dark.css?url.js"` to appear in the generated CSS block. The fix strips the query suffix before checking the file extension.
