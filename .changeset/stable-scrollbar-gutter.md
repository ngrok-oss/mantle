---
"@ngrok/mantle": patch
---

`Dialog.Body` and `Sheet.Body` now reserve space for the scrollbar via `scrollbar-gutter: stable`, preventing horizontal content shift when the body grows past its container and a scrollbar appears.
