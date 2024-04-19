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

## Development

### Installation

Mantle uses [bun](https://bun.sh/) as its package manager. First, install the dependencies in the repo’s directory by running `bun install`.

### Local Development

Run `bun run docs:dev` to run Remix's development mode, rebuilding assets on file changes.

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## Production Deployment

We use GitHub Actions to deploy our production site to vercel and publish to npm.
