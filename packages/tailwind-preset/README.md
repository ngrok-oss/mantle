# @ngrok/mantle-tailwind-preset

A Tailwind CSS preset for ngrok's Mantle design system.

To get started, install the preset with your preferred package manager:

| package manager | command                                      |
| --------------- | -------------------------------------------- |
| npm             | npm install -D @ngrok/mantle-tailwind-preset |
| yarn            | yarn add -D @ngrok/mantle-tailwind-preset    |
| pnpm            | pnpm add -D @ngrok/mantle-tailwind-preset    |
| bun             | bun add -D @ngrok/mantle-tailwind-preset     |

Then, add the [preset](https://tailwindcss.com/docs/presets) to your tailwind configuration.

```ts
import { mantlePreset } from "@ngrok/mantle-tailwind-preset";
import type { Config } from "tailwindcss";

export default {
	presets: [mantlePreset],
	// ... the rest of your tailwind config!
} satisfies Config;
```
