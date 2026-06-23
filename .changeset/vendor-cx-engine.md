---
"@ngrok/mantle": patch
---

Vendor the `cx` class-merge engine and drop the `clsx` + `tailwind-merge` runtime dependencies.

`cx` is now powered by a vendored, byte-for-byte port of `clsx` + `tailwind-merge` (adapted from [`cnfast`](https://github.com/aidenybai/cnfast)), living in `src/utils/cx/vendor`. Mantle's previous `extendTailwindMerge` overrides — the `em` spacing scale (`w-em`, `p-em`, …) and the `text-mono` / `text-size-inherit` font-size utilities — are now baked directly into the vendored default config, so no extend call is needed.

- **Output is byte-identical** to the previous `clsx` + `extendTailwindMerge` implementation (guarded by a 3,200+ case parity fixture).
- **Same public API:** `cx(...inputs)` is unchanged (`(...inputs: ClassValue[]) => string`).
- **Faster**, with the largest gains on repeated re-render call sites (interned conflict keys, per-token descriptor caching, and a V8 arg cache).
- **New, additive:** `cx` can also be called as a tagged template — `` cx`px-2 px-4 ${active && "bg-blue-500"}` `` — which caches by call-site identity.

`clsx` and `tailwind-merge` are no longer dependencies of `@ngrok/mantle`. (`clsx` remains available transitively via `class-variance-authority`.)

Export `clsx` from the `@ngrok/mantle/cx` subpath alongside `cx`.
