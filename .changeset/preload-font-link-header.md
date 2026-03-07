---
"@ngrok/mantle": patch
---

**Add** `preloadFontLink(name: CoreFontName): string` — returns an HTTP `Link` header value that preloads a single core font. Sending preload hints as response headers lets the browser start fetching fonts before it parses any HTML, improving LCP on mobile.

**Remove** `MantleThemeHeadContent` and `PreloadCoreFonts`.

**Migration:** use `PreventWrongThemeFlashScript` in `<head>` and `preloadFontLink` in your HTTP response headers. For apps without header control, use individual `PreloadFont` elements instead.

```ts
// entry.server.tsx — send font preloads as HTTP Link headers
import { assetsCdnOrigin, preloadFontLink } from "@ngrok/mantle/theme";

responseHeaders.set("Link", [
	`<${assetsCdnOrigin}>; rel=preconnect; crossorigin`,
	preloadFontLink("roobert"),
	preloadFontLink("jetbrains-mono"),
	preloadFontLink("family-regular"),
].join(", "));
```

```tsx
// root.tsx — only the FOUC script in <head>
import { PreventWrongThemeFlashScript } from "@ngrok/mantle/theme";

<head>
	<PreventWrongThemeFlashScript nonce={nonce} />
</head>
```

```tsx
// Non-SSR fallback — no header control
import { PreloadFont, PreventWrongThemeFlashScript } from "@ngrok/mantle/theme";

<head>
	<PreventWrongThemeFlashScript nonce={nonce} />
	<PreloadFont name="roobert" />
	<PreloadFont name="jetbrains-mono" />
	<PreloadFont name="family-regular" />
</head>
```
