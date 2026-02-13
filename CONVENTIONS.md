# Conventions

Code style, patterns, and conventions for the Mantle design system. This is the single source of truth — all READMEs and tooling reference this file.

## File & Module Conventions

- **File naming**: kebab-case for all files and directories
- **Modules**: Use ESM (`import`/`export`, `const`, `async/await`, arrow functions)
- **Exports**: Prefer named exports over default exports
- **Imports**: Use relative paths in `packages/`, use `~/path/to/thing` alias paths in `apps/`
- **Type imports**: Use `import type { ... }` for type-only imports

## Formatting & Linting

- **Formatter**: oxfmt with tabs (tabWidth: 2), double quotes — see [`.oxcfmtrc.json`](./.oxcfmtrc.json)
- **Linter**: oxlint — see [`.oxlintrc.json`](./.oxlintrc.json)

## TypeScript

- **Strict mode**: Enabled.  
  _Why:_ Forces explicit handling of nullability and unsafe assumptions.

- **Shared configs**: Use `@cfg/tsconfig` (see `config/tsconfig/`).  
  _Why:_ One canonical baseline prevents drift across packages/apps.

- **No `any`**: `any` is forbidden. Use real types; use `unknown` when truly unknown and narrow it.  
  _Why:_ `any` disables type safety; `unknown` preserves it until proven.

- **Use `type`**: Use `type` for all declarations. `interface` is not allowed in application code.  
  _Why:_ `type` covers all shapes (unions, intersections, primitives, tuples), expands inline in IntelliSense for easier inspection, and avoids declaration merging—keeping types closed and predictable.

## Code Quality

- **Control flow**: NEVER use single-line if/loop blocks. Always use braces `{}` even for single statements
- **Variable naming**: Always use descriptive names for common parameters:
  - Use `error` instead of `e` or `err` for error variables
  - Use `event` instead of `e` or `evt` for event parameters
- **JSDoc**: All exported functions, components, and prop types must have JSDoc comments
- **Comments should explain why, not what**: Avoid overuse of inline comments that restate the code
- **Inline one-off handlers**: If an event handler is used only once, define it inline instead of hoisting it into the component
- **Errors are control flow**: `console.error` is not handling. Every error path must either return a defined recovery value or throw
- **Avoid nested ternaries**: Prefer early returns or component-based branching over nested ternaries. A single ternary is fine; nesting them harms readability
- **No non-null assertions**: The postfix `!` operator (`value!`) is forbidden. Use proper null checks, early returns, or restructure the code to narrow the type instead
- **No type assertions**: The `as` operator is forbidden in application code. Do not use `value as Type`. The only allowed exception is inside a dedicated type guard implementation. Type assertions must never be used to silence TypeScript errors or bypass proper type modeling.

## className Composition

All `className` values must be created with `cx` from `../../utils/cx/cx.js` (internal) or `@ngrok/mantle/cx` (external consumers). Any use of string interpolation, `+`, ternaries, or conditional expressions to build class names is disallowed.

```tsx
// ✅ Internal usage
import { cx } from "../../utils/cx/cx.js";

<div className={cx("foo", condition && "bar", { baz: isActive })} />

// ❌ No string interpolation, +, or ternaries
<div className={`foo ${condition ? "bar" : ""}`} />
```

## Component Structure

Components live in `packages/mantle/src/components/<component-name>/`:

```
├── index.ts              # Re-exports (public API)
├── my-component.tsx      # Implementation
└── my-component.test.tsx # Colocated tests
```

### Compound Components

Compound components use the **POJO namespace pattern** — see [`decisions/2025-07-16-compound-component-named-exports.md`](./decisions/2025-07-16-compound-component-named-exports.md) for the full rationale.

```tsx
const Select = { Root, Content, Trigger, Value };
// Usage: <Select.Root><Select.Trigger /><Select.Content /></Select.Root>
```

Every property on the namespace object must have a JSDoc comment. The namespace object should have a `displayName` for React DevTools.

## Testing

- **Runner**: Vitest (UTC timezone for consistent test runs)
- **Libraries**: `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`
- **File naming**: Colocate tests as `*.test.ts` or `*.test.tsx` next to source files

## Icons

- **Primary**: `@phosphor-icons/react`
- **Custom ngrok icons**: `@ngrok/mantle/icons`

## Theming

Built-in light/dark mode via `ThemeProvider` with FOUC prevention. Styling uses Tailwind CSS 4.

## Package Management

- All external dependencies MUST use exact, pinned versions (no `^` or `~`): `pnpm -w add -E <package> -F @ngrok/mantle`
- Package names: Apps use app names, packages use `@ngrok/` prefix
