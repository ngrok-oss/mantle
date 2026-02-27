---
"@ngrok/mantle": minor
---

Add `@ngrok/mantle/utils` export and new `useInView` hook.

**Breaking changes:**

- `@ngrok/mantle/compose-refs` is removed. Import `composeRefs` from `@ngrok/mantle/utils` and `useComposedRefs` from `@ngrok/mantle/hooks` instead.
- `@ngrok/mantle/utils/sorting` is removed. Import sorting utilities from `@ngrok/mantle/utils` instead.

**New exports at `@ngrok/mantle/utils`:**

- `inView(element, onStart, options)` — framework-agnostic `IntersectionObserver` helper that calls `onStart` when an element enters the viewport. If `onStart` returns a function, it is called when the element leaves. Returns a cleanup function that disconnects the observer.
- `composeRefs` and `useComposedRefs` — moved from `@ngrok/mantle/compose-refs`.
- All sorting utilities — moved from `@ngrok/mantle/utils/sorting`.

**New hook at `@ngrok/mantle/hooks`:**

- `useInView(ref, options)` — React hook that returns `true` when the referenced element is visible in the viewport. Supports `root`, `margin`, `amount`, `once`, and `initial` options.
