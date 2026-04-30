---
"@ngrok/mantle": minor
"@ngrok/mantle-server-syntax-highlighter": minor
---

Extend code-block folding toward VS Code parity by switching the JS/TS/JSX/TSX, HTML, XML, and CSS strategies to AST / parser-quality matchers, and adding keyword-pair folding for Bash / Shell / Ruby. The runtime click handler is unchanged — all heavier work runs server- or build-side inside `@ngrok/mantle-server-syntax-highlighter`.

What now folds (per language):

- **JS / TS / JSX / TSX** (`oxc-parser`) — block statements, object/array literals, class/interface/type-literal/enum bodies, switch statements, multi-line template literals (including tagged), JSX elements (`<Foo>…</Foo>`), JSX fragments (`<>…</>`), and member-expression element names (`<obj.Foo>`). Self-closing JSX tags don't fold even when split across lines for long attribute lists, matching VS Code.
- **HTML / XML** (`parse5` with `sourceCodeLocationInfo`) — multi-line elements (`<div>…</div>`), nested element folds, multi-line opening tags (the attribute list collapses into the tag name), and full HTML documents with explicit `<html>`/`<head>`/`<body>`. XML routes through parse5's SVG fragment context for foreign-content (XML-like) tokenizer rules so `<empty/>` is correctly self-closing.
- **CSS** — single-pass CSS-aware brace matcher (skips `/* … */` comments, `"…"` and `'…'` strings, and backslash escapes) replacing the previous token-based bracket walk.
- **Bash / Shell** — keyword pairs from VS Code's `shellscript` grammar: `if … fi`, `case … esac`, `for|while|until|select … do … done`, brace-form function bodies. Folds the leading-`}` brace-group close while ignoring `${VAR}` parameter expansions (which never lead a line).
- **Ruby** — combines the bracket pass with keyword pairs from VS Code's `ruby` grammar: `def`, `class`, `module`, `begin`, `if`, `unless`, `while`, `until`, `for`, `case`, and `do |args|` blocks, all closing on `end`. Mid-block keywords (`else`, `rescue`, `when`) deliberately don't pop, so `begin … rescue … end` is a single fold.

New exports on `@ngrok/mantle-server-syntax-highlighter`:

- `computeServerFoldRanges({ code, language, tokens })` — main dispatcher, called by `highlightWithMantleShiki`.
- `serverFoldStrategyFor(language)` / `serverFoldNeedsTokens(strategy)` — let callers control whether to capture Shiki's `includeExplanation: 'scopeName'` tokens.
- `computeJsxFoldRanges`, `computeHtmlFoldRanges`, `computeCssFoldRanges`, `computeKeywordFoldRanges` — per-strategy computers, individually testable.

`@ngrok/mantle/highlight-utils` and `@ngrok/mantle/code-block` now also re-export `finalizeFoldRanges` so consumers building custom strategies can reuse the dedup pass.

Skipping `includeExplanation` on the AST and raw-source paths (JS/TS/HTML/CSS/JSON) keeps the highlight pipeline cheaper than the previous token-only approach for those languages.
