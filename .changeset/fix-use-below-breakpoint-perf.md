---
"@ngrok/mantle": patch
---

Fix `useIsBelowBreakpoint` performance regression during window resize. The `subscribe` and `getSnapshot` functions passed to `useSyncExternalStore` were recreated on every render, causing listener teardown/re-attach churn on each frame. They are now cached per breakpoint for referential stability.
