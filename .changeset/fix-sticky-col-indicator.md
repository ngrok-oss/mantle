---
"@ngrok/mantle": patch
---

fix(table): switch to border-separate for continuous sticky column indicator

Replaced `border-collapse` with `border-separate border-spacing-0` on `Table.Element` and moved row dividers from group-level borders (`divide-y` on `<thead>`/`<tbody>`/`<tfoot>`) to cell-level borders. This prevents table cells from clipping overflow content, allowing the `StickyColIndicator` shadow strip to extend across row boundaries and render as one continuous vertical line instead of per-row segments with visible gaps.

Also changed `overscroll-none` to `overscroll-x-none` on the table scroll container so vertical page scrolling is no longer blocked when hovering over a table.
