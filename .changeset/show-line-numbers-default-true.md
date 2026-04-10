---
"@ngrok/mantle": patch
"@ngrok/mantle-server-syntax-highlighter": patch
---

Default `showLineNumbers` to `true` in `mantleCode()` and `highlightWithMantleShiki()` so code blocks show line numbers by default. Single-line shell snippets (`bash`, `sh`, `shell`) default to `false` since line numbers add noise to one-liners like install commands.
