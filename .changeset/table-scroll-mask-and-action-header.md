---
"@ngrok/mantle": patch
---

Fix horizontal scroll masking on `Table` and `DataTable` and add `DataTable.ActionHeader`.

- `Table.Root` now keeps its border and rounded corners crisp at every scroll position by splitting into an outer wrapper (border, rounded, background) and an inner scroll container (mask + scrolling). The scroll container uses `overflow-x: auto; overflow-y: clip; overscroll-behavior: none` so tables only scroll horizontally and no longer bounce.
- The scroll fade now applies to the scrolling table content (not the container chrome), with both left and right edges fading based on scroll position. When the table contains a sticky right column (`DataTable.ActionCell` / `DataTable.ActionHeader`), the container's right-side fade is suppressed so the pinned column stays fully opaque.
- `DataTable.ActionCell` renders a left-side gradient `::before` so scrolling content appears to fade underneath the pinned action column, with per-row gradients that connect across row dividers. The cell now uses `bg-inherit` to track its row's background (including hover state) and cover scrolling content that would otherwise bleed through.
- New `DataTable.ActionHeader` component — a sticky `<th>` that pairs with `DataTable.ActionCell` so the pinned action column stays visually aligned across the header row and every body row during horizontal scroll.

See `migrations/data-table-action-header-migration.md` for guidance on updating existing data tables to use `DataTable.ActionHeader`.
