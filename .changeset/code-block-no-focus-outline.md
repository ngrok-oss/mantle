---
"@ngrok/mantle": patch
---

`CodeBlock.Code` no longer paints a browser-default focus outline on its `<pre>`, and no longer hardcodes `tabIndex={-1}` on the element.

The `tabIndex={-1}` default was a leftover workaround from when Prism.js auto-injected `tabIndex={0}` on every `<pre>` it touched. Prism was replaced with build-time Shiki, so nothing is forcing a tabindex anymore — the override is dead weight that also opted the scroll container out of Chrome's keyboard-focusable-scroller heuristic, hurting keyboard-only users on overflowing blocks. The prop is now passed through cleanly via `...props`, so consumers can still set `tabIndex={-1}` (or any other value) per instance if they want to exclude a block from the tab order.

The `outline-hidden` is paired with the tabindex change so the now-optionally-focusable `<pre>` doesn't paint the browser-default focus ring when scripted focus or scroll-container heuristics put focus on it. Nested controls (fold toggles, copy buttons) keep their own `:focus-visible` styles.
