---
"@ngrok/mantle": patch
---

Fix `useComposedRefs` returning a thunk (`() => (node) => void`) instead of a ref callback, which meant the composed ref never actually received the DOM node. The hook now returns a stable ref callback that reads the latest refs via an internal ref box, so passed refs stay up-to-date without causing ref thrashing on every render.
