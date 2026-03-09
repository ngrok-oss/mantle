# mantleTwSourcePlugin: Module Graph Approach (Deferred)

## Background

`mantleTwSourcePlugin` injects Tailwind CSS `@source` directives into the app's global CSS file for only the `@ngrok/mantle` components that are actually used, so Tailwind doesn't scan the entire mantle `dist/` directory.

The current (shipped) implementation uses a **directory scan**: it walks the directories in `include` looking for `@ngrok/mantle/<name>` import strings in source files. This works for apps where all mantle imports live directly in the scanned directories.

## The Problem

Directory scanning breaks down in monorepos where the app depends on workspace packages that themselves import mantle. Example: `apps/www` depends on `packages/ui`, and `packages/ui/src/severity.ts` imports `@ngrok/mantle/badge`. If you only scan `apps/www/app`, you miss `badge`. If you add `packages/ui/src` to `include`, you pull in _every_ mantle component imported anywhere in that package — not just the ones reachable from `apps/www`.

## Proposed Solution: `resolveId` Two-Pass

Use Vite's `resolveId` hook to intercept every `@ngrok/mantle/<name>` import that Vite actually resolves during the session. This is module-graph-aware: it only sees imports reachable from the app's entry points, including transitive imports through workspace packages, without overcounting.

### Design

**Two-pass model:**

1. **Startup (`configResolved`)** — Read the existing `@source` block from the CSS file (`parseComponentsFromCssFile`) to seed `knownComponents`. Tailwind gets a complete snapshot from the previous run immediately. On first cold start (no existing block), fall back to a directory scan of `include` to bootstrap.

2. **Session (`resolveId`)** — Intercept every `@ngrok/mantle/<name>` import specifier. Accumulate into `seenComponents`.
   - Dev: when a new component is first seen, debounce-write the CSS with `knownComponents ∪ seenComponents`
   - Prod: `closeBundle` writes `seenComponents` (precise set for this build), removing stale entries

**New helper:** `parseComponentsFromCssFile(cssFile)` in `internals.ts` — reads the existing `@source` block and extracts component names. This is the inverse of `writeSourcesToCssFile` and is already implemented and tested.

### What Was Implemented

- `parseComponentsFromCssFile` added to `internals.ts` with 5 tests (round-trip, missing file, no block, block removed)
- Plugin rewritten with `config`/`configResolved`/`resolveId`/`closeBundle` hooks
- `configureServer` file watcher removed (replaced by `resolveId`)
- README and JSDoc updated

### Known Gaps / Risks

1. **SSR double-build** (highest risk): React Router runs a client build then a server build. `closeBundle` fires twice. `seenComponents` is a shared closure variable — both builds accumulate into it. The second `closeBundle` call overwrites the first. If the _server_ build sees fewer components than the client (likely for client-only components like modals, tooltips, etc.), the CSS ends up with the server build's smaller set. This could cause missing Tailwind classes in production. Needs validation in the frontend repo.

2. **First cold start in prod CI**: On a clean checkout with no existing `@source` block, `configResolved` falls back to the directory scan (bootstrap). `closeBundle` then writes `seenComponents`. If `seenComponents` is unexpectedly empty (e.g., `resolveId` didn't fire for some reason), the guard `if (seenComponents.size === 0) return` silently no-ops, leaving the bootstrapped block on disk. The next build corrects this, but CI could ship stale state on first run.

3. **No integration test**: All tests are unit tests on `internals`. The plugin hooks (`resolveId`, `closeBundle`, `config`) are not tested against a real Vite instance. The two-pass behavior is unverified in an actual build.

4. **`resolveId` call timing in dev**: In dev, `resolveId` fires lazily as routes are visited. A user who never visits a route that imports `@ngrok/mantle/tooltip` won't get `tooltip` in the `@source` block during that session. The warm-start snapshot from the previous run covers this, but on a fresh clone + dev start, some components may be missing until that route is visited.

### Recommended Next Steps Before Shipping

1. Test in the frontend repo's `apps/www` (which has an SSR build) to validate the double-`closeBundle` behavior
2. Either: track which build (`ssr` vs `client`) fired `closeBundle` and only write on the client build, or accumulate across both and write after both complete (needs a counter or `generateBundle` approach)
3. Consider adding a Vite integration test using `vite.build()` in a temp fixture directory

## Current State

The plugin was **reverted to the simpler directory-scan + file-watcher implementation** pending resolution of the above gaps. `parseComponentsFromCssFile` remains in `internals.ts` as it will be needed when the module graph approach is revisited.
