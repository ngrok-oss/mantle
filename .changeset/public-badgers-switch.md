---
"@ngrok/mantle": patch
---

move mantle.css to src/ and improve HMR

- Moved `mantle.css` from `packages/mantle/assets/` to `packages/mantle/src/` to enable proper hot module reload during development
- Updated `mantle.css` package export to use source conditions (`@ngrok/mantle/source` → `src/mantle.css`, `default` → `dist/mantle.css`), matching the pattern used for component exports
- Added build step to copy `mantle.css` to `dist/` directory for production builds
