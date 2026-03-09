---
"@ngrok/mantle": patch
---

`MantleStylesheets`: skip rendering `<link>` tags for theme stylesheets that will never apply when `forceTheme` is set, avoiding unnecessary network requests.
