---
"@ngrok/mantle": patch
---

`mantleCode` templates now support nested fragment interpolation: interpolating another `mantleCode` value's `.code` (declared in the same module, or imported from another module) is highlighted inline at build time by the updated `@ngrok/mantle-vite-plugins`, with correct per-line rendering and no runtime substitution cost. There is no runtime API change — without the plugin, `${fragment.code}` continues to fall back to plain string interpolation.
