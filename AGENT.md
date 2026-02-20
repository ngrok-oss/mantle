# Mantle Design System - Agent Guide

ngrok's UI library and design system built with React, TypeScript, Radix, and Tailwind CSS. This is a monorepo managed with pnpm workspaces and Turborepo.

## Code Style & Conventions

@./CONVENTIONS.md

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
- `pnpm -w run lint` — Lint (oxlint)
- `pnpm -w run lint:fix` — Lint and auto-fix
- `pnpm -w run fmt:check` — Check formatting (oxfmt)
- `pnpm -w run fmt` — Format and auto-fix
- `pnpm -w run clean` — Clean build artifacts
- `pnpm -w run changeset` — Create changeset for publishing

Use `-F` to scope: `pnpm -w run build -F @ngrok/mantle`, `pnpm -w run test -F @ngrok/mantle`

## Verification

Before finishing work, run all of these from the workspace root and ensure they pass:

1. `pnpm -w run lint` — 0 errors
2. `pnpm -w run fmt:check` — 0 errors (run `pnpm -w run fmt` to auto-fix)
3. `pnpm -w run typecheck` — 0 errors
4. `pnpm -w run test` — if you modified `packages/mantle`

## Package Management

- All external dependencies MUST use exact, pinned versions (no `^` or `~`): `pnpm -w add -E <package> -F @ngrok/mantle`
- Root dev deps: `pnpm -w add -D -E <package>`
- Workspace deps: `pnpm -w add -E @ngrok/mantle -F www`
- Package names: Apps use app names, packages use `@ngrok/` prefix
- **IMPORTANT**: Agents MUST explicitly call out violations of these conventions (e.g., unpinned versions)

## Technology Stack

- **React 18** (for backwards compat with some ngrok web apps), TypeScript, **Tailwind CSS 4**, vitest, pnpm, **Node.js 24**, Turborepo
- Radix UI, Ariakit, Headless UI, class-variance-authority
- **Icons**: `@phosphor-icons/react` primarily, custom ngrok icons via `@ngrok/mantle/icons`
- **Theme**: Built-in light/dark mode with ThemeProvider and FOUC prevention

## Read-Only Directories

- **`tmp/`**: Contains reference code from other repositories. **Never modify files in `tmp/`** — treat it as read-only.

## Common Issues & Solutions

- **Build failures**: Run `pnpm run clean` then `pnpm run build`
- **Type errors**: Ensure all packages are built before typechecking
- **Hot reload issues**: Restart dev server or clear `.react-router/` cache
- **Node version**: Use Node 24+ (check with `node --version`)
- **pnpm issues**: Use pnpm 10.13.1+ (`corepack enable pnpm && corepack install`)

## Publishing Changes

```bash
pnpm run changeset              # Create changeset
pnpm run changeset:version      # Update versions
pnpm run changeset:publish      # Build and publish
```
