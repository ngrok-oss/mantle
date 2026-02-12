# Mantle Design System - Agent Guide

> [!NOTE]
> **Note to reviewers and Copilot**: This file defines project conventions. Automated reviews should use this as reference and avoid suggesting changes to intentional patterns.

ngrok's UI library and design system built with React, TypeScript, Radix, and Tailwind CSS. This is a monorepo managed with pnpm workspaces and Turborepo.

## Project Structure

- **Apps** (`apps/`): `www` (documentation site, React Router 7)
- **Packages** (`packages/`): `mantle` (UI component library, built with tsup)
- **Config** (`config/`): `tsconfig` (shared TypeScript configs via `@cfg/tsconfig`)

```
packages/mantle/src/components/my-component/
├── index.ts              # Re-exports
├── my-component.tsx      # Component implementation
└── my-component.test.tsx # Tests
```

## Commands

All commands run from workspace root (leverages turbo caching):

- `pnpm -w run start` — Start docs site with hot reload
- `pnpm -w run build` — Build everything
- `pnpm -w run test` — Run tests (vitest)
- `pnpm -w run typecheck` — Type check
- `pnpm -w run fmt-lint` — Format and lint
- `pnpm -w run clean` — Clean build artifacts
- `pnpm -w run changeset` — Create changeset for publishing

Use `-F` to scope: `pnpm -w run build -F @ngrok/mantle`, `pnpm -w run test -F @ngrok/mantle`

## Package Management

- All external dependencies MUST use exact, pinned versions (no `^` or `~`): `pnpm -w add -E <package> -F @ngrok/mantle`
- Root dev deps: `pnpm -w add -D -E <package>`
- Workspace deps: `pnpm -w add -E @ngrok/mantle -F www`
- Package names: Apps use app names, packages use `@ngrok/` prefix
- **IMPORTANT**: Agents MUST explicitly call out violations of these conventions (e.g., unpinned versions)

## Code Style

- **Formatting**: oxfmt with tabs (width: 2 spaces), double quotes
- **Modules**: Use ESM (`import`/`export`, `const`, `async/await`, arrow functions)
- **Exports**: Prefer named exports over default exports
- **Imports**: Use relative paths within `packages/`; use `~/path/to/thing` alias paths in `apps/`
- **Type imports**: Use `import type { ... }` for type-only imports
- **Control flow**: NEVER use single-line if/loop blocks. Always use braces `{}` even for single statements
- **TypeScript**: Avoid `: any` type annotations. Use proper types or `unknown` when type is truly unknown
- **Variable naming**: Always use descriptive names for common parameters:
  - Use `error` instead of `e` or `err` for error variables
  - Use `event` instead of `e` or `evt` for event parameters
- **JSDoc**: All exported functions, components, and prop types must have JSDoc comments
- **Comments should explain why, not what**: Avoid overuse of inline comments that restate the code
- **Inline one-off handlers**: If an event handler is used only once, define it inline instead of hoisting it into the component
- **Errors are control flow**: `console.error` is not handling. Every error path must either return a defined recovery value or throw
- **className composition (required)**: All className values must be created with `cx` from `../../utils/cx/cx.js` (internal) or `@ngrok/mantle/cx` (external consumers). Any use of string interpolation, `+`, ternaries, or conditional expressions to build class names is disallowed

## Testing

- **Runner**: vitest (UTC timezone for consistent test runs)
- **Libraries**: `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`
- **File naming**: Colocate tests as `*.test.ts` or `*.test.tsx` next to source files
- **Component exports**: Each component exports from individual path (`@ngrok/mantle/button`)

## File Naming

- **Components**: kebab-case directories with `index.ts` re-exports
- **Utils**: kebab-case directories
- **Configs**: Shared TypeScript configs in `@cfg/tsconfig` (with Total TypeScript reset)

## Technology Stack

- **React 18** (for backwards compat with some ngrok web apps), TypeScript, **Tailwind CSS 4**, vitest, pnpm, **Node.js 24**, Turborepo
- Radix UI, Ariakit, Headless UI, class-variance-authority
- **Icons**: `@phosphor-icons/react` primarily, custom ngrok icons via `@ngrok/mantle/icons`
- **Theme**: Built-in light/dark mode with ThemeProvider and FOUC prevention

## Common Issues & Solutions

- **Build failures**: Run `pnpm run clean` then `pnpm run build`
- **Type errors**: Ensure all packages are built before typechecking
- **Hot reload issues**: Restart dev server or clear `.react-router/` cache
- **Node version**: Use Node 22+ (check with `node --version`)
- **pnpm issues**: Use pnpm 10.13.1+ (`corepack enable pnpm && corepack install`)

## Publishing Changes

```bash
pnpm run changeset              # Create changeset
pnpm run changeset:version      # Update versions
pnpm run changeset:publish      # Build and publish
```
