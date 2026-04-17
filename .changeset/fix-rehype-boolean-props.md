---
"@ngrok/mantle-vite-plugins": patch
"@ngrok/mantle": patch
---

Fix several code fence metastring parsing bugs in `mantleCodeRehypePlugin`:

- `mantleShowLineNumbers`, `mantleCollapsible`, and `mantleDisableCopy` are now stringified on HAST `<pre>` properties. Previously, boolean `false` values were dropped during HAST→JSX compilation, causing `showLineNumbers=false` fence meta to be silently ignored (the rendered `<pre>` ended up with `data-mantle-line-numbers="true"` and no left padding).
- `collapsible=true`, `collapsible=false`, and `collapsible="true"` in fence meta are no longer silently dropped. The `collapsible` key now accepts the same bare-flag, key-value, and quoted-value forms as `disableCopy`.
- When a key appears multiple times in fence meta (e.g. `title="first" title="second"`), `getMetaValue` now returns the last value, matching `parseMetastring` semantics. Previously it returned the first.
- `tokenizeMetastring` now splits on tabs, newlines, and carriage returns in addition to spaces. Previously only literal spaces were treated as token separators, so meta like `title="Foo"\tcollapsible` was lexed as a single token.
