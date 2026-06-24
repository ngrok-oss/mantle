---
"@ngrok/mantle": patch
---

Rebuild the `Accordion` and graduate it from preview to a stable, production-ready component. It was a thin `@radix-ui/react-accordion` wrapper; it is now a framework-free disclosure built on plain `<div>` and `<button>` elements whose collapsed content stays in the DOM with `hidden="until-found"`, so the browser's find-in-page (⌘F) can discover and auto-expand matches inside closed sections (synced via the `beforematch` event). Accessibility mirrors a native `<details>`/`<summary>`: the item is a `role="group"` and the trigger a `<button aria-expanded>`. Supports `"single"` and `"multiple"` modes with controlled (`value` + `onValueChange`) and uncontrolled (`defaultValue`) usage. `Accordion.TriggerIcon` accepts an `svg` prop to override the default caret.

Breaking changes:

- Removed `Accordion.Heading`. Compose a rich header as a plain flex row with `Accordion.Trigger` and any sibling controls (e.g. an "Add Rule" button) directly inside `Accordion.Item` — no heading wrapper and no absolute positioning.
- `Accordion.Root` now requires `type` (`"single"` | `"multiple"`) and types `value` / `defaultValue` / `onValueChange` per mode (a `string` in single mode, a `string[]` in multiple mode). The `collapsible` prop is gone — single mode is always collapsible (use `""` for "nothing open").
