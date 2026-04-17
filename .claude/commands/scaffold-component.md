---
description: "Scaffold a new mantle component (files, docs, route, nav, changeset). Accepts PascalCase, Title Case, lowercase, or kebab-case names."
argument-hint: "<component-name>"
---

# Scaffold a new mantle component

Scaffold a new component named `$ARGUMENTS` in the mantle design system. If no name is provided, ask the user for a component name.

## 0. Normalize the component name

The user may provide the name in any of the following formats. Accept all of them and normalize before scaffolding:

- `ComponentName` (PascalCase)
- `Component Name` (Title Case with spaces)
- `component name` (lowercase with spaces)
- `component-name` (kebab-case)

Derive two canonical forms from the input and use them consistently throughout the rest of these steps:

- **`<component-name>`** — lower-kebab-case. Used for file names, directory names, package.json export keys, route paths, URL slugs, and import specifiers. Example: `my-component`.
- **`<ComponentName>`** — PascalCase. Used for the exported React component / namespace identifier, TypeScript types, and the displayed documentation title. Example: `MyComponent`.

A `<Display Name>` (Title Case with spaces, e.g. `My Component`) is also needed for the navigation label in step 5 — derive it from the PascalCase form by inserting spaces before internal capital letters.

Examples of normalization:

| Input          | `<component-name>` | `<ComponentName>` | `<Display Name>` |
| -------------- | ------------------ | ----------------- | ---------------- |
| `ButtonGroup`  | `button-group`     | `ButtonGroup`     | `Button Group`   |
| `Button Group` | `button-group`     | `ButtonGroup`     | `Button Group`   |
| `button group` | `button-group`     | `ButtonGroup`     | `Button Group`   |
| `button-group` | `button-group`     | `ButtonGroup`     | `Button Group`   |

Follow these steps exactly:

## 1. Create the component directory and files

Create `packages/mantle/src/components/<component-name>/` with:

### `<component-name>.tsx`

- Import `cx` from `../../utils/cx/cx.js`
- Use `ComponentProps` from React for prop types (no `interface`, use `type`)
- Add JSDoc comments on all exported components with `@see` linking to `https://mantle.ngrok.com/components/<component-name>` and `@example` blocks
- Use named exports (no default exports)

#### Compound component pattern (POJO namespace)

If the component has sub-parts, follow the POJO namespace pattern from `decisions/2025-07-16-compound-component-named-exports.md`:

- Define each sub-component as a standalone const (e.g., `Root`, `Content`, `Title`)
- Set `displayName` on each sub-component using the **original flat name** for React DevTools debugging:
  ```tsx
  Root.displayName = "MyComponent";
  Content.displayName = "MyComponentContent";
  Title.displayName = "MyComponentTitle";
  ```
- Create the namespace object with `as const` and **inline JSDoc on every property**:
  ````tsx
  const MyComponent = {
  	/**
  	 * The root container of the component.
  	 *
  	 * @see https://mantle.ngrok.com/components/my-component
  	 *
  	 * @example
  	 * ```tsx
  	 * <MyComponent.Root>
  	 *   <MyComponent.Title>Title</MyComponent.Title>
  	 * </MyComponent.Root>
  	 * ```
  	 */
  	Root,
  	/** The title of the component. */
  	Title,
  } as const;
  ````
- Provider components and standalone utility functions stay as **separate named exports** alongside the namespace object (see the Toast/Toaster pattern in the decisions doc).

#### `asChild` support

Sub-components that render a semantic HTML element (headings, paragraphs, etc.) where consumers may need element-level flexibility should support the `asChild` prop:

- Import `WithAsChild` from `../../types/as-child.js` and `Slot` from `../slot/index.js`
- Add `asChild` to the props type: `HTMLAttributes<HTMLElement> & WithAsChild`
- Swap the rendered element: `const Comp = asChild ? Slot : "h3";`

See the `Empty.Title` and `Empty.Description` components for a real example.

#### Simple (non-compound) components

For components without sub-parts, export a single named component directly — no namespace needed.

### `index.ts`

- Re-export everything from `./<component-name>.js` (note the `.js` extension)

## 2. Add the package.json export

Add an entry to `packages/mantle/package.json` under `"exports"` in alphabetical order:

```json
"./<component-name>": {
	"@ngrok/src-live-types": "./src/components/<component-name>/index.ts",
	"types": "./dist/<component-name>.d.ts",
	"import": "./dist/<component-name>.js"
}
```

Note: the build system (tsdown) auto-discovers component directories, so no tsdown config changes are needed.

## 3. Create the docs page

Create `apps/www/app/docs/components/<component-name>.mdx` with:

```mdx
---
title: <ComponentName>
description: <One-line description>
---

import { <ComponentName> } from "@ngrok/mantle/<component-name>";
import { Example } from "~/components/example";

# <ComponentName>

<Description>

<Example>
	<!-- Live interactive example -->
</Example>

\`\`\`tsx
import { <ComponentName> } from "@ngrok/mantle/<component-name>";

// Code snippet matching the example
\`\`\`

## API Reference

### <ComponentName>

<Description of the component and its props>
```

Icons in examples should use `@phosphor-icons/react` (the primary icon library for mantle).

## 4. Register the route

Add to `apps/www/app/routes.ts` in alphabetical order among the component docs:

```ts
...docRoute("components/<component-name>"),
```

## 5. Add to navigation

In `apps/www/app/components/layout.tsx`:

1. Add the display name to the `prodReadyComponents` array (alphabetical order)
2. Add the route mapping to `prodReadyComponentRouteLookup` (alphabetical order):
   ```ts
   "<Display Name>": "/components/<component-name>",
   ```

## 6. Verify

Run these commands and ensure they pass:

1. `pnpm -w run build -F @ngrok/mantle`
2. `pnpm -w run typecheck`
3. `pnpm -w run lint`
4. `pnpm -w run fmt:check` (run `pnpm -w run fmt` to auto-fix if needed)

## 7. Create a changeset

Create a changeset for the new component:

```bash
# or create manually at .changeset/<descriptive-name>.md
pnpm -w run changeset
```

The changeset should be a `minor` bump for `@ngrok/mantle` since a new component is a new feature.

## Reference

- `decisions/2025-07-16-compound-component-named-exports.md` — Full rationale and migration examples of the compound component POJO namespace pattern.
- `CONVENTIONS.md` — All code style, formatting, and TypeScript conventions. Follow it.
- Existing components like `empty`, `alert`, `dialog`, `card` — Real-world examples of the patterns above.
