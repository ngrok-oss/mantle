---
"@ngrok/mantle": minor
---

Add `Field`, a compound layout primitive for a single form field. Pair with the existing mantle `<Label>` — the component intentionally does not invent a new label primitive. Every part supports `asChild`.

Parts:

- `Field.Item` — a single form field. Stacks `Label`, control (`Input`, `Select`, `Checkbox`, etc.), and any `Field.Description` / `Field.Error` / `Field.ErrorList` siblings vertically with `gap-1.5`. Renders `<div role="group">`.
- `Field.Set` / `Field.Legend` / `Field.Group` — semantic `<fieldset>` with `<legend>` for grouping related fields. `Field.Group` stacks `Field.Item`s with `gap-4` between rows; works standalone too when you want consistent spacing without the fieldset semantics.
- `Field.LabelRow` — horizontal flex container (`items-center`, `gap-1`) for pairing a `<Label>` with a sibling affordance like a help-icon trigger. Clicks on a `<label>` forward focus to the associated control, so an interactive button can't live inside it — `Field.LabelRow` is the way out.
- `Field.Help` / `Field.HelpTrigger` / `Field.HelpContent` — thin wrappers over `Popover` + `IconButton` + a default Phosphor `QuestionIcon` so the help-affordance pattern is a one-liner. `Popover` (not `Tooltip`) so the affordance is reachable on touch.
- `Field.Optional` — inline muted "(Optional)" suffix for placement inside the `<Label>` so screen readers announce it as part of the accessible name.
- `Field.Description` — muted body-color hint text. Doubles as a fieldset-level description when placed between `Field.Legend` and `Field.Group`.
- `Field.Error` — a single error message in `text-danger-600`.
- `Field.ErrorList` — accepts an array (e.g. `field.state.meta.errors` from TanStack Form) and renders one `Field.Error` per truthy entry; renders nothing when the list is empty.

When a `Field.Error` follows another `Field.Error`, OR when a `Field.Description` follows a `Field.Error`, the parent's `gap-1.5` auto-collapses via `-mt-1.5` so consecutive errors and the trailing helper read as a single tight block. Pass any margin utility on the trailing element to override — the rule's specificity is flattened to `(0,1,0)` so a user class wins.
