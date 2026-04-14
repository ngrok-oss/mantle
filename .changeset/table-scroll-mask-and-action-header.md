---
"@ngrok/mantle": patch
---

Fix table horizontal scroll masking, improve scroll perf, and add `DataTable.ActionHeader`.

- **`Table.Root`**: Split into outer wrapper (border, rounded corners, background) and inner scroll container (`scroll-fade-x` mask, `overflow-x: auto`, `overflow-y: clip`, `overscroll-behavior: none`). Tables only scroll horizontally and no longer bounce.
- **Scroll fade**: Left and right edge fades driven by scroll position. Right-side fade correctly suppressed when a sticky right column is present (`DataTable.ActionCell` / `DataTable.ActionHeader`).
- **`DataTable.ActionCell`**: Replaced per-cell `box-shadow` with `bg-inherit` and a `StickyColIndicator` child span (1px divider + soft leftward gradient). Tracks the row's background including hover state.
- **`DataTable.ActionHeader`** (new): Sticky `<th>` that pairs with `DataTable.ActionCell` so the pinned action column aligns across header and body rows during horizontal scroll.
- **`useHorizontalOverflowObserver`**: Now tracks `scrolledToStart`, coalesces rapid-fire scroll/resize/mutation events via `requestAnimationFrame`, and uses `useLayoutEffect` so corrections apply before the browser paints.

See `migrations/data-table-action-header-migration.md` for migration guidance.
