---
"@ngrok/mantle": patch
---

Simplify several costly CSS selectors to cheaper, equivalent forms. All changes are behavior-, theming-, and a11y-preserving — no public API changes.

- **CodeBlock fold gutter** (`mantle.css` + `decorate-highlighted-html.ts`): the gutter-reservation rule no longer probes every line with a per-line relational `:not(:has(> .mantle-code-fold-toggle))` (whose style-recalc cost scaled with line count). A single per-`<pre>` `:has()` now scopes the rule, content gets the gutter margin by default, and the sparse opener lines are tagged `mantle-code-line-opener` so CSS can reset theirs. Measured in Chromium on a fold-enabled block, this removes ~0.5 ms of style-recalc at 5,000 lines and ~3.6 ms at 20,000 lines, while keeping HTML payload flat (only opener lines gain a class).
- **Command group heading** (`command.tsx`): the five `**:[[cmdk-group-heading]]:*` deep-descendant scans are now direct-child `[&>[cmdk-group-heading]]:*` selectors (cmdk renders the heading as a direct child of the group). Identical specificity, smaller match scope.
- **Command item icons** (`command.tsx`): the brittle `[&_svg:not([class*='size-'])]` / `[&_svg:not([class*='text-'])]` substring-attribute scans are replaced with `:where()`-wrapped defaults (`[:where(&_svg)]:size-5` / `[:where(&_svg)]:text-muted`), matching the `Label` precedent. Consumer icon size/color classes still override the defaults cleanly, without the substring scan or its false matches (e.g. `text-sm`).
- **HorizontalSeparatorGroup** (`separator.tsx`): the universal-descendant `[&_*:not([data-separator])]:shrink-0` is now a direct-child `[&>*:not([data-separator])]:shrink-0`. `flex-shrink` only affects direct flex items, so this collapses an unbounded subtree walk to a single parent check with no rendered difference.
