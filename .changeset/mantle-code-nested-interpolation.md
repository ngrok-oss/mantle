---
"@ngrok/mantle-vite-plugins": patch
---

`mantleCodeVitePlugin` now inlines nested `mantleCode` fragment interpolations at build time. Interpolating `someFragment.code` into another `mantleCode` template — where `someFragment` is a `mantleCode` `const` declared earlier in the same module, or a named import of a directly-exported `mantleCode` `const` from another module — splices the fragment's source into the highlighted output. The embedded code is highlighted line-for-line in its host language (correct line numbers, folding, and copy text) and pays no runtime substitution cost. Nested fragments resolve recursively across modules; interpolations that can't be resolved statically fall back to the existing runtime placeholder behavior, and an unresolved imported `.code` reference emits a build warning.
