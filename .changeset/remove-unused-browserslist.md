---
"@ngrok/mantle": patch
---

Remove the unused `browserslist` devDependency and config key. Nothing in the current toolchain reads them: the build uses tsdown with an explicit `target`, and Tailwind 4 lowers CSS via its bundled lightningcss with its own defaults. `browserslist` remains available transitively where needed.
