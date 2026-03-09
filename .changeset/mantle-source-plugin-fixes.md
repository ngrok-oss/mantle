---
"@ngrok/mantle-vite-plugins": patch
---

Rename `mantleSourcePlugin` → `mantleTwSourcePlugin` (and `MantleSourcePluginOptions` → `MantleTwSourcePluginOptions`) to clarify that this plugin is strictly for generating Tailwind `@source` directives for mantle component imports; default `include` to `["app"]` instead of `["src"]`; fix pnpm workspaces generating content-addressed `.pnpm/` paths in `@source` directives by resolving `@ngrok/mantle` via the `node_modules` symlink rather than `require.resolve`
