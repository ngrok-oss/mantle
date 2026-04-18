---
"@ngrok/mantle": patch
"@ngrok/mantle-vite-plugins": patch
---

Internal: switch `=== undefined` / `!== undefined` checks to `== null` / `!= null` for consistency with the project's nullish-equality style. No behavior change.
