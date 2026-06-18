---
"@ngrok/mantle": minor
---

Add expandable-row support to `DataTable` for inline, per-row detail panels — restoring the click-to-expand record inspection pattern that the migration off `GenericTable` lost.

Three new compound parts, plus a helper, all driven by native [TanStack Table expansion state](https://tanstack.com/table/latest/docs/guide/expanding) (no invented state):

- `DataTable.RowExpandButton` — an accessible `+`/`−` toggle (`@phosphor-icons/react` Plus/Minus) for a leading `columnHelper.display` column. Renders a real `<button>` that sets `aria-expanded` and (only while expanded) `aria-controls`, stops click propagation so it never fires a row-level `onClick`, lets a consumer `onClick` veto the toggle via `event.preventDefault()`, and renders nothing when `row.getCanExpand()` is `false`.
- `DataTable.ExpandedRow` — the sibling `<tr>` holding the custom detail content. Spans every visible column (override with `colSpan`), carries the `id` that `RowExpandButton` targets via `aria-controls`, suppresses its top divider so it reads as one block with its parent row, and sits on an opaque surface so it coexists with a sticky action column. Exposes `data-expanded-content` for styling.
- `DataTable.ExpandHeader` — a narrow `<th>` for the toggle column, mirroring `DataTable.ActionHeader`.
- `expandedRowId(row)` — the exported helper that derives the shared, stable DOM id used by the toggle's `aria-controls` and the expanded row's `id`.

`DataTable.Row` now also sets `data-expanded` when its row is expanded, as a styling hook.

Add `jsonCodeBlockValue` and `jsonToShikiHtml` to `@ngrok/mantle/code-block`: an ultralight (~1 KB) client-side JSON syntax highlighter whose output is byte-for-byte identical to Mantle's server/build-time Shiki highlighting — without shipping Shiki, any grammar, or WASM to the browser. Because Mantle highlights with a CSS-variables theme, only tokenization needs to happen client-side; the colors already live in CSS. Ideal for rendering a row's underlying object as highlighted JSON inside a `DataTable.ExpandedRow` with no build-time plugin and no server roundtrip.
