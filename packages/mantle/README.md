<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ngrok-oss/mantle/HEAD/.github/mantle-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ngrok-oss/mantle/HEAD/.github/mantle-light.svg">
    <img alt="Mantle" src="https://raw.githubusercontent.com/ngrok-oss/mantle/HEAD/.github/mantle-light.svg" width="176" height="34" style="max-width: 100%;">
  </picture>
</p>
<h1 align="center">
  Mantle Design System
</h1>

[Mantle](https://mantle.ngrok.com) is [ngrok](https://ngrok.com/)’s UI library and design system. It’s inspired by [shadcn/ui](https://ui.shadcn.com) and uses [Radix](https://www.radix-ui.com) with [Tailwind](https://tailwindcss.com/) for styling. It’s documented using [react-router](https://reactrouter.com/).

## Documentation

- [mantle.ngrok.com](https://mantle.ngrok.com) - our official component documentation site (reflects latest releases)
- [develop.mantle.ngrok.com](https://develop.mantle.ngrok.com) - staging site for all merges to `main`

## Installation

Install `@ngrok/mantle` and all of the required `peerDependencies` with your preferred package manager:

| package manager | command                                                     |
| --------------- | ----------------------------------------------------------- |
| npm             | npm install -E @ngrok/mantle @phosphor-icons/react date-fns |
| pnpm            | pnpm add -E @ngrok/mantle @phosphor-icons/react date-fns    |
| bun             | bun add -E @ngrok/mantle @phosphor-icons/react date-fns     |
| yarn            | yarn add -E @ngrok/mantle @phosphor-icons/react date-fns    |

Also install the required `devDependencies`:

| package manager | command                     |
| --------------- | --------------------------- |
| npm             | npm install -DE tailwindcss |
| pnpm            | pnpm add -DE tailwindcss    |
| bun             | bun add -DE tailwindcss     |
| yarn            | yarn add -DE tailwindcss    |

Next, check out the [Overview & Setup](https://mantle.ngrok.com/) docs and start using mantle components in your application!

## Code Block Tooling

Mantle ships runtime components from `@ngrok/mantle`, while build-time and server-side tooling lives in `@ngrok/mantle-code-block-tools`:

- `@ngrok/mantle/shiki-code-block`: runtime React components and `mantleCode` template tag
- `@ngrok/mantle-code-block-tools/vite-plugin`: Vite + rehype integration via `mantleCodeBlockPlugins()`
- `@ngrok/mantle-code-block-tools/server-highlighter`: server-side highlighting engine for API routes/actions

This keeps Vite/Shiki/parser dependencies out of frontend installs that only need Mantle's runtime UI package.

### Vite + MDX

```ts
import { mantleCodeBlockPlugins } from "@ngrok/mantle-code-block-tools/vite-plugin";

const codeBlockPlugins = mantleCodeBlockPlugins();
```

### Server Highlighter

```ts
import { createMantleServerHighlighter } from "@ngrok/mantle-code-block-tools/server-highlighter";

const highlighter = createMantleServerHighlighter();
const result = await highlighter.highlight({
	code: "const x = 1",
	language: "typescript",
});
```

## Git Hooks

Pre-commit hooks run automatically via [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged). On every commit, staged files are formatted with oxfmt and linted with oxlint.

### Opting Out

If you need to skip the pre-commit hook locally (e.g., WIP commits, rebasing), set the `SKIP_HOOKS` env var:

```bash
SKIP_HOOKS=1 git commit -m "wip"
```

> [!NOTE]
> This is a **local opt-out only**. CI will always run formatting and linting checks against your branch, so any issues will still be caught before merge.

## Contributing

Please read our [contribution guide](https://github.com/ngrok-oss/mantle/blob/main/CONTRIBUTING.md) and [conventions](https://github.com/ngrok-oss/mantle/blob/main/CONVENTIONS.md).
