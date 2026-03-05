# ShikiCodeBlock v2 — Build-Time Highlighting, Zero Browser Bundle

## Context

The current `CodeBlock` uses PrismJS, which runs in the browser via `useEffect`. This causes:

- Hydration mismatches (SSR output differs from client — suppressed with `suppressHydrationWarning`)
- PrismJS bundle shipped to every browser
- No clean SSR/RSC path

The goal: a **net-new** `ShikiCodeBlock` component that uses Shiki for syntax highlighting, but runs **only at build/HMR time** (Vite plugin). Zero Shiki/Prism runtime in the browser. Output is identical to running Shiki in the browser. Works for both MDX docs (static code fences) and pure Vite apps (dynamic JSX with interpolations). Mantle exports both the component and the required Vite plugin.

---

## Architecture Overview

```
Author time                      Build time (Vite plugin)          Runtime (browser)
─────────────────────────────    ──────────────────────────────    ──────────────────
<ShikiCodeBlock.Code             shikiCode("ts")`...` found →      Component reads
  value={shikiCode("ts")`        SHIKI_VAL_0 placeholder →         __preHtml string,
    const x = ${someVar};        Shiki pre-renders HTML →           substitutes
  `}                             MagicString rewrites in-place →    SHIKI_VAL_0 with
/>                               HTML inlined as string literal     escapeHtml(someVar)
```

**Interpolation support** — runtime values (props, state, async data) are fully supported:

- At build time: each `${expr}` → `SHIKI_VAL_N` placeholder → pre-rendered HTML contains `SHIKI_VAL_N` in the correct token position
- At render time: fast `String.replace("SHIKI_VAL_N", escapeHtml(String(val)))` for each value
- Cannot eval runtime expressions (nor should we) — the static structure is highlighted, actual values slot in at render
- Limitation: token type of placeholder may differ from actual value (e.g., `SHIKI_VAL_0` as identifier vs actual string). Acceptable for docs/demos; value is inside the correct surrounding token span (string quotes, etc.)

---

## Core Mechanism: Inline HTML — No Virtual Module, No Runtime Lookup

**No virtual module needed.** The Vite plugin inlines the pre-rendered HTML directly into each transformed source file as a string literal. This gives automatic, exact code splitting: a page only loads HTML for code blocks in the components it actually renders.

A runtime lookup like `map[hash]` is **not tree-shakeable** (dynamic key defeats static analysis). A single shared virtual module would load ALL highlighted HTML for the entire app on every page. Instead:

1. **Consumer authors code** as a tagged template: `shikiCode("typescript")\`const x = ${foo};\``
2. **Vite plugin** finds these calls during `transform`:
   - Replaces each `${expr}` with a unique stable placeholder: `SHIKI_VAL_0`, `SHIKI_VAL_1`, … (no underscores — reads as a single identifier token so Shiki doesn't split it across spans)
   - Runs `shiki.codeToHtml("const x = SHIKI_VAL_0;", { lang: "typescript" })`
   - Uses MagicString to rewrite the `shikiCode(...)` call **in-place** to an object literal with the HTML string baked in
3. **No virtual module, no import** — the HTML is just a string constant in the file
4. **Component** at render time:
   - Reads `__preHtml` string and `__preVals` array directly from the value object
   - Does fast string replacement: `SHIKI_VAL_0 → escapeHtml(String(foo))`
   - Renders via `dangerouslySetInnerHTML` — **no hydration mismatch**

```tsx
// Before (what the developer writes):
shikiCode("typescript")`const x = ${someVar};`

// After (plugin transforms in-place):
{
  __brand: "ShikiCodeValue",
  language: "typescript",
  code: `const x = ${someVar}`,
  __preHtml: `<pre class="shiki"><code><span style="color:var(--shiki-token-keyword)">const</span> x = SHIKI_VAL_0;</code></pre>`,
  __preVals: [someVar]
}
```

**Why not virtual modules?**

- A single `export default { hash: html }` map is not tree-shakeable (runtime dynamic key lookup)
- Named exports or per-hash virtual modules add plugin complexity with little practical benefit
- Inline strings travel with their component into whatever chunk Rollup puts that component in — code splitting is automatic and exact
- The only scenario where virtual modules win is: the identical code string as a literal in two separate source files. In practice you'd just share a component, making D and C equivalent.
- **Upgrade path**: D → per-hash virtual modules is non-breaking if profiling ever shows a real problem

---

## What Has Legs ✓

- **The core pattern is proven**: Astro's `<Code>` component, Nuxt Content, and `expressive-code` all do exactly this (Shiki server-side, zero runtime)
- **Virtual modules are the right Vite primitive**: the existing `raw-mdx-docs.ts` plugin (`apps/www/vite-plugins/raw-mdx-docs.ts`) is a working reference — same `resolveId`/`load`/`handleHotUpdate` pattern
- **Placeholder substitution works with Shiki**: Shiki tokenizes `__SHIKI_P0__` as a single identifier token (safe placeholder name). Verified by how Shiki handles unknown identifiers.
- **Content hash deduplication**: same code used in 3 files → one hash → stored once in the virtual module
- **HMR**: when a source file changes, the plugin re-transforms it, updates the virtual module map, and Vite's HMR invalidates affected modules

## What's Tricky / Risks ⚠

1. **Placeholder splitting**: If Shiki splits `__SHIKI_P0__` across multiple `<span>` tokens (e.g., treating `__` as punctuation), the replacement breaks. Mitigation: use a placeholder that reads as a single identifier token like `SHIKI_VAL_0` (no underscores) and test empirically.

2. **Interpolation context in highlighting**: `${foo}` could be a string value, a number, etc. The placeholder gets the same syntax highlight as the type of token at that position. At runtime, the actual value gets that highlighting — which is usually correct (a value inside a string literal stays inside the string span). Edge case: if a value changes the token type (e.g., injecting a closing quote). This is acceptable for docs use cases.

3. **Regex-based JSX transform complexity**: Finding `shikiCode("typescript")\`...\``is reasonably regex-friendly. BUT the`language` could be a variable (can't pre-render). We error/warn if language is not a static string literal.

4. **Shiki async initialization**: `createHighlighter()` is async. Must initialize once in `buildStart` hook and cache the instance. The `transform` hook must await it.

5. **Virtual module + SSR**: In SSR mode (React Router 7 with Vercel), the virtual module must also be resolved during SSR rendering. Vite handles this transparently as long as the plugin is registered — but needs testing.

6. **MDX code fences**: MDX static fences don't use `shikiCode()`. Need a separate rehype plugin (`rehypeShikiCodeBlock`) that pre-renders at MDX-compile time and injects `__preHtml` as a prop.

7. **Shiki theme/CSS**: Prism uses CSS class-based tokens (`.token.keyword`). Shiki can output `css-variables` theme (outputs `--shiki-color-text` etc.) which requires mapping those CSS vars to the design system tokens. This is new CSS work.

---

## File Structure

```
packages/mantle/src/
  components/
    shiki-code-block/
      index.ts                    # Public exports
      shiki-code-block.tsx        # Component (copies structure from code-block.tsx, new Code impl)
      shiki-code.ts               # shikiCode() tagged template + ShikiCodeValue type
      shiki-code-block.test.tsx   # Tests
  vite-plugins/
    shiki-code-block-plugin.ts    # Vite plugin: shikiCodeBlock()
    rehype-shiki-code-block.ts    # Rehype plugin for MDX code fences
    index.ts                      # Plugin exports

apps/www/
  vite.config.ts                  # Add shikiCodeBlock() plugin + rehypeShikiCodeBlock rehype plugin
  app/components/
    mdx-provider.tsx              # Swap CodeBlock → ShikiCodeBlock in the <pre> handler
  app/routes/
    api.highlight.ts              # Demo React Router action (Phase 2.5)
```

---

## Package Changes

### `packages/mantle/package.json`

- Add `shiki` as a **devDependency** (exact pinned version). Shiki is ONLY used in the Vite plugin (Node.js build process) — never shipped to the browser.
- Add `magic-string` as a **devDependency** (exact pinned version). Used in the Vite plugin transform hook.
- Add new export paths:
  ```json
  "./shiki-code-block": { "@ngrok/src-live-types": "./src/components/shiki-code-block/index.ts", ... },
  "./vite-plugin": { "@ngrok/src-live-types": "./src/vite-plugins/index.ts", ... },
  "./shiki-server": { "@ngrok/src-live-types": "./src/shiki-server/index.ts", ... }
  ```
- Add `"shiki"` to `tsup.config.ts` externals (don't bundle it — only used in vite plugin at build time)

### `packages/mantle/tsup.config.ts`

- Add `shiki-code-block` and `vite-plugin` entry points
- Mark `shiki` and `magic-string` as external

---

## Component API (`ShikiCodeBlock`)

Identical compound component POJO namespace pattern as `CodeBlock`. Key difference: `shikiCode("lang")` carries the language, so **no separate `language` prop is needed** on `ShikiCodeBlock.Code`.

```tsx
// Usage:
<ShikiCodeBlock.Root>
  <ShikiCodeBlock.Header>
    <ShikiCodeBlock.Icon preset="file" />
    <ShikiCodeBlock.Title>example.ts</ShikiCodeBlock.Title>
  </ShikiCodeBlock.Header>
  <ShikiCodeBlock.Body>
    <ShikiCodeBlock.CopyButton />
    {/* language is carried by shikiCode("typescript") — no separate prop */}
    <ShikiCodeBlock.Code
      value={shikiCode("typescript")`const x: string = "hello ${name}";`}
    />
  </ShikiCodeBlock.Body>
  <ShikiCodeBlock.ExpanderButton />
</ShikiCodeBlock.Root>

// With interpolations (runtime values — props, state, query data):
<ShikiCodeBlock.Code
  value={shikiCode("javascript")`
    const client = new OpenAI({ baseUrl: '${url}', apiKey: process.env.KEY });
  `}
/>

// Plugin pre-renders with placeholder, component substitutes at render:
// 'SHIKI_VAL_0' → escapeHtml(String(url))
```

**`ShikiCodeBlock.Code` props**:

```tsx
type ShikiCodeBlockCodeProps = {
	value: ShikiCodeValue; // always use shikiCode("lang")`...` — no plain string
	language?: SupportedLanguage; // only for MDX rehype path; ignored when value is ShikiCodeValue
	indentation?: Indentation;
	highlightLines?: (LineRange | number)[];
	showLineNumbers?: boolean;
	highlightHref?: string; // Phase 2.5: URL for server-side highlight action
	// ... standard <pre> HTML attrs
};
```

**`ShikiCodeValue` type** (returned by `shikiCode()`, consumed by the component):

```ts
type ShikiCodeValue = {
	__brand: "ShikiCodeValue";
	language: SupportedLanguage;
	code: string; // original code (for copy button)
	__preHtml?: string; // pre-rendered HTML with SHIKI_VAL_N placeholders (injected by plugin)
	__preVals?: unknown[]; // runtime values to substitute at SHIKI_VAL_0, SHIKI_VAL_1, … positions
};
```

**`shikiCode()` runtime behavior** (without plugin transformation):

```ts
// No-op runtime: returns ShikiCodeValue with __preHtml = undefined
// Component falls back to rendering escaped plain text (+ dev console warning)
function shikiCode(
	language: SupportedLanguage,
): (strings: TemplateStringsArray, ...values: unknown[]) => ShikiCodeValue;
```

**`ShikiCodeBlock.Code` render logic**:

```
1. __preHtml present (from Vite plugin)  → substitute SHIKI_VAL_N → dangerouslySetInnerHTML (no hydration mismatch!)
2. highlightHref provided, no __preHtml  → fetch on mount, show plain text while loading, swap in HTML on response
3. Neither                               → plain escaped text + dev warning
```

The copy button reads from `value.code` — the original unescaped code string.

---

## Vite Plugin (`shikiCodeBlock()`)

```ts
// Usage in vite.config.ts:
import { shikiCodeBlock } from "@ngrok/mantle/vite-plugin";
plugins: [shikiCodeBlock(), ...]
```

### Plugin Hooks

**`buildStart`**: Initialize Shiki highlighter (async, cached):

```ts
highlighter = await createHighlighter({
	themes: ["css-variables"],
	langs: [...supportedLanguages],
});
```

**`transform(code, id)`**: For `.tsx`, `.jsx`, `.ts` files:

- Find pattern: `shikiCode\s*\(\s*["']([^"']+)["']\s*\)\s*\`` (regex for `shikiCode("lang")` + template literal start)
- For each match:
  1. Parse the template literal, extract static strings array + expression source spans
  2. Build placeholder string: `static[0] + "SHIKI_VAL_0" + static[1] + ...`
  3. Run Shiki: `await highlighter.codeToHtml(placeholderString, { lang })`
  4. Use MagicString to rewrite the `shikiCode(...)` call to an inline object literal:
     ```
     { __brand:"ShikiCodeValue", language:"typescript", code:`${original}`,
       __preHtml:`${escapedShikiHtml}`, __preVals:[expr0, expr1, ...] }
     ```
  5. No virtual module, no import added — just in-place string substitution
- Return `{ code: ms.toString(), map: ms.generateMap({ hires: true }) }`

**`handleHotUpdate`**: On file save, Vite re-runs the `transform` hook on the changed file — pre-rendered HTML is automatically refreshed inline.

---

## MDX Integration (Rehype Plugin) — Phase 2

For MDX code fences (static, no interpolations):

```ts
// In vite.config.ts rehypePlugins array:
rehypePlugins: [rehypeSlug, rehypeMdxCodeProps, rehypeShikiCodeBlock(highlighterOptions)];
```

The `rehypeShikiCodeBlock` rehype plugin:

1. Walks the rehype AST finding `<pre><code class="language-X">` nodes
2. Runs Shiki on the code content
3. Injects the pre-rendered HTML as a prop (`__preHtml`) on the compiled MDX JSX node
4. The compiled MDX output then passes this as a prop to the mapped `ShikiCodeBlock` component

In `mdx-provider.tsx`, update the `<pre>` handler to use `ShikiCodeBlock` and read `__preHtml` from props.

**Note**: rehype plugins run synchronously in the rehype pipeline, but Shiki is async. Solution: pre-initialize the highlighter and pass it to the rehype plugin factory, or use the Shiki sync API.

---

## CSS / Theming — Phase 3

Shiki `css-variables` theme outputs token spans with inline `style="color:var(--shiki-token-keyword)"` etc. We define these variables in `mantle.css` to **match the existing Prism color scheme exactly**, so the visual output is identical post-migration.

**Existing Prism token colors in `mantle.css`:**

| Prism tokens                                                                                                             | Current color             |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| `.token.comment`, `.token.prolog`, `.token.doctype`, `.token.cdata`                                                      | `var(--color-gray-500)`   |
| `.token.property`, `.token.tag`, `.token.boolean`, `.token.number`, `.token.constant`, `.token.symbol`, `.token.deleted` | `var(--color-indigo-600)` |
| `.token.attr-name`, `.token.string`, `.token.char`, `.token.builtin`, `.token.inserted`                                  | `var(--color-green-600)`  |
| `.token.operator`, `.token.entity`, `.token.url`                                                                         | `var(--color-green-600)`  |
| `.token.selector`, `.token.atrule`, `.token.attr-value`, `.token.keyword`                                                | `var(--color-blue-600)`   |
| `.token.function`, `.token.class-name`                                                                                   | `var(--color-blue-600)`   |
| `.token.regex`, `.token.important`, `.token.variable`                                                                    | `var(--color-yellow-600)` |

**Mapped to Shiki `css-variables` theme vars — add to `mantle.css` in Phase 3:**

```css
/*
MARK: SHIKI SYNTAX HIGHLIGHT
Replace the PRISM SYNTAX HIGHLIGHT block with this when migration is complete.
*/
.shiki {
	--shiki-color-text: var(--color-gray-900);
	--shiki-color-background: transparent; /* code-block bg handled by component */
	--shiki-token-comment: var(--color-gray-500); /* comments, doctype, cdata */
	--shiki-token-constant: var(--color-indigo-600); /* numbers, booleans, constants */
	--shiki-token-string: var(--color-green-600); /* strings, attr-names, inserted */
	--shiki-token-string-expression: var(--color-green-600); /* template strings, operators */
	--shiki-token-keyword: var(--color-blue-600); /* keywords, selectors, attr-values */
	--shiki-token-function: var(--color-blue-600); /* function names, class names */
	--shiki-token-parameter: var(--color-yellow-600); /* variables, regex, important */
	--shiki-token-punctuation: var(--color-gray-900); /* punctuation (same as text) */
	--shiki-token-link: var(--color-green-600); /* URLs */
}

/* Dark mode — same vars, darker palette variants */
.dark .shiki {
	--shiki-color-text: var(--color-gray-100);
	--shiki-token-comment: var(--color-gray-500);
	--shiki-token-constant: var(--color-indigo-400);
	--shiki-token-string: var(--color-green-400);
	--shiki-token-string-expression: var(--color-green-400);
	--shiki-token-keyword: var(--color-blue-400);
	--shiki-token-function: var(--color-blue-400);
	--shiki-token-parameter: var(--color-yellow-400);
	--shiki-token-punctuation: var(--color-gray-100);
	--shiki-token-link: var(--color-green-400);
}
```

**Migration steps for Phase 3:**

1. Add the `.shiki { ... }` block above to `mantle.css`
2. Delete the entire `MARK: PRISM SYNTAX HIGHLIGHT` block
3. Remove `prismjs` and `@types/prismjs` from `packages/mantle/package.json`
4. Delete `packages/mantle/src/components/code-block/highlighter.ts`

---

## Server Action Path (Dynamic Code — Fully Runtime) — Phase 2.5

For code that is **completely unknown at build time** — API-fetched configs, user account data, code editor content — the Vite plugin can't help. The server action path handles this:

### `@ngrok/mantle/shiki-server` export

Mantle exports a ready-to-use React Router action handler:

```ts
// packages/mantle/src/shiki-server/index.ts
import { shikiHighlightAction } from "@ngrok/mantle/shiki-server";

// Consumer wires it up as a React Router route action:
// app/routes/api.highlight.ts
export const action = shikiHighlightAction;
```

The action:

- Reads `{ code: string, language: SupportedLanguage }` from `request.formData()` or JSON body
- Runs Shiki server-side (same highlighter, same theme, same output as the Vite plugin path)
- Returns `{ html: string }` as a JSON response
- Shiki **never touches the browser** — it's a server module, kept out of client bundles via React Router's server/client boundary

### Component integration: `highlightHref` prop

`ShikiCodeBlock.Code` gains an optional `highlightHref` prop:

```tsx
// Fully dynamic — code comes from a query/API, can't be pre-rendered
<ShikiCodeBlock.Code
	highlightHref="/api/highlight"
	value={{ language: "yaml", code: dynamicYaml }}
/>
```

Render behavior with `highlightHref`:

1. **Immediate render**: plain escaped text (no flash of unstyled content)
2. **On mount**: `fetch(highlightHref, { method: "POST", body: ... })`
3. **On response**: swap in the highlighted HTML via `dangerouslySetInnerHTML`
4. **Cache**: responses cached in a module-level `Map<hash(code+lang), html>` — if the same code is shown twice, only one fetch

---

## Implementation Phases

### Phase 1: PoC (core working end-to-end, static strings only)

1. Add `shiki` and `magic-string` devDependencies to `packages/mantle`
2. Create `shikiCode()` tagged template (runtime no-op) — `shiki-code.ts`
3. Create `ShikiCodeBlock` component — copy structure from `CodeBlock`, replace `Code` with new pre-rendered impl
4. Create `shikiCodeBlock()` Vite plugin with:
   - `buildStart`: init Shiki highlighter
   - `transform`: find `shikiCode("lang")\`...\``in`.tsx`/`.jsx`, run Shiki, rewrite with MagicString (inline HTML, no virtual module)
   - Static strings only (no `${}` interpolation) for PoC
5. Add export paths `./shiki-code-block` and `./vite-plugin` to `packages/mantle/package.json`
6. Update `tsup.config.ts` with new entry points; mark `shiki` as external
7. Wire up in `apps/www/vite.config.ts`
8. Add one demo page in the docs to prove it works
9. Verify: no Shiki in browser bundle, highlighting is correct, HMR works

### Phase 2: Interpolations + MDX

1. Extend Vite plugin transform to handle `${expr}` interpolations (placeholder substitution)
2. Create `rehypeShikiCodeBlock` rehype plugin for MDX code fences — `rehype-shiki-code-block.ts`
3. Update `mdx-provider.tsx` to use `ShikiCodeBlock` with pre-rendered HTML
4. Update `apps/www/vite.config.ts` to add rehype plugin

### Phase 2.5: Server Action Path

1. Create `packages/mantle/src/shiki-server/index.ts` with `shikiHighlightAction`
2. Add `./shiki-server` to mantle package exports
3. Add `highlightHref` prop to `ShikiCodeBlock.Code` with fetch-on-mount + client-side `Map` cache
4. Demo: wire up `/api/highlight` route in `apps/www`

### Phase 3: Production Ready

1. Add Shiki CSS variables to `mantle.css` (light + dark mode); delete Prism CSS block
2. Remove `prismjs` and `@types/prismjs` from `packages/mantle/package.json`
3. Delete `packages/mantle/src/components/code-block/highlighter.ts`
4. Write tests: component render, plugin transform, server action
5. Changeset for publish

---

## Key Files to Create/Modify

| File                                                                   | Phase | Action                                                         |
| ---------------------------------------------------------------------- | ----- | -------------------------------------------------------------- |
| `packages/mantle/src/components/shiki-code-block/shiki-code.ts`        | 1     | Create — `shikiCode()` tagged template + `ShikiCodeValue` type |
| `packages/mantle/src/components/shiki-code-block/shiki-code-block.tsx` | 1     | Create — compound component                                    |
| `packages/mantle/src/components/shiki-code-block/index.ts`             | 1     | Create — public exports                                        |
| `packages/mantle/src/vite-plugins/shiki-code-block-plugin.ts`          | 1     | Create — `shikiCodeBlock()` Vite plugin                        |
| `packages/mantle/src/vite-plugins/index.ts`                            | 1     | Create — plugin exports                                        |
| `packages/mantle/package.json`                                         | 1     | Add shiki/magic-string devDeps + new export paths              |
| `packages/mantle/tsup.config.ts`                                       | 1     | Add new entry points; mark shiki as external                   |
| `apps/www/vite.config.ts`                                              | 1     | Add `shikiCodeBlock()` plugin                                  |
| `apps/www/app/routes/shiki-code-block.tsx`                             | 1     | Create — demo page                                             |
| `packages/mantle/src/vite-plugins/rehype-shiki-code-block.ts`          | 2     | Create — rehype plugin for MDX                                 |
| `apps/www/app/components/mdx-provider.tsx`                             | 2     | Swap `CodeBlock` → `ShikiCodeBlock` in `<pre>` handler         |
| `packages/mantle/src/shiki-server/index.ts`                            | 2.5   | Create — `shikiHighlightAction`                                |
| `apps/www/app/routes/api.highlight.ts`                                 | 2.5   | Create — demo action route                                     |
| `packages/mantle/src/mantle.css`                                       | 3     | Add Shiki CSS vars; delete Prism block                         |

**Key existing files to reference (DO NOT MODIFY during Phase 1):**

- `packages/mantle/src/components/code-block/code-block.tsx` — copy compound component structure
- `packages/mantle/src/components/code-block/supported-languages.ts` — reuse as-is
- `packages/mantle/src/components/code-block/normalize.ts` — reuse as-is
- `packages/mantle/src/components/code-block/escape-html.ts` — reuse as-is
- `apps/www/vite-plugins/raw-mdx-docs.ts` — reference for Vite plugin pattern

---

## Verification Checklist

1. `pnpm -w run build` — no errors
2. `pnpm -w run dev` (www) — ShikiCodeBlock demo page renders correctly with syntax highlighting
3. HMR test: edit a source file using `shikiCode()` → browser updates without full reload
4. Bundle analysis: `shiki` package NOT present in browser bundle (check `dist/` or use `vite-bundle-analyzer`)
5. `pnpm -w run typecheck` — 0 errors
6. `pnpm -w run test` — 0 failures
7. View source of SSR-rendered page → pre-rendered HTML is present in server response (no hydration mismatch)
