---
"@ngrok/mantle": patch
---

Add `Field.LabelText` — static, label-styled text for `Field.Item` rows that do **not** caption a focusable form control. Renders a `<p>` (not a `<label>`) with the same `text-strong text-sm font-medium` typography as `Field.Label`, so read-only rows (owner cards, derived values, system-managed metadata inside sheets and detail panels) compose cleanly alongside real form fields without misrepresenting themselves as control captions. Supports `asChild` for polymorphic rendering. For rows with a real focusable control, keep using `Field.Label` so the label-to-control association stays wired.

```tsx
<Field.Item name="owner">
	<Field.LabelText>Owner</Field.LabelText>
	<CredentialOwnerCard owner={owner} />
	<Field.Description>The user or service user that owns this API key.</Field.Description>
</Field.Item>
```
