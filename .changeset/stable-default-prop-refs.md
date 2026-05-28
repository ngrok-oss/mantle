---
"@ngrok/mantle": patch
---

**Breaking:** flattened the `Command.Dialog.*` namespace into top-level members on `Command`.

| Before | After |
| --- | --- |
| `Command.Dialog.Root` | `Command.DialogRoot` |
| `Command.Dialog.Trigger` | `Command.DialogTrigger` |
| `Command.Dialog.Content` | `Command.DialogContent` |

The nested `Command.Dialog` namespace was a pass-through re-export of `Dialog.Root` / `Dialog.Trigger` plus the `Command`-specific `Content` slot. The extra namespace level didn't shorten call sites, was inconsistent with every other compound in mantle (which are single-level), and the inferred-literal-of-`as const`-of-Radix-re-exports shape was brittle against `@types/react` upgrades. Flat exports type-check cleanly and resolve through stable, nameable types in the generated `.d.ts`.

Migration: replace `Command.Dialog.Root` → `Command.DialogRoot`, `Command.Dialog.Trigger` → `Command.DialogTrigger`, `Command.Dialog.Content` → `Command.DialogContent`.

Other changes in this release (no API impact):

- **Stable default prop references** in `Alert`, `Field`, and `MultiSelect`. The default `<XIcon />` for `Alert.DismissIconButton`, the default `<QuestionIcon />` for `Field.HelpTrigger`, and the default `[]` values for `MultiSelect.Root`'s `defaultSelectedValue` and `MultiSelect.TagValues`'s `lockedValues` are now hoisted to module scope so they keep referential equality across renders.
- **Dependency bumps**: `@ariakit/react` 0.4.26 → 0.4.28, `@types/react` 19.2.14 → 19.2.15, `date-fns` 4.1.0 → 4.3.0 (peer also bumped to `^4.3.0`).
