---
"@ngrok/mantle": patch
---

Remove unused dependencies and config.

- Drop the `browserslist` devDependency and config key — nothing in the current toolchain reads them. The build uses tsdown with an explicit `target`, and Tailwind 4 lowers CSS via its bundled lightningcss with its own defaults.
- Drop the unused `date-fns` `devDependency` and `peerDependency`. Mantle's source never imports `date-fns`; the calendar's `react-day-picker` declares `date-fns` as its own dependency, so consumers no longer need to install it just for Mantle.

Both packages remain available transitively where they are actually used.
