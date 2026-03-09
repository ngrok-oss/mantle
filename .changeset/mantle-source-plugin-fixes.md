---
"@ngrok/mantle-vite-plugins": patch
---

`mantleSourcePlugin`: default `include` to `["app"]` instead of `["src"]`; fix pnpm workspaces generating content-addressed `.pnpm/` paths in `@source` directives by resolving `@ngrok/mantle` via the `node_modules` symlink rather than `require.resolve`
