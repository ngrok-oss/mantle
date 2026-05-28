---
"@ngrok/mantle": patch
---

Lint cleanup round across `@ngrok/mantle`. No public-API changes.

- `Checkbox`: the underlying `<input>` no longer receives both `checked` and `defaultChecked` at once (React would warn about this). The component now passes exactly one based on whether it's in controlled mode (`checked !== undefined`). Indeterminate behavior is unchanged for both controlled and uncontrolled usage — the DOM `indeterminate` flag is still applied via a ref effect.
- Context providers in `Input`, `CursorPagination`, `Dialog`, `Tabs`, `Select`, `Toast`, and the `www` navigation context now memoize their `value` prop via `useMemo`, and `HorizontalSeparatorGroup` lifts its constant value to module scope. This prevents unnecessary re-renders of context consumers when the providing component re-renders for unrelated reasons.
- `ThemeProvider`: the cross-tab `BroadcastChannel` listener now uses `addEventListener("message", …)` instead of assigning to `onmessage`, matching the modern event API used elsewhere in the file. Cleanup still goes through `BroadcastChannel.close()`.
- Internal: tightened `vi.fn` generics in tests, normalized JSDoc tag names (`@fileoverview` → `@file`), tightened a few helper JSDocs, and added inline lint-disables with justifications where rules were false-positives (notably `button-has-type` on `<button type={type}>` and `require-post-message-target-origin` on `BroadcastChannel.postMessage`).
