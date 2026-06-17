---
"@ngrok/mantle": patch
---

Update the `DataTable` source JSDoc `@example` blocks so the regenerated `.d.ts`, `llms.txt`, and agent component manifest teach canonical patterns instead of throwaway ones: the two empty states (an `Empty` hosted in `DataTable.EmptyRow` — "no data yet" vs. "no results for the active filter", with a `Clear filters` reset) and pagination via `CursorPagination` with a page-size dropdown (replacing hand-rolled prev/next `Button`s). No runtime API changes.
