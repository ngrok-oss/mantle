---
"@ngrok/mantle": patch
---

Address review feedback from PR #1000.

- `inView`: call `observer.unobserve(element)` before `observer.disconnect()` in the cleanup function for cleaner teardown.
- `useInView`: restore intentional omission of `isInView` from `useEffect` deps (matching the upstream motion implementation); replace the bare eslint-disable comment with an explanation of why including `isInView` would cause the observer to restart on every visibility change.
- `tsup.config.ts`: exclude `compose-refs` and `sorting` from individual build entries since they are now consolidated into the `./utils` export.
- `hooks.mdx`: fix missing `forwardRef` import in the `useComposedRefs` code example.
- `hooks.mdx`: remove `inView` from the hooks page; it now has a dedicated page under the new Utils section.
- `hooks.mdx`: add a live interactive demo for `useInView`.
- Changeset: correct version bump type to `major` (breaking changes) and clarify `useComposedRefs` migration path to `@ngrok/mantle/hooks`.
- Add `use-in-view.test.tsx` test coverage for the `useInView` hook.
- Add a Utils section to the docs site with dedicated pages for `cx`, `color`, `inView`, `composeRefs`, and `sorting`.
