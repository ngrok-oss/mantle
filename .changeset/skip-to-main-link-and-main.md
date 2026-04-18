---
"@ngrok/mantle": minor
---

Add `SkipToMainLink` and `Main` components for accessible "skip to main content" navigation. `SkipToMainLink` is a visually-hidden-until-focused link that uses the browser History API directly, so it works in any framework (React Router, Next.js, plain HTML). `Main` renders a focusable `<main id="main" tabIndex={-1}>` landmark designed to pair with it.

Also registers a new `z-max` utility (backed by `--z-index-max: 2147483647`, i.e. int32 max) so consumers can stack elements above any other z-index layer.
