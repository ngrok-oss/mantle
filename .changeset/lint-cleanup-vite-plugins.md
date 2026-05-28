---
"@ngrok/mantle-vite-plugins": patch
---

Lint cleanup round. No behavior changes.

- Dropped a redundant `?? {}` fallback in an object spread inside `mantleCodeRehypePlugin` (`...preNode.properties` is safe to spread directly — falsy values in object spreads are no-ops).
- Tightened `vi.fn` generics in tests.
