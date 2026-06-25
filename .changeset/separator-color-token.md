---
"@ngrok/mantle": patch
---

fix(mantle): add a `separator` color token and use it for all dividers

Adds a semantic `separator` color token (`bg-separator` / `border-separator` /
`text-separator`, …) that resolves per theme to what `Separator` already
rendered: `gray-500/20` (light), `gray-600/20` (dark), and `black` (high
contrast). Every divider now points at this single token instead of hard-coding
the color:

- `Separator` (and everything built on it — `DropdownMenu.Separator`,
  `Command.Separator`, `MultiSelect.Separator`, `Combobox.Separator`,
  `Select.Separator`, `Sheet`, pagination) — refactor only, no visual change.
- `Accordion` item dividers — previously `border-card-muted` (solid neutral),
  now match the separator color.
- `OtpInput.Separator` — previously `text-muted`, now `text-separator`.

Consumers can use `border-separator` / `bg-separator` for their own dividers
instead of replicating the color.
