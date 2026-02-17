---
"@ngrok/mantle": patch
---

Fix `CodeBlock.CopyButton` timeout lifecycle handling by clearing pending timers on unmount and before scheduling a new copy-state reset.
