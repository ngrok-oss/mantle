---
"@ngrok/mantle-vite-plugins": patch
---

Fix `mantleCodeRehypePlugin` serializing `mantleShowLineNumbers`, `mantleCollapsible`, and `mantleDisableCopy` as booleans on HAST `<pre>` properties. The `false` value was dropped during HAST→JSX compilation, causing `showLineNumbers=false` fence meta to be silently ignored (the rendered `<pre>` ended up with `data-mantle-line-numbers="true"` and no left padding). These properties are now stringified so the value survives into the React component.
