---
"@ngrok/mantle": patch
---

Decompose `Command.Dialog` into a `Root`/`Trigger`/`Content` namespace.

**Breaking change**: `Command.Dialog` is now a compound namespace instead of a monolithic component. Migrate existing usage:

```diff
- <Command.Dialog open={open} onOpenChange={setOpen}>
-   <Command.Input placeholder="..." />
-   <Command.List>...</Command.List>
- </Command.Dialog>
+ <Command.Dialog.Root open={open} onOpenChange={setOpen}>
+   <Command.Dialog.Content>
+     <Command.Input placeholder="..." />
+     <Command.List>...</Command.List>
+   </Command.Dialog.Content>
+ </Command.Dialog.Root>
```

The new `Command.Dialog.Trigger` sub-component allows opening the dialog from a button without managing `open` state manually:

```tsx
<Command.Dialog.Root>
  <Command.Dialog.Trigger asChild>
    <Button type="button">Open Command Palette</Button>
  </Command.Dialog.Trigger>
  <Command.Dialog.Content>
    <Command.Input placeholder="Type a command or search..." />
    <Command.List>...</Command.List>
  </Command.Dialog.Content>
</Command.Dialog.Root>
```

Also fixes two bugs:
- `Command.Dialog` now correctly closes on Escape key press.
- `Command.Separator` now automatically hides when all adjacent groups are filtered out.
