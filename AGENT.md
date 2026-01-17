# Mantle Design System - Agent Guide

> [!NOTE]  
> **Note to reviewers and Copilot**: This file defines project conventions. Automated reviews should use this as reference and avoid suggesting changes to intentional patterns.

ngrok's UI library and design system built with React, TypeScript, Radix, and Tailwind CSS. This is a monorepo managed with pnpm workspaces and Turborepo.

> For comprehensive documentation, see [README.md](./README.md) and [mantle.ngrok.com](https://mantle.ngrok.com)

## Quick Start

```bash
# Setup (automated)
direnv allow

# Setup (manual)
curl -fsSL https://fnm.vercel.app/install | bash
fnm install
corepack enable pnpm
corepack install
pnpm install
```

## Essential Commands

### Development

```bash
# Start documentation site with hot reload
pnpm -w run start

# Build everything
pnpm -w run build

# Test everything
pnpm -w run test

# Check types
pnpm -w run typecheck

# Format & lint
pnpm -w run fmt-lint
```

### Package-Specific (use -F filter)

```bash
# Main UI library
pnpm -w run build -F @ngrok/mantle
pnpm -w run test -F @ngrok/mantle

# Documentation site
pnpm -w run start -F www
pnpm -w run build -F www
```

### Maintenance

```bash
# Clean builds
pnpm -w run clean

# Clean node_modules
pnpm -w run clean:node_modules

# Create changeset
pnpm -w run changeset
```

## Project Structure

- **Apps** (`apps/`): `www` (documentation site)
- **Packages** (`packages/`): `mantle` (UI library)
- **Config** (`config/`): `tsconfig` (shared TypeScript configs)

## File Structure Context

- **Components**: PascalCase directories with `index.ts` exports
- **Utils**: kebab-case directories
- **Test files**: `*.test.ts` or `*.test.tsx` alongside source files
- **Exports**: Individual component exports (e.g., `@ngrok/mantle/button`)
- **Configs**: Shared TypeScript configs in `@cfg/tsconfig`

## Key Conventions

- **Package names**: Apps use app names, packages use `@ngrok/` prefix
- **Commands**: Always use workspace root commands (leverages turbo caching)
- **Dependencies**: Add with `-E` flag for exact versions
- **Formatting**: oxfmt with tabs (width: 2 spaces), double quotes
- **Linting**: oxlint with TypeScript, React, and jsx-a11y plugins
- **Testing**: UTC timezone for consistent test runs

## Technology Stack

- **React 18** with **React Router 7** (docs site)
- **TypeScript 5**, **Tailwind CSS 3**, **Vitest 3**
- **pnpm 10**, **Node.js 22**, **Turborepo**
- **Radix UI**, **Ariakit**, **Headless UI**, **class-variance-authority**

## Development Context

- **@ngrok/mantle**: Component library with individual exports, built with tsup
- **www**: Documentation site using React Router 7, consumes mantle components
- **@cfg/tsconfig**: Shared configs with Total TypeScript reset
- **Component development**: Changes automatically trigger hot reload in docs site

## Common Workflows

### Adding Dependencies

```bash
# To root (dev deps)
pnpm -w add -D -E <package>

# To specific package
pnpm -w add -E <package> -F @ngrok/mantle

# Workspace dependency
pnpm -w add -E @ngrok/mantle -F www
```

### Creating Components

```bash
# Component structure
packages/mantle/src/components/my-component/
├── index.ts          # Export
├── my-component.tsx  # Component
└── my-component.test.tsx
```

### Publishing Changes

```bash
pnpm run changeset              # Create changeset
pnpm run changeset:version      # Update versions
pnpm run changeset:publish      # Build and publish
```

## Common Patterns

- **Component exports**: Each component exports from individual path (`@ngrok/mantle/button`)
- **Testing**: Vitest with @testing-library/react, runs in UTC timezone
- **Styling**: Tailwind classes with design tokens from mantle preset
- **Hot reload**: Documentation site automatically reloads when components change
- **Type checking**: Uses Total TypeScript reset for stricter types

## Common Issues & Solutions

- **Build failures**: Run `pnpm run clean` then `pnpm run build`
- **Type errors**: Ensure all packages are built before typechecking
- **Hot reload issues**: Restart dev server or clear `.react-router/` cache
- **Node version**: Use Node 22+ (`nvm install` or check with `node --version`)
- **pnpm issues**: Use pnpm 10.13.1+ (`corepack enable pnpm && corepack install`)

## Development Notes

- **Individual exports**: Components export separately for tree-shaking
- **Design system**: Based on shadcn/ui patterns with Radix, Ariakit, and Headless UI primitives
- **Documentation**: React Router 7 site with live component examples
- **Testing**: @testing-library patterns with jest-dom matchers
- **Accessibility**: oxlint includes jsx-a11y rules
- **Icons**: Uses @phosphor-icons/react primarily, with custom ngrok icons via `@ngrok/mantle/icons`
- **Theme system**: Built-in light/dark mode with ThemeProvider and FOUC prevention

---

📖 **Full documentation**: [README.md](./README.md) | [Contributing](./CONTRIBUTING.md) | [Component Docs](https://mantle.ngrok.com)
