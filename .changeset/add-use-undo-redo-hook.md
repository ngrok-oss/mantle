---
"@ngrok/mantle": patch
---

Add `useUndoRedo` hook to `@ngrok/mantle/hooks`.

**New hook at `@ngrok/mantle/hooks`:**

- `useUndoRedo<T>()` — A generic undo/redo hook backed by a reducer. Maintains two stacks (undo and redo). Call `push` before mutating state to snapshot the current value. Call `undo`/`redo` with the current value to swap it with the previous/next snapshot. Returns `{ canUndo, canRedo, push, undo, redo }`.
