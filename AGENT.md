# Mantle Design System - Agent Guide

> [!NOTE]
> **Note to reviewers and Copilot**: This file defines project structure, commands, and workflows. For code style and conventions, see [CONVENTIONS.md](./CONVENTIONS.md).

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

## Code Style & Conventions

See [CONVENTIONS.md](./CONVENTIONS.md) for the full list of code style rules and patterns.

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
