# Contributing to Mantle

Thank you for your interest in contributing to the Mantle! We welcome contributions from the community and are grateful for your help in making our design system better.

## Getting started

First, [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) and clone to your local machine:

```sh
git clone git@github.com:<your username>/mantle.git
cd mantle
```

## Installation

The following prerequisites are required to contribute to `@ngrok/mantle`. Install the prerequisites through either the [automated](#automated-installation) or [manual](#manual-installation) installation guides below.

- [Node 20](https://nodejs.org/en/download)
- [pnpm 9](https://pnpm.io/installation#using-npm)
- [nvm](https://github.com/nvm-sh/nvm)

### Automated Installation

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

Next, run:

```sh
direnv allow
```

> [!WARNING]
> If `direnv allow` does nothing for you (you should see things happening!), consider following the [guides to integrate direnv with your shell](https://direnv.net/docs/hook.html) and then try `direnv allow` again! As a last resort, you can follow the [manual installation instructions up above](#manual-installation).

This will install `nvm` (if not already installed) as well as set the correct `node` and `pnpm` versions for you. It will also run `pnpm install` at the end to install all `node_modules`.

### Manual Installation

If you prefer to manually manage and install the tooling yourself, follow these steps:

1. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or your node version manager of choice.
2. Ensure that `node 20` is installed. With `nvm`, run `nvm install`.
3. Enable `pnpm` with `corepack`: `corepack enable pnpm`
4. Install `pnpm` with `corepack`: `corepack install`
5. Install project dependencies with `pnpm`: `pnpm install`

## Local Development

We use [Turborepo](https://turbo.build/) and pnpm workspaces to help manage the Mantle monorepo.

To get started, simply run:

```
pnpm -w run start
```

This will spin up the react-router documentation site, and is configured to watch for changes to components (so your changes will be instantly reflected).

## Submitting a Pull Request

Before working on a large change, it is best to open an issue first to discuss.

After making your changes locally, go ahead and submit a pull request. The Mantle team will review your changes and provide feedback or suggestions for improvement. We may also make additional changes to your pull request to ensure that it meets the standards of Mantle.

We use [changesets](https://github.com/changesets/changesets) to help us manage versioning and changelogs. You can think of a changeset as an _intent to change_. If your changes require a publish and release, feel free to add a changeset to your PR, otherwise we can add one for you if you're unsure.

Handy command to add a changeset via the CLI:

```
pnpm -w run changeset
```

Some helpful tips:

- You don't have to use the cli if you prefer to just create one manually (though the cli is definitely easiest).
- Feel free to edit the changeset file however many times you want (it's just an `.md` file) while working on your PR.
- Check out their [common questions](https://github.com/changesets/changesets/blob/main/docs/common-questions.md) for more tips or read their [docs](https://github.com/changesets/changesets/tree/main/docs).

Once your pull request has been reviewed and any necessary changes have been made, it will be merged.

## Code of conduct

We ask that all contributors follow our [code of conduct](CODE_OF_CONDUCT.md) when contributing. This code of conduct outlines our expectations for behavior and helps ensure that the ngrok community is a welcoming and inclusive place for everyone.
