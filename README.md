# Mantle

[Mantle](https://mantle.ngrok.com) is [ngrok](https://ngrok.com/)’s UI library and design system. It’s inspired by [shadcn/ui](https://ui.shadcn.com) and uses [Radix](https://www.radix-ui.com) with [Tailwind](https://tailwindcss.com/) for styling. It’s documented using [Remix](https://remix.run/docs).

## Get Started

To get started, install `@ngrok/mantle` with your preferred package manager:

| package manager | command                      |
| --------------- | ---------------------------- |
| npm             | npm install -E @ngrok/mantle |
| yarn            | yarn add -E @ngrok/mantle    |
| pnpm            | pnpm add -E @ngrok/mantle    |
| bun             | bun add -E @ngrok/mantle     |

Then, add the [preset](https://tailwindcss.com/docs/presets) to your tailwind configuration.

```ts
import { mantlePreset } from "@ngrok/mantle/tailwind-preset";
import type { Config } from "tailwindcss";

export default {
	presets: [mantlePreset],
	// ... the rest of your tailwind config!
} satisfies Config;
```

Next, check out the [Overview & Setup](https://mantle.ngrok.com/) and [Theme Provider](https://mantle.ngrok.com/components/theme-provider) usage docs and start using mantle components in your application!

### Prerequisites

The following prerequisites are required to contribute to `@ngrok/mantle`.
We walk through the [tooling installation](#installation) steps below.

- [Node 20](https://nodejs.org/en/download)
- [pnpm 9](https://pnpm.io/installation#using-npm)
- [nvm](https://github.com/nvm-sh/nvm)

### Installation

Install the prerequisites through either the [automated](#automated-installation) or [manual](#manual-installation) installation guides.

#### Automated Installation

We use [direnv](https://direnv.net/) to assist you with setting up all of the required tooling.
Prefer to install and manage the tooling yourself? See [the manual installation instructions below](#manual-installation).

First, install `direnv`:

| OS     | command                 |
| ------ | ----------------------- |
| macOS  | brew install direnv     |
| ubuntu | sudo apt install direnv |

For all other OSes, see the [direnv installation guide](https://direnv.net/docs/installation.html).

> [!NOTE]
> Don't forget to [set up direnv integration with your shell](https://direnv.net/docs/hook.html).

Next, clone the repo and move into the directory:

```sh
git clone git@github.com:ngrok-oss/mantle.git
cd frontend
```

Next, run:

```sh
direnv allow
```

> [!WARNING]
> If `direnv allow` does nothing for you (you should see things happening!), consider following the [guides to integrate direnv with your shell](https://direnv.net/docs/hook.html) and then try `direnv allow` again! As a last resort, you can follow the [manual installation instructions up above](#manual-installation).

This will install `nvm` (if not already installed) as well as set the correct `node` and `pnpm` versions for you.
It will also run `pnpm install` at the end to install all `node_modules`.

#### Manual Installation

If you prefer to manually manage and install the tooling yourself, follow these steps:

1. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or your node version manager of choice.
2. Ensure that `node 20` is installed. With `nvm`, run `nvm install`.
3. Enable `pnpm` with `corepack`: `corepack enable pnpm`
4. Install `pnpm` with `corepack`: `corepack install`
5. Install project dependencies with `pnpm`: `pnpm install`
