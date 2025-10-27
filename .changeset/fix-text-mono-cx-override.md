---
"@ngrok/mantle": patch
---

fix: enable text-mono font-size overrides with cx helper

Extended the `cx` helper's tailwind-merge configuration to recognize `text-mono` as a font-size class. This allows users to properly override the monospace font size in Table.Cell and CodeBlock components using standard Tailwind font-size utilities like `text-base`, `text-xl`, etc.

**Before:**
```tsx
<Table.Cell className="text-base">INV001</Table.Cell>
// Both text-mono and text-base were present in className
// text-mono took precedence → 13px font-size
```

**After:**
```tsx
<Table.Cell className="text-base">INV001</Table.Cell>
// tailwind-merge properly removes text-mono
// text-base takes effect → 16px font-size
```

**Technical Details:**
- Added `text-mono` to the `font-size` class group in `extendTailwindMerge` config
- Added tests verifying proper class merging behavior
- Updated table docs example to demonstrate font-size override
