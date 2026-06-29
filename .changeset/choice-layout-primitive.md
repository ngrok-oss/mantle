---
"@ngrok/mantle": minor
---

feat(mantle): add `Choice` layout primitive

`Choice` is a reusable indicator-left / content-right layout for a single
choice — a control (checkbox, radio, switch) beside an emphasized title and an
optional de-emphasized description. Use it to pair a `Checkbox` or `RadioGroup`
option with a rich, titled label, or reach for it directly for your own rows.

```tsx
import { Checkbox } from "@ngrok/mantle/checkbox";
import { Choice } from "@ngrok/mantle/choice";

<Choice.Root name="notify">
	<Choice.Indicator>
		<Checkbox />
	</Choice.Indicator>
	<Choice.Content>
		<Choice.Label>Email</Choice.Label>
		<Choice.Description>Get notified by email.</Choice.Description>
	</Choice.Content>
</Choice.Root>;
```

- Pure layout + association: `Choice.Root` owns the control's `id` and the
  description's `id` and wires them (`htmlFor`, `aria-describedby`) without
  threading ids. Drop your own control into `Choice.Indicator` — it is cloned
  with the shared `id` / `name` / `aria-*` / `disabled`.
- `Choice.Label` renders a real `<label htmlFor>` (use when the `Choice` owns the
  labeling); `Choice.Title` renders label-less text (use when an ancestor — a
  clickable row, a Headless radio item, or a `Field.Label` — owns it). Mirrors
  `Field.Label` / `Field.LabelText`.
- **Field interop:** inside a `Field.Control`, the field's `id` / `name` /
  `aria-*` flow onto the control and the field's `aria-describedby` is merged
  (never duplicated) with the `Choice`'s own description. Outside a `Field` it
  uses its own generated ids — the two are decoupled; neither requires the other.
