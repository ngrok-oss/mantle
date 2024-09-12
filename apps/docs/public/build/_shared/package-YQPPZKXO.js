import "/build/_shared/chunk-UNR7476Z.js";

// package.json
var name = "@ngrok/mantle";
var description = "mantle is ngrok's UI library and design system.";
var author = "ngrok";
var license = "MIT";
var version = "0.1.51";
var homepage = "https://mantle.ngrok.com";
var repository = {
  type: "git",
  url: "https://github.com/ngrok-oss/mantle"
};
var packageManager = "pnpm@9.9.0";
var sideEffects = [
  "*.css"
];
var type = "module";
var browserslist = [
  "last 2 years, not dead, > 0.2%"
];
var files = [
  "dist",
  "assets",
  "package.json"
];
var engines = {
  node: "^20.0.0"
};
var scripts = {
  build: "rm -rf dist && NODE_OPTIONS='--max-old-space-size=16384' tsup",
  "docs:build": "remix build",
  "docs:dev": "remix dev --manual",
  "docs:serve": "remix-serve ./build/index.js",
  "fmt:check": "prettier --check .",
  fmt: "prettier --write .",
  "gen:docs-routes": "tsx ./scripts/gen-docs-routes",
  prepublishOnly: "pnpm run build",
  serve: "pnpm run docs:serve",
  start: "pnpm run docs:dev",
  test: "TZ=UTC vitest",
  typecheck: "tsc --incremental --noEmit --skipLibCheck -P ./tsconfig.json"
};
var dependencies = {
  "@headlessui/react": "2.1.3",
  "@radix-ui/react-dialog": "1.1.1",
  "@radix-ui/react-dropdown-menu": "2.1.1",
  "@radix-ui/react-popover": "1.1.1",
  "@radix-ui/react-select": "2.1.1",
  "@radix-ui/react-separator": "1.1.0",
  "@radix-ui/react-slot": "1.1.0",
  "@radix-ui/react-switch": "1.1.0",
  "@radix-ui/react-tabs": "1.1.0",
  "@radix-ui/react-tooltip": "1.1.2",
  "@remix-run/css-bundle": "2.11.2",
  "@remix-run/node": "2.11.2",
  "@remix-run/react": "2.11.2",
  "@remix-run/serve": "2.11.2",
  "@uidotdev/usehooks": "2.4.1",
  "class-variance-authority": "0.7.0",
  clsx: "2.1.1",
  isbot: "5.1.17",
  prismjs: "1.29.0",
  "react-day-picker": "8.10.1",
  "tailwind-merge": "2.5.2",
  "tailwindcss-animate": "1.0.7",
  "tiny-invariant": "1.3.3"
};
var devDependencies = {
  "@commander-js/extra-typings": "12.1.0",
  "@ianvs/prettier-plugin-sort-imports": "4.3.1",
  "@phosphor-icons/react": "2.1.7",
  "@remix-run/dev": "2.11.2",
  "@testing-library/dom": "10.4.0",
  "@testing-library/react": "16.0.0",
  "@testing-library/user-event": "14.5.2",
  "@types/node": "20.16.1",
  "@types/prismjs": "1.26.4",
  "@types/react": "18.3.4",
  "@types/react-dom": "18.3.0",
  "@vitejs/plugin-react": "4.3.1",
  "@vitest/ui": "2.0.5",
  autoprefixer: "10.4.20",
  browserslist: "4.23.3",
  commander: "12.1.0",
  copyfiles: "2.4.1",
  "date-fns": "3.6.0",
  jsdom: "25.0.0",
  "mini-svg-data-uri": "1.4.4",
  postcss: "8.4.41",
  prettier: "3.3.3",
  "prettier-plugin-tailwindcss": "0.6.6",
  react: "18.3.1",
  "react-dom": "18.3.1",
  "react-router-dom": "6.26.1",
  tailwindcss: "3.4.10",
  tinyglobby: "0.2.5",
  tsup: "8.2.4",
  tsx: "4.19.0",
  typescript: "5.5.4",
  vite: "5.4.2",
  "vite-tsconfig-paths": "5.0.1",
  vitest: "2.0.5",
  "vitest-dom": "0.1.1",
  zod: "3.23.8"
};
var peerDependencies = {
  "@phosphor-icons/react": "2.1.7",
  "@types/react": "^18.3.4",
  "@types/react-dom": "^18.3.0",
  "date-fns": "^3.6.0",
  postcss: "^8.4.41",
  react: "^18.3.1",
  "react-dom": "^18.3.1",
  tailwindcss: "^3.4.10",
  zod: "^3.23.8"
};
var exports = {
  "./mantle.css": "./assets/mantle.css",
  "./package.json": "./package.json",
  "./tailwind-preset": {
    require: "./dist/tailwind-preset.cjs",
    import: "./dist/tailwind-preset.js",
    types: "./dist/tailwind-preset.d.ts"
  },
  "./alert": {
    import: "./dist/alert.js",
    types: "./dist/alert.d.ts"
  },
  "./anchor": {
    import: "./dist/anchor.js",
    types: "./dist/anchor.d.ts"
  },
  "./badge": {
    import: "./dist/badge.js",
    types: "./dist/badge.d.ts"
  },
  "./button": {
    import: "./dist/button.js",
    types: "./dist/button.d.ts"
  },
  "./calendar": {
    import: "./dist/calendar.js",
    types: "./dist/calendar.d.ts"
  },
  "./card": {
    import: "./dist/card.js",
    types: "./dist/card.d.ts"
  },
  "./checkbox": {
    import: "./dist/checkbox.js",
    types: "./dist/checkbox.d.ts"
  },
  "./code-block": {
    import: "./dist/code-block.js",
    types: "./dist/code-block.d.ts"
  },
  "./color": {
    import: "./dist/color.js",
    types: "./dist/color.d.ts"
  },
  "./compose-refs": {
    import: "./dist/compose-refs.js",
    types: "./dist/compose-refs.d.ts"
  },
  "./cx": {
    import: "./dist/cx.js",
    types: "./dist/cx.d.ts"
  },
  "./dialog": {
    import: "./dist/dialog.js",
    types: "./dist/dialog.d.ts"
  },
  "./dropdown-menu": {
    import: "./dist/dropdown-menu.js",
    types: "./dist/dropdown-menu.d.ts"
  },
  "./hooks": {
    import: "./dist/hooks.js",
    types: "./dist/hooks.d.ts"
  },
  "./icon": {
    import: "./dist/icon.js",
    types: "./dist/icon.d.ts"
  },
  "./inline-code": {
    import: "./dist/inline-code.js",
    types: "./dist/inline-code.d.ts"
  },
  "./input": {
    import: "./dist/input.js",
    types: "./dist/input.d.ts"
  },
  "./label": {
    import: "./dist/label.js",
    types: "./dist/label.d.ts"
  },
  "./media-object": {
    import: "./dist/media-object.js",
    types: "./dist/media-object.d.ts"
  },
  "./popover": {
    import: "./dist/popover.js",
    types: "./dist/popover.d.ts"
  },
  "./progress": {
    import: "./dist/progress.js",
    types: "./dist/progress.d.ts"
  },
  "./radio-group": {
    import: "./dist/radio-group.js",
    types: "./dist/radio-group.d.ts"
  },
  "./select": {
    import: "./dist/select.js",
    types: "./dist/select.d.ts"
  },
  "./separator": {
    import: "./dist/separator.js",
    types: "./dist/separator.d.ts"
  },
  "./sheet": {
    import: "./dist/sheet.js",
    types: "./dist/sheet.d.ts"
  },
  "./skeleton": {
    import: "./dist/skeleton.js",
    types: "./dist/skeleton.d.ts"
  },
  "./switch": {
    import: "./dist/switch.js",
    types: "./dist/switch.d.ts"
  },
  "./table": {
    import: "./dist/table.js",
    types: "./dist/table.d.ts"
  },
  "./tabs": {
    import: "./dist/tabs.js",
    types: "./dist/tabs.d.ts"
  },
  "./text-area": {
    import: "./dist/text-area.js",
    types: "./dist/text-area.d.ts"
  },
  "./theme-provider": {
    import: "./dist/theme-provider.js",
    types: "./dist/theme-provider.d.ts"
  },
  "./tooltip": {
    import: "./dist/tooltip.js",
    types: "./dist/tooltip.d.ts"
  },
  "./types": {
    types: "./dist/types.d.ts"
  }
};
var package_default = {
  name,
  description,
  author,
  license,
  version,
  homepage,
  repository,
  packageManager,
  sideEffects,
  type,
  browserslist,
  files,
  engines,
  scripts,
  dependencies,
  devDependencies,
  peerDependencies,
  exports
};
export {
  author,
  browserslist,
  package_default as default,
  dependencies,
  description,
  devDependencies,
  engines,
  exports,
  files,
  homepage,
  license,
  name,
  packageManager,
  peerDependencies,
  repository,
  scripts,
  sideEffects,
  type,
  version
};
//# sourceMappingURL=/build/_shared/package-YQPPZKXO.js.map
