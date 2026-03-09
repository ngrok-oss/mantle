---
"@ngrok/mantle": patch
---

fix(code-block): restore syntax highlight token styles to mantle.css

The `.token.*` styles were moved out of `mantle.css` into a colocated
`syntax-highlight.css` imported as a side-effect in `code-block.tsx`.
However, tsdown extracts CSS imports into a sidecar file without emitting
a corresponding `import` in the bundled JS, so consuming apps never loaded
the styles. Moved the token styles back into `mantle.css` where they are
reliably included.
