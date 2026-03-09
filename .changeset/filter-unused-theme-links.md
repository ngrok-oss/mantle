---
"@ngrok/mantle": patch
---

**Breaking:** `MantleStylesheets` is renamed to `MantleStyleSheets` (and `MantleStylesheetsProps` → `MantleStyleSheetsProps`).

The component no longer imports CSS `?url` paths internally. Instead, pass the browser-accessible CSS URLs as required props using the new `mantleStyleSheetUrls` helper, which collects the three Vite `?url` imports into a spreadable object:

```tsx
// Before
import { MantleStylesheets } from "@ngrok/mantle/theme";
<MantleStylesheets nonce={nonce} ssrCookie={ssrCookie} />

// After
import darkCssUrl from "@ngrok/mantle/mantle-dark.css?url";
import darkHighContrastCssUrl from "@ngrok/mantle/mantle-dark-high-contrast.css?url";
import lightHighContrastCssUrl from "@ngrok/mantle/mantle-light-high-contrast.css?url";
import { mantleStyleSheetUrls, MantleStyleSheets } from "@ngrok/mantle/theme";

const themeUrls = mantleStyleSheetUrls({ darkCssUrl, lightHighContrastCssUrl, darkHighContrastCssUrl });

<MantleStyleSheets {...themeUrls} nonce={nonce} ssrCookie={ssrCookie} />
```

This fixes a build error (`Unknown file extension ".css"`) in apps using React Router's SSR build, where `?url` imports inside node_modules are not transformed by Vite.

When `forceTheme` is set, only the link tag for that theme is rendered — the others are omitted to avoid unnecessary network requests.
