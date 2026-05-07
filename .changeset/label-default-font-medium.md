---
"@ngrok/mantle": patch
---

`Label` now defaults to `font-medium` when it doesn't wrap an interactive form control, and inherits weight when it does (e.g. `<Label><Input /></Label>`). The default is applied through a `:where()`-wrapped selector so the rule's total specificity is `(0,0,0)` — a user-supplied `font-bold` / `font-normal` / `font-semibold` overrides it cleanly without needing the `!` important modifier.

Detection covers `<input>`, `<textarea>`, `<select>`, `<button>`, and `[contenteditable]` descendants, which transitively covers mantle's checkbox/radio (real `<input>`), select/multi-select/menu triggers (real `<button>`), and any third-party control built on those primitives. The `[contenteditable]` attribute selector would normally raise the rule's specificity to `(0,1,0)` and tie with a bare utility class — wrapping the whole selector in `:where()` flattens it back to `(0,0,0)` so user overrides still win.
