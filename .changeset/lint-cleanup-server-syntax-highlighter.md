---
"@ngrok/mantle-server-syntax-highlighter": patch
---

Lint cleanup round. No behavior changes.

Replaced the forbidden inline `typeof import("oxc-parser")` annotations with a type-only namespace import (`import type * as OxcParserModule from "oxc-parser"; type OxcParser = typeof OxcParserModule;`). The lazy `createRequire` loading path is unaffected — `import type * as` is fully erased at compile time.
