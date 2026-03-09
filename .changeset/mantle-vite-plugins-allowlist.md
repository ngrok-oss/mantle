---
"@ngrok/mantle-vite-plugins": patch
---

Fix `mantleTwSourcePlugin` correctness for code-split mantle builds:

- `@source` directives now emit two patterns per component — an exact entry stub (`button.js`) and a hashed-chunk glob (`button-*.js`) — so Tailwind scans both the named re-export file and the code-split chunk that actually contains class strings. A single `button*.js` glob was intentionally avoided because it would also match prefix-sharing names like `button` matching `button-group`.
- Added `resolveId` hook for module-graph-aware component tracking: catches mantle imports from workspace packages outside `include` and transitive mantle-internal imports that the directory scan missed.
- Added `closeBundle` hook that writes the precise set (directory scan ∪ `resolveId` intercepts ∪ allowlist) after a production build. SSR builds are skipped so only the client build's complete component set is written — the server build resolves fewer components and must not overwrite it.
- Added `allowlist` option to explicitly include components regardless of scanner detection. Accepts PascalCase (`"CommandDialog"`) or kebab-case (`"command-dialog"`).
