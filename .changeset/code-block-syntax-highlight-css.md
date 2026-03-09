---
"@ngrok/mantle": patch
---

Move syntax highlight token styles into the code-block component

The `.token.*` CSS rules for syntax highlighting were previously included unconditionally in `mantle.css`, adding to the critical CSS payload for all pages even those with no code blocks.

These styles are now colocated in `packages/mantle/src/components/code-block/syntax-highlight.css` and imported as a side-effect from `code-block.tsx`. Vite bundles them as a CSS chunk associated with the code-block module — apps that never import `@ngrok/mantle/code-block` no longer pay the cost, and apps that do get the styles automatically.
