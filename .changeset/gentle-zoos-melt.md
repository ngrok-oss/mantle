---
"@ngrok/mantle": patch
---

Enrich the offline agent-discovery artifacts that ship inside the npm package. `dist/agent.json` now embeds a compact, name-sorted component prop slice (`{ name, importPath, props: { name, type, required, default? }[] }`) under a ~40KB byte budget (falling back to pointer-only when exceeded), and gains `endpoints.tokens` (`/api/tokens.json`) and `endpoints.componentProps` (`/api/components.json`, where structured prop data is embedded under each component's `props`) pointers. The full prop artifact is now shipped verbatim as `dist/component-props.json` and exposed as a new package export, `@ngrok/mantle/component-props.json`. `dist/llms.txt` lists the new Tokens and Component props endpoints.
