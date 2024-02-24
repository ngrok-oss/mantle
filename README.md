# Mantle

[Mantle](https://mantle.ngrok.com) is [ngrok](https://ngrok.com/)’s UI library and design system. It’s based on [shadcn/ui](https://ui.shadcn.com) and [Radix](https://www.radix-ui.com) with [Tailwind](https://tailwindcss.com/) providing styling. It’s documented using [Remix](https://remix.run/docs).

### Installation

Mantle uses `pnpm` as its package manager. First, install the dependencies in the repo’s directory by running `pnpm install`.

### Development and preview

Run `pnpm run docs:dev` to run Remix's development mode, rebuilding assets on file changes.

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## Deployment

First, build the app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

We have chosen vercel to deploy to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
