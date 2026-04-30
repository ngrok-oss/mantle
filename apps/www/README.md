# Mantle Docs App (`apps/www`)

Production documentation site for `@ngrok/mantle` (ngrok's React UI library and design system).

- Canonical site: `https://mantle.ngrok.com`
- Stack: React Router 7, SSR, MDX docs
- Goal: fast, crawlable docs pages with stable metadata

## Local Development

From a fresh clone, run `./scripts/setup` from the repo root first to provision Node, pnpm, and dependencies (see [CONTRIBUTING.md](../../CONTRIBUTING.md)). Then:

```bash
pnpm --filter www start
```

For non-interactive environments without shell activation:

```bash
mise x -- pnpm --filter www start
```

## Build + Serve

```bash
pnpm --filter www build
pnpm --filter www serve
```
