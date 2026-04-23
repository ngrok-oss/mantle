---
"@ngrok/mantle": patch
---

`DataTable.Row` now auto-applies `cursor-pointer` when an `onClick` handler is provided, so consumers no longer need to add it manually. Pass a different `cursor-*` class via `className` (for example, `cursor-wait`) to override.
