---
"@ngrok/mantle": patch
---

fix(mantle): raise `Sheet` to `z-50` so it can stack over `Dialog`

`Sheet`'s overlay and content were pinned at `z-40` while `Dialog` (and
`AlertDialog`, and every popover-family primitive) live at `z-50`. That fixed
ordering meant a `Dialog` always painted over a `Sheet` regardless of open
order — opening a `Sheet` from inside a `Dialog` rendered the `Sheet` *behind*
it.

`Sheet` now matches `Dialog` at `z-50`. Both render into portals appended to
`<body>`, so with equal z-index the visual stacking follows portal mount
order — the most recently opened layer sits on top ("last opened wins"), the
conventional modal-stacking behavior. This is the same mechanism that already
lets `z-50` popovers/dropdowns/selects layer correctly over a `Dialog`.

Note: stacking a `Sheet` over a `Dialog` now compounds both backdrops (each
renders a full-screen `bg-overlay backdrop-blur-xs`), dimming the layer
beneath.

Component docs and source JSDoc now call out Mantle's shared `z-50` floating
layer across `Dialog`, `Sheet`, `AlertDialog`, `Popover`, `Tooltip`,
`HoverCard`, `DropdownMenu`, `Select`, `Combobox`, and `MultiSelect`. The
JSDoc coverage includes each floating component's root export, compound
component namespace export, and floating content export such as `.Content` or
`DropdownMenu.SubContent`.
