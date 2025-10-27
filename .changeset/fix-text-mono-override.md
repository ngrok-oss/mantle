---
"@ngrok/mantle": patch
---

fix: convert text-size-mono to text-mono for proper tailwind-merge support

Changed the custom `@utility text-size-mono` to a proper Tailwind theme fontSize extension `--font-size-mono`, which generates the `text-mono` utility class. This allows `text-mono` to be properly overridden by other font-size utilities like `text-base` or `text-xl` when using the `cx` helper.

**Breaking Change:** Users need to replace `text-size-mono` with `text-mono` in their code.

**Before:**
```tsx
<Table.Cell className="text-size-mono">...</Table.Cell>
```

**After:**
```tsx
<Table.Cell className="text-base">...</Table.Cell> // text-base now properly overrides the default text-mono
```
