---
"@ngrok/mantle": patch
"@ngrok/mantle-server-syntax-highlighter": patch
---

Add VS Code-style fold gutters to JSON code blocks. Every multi-line `{ … }` or `[ … ]` now renders a semantic `<button>` toggle in the gutter; clicking (or focusing and pressing `Enter` / `Space`) hides the inner content while keeping the opener and closer lines visible, with a `⋯` placeholder marking the collapsed region.

- Fold ranges are computed at build time, so there is zero highlighting cost in the browser.
- All toggle interaction runs through a single delegated click handler per `<pre>` — no per-line listeners and no React re-renders. This keeps fold/unfold cheap even on JSON blobs with thousands of lines.
- New helper exports from `@ngrok/mantle/code-block` and `@ngrok/mantle/highlight-utils`: `computeJsonFoldRanges(code)` and the `FoldableRange` type.
- `decorateHighlightedHtml` accepts a new optional `foldableRanges` input. When omitted, the decorator behaves exactly as before — no fold gutter is rendered.
- JSON is the only language with fold gutters at this time; other languages render unchanged.
