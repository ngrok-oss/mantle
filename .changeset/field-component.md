---
"@ngrok/mantle": minor
---

Add `Field`, a compound layout primitive for a single form field. Pair with the existing mantle `<Label>` — the component intentionally does not invent a new label primitive. Every part supports `asChild`.

The default tree is a `Field.Group` of `Field.Item`s — that's all most forms need. Reach for the semantic `Field.Set` + `Field.Legend` only when the grouping itself carries semantic weight (radios, related checkboxes); a `<fieldset>` around plain unrelated inputs reads as noise to assistive tech.

Parts:

- `Field.Item` — a single form field. Stacks `Label`, control (`Input`, `Select`, `Checkbox`, etc.), and any `Field.Description` / `Field.ErrorList` siblings vertically with `gap-1.5`. Renders a plain `<div>` — no implicit ARIA role, since the `<label htmlFor>` ↔ control association already provides the right semantics for a single field.
- `Field.Group` — the default primitive for stacking multiple `Field.Item`s vertically with `gap-4`. Pure layout, no semantics.
- `Field.Set` / `Field.Legend` — a semantic `<fieldset>` + `<legend>` for grouping a set of related controls under a single accessible name. Use specifically with `RadioGroup` (one question, many answers) or related checkboxes (preference toggles, permission flags). Skip it for unrelated fields stacked together — `Field.Group` is the right call there.
- `Field.LabelRow` — horizontal flex container (`items-center`, `gap-1`) for pairing a `<Label>` with a sibling affordance like a help-icon trigger. Clicks on a `<label>` forward focus to the associated control, so an interactive button can't live inside it — `Field.LabelRow` is the way out.
- `Field.Help` / `Field.HelpTrigger` / `Field.HelpContent` — thin wrappers over `Popover` + `IconButton` + a default Phosphor `QuestionIcon` so the help-affordance pattern is a one-liner. `Popover` (not `Tooltip`) so the affordance is reachable on touch.
- `Field.Optional` — inline muted "(Optional)" suffix for placement inside the `<Label>` so screen readers announce it as part of the accessible name.
- `Field.Description` — muted body-color hint text. Sits below the control inside a `Field.Item`, or directly below a `Field.Legend` to clarify the question the legend names.
- `Field.ErrorList` / `Field.Error` — semantic `<ul>` of `<li>` validation errors. `Field.ErrorList` renders nothing when given no children, so it's safe to leave mounted while a validator produces a (possibly empty) error array.

When a `Field.Description` follows a `Field.ErrorList`, the parent's `gap-1.5` auto-collapses via `-mt-1.5` so the error list and the trailing helper read as a single tight block. Pass any margin utility on `Field.Description` to override — the rule's specificity is flattened to `(0,1,0)` so a user class wins.
