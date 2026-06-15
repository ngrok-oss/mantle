---
"@ngrok/mantle": patch
---

Improve the agent-facing surface: the structured component manifest (`/api/components.json`) now includes each component's JSDoc `@example` blocks, giving agents copy-pasteable canonical usage without a network lookup. Also documents the `Field` slot-order anti-pattern — help text (`Field.Description`) renders below `Field.Control`, not above it.
