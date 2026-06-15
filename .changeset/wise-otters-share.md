---
"@ngrok/mantle": patch
---

Surface each component's JSDoc `@example` blocks in the agent-facing component manifest (`/api/components.json`), giving agents copy-pasteable canonical usage without a network lookup. Fix two malformed examples caught in the process: `Sheet` examples used `opOpenChange` instead of `onOpenChange`, and `SandboxedOnClick`'s example was missing its closing code fence. Also documents the `Field` slot-order anti-pattern — help text (`Field.Description`) renders below `Field.Control`, not above it.
