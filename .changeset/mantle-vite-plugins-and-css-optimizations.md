---
"@ngrok/mantle-vite-plugins": patch
"@ngrok/mantle": patch
---

Add `@ngrok/mantle-vite-plugins` package and `source-all.css`, optimize `mantle.css`

**New: `@ngrok/mantle-vite-plugins`**

A new package that exports `mantleSourcePlugin` — a Vite plugin that writes targeted Tailwind `@source` directives into your global CSS file for only the `@ngrok/mantle` components your app actually imports. Scans `.ts`, `.tsx`, `.js`, `.jsx`, `.mdx`, and `.md` files. Uses a disk-write approach (required because `@tailwindcss/vite` reads CSS from disk at startup before Vite's transform pipeline runs).

**New: `@ngrok/mantle/source-all.css`**

A zero-configuration alternative to `mantleSourcePlugin`. Import it alongside `mantle.css` to tell Tailwind to scan all mantle component dist files:

```css
@import "@ngrok/mantle/mantle.css";
@import "@ngrok/mantle/source-all.css";
```

Use this for apps that import most or all mantle components. Use `mantleSourcePlugin` for apps that import a subset and want the smallest possible CSS output.

**`mantle.css` optimizations**

- Removed `@source "../dist"` — source scanning is now opt-in via `source-all.css` or `mantleSourcePlugin`
- Deduplicated `--color-gray-*` in light/dark themes using `var(--color-neutral-*)` aliases
- Removed 21 light-theme color overrides (`neutral-50`–`neutral-900`, all `red-*` shades) that were identical to Tailwind v4 defaults
- Moved ~60 semantic tokens (`--background-color-base`, etc.) from `@theme {}` to `@theme inline {}` to stop generating unused utility classes like `bg-background-color-base`
