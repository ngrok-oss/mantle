---
"@ngrok/mantle": patch
---

multi-select.tsx
+ close the combobox popover on `Escape` at the multi-select trigger level

dialog/primitive.tsx
+ centralize `onInteractOutside` / `onPointerDownOutside` prompt-protection
+ add `preventCloseOnNestedPopupEscape(...)`
+ detect focused nested popup owners via `aria-expanded="true"` + `aria-controls`
+ only prevent parent modal close while the controlled popup is still mounted/open
+ add JSDoc documenting the first-ESC / second-ESC flow

dialog.tsx
- remove duplicated `onInteractOutside` / `onPointerDownOutside` wrappers

sheet.tsx
- remove duplicated `onInteractOutside` / `onPointerDownOutside` wrappers

alert-dialog.tsx
- remove duplicated `onInteractOutside` / `onPointerDownOutside` wrappers
