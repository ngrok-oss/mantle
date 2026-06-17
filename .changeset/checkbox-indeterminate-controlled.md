---
"@ngrok/mantle": patch
---

Fix two issues with `Checkbox`'s indeterminate handling:

- A controlled checkbox toggling through `"indeterminate"` (e.g. a table "select all" header cycling unchecked → indeterminate → checked) logged React's "changing a controlled input to be uncontrolled" warning. The indeterminate frame now keeps `checked` a boolean, so the input stays controlled for its entire lifetime.
- A controlled `checked="indeterminate"` set on mount did not render the indeterminate visual — two competing effects clobbered each other. The native `indeterminate` DOM property is now driven by a single effect keyed on the effective checked state, so it renders correctly on first paint and on every update.

Add `selectAllChecked` to `@ngrok/mantle/checkbox` — a helper that resolves the tri-state `checked` value (`true` / `"indeterminate"` / `false`) for a "select all" checkbox from `{ allSelected, someSelected }` selection counts, ready to pass straight to `Checkbox`. Encapsulates the correctness-prone tri-state branch every multi-select list reinvents. Also exports the `CheckedState` type.
