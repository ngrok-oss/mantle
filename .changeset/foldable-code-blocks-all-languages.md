---
"@ngrok/mantle": minor
"@ngrok/mantle-server-syntax-highlighter": minor
---

Extend fold gutters to every supported language, not just JSON. Each language uses the folding model that fits its grammar:

- **AST-based** (`javascript`, `typescript`, `jsx`, `tsx`) — `oxc-parser` emits folds for blocks, object/array literals, JSX elements/fragments, multi-line template literals, and TypeScript-only bodies.
- **Raw-source** (`json`, `css`) — single-pass matchers fold braces/brackets while skipping strings, comments, and escapes without requiring Shiki scope explanations.
- **Bracket-paired** (`go`, `java`, `csharp`, `rust`) — multi-line `{ … }` and `[ … ]` ranges fold via TextMate-scope-aware token walking.
- **Indentation-based** (`python`, `yaml`) — blocks are detected by leading whitespace; the opener (e.g. `def`, `class`, a YAML key) stays visible and child lines collapse.
- **AST-based** (`html`, `xml`) — `parse5` source locations fold multi-line elements and opening tags while honoring self-closing XML tags and HTML void elements.
- **Keyword-paired** (`bash`, `shell`, `sh`) — shell blocks fold from VS Code-style keyword pairs (`if … fi`, `case … esac`, `do … done`) plus brace-form function bodies.
- **Bracket + keyword** (`ruby`) — Ruby combines brace/array folds with keyword blocks such as `def`, `class`, `module`, `begin`, `do`, `if`, and `case`, all closing on `end`.
- **No folding** (plain text) — text-like languages have no block model to fold.

New helper exports from `@ngrok/mantle/code-block` and `@ngrok/mantle/highlight-utils`:

- `computeFoldRanges({ language, tokens })` — generic fold-range computer that dispatches to the right strategy. Consumes Shiki tokens with `includeExplanation: 'scopeName'`.
- `foldStrategyFor(language)` — returns `'bracket' | 'indentation' | 'tag' | 'none'` for a supported language.
- Types: `ComputeFoldRangesInput`, `FoldStrategy`, `FoldLine`, `FoldToken`, `FoldExplanation`, `FoldScope`.

`computeFoldRanges` is a low-level token helper for custom integrations; the Vite plugin, MDX code fences, and server highlighter use the richer `@ngrok/mantle-server-syntax-highlighter` dispatcher for AST, raw-source, and keyword folding.

The existing `computeJsonFoldRanges` continues to work for callers that already use it on raw JSON source.

Also fixes a latent bug where toggling `CodeBlock.ExpanderButton` would replace the highlighted `<code>`'s child DOM (because `dangerouslySetInnerHTML` received a fresh `{ __html }` object on every parent re-render). The replacement was invisible for plain code blocks but silently broke fold toggles, since the runtime's per-`<code>` geometry cache then pointed at detached line elements. The prop is now memoized so child DOM identity survives unrelated re-renders, and the fold runtime additionally validates that cached lines are still connected before reusing them.
