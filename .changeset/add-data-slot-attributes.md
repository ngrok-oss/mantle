---
"@ngrok/mantle": patch
---

Add missing `data-slot` attributes across the component library so every exported component and compound sub-part exposes a stable `data-slot="<name>"` (or `data-slot="<name>-<part>"`) styling hook. Also adds `asChild` support (via `Slot`) to `Empty.Root`, `Empty.Actions`, `Code`, `ButtonGroup`, and `Table.Root` (which `DataTable` inherits automatically).

Components updated include (non-exhaustive): `Main`, `SkipToMainLink`, `Empty`, `CodeBlock`, `Tabs`, `TextArea`, `Toast`/`Toaster`, `Separator`, `HorizontalSeparatorGroup`, `Sheet`, `Skeleton`, `Switch`, `Table`, `Label`, `MediaObject`, `Popover`, `RadioGroup`, `Select`, `Flag`, `HoverCard`, `Icon`, `SvgOnly`, `Input`/`PasswordInput`, `Kbd`, `DescriptionList`, `Dialog`, `DropdownMenu`, `DataTable`, `MetaKey`, `CursorPagination`, `ProgressBar`, and `ProgressDonut`. `HoverCard.Trigger`, `Dialog.Trigger`/`Dialog.Close`, and `DropdownMenu.Trigger` are now thin wrappers around their underlying Radix primitives so they can carry a `data-slot` attribute.

Note: `ProgressBar`'s existing `data-slot` values were renamed to follow the compound-component naming convention — `data-slot="progress"` → `data-slot="progress-bar"` and `data-slot="progress-indicator"` → `data-slot="progress-bar-indicator"`. Consumers styling against those specific values will need to update their selectors.
