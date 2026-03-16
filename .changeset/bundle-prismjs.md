---
"@ngrok/mantle": patch
---

Bundle prismjs into the code-block dist output to fix `ReferenceError: Prism is not defined` with Vite 8 / Rollup 4. Previously, prismjs component files (plain IIFEs with no `module.exports`) were left as external imports, and Rollup had no visibility into their implicit dependency on the prismjs main module — causing it to evaluate a component before `window.Prism` was set. Bundling prismjs directly resolves the ordering issue transparently for all consuming apps.
