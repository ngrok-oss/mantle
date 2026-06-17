---
"@ngrok/mantle": patch
---

Stop publishing source maps. The `.js.map` files were ~58% of the package's unpacked size (and compressed tarball) and embedded the full original source via `sourcesContent`, despite `src/` not being shipped. The published tarball drops from ~431 KB to ~178 KB.

This affects nothing consumers import at runtime. The typed `.d.ts` surface (with its JSDoc and `@example` blocks) and the agent-discovery artifacts (`dist/agent.json`, `dist/llms.txt`) are unchanged; only stepping into mantle's original source in a debugger is no longer possible.
