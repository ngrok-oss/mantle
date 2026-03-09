---
"@ngrok/mantle": patch
---

Add `MantleStylesheets` component and split dark/high-contrast themes into separate CSS files

**New: `MantleStylesheets`**

A new component exported from `@ngrok/mantle/theme` that renders `<link rel="stylesheet">` tags for the dark, light-high-contrast, and dark-high-contrast theme CSS files. Each stylesheet is gated behind a `media` attribute matching its OS preference, making it non-render-blocking for users whose OS does not match.

Place it in `<head>`, immediately after `<PreventWrongThemeFlashScript>`:

```tsx
<head>
  <PreventWrongThemeFlashScript nonce={nonce} />
  <MantleStylesheets nonce={nonce} ssrCookie={loaderData?.ssrCookie} />
</head>
```

Props:

- `forceTheme?: ResolvedTheme` — force a specific theme's stylesheet to `media="all"` unconditionally (e.g. for a dark-only app)
- `ssrCookie?: string` — pass the extracted theme cookie (via `extractThemeCookie`) so the server renders the correct `media` attribute directly in SSR HTML, eliminating FOUC for users with a manually-selected non-system theme
- `nonce?: string` — CSP nonce for the inline fix script

An inline `<script>` is rendered after the `<link>` tags. It runs synchronously before first paint and corrects any `media` attributes based on `html[data-applied-theme]` set by `PreventWrongThemeFlashScript`, covering cases where `ssrCookie` is not provided. On the client, a `MutationObserver` watches `html[data-applied-theme]` to keep media attributes in sync as the user changes their theme.

**New CSS exports**

Three new CSS files are now exported from `@ngrok/mantle`:

- `@ngrok/mantle/mantle-dark.css` — dark theme custom properties
- `@ngrok/mantle/mantle-light-high-contrast.css` — light high-contrast theme custom properties
- `@ngrok/mantle/mantle-dark-high-contrast.css` — dark high-contrast theme custom properties

These files contain only CSS custom property blocks and do not need to be added to your app's `@import` chain — `MantleStylesheets` handles loading them via `<link>` tags. `mantle.css` continues to hold the light theme and all Tailwind directives and must remain in your CSS `@import` chain as before.
