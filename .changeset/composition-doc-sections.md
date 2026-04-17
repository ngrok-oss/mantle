---
"@ngrok/mantle": patch
---

Add a `Composition` section to every compound component doc page showing the structural tree of its parts (ASCII art). Rename existing `asChild`-style `Composition` sections on `Badge`, `Button`, `IconButton`, `Separator`, and `SplitButton` to `Polymorphism`. Rename the `Input` children-composition section to `Child Elements` and the `Dialog` tooltip section to `Combining with a Tooltip` to avoid colliding with the new `Composition` name.
