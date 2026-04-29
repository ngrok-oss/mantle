---
"@ngrok/mantle": patch
---

Expand the machine-readable surface for AI agents.

New endpoints on the docs site:

- `/api/package.json` — version, peer/dev dependency ranges, and the sorted list of importable `@ngrok/mantle/*` subpaths.
- `/api/changelog.json` — `CHANGELOG.md` parsed into one entry per version with PR/commit/author metadata broken out by semver bump.
- `/api/search-index.json` — flat sorted array spanning components, hooks, and utilities, with keyword tokens derived from each name + summary.
- `/api/schema.json` — JSON Schema (draft-07) definitions for every `/api/*.json` payload.

Each entry in `/api/components.json` now also carries a `jsdoc` field with the first sentence of the source JSDoc on the component's primary export.

The published package now ships `@ngrok/mantle/agent.json` and `@ngrok/mantle/llms.txt` — pointers to the live endpoints above plus the package's own subpath inventory — for agents working without network access.
