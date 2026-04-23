---
"@ngrok/mantle": patch
---

**Breaking:** `useCopyToClipboard` now returns the async copy function directly instead of a `[state, copyFn]` tuple. The internal `useState` that tracked the last copied value has been removed, eliminating an extra render per successful copy.

```tsx
// Before
const [, copyToClipboard] = useCopyToClipboard();

// After
const copyToClipboard = useCopyToClipboard();
```
