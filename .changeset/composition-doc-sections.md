---
"@ngrok/mantle": patch
---

Add a `Composition` section to every compound component doc page showing the structural tree of its parts (ASCII art). Rename existing `asChild`-style `Composition` sections on `Badge`, `Button`, `IconButton`, `Separator`, and `SplitButton` to `Polymorphism`. Rename the `Input` children-composition section to `Child Elements` and the `Dialog` tooltip section to `Combining with a Tooltip` to avoid colliding with the new `Composition` name.

Add the same ASCII composition tree as a `@example Composition` block to the top-level namespace JSDoc of every compound component (`Accordion`, `Alert`, `AlertDialog`, `Card`, `CodeBlock`, `Combobox`, `Command`, `CursorPagination`, `DataTable`, `DescriptionList`, `Dialog`, `DropdownMenu`, `Empty`, `HoverCard`, `MediaObject`, `MultiSelect`, `Popover`, `ProgressBar`, `ProgressDonut`, `RadioGroup`, `Select`, `Sheet`, `SplitButton`, `Table`, `Tabs`, `Toast`, `Tooltip`) so consumers and LLMs see the full structural shape at a glance in IDE IntelliSense.
