---
"@ngrok/mantle": patch
---

Make `Field.Item` the single source of truth for the control's `name`, `id`, `aria-*`, and `validation`. When a control is wrapped in `Field.*`, all four are owned by the surrounding `Field.Item` and overwrite anything passed on the child or `Field.Control`. To override, set the prop on `Field.Item` itself; to opt out of the contract entirely, render the control without `Field.Control`. The pit of success is "use `Field.*` and let it wire everything up."

**Required `name` on `Field.Item`, automatic id/htmlFor**

- `Field.Item` now requires a `name: string` prop.
- `Field.Control` splats the surrounding `Field.Item`'s `name` and a stable generated `id` onto its focusable child. Any `name` or `id` passed on the child is intentionally overwritten.
- `Field.Label` defaults its `htmlFor` to that same generated id when rendered inside a `Field.Item`, so labels wire to their controls without a manual `htmlFor` / `id` pair (or a separate `useId()` call). Pass `htmlFor` on `Field.Label` to opt out (e.g. when the focusable element is rendered outside of `Field.Control`).

This is a particularly tight fit with TanStack Form's `field.name`:

```tsx
<form.Field name="email">
	{(field) => (
		<Field.Item name={field.name}>
			<Field.Label>Email</Field.Label>
			<Field.Control>
				<Input
					type="email"
					value={field.state.value}
					onBlur={field.handleBlur}
					onChange={(event) => field.handleChange(event.target.value)}
				/>
			</Field.Control>
		</Field.Item>
	)}
</form.Field>
```

**One policy for overrides**

`Field.Control` no longer accepts a `validation` prop, and no longer reads `aria-invalid` off the child element. Set `validation` on `Field.Item` to opt out of inferred error state from rendered `Field.Errors` / `Field.ErrorList`. This collapses the previous three policies (child wins for `aria-invalid`, context wins for `aria-describedby` / `aria-errormessage`, `Field.Control` wins for `validation`) into one: `Field.Item` owns it.

**`Field.Control` around compound widgets (`Select`, etc.)**

`Field.Control` now publishes the resolved ARIA props through a new internal `FieldControlContext`. `Select.Trigger` consumes it for `aria-describedby` / `aria-errormessage` (which `Select.Root` doesn't forward to its inner trigger), so the natural composition

```tsx
<Field.Item name="fruits">
	<Field.Label>Fruits</Field.Label>
	<Field.Control>
		<Select.Root>
			<Select.Trigger>
				<Select.Value placeholder="Select a fruit" />
			</Select.Trigger>
			<Select.Content>…</Select.Content>
		</Select.Root>
	</Field.Control>
</Field.Item>
```

works end-to-end — `name` lands on `Select.Root`'s hidden form input, and the field's helper / error IDs reach the focusable trigger button.

`Slider` now forwards `aria-label` / `aria-labelledby` to its rendered thumb(s), and its Field examples pass an explicit `aria-label`. Slider thumbs are ARIA slider widgets rather than native labelable controls, so `Field.Label` provides the visible caption while the slider prop provides the accessible thumb name.

**Duplicate error messages**

`Field.Errors` and `toErrorMessages` now collapse duplicate validation messages after trimming. This keeps repeated validator output — for example the same Zod message present in multiple TanStack Form validation phases — from rendering the same error twice.
