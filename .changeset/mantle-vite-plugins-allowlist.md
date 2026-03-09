---
"@ngrok/mantle-vite-plugins": patch
---

Fix `mantleTwSourcePlugin` correctness for code-split mantle builds:

- `@source` directives now use a glob pattern (`button*.js`) so Tailwind scans both the named entry stub and the hashed code-split chunk that actually contains class strings — resolving the core issue where per-component `@source` entries produced no styles.
- Added `resolveId` hook for module-graph-aware component tracking: catches mantle imports from workspace packages outside `include` and transitive mantle-internal imports that the directory scan missed.
- Added `closeBundle` hook that writes the final component union after a production build, with SSR double-build safety (e.g. React Router) — the server build merges with the client build's set instead of overwriting it.
- Added `allowlist` option to explicitly include components regardless of scanner detection. Accepts PascalCase (`"CommandDialog"`) or kebab-case (`"command-dialog"`).
