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

## Contributing

Please read our [contribution guide](https://github.com/ngrok-oss/mantle/blob/main/CONTRIBUTING.md) and [conventions](https://github.com/ngrok-oss/mantle/blob/main/CONVENTIONS.md).
