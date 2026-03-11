---
"@ngrok/mantle": patch
---

Export `fixMediaScriptContent` from `@ngrok/mantle/theme`. This function returns the raw JavaScript string for the inline `<script>` that fixes theme stylesheet `media` attributes — useful for legacy Go services and other non-React servers that need to inline it directly into SSR HTML.
