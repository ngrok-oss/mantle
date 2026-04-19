---
"@ngrok/mantle": patch
---

Anchors (`<a>` elements, including those rendered by the `Anchor` component) that are descendants of `Alert.Root` now inherit the alert's variant text color (e.g. `text-warning-700` inside a warning alert) and are underlined at all times — not just on hover. This keeps inline links visually coherent with the surrounding alert copy while still marking them as links.

**Visual change**: consumers that currently render links inside `Alert.Root` will see those links shift from the default `text-accent-600` to the alert's priority color, and the underline will be persistent rather than hover-only.
