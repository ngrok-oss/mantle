---
"@ngrok/mantle-vite-plugins": patch
---

Add `allowlist` option to `mantleTwSourcePlugin` for explicitly including mantle components in the `@source` block regardless of scanner detection. Accepts both PascalCase (`"CommandDialog"`) and kebab-case (`"command-dialog"`) component names.
