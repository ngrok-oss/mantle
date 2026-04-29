---
"@ngrok/mantle": minor
"@ngrok/mantle-server-syntax-highlighter": minor
---

Extend fold gutters to every supported language, not just JSON. Each language uses the folding model that fits its grammar:

- **Bracket-paired** (`javascript`, `typescript`, `jsx`, `tsx`, `json`, `css`, `go`, `java`, `csharp`, `rust`, `ruby`) — multi-line `{ … }` and `[ … ]` ranges fold via a single token-walking parser. TextMate scopes from Shiki are used to filter out brackets that appear inside strings, comments, or regular expressions, so one parser covers every C-family language without per-language string/comment logic.
- **Indentation-based** (`python`, `yaml`) — blocks are detected by leading whitespace; the opener (e.g. `def`, `class`, a YAML key) stays visible and child lines collapse.
- **Tag-based** (`html`, `xml`) — multi-line elements fold by matching `<tag>` / `</tag>` pairs. Self-closing tags and HTML void elements don't open folds.
- **No folding** (`bash`, `shell`, `sh`, plain text) — shell languages use keyword pairs (`if … fi`, `do … done`) instead of brackets, so bracket folding would surface no useful blocks. Plain text has nothing to fold.

New helper exports from `@ngrok/mantle/code-block` and `@ngrok/mantle/highlight-utils`:

- `computeFoldRanges({ language, tokens })` — generic fold-range computer that dispatches to the right strategy. Consumes Shiki tokens with `includeExplanation: 'scopeName'`.
- `foldStrategyFor(language)` — returns `'bracket' | 'indentation' | 'tag' | 'none'` for a supported language.
- Types: `ComputeFoldRangesInput`, `FoldStrategy`, `FoldLine`, `FoldToken`, `FoldExplanation`, `FoldScope`.

The existing `computeJsonFoldRanges` continues to work for callers that already use it on raw JSON source.

Also fixes a latent bug where toggling `CodeBlock.ExpanderButton` would replace the highlighted `<code>`'s child DOM (because `dangerouslySetInnerHTML` received a fresh `{ __html }` object on every parent re-render). The replacement was invisible for plain code blocks but silently broke fold toggles, since the runtime's per-`<code>` geometry cache then pointed at detached line elements. The prop is now memoized so child DOM identity survives unrelated re-renders, and the fold runtime additionally validates that cached lines are still connected before reusing them.
