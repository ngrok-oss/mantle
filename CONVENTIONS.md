# Conventions

Single source of truth for code style, patterns, and conventions in the Mantle design system monorepo. All rules below are mandatory — call out and fix violations.

## Files & Modules

- File naming: kebab-case (except framework-required filenames like `entry.server.tsx`, `react-router.config.ts`)
- ESM only: `import`/`export`, `const`, `async/await`, arrow functions
- Prefer named exports; use `import type` for type-only imports
- Imports: relative paths in `/packages`, `~/path/to/thing` aliases in `/apps`

## Formatting & Linting

- Formatter: oxfmt (tabs, tabWidth 2, double quotes) — see `.oxfmtrc.json`
- Linter: oxlint — see `.oxlintrc.json`
- Never biome, prettier, or eslint

## Code Quality

- Always brace control flow — no single-line `if`/`for` bodies
- Descriptive names — `error` not `e`, `event` not `evt`, `element` not `el`. Widely-known initialisms (URL, CSS, SSR) are fine.
- JSDoc on every function, method, component, and prop type.
- Comments explain _why_, not _what_. Don't restate the code.
- Inline single-use event handlers; don't hoist them
- Errors are control flow — `console.error` is not handling. Every error path returns a recovery value or throws.
- Avoid nested ternaries: Prefer early returns or component-based branching over nested ternaries. A single ternary is fine; nesting them harms readability
- Never use `React.FC` / `FC` — use inline function types
- Prefer named options objects over positional params: any boolean param, 3+ params, or 2 params when call sites wouldn't be self-evident (`fn({ enabled: true })`, not `fn(true)`)

### TypeScript

- Strict mode enabled. Shared configs from `@cfg/tsconfig`.
- No `any` — use `unknown` and narrow it
- No `interface` — use `type` (covers all shapes, no declaration merging, expands inline in IntelliSense)
- No non-null assertions: The postfix `!` operator (`value!`) is forbidden. Use proper null checks, early returns, or restructure the code to narrow the type instead
- No type assertions: The `as` operator is forbidden in application code. Do not use `value as Type`. The only allowed exceptions are `as const` (to narrow literal types) and inside a dedicated type guard implementation. Type assertions must never be used to silence TypeScript errors or bypass proper type modeling.

## className Composition

```tsx
import { cx } from "@ngrok/mantle/cx";

// ✅
<div className={cx("foo", condition && "bar", { baz: isActive })} />

// ❌ no string interpolation, +, or ternaries inside className
<div className={`foo ${condition ? "bar" : ""}`} />
```

## Testing

- Runner: Vitest. Two modes — happy-dom (default, no per-file Playwright startup) and real-browser Chromium via Playwright.
- Libraries: `@testing-library/react`, `@testing-library/dom`, `@testing-library/jest-dom`
- File naming, colocated with source:
  - happy-dom: `*.test.{ts,tsx}`
  - browser: `*.browser.test.{ts,tsx}`
- No `*.test.*` under `app/routes/` — React Router treats that as route modules. Put route-behavior tests under the owning `app/features/*` area.
- No snapshot tests of rendered HTML. Use declarative assertions (`getByRole`, `getByText`, `toBeInTheDocument`). `toMatchInlineSnapshot` is OK for serialized data shapes only.
- Business logic MUST be thoroughly tested, including edge cases (transformations, validation, conditional rendering, state machines, parsing/formatting).
- Every bug fix adds a regression test that fails before the fix and passes after — unless genuinely infeasible (document why in the PR).

### When to reach for browser mode

Default to happy-dom. Reach for browser mode only when the test depends on a real-browser API happy-dom doesn't (correctly) implement:

- Web Animations API (`getAnimations`, `Animation.finished`)
- IntersectionObserver / ResizeObserver
- Inline `<script>` execution (3rd-party SDK bootstrappers like GTM/Ketch)
- `<noscript>` parsing — happy-dom drops noscript children
- Real layout, scroll, `:focus-visible`, real `getBoundingClientRect` / `getComputedStyle`
- Clipboard API, Drag-and-drop / `DataTransfer`, `FileReader`
- Pointer/touch events, real hover, focus-within
- Selection / Range / `contenteditable` caret behavior
- HTML5 form constraint validation end-to-end
- `matchMedia` + `prefers-*` reactivity
- Native `<dialog>.showModal()` / Popover API
- IndexedDB, BroadcastChannel, cross-tab `storage` events, MessageChannel
- Canvas 2D / WebGL / OffscreenCanvas
- Real `requestAnimationFrame` timing

If the test only touches DOM structure, ARIA, event handlers, or pure state — stay in happy-dom.

## Package Management

- All external deps use exact pinned versions (no `^` / `~`). Single-use: `pnpm add -E <package>`.
- Shared deps go through the `catalog:` in `pnpm-workspace.yaml`, then referenced as `catalog:`. Add to catalog first if the dep will be used across packages.
- For `@pkg/*` workspace packages, use `catalog:` in `devDependencies` and `peerDependencies` (not `dependencies`) so apps install the dep themselves and avoid duplicates.
