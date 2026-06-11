---
"@ngrok/mantle": minor
---

fix(mantle): Dialog.Footer renders children in DOM order

`Dialog.Footer` previously applied `flex-row-reverse`, laying its children out
right-to-left so the DOM order was the visual mirror of the source. It now uses
`flex justify-end` and renders children in DOM order, matching `Sheet.Footer`
and `AlertDialog.Footer`. This also makes keyboard tab order follow visual
order.

**Breaking visually:** footers with two or more children that relied on the
reversal will now render in the opposite order. Reverse the direct children of
each affected `Dialog.Footer` (conventionally secondary/cancel first, primary
last) to preserve the previous appearance. See the migration guide at
https://mantle.ngrok.com/migrations/dialog-footer-dom-order-migration.
