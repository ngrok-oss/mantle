var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// ../../packages/mantle/package.json
var require_package = __commonJS({
  "../../packages/mantle/package.json"(exports, module) {
    module.exports = {
      name: "@ngrok/mantle",
      description: "mantle is ngrok's UI library and design system.",
      author: "ngrok",
      license: "MIT",
      version: "0.1.55",
      homepage: "https://mantle.ngrok.com",
      repository: {
        type: "git",
        url: "https://github.com/ngrok-oss/mantle"
      },
      sideEffects: [
        "*.css"
      ],
      type: "module",
      browserslist: [
        "last 2 years, not dead, > 0.2%"
      ],
      files: [
        "dist",
        "assets",
        "package.json"
      ],
      engines: {
        node: "^20.0.0"
      },
      scripts: {
        build: "rm -rf dist && NODE_OPTIONS='--max-old-space-size=16384' tsup",
        dev: "tsup --watch",
        lint: "eslint .",
        test: "TZ=UTC vitest run",
        "test:watch": "TZ=UTC vitest watch",
        "test:ui": "TZ=UTC vitest --ui",
        typecheck: "tsc",
        prepublishOnly: "pnpm run build"
      },
      dependencies: {
        "@headlessui/react": "2.1.5",
        "@radix-ui/react-dialog": "1.1.1",
        "@radix-ui/react-dropdown-menu": "2.1.1",
        "@radix-ui/react-popover": "1.1.1",
        "@radix-ui/react-select": "2.1.1",
        "@radix-ui/react-separator": "1.1.0",
        "@radix-ui/react-slot": "1.1.0",
        "@radix-ui/react-switch": "1.1.0",
        "@radix-ui/react-tabs": "1.1.0",
        "@radix-ui/react-tooltip": "1.1.2",
        "@uidotdev/usehooks": "2.4.1",
        "class-variance-authority": "0.7.0",
        clsx: "2.1.1",
        prismjs: "1.29.0",
        "mini-svg-data-uri": "1.4.4",
        "react-day-picker": "8.10.1",
        "tailwind-merge": "2.5.2",
        "tailwindcss-animate": "1.0.7",
        "tiny-invariant": "1.3.3"
      },
      devDependencies: {
        "@cfg/tsconfig": "workspace:*",
        "@phosphor-icons/react": "2.1.7",
        "@testing-library/dom": "10.4.0",
        "@testing-library/react": "16.0.1",
        "@testing-library/user-event": "14.5.2",
        "@types/prismjs": "1.26.4",
        "@types/node": "20.16.5",
        "@types/react": "18.3.5",
        "@types/react-dom": "18.3.0",
        "@vitejs/plugin-react": "4.3.1",
        "@vitest/ui": "2.0.5",
        autoprefixer: "10.4.20",
        browserslist: "4.23.3",
        "date-fns": "3.6.0",
        jsdom: "25.0.0",
        postcss: "8.4.45",
        react: "18.3.1",
        "react-dom": "18.3.1",
        "react-router-dom": "6.26.1",
        tailwindcss: "3.4.10",
        tsup: "8.2.4",
        typescript: "5.5.4",
        vitest: "2.0.5",
        "vitest-dom": "0.1.1",
        zod: "3.23.8"
      },
      peerDependencies: {
        "@phosphor-icons/react": "2.1.7",
        "date-fns": "^3.6.0",
        postcss: "^8.4.45",
        react: "^18.3.1",
        "react-dom": "^18.3.1",
        tailwindcss: "^3.4.10",
        zod: "^3.23.8"
      },
      exports: {
        "./mantle.css": "./assets/mantle.css",
        "./package.json": "./package.json",
        "./tailwind-preset": {
          types: "./dist/tailwind-preset.d.ts",
          require: "./dist/tailwind-preset.cjs",
          import: "./dist/tailwind-preset.js"
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
      }
    };
  }
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});

// ../../packages/mantle/assets/mantle.css
var mantle_default = "/build/_assets/mantle-QLRDZLTW.css";

// app/root.tsx
import { MantleThemeHeadContent, ThemeProvider, useInitialHtmlThemeProps } from "@ngrok/mantle/theme-provider";
import { TooltipProvider } from "@ngrok/mantle/tooltip";
import { json, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";

// app/components/auto-scroll-to-hash.tsx
import { useLocation } from "@remix-run/react";

// app/hooks/use-isomorphic-layout-effect.tsx
import { useEffect, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect = typeof window < "u" ? useLayoutEffect : useEffect;

// app/hooks/use-prefers-reduced-motion.tsx
import { useEffect as useEffect2, useState } from "react";
var query = "(prefers-reduced-motion: no-preference)";
function usePrefersReducedMotion() {
  let [prefersReducedMotion, setPrefersReducedMotion] = useState(!0);
  return useEffect2(() => {
    let mediaQueryList = window.matchMedia(query);
    setPrefersReducedMotion(!mediaQueryList.matches);
    function listener(event) {
      setPrefersReducedMotion(!event.matches);
    }
    return mediaQueryList.addEventListener("change", listener), () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []), prefersReducedMotion;
}

// app/components/auto-scroll-to-hash.tsx
import { useMemo } from "react";
function AutoScrollToHash({ disabled = !1 }) {
  return useAutoScrollToHash({ disabled }), null;
}
function useAutoScrollToHash({ disabled = !1 } = {}) {
  let { hash } = useLocation(), scrollBehavior = useScrollBehavior();
  useIsomorphicLayoutEffect(() => {
    let elementId = hash.replace(/^#/, "");
    if (disabled)
      return () => {
      };
    let handle = 0;
    return elementId && (handle = window.requestAnimationFrame(() => {
      document.getElementById(elementId)?.scrollIntoView({ behavior: scrollBehavior });
    })), () => {
      window.cancelAnimationFrame(handle);
    };
  });
}
function useScrollBehavior() {
  let prefersReducedMotion = usePrefersReducedMotion();
  return useMemo(() => prefersReducedMotion ? "auto" : "smooth", [prefersReducedMotion]);
}

// app/components/layout.tsx
import { Button } from "@ngrok/mantle/button";
import { cx as cx2 } from "@ngrok/mantle/cx";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@ngrok/mantle/select";
import { isTheme, theme, useTheme } from "@ngrok/mantle/theme-provider";
import { List } from "@phosphor-icons/react/List";
import { Sun } from "@phosphor-icons/react/Sun";
import { X } from "@phosphor-icons/react/X";
import { Link } from "@remix-run/react";

// app/components/nav-link.tsx
import { cx } from "@ngrok/mantle/cx";
import { NavLink as RRNavLink } from "@remix-run/react";

// app/components/navigation-context.tsx
import { createContext, useContext, useState as useState2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var NavigationContext = createContext(void 0), NavigationProvider = ({ children }) => {
  let [showNavigation, setShowNavigation] = useState2(!1);
  return /* @__PURE__ */ jsx2(NavigationContext.Provider, { value: { showNavigation, setShowNavigation }, children });
}, useNavigation = () => {
  let context = useContext(NavigationContext);
  if (!context)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return context;
};

// app/components/nav-link.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function NavLink({ className, hash, rawTo, search, to, ...props }) {
  let { setShowNavigation } = useNavigation();
  return /* @__PURE__ */ jsx3(
    RRNavLink,
    {
      to: {
        pathname: to ?? rawTo,
        search,
        hash
      },
      className: (args) => cx(
        "text-muted hover:text-strong block py-1",
        args.isActive && "text-accent-600 hover:text-accent-600 font-medium",
        typeof className == "function" ? className(args) : className
      ),
      onClick: (e) => {
        setShowNavigation(!1), props.onClick && props.onClick(e);
      },
      ...props
    }
  );
}

// app/components/layout.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var NgrokLogo = () => /* @__PURE__ */ jsx4("svg", { width: "82", height: "34", className: "xs:block hidden", children: /* @__PURE__ */ jsx4(
  "path",
  {
    fill: "hsl(var(--blue-600))",
    d: "M27.888 13.4c-1.136-1.257-2.54-1.89-4.21-1.89-1.028 0-1.976.198-2.847.599a6.99 6.99 0 0 0-2.258 1.636 7.864 7.864 0 0 0-1.498 2.446c-.367.935-.55 1.947-.55 3.041 0 1.072.17 2.05.507 2.933a6.614 6.614 0 0 0 1.43 2.26 6.562 6.562 0 0 0 2.19 1.474c.845.353 1.772.53 2.78.53.456 0 .879-.035 1.263-.1a4.987 4.987 0 0 0 1.101-.318c.35-.15.692-.34 1.033-.569a8.894 8.894 0 0 0 1.059-.874v3.734h-.005v.362h-4.661l-3.505 3.98v.684H32.87V11.902h-4.981V13.4Zm-.013 6.844a3.646 3.646 0 0 1-.687 1.042 3.15 3.15 0 0 1-2.267.943 3.22 3.22 0 0 1-1.28-.25 3.072 3.072 0 0 1-1.021-.693 3.363 3.363 0 0 1-.674-1.042 3.316 3.316 0 0 1-.248-1.292c0-.444.085-.861.26-1.249a3.23 3.23 0 0 1 .705-1.012 3.552 3.552 0 0 1 1.016-.693 2.931 2.931 0 0 1 1.238-.263c.422 0 .828.082 1.225.25.393.163.738.396 1.033.693.294.297.525.637.704 1.025.175.388.26.814.26 1.28-.004.443-.089.865-.264 1.261ZM13.989 13.633a5.356 5.356 0 0 0-1.802-1.373 4.263 4.263 0 0 0-.5-.19 5.671 5.671 0 0 0-.806-.185H7.33l-2.347 2.7v-2.644H0v14.246h4.982v-9.612H9.66l.389-.009v9.617h4.981v-8.91c0-.758-.072-1.435-.217-2.029a3.964 3.964 0 0 0-.824-1.61ZM47.52 11.902h-5.434l-2.16 2.455v-2.455H34.94v14.247h4.994l.004-9.536h3.624L47.52 12.1v-.198ZM74 18.483l6.813-6.34v-.241h-6.566l-5.225 5.138V3.099H64.04v23.045h4.982v-5.8l5.477 5.8h6.703v-.271l-7.203-7.39ZM60.586 13.525c-.76-.676-1.66-1.201-2.698-1.58-1.037-.38-2.16-.569-3.372-.569-1.23 0-2.365.194-3.398.582a8.44 8.44 0 0 0-2.685 1.593 7.29 7.29 0 0 0-1.763 2.39 6.984 6.984 0 0 0-.632 2.96c0 1.166.21 2.226.632 3.177a7.305 7.305 0 0 0 1.75 2.455 7.727 7.727 0 0 0 2.655 1.585c1.03.37 2.148.556 3.36.556 1.23 0 2.37-.185 3.428-.556 1.054-.37 1.96-.891 2.71-1.572a7.37 7.37 0 0 0 1.776-2.416c.431-.934.65-1.964.65-3.096 0-1.129-.214-2.162-.633-3.097a7.23 7.23 0 0 0-1.78-2.412Zm-3.112 6.745a3.644 3.644 0 0 1-.687 1.042 3.053 3.053 0 0 1-1.016.693c-.397.168-.811.25-1.25.25-.44 0-.859-.082-1.256-.25a3.01 3.01 0 0 1-1.016-.693 3.558 3.558 0 0 1-.687-1.042 3.225 3.225 0 0 1-.26-1.318c0-.444.085-.862.26-1.25.175-.387.401-.727.687-1.024a2.99 2.99 0 0 1 1.016-.694c.397-.168.811-.25 1.255-.25.44 0 .858.082 1.251.25a2.95 2.95 0 0 1 1.016.694c.286.297.512.646.687 1.042.175.396.26.818.26 1.262 0 .46-.085.892-.26 1.288Z"
  }
) }), MantleLogo = () => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "94", height: "34", children: [
  /* @__PURE__ */ jsx4(
    "path",
    {
      fill: "hsl(var(--gray-600))",
      d: "M23.492 25.826V17.45c0-1.239-.306-2.21-.916-2.913-.61-.702-1.433-1.054-2.469-1.054-.924 0-1.71.278-2.357.833-.63.536-1.082 1.276-1.36 2.219.037.259.056.462.056.61v8.682h-1.942V17.45c0-1.239-.305-2.21-.915-2.913-.61-.702-1.434-1.054-2.47-1.054-.887 0-1.654.25-2.301.75-.63.48-1.082 1.137-1.36 1.969v9.625H5.517v-13.87h1.941v1.61c.925-1.258 2.303-1.887 4.133-1.887 1.831 0 3.2.814 4.106 2.441 1.072-1.627 2.635-2.44 4.688-2.44 1.553 0 2.783.49 3.69 1.47.905.98 1.358 2.311 1.358 3.994v8.682h-1.941ZM34.888 26.104c-2.034 0-3.717-.694-5.049-2.08-1.313-1.406-1.97-3.117-1.97-5.133 0-2.015.657-3.717 1.97-5.104 1.332-1.405 3.015-2.108 5.049-2.108 2.016 0 3.624.657 4.826 1.97v-1.692h1.942v13.87h-1.942v-1.693c-1.202 1.313-2.81 1.97-4.826 1.97Zm.083-1.803c1.073 0 2.016-.232 2.83-.694a5.205 5.205 0 0 0 1.913-1.83v-5.77a5.205 5.205 0 0 0-1.914-1.831c-.813-.463-1.756-.694-2.829-.694-1.498 0-2.728.527-3.69 1.581-.942 1.036-1.414 2.312-1.414 3.828 0 1.517.472 2.802 1.415 3.856.961 1.036 2.191 1.554 3.689 1.554ZM45.454 25.826v-13.87h1.942v1.942c.943-1.479 2.46-2.219 4.55-2.219 1.534 0 2.783.49 3.744 1.47.98.98 1.47 2.312 1.47 3.995v8.682H55.22v-8.405c0-1.257-.333-2.228-.999-2.912-.647-.685-1.553-1.027-2.718-1.027-1.055 0-1.933.287-2.636.86-.684.555-1.174 1.304-1.47 2.247v9.237h-1.942ZM66.04 25.965c-1.146 0-2.108-.342-2.885-1.026-.758-.685-1.137-1.674-1.137-2.968v-8.184h-3.523v-1.83h3.523V8.1h1.942v3.856h4.327v1.83H63.96v8.017c0 .832.203 1.443.61 1.83.426.39.971.583 1.637.583.74 0 1.424-.175 2.053-.527l.582 1.665c-.777.407-1.71.61-2.802.61ZM70.629 25.826V5.576h1.941v20.25H70.63ZM82.368 26.104c-2.127 0-3.847-.685-5.16-2.053-1.313-1.387-1.97-3.107-1.97-5.16 0-2.034.676-3.744 2.026-5.131 1.35-1.387 3.07-2.08 5.16-2.08 1.867 0 3.42.628 4.66 1.886 1.238 1.257 1.858 2.968 1.858 5.131v.527H77.236c0 1.443.48 2.654 1.442 3.634.962.962 2.192 1.443 3.69 1.443 1.11 0 2.015-.213 2.718-.638.721-.444 1.34-1.1 1.859-1.97l1.58 1.026c-1.312 2.257-3.365 3.385-6.157 3.385Zm-4.966-8.6h9.515c-.185-1.239-.694-2.219-1.526-2.94-.832-.721-1.85-1.082-3.051-1.082-1.202 0-2.275.37-3.218 1.11-.924.721-1.498 1.692-1.72 2.912Z"
    }
  ),
  /* @__PURE__ */ jsx4(
    "path",
    {
      fill: "hsl(var(--blue-500))",
      d: "M0 0v5h2v24H0v5h5v-2h84v2h5v-5h-2V5h2V0h-5v2H5V0H0Zm4 1v3H1V1h3Zm85 2v2h2v24h-2v2H5v-2H3V5h2V3h84ZM1 30h3v3H1v-3Zm92 0v3h-3v-3h3ZM90 1h3v3h-3V1Z"
    }
  )
] });
function Layout({ children, className, currentVersion, style }) {
  let [currentTheme, setTheme] = useTheme(), { showNavigation, setShowNavigation } = useNavigation();
  return /* @__PURE__ */ jsxs("main", { className: cx2("mx-auto h-full max-w-7xl sm:px-4", className), style, children: [
    /* @__PURE__ */ jsxs("header", { className: "flex h-20 items-center gap-4 px-4 sm:px-0", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          type: "button",
          appearance: "outlined",
          priority: "neutral",
          className: "w-11 sm:w-9 md:hidden",
          onClick: () => {
            setShowNavigation(!showNavigation);
          },
          children: [
            !showNavigation && /* @__PURE__ */ jsx4(List, { className: "h-6 w-6 shrink-0" }),
            showNavigation && /* @__PURE__ */ jsx4(X, { className: "h-6 w-6 shrink-0" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "static top-auto flex sm:top-[1.4rem] md:fixed", children: [
        /* @__PURE__ */ jsx4(NgrokLogo, {}),
        /* @__PURE__ */ jsx4(MantleLogo, {})
      ] }),
      /* @__PURE__ */ jsx4("p", { className: "text-strong font-mono text-xs md:ml-48", children: /* @__PURE__ */ jsx4("a", { href: "https://github.com/ngrok-oss/mantle/releases", children: currentVersion }) }),
      /* @__PURE__ */ jsxs(
        Select,
        {
          value: currentTheme,
          onChange: (value) => {
            let maybeNewTheme = isTheme(value) ? value : void 0;
            maybeNewTheme && setTheme(maybeNewTheme);
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "ml-auto", children: [
              /* @__PURE__ */ jsx4("span", { className: "sr-only", children: "Theme Switcher" }),
              /* @__PURE__ */ jsx4(SelectTrigger, { className: "w-min", children: /* @__PURE__ */ jsx4(Sun, { className: "mr-1 h-6 w-6" }) })
            ] }),
            /* @__PURE__ */ jsx4(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
              /* @__PURE__ */ jsx4(SelectLabel, { children: "Choose a theme" }),
              /* @__PURE__ */ jsx4(SelectItem, { value: theme("system"), children: "System" }),
              /* @__PURE__ */ jsx4(SelectItem, { value: theme("light"), children: "Light" }),
              /* @__PURE__ */ jsx4(SelectItem, { value: theme("dark"), children: "Dark" }),
              /* @__PURE__ */ jsx4(SelectItem, { value: theme("light-high-contrast"), children: "Light High Contrast" }),
              /* @__PURE__ */ jsx4(SelectItem, { value: theme("dark-high-contrast"), children: "Dark High Contrast" })
            ] }) })
          ]
        }
      )
    ] }),
    showNavigation && /* @__PURE__ */ jsx4("div", { className: "bg-card fixed bottom-0 left-0 right-0 top-20 z-50 p-4 md:hidden", children: /* @__PURE__ */ jsx4(Navigation, { className: "scrollbar h-full overflow-auto overscroll-contain" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx4("div", { className: "bottom-0 hidden w-44 md:block", children: /* @__PURE__ */ jsx4("div", { className: "fixed bottom-0 top-20 w-44", children: /* @__PURE__ */ jsx4(Navigation, { className: "scrollbar scroll-shadow h-full overflow-auto py-4" }) }) }),
      /* @__PURE__ */ jsx4("article", { className: "bg-card w-0 flex-1 p-4 shadow-2xl sm:mb-4 sm:rounded-lg md:p-9 lg:mb-9", children })
    ] })
  ] });
}
var prodReadyComponents = [
  "Alert",
  "Anchor",
  "Badge",
  "Button",
  "Card",
  "Checkbox",
  "Code Block",
  "Dialog",
  "Dropdown Menu",
  "Icon Button",
  "Icon",
  "Inline Code",
  "Input",
  "Label",
  "Media Object",
  "Password Input",
  "Progress Donut",
  "Radio Group",
  "Select",
  "Separator",
  "Sheet",
  "Skeleton",
  "Switch",
  "Table",
  "Tabs",
  "Text Area",
  "Theme Provider"
], previewComponents = [
  //,
  "Calendar",
  "Popover",
  "Tooltip"
], prodReadyComponentRouteLookup = {
  Alert: "/components/alert",
  Anchor: "/components/anchor",
  Badge: "/components/badge",
  Button: "/components/button",
  Card: "/components/card",
  Checkbox: "/components/checkbox",
  "Code Block": "/components/code-block",
  Dialog: "/components/dialog",
  "Dropdown Menu": "/components/dropdown-menu",
  Icon: "/components/icon",
  "Icon Button": "/components/icon-button",
  "Inline Code": "/components/inline-code",
  Input: "/components/input",
  Label: "/components/label",
  "Media Object": "/components/media-object",
  "Password Input": "/components/password-input",
  "Progress Donut": "/components/progress-donut",
  "Radio Group": "/components/radio-group",
  Select: "/components/select",
  Separator: "/components/separator",
  Sheet: "/components/sheet",
  Skeleton: "/components/skeleton",
  Switch: "/components/switch",
  Table: "/components/table",
  Tabs: "/components/tabs",
  "Text Area": "/components/text-area",
  "Theme Provider": "/components/theme-provider"
}, previewComponentsRouteLookup = {
  Calendar: "/components/preview/calendar",
  Popover: "/components/preview/popover",
  Tooltip: "/components/preview/tooltip"
};
function Navigation({ className, style }) {
  return /* @__PURE__ */ jsx4("nav", { className: cx2("text-sm", className), style, children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "flex flex-col", children: [
    /* @__PURE__ */ jsx4("li", { className: "mb-2 text-xs font-medium uppercase tracking-wider", children: "Welcome" }),
    /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: "/", prefetch: "intent", children: "Overview & Setup" }) }),
    /* @__PURE__ */ jsx4("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Base" }),
    /* @__PURE__ */ jsxs("ul", { role: "list", className: "mt-2", children: [
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: "/base/colors", prefetch: "intent", children: "Colors" }) }),
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: "/base/shadows", prefetch: "intent", children: "Shadows" }) }),
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: "/base/typography", prefetch: "intent", children: "Typography" }) }),
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: "/base/tailwind-variants", prefetch: "intent", children: "Tailwind Variants" }) })
    ] }),
    /* @__PURE__ */ jsx4("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Components" }),
    /* @__PURE__ */ jsx4("ul", { role: "list", className: "mt-2", children: prodReadyComponents.map((component) => /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: prodReadyComponentRouteLookup[component], prefetch: "intent", children: component }) }, component)) }),
    /* @__PURE__ */ jsx4("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Preview Components" }),
    /* @__PURE__ */ jsx4("ul", { role: "list", className: "mt-2", children: previewComponents.map((component) => /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: previewComponentsRouteLookup[component], prefetch: "intent", children: component }) }, component)) }),
    /* @__PURE__ */ jsx4("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Unreleased Components" }),
    /* @__PURE__ */ jsx4("ul", { role: "list", className: "mt-2", children: /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(NavLink, { to: "/components/unreleased/data-table", prefetch: "intent", children: "Data Table" }) }) })
  ] }) });
}

// app/root.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: mantle_default }
], loader = async () => {
  let packageJson = await Promise.resolve().then(() => __toESM(require_package(), 1)), commitSha = process.env.VERCEL_GIT_COMMIT_SHA, deploymentId = process.env.VERCEL_DEPLOYMENT_ID;
  return json({ currentVersion: packageJson.default.version, commitSha, deploymentId });
};
function App() {
  let { currentVersion, commitSha, deploymentId } = useLoaderData(), initialHtmlThemeProps = useInitialHtmlThemeProps({ className: "h-full" });
  return /* @__PURE__ */ jsxs2("html", { id: "ngrok", ...initialHtmlThemeProps, lang: "en-US", dir: "ltr", children: [
    /* @__PURE__ */ jsxs2("head", { children: [
      /* @__PURE__ */ jsx5(MantleThemeHeadContent, {}),
      /* @__PURE__ */ jsx5("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx5("meta", { name: "author", content: "ngrok" }),
      /* @__PURE__ */ jsx5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx5("meta", { name: "commit-sha", content: commitSha }),
      /* @__PURE__ */ jsx5("meta", { name: "deployment-id", content: deploymentId }),
      /* @__PURE__ */ jsx5(Meta, {}),
      /* @__PURE__ */ jsx5(Links, {})
    ] }),
    /* @__PURE__ */ jsxs2("body", { className: "bg-base h-full min-h-full overflow-y-scroll", children: [
      /* @__PURE__ */ jsxs2(ThemeProvider, { children: [
        /* @__PURE__ */ jsx5(AutoScrollToHash, {}),
        /* @__PURE__ */ jsx5(TooltipProvider, { children: /* @__PURE__ */ jsx5(NavigationProvider, { children: /* @__PURE__ */ jsx5(Layout, { currentVersion, children: /* @__PURE__ */ jsx5(Outlet, {}) }) }) })
      ] }),
      /* @__PURE__ */ jsx5(ScrollRestoration, {}),
      /* @__PURE__ */ jsx5(Scripts, {}),
      /* @__PURE__ */ jsx5(LiveReload, {})
    ] })
  ] });
}

// app/routes/components.unreleased.data-table.tsx
var components_unreleased_data_table_exports = {};
__export(components_unreleased_data_table_exports, {
  default: () => Page,
  headers: () => headers,
  meta: () => meta
});
import { Anchor } from "@ngrok/mantle/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";

// ../../packages/mantle/src/unreleased/data-table/data-table.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var DataTable = () => /* @__PURE__ */ jsx6("p", { children: "Coming Soon..." });

// app/components/badges.tsx
import { Badge } from "@ngrok/mantle/badge";
import { HandPalm } from "@phosphor-icons/react/HandPalm";
import { Sparkle } from "@phosphor-icons/react/Sparkle";
import { jsx as jsx7 } from "react/jsx-runtime";
var PreviewBadge = ({ className, style }) => /* @__PURE__ */ jsx7(Badge, { className, appearance: "muted", color: "fuchsia", icon: /* @__PURE__ */ jsx7(Sparkle, {}), style, children: "Preview" }), UnreleasedBadge = ({ className, style }) => /* @__PURE__ */ jsx7(Badge, { className, appearance: "muted", color: "red", icon: /* @__PURE__ */ jsx7(HandPalm, {}), style, children: "Unreleased" });

// app/components/example.tsx
import { cx as cx3 } from "@ngrok/mantle/cx";
import { jsx as jsx8 } from "react/jsx-runtime";
function Example({ children, className, style }) {
  return /* @__PURE__ */ jsx8(
    "div",
    {
      className: cx3(
        "flex items-center justify-center rounded-lg rounded-b-none border border-b-0 border-gray-300 p-4 md:p-16",
        className
      ),
      style,
      children
    }
  );
}

// app/routes/components.unreleased.data-table.tsx
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var meta = () => [
  { title: "@ngrok/mantle \u2014 Unreleased Data Table" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page() {
  return /* @__PURE__ */ jsxs3("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs3("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx9("h1", { id: "data-table", className: "text-5xl font-medium", children: "Data Table" }),
        /* @__PURE__ */ jsx9(UnreleasedBadge, {})
      ] }),
      /* @__PURE__ */ jsxs3("p", { className: "font-body text-body text-xl", children: [
        "Tables purposefully designed for dynamic, application data with features like sorting, filtering, and pagination. Powered by",
        " ",
        /* @__PURE__ */ jsx9(Anchor, { href: "https://tanstack.com/table/latest/docs/introduction", children: "TanStack Table" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx9(Example, { className: "flex-col gap-6", children: /* @__PURE__ */ jsx9(DataTable, {}) }),
        /* @__PURE__ */ jsx9(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs3(CodeBlockBody, { children: [
          /* @__PURE__ */ jsx9(CodeBlockCopyButton, {}),
          /* @__PURE__ */ jsx9(
            CodeBlockCode,
            {
              language: "tsx",
              value: fmtCode`
									import { DNE } from "@ngrok/mantle/data-table";

									<DNE />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx9("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs3("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx9(InlineCode, { children: "DataTable" }),
        " accepts the following props in addition to..."
      ] })
    ] })
  ] });
}

// app/routes/components.preview.calendar.tsx
var components_preview_calendar_exports = {};
__export(components_preview_calendar_exports, {
  default: () => Page2,
  headers: () => headers2,
  meta: () => meta2
});
import { Anchor as Anchor2 } from "@ngrok/mantle/anchor";
import { Calendar } from "@ngrok/mantle/calendar";
import { CodeBlock as CodeBlock2, CodeBlockBody as CodeBlockBody2, CodeBlockCode as CodeBlockCode2, CodeBlockCopyButton as CodeBlockCopyButton2, fmtCode as fmtCode2 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode2 } from "@ngrok/mantle/inline-code";
import { useState as useState3 } from "react";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var meta2 = () => [
  { title: "@ngrok/mantle \u2014 Calendar" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers2 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
}), SingleCalendarExample = () => {
  let [date, setDate] = useState3(void 0);
  return /* @__PURE__ */ jsx10(
    Calendar,
    {
      mode: "single",
      selected: date,
      onSelect: setDate,
      className: "border-card rounded-md border p-2 shadow-md"
    }
  );
}, RangeCalendarExample = () => {
  let [date, setDate] = useState3({ from: void 0, to: void 0 });
  return /* @__PURE__ */ jsx10(
    Calendar,
    {
      mode: "range",
      defaultMonth: date?.from,
      selected: date,
      onSelect: setDate,
      className: "border-card rounded-md border p-2 shadow-md"
    }
  );
}, RangeMultipleCalendarExample = () => {
  let [date, setDate] = useState3({ from: void 0, to: void 0 });
  return /* @__PURE__ */ jsx10(
    Calendar,
    {
      mode: "range",
      defaultMonth: date?.from,
      selected: date,
      onSelect: setDate,
      numberOfMonths: 2,
      className: "border-card rounded-md border p-2 shadow-md"
    }
  );
}, HiddenDaysCalendarExample = () => {
  let [date, setDate] = useState3({ from: void 0, to: void 0 }), hiddenDays = [new Date(2024, 4, 6), new Date(2024, 4, 20), new Date(2024, 4, 11)];
  return /* @__PURE__ */ jsx10(
    Calendar,
    {
      mode: "range",
      defaultMonth: hiddenDays[0],
      selected: date,
      onSelect: setDate,
      hidden: hiddenDays,
      className: "border-card rounded-md border p-2 shadow-md"
    }
  );
}, DisabledDaysCalendarExample = () => {
  let [date, setDate] = useState3({ from: void 0, to: void 0 }), disabledDays = [new Date(2024, 4, 3), new Date(2024, 4, 13), new Date(2024, 4, 14)];
  return /* @__PURE__ */ jsx10(
    Calendar,
    {
      mode: "range",
      defaultMonth: disabledDays[0],
      selected: date,
      onSelect: setDate,
      disabled: disabledDays,
      className: "border-card rounded-md border p-2 shadow-md"
    }
  );
};
function Page2() {
  return /* @__PURE__ */ jsxs4("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs4("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx10("h1", { id: "calendar", className: "text-5xl font-medium", children: "Calendar" }),
        /* @__PURE__ */ jsx10(PreviewBadge, {})
      ] }),
      /* @__PURE__ */ jsx10("p", { className: "font-body text-body text-xl", children: "A date field component that allows users to enter and edit date." }),
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsxs4(Example, { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx10("p", { children: "Single" }),
            /* @__PURE__ */ jsx10(SingleCalendarExample, {})
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx10("p", { children: "Range" }),
            /* @__PURE__ */ jsx10(RangeCalendarExample, {})
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx10("p", { children: "Range Multiple Months" }),
            /* @__PURE__ */ jsx10(RangeMultipleCalendarExample, {})
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx10("p", { children: "Hidden Days" }),
            /* @__PURE__ */ jsx10(HiddenDaysCalendarExample, {})
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx10("p", { children: "Disabled Days" }),
            /* @__PURE__ */ jsx10(DisabledDaysCalendarExample, {})
          ] })
        ] }),
        /* @__PURE__ */ jsx10(CodeBlock2, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs4(CodeBlockBody2, { children: [
          /* @__PURE__ */ jsx10(CodeBlockCopyButton2, {}),
          /* @__PURE__ */ jsx10(
            CodeBlockCode2,
            {
              language: "tsx",
              value: fmtCode2`
									import { Calendar } from "@ngrok/mantle/calendar";

									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
									/>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx10("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs4("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx10(InlineCode2, { children: "Calendar" }),
        " is built on top of",
        " ",
        /* @__PURE__ */ jsx10(Anchor2, { href: "https://react-day-picker.js.org/", children: "React DayPicker" }),
        "."
      ] })
    ] })
  ] });
}

// app/routes/components.preview.popover.tsx
var components_preview_popover_exports = {};
__export(components_preview_popover_exports, {
  default: () => Page3,
  headers: () => headers3,
  meta: () => meta3
});
import { Button as Button2 } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock3, CodeBlockBody as CodeBlockBody3, CodeBlockCode as CodeBlockCode3, CodeBlockCopyButton as CodeBlockCopyButton3, fmtCode as fmtCode3 } from "@ngrok/mantle/code-block";
import { Input } from "@ngrok/mantle/input";
import { Popover, PopoverContent, PopoverTrigger } from "@ngrok/mantle/popover";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var meta3 = () => [
  { title: "@ngrok/mantle \u2014 Popover" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers3 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page3() {
  return /* @__PURE__ */ jsxs5("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx11("h1", { className: "text-5xl font-medium", children: "Popover" }),
      /* @__PURE__ */ jsx11(PreviewBadge, {})
    ] }),
    /* @__PURE__ */ jsx11("p", { className: "font-body text-body text-xl", children: "Displays rich content in a portal, triggered by a button." }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx11(Example, { className: "gap-2", children: /* @__PURE__ */ jsxs5(Popover, { children: [
        /* @__PURE__ */ jsx11(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsx11(Button2, { type: "button", appearance: "filled", children: "Open popover" }) }),
        /* @__PURE__ */ jsx11(PopoverContent, { className: "w-80", children: /* @__PURE__ */ jsxs5(
          "form",
          {
            className: "grid gap-4",
            onSubmit: (event) => {
              event.preventDefault();
            },
            children: [
              /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx11("h4", { className: "font-medium leading-none", children: "Dimensions" }),
                /* @__PURE__ */ jsx11("p", { className: "text-sm text-gray-700", children: "Set the dimensions for the layer." })
              ] }),
              /* @__PURE__ */ jsxs5("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-3 items-center gap-4", children: [
                  /* @__PURE__ */ jsx11("label", { htmlFor: "width", children: "Width" }),
                  /* @__PURE__ */ jsx11(Input, { id: "width", defaultValue: "100%", className: "col-span-2 h-8" })
                ] }),
                /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-3 items-center gap-4", children: [
                  /* @__PURE__ */ jsx11("label", { htmlFor: "maxWidth", children: "Max. width" }),
                  /* @__PURE__ */ jsx11(Input, { id: "maxWidth", defaultValue: "300px", className: "col-span-2 h-8" })
                ] }),
                /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-3 items-center gap-4", children: [
                  /* @__PURE__ */ jsx11("label", { htmlFor: "height", children: "Height" }),
                  /* @__PURE__ */ jsx11(Input, { id: "height", defaultValue: "25px", className: "col-span-2 h-8" })
                ] }),
                /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-3 items-center gap-4", children: [
                  /* @__PURE__ */ jsx11("label", { htmlFor: "maxHeight", children: "Max. height" }),
                  /* @__PURE__ */ jsx11(Input, { id: "maxHeight", defaultValue: "none", className: "col-span-2 h-8" })
                ] })
              ] })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx11(CodeBlock3, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs5(CodeBlockBody3, { children: [
        /* @__PURE__ */ jsx11(CodeBlockCopyButton3, {}),
        /* @__PURE__ */ jsx11(
          CodeBlockCode3,
          {
            language: "tsx",
            value: fmtCode3`
								import { Popover, PopoverContent, PopoverTrigger } from "@ngrok/mantle/popover";

								<Popover>
									<PopoverTrigger asChild>
										<Button>Open popover</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80">
										<p>Reprehenderit veniam excepteur incididunt et ut eu.</p>
									</PopoverContent>
								</Popover>
							`
          }
        )
      ] }) })
    ] })
  ] });
}

// app/routes/components.preview.tooltip.tsx
var components_preview_tooltip_exports = {};
__export(components_preview_tooltip_exports, {
  default: () => Page4,
  headers: () => headers4,
  meta: () => meta4
});
import { Button as Button3 } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock4, CodeBlockBody as CodeBlockBody4, CodeBlockCode as CodeBlockCode4, CodeBlockCopyButton as CodeBlockCopyButton4, fmtCode as fmtCode4 } from "@ngrok/mantle/code-block";
import { Tooltip, TooltipContent, TooltipProvider as TooltipProvider2, TooltipTrigger } from "@ngrok/mantle/tooltip";
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var meta4 = () => [
  { title: "@ngrok/mantle \u2014 Tooltip" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers4 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page4() {
  return /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx12("h1", { className: "text-5xl font-medium", children: "Tooltip" }),
      /* @__PURE__ */ jsx12(PreviewBadge, {})
    ] }),
    /* @__PURE__ */ jsx12("p", { className: "font-body text-body text-xl", children: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." }),
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsx12(Example, { children: /* @__PURE__ */ jsx12(TooltipProvider2, { children: /* @__PURE__ */ jsxs6(Tooltip, { children: [
        /* @__PURE__ */ jsx12(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsx12(Button3, { type: "button", appearance: "filled", priority: "default", children: "Hover" }) }),
        /* @__PURE__ */ jsx12(TooltipContent, { children: /* @__PURE__ */ jsx12("p", { children: "Add to library" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx12(CodeBlock4, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs6(CodeBlockBody4, { children: [
        /* @__PURE__ */ jsx12(CodeBlockCopyButton4, {}),
        /* @__PURE__ */ jsx12(
          CodeBlockCode4,
          {
            language: "tsx",
            value: fmtCode4`
								import { Button } from "@ngrok/mantle/button";
								import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ngrok/mantle/tooltip";

								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button appearance="filled" priority="default">
												Hover
											</Button>
										</TooltipTrigger>
										<TooltipContent>
											<p>Add to library</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							`
          }
        )
      ] }) })
    ] })
  ] });
}

// app/routes/components.password-input.tsx
var components_password_input_exports = {};
__export(components_password_input_exports, {
  default: () => Page5,
  headers: () => headers5,
  meta: () => meta5
});
import { Anchor as Anchor3 } from "@ngrok/mantle/anchor";
import { Button as Button4 } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock5, CodeBlockBody as CodeBlockBody5, CodeBlockCode as CodeBlockCode5, CodeBlockCopyButton as CodeBlockCopyButton5, fmtCode as fmtCode5 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode3 } from "@ngrok/mantle/inline-code";
import { PasswordInput } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";

// app/components/props-table.tsx
import { cx as cx4 } from "@ngrok/mantle/cx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ngrok/mantle/table";
import { Tooltip as Tooltip2, TooltipContent as TooltipContent2, TooltipTrigger as TooltipTrigger2 } from "@ngrok/mantle/tooltip";
import Prism from "prismjs";
import { useEffect as useEffect3, useState as useState4 } from "react";
import assert from "tiny-invariant";
import "prismjs/components/prism-typescript.js";
import { Fragment, jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var PropsTable = ({ children, className, style }) => /* @__PURE__ */ jsx13("div", { className: cx4("overflow-hidden rounded-lg border border-gray-300", className), style, children: /* @__PURE__ */ jsxs7(Table, { children: [
  /* @__PURE__ */ jsx13(TableHeader, { children: /* @__PURE__ */ jsxs7(TableRow, { children: [
    /* @__PURE__ */ jsx13(TableHead, { children: "Prop" }),
    /* @__PURE__ */ jsx13(TableHead, { children: "Type" }),
    /* @__PURE__ */ jsx13(TableHead, { children: "Default" }),
    /* @__PURE__ */ jsx13(TableHead, { children: "Description" })
  ] }) }),
  /* @__PURE__ */ jsx13(TableBody, { className: "font-body text-body text-xs", children })
] }) }), PropRow = ({ children, className, style }) => /* @__PURE__ */ jsx13(TableRow, { className, style, children }), PropNameCell = ({ className, name, optional, style }) => /* @__PURE__ */ jsx13(TableCell, { className: cx4("align-top font-mono", className), style, children: /* @__PURE__ */ jsxs7("p", { className: "flex items-center", children: [
  /* @__PURE__ */ jsx13("span", { className: "token attr-name", children: name }),
  optional && /* @__PURE__ */ jsxs7(Tooltip2, { children: [
    /* @__PURE__ */ jsx13(TooltipTrigger2, { children: "?" }),
    /* @__PURE__ */ jsx13(TooltipContent2, { children: "This prop is optional." })
  ] })
] }) }), PropTypeCell = ({ children, className, style }) => /* @__PURE__ */ jsx13(TableCell, { className: cx4("align-top font-mono", className), style, children }), PropDefaultValueCell = ({ children = /* @__PURE__ */ jsx13(Fragment, { children: "\u2014" }), className, style }) => /* @__PURE__ */ jsx13(TableCell, { className: cx4("align-top font-mono", className), style, children }), PropDescriptionCell = ({ children, className, style }) => /* @__PURE__ */ jsx13(TableCell, { className: cx4("align-top", className), style, children }), ObjectPropType = ({ name }) => /* @__PURE__ */ jsx13("span", { className: "text-red-600", children: name }), ReactNodePropType = () => /* @__PURE__ */ jsx13("span", { className: "text-red-600", children: "ReactNode" }), BooleanPropType = ({ value }) => /* @__PURE__ */ jsx13("span", { className: "text-purple-600", children: typeof value > "u" ? "boolean" : String(value) }), StringPropType = ({ value }) => /* @__PURE__ */ jsx13("span", { className: "token attr-value", children: value ?? "string" }), NumberPropType = ({ value }) => /* @__PURE__ */ jsx13("span", { className: "token number", children: value ?? "number" }), FuncPropType = ({ value }) => {
  let trimmedCode = value?.trim() ?? "", [highlightedCodeInnerHtml, setHighlightedCodeInnerHtml] = useState4(trimmedCode);
  return useEffect3(() => {
    let grammar = Prism.languages.typescript;
    assert(grammar, "Couldn't load Prism grammar for typescript!");
    let newHighlightedCodeInnerHtml = Prism.highlight(trimmedCode, grammar, "typescript");
    setHighlightedCodeInnerHtml(newHighlightedCodeInnerHtml);
  }, [trimmedCode]), /* @__PURE__ */ jsx13("pre", { className: "language-typescript", children: /* @__PURE__ */ jsx13("code", { dangerouslySetInnerHTML: { __html: highlightedCodeInnerHtml } }) });
};

// app/routes/components.password-input.tsx
import { useState as useState5 } from "react";
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var meta5 = () => [
  { title: "@ngrok/mantle \u2014 PasswordInput" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers5 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
}), ControlledVisibility = () => {
  let [showPassword, setShowPassword] = useState5(!1);
  return /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx14(PasswordInput, { showValue: showPassword, onValueVisibilityChange: setShowPassword }),
    /* @__PURE__ */ jsxs8(
      Button4,
      {
        type: "button",
        onClick: () => {
          setShowPassword((v) => !v);
        },
        children: [
          showPassword ? "Hide" : "Show",
          " Password"
        ]
      }
    )
  ] });
};
function Page5() {
  return /* @__PURE__ */ jsxs8("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs8("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx14("h1", { id: "password-input", className: "text-5xl font-medium", children: "Password Input" }),
      /* @__PURE__ */ jsx14("p", { className: "font-body text-body text-xl", children: "Fundamental component for password inputs." }),
      /* @__PURE__ */ jsxs8("div", { children: [
        /* @__PURE__ */ jsxs8(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ jsxs8(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ jsx14("p", { children: "Password" }),
            /* @__PURE__ */ jsx14(PasswordInput, {})
          ] }),
          /* @__PURE__ */ jsxs8(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ jsx14("p", { children: "Password (error)" }),
            /* @__PURE__ */ jsx14(PasswordInput, { validation: "error" })
          ] }),
          /* @__PURE__ */ jsxs8(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ jsx14("p", { children: "Controlled Visibility" }),
            /* @__PURE__ */ jsx14(ControlledVisibility, {})
          ] }),
          /* @__PURE__ */ jsxs8(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ jsx14("p", { children: "Masked Hidden Value" }),
            /* @__PURE__ */ jsx14(PasswordInput, { maskHiddenValue: !0 })
          ] })
        ] }),
        /* @__PURE__ */ jsx14(CodeBlock5, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs8(CodeBlockBody5, { children: [
          /* @__PURE__ */ jsx14(CodeBlockCopyButton5, {}),
          /* @__PURE__ */ jsx14(
            CodeBlockCode5,
            {
              language: "tsx",
              value: fmtCode5`
									import { PasswordInput } from "@ngrok/mantle/input";

									<PasswordInput />
									<PasswordInput invalid />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs8("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx14("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs8("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx14(InlineCode3, { children: "PasswordInput" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx14(Anchor3, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input", children: "standard HTML input attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs8(PropsTable, { children: [
        /* @__PURE__ */ jsxs8(PropRow, { children: [
          /* @__PURE__ */ jsx14(PropNameCell, { name: "maskHiddenValue", optional: !0 }),
          /* @__PURE__ */ jsx14(PropTypeCell, { children: /* @__PURE__ */ jsx14(BooleanPropType, {}) }),
          /* @__PURE__ */ jsx14(PropDefaultValueCell, { children: /* @__PURE__ */ jsx14(BooleanPropType, { value: !1 }) }),
          /* @__PURE__ */ jsx14(PropDescriptionCell, { children: /* @__PURE__ */ jsx14("p", { children: "Mask the true length of the password input with a fixed width when the value is hidden and the input is not focused." }) })
        ] }),
        /* @__PURE__ */ jsxs8(PropRow, { children: [
          /* @__PURE__ */ jsx14(PropNameCell, { name: "onValueVisibilityChange", optional: !0 }),
          /* @__PURE__ */ jsx14(PropTypeCell, { children: /* @__PURE__ */ jsx14(FuncPropType, { value: "(value: boolean) => void" }) }),
          /* @__PURE__ */ jsx14(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx14(PropDescriptionCell, { children: /* @__PURE__ */ jsx14("p", { children: "Callback for when the visibility of the password value changes." }) })
        ] }),
        /* @__PURE__ */ jsxs8(PropRow, { children: [
          /* @__PURE__ */ jsx14(PropNameCell, { name: "showValue", optional: !0 }),
          /* @__PURE__ */ jsx14(PropTypeCell, { children: /* @__PURE__ */ jsx14(BooleanPropType, {}) }),
          /* @__PURE__ */ jsx14(PropDefaultValueCell, { children: /* @__PURE__ */ jsx14(BooleanPropType, { value: !1 }) }),
          /* @__PURE__ */ jsx14(PropDescriptionCell, { children: /* @__PURE__ */ jsx14("p", { children: "Show/hide the password value as a controlled state" }) })
        ] }),
        /* @__PURE__ */ jsxs8(PropRow, { children: [
          /* @__PURE__ */ jsx14(PropNameCell, { name: "validation", optional: !0 }),
          /* @__PURE__ */ jsx14(PropTypeCell, { children: /* @__PURE__ */ jsxs8("ul", { children: [
            /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(StringPropType, { value: "error" }) }),
            /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(StringPropType, { value: "success" }) }),
            /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(StringPropType, { value: "warning" }) }),
            /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(BooleanPropType, { value: !1 }) }),
            /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(FuncPropType, { value: '() => "error" | "success" | "warning" | false' }) })
          ] }) }),
          /* @__PURE__ */ jsx14(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs8(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs8("p", { children: [
              "Use the ",
              /* @__PURE__ */ jsx14(InlineCode3, { children: "validation" }),
              " prop to show if the input has a specific validation status. This will change the border and outline of the input."
            ] }),
            /* @__PURE__ */ jsxs8("p", { children: [
              "The ",
              /* @__PURE__ */ jsx14(InlineCode3, { children: "false" }),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ jsx14(InlineCode3, { children: "undefined" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs8("p", { children: [
              "Setting ",
              /* @__PURE__ */ jsx14(InlineCode3, { children: "validation" }),
              " to ",
              /* @__PURE__ */ jsx14(InlineCode3, { children: "error" }),
              " also sets",
              " ",
              /* @__PURE__ */ jsx14(InlineCode3, { children: "aria-invalid" }),
              "."
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.progress-donut.tsx
var components_progress_donut_exports = {};
__export(components_progress_donut_exports, {
  default: () => Page6,
  headers: () => headers6,
  meta: () => meta6
});
import { Anchor as Anchor4 } from "@ngrok/mantle/anchor";
import { CodeBlock as CodeBlock6, CodeBlockBody as CodeBlockBody6, CodeBlockCode as CodeBlockCode6, CodeBlockCopyButton as CodeBlockCopyButton6, fmtCode as fmtCode6 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode4 } from "@ngrok/mantle/inline-code";
import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";
import { useState as useState6 } from "react";
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var meta6 = () => [
  { title: "@ngrok/mantle \u2014 Progress Donut" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers6 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page6() {
  return /* @__PURE__ */ jsxs9("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs9("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h1", { className: "text-5xl font-medium", children: "Progress Donut" }),
      /* @__PURE__ */ jsx15("p", { className: "font-body text-body text-xl", children: "Displays an indicator showing the completion progress of a task as a circular progress bar." }),
      /* @__PURE__ */ jsxs9("p", { className: "font-body text-body text-xl", children: [
        "The indicator color is inherited via ",
        /* @__PURE__ */ jsx15(InlineCode4, { children: "currentColor" }),
        ". Override the default (",
        /* @__PURE__ */ jsx15(InlineCode4, { children: "accent-600" }),
        ") by setting the",
        /* @__PURE__ */ jsx15(InlineCode4, { children: "ProgressDonutIndicator" }),
        "'s text color."
      ] }),
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsxs9(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ jsx15(ProgressDonut, { value: 60, className: "size-10", children: /* @__PURE__ */ jsx15(ProgressDonutIndicator, {}) }),
          /* @__PURE__ */ jsx15(ProgressDonut, { value: 60, className: "size-10", children: /* @__PURE__ */ jsx15(ProgressDonutIndicator, { className: "text-fuchsia-600" }) }),
          /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-1.5 text-sm", children: [
              /* @__PURE__ */ jsx15(ProgressDonut, { value: 100, className: "size-6", children: /* @__PURE__ */ jsx15(ProgressDonutIndicator, {}) }),
              "Data transfer out"
            ] }),
            /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-1.5 text-xs", children: [
              /* @__PURE__ */ jsx15("div", { className: "grid w-6 place-items-center", children: /* @__PURE__ */ jsx15(ProgressDonut, { value: 100, className: "size-4", strokeWidth: "0.315rem", children: /* @__PURE__ */ jsx15(ProgressDonutIndicator, {}) }) }),
              "Included"
            ] }),
            /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-1.5 text-xs", children: [
              /* @__PURE__ */ jsx15("div", { className: "grid w-6 place-items-center", children: /* @__PURE__ */ jsx15(ProgressDonut, { className: "size-4", value: "indeterminate", strokeWidth: "0.315rem", children: /* @__PURE__ */ jsx15(ProgressDonutIndicator, {}) }) }),
              "Additional"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx15(CodeBlock6, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs9(CodeBlockBody6, { children: [
          /* @__PURE__ */ jsx15(CodeBlockCopyButton6, {}),
          /* @__PURE__ */ jsx15(
            CodeBlockCode6,
            {
              language: "tsx",
              value: fmtCode6`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut value={60} className="size-10">
										<ProgressDonutIndicator />
									</ProgressDonut>

									<ProgressDonut value={60} className="size-10">
										<ProgressDonutIndicator className="text-fuchsia-600" />
									</ProgressDonut>

									<div className="flex flex-col gap-2">
										<div className="flex items-center gap-1.5 text-sm">
											<ProgressDonut value={100} className="size-6">
												<ProgressDonutIndicator />
											</ProgressDonut>
											Data transfer out
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={100} className="size-4" strokeWidth="0.315rem">
													<ProgressDonutIndicator />
												</ProgressDonut>
											</div>
											Included
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={25} className="size-4" strokeWidth="0.315rem">
													<ProgressDonutIndicator className="text-success-600" />
												</ProgressDonut>
											</div>
											Additional
										</div>
									</div>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs9("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h2", { id: "indeterminate", className: "text-3xl font-medium", children: "Indeterminate Value" }),
      /* @__PURE__ */ jsxs9("p", { className: "font-body text-body text-xl", children: [
        "You can set the ",
        /* @__PURE__ */ jsx15(InlineCode4, { children: "value" }),
        " prop to ",
        /* @__PURE__ */ jsx15(InlineCode4, { children: '"indeterminate"' }),
        " to show the progress bar in an indeterminate state."
      ] }),
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsx15(Example, { children: /* @__PURE__ */ jsx15(ProgressDonut, { className: "size-10", value: "indeterminate", children: /* @__PURE__ */ jsx15(ProgressDonutIndicator, {}) }) }),
        /* @__PURE__ */ jsx15(CodeBlock6, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs9(CodeBlockBody6, { children: [
          /* @__PURE__ */ jsx15(CodeBlockCopyButton6, {}),
          /* @__PURE__ */ jsx15(
            CodeBlockCode6,
            {
              language: "tsx",
              value: fmtCode6`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut className="size-10" value="indeterminate">
										<ProgressDonutIndicator />
									</ProgressDonut>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs9("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h2", { id: "dynamic-colors", className: "text-3xl font-medium", children: "Dynamic Colors" }),
      /* @__PURE__ */ jsxs9("p", { className: "font-body text-body text-xl", children: [
        "The color of the ",
        /* @__PURE__ */ jsx15(InlineCode4, { children: "ProgressDonutIndicator" }),
        " is inherited from the parent text color using",
        " ",
        /* @__PURE__ */ jsx15(InlineCode4, { children: "currentColor" }),
        ". Using this, you can easily change the color of it based on the current progress value."
      ] }),
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsx15(Example, { children: /* @__PURE__ */ jsx15("div", { className: "min-w-72", children: /* @__PURE__ */ jsx15(DynamicColorsExample, {}) }) }),
        /* @__PURE__ */ jsx15(CodeBlock6, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs9(CodeBlockBody6, { children: [
          /* @__PURE__ */ jsx15(CodeBlockCopyButton6, {}),
          /* @__PURE__ */ jsx15(
            CodeBlockCode6,
            {
              language: "tsx",
              value: fmtCode6`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									const Example = () => {
										const [value, setValue] = useState(0);

										function computeColor() {
											switch (true) {
												case value <= 20:
													return "text-accent-600";
												case value <= 40:
													return "text-success-600";
												case value <= 60:
													return "text-warning-600";
												case value <= 80:
													return "text-fuchsia-600";
												default:
													return "text-danger-600";
											}
										};

										return (
											<form className="space-y-4">
												<ProgressDonut value={value} className="size-10">
													<ProgressDonutIndicator className={computeColor()} />
												</ProgressDonut>
												<label className="block space-y-1">
													<p>Value:</p>
													<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} /> (
													{value}%)
												</label>
											</form>
										);
									};
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs9("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs9("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx15(InlineCode4, { children: "ProgressDonut" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx15(Anchor4, { href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg#attributes", children: "standard HTML svg attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs9(PropsTable, { children: [
        /* @__PURE__ */ jsxs9(PropRow, { children: [
          /* @__PURE__ */ jsx15(PropNameCell, { name: "max", optional: !0 }),
          /* @__PURE__ */ jsx15(PropTypeCell, { children: /* @__PURE__ */ jsx15(NumberPropType, {}) }),
          /* @__PURE__ */ jsx15(PropDefaultValueCell, { children: /* @__PURE__ */ jsx15(NumberPropType, { value: 100 }) }),
          /* @__PURE__ */ jsx15(PropDescriptionCell, { children: /* @__PURE__ */ jsx15("p", { children: "The maximum value of the progress bar. This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0. The default value is 100." }) })
        ] }),
        /* @__PURE__ */ jsxs9(PropRow, { children: [
          /* @__PURE__ */ jsx15(PropNameCell, { name: "strokeWidth", optional: !0 }),
          /* @__PURE__ */ jsx15(PropTypeCell, { children: /* @__PURE__ */ jsxs9("ul", { children: [
            /* @__PURE__ */ jsx15("li", { children: /* @__PURE__ */ jsx15(NumberPropType, {}) }),
            /* @__PURE__ */ jsx15("li", { children: /* @__PURE__ */ jsx15(StringPropType, { value: "`${number}rem`" }) })
          ] }) }),
          /* @__PURE__ */ jsx15(PropDefaultValueCell, { children: /* @__PURE__ */ jsx15(StringPropType, { value: "0.25rem" }) }),
          /* @__PURE__ */ jsx15(PropDescriptionCell, { children: /* @__PURE__ */ jsx15("p", { children: "The width of the progress bar stroke. Note, we clamp the stroke width to a minimum of 1px and max of 12px since it is proportional to the viewbox size (0 0 32 32)." }) })
        ] }),
        /* @__PURE__ */ jsxs9(PropRow, { children: [
          /* @__PURE__ */ jsx15(PropNameCell, { name: "value", optional: !0 }),
          /* @__PURE__ */ jsx15(PropTypeCell, { children: /* @__PURE__ */ jsxs9("ul", { children: [
            /* @__PURE__ */ jsx15("li", { children: /* @__PURE__ */ jsx15(NumberPropType, {}) }),
            /* @__PURE__ */ jsx15("li", { children: /* @__PURE__ */ jsx15(StringPropType, { value: "indeterminate" }) })
          ] }) }),
          /* @__PURE__ */ jsx15(PropDefaultValueCell, { children: /* @__PURE__ */ jsx15(NumberPropType, { value: 0 }) }),
          /* @__PURE__ */ jsxs9(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ jsx15("p", { children: "The current value of the progress bar. This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 100 if max is omitted." }),
            /* @__PURE__ */ jsxs9("p", { children: [
              "If set to ",
              /* @__PURE__ */ jsx15(InlineCode4, { children: '"indeterminate"' }),
              ", the progress bar is considered",
              " ",
              /* @__PURE__ */ jsx15("strong", { children: "indeterminate" }),
              "."
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
var DynamicColorsExample = () => {
  let [value, setValue] = useState6(0);
  function computeColor() {
    switch (!0) {
      case value <= 20:
        return "text-accent-600";
      case value <= 40:
        return "text-success-600";
      case value <= 60:
        return "text-warning-600";
      case value <= 80:
        return "text-fuchsia-600";
      default:
        return "text-danger-600";
    }
  }
  return /* @__PURE__ */ jsxs9("form", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx15(ProgressDonut, { value, className: "size-10", children: /* @__PURE__ */ jsx15(ProgressDonutIndicator, { className: computeColor() }) }),
    /* @__PURE__ */ jsxs9("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ jsx15("p", { children: "Value:" }),
      /* @__PURE__ */ jsx15("input", { type: "range", min: 0, max: 100, value, onChange: (e) => setValue(Number(e.target.value)) }),
      " (",
      value,
      "%)"
    ] })
  ] });
};

// app/routes/components.theme-provider.tsx
var components_theme_provider_exports = {};
__export(components_theme_provider_exports, {
  default: () => Page7,
  headers: () => headers7,
  meta: () => meta7
});
import {
  CodeBlock as CodeBlock7,
  CodeBlockBody as CodeBlockBody7,
  CodeBlockCode as CodeBlockCode7,
  CodeBlockCopyButton as CodeBlockCopyButton7,
  CodeBlockExpanderButton,
  CodeBlockHeader,
  CodeBlockTitle,
  fmtCode as fmtCode7
} from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode5 } from "@ngrok/mantle/inline-code";
import { PreloadFonts, preventWrongThemeFlashScriptContent } from "@ngrok/mantle/theme-provider";
import { FileText } from "@phosphor-icons/react/FileText";
import { renderToStaticMarkup } from "react-dom/server";
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var meta7 = () => [
  { title: "@ngrok/mantle \u2014 Theme Provider" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers7 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page7() {
  return /* @__PURE__ */ jsxs10("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs10("header", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx16("h1", { className: "text-5xl font-medium", children: "Theme Provider" }),
      /* @__PURE__ */ jsx16("p", { className: "font-body text-body text-xl", children: "ThemeProvider is a React Context Provider that provides the current theme to the application and a function to change it." })
    ] }),
    /* @__PURE__ */ jsxs10("section", { className: "font-body text-body space-y-4", children: [
      /* @__PURE__ */ jsxs10("p", { children: [
        "To use the ",
        /* @__PURE__ */ jsx16(InlineCode5, { children: "ThemeProvider" }),
        ", wrap your application's entry point. This should be done as high in the component tree as possible."
      ] }),
      /* @__PURE__ */ jsxs10("p", { children: [
        "You should also add the ",
        /* @__PURE__ */ jsx16(InlineCode5, { children: "MantleThemeHeadContent" }),
        " component to the head of your application to prevent a Flash of Unstyled Content (FOUC) when the app first loads as well as preload all of our custom fonts."
      ] }),
      /* @__PURE__ */ jsxs10(CodeBlock7, { children: [
        /* @__PURE__ */ jsxs10(CodeBlockHeader, { children: [
          /* @__PURE__ */ jsx16(FileText, { className: "h-5 w-5", weight: "fill" }),
          /* @__PURE__ */ jsx16(CodeBlockTitle, { children: "root.tsx" })
        ] }),
        /* @__PURE__ */ jsxs10(CodeBlockBody7, { children: [
          /* @__PURE__ */ jsx16(CodeBlockCopyButton7, {}),
          /* @__PURE__ */ jsx16(
            CodeBlockCode7,
            {
              language: "tsx",
              value: fmtCode7`
							import { MantleThemeHeadContent, ThemeProvider } from "@ngrok/mantle/theme-provider";

							export default function App() {
								return (
									<html className="h-full" lang="en-US" dir="ltr">
										<head>
											// 👇 add this as high in the <head> as possible!
											<MantleThemeHeadContent />
											<meta charSet="utf-8" />
											<meta name="author" content="ngrok" />
											<meta name="viewport" content="width=device-width, initial-scale=1" />
											<Meta />
											<Links />
										</head>
										<body className="h-full min-h-full overflow-y-scroll bg-body">
											// 👇 wrap your app entry in the ThemeProvider
											<ThemeProvider>
												<Outlet />
											</ThemeProvider>
										</body>
									</html>
								);
							}
						`
            }
          ),
          /* @__PURE__ */ jsx16(CodeBlockExpanderButton, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs10("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs10("p", { className: "font-body text-body", children: [
        "Sometimes you cannot use the ",
        /* @__PURE__ */ jsx16(InlineCode5, { children: "MantleThemeHeadContent" }),
        " component because your webserver is not able to render React components. In this case, you can use the copy the following script and add it to your application's ",
        /* @__PURE__ */ jsx16(InlineCode5, { children: "<head>" }),
        ":"
      ] }),
      /* @__PURE__ */ jsxs10(CodeBlock7, { children: [
        /* @__PURE__ */ jsxs10(CodeBlockHeader, { children: [
          /* @__PURE__ */ jsx16(FileText, { className: "h-5 w-5", weight: "fill" }),
          /* @__PURE__ */ jsx16(CodeBlockTitle, { children: "index.html" })
        ] }),
        /* @__PURE__ */ jsxs10(CodeBlockBody7, { children: [
          /* @__PURE__ */ jsx16(CodeBlockCopyButton7, {}),
          /* @__PURE__ */ jsx16(
            CodeBlockCode7,
            {
              language: "html",
              value: fmtCode7`<script>
${preventWrongThemeFlashScriptContent({ defaultTheme: "system" })}
</script>
`
            }
          ),
          /* @__PURE__ */ jsx16(CodeBlockExpanderButton, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs10("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs10("p", { className: "font-body text-body", children: [
        "You will also need to ensure that you add the ",
        /* @__PURE__ */ jsx16(InlineCode5, { children: "PreloadFonts" }),
        " component to your app as well."
      ] }),
      /* @__PURE__ */ jsxs10(CodeBlock7, { children: [
        /* @__PURE__ */ jsxs10(CodeBlockHeader, { children: [
          /* @__PURE__ */ jsx16(FileText, { className: "h-5 w-5", weight: "fill" }),
          /* @__PURE__ */ jsx16(CodeBlockTitle, { children: "index.html" })
        ] }),
        /* @__PURE__ */ jsxs10(CodeBlockBody7, { children: [
          /* @__PURE__ */ jsx16(CodeBlockCopyButton7, {}),
          /* @__PURE__ */ jsx16(
            CodeBlockCode7,
            {
              language: "html",
              value: fmtCode7`<head>\n\t${renderToStaticMarkup(/* @__PURE__ */ jsx16(PreloadFonts, {})).split("/><").join(`/>
	<`)}\n</head>`
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs10("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs10("p", { className: "font-body text-body", children: [
        "Then, in your application, you can use the ",
        /* @__PURE__ */ jsx16(InlineCode5, { children: "useTheme" }),
        " hook to get and change the current theme:"
      ] }),
      /* @__PURE__ */ jsxs10(CodeBlock7, { children: [
        /* @__PURE__ */ jsxs10(CodeBlockHeader, { children: [
          /* @__PURE__ */ jsx16(FileText, { className: "h-5 w-5", weight: "fill" }),
          /* @__PURE__ */ jsx16(CodeBlockTitle, { children: "app.tsx" })
        ] }),
        /* @__PURE__ */ jsxs10(CodeBlockBody7, { children: [
          /* @__PURE__ */ jsx16(CodeBlockCopyButton7, {}),
          /* @__PURE__ */ jsx16(
            CodeBlockCode7,
            {
              language: "tsx",
              value: fmtCode7`
							import {
								Select,
								SelectContent,
								SelectGroup,
								SelectItem,
								SelectLabel,
								SelectTrigger,
							} from "@ngrok/mantle/select";
							import { isTheme, theme, useTheme } from "@ngrok/mantle/theme-provider";

							function App() {
								const [currentTheme, setTheme] = useTheme();

								return (
									<>
										<Select
											value={currentTheme}
											onValueChange={(value) => {
												const maybeNewTheme = isTheme(value) ? value : undefined;
												if (maybeNewTheme) {
													setTheme(maybeNewTheme);
												}
											}}
										>
											<div className="ml-auto">
												<span className="sr-only">Theme Switcher</span>
												<SelectTrigger className="w-min">
													<Sun className="mr-1 h-6 w-6" />
												</SelectTrigger>
											</div>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Choose a theme</SelectLabel>
													<SelectItem value={theme("system")}>System</SelectItem>
													<SelectItem value={theme("light")}>Light</SelectItem>
													<SelectItem value={theme("dark")}>Dark</SelectItem>
													<SelectItem value={theme("light-high-contrast")}>Light High Contrast</SelectItem>
													<SelectItem value={theme("dark-high-contrast")}>Dark High Contrast</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
										{/* The rest of your app... */}
									</>
								);
							}
`
            }
          )
        ] }),
        /* @__PURE__ */ jsx16(CodeBlockExpanderButton, {})
      ] })
    ] })
  ] });
}

// app/routes/components.dropdown-menu.tsx
var components_dropdown_menu_exports = {};
__export(components_dropdown_menu_exports, {
  default: () => Page8,
  headers: () => headers8,
  meta: () => meta8
});
import { Anchor as Anchor5 } from "@ngrok/mantle/anchor";
import { Button as Button5 } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock8, CodeBlockBody as CodeBlockBody8, CodeBlockCode as CodeBlockCode8, CodeBlockCopyButton as CodeBlockCopyButton8, fmtCode as fmtCode8 } from "@ngrok/mantle/code-block";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@ngrok/mantle/dropdown-menu";
import { InlineCode as InlineCode6 } from "@ngrok/mantle/inline-code";
import { Desktop } from "@phosphor-icons/react/Desktop";
import { Gear } from "@phosphor-icons/react/Gear";
import { Moon } from "@phosphor-icons/react/Moon";
import { SignOut } from "@phosphor-icons/react/SignOut";
import { Sun as Sun2 } from "@phosphor-icons/react/Sun";
import { useState as useState7 } from "react";
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
var meta8 = () => [
  { title: "@ngrok/mantle \u2014 DropdownMenu" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers8 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page8() {
  let [selectedTheme, setSelectedTheme] = useState7("system"), [enableNotifications, setEnableNotifications] = useState7(!1);
  return /* @__PURE__ */ jsxs11("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs11("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx17("h1", { className: "text-5xl font-medium", children: "Dropdown Menu" }),
      /* @__PURE__ */ jsx17("p", { className: "font-body text-body text-xl", children: "Displays a menu to the user \u2014 such as a set of actions or functions \u2014 triggered by a button." }),
      /* @__PURE__ */ jsxs11("div", { children: [
        /* @__PURE__ */ jsxs11(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ jsxs11(DropdownMenu, { children: [
            /* @__PURE__ */ jsx17(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsx17(Button5, { type: "button", appearance: "filled", children: "Open Menu" }) }),
            /* @__PURE__ */ jsxs11(DropdownMenuContent, { children: [
              /* @__PURE__ */ jsx17(DropdownMenuLabel, { children: "micah@ngrok.com" }),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxs11(
                DropdownMenuRadioGroup,
                {
                  value: selectedTheme,
                  onValueChange: (value) => {
                    setSelectedTheme(value);
                  },
                  children: [
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "system", children: [
                      /* @__PURE__ */ jsx17(Desktop, {}),
                      "System Preference"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "light", children: [
                      /* @__PURE__ */ jsx17(Sun2, {}),
                      "Light Mode"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "dark", children: [
                      /* @__PURE__ */ jsx17(Moon, {}),
                      "Dark Mode"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "light-high-contrast", children: [
                      /* @__PURE__ */ jsx17(Sun2, { weight: "fill" }),
                      "Light High Contrast"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "dark-high-contrast", children: [
                      /* @__PURE__ */ jsx17(Moon, { weight: "fill" }),
                      "Dark High Contrast"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxs11(DropdownMenuItem, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx17(Gear, {}),
                "User Settings"
              ] }),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx17(
                DropdownMenuCheckboxItem,
                {
                  checked: enableNotifications,
                  onCheckedChange: (value) => {
                    setEnableNotifications(value);
                  },
                  children: "Enable Notifications"
                }
              ),
              /* @__PURE__ */ jsxs11(DropdownMenuGroup, { children: [
                /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Team" }),
                /* @__PURE__ */ jsxs11(DropdownMenuSub, { children: [
                  /* @__PURE__ */ jsx17(DropdownMenuSubTrigger, { children: "Invite users" }),
                  /* @__PURE__ */ jsxs11(DropdownMenuSubContent, { children: [
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Message" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "More..." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs11(DropdownMenuItem, { children: [
                  "New Team",
                  /* @__PURE__ */ jsx17(DropdownMenuShortcut, { children: "\u2318+T" })
                ] })
              ] }),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxs11(DropdownMenuItem, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx17(SignOut, {}),
                "Log out"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs11(DropdownMenu, { children: [
            /* @__PURE__ */ jsx17(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsx17(Button5, { type: "button", appearance: "filled", children: "Content Width Matches Trigger Width (Extra Wide)" }) }),
            /* @__PURE__ */ jsxs11(DropdownMenuContent, { width: "trigger", children: [
              /* @__PURE__ */ jsx17(DropdownMenuLabel, { children: "micah@ngrok.com" }),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxs11(
                DropdownMenuRadioGroup,
                {
                  value: selectedTheme,
                  onValueChange: (value) => {
                    setSelectedTheme(value);
                  },
                  children: [
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "system", children: [
                      /* @__PURE__ */ jsx17(Desktop, {}),
                      "System Preference"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "light", children: [
                      /* @__PURE__ */ jsx17(Sun2, {}),
                      "Light Mode"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "dark", children: [
                      /* @__PURE__ */ jsx17(Moon, {}),
                      "Dark Mode"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "light-high-contrast", children: [
                      /* @__PURE__ */ jsx17(Sun2, { weight: "fill" }),
                      "Light High Contrast"
                    ] }),
                    /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value: "dark-high-contrast", children: [
                      /* @__PURE__ */ jsx17(Moon, { weight: "fill" }),
                      "Dark High Contrast"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxs11(DropdownMenuItem, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx17(Gear, {}),
                "User Settings"
              ] }),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx17(
                DropdownMenuCheckboxItem,
                {
                  checked: enableNotifications,
                  onCheckedChange: (value) => {
                    setEnableNotifications(value);
                  },
                  children: "Enable Notifications"
                }
              ),
              /* @__PURE__ */ jsxs11(DropdownMenuGroup, { children: [
                /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Team" }),
                /* @__PURE__ */ jsxs11(DropdownMenuSub, { children: [
                  /* @__PURE__ */ jsx17(DropdownMenuSubTrigger, { children: "Invite users" }),
                  /* @__PURE__ */ jsxs11(DropdownMenuSubContent, { children: [
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Message" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "Email" }),
                    /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
                    /* @__PURE__ */ jsx17(DropdownMenuItem, { children: "More..." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs11(DropdownMenuItem, { children: [
                  "New Team",
                  /* @__PURE__ */ jsx17(DropdownMenuShortcut, { children: "\u2318+T" })
                ] })
              ] }),
              /* @__PURE__ */ jsx17(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxs11(DropdownMenuItem, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx17(SignOut, {}),
                "Log out"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx17(CodeBlock8, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs11(CodeBlockBody8, { children: [
          /* @__PURE__ */ jsx17(CodeBlockCopyButton8, {}),
          /* @__PURE__ */ jsx17(
            CodeBlockCode8,
            {
              language: "tsx",
              value: fmtCode8`
						import { Button } from "@ngrok/mantle/button";
						import {
							DropdownMenu,
							DropdownMenuContent,
							DropdownMenuItem,
							DropdownMenuLabel,
							DropdownMenuRadioItem,
							DropdownMenuSeparator,
							DropdownMenuTrigger,
						} from "@ngrok/mantle/dropdown-menu";

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button appearance="filled" type="button">Open Menu</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>micah@ngrok.com</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuRadioItem name="theme" value="system">
									<Desktop />
									System Preference
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light">
									<Sun />
									Light Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark">
									<Moon />
									Dark Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light-high-contrast">
									<Sun weight="fill" />
									Light High Contrast
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark-high-contrast">
									<Moon weight="fill" />
									Dark High Contrast
								</DropdownMenuRadioItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Gear />
									User Settings
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<SignOut />
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs11("section", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs11("header", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx17("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
        /* @__PURE__ */ jsxs11("p", { className: "font-body text-body text-xl", children: [
          "The ",
          /* @__PURE__ */ jsx17(InlineCode6, { children: "DropdownMenu" }),
          " components are built on top of",
          " ",
          /* @__PURE__ */ jsx17(
            Anchor5,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Radix Dropdown Menu"
            }
          ),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs11("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs11("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx17("h3", { className: "text-xl font-medium", children: "DropdownMenuContent" }),
          /* @__PURE__ */ jsxs11("p", { className: "text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ jsx17(
              Anchor5,
              {
                href: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "DropdownMenu.Content"
              }
            ),
            ", plus:"
          ] })
        ] }),
        /* @__PURE__ */ jsx17(PropsTable, { children: /* @__PURE__ */ jsxs11(PropRow, { children: [
          /* @__PURE__ */ jsx17(PropNameCell, { name: "width", optional: !0 }),
          /* @__PURE__ */ jsx17(PropTypeCell, { children: /* @__PURE__ */ jsxs11("ul", { children: [
            /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17(StringPropType, { value: "trigger" }) }),
            /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17(StringPropType, { value: "content" }) })
          ] }) }),
          /* @__PURE__ */ jsx17(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs11(PropDescriptionCell, { children: [
            /* @__PURE__ */ jsxs11("p", { children: [
              /* @__PURE__ */ jsx17(InlineCode6, { children: "trigger" }),
              " will ensure the dropdown content is the same width as the trigger button."
            ] }),
            /* @__PURE__ */ jsxs11("p", { children: [
              /* @__PURE__ */ jsx17(InlineCode6, { children: "content" }),
              " will make the dropdown content use the intrinsic content width."
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}

// app/routes/components.media-object.tsx
var components_media_object_exports = {};
__export(components_media_object_exports, {
  default: () => Page9,
  headers: () => headers9,
  meta: () => meta9
});
import { CodeBlock as CodeBlock9, CodeBlockBody as CodeBlockBody9, CodeBlockCode as CodeBlockCode9, CodeBlockCopyButton as CodeBlockCopyButton9, fmtCode as fmtCode9 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode7 } from "@ngrok/mantle/inline-code";
import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@ngrok/mantle/media-object";
import { jsx as jsx18, jsxs as jsxs12 } from "react/jsx-runtime";
var meta9 = () => [
  { title: "@ngrok/mantle \u2014 Media Object" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers9 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page9() {
  return /* @__PURE__ */ jsxs12("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs12("header", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx18("h1", { className: "text-5xl font-medium", children: "Media Object" }),
      /* @__PURE__ */ jsx18("p", { className: "font-body text-body my-4 text-xl", children: "The Media Object is an image/icon (media) to the left, with descriptive content (title and subtitle/description) to the right." })
    ] }),
    /* @__PURE__ */ jsxs12("section", { className: "font-body text-body space-y-4", children: [
      /* @__PURE__ */ jsxs12("p", { children: [
        "Change the spacing between the media and content by passing a ",
        /* @__PURE__ */ jsx18(InlineCode7, { children: "gap-*" }),
        " class. The default ",
        /* @__PURE__ */ jsx18(InlineCode7, { children: "gap" }),
        " is ",
        /* @__PURE__ */ jsx18(InlineCode7, { children: "gap-4" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs12("p", { children: [
        "Use ",
        /* @__PURE__ */ jsx18(InlineCode7, { children: "flexbox" }),
        " utilities to change the alignment of the media and content."
      ] }),
      /* @__PURE__ */ jsxs12("p", { children: [
        "Compose the ",
        /* @__PURE__ */ jsx18(InlineCode7, { children: "<MediaObject>" }),
        " with the",
        " ",
        /* @__PURE__ */ jsx18(InlineCode7, { children: "<MediaObjectMedia>" }),
        " and ",
        /* @__PURE__ */ jsx18(InlineCode7, { children: "<MediaObjectContent>" }),
        " ",
        "components as direct children."
      ] }),
      /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsx18(Example, { children: /* @__PURE__ */ jsxs12(MediaObject, { children: [
          /* @__PURE__ */ jsx18(MediaObjectMedia, { children: /* @__PURE__ */ jsx18(ExampleMedia, {}) }),
          /* @__PURE__ */ jsxs12(MediaObjectContent, { children: [
            /* @__PURE__ */ jsx18("h4", { className: "text-lg font-bold", children: "Lorem ipsum" }),
            /* @__PURE__ */ jsx18("p", { className: "mb-4 mt-1", children: "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto." }),
            /* @__PURE__ */ jsx18("p", { children: "Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx18(CodeBlock9, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs12(CodeBlockBody9, { children: [
          /* @__PURE__ */ jsx18(CodeBlockCopyButton9, {}),
          /* @__PURE__ */ jsx18(
            CodeBlockCode9,
            {
              language: "tsx",
              value: fmtCode9`
							import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@ngrok/mantle/media-object";

							<MediaObject>
								<MediaObjectMedia>
									<ExampleMedia />
								</MediaObjectMedia>
								<MediaObjectContent>
									<h4 className="text-lg font-bold">Lorem ipsum</h4>
									<p className="mb-4 mt-1">
										Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
										quidem ipsam quia iusto.
									</p>
									<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
								</MediaObjectContent>
							</MediaObject>
						`
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
var ExampleMedia = () => /* @__PURE__ */ jsx18(
  "svg",
  {
    className: "h-16 w-16 border border-gray-300 bg-white text-gray-300",
    preserveAspectRatio: "none",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 200 200",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx18("path", { vectorEffect: "non-scaling-stroke", strokeWidth: 1, d: "M0 0l200 200M0 200L200 0" })
  }
);

// app/routes/base.tailwind-variants.tsx
var base_tailwind_variants_exports = {};
__export(base_tailwind_variants_exports, {
  default: () => Page10,
  headers: () => headers10,
  meta: () => meta10
});
import { Icon } from "@ngrok/mantle/icon";
import { InlineCode as InlineCode8 } from "@ngrok/mantle/inline-code";
import { Table as Table2, TableBody as TableBody2, TableCell as TableCell2, TableHead as TableHead2, TableHeader as TableHeader2, TableRow as TableRow2 } from "@ngrok/mantle/table";
import { Check } from "@phosphor-icons/react/Check";
import { X as X2 } from "@phosphor-icons/react/X";
import { jsx as jsx19, jsxs as jsxs13 } from "react/jsx-runtime";
var meta10 = () => [
  { title: "@ngrok/mantle \u2014 Shadows" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers10 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page10() {
  return /* @__PURE__ */ jsxs13("div", { children: [
    /* @__PURE__ */ jsx19("h1", { className: "text-5xl font-medium", children: "Tailwind Variants" }),
    /* @__PURE__ */ jsx19("p", { className: "font-body text-body mt-4 text-xl", children: "Additional Tailwind variants added by our Tailwind preset." }),
    /* @__PURE__ */ jsx19("div", { className: "border-card mt-8 overflow-hidden rounded-lg border", children: /* @__PURE__ */ jsxs13(Table2, { children: [
      /* @__PURE__ */ jsx19(TableHeader2, { children: /* @__PURE__ */ jsxs13(TableRow2, { children: [
        /* @__PURE__ */ jsx19(TableHead2, {}),
        /* @__PURE__ */ jsx19(TableHead2, { children: "Class" }),
        /* @__PURE__ */ jsx19(TableHead2, { children: "Description" })
      ] }) }),
      /* @__PURE__ */ jsxs13(TableBody2, { className: "font-body text-body", children: [
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(Icon, { className: "text-success-600 firefox:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 firefox:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".firefox:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class to Firefox browsers." })
        ] }),
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(Icon, { className: "text-success-600 pointer-coarse:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 pointer-coarse:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".pointer-coarse:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class only when the user\u2019s cursor is coarse. This generally means touch devices." })
        ] }),
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(Icon, { className: "text-success-600 pointer-fine:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 pointer-fine:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".pointer-fine:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class only when the user\u2019s cursor is fine. This applies to most mice and trackpads." })
        ] }),
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(Icon, { className: "text-success-600 pointer-none:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 pointer-none:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".pointer-none:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class if the device has no primary pointer." })
        ] }),
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(Icon, { className: "text-success-600 hover-hover:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 hover-hover:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".hover-hover:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class if hover is supported." })
        ] }),
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(Icon, { className: "text-success-600 hover-none:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 hover-none:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".hover-none:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class if hover is unsupported" })
        ] }),
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(Icon, { className: "text-success-600 high-contrast:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 high-contrast:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".high-contrast:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class if high contrast theming is enabled." })
        ] }),
        /* @__PURE__ */ jsxs13(TableRow2, { children: [
          /* @__PURE__ */ jsxs13(TableCell2, { children: [
            /* @__PURE__ */ jsx19(
              Icon,
              {
                className: "text-success-600 dark-high-contrast:block hidden size-4",
                svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" })
              }
            ),
            /* @__PURE__ */ jsx19(Icon, { className: "text-danger-600 dark-high-contrast:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx19(TableCell2, { children: /* @__PURE__ */ jsx19(InlineCode8, { className: "break-keep", children: ".dark-high-contrast:" }) }),
          /* @__PURE__ */ jsx19(TableCell2, { children: "Apply a class if high contrast and dark themes are applied." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs13("ul", { className: "mt-8 flex flex-wrap gap-4 font-mono text-xs", children: [
      /* @__PURE__ */ jsxs13("li", { className: "firefox:border-green-600 firefox:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "firefox: ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 firefox:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 firefox:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs13("li", { className: "pointer-coarse:border-green-600 pointer-coarse:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "pointer-coarse:",
        " ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 pointer-coarse:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 pointer-coarse:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs13("li", { className: "pointer-fine:border-green-600 pointer-fine:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "pointer-fine:",
        " ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 pointer-fine:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 pointer-fine:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs13("li", { className: "pointer-none:border-green-600 pointer-none:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "pointer-none:",
        " ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 pointer-none:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 pointer-none:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs13("li", { className: "hover-hover:border-green-600 hover-hover:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "hover-hover:",
        " ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 hover-hover:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 hover-hover:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs13("li", { className: "hover-none:border-green-600 hover-none:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "hover-none: ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 hover-none:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 hover-none:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs13("li", { className: "dark-high-contrast:border-green-600 dark-high-contrast:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "dark-high-contrast:",
        " ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 dark-high-contrast:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 dark-high-contrast:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs13("li", { className: "high-contrast:border-green-600 high-contrast:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4", children: [
        "high-contrast:",
        " ",
        /* @__PURE__ */ jsx19(Icon, { className: "text-success-700 high-contrast:block hidden size-4", svg: /* @__PURE__ */ jsx19(Check, { weight: "bold" }) }),
        /* @__PURE__ */ jsx19(Icon, { className: "text-danger-700 high-contrast:hidden block size-4", svg: /* @__PURE__ */ jsx19(X2, { weight: "bold" }) })
      ] })
    ] })
  ] });
}

// app/routes/components.icon-button.tsx
var components_icon_button_exports = {};
__export(components_icon_button_exports, {
  default: () => Page11,
  headers: () => headers11,
  meta: () => meta11
});
import { Anchor as Anchor6 } from "@ngrok/mantle/anchor";
import { IconButton } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock10, CodeBlockBody as CodeBlockBody10, CodeBlockCode as CodeBlockCode10, CodeBlockCopyButton as CodeBlockCopyButton10, fmtCode as fmtCode10 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode9 } from "@ngrok/mantle/inline-code";
import { Tooltip as Tooltip3, TooltipContent as TooltipContent3, TooltipTrigger as TooltipTrigger3 } from "@ngrok/mantle/tooltip";
import { Globe } from "@phosphor-icons/react/Globe";
import { Link as Link2 } from "@remix-run/react";

// app/types/routes.ts
var route = (value) => value;

// app/routes/components.icon-button.tsx
import { jsx as jsx20, jsxs as jsxs14 } from "react/jsx-runtime";
var meta11 = () => [
  { title: "@ngrok/mantle \u2014 Icon Button" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers11 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
}), DisabledTooltip = ({ children }) => /* @__PURE__ */ jsxs14(Tooltip3, { children: [
  /* @__PURE__ */ jsx20(TooltipTrigger3, { asChild: !0, children }),
  /* @__PURE__ */ jsx20(TooltipContent3, { children: "Tooltips work on disabled buttons!" })
] });
function Page11() {
  return /* @__PURE__ */ jsxs14("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs14("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx20("h1", { id: "icon-button", className: "text-5xl font-medium", children: "Icon Button" }),
      /* @__PURE__ */ jsx20("p", { className: "font-body text-body text-xl", children: "Initiates an action, such as completing a task or submitting information. Renders only a single icon as children with an accessible, screen-reader-only label." }),
      /* @__PURE__ */ jsxs14("div", { children: [
        /* @__PURE__ */ jsxs14(Example, { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx20("p", { className: "mb-2 text-center font-mono text-xs", children: "Size xs" }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", size: "xs", icon: /* @__PURE__ */ jsx20(Globe, {}) }),
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", size: "xs", icon: /* @__PURE__ */ jsx20(Globe, {}) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx20("p", { className: "mb-2 text-center font-mono text-xs", children: "Size sm" }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", size: "sm", icon: /* @__PURE__ */ jsx20(Globe, {}) }),
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", size: "sm", icon: /* @__PURE__ */ jsx20(Globe, {}) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx20("p", { className: "mb-2 text-center font-mono text-xs", children: "Size md" }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", icon: /* @__PURE__ */ jsx20(Globe, {}) }),
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", icon: /* @__PURE__ */ jsx20(Globe, {}) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx20("p", { className: "mb-2 text-center font-mono text-xs", children: "Disabled" }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx20(DisabledTooltip, { children: /* @__PURE__ */ jsx20(IconButton, { disabled: !0, type: "button", appearance: "ghost", label: "prestige worldwide", icon: /* @__PURE__ */ jsx20(Globe, {}) }) }),
              /* @__PURE__ */ jsx20(DisabledTooltip, { children: /* @__PURE__ */ jsx20(
                IconButton,
                {
                  disabled: !0,
                  type: "button",
                  appearance: "outlined",
                  label: "prestige worldwide",
                  icon: /* @__PURE__ */ jsx20(Globe, {})
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx20(CodeBlock10, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs14(CodeBlockBody10, { children: [
          /* @__PURE__ */ jsx20(CodeBlockCopyButton10, {}),
          /* @__PURE__ */ jsx20(
            CodeBlockCode10,
            {
              language: "tsx",
              value: fmtCode10`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="xs" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="xs" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="sm" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="sm" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="md" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="md" icon={<Globe />} />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs14("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx20("h2", { id: "example-loading", className: "text-3xl font-medium", children: "isLoading" }),
      /* @__PURE__ */ jsxs14("p", { className: "font-body text-body text-xl", children: [
        /* @__PURE__ */ jsx20(InlineCode9, { children: "isLoading" }),
        " determines whether or not the icon button is in a loading state, default",
        " ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "false" }),
        ". Setting ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "isLoading" }),
        " will replace the icon with a spinner. It will also disable user interaction with the button and set ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "aria-disabled" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs14("div", { children: [
        /* @__PURE__ */ jsxs14(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx20("p", { className: "mb-2 text-center font-mono text-xs", children: "idle" }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", icon: /* @__PURE__ */ jsx20(Globe, {}) }),
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", icon: /* @__PURE__ */ jsx20(Globe, {}) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx20("p", { className: "mb-2 text-center font-mono text-xs", children: "isLoading" }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", isLoading: !0, icon: /* @__PURE__ */ jsx20(Globe, {}) }),
              /* @__PURE__ */ jsx20(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", isLoading: !0, icon: /* @__PURE__ */ jsx20(Globe, {}) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx20(CodeBlock10, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs14(CodeBlockBody10, { children: [
          /* @__PURE__ */ jsx20(CodeBlockCopyButton10, {}),
          /* @__PURE__ */ jsx20(
            CodeBlockCode10,
            {
              language: "tsx",
              value: fmtCode10`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<IconButton type="button" appearance="ghost" label="prestige worldwide" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" isLoading icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" isLoading icon={<Globe />} />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs14("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx20("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }),
      /* @__PURE__ */ jsxs14("p", { className: "font-body text-body text-xl", children: [
        "When you want to render ",
        /* @__PURE__ */ jsx20("span", { className: "italic", children: "something else" }),
        " as a",
        " ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "IconButton" }),
        ", you can use the ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "asChild" }),
        " prop to compose. This is useful when you want to splat the ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "IconButton" }),
        " styling onto a",
        " ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "Link" }),
        " from ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "remix" }),
        " or ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "react-router" }),
        ". Keep in mind that when you use ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "asChild" }),
        " the ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "type" }),
        " prop will",
        " ",
        /* @__PURE__ */ jsx20("strong", { children: "NOT" }),
        " be passed to the child component."
      ] }),
      /* @__PURE__ */ jsxs14("div", { children: [
        /* @__PURE__ */ jsx20(Example, { children: /* @__PURE__ */ jsx20(IconButton, { appearance: "outlined", asChild: !0, label: "prestige worldwide", icon: /* @__PURE__ */ jsx20(Globe, {}), children: /* @__PURE__ */ jsx20(Link2, { to: route("/base/colors") }) }) }),
        /* @__PURE__ */ jsx20(CodeBlock10, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs14(CodeBlockBody10, { children: [
          /* @__PURE__ */ jsx20(CodeBlockCopyButton10, {}),
          /* @__PURE__ */ jsx20(
            CodeBlockCode10,
            {
              language: "tsx",
              value: fmtCode10`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";
									import { Link } from "react-router-dom";

									<IconButton appearance="outlined" asChild label="prestige worldwide" icon={<Globe />}>
										<Link to={route("/base/colors")} />
									</IconButton>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs14("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx20("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs14("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx20(InlineCode9, { children: "IconButton" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx20(Anchor6, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button", children: "standard HTML button attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs14(PropsTable, { children: [
        /* @__PURE__ */ jsxs14(PropRow, { children: [
          /* @__PURE__ */ jsx20(PropNameCell, { name: "appearance", optional: !0 }),
          /* @__PURE__ */ jsx20(PropTypeCell, { children: /* @__PURE__ */ jsxs14("ul", { children: [
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "ghost" }) }),
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "outlined" }) })
          ] }) }),
          /* @__PURE__ */ jsx20(PropDefaultValueCell, { children: /* @__PURE__ */ jsx20(StringPropType, { value: "outlined" }) }),
          /* @__PURE__ */ jsx20(PropDescriptionCell, { children: /* @__PURE__ */ jsxs14("p", { children: [
            "Defines the visual style of the ",
            /* @__PURE__ */ jsx20(InlineCode9, { children: "Button" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs14(PropRow, { children: [
          /* @__PURE__ */ jsx20(PropNameCell, { name: "asChild", optional: !0 }),
          /* @__PURE__ */ jsx20(PropTypeCell, { children: /* @__PURE__ */ jsx20(BooleanPropType, {}) }),
          /* @__PURE__ */ jsx20(PropDefaultValueCell, { children: /* @__PURE__ */ jsx20(BooleanPropType, { value: !1 }) }),
          /* @__PURE__ */ jsx20(PropDescriptionCell, { children: /* @__PURE__ */ jsxs14("p", { children: [
            "Use the ",
            /* @__PURE__ */ jsx20(InlineCode9, { children: "asChild" }),
            " prop to compose the ",
            /* @__PURE__ */ jsx20(InlineCode9, { children: "Button" }),
            " styling and functionality onto alternative element types or your own React components."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs14(PropRow, { children: [
          /* @__PURE__ */ jsx20(PropNameCell, { name: "label" }),
          /* @__PURE__ */ jsx20(PropTypeCell, { children: /* @__PURE__ */ jsx20(StringPropType, {}) }),
          /* @__PURE__ */ jsx20(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx20(PropDescriptionCell, { children: /* @__PURE__ */ jsx20("p", { children: "The accessible label for the icon. This label will be visually hidden but announced to screen reader users, similar to alt text for img tags." }) })
        ] }),
        /* @__PURE__ */ jsxs14(PropRow, { children: [
          /* @__PURE__ */ jsx20(PropNameCell, { name: "isLoading", optional: !0 }),
          /* @__PURE__ */ jsx20(PropTypeCell, { children: /* @__PURE__ */ jsx20(BooleanPropType, {}) }),
          /* @__PURE__ */ jsx20(PropDefaultValueCell, { children: /* @__PURE__ */ jsx20(BooleanPropType, { value: !1 }) }),
          /* @__PURE__ */ jsx20(PropDescriptionCell, { children: /* @__PURE__ */ jsxs14("p", { children: [
            "Determines whether or not the icon button is in a loading state, default ",
            /* @__PURE__ */ jsx20(InlineCode9, { children: "false" }),
            ". Setting ",
            /* @__PURE__ */ jsx20(InlineCode9, { children: "isLoading" }),
            " will replace the icon with a spinner. It will also disable user interaction with the button and set ",
            /* @__PURE__ */ jsx20(InlineCode9, { children: "aria-disabled" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs14(PropRow, { children: [
          /* @__PURE__ */ jsx20(PropNameCell, { name: "size", optional: !0 }),
          /* @__PURE__ */ jsx20(PropTypeCell, { children: /* @__PURE__ */ jsxs14("ul", { children: [
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "xs" }) }),
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "sm" }) }),
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "md" }) })
          ] }) }),
          /* @__PURE__ */ jsx20(PropDefaultValueCell, { children: /* @__PURE__ */ jsx20(StringPropType, { value: "md" }) }),
          /* @__PURE__ */ jsx20(PropDescriptionCell, { children: /* @__PURE__ */ jsxs14("p", { children: [
            "The size of the ",
            /* @__PURE__ */ jsx20(InlineCode9, { children: "IconButton" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs14(PropRow, { children: [
          /* @__PURE__ */ jsx20(PropNameCell, { name: "type" }),
          /* @__PURE__ */ jsx20(PropTypeCell, { children: /* @__PURE__ */ jsxs14("ul", { children: [
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "button" }) }),
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "reset" }) }),
            /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20(StringPropType, { value: "submit" }) })
          ] }) }),
          /* @__PURE__ */ jsx20(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs14(PropDescriptionCell, { children: [
            /* @__PURE__ */ jsxs14("p", { children: [
              "The default behavior of the ",
              /* @__PURE__ */ jsx20(InlineCode9, { children: "IconButton" }),
              ". Unlike the native",
              " ",
              /* @__PURE__ */ jsx20(InlineCode9, { children: "button" }),
              " element, unless you use the ",
              /* @__PURE__ */ jsx20(InlineCode9, { children: "asChild" }),
              " prop,",
              " ",
              /* @__PURE__ */ jsx20("span", { className: "font-semibold", children: "this prop is required and has no default value" }),
              ". See",
              " ",
              /* @__PURE__ */ jsx20(Anchor6, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type", children: "the MDN docs" }),
              " ",
              "for more information."
            ] }),
            /* @__PURE__ */ jsxs14("ul", { className: "list-disc pl-5", children: [
              /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsxs14("p", { children: [
                /* @__PURE__ */ jsx20(InlineCode9, { children: '"button"' }),
                ": The button has no default behavior, and does nothing when pressed by default."
              ] }) }),
              /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsxs14("p", { children: [
                /* @__PURE__ */ jsx20(InlineCode9, { children: '"reset"' }),
                ": The button resets all the controls to their initial values."
              ] }) }),
              /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsxs14("p", { children: [
                /* @__PURE__ */ jsx20(InlineCode9, { children: '"submit"' }),
                ": The button submits the form data to the server."
              ] }) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.inline-code.tsx
var components_inline_code_exports = {};
__export(components_inline_code_exports, {
  default: () => Page12,
  headers: () => headers12,
  meta: () => meta12
});
import { CodeBlock as CodeBlock11, CodeBlockBody as CodeBlockBody11, CodeBlockCode as CodeBlockCode11, CodeBlockCopyButton as CodeBlockCopyButton11, fmtCode as fmtCode11 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode10 } from "@ngrok/mantle/inline-code";
import { jsx as jsx21, jsxs as jsxs15 } from "react/jsx-runtime";
var meta12 = () => [
  { title: "@ngrok/mantle \u2014 InlineCode" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers12 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page12() {
  return /* @__PURE__ */ jsxs15("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx21("h1", { className: "text-5xl font-medium", children: "Inline Code" }),
    /* @__PURE__ */ jsx21("p", { className: "font-body text-body text-xl", children: "Marks text to signify a short fragment of inline computer code." }),
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx21(Example, { children: /* @__PURE__ */ jsx21(InlineCode10, { children: "npm install @ngrok/mantle" }) }),
      /* @__PURE__ */ jsx21(CodeBlock11, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs15(CodeBlockBody11, { children: [
        /* @__PURE__ */ jsx21(CodeBlockCopyButton11, {}),
        /* @__PURE__ */ jsx21(
          CodeBlockCode11,
          {
            language: "tsx",
            value: fmtCode11`
						import { InlineCode } from "@ngrok/mantle/inline-code";

						<InlineCode>npm install @ngrok/mantle</InlineCode>
					`
          }
        )
      ] }) })
    ] })
  ] });
}

// app/routes/components.radio-group.tsx
var components_radio_group_exports = {};
__export(components_radio_group_exports, {
  default: () => Page13,
  headers: () => headers13,
  meta: () => meta13
});
import { CodeBlock as CodeBlock12, CodeBlockBody as CodeBlockBody12, CodeBlockCode as CodeBlockCode12, CodeBlockCopyButton as CodeBlockCopyButton12, fmtCode as fmtCode12 } from "@ngrok/mantle/code-block";
import {
  RadioButton,
  RadioButtonGroup,
  RadioCard,
  RadioGroup,
  RadioGroupList,
  RadioIndicator,
  RadioItem,
  RadioItemContent,
  RadioListItem
} from "@ngrok/mantle/radio-group";
import { jsx as jsx22, jsxs as jsxs16 } from "react/jsx-runtime";
var meta13 = () => [
  { title: "@ngrok/mantle \u2014 Radio Group" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers13 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page13() {
  return /* @__PURE__ */ jsx22("div", { className: "space-y-16", children: /* @__PURE__ */ jsxs16("section", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx22("h1", { className: "text-5xl font-medium", children: "Radio Group" }),
    /* @__PURE__ */ jsx22("p", { className: "font-body text-body text-xl", children: "A set of checkable buttons\u2014known as radio buttons\u2014where no more than one of the buttons can be checked at a time." }),
    /* @__PURE__ */ jsxs16("div", { children: [
      /* @__PURE__ */ jsxs16(Example, { className: "mt-4 grid gap-6", children: [
        /* @__PURE__ */ jsxs16(RadioGroup, { defaultValue: "compact", children: [
          /* @__PURE__ */ jsxs16(RadioItem, { value: "default", id: "simple-1", children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsx22(RadioItemContent, { asChild: !0, children: /* @__PURE__ */ jsx22("label", { htmlFor: "simple-1", children: "Default" }) })
          ] }),
          /* @__PURE__ */ jsxs16(RadioItem, { value: "comfortable", id: "simple-2", disabled: !0, children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsx22(RadioItemContent, { asChild: !0, children: /* @__PURE__ */ jsx22("label", { htmlFor: "simple-2", children: "Comfortable" }) })
          ] }),
          /* @__PURE__ */ jsxs16(RadioItem, { value: "compact", id: "simple-3", children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsx22(RadioItemContent, { asChild: !0, children: /* @__PURE__ */ jsx22("label", { htmlFor: "simple-3", children: "Compact" }) })
          ] }),
          /* @__PURE__ */ jsxs16(RadioItem, { value: "roomy", id: "simple-4", children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsx22(RadioItemContent, { asChild: !0, children: /* @__PURE__ */ jsx22("label", { htmlFor: "simple-4", children: "Roomy" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs16(RadioButtonGroup, { defaultValue: "production", children: [
          /* @__PURE__ */ jsx22(RadioButton, { value: "development", children: "Development" }),
          /* @__PURE__ */ jsx22(RadioButton, { disabled: !0, value: "staging", children: "Staging" }),
          /* @__PURE__ */ jsx22(RadioButton, { value: "production", children: "Production" })
        ] }),
        /* @__PURE__ */ jsxs16(RadioGroupList, { defaultValue: "comfortable", children: [
          /* @__PURE__ */ jsxs16(RadioListItem, { value: "default", disabled: !0, id: "rli1", children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsxs16(RadioItemContent, { children: [
              /* @__PURE__ */ jsx22("label", { className: "text-strong font-medium", htmlFor: "rli1", children: "Default" }),
              /* @__PURE__ */ jsx22("p", { className: "text-body", children: "Laborum esse cillum incididunt est dolore." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs16(RadioListItem, { value: "comfortable", id: "rli2", children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsxs16(RadioItemContent, { children: [
              /* @__PURE__ */ jsx22("label", { className: "text-strong font-medium", htmlFor: "rli2", children: "Comfortable" }),
              /* @__PURE__ */ jsx22("p", { className: "text-body", children: "Ea laboris tempor laborum officia ea adipisicing exercitation." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs16(RadioListItem, { value: "compact", id: "rli3", children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsxs16(RadioItemContent, { children: [
              /* @__PURE__ */ jsx22("label", { className: "text-strong font-medium", htmlFor: "rli3", children: "Compact" }),
              /* @__PURE__ */ jsx22("p", { className: "text-body", children: "Adipisicing est dolore velit magna dolor voluptate velit." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs16(RadioListItem, { value: "roomy", id: "rli4", children: [
            /* @__PURE__ */ jsx22(RadioIndicator, {}),
            /* @__PURE__ */ jsxs16(RadioItemContent, { children: [
              /* @__PURE__ */ jsx22("label", { className: "text-strong font-medium", htmlFor: "rli4", children: "Roomy" }),
              /* @__PURE__ */ jsx22("p", { className: "text-body", children: "Tempor dolore Lorem exercitation id nisi aliquip elit." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs16(RadioGroup, { className: "grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4", defaultValue: "existing", children: [
          /* @__PURE__ */ jsxs16(RadioCard, { className: "flex", value: "newsletter", id: "radiocard-1", children: [
            /* @__PURE__ */ jsxs16("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx22("label", { htmlFor: "radiocard-1", className: "text-strong block text-sm font-medium", children: "Newsletter" }),
              /* @__PURE__ */ jsx22("p", { className: "mt-1 flex items-center text-sm text-gray-500", children: "Last message sent an hour ago" }),
              /* @__PURE__ */ jsx22("p", { className: "mt-6 text-sm font-medium", children: "621 users" })
            ] }),
            /* @__PURE__ */ jsx22(RadioIndicator, {})
          ] }),
          /* @__PURE__ */ jsxs16(RadioCard, { className: "flex", value: "existing", id: "radiocard-2", children: [
            /* @__PURE__ */ jsxs16("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx22("label", { htmlFor: "radiocard-2", className: "text-strong block text-sm font-medium", children: "Existing Customers" }),
              /* @__PURE__ */ jsx22("p", { className: "mt-1 flex items-center text-sm text-gray-500", children: "Last message sent 2 weeks ago" }),
              /* @__PURE__ */ jsx22("p", { className: "mt-6 text-sm font-medium", children: "1200 users" })
            ] }),
            /* @__PURE__ */ jsx22(RadioIndicator, {})
          ] }),
          /* @__PURE__ */ jsxs16(RadioCard, { className: "flex", value: "trial", id: "radiocard-3", children: [
            /* @__PURE__ */ jsxs16("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx22("label", { htmlFor: "radiocard-3", className: "text-strong block text-sm font-medium", children: "Trial Users" }),
              /* @__PURE__ */ jsx22("p", { className: "mt-1 flex items-center text-sm text-gray-500", children: "Last message sent 4 days ago" }),
              /* @__PURE__ */ jsx22("p", { className: "mt-6 text-sm font-medium", children: "2740 Users" })
            ] }),
            /* @__PURE__ */ jsx22(RadioIndicator, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx22(CodeBlock12, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs16(CodeBlockBody12, { children: [
        /* @__PURE__ */ jsx22(CodeBlockCopyButton12, {}),
        /* @__PURE__ */ jsx22(
          CodeBlockCode12,
          {
            language: "tsx",
            value: fmtCode12`
									import {
										RadioButton,
										RadioButtonGroup,
										RadioCard,
										RadioGroup,
										RadioGroupList,
										RadioIndicator,
										RadioItem,
										RadioItemContent,
										RadioListItem,
									} from "@ngrok/mantle/radio-group";

									<RadioGroup defaultValue="comfortable">
										<RadioItem className="py-1" value="default" id="simple-1">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-1">Default</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="comfortable" id="simple-2" disabled>
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-2">Comfortable</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="compact" id="simple-3">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-3">Compact</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="roomy" id="simple-4">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-4">Roomy</label>
											</RadioItemContent>
										</RadioItem>
									</RadioGroup>

									<RadioButtonGroup defaultValue="production">
										<RadioButton value="development">Development</RadioButton>
										<RadioButton value="staging">Staging</RadioButton>
										<RadioButton value="production">Production</RadioButton>
									</RadioButtonGroup>

									<RadioGroupList defaultValue="comfortable">
										<RadioListItem value="default" disabled id="rli1">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli1">
													Default
												</label>
												<p className="text-body">Laborum esse cillum incididunt est dolore.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="comfortable" id="rli2">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli2">
													Comfortable
												</label>
												<p className="text-body">Ea laboris tempor laborum officia ea adipisicing exercitation.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="compact" id="rli3">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli3">
													Compact
												</label>
												<p className="text-body">Adipisicing est dolore velit magna dolor voluptate velit.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="roomy" id="rli4">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli4">
													Roomy
												</label>
												<p className="text-body">Tempor dolore Lorem exercitation id nisi aliquip elit.</p>
											</RadioItemContent>
										</RadioListItem>
									</RadioGroupList>

									<RadioGroup className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4" defaultValue="existing">
										<RadioCard className="flex" value="newsletter" id="radiocard-1">
											<div className="flex-1">
												<label htmlFor="radiocard-1" className="block text-sm font-medium text-strong">
													Newsletter
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent an hour ago</p>
												<p className="mt-6 text-sm font-medium">621 users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
										<RadioCard className="flex" value="existing" id="radiocard-2">
											<div className="flex-1">
												<label htmlFor="radiocard-2" className="block text-sm font-medium text-strong">
													Existing Customers
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 2 weeks ago</p>
												<p className="mt-6 text-sm font-medium">1200 users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
										<RadioCard className="flex" value="trial" id="radiocard-3">
											<div className="flex-1">
												<label htmlFor="radiocard-3" className="block text-sm font-medium text-strong">
													Trial Users
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 4 days ago</p>
												<p className="mt-6 text-sm font-medium">2740 Users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
									</RadioGroup>
								`
          }
        )
      ] }) })
    ] })
  ] }) });
}

// app/routes/components.code-block.tsx
var components_code_block_exports = {};
__export(components_code_block_exports, {
  default: () => Page14,
  headers: () => headers14,
  meta: () => meta14
});
import { Card, CardBody } from "@ngrok/mantle/card";
import {
  CodeBlock as CodeBlock13,
  CodeBlockBody as CodeBlockBody13,
  CodeBlockCode as CodeBlockCode13,
  CodeBlockCopyButton as CodeBlockCopyButton13,
  CodeBlockExpanderButton as CodeBlockExpanderButton2,
  CodeBlockHeader as CodeBlockHeader2,
  CodeBlockTitle as CodeBlockTitle2,
  fmtCode as fmtCode13,
  supportedLanguages
} from "@ngrok/mantle/code-block";
import { FileText as FileText2 } from "@phosphor-icons/react/FileText";
import { Terminal } from "@phosphor-icons/react/Terminal";
import { jsx as jsx23, jsxs as jsxs17 } from "react/jsx-runtime";
var meta14 = () => [
  { title: "@ngrok/mantle \u2014 Code Block" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers14 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page14() {
  return /* @__PURE__ */ jsxs17("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs17("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx23("h1", { className: "text-5xl font-medium", children: "Code Block" }),
      /* @__PURE__ */ jsx23("p", { className: "font-body text-body text-xl", children: "Code blocks render and apply syntax highlighting to blocks of code." }),
      /* @__PURE__ */ jsxs17("div", { children: [
        /* @__PURE__ */ jsx23(Example, { children: /* @__PURE__ */ jsxs17(CodeBlock13, { children: [
          /* @__PURE__ */ jsxs17(CodeBlockHeader2, { children: [
            /* @__PURE__ */ jsx23(FileText2, { className: "h-5 w-5", weight: "fill" }),
            /* @__PURE__ */ jsx23(CodeBlockTitle2, { children: "ngrok-example.js" })
          ] }),
          /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
            /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
            /* @__PURE__ */ jsx23(
              CodeBlockCode13,
              {
                language: "js",
                value: fmtCode13`
								const listener = await ngrok.connect({
									// session configuration
									addr: \`localhost:8080\`, // or \`8080\` or \`unix:$\{UNIX_SOCKET\}\`
									authtoken: "<authtoken>",
									authtoken_from_env: true,
									on_status_change: (addr, error) => {
										console.log(\`disconnected, addr $\{addr\} error: $\{error\}\`);
									},
									session_metadata: "Online in One Line",
									// listener configuration
									allow_user_agent: "^mozilla.*",
									basic_auth: ["ngrok:online1line"],
									circuit_breaker: 0.1,
									compression: true,
									deny_user_agent: "^curl.*",
									domain: "<domain>",
									ip_restriction_allow_cidrs: ["0.0.0.0/0"],
									ip_restriction_deny_cidrs: ["10.1.1.1/32"],
									metadata: "example listener metadata from nodejs",
									mutual_tls_cas: [fs.readFileSync('ca.crt', 'utf8')],
									oauth_provider: "google",
									oauth_allow_domains: ["<domain>"],
									oauth_allow_emails: ["<email>"],
									oauth_scopes: ["<scope>"],
									oauth_client_id: "<id>",
									oauth_client_secret: "<secret>",
									oidc_issuer_url: "<url>",
									oidc_client_id: "<id>",
									oidc_client_secret: "<secret>",
									oidc_allow_domains: ["<domain>"],
									oidc_allow_emails: ["<email>"],
									oidc_scopes: ["<scope>"],
									proxy_proto: "", // One of: "", "1", "2"
									request_header_remove: ["X-Req-Nope"],
									response_header_remove: ["X-Res-Nope"],
									request_header_add: ["X-Req-Yup:true"],
									response_header_add: ["X-Res-Yup:true"],
									schemes: ["HTTPS"],
									verify_webhook_provider: "twilio",
									verify_webhook_secret: "asdf",
									websocket_tcp_converter: true,
								});
							`
              }
            )
          ] }),
          /* @__PURE__ */ jsx23(CodeBlockExpanderButton2, {})
        ] }) }),
        /* @__PURE__ */ jsx23(CodeBlock13, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
          /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
          /* @__PURE__ */ jsx23(
            CodeBlockCode13,
            {
              language: "tsx",
              value: fmtCode13`
							import {
								CodeBlock,
								CodeBlockBody,
								CodeBlockCode,
								CodeBlockCopyButton,
								CodeBlockExpanderButton,
								CodeBlockHeader,
								CodeBlockTitle,
								fmtCode,
							} from "@ngrok/mantle/code-block";

							<CodeBlock>
								<CodeBlockHeader>
									<Icon />
									<CodeBlockTitle>…</CodeBlockTitle>
								</CodeBlockHeader>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode language="…" value={fmtCode\`…\`} />
								</CodeBlockBody>
								<CodeBlockExpanderButton />
							</CodeBlock>
						`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs17("section", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx23("h2", { className: "text-3xl font-medium", children: "Examples" }),
      /* @__PURE__ */ jsxs17("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs17("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx23("h3", { className: "text-xl font-medium", children: "Single Line with a Header" }),
          /* @__PURE__ */ jsx23("p", { className: "font-body text-body", children: "Many code blocks will be single line command line prompts and should be able to render with a header and copy button. This makes it absolutely clear that this example is a command line prompt and not a code sample." })
        ] }),
        /* @__PURE__ */ jsxs17("div", { children: [
          /* @__PURE__ */ jsx23(Example, { children: /* @__PURE__ */ jsxs17(CodeBlock13, { children: [
            /* @__PURE__ */ jsxs17(CodeBlockHeader2, { children: [
              /* @__PURE__ */ jsx23(Terminal, { className: "h-5 w-5", weight: "fill" }),
              /* @__PURE__ */ jsx23(CodeBlockTitle2, { children: "Command Line" })
            ] }),
            /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
              /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
              /* @__PURE__ */ jsx23(
                CodeBlockCode13,
                {
                  language: "sh",
                  value: fmtCode13`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx23(CodeBlock13, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
            /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
            /* @__PURE__ */ jsx23(
              CodeBlockCode13,
              {
                language: "tsx",
                value: fmtCode13`
								<CodeBlock>
									<CodeBlockHeader>
										<CommandLineIcon />
										<CodeBlockTitle>Command Line</CodeBlockTitle>
									</CodeBlockHeader>
									<CodeBlockBody>
										<CodeBlockCopyButton />
										<CodeBlockCode language="sh" value={fmtCode\`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin\`} />
									</CodeBlockBody>
								</CodeBlock>
							`
              }
            )
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs17("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs17("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx23("h3", { className: "text-xl font-medium", children: "Horizontal Scrolling" }),
          /* @__PURE__ */ jsx23("p", { className: "font-body text-body", children: "This example is included to demonstrate that code blocks can scroll horizontally if the content is too wide. Mantle attempts to normalize scrollbar styling across browsers and platforms." })
        ] }),
        /* @__PURE__ */ jsxs17("div", { children: [
          /* @__PURE__ */ jsx23(Example, { children: /* @__PURE__ */ jsxs17(CodeBlock13, { children: [
            /* @__PURE__ */ jsxs17(CodeBlockHeader2, { children: [
              /* @__PURE__ */ jsx23(FileText2, { className: "h-5 w-5", weight: "fill" }),
              /* @__PURE__ */ jsx23(CodeBlockTitle2, { children: "ngrok-example.js" })
            ] }),
            /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
              /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
              /* @__PURE__ */ jsx23(
                CodeBlockCode13,
                {
                  language: "js",
                  value: fmtCode13`
									const http = require('http');
									const ngrok = require("@ngrok/ngrok");
									const server = http.createServer((req, res) => {
										res.writeHead(200);
										res.end("Hello!");
										setTimeout(() => {
											Promise.resolve(() => {
												console.log("url:", server.tunnel.url());
											})
										}, timeout);
									});
									// Consumes authtoken from env automatically
									ngrok.listen(server).then(() => {
										console.log("url:", server.tunnel.url());
									});
									// really long line here that should wrap around and stuff Officia ipsum sint eu labore esse deserunt aliqua quis irure.
								`
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs17(CodeBlock13, { className: "rounded-b-lg rounded-t-none", children: [
            /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
              /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
              /* @__PURE__ */ jsx23(
                CodeBlockCode13,
                {
                  language: "tsx",
                  value: fmtCode13`
								<CodeBlock>
									<CodeBlockHeader>
										<FileIcon />
										<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
									</CodeBlockHeader>
									<CodeBlockBody>
										<CodeBlockCopyButton />
										<CodeBlockCode
											language="js"
											value={fmtCode\`
												const http = require('http');
												const ngrok = require("@ngrok/ngrok");
												const server = http.createServer((req, res) => {
													res.writeHead(200);
													res.end("Hello!");
													setTimeout(() => {
														Promise.resolve(() => {
															console.log("url:", server.tunnel.url());
														})
													}, timeout);
												});
												// Consumes authtoken from env automatically
												ngrok.listen(server).then(() => {
													console.log("url:", server.tunnel.url());
												});
												// really long line here that should wrap around and stuff Officia ipsum sint eu labore esse deserunt aliqua quis irure.
											\`}
										/>
									</CodeBlockBody>
								</CodeBlock>
							`
                }
              )
            ] }),
            /* @__PURE__ */ jsx23(CodeBlockExpanderButton2, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs17("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs17("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx23("h3", { className: "text-xl font-medium", children: "No Header or Copy Button" }),
          /* @__PURE__ */ jsx23("p", { className: "font-body text-body", children: "This is the most simple example of our code block component. While very useful, the copy button is optional. It is also perfectly acceptable to render a code block without a header, especially if context is provided in the surrounding content or the code block is self-explanatory eg. \u201CIn your index.js file, paste the following:\u201D." })
        ] }),
        /* @__PURE__ */ jsxs17("div", { children: [
          /* @__PURE__ */ jsx23(Example, { children: /* @__PURE__ */ jsx23(CodeBlock13, { children: /* @__PURE__ */ jsx23(CodeBlockBody13, { children: /* @__PURE__ */ jsx23(
            CodeBlockCode13,
            {
              language: "js",
              value: fmtCode13`
									const http = require('http');
									const ngrok = require("@ngrok/ngrok");
									const server = http.createServer((req, res) => {
										res.writeHead(200);
										res.end("Hello!");
									});
									// Consumes authtoken from env automatically
									ngrok.listen(server).then(() => {
										console.log("url:", server.tunnel.url());
									});
								`
            }
          ) }) }) }),
          /* @__PURE__ */ jsxs17(CodeBlock13, { className: "rounded-b-lg rounded-t-none", children: [
            /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
              /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
              /* @__PURE__ */ jsx23(
                CodeBlockCode13,
                {
                  language: "tsx",
                  value: fmtCode13`
								<CodeBlock>
									<CodeBlockBody>
										<CodeBlockCode
											language="js"
											value={fmtCode\`
												const http = require('http');
												const ngrok = require("@ngrok/ngrok");
												const server = http.createServer((req, res) => {
													res.writeHead(200);
													res.end("Hello!");
												});
												// Consumes authtoken from env automatically
												ngrok.listen(server).then(() => {
													console.log("url:", server.tunnel.url());
												});
											\`}
										/>
									</CodeBlockBody>
								</CodeBlock>
							`
                }
              )
            ] }),
            /* @__PURE__ */ jsx23(CodeBlockExpanderButton2, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs17("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs17("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx23("h3", { className: "text-xl font-medium", children: "Single Line with Horizontal Scrolling" }),
          /* @__PURE__ */ jsx23("p", { className: "font-body text-body", children: "This example is included to show the interaction between the copy button and horizontal scrolling on a single verbose terminal command." })
        ] }),
        /* @__PURE__ */ jsxs17("div", { children: [
          /* @__PURE__ */ jsx23(Example, { children: /* @__PURE__ */ jsx23(CodeBlock13, { children: /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
            /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
            /* @__PURE__ */ jsx23(
              CodeBlockCode13,
              {
                language: "sh",
                value: fmtCode13`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4`
              }
            )
          ] }) }) }),
          /* @__PURE__ */ jsx23(CodeBlock13, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs17(CodeBlockBody13, { children: [
            /* @__PURE__ */ jsx23(CodeBlockCopyButton13, {}),
            /* @__PURE__ */ jsx23(
              CodeBlockCode13,
              {
                language: "tsx",
                value: fmtCode13`
							<CodeBlock>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode
										language="sh"
										value={fmtCode\`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4\`}
									/>
								</CodeBlockBody>
							</CodeBlock>
							`
              }
            )
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs17("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx23("h2", { id: "supported-languages", className: "text-3xl font-medium", children: "Supported Languages" }),
      /* @__PURE__ */ jsx23("p", { className: "font-body text-body text-xl", children: "Mantle supports the following languages:" }),
      /* @__PURE__ */ jsx23(Card, { className: "font-mono text-xs", children: /* @__PURE__ */ jsx23(CardBody, { children: /* @__PURE__ */ jsx23("ul", { className: "grid grid-cols-3 gap-2 lg:grid-cols-7", children: supportedLanguages.map((language) => /* @__PURE__ */ jsx23("li", { children: language }, language)) }) }) })
    ] })
  ] });
}

// app/routes/components.separator.tsx
var components_separator_exports = {};
__export(components_separator_exports, {
  default: () => Page15,
  headers: () => headers15,
  meta: () => meta15
});
import { CodeBlock as CodeBlock14, CodeBlockBody as CodeBlockBody14, CodeBlockCode as CodeBlockCode14, CodeBlockCopyButton as CodeBlockCopyButton14, fmtCode as fmtCode14 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode11 } from "@ngrok/mantle/inline-code";
import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";
import { jsx as jsx24, jsxs as jsxs18 } from "react/jsx-runtime";
var meta15 = () => [
  { title: "@ngrok/mantle \u2014 Separator" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers15 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page15() {
  return /* @__PURE__ */ jsxs18("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs18("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx24("h1", { className: "text-5xl font-medium", children: "Separator" }),
      /* @__PURE__ */ jsx24("p", { className: "font-body text-body text-xl", children: "Visually or semantically separates content." }),
      /* @__PURE__ */ jsxs18("div", { children: [
        /* @__PURE__ */ jsx24(Example, { children: /* @__PURE__ */ jsxs18("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs18("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx24("h4", { className: "text-sm font-medium leading-none", children: "mantle" }),
            /* @__PURE__ */ jsx24("p", { className: "text-muted-foreground text-sm", children: "An open-source UI component library." })
          ] }),
          /* @__PURE__ */ jsx24(Separator, { className: "my-4" }),
          /* @__PURE__ */ jsx24(Separator, { className: "my-4", decorative: !1 }),
          /* @__PURE__ */ jsxs18("div", { className: "flex h-5 items-center gap-4 text-sm", children: [
            /* @__PURE__ */ jsx24("div", { children: "Blog" }),
            /* @__PURE__ */ jsx24(Separator, { orientation: "vertical" }),
            /* @__PURE__ */ jsx24("div", { children: "Docs" }),
            /* @__PURE__ */ jsx24(Separator, { orientation: "vertical" }),
            /* @__PURE__ */ jsx24("div", { children: "Source" })
          ] }),
          /* @__PURE__ */ jsxs18(HorizontalSeparatorGroup, { children: [
            /* @__PURE__ */ jsx24(Separator, {}),
            /* @__PURE__ */ jsx24("h3", { children: "ngrok mantle" }),
            /* @__PURE__ */ jsx24(Separator, {})
          ] }),
          /* @__PURE__ */ jsxs18(HorizontalSeparatorGroup, { children: [
            /* @__PURE__ */ jsx24("h3", { children: "ngrok mantle" }),
            /* @__PURE__ */ jsx24(Separator, {})
          ] }),
          /* @__PURE__ */ jsxs18(HorizontalSeparatorGroup, { children: [
            /* @__PURE__ */ jsx24(Separator, {}),
            /* @__PURE__ */ jsx24("h3", { children: "ngrok mantle" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx24(CodeBlock14, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs18(CodeBlockBody14, { children: [
          /* @__PURE__ */ jsx24(CodeBlockCopyButton14, {}),
          /* @__PURE__ */ jsx24(
            CodeBlockCode14,
            {
              language: "tsx",
              value: fmtCode14`
							import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";

							<div>
								<div className="space-y-1">
									<h4 className="text-sm font-medium leading-none">mantle</h4>
									<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
								</div>
								<Separator className="my-4" />
								<div className="flex h-5 items-center space-x-4 text-sm">
									<div>Blog</div>
									<Separator orientation="vertical" />
									<div>Docs</div>
									<Separator orientation="vertical" />
									<div>Source</div>
								</div>
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
								</HorizontalSeparatorGroup>
							</div>
						`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs18("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx24("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }),
      /* @__PURE__ */ jsxs18("p", { className: "font-body text-body text-xl", children: [
        "When you want to render ",
        /* @__PURE__ */ jsx24("span", { className: "italic", children: "something else" }),
        " as a",
        " ",
        /* @__PURE__ */ jsx24(InlineCode11, { children: "HorizontalSeparatorGroup" }),
        " or ",
        /* @__PURE__ */ jsx24(InlineCode11, { children: "Separator" }),
        ", you can use the",
        " ",
        /* @__PURE__ */ jsx24(InlineCode11, { children: "asChild" }),
        " prop to compose."
      ] }),
      /* @__PURE__ */ jsxs18("div", { children: [
        /* @__PURE__ */ jsx24(Example, { children: /* @__PURE__ */ jsxs18("div", { className: "flex flex-col space-y-16", children: [
          /* @__PURE__ */ jsx24("form", { className: "w-96", children: /* @__PURE__ */ jsxs18("fieldset", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx24(HorizontalSeparatorGroup, { className: "w-full", asChild: !0, children: /* @__PURE__ */ jsxs18("legend", { children: [
              "Choose your favorite fruit!",
              /* @__PURE__ */ jsx24(Separator, { asChild: !0, children: /* @__PURE__ */ jsx24("span", {}) })
            ] }) }),
            /* @__PURE__ */ jsxs18("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs18("div", { className: "space-x-2", children: [
                /* @__PURE__ */ jsx24("input", { type: "radio", id: "apple", name: "monster", value: "apple" }),
                /* @__PURE__ */ jsx24("label", { htmlFor: "apple", children: "Apple" })
              ] }),
              /* @__PURE__ */ jsxs18("div", { className: "space-x-2", children: [
                /* @__PURE__ */ jsx24("input", { type: "radio", id: "mango", name: "monster", value: "mango" }),
                /* @__PURE__ */ jsx24("label", { htmlFor: "mango", children: "Mango" })
              ] }),
              /* @__PURE__ */ jsxs18("div", { className: "space-x-2", children: [
                /* @__PURE__ */ jsx24("input", { type: "radio", id: "pear", name: "monster", value: "pear" }),
                /* @__PURE__ */ jsx24("label", { htmlFor: "pear", children: "Pear" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs18("div", { className: "flex h-5 items-center space-x-4 text-sm", children: [
            /* @__PURE__ */ jsx24("div", { children: "Blog" }),
            /* @__PURE__ */ jsx24(Separator, { orientation: "vertical", asChild: !0, children: /* @__PURE__ */ jsx24("span", {}) }),
            /* @__PURE__ */ jsx24("div", { children: "Docs" }),
            /* @__PURE__ */ jsx24(Separator, { orientation: "vertical", asChild: !0, children: /* @__PURE__ */ jsx24("span", {}) }),
            /* @__PURE__ */ jsx24("div", { children: "Source" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx24(CodeBlock14, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs18(CodeBlockBody14, { children: [
          /* @__PURE__ */ jsx24(CodeBlockCopyButton14, {}),
          /* @__PURE__ */ jsx24(
            CodeBlockCode14,
            {
              language: "tsx",
              value: fmtCode14`
									import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";

									<form>
										<fieldset className="space-y-4">
											<HorizontalSeparatorGroup className="w-full" asChild>
												<legend>
													Choose your favorite fruit!
													<Separator asChild>
														<span />
													</Separator>
												</legend>
											</HorizontalSeparatorGroup>

											<div className="space-y-2">
												<div className="space-x-2">
													<input type="radio" id="apple" name="monster" value="apple" />
													<label htmlFor="apple">Apple</label>
												</div>

												<div className="space-x-2">
													<input type="radio" id="mango" name="monster" value="mango" />
													<label htmlFor="mango">Mango</label>
												</div>

												<div className="space-x-2">
													<input type="radio" id="pear" name="monster" value="pear" />
													<label htmlFor="pear">Pear</label>
												</div>
											</div>
										</fieldset>
									</form>

									<div className="flex h-5 items-center space-x-4 text-sm">
										<div>Blog</div>
										<Separator orientation="vertical" asChild>
											<span />
										</Separator>
										<div>Docs</div>
										<Separator orientation="vertical" asChild>
											<span />
										</Separator>
										<div>Source</div>
									</div>
								`
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}

// app/routes/components.text-area.tsx
var components_text_area_exports = {};
__export(components_text_area_exports, {
  default: () => Page16,
  headers: () => headers16,
  meta: () => meta16
});
import { Anchor as Anchor7 } from "@ngrok/mantle/anchor";
import { CodeBlock as CodeBlock15, CodeBlockBody as CodeBlockBody15, CodeBlockCode as CodeBlockCode15, CodeBlockCopyButton as CodeBlockCopyButton15, fmtCode as fmtCode15 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode12 } from "@ngrok/mantle/inline-code";
import { Label as Label2 } from "@ngrok/mantle/label";
import { TextArea } from "@ngrok/mantle/text-area";
import { jsx as jsx25, jsxs as jsxs19 } from "react/jsx-runtime";
var meta16 = () => [
  { title: "@ngrok/mantle \u2014 TextArea" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers16 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
async function handleDrop(event) {
  event.preventDefault();
  let files = Array.from(event.dataTransfer.files), fileData = await Promise.all(files.map((file) => file.text())), textArea = event.target;
  textArea.value = fileData.join(`
`);
}
function Page16() {
  return /* @__PURE__ */ jsxs19("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs19("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx25("h1", { id: "textarea", className: "text-5xl font-medium", children: "TextArea" }),
      /* @__PURE__ */ jsx25("p", { className: "font-body text-body text-xl", children: "Displays a form textarea or a component that looks like a textarea." }),
      /* @__PURE__ */ jsxs19("div", { children: [
        /* @__PURE__ */ jsxs19(Example, { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs19(Label2, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx25("p", { children: "Default TextArea" }),
            /* @__PURE__ */ jsx25(TextArea, { onDrop: (event) => handleDrop(event), placeholder: "Tell us about your experience\u2026" })
          ] }),
          /* @__PURE__ */ jsxs19(Label2, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx25("p", { children: "Monospaced TextArea" }),
            /* @__PURE__ */ jsx25(
              TextArea,
              {
                onDrop: (event) => handleDrop(event),
                appearance: "monospaced",
                placeholder: "Tell us about your experience\u2026"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs19(Label2, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx25("p", { children: "Error TextArea" }),
            /* @__PURE__ */ jsx25(
              TextArea,
              {
                onDrop: (event) => handleDrop(event),
                placeholder: "Tell us about your experience\u2026",
                validation: "error"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs19(Label2, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx25("p", { children: "Success TextArea" }),
            /* @__PURE__ */ jsx25(
              TextArea,
              {
                onDrop: (event) => handleDrop(event),
                placeholder: "Tell us about your experience\u2026",
                validation: "success"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs19(Label2, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx25("p", { children: "Warning TextArea" }),
            /* @__PURE__ */ jsx25(
              TextArea,
              {
                onDrop: (event) => handleDrop(event),
                placeholder: "Tell us about your experience\u2026",
                validation: "warning"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx25(CodeBlock15, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs19(CodeBlockBody15, { children: [
          /* @__PURE__ */ jsx25(CodeBlockCopyButton15, {}),
          /* @__PURE__ */ jsx25(
            CodeBlockCode15,
            {
              language: "tsx",
              value: fmtCode15`
									import { TextArea } from "@ngrok/mantle/text-area";

									<TextArea placeholder="Tell us about your experience…" />
									<TextArea appearance="monospaced" placeholder="Tell us about your experience…" />
									<TextArea placeholder="Tell us about your experience…" validation="error" />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs19("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx25("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs19("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx25(InlineCode12, { children: "TextArea" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx25(Anchor7, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea", children: "standard HTML textarea attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs19(PropsTable, { children: [
        /* @__PURE__ */ jsxs19(PropRow, { children: [
          /* @__PURE__ */ jsx25(PropNameCell, { name: "appearance", optional: !0 }),
          /* @__PURE__ */ jsx25(PropTypeCell, { children: /* @__PURE__ */ jsx25("ul", { children: /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25(StringPropType, { value: "monospaced" }) }) }) }),
          /* @__PURE__ */ jsx25(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx25(PropDescriptionCell, { children: /* @__PURE__ */ jsxs19("p", { children: [
            "Defines the visual style of the ",
            /* @__PURE__ */ jsx25(InlineCode12, { children: "TextArea" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs19(PropRow, { children: [
          /* @__PURE__ */ jsx25(PropNameCell, { name: "validation", optional: !0 }),
          /* @__PURE__ */ jsx25(PropTypeCell, { children: /* @__PURE__ */ jsxs19("ul", { children: [
            /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25(StringPropType, { value: "error" }) }),
            /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25(StringPropType, { value: "success" }) }),
            /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25(StringPropType, { value: "warning" }) }),
            /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25(BooleanPropType, { value: !1 }) }),
            /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25(FuncPropType, { value: '() => "error" | "success" | "warning" | false' }) })
          ] }) }),
          /* @__PURE__ */ jsx25(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs19(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs19("p", { children: [
              "Use the ",
              /* @__PURE__ */ jsx25(InlineCode12, { children: "validation" }),
              " prop to show if the textarea has a specific validation status. This will change the border and outline of the textarea."
            ] }),
            /* @__PURE__ */ jsxs19("p", { children: [
              "The ",
              /* @__PURE__ */ jsx25(InlineCode12, { children: "false" }),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ jsx25(InlineCode12, { children: "undefined" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs19("p", { children: [
              "Setting ",
              /* @__PURE__ */ jsx25(InlineCode12, { children: "validation" }),
              " to ",
              /* @__PURE__ */ jsx25(InlineCode12, { children: "error" }),
              " also sets",
              " ",
              /* @__PURE__ */ jsx25(InlineCode12, { children: "aria-invalid" }),
              "."
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.checkbox.tsx
var components_checkbox_exports = {};
__export(components_checkbox_exports, {
  default: () => Page17,
  headers: () => headers17,
  meta: () => meta17
});
import { Anchor as Anchor8 } from "@ngrok/mantle/anchor";
import { Checkbox } from "@ngrok/mantle/checkbox";
import { CodeBlock as CodeBlock16, CodeBlockBody as CodeBlockBody16, CodeBlockCode as CodeBlockCode16, CodeBlockCopyButton as CodeBlockCopyButton16, fmtCode as fmtCode16 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode13 } from "@ngrok/mantle/inline-code";
import { Label as Label3 } from "@ngrok/mantle/label";
import { jsx as jsx26, jsxs as jsxs20 } from "react/jsx-runtime";
var meta17 = () => [
  { title: "@ngrok/mantle \u2014 Checkbox" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers17 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page17() {
  return /* @__PURE__ */ jsxs20("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs20("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx26("h1", { className: "text-5xl font-medium", children: "Checkbox" }),
      /* @__PURE__ */ jsx26("p", { className: "font-body text-body text-xl", children: "A form control that allows the user to toggle between checked and not checked." }),
      /* @__PURE__ */ jsxs20("div", { children: [
        /* @__PURE__ */ jsx26(Example, { children: /* @__PURE__ */ jsxs20("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs20(Label3, { htmlFor: "terms", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx26(Checkbox, { name: "terms", id: "terms" }),
            "Accept terms and conditions"
          ] }),
          /* @__PURE__ */ jsxs20(Label3, { htmlFor: "unchecked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx26(Checkbox, { id: "unchecked", name: "unchecked", checked: !1, readOnly: !0 }),
            "Unchecked (static)"
          ] }),
          /* @__PURE__ */ jsxs20(Label3, { htmlFor: "checked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx26(Checkbox, { id: "checked", name: "checked", checked: !0, readOnly: !0 }),
            "Checked (static)"
          ] }),
          /* @__PURE__ */ jsxs20(Label3, { htmlFor: "indeterminate", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx26(Checkbox, { id: "indeterminate", name: "indeterminate", defaultChecked: "indeterminate", readOnly: !0 }),
            "Indeterminate (static)"
          ] }),
          /* @__PURE__ */ jsxs20(Label3, { htmlFor: "disabled-unchecked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx26(Checkbox, { disabled: !0, id: "unchecked", name: "unchecked", checked: !1, readOnly: !0 }),
            /* @__PURE__ */ jsx26("span", { className: "opacity-50", children: "Disabled Unchecked (static)" })
          ] }),
          /* @__PURE__ */ jsxs20(Label3, { htmlFor: "disabled-checked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx26(Checkbox, { disabled: !0, id: "checked", name: "checked", checked: !0, readOnly: !0 }),
            /* @__PURE__ */ jsx26("span", { className: "opacity-50", children: "Disabled Checked (static)" })
          ] }),
          /* @__PURE__ */ jsxs20(Label3, { htmlFor: "disabled-indeterminate", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx26(Checkbox, { disabled: !0, id: "indeterminate", name: "indeterminate", defaultChecked: "indeterminate", readOnly: !0 }),
            /* @__PURE__ */ jsx26("span", { className: "opacity-50", children: "Disabled Indeterminate (static)" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx26(CodeBlock16, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs20(CodeBlockBody16, { children: [
          /* @__PURE__ */ jsx26(CodeBlockCopyButton16, {}),
          /* @__PURE__ */ jsx26(
            CodeBlockCode16,
            {
              language: "tsx",
              value: fmtCode16`
							import { Checkbox } from "@ngrok/mantle/checkbox";
							import { Label } from "@ngrok/mantle/label";

							<Label htmlFor="terms" className="flex items-center gap-2">
								<Checkbox name="terms" id="terms" />
								Accept terms and conditions
							</Label>
							<Label htmlFor="unchecked" className="flex items-center gap-2">
								<Checkbox id="unchecked" name="unchecked" checked={false} />
								Unchecked
							</Label>
							<Label htmlFor="checked" className="flex items-center gap-2">
								<Checkbox id="checked" name="checked" checked />
								Checked
							</Label>
							<Label htmlFor="indeterminate" className="flex items-center gap-2">
								<Checkbox id="indeterminate" name="indeterminate" checked="indeterminate" />
								Indeterminate
							</Label>
						`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs20("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx26("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs20("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx26(InlineCode13, { children: "Checkbox" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx26(Anchor8, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox", children: "standard HTML checkbox input attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs20(PropsTable, { children: [
        /* @__PURE__ */ jsxs20(PropRow, { children: [
          /* @__PURE__ */ jsx26(PropNameCell, { name: "checked", optional: !0 }),
          /* @__PURE__ */ jsx26(PropTypeCell, { children: /* @__PURE__ */ jsxs20("ul", { children: [
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(BooleanPropType, {}) }),
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(StringPropType, { value: "indeterminate" }) })
          ] }) }),
          /* @__PURE__ */ jsx26(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx26(PropDescriptionCell, { children: /* @__PURE__ */ jsxs20("p", { children: [
            "Whether the checkbox is checked or not. Setting this to ",
            /* @__PURE__ */ jsx26(InlineCode13, { children: "indeterminate" }),
            " will show the indeterminate state. This is useful for when the checkbox is in a parent-child relationship, but this requires manual, controlled state."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs20(PropRow, { children: [
          /* @__PURE__ */ jsx26(PropNameCell, { name: "defaultChecked", optional: !0 }),
          /* @__PURE__ */ jsx26(PropTypeCell, { children: /* @__PURE__ */ jsxs20("ul", { children: [
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(BooleanPropType, {}) }),
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(StringPropType, { value: "indeterminate" }) })
          ] }) }),
          /* @__PURE__ */ jsx26(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx26(PropDescriptionCell, { children: /* @__PURE__ */ jsx26("p", { children: "The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state." }) })
        ] }),
        /* @__PURE__ */ jsxs20(PropRow, { children: [
          /* @__PURE__ */ jsx26(PropNameCell, { name: "validation", optional: !0 }),
          /* @__PURE__ */ jsx26(PropTypeCell, { children: /* @__PURE__ */ jsxs20("ul", { children: [
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(StringPropType, { value: "error" }) }),
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(StringPropType, { value: "success" }) }),
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(StringPropType, { value: "warning" }) }),
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(BooleanPropType, { value: !1 }) }),
            /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26(FuncPropType, { value: '() => "error" | "success" | "warning" | false' }) })
          ] }) }),
          /* @__PURE__ */ jsx26(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs20(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs20("p", { children: [
              "Use the ",
              /* @__PURE__ */ jsx26(InlineCode13, { children: "validation" }),
              " prop to show if the checkbox has a specific validation status. This will change the border and outline of the checkbox."
            ] }),
            /* @__PURE__ */ jsxs20("p", { children: [
              "The ",
              /* @__PURE__ */ jsx26(InlineCode13, { children: "false" }),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ jsx26(InlineCode13, { children: "undefined" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs20("p", { children: [
              "Setting ",
              /* @__PURE__ */ jsx26(InlineCode13, { children: "validation" }),
              " to ",
              /* @__PURE__ */ jsx26(InlineCode13, { children: "error" }),
              " also sets",
              " ",
              /* @__PURE__ */ jsx26(InlineCode13, { children: "aria-invalid" }),
              "."
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.skeleton.tsx
var components_skeleton_exports = {};
__export(components_skeleton_exports, {
  default: () => Page18,
  headers: () => headers18,
  meta: () => meta18
});
import { CodeBlock as CodeBlock17, CodeBlockBody as CodeBlockBody17, CodeBlockCode as CodeBlockCode17, CodeBlockCopyButton as CodeBlockCopyButton17, fmtCode as fmtCode17 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode14 } from "@ngrok/mantle/inline-code";
import { MediaObject as MediaObject2, MediaObjectContent as MediaObjectContent2, MediaObjectMedia as MediaObjectMedia2 } from "@ngrok/mantle/media-object";
import { Skeleton } from "@ngrok/mantle/skeleton";

// app/components/link.tsx
import { Anchor as Anchor9 } from "@ngrok/mantle/anchor";
import { Link as RRLink } from "@remix-run/react";
import { jsx as jsx27 } from "react/jsx-runtime";
var Link3 = ({ hash, rawTo, search, to, ...props }) => /* @__PURE__ */ jsx27(Anchor9, { asChild: !0, children: /* @__PURE__ */ jsx27(
  RRLink,
  {
    to: {
      pathname: to ?? rawTo,
      search,
      hash
    },
    ...props
  }
) });

// app/routes/components.skeleton.tsx
import { jsx as jsx28, jsxs as jsxs21 } from "react/jsx-runtime";
var meta18 = () => [
  { title: "@ngrok/mantle \u2014 Skeleton" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers18 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page18() {
  return /* @__PURE__ */ jsxs21("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs21("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx28("h1", { className: "text-5xl font-medium", children: "Skeleton" }),
      /* @__PURE__ */ jsxs21("p", { className: "font-body text-body mt-4 text-xl", children: [
        "Use to show a placeholder while content is loading. By using a ",
        /* @__PURE__ */ jsx28(InlineCode14, { children: "Skeleton" }),
        ", you can give the user an idea of what the content will look like, reducing the perceived loading time and CLS (Cumulative Layout Shift)."
      ] }),
      /* @__PURE__ */ jsxs21("div", { children: [
        /* @__PURE__ */ jsx28(Example, { children: /* @__PURE__ */ jsx28(Skeleton, { className: "w-full" }) }),
        /* @__PURE__ */ jsx28(CodeBlock17, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs21(CodeBlockBody17, { children: [
          /* @__PURE__ */ jsx28(CodeBlockCopyButton17, {}),
          /* @__PURE__ */ jsx28(
            CodeBlockCode17,
            {
              language: "tsx",
              value: fmtCode17`
						import { Skeleton } from "@ngrok/mantle/skeleton";

						<Skeleton className="w-full" />
					`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs21("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs21("header", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxs21("h3", { className: "text-xl font-medium", children: [
          "Skeleton ",
          /* @__PURE__ */ jsx28(Link3, { to: "/components/media-object", children: "Media Object" })
        ] }),
        /* @__PURE__ */ jsx28("p", { className: "font-body text-body mt-1", children: "The Skeleton component can be included within components. You can also pass Tailwind utility classes for further control." })
      ] }),
      /* @__PURE__ */ jsxs21("div", { children: [
        /* @__PURE__ */ jsx28(Example, { children: /* @__PURE__ */ jsxs21(MediaObject2, { children: [
          /* @__PURE__ */ jsx28(MediaObjectMedia2, { children: /* @__PURE__ */ jsx28(Skeleton, { className: "h-12 w-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs21(MediaObjectContent2, { className: "space-y-3", children: [
            /* @__PURE__ */ jsx28(Skeleton, { className: "w-[250px]" }),
            /* @__PURE__ */ jsx28(Skeleton, { className: "w-[200px]" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx28(CodeBlock17, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs21(CodeBlockBody17, { children: [
          /* @__PURE__ */ jsx28(CodeBlockCopyButton17, {}),
          /* @__PURE__ */ jsx28(
            CodeBlockCode17,
            {
              language: "tsx",
              value: fmtCode17`
									import { MediaObject, MediaObjectMedia, MediaObjectContent } from "@ngrok/mantle/media-object";
									import { Skeleton } from "@ngrok/skeleton";

									<MediaObject>
										<MediaObjectMedia>
											<Skeleton className="h-12 w-12 rounded-full" />
										</MediaObjectMedia>
										<MediaObjectContent className="space-y-3">
											<Skeleton className="w-[250px]" />
											<Skeleton className="w-[200px]" />
										</MediaObjectContent>
									</MediaObject>
								`
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}

// app/routes/components.anchor.tsx
var components_anchor_exports = {};
__export(components_anchor_exports, {
  default: () => Page19,
  headers: () => headers19,
  meta: () => meta19
});
import { Anchor as Anchor10 } from "@ngrok/mantle/anchor";
import { CodeBlock as CodeBlock18, CodeBlockBody as CodeBlockBody18, CodeBlockCode as CodeBlockCode18, CodeBlockCopyButton as CodeBlockCopyButton18, fmtCode as fmtCode18 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode15 } from "@ngrok/mantle/inline-code";
import { jsx as jsx29, jsxs as jsxs22 } from "react/jsx-runtime";
var meta19 = () => [
  { title: "@ngrok/mantle \u2014 Anchor" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers19 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page19() {
  return /* @__PURE__ */ jsxs22("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs22("header", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx29("h1", { className: "text-5xl font-medium", children: "Anchor" }),
      /* @__PURE__ */ jsx29("p", { className: "font-body text-body text-xl", children: "Fundamental component for rendering links to external addresses." })
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "font-body text-body space-y-4", children: [
      /* @__PURE__ */ jsxs22("p", { children: [
        "The ",
        /* @__PURE__ */ jsx29(InlineCode15, { children: "<Anchor>" }),
        " element, with its ",
        /* @__PURE__ */ jsx29(InlineCode15, { children: "href" }),
        " attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."
      ] }),
      /* @__PURE__ */ jsxs22("p", { children: [
        "Content within each ",
        /* @__PURE__ */ jsx29(InlineCode15, { children: "<Anchor>" }),
        " should indicate the link\u2019s destination. If the ",
        /* @__PURE__ */ jsx29(InlineCode15, { children: "href" }),
        " attribute is present, pressing the enter key while focused on the",
        " ",
        /* @__PURE__ */ jsx29(InlineCode15, { children: "<Anchor>" }),
        " element will activate it."
      ] }),
      /* @__PURE__ */ jsxs22("p", { children: [
        "See the ",
        /* @__PURE__ */ jsx29(Anchor10, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a", children: "MDN docs" }),
        " for more information."
      ] }),
      /* @__PURE__ */ jsxs22("p", { children: [
        "If you need to link to an internal application route, prefer using the",
        " ",
        /* @__PURE__ */ jsxs22(Anchor10, { href: "https://reactrouter.com/en/main/components/link", children: [
          /* @__PURE__ */ jsx29(InlineCode15, { children: "react-router-dom" }),
          " ",
          /* @__PURE__ */ jsx29(InlineCode15, { children: "<Link>" })
        ] }),
        " ",
        "or the",
        " ",
        /* @__PURE__ */ jsxs22(Anchor10, { href: "https://remix.run/docs/en/main/components/link", children: [
          /* @__PURE__ */ jsx29(InlineCode15, { children: "@remix-run/react" }),
          " ",
          /* @__PURE__ */ jsx29(InlineCode15, { children: "<Link>" })
        ] }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs22("div", { children: [
      /* @__PURE__ */ jsx29(Example, { children: /* @__PURE__ */ jsxs22("p", { children: [
        "This link will go to ",
        /* @__PURE__ */ jsx29(Anchor10, { href: "https://ngrok.com/", children: "ngrok.com" }),
        "!"
      ] }) }),
      /* @__PURE__ */ jsx29(CodeBlock18, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs22(CodeBlockBody18, { children: [
        /* @__PURE__ */ jsx29(CodeBlockCopyButton18, {}),
        /* @__PURE__ */ jsx29(
          CodeBlockCode18,
          {
            language: "tsx",
            value: fmtCode18`
							import { Anchor } from "@ngrok/mantle/anchor";

							<p>
								This link will go to <Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
							</p>
						`
          }
        )
      ] }) })
    ] })
  ] });
}

// app/routes/components.button.tsx
var components_button_exports = {};
__export(components_button_exports, {
  default: () => Page20,
  headers: () => headers20,
  meta: () => meta20
});
import { Anchor as Anchor11 } from "@ngrok/mantle/anchor";
import { Button as Button6 } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock19, CodeBlockBody as CodeBlockBody19, CodeBlockCode as CodeBlockCode19, CodeBlockCopyButton as CodeBlockCopyButton19, fmtCode as fmtCode19 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode16 } from "@ngrok/mantle/inline-code";
import { Tooltip as Tooltip4, TooltipContent as TooltipContent4, TooltipTrigger as TooltipTrigger4 } from "@ngrok/mantle/tooltip";
import { Fire } from "@phosphor-icons/react/Fire";
import { Link as Link4 } from "@remix-run/react";
import { jsx as jsx30, jsxs as jsxs23 } from "react/jsx-runtime";
var meta20 = () => [
  { title: "@ngrok/mantle \u2014 Button" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers20 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
}), DisabledTooltip2 = ({ children }) => /* @__PURE__ */ jsxs23(Tooltip4, { children: [
  /* @__PURE__ */ jsx30(TooltipTrigger4, { asChild: !0, children }),
  /* @__PURE__ */ jsx30(TooltipContent4, { children: "Tooltips work on disabled buttons!" })
] });
function Page20() {
  return /* @__PURE__ */ jsxs23("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs23("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx30("h1", { id: "button", className: "text-5xl font-medium", children: "Button" }),
      /* @__PURE__ */ jsx30("p", { className: "font-body text-body text-xl", children: "Initiates an action, such as completing a task or submitting information" }),
      /* @__PURE__ */ jsxs23("div", { children: [
        /* @__PURE__ */ jsxs23(Example, { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxs23("div", { children: [
            /* @__PURE__ */ jsx30("p", { className: "mb-2 text-center font-mono text-xs", children: "Default" }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "ghost", priority: "default", children: "Ghost" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "filled", priority: "default", children: "Filled" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "outlined", priority: "default", children: "Outlined" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "link", priority: "default", children: "Link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs23("div", { children: [
            /* @__PURE__ */ jsx30("p", { className: "mb-2 text-center font-mono text-xs", children: "Neutral" }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "ghost", priority: "neutral", children: "Ghost" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "filled", priority: "neutral", children: "Filled" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "outlined", priority: "neutral", children: "Outlined" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "link", priority: "neutral", children: "Link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs23("div", { children: [
            /* @__PURE__ */ jsx30("p", { className: "mb-2 text-center font-mono text-xs", children: "Danger" }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "ghost", priority: "danger", children: "Ghost" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "filled", priority: "danger", children: "Filled" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "outlined", priority: "danger", children: "Outlined" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "link", priority: "danger", children: "Link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs23("div", { children: [
            /* @__PURE__ */ jsx30("p", { className: "mb-2 text-center font-mono text-xs", children: "Disabled" }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx30(DisabledTooltip2, { children: /* @__PURE__ */ jsx30(Button6, { disabled: !0, type: "button", appearance: "ghost", priority: "default", children: "Ghost" }) }),
              /* @__PURE__ */ jsx30(DisabledTooltip2, { children: /* @__PURE__ */ jsx30(Button6, { disabled: !0, type: "button", appearance: "filled", priority: "default", children: "Filled" }) }),
              /* @__PURE__ */ jsx30(DisabledTooltip2, { children: /* @__PURE__ */ jsx30(Button6, { disabled: !0, type: "button", appearance: "outlined", priority: "default", children: "Outlined" }) }),
              /* @__PURE__ */ jsx30(DisabledTooltip2, { children: /* @__PURE__ */ jsx30(Button6, { disabled: !0, type: "button", appearance: "link", priority: "default", children: "Link" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx30(CodeBlock19, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs23(CodeBlockBody19, { children: [
          /* @__PURE__ */ jsx30(CodeBlockCopyButton19, {}),
          /* @__PURE__ */ jsx30(
            CodeBlockCode19,
            {
              language: "tsx",
              value: fmtCode19`
									import { Button } from "@ngrok/mantle/button";

									<Button type="button">Outlined</Button>
									<Button type="button" appearance="filled">Filled</Button>
									<Button type="button" appearance="ghost">Ghost</Button>
									<Button type="button" appearance="link">Link</Button>

									<Button type="button" priority="neutral">Outlined</Button>
									<Button type="button" priority="neutral" appearance="filled">Filled</Button>
									<Button type="button" priority="neutral" appearance="ghost">Ghost</Button>
									<Button type="button" priority="neutral" appearance="link">Link</Button>

									<Button type="button" priority="danger">Outlined</Button>
									<Button type="button" priority="danger" appearance="filled">Filled</Button>
									<Button type="button" priority="danger" appearance="ghost">Ghost</Button>
									<Button type="button" priority="danger" appearance="link">Link</Button>

									<Button disabled type="button" appearance="ghost" priority="default">
										Ghost
									</Button>
									<Button disabled type="button" appearance="filled" priority="default">
										Filled
									</Button>
									<Button disabled type="button" appearance="outlined" priority="default">
										Outlined
									</Button>
									<Button disabled type="button" appearance="link" priority="default">
										Link
									</Button>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx30("h2", { id: "example-icon", className: "text-3xl font-medium", children: "Icon and Positioning" }),
      /* @__PURE__ */ jsxs23("p", { className: "font-body text-body text-xl", children: [
        "Use the ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "icon" }),
        " prop to add an icon to the button. By default, it will render on the logical start side of the button. Use the ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "iconPlacement" }),
        " prop to change the side the icon is rendered on."
      ] }),
      /* @__PURE__ */ jsxs23("div", { children: [
        /* @__PURE__ */ jsx30(Example, { children: /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx30(Button6, { type: "button", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), children: "Icon Start" }),
          /* @__PURE__ */ jsx30(Button6, { type: "button", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), iconPlacement: "end", children: "Icon End" })
        ] }) }),
        /* @__PURE__ */ jsx30(CodeBlock19, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs23(CodeBlockBody19, { children: [
          /* @__PURE__ */ jsx30(CodeBlockCopyButton19, {}),
          /* @__PURE__ */ jsx30(
            CodeBlockCode19,
            {
              language: "tsx",
              value: fmtCode19`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<Button type="button" icon={<Fire weight="fill" />}>Icon Start</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End
									</Button>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx30("h2", { id: "example-loading", className: "text-3xl font-medium", children: "isLoading" }),
      /* @__PURE__ */ jsxs23("p", { className: "font-body text-body text-xl", children: [
        /* @__PURE__ */ jsx30(InlineCode16, { children: "isLoading" }),
        " determines whether or not the button is in a loading state, default",
        " ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "false" }),
        ". Setting ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "isLoading" }),
        " will replace any",
        " ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "icon" }),
        " with a spinner, or add one if an icon wasn't given. It will also disable user interaction with the button and set ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "aria-disabled" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs23("div", { children: [
        /* @__PURE__ */ jsxs23(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ jsxs23("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx30("p", { className: "mb-2 text-center font-mono text-xs", children: "Idle" }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx30(Button6, { type: "button", children: "No Icon + Idle" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), children: "Icon Start + Idle" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), iconPlacement: "end", children: "Icon End + Idle" })
            ] }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "link", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), children: "Link + Icon Start + Idle" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "link", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), iconPlacement: "end", children: "Link + Icon End + Idle" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs23("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx30("p", { className: "mb-2 text-center font-mono text-xs", children: "isLoading" }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx30(Button6, { type: "button", isLoading: !0, children: "No Icon + isLoading" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), isLoading: !0, children: "Icon Start + isLoading" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), iconPlacement: "end", isLoading: !0, children: "Icon End + isLoading" })
            ] }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "link", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), isLoading: !0, children: "Link + Icon Start + isLoading" }),
              /* @__PURE__ */ jsx30(Button6, { type: "button", appearance: "link", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), iconPlacement: "end", isLoading: !0, children: "Link + Icon End + isLoading" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx30(CodeBlock19, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs23(CodeBlockBody19, { children: [
          /* @__PURE__ */ jsx30(CodeBlockCopyButton19, {}),
          /* @__PURE__ */ jsx30(
            CodeBlockCode19,
            {
              language: "tsx",
              value: fmtCode19`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<Button type="button">No Icon + Idle</Button>
									<Button type="button" icon={<Fire weight="fill" />}>Icon Start + Idle</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End + Idle
									</Button>
									<Button type="button" isLoading>No Icon + isLoading</Button>
									<Button type="button" icon={<Fire weight="fill" />} isLoading>
										Icon Start + isLoading
									</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end" isLoading>
										Icon End + isLoading
									</Button>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx30("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }),
      /* @__PURE__ */ jsxs23("p", { className: "font-body text-body text-xl", children: [
        "When you want to render ",
        /* @__PURE__ */ jsx30("span", { className: "italic", children: "something else" }),
        " as a ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "Button" }),
        ", you can use the ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "asChild" }),
        " prop to compose. This is useful when you want to splat the",
        " ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "Button" }),
        " styling onto a ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "Link" }),
        " from",
        " ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "remix" }),
        " or ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "react-router" }),
        ". Keep in mind that when you use",
        " ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "asChild" }),
        " the ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "type" }),
        " prop will ",
        /* @__PURE__ */ jsx30("strong", { children: "NOT" }),
        " be passed to the child component."
      ] }),
      /* @__PURE__ */ jsxs23("div", { children: [
        /* @__PURE__ */ jsx30(Example, { children: /* @__PURE__ */ jsx30(Button6, { appearance: "filled", icon: /* @__PURE__ */ jsx30(Fire, { weight: "fill" }), asChild: !0, children: /* @__PURE__ */ jsx30(Link4, { to: route("/base/colors"), children: "See our colors!" }) }) }),
        /* @__PURE__ */ jsx30(CodeBlock19, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs23(CodeBlockBody19, { children: [
          /* @__PURE__ */ jsx30(CodeBlockCopyButton19, {}),
          /* @__PURE__ */ jsx30(
            CodeBlockCode19,
            {
              language: "tsx",
              value: fmtCode19`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";
									import { Link } from "react-router-dom";

									<Button appearance="filled" icon={<Fire weight="fill" />} asChild>
										<Link to="/base/colors">See our colors!</Link>
									</Button>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx30("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs23("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx30(InlineCode16, { children: "Button" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx30(Anchor11, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button", children: "standard HTML button attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs23(PropsTable, { children: [
        /* @__PURE__ */ jsxs23(PropRow, { children: [
          /* @__PURE__ */ jsx30(PropNameCell, { name: "appearance", optional: !0 }),
          /* @__PURE__ */ jsx30(PropTypeCell, { children: /* @__PURE__ */ jsxs23("ul", { children: [
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "ghost" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "filled" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "outlined" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "link" }) })
          ] }) }),
          /* @__PURE__ */ jsx30(PropDefaultValueCell, { children: /* @__PURE__ */ jsx30(StringPropType, { value: "outlined" }) }),
          /* @__PURE__ */ jsx30(PropDescriptionCell, { children: /* @__PURE__ */ jsxs23("p", { children: [
            "Defines the visual style of the ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "Button" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs23(PropRow, { children: [
          /* @__PURE__ */ jsx30(PropNameCell, { name: "asChild", optional: !0 }),
          /* @__PURE__ */ jsx30(PropTypeCell, { children: /* @__PURE__ */ jsx30(BooleanPropType, {}) }),
          /* @__PURE__ */ jsx30(PropDefaultValueCell, { children: /* @__PURE__ */ jsx30(BooleanPropType, { value: !1 }) }),
          /* @__PURE__ */ jsx30(PropDescriptionCell, { children: /* @__PURE__ */ jsxs23("p", { children: [
            "Use the ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "asChild" }),
            " prop to compose the ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "Button" }),
            " styling and functionality onto alternative element types or your own React components."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs23(PropRow, { children: [
          /* @__PURE__ */ jsx30(PropNameCell, { name: "icon", optional: !0 }),
          /* @__PURE__ */ jsx30(PropTypeCell, { children: /* @__PURE__ */ jsx30(ReactNodePropType, {}) }),
          /* @__PURE__ */ jsx30(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs23(PropDescriptionCell, { children: [
            "An icon to render inside the button. If the ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "state" }),
            " is",
            " ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "pending" }),
            ", then the icon will automatically be replaced with a spinner."
          ] })
        ] }),
        /* @__PURE__ */ jsxs23(PropRow, { children: [
          /* @__PURE__ */ jsx30(PropNameCell, { name: "iconPlacement", optional: !0 }),
          /* @__PURE__ */ jsx30(PropTypeCell, { children: /* @__PURE__ */ jsxs23("ul", { children: [
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "start" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "end" }) })
          ] }) }),
          /* @__PURE__ */ jsx30(PropDefaultValueCell, { children: /* @__PURE__ */ jsx30(StringPropType, { value: "start" }) }),
          /* @__PURE__ */ jsx30(PropDescriptionCell, { children: /* @__PURE__ */ jsxs23("p", { children: [
            "The side that the icon will render on, if one is present. If ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: 'state="pending"' }),
            ", then the loading icon will also render on this side."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs23(PropRow, { children: [
          /* @__PURE__ */ jsx30(PropNameCell, { name: "isLoading", optional: !0 }),
          /* @__PURE__ */ jsx30(PropTypeCell, { children: /* @__PURE__ */ jsx30(BooleanPropType, {}) }),
          /* @__PURE__ */ jsx30(PropDefaultValueCell, { children: /* @__PURE__ */ jsx30(BooleanPropType, { value: !1 }) }),
          /* @__PURE__ */ jsx30(PropDescriptionCell, { children: /* @__PURE__ */ jsxs23("p", { children: [
            "Determines whether or not the button is in a loading state, default ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "false" }),
            ". Setting ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "isLoading" }),
            " will replace any ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "icon" }),
            " with a spinner, or add one if an icon wasn't given. It will also disable user interaction with the button and set ",
            /* @__PURE__ */ jsx30(InlineCode16, { children: "aria-disabled" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs23(PropRow, { children: [
          /* @__PURE__ */ jsx30(PropNameCell, { name: "priority", optional: !0 }),
          /* @__PURE__ */ jsx30(PropTypeCell, { children: /* @__PURE__ */ jsxs23("ul", { children: [
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "default" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "danger" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "neutral" }) })
          ] }) }),
          /* @__PURE__ */ jsx30(PropDefaultValueCell, { children: /* @__PURE__ */ jsx30(StringPropType, { value: "default" }) }),
          /* @__PURE__ */ jsx30(PropDescriptionCell, { children: /* @__PURE__ */ jsx30("p", { children: "Indicates the importance or impact level of the button, affecting its color and styling to communicate its purpose to the user." }) })
        ] }),
        /* @__PURE__ */ jsxs23(PropRow, { children: [
          /* @__PURE__ */ jsx30(PropNameCell, { name: "type" }),
          /* @__PURE__ */ jsx30(PropTypeCell, { children: /* @__PURE__ */ jsxs23("ul", { children: [
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "button" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "reset" }) }),
            /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsx30(StringPropType, { value: "submit" }) })
          ] }) }),
          /* @__PURE__ */ jsx30(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs23(PropDescriptionCell, { children: [
            /* @__PURE__ */ jsxs23("p", { children: [
              "The default behavior of the ",
              /* @__PURE__ */ jsx30(InlineCode16, { children: "Button" }),
              ". Unlike the native",
              " ",
              /* @__PURE__ */ jsx30(InlineCode16, { children: "button" }),
              " element, unless you use the ",
              /* @__PURE__ */ jsx30(InlineCode16, { children: "asChild" }),
              " prop,",
              " ",
              /* @__PURE__ */ jsx30("span", { className: "font-semibold", children: "this prop is required and has no default value" }),
              ". See",
              " ",
              /* @__PURE__ */ jsx30(Anchor11, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type", children: "the MDN docs" }),
              " ",
              "for more information."
            ] }),
            /* @__PURE__ */ jsxs23("ul", { className: "list-disc pl-5", children: [
              /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsxs23("p", { children: [
                /* @__PURE__ */ jsx30(InlineCode16, { children: '"button"' }),
                ": The button has no default behavior, and does nothing when pressed by default."
              ] }) }),
              /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsxs23("p", { children: [
                /* @__PURE__ */ jsx30(InlineCode16, { children: '"reset"' }),
                ": The button resets all the controls to their initial values."
              ] }) }),
              /* @__PURE__ */ jsx30("li", { children: /* @__PURE__ */ jsxs23("p", { children: [
                /* @__PURE__ */ jsx30(InlineCode16, { children: '"submit"' }),
                ": The button submits the form data to the server."
              ] }) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.dialog.tsx
var components_dialog_exports = {};
__export(components_dialog_exports, {
  default: () => Page21,
  headers: () => headers21,
  meta: () => meta21
});
import { Button as Button7, IconButton as IconButton2 } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock20, CodeBlockBody as CodeBlockBody20, CodeBlockCode as CodeBlockCode20, CodeBlockCopyButton as CodeBlockCopyButton20, fmtCode as fmtCode20 } from "@ngrok/mantle/code-block";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogCloseIconButton,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@ngrok/mantle/dialog";
import { InlineCode as InlineCode17 } from "@ngrok/mantle/inline-code";
import { Tooltip as Tooltip5, TooltipContent as TooltipContent5, TooltipTrigger as TooltipTrigger5 } from "@ngrok/mantle/tooltip";
import { TrashSimple } from "@phosphor-icons/react/dist/icons/TrashSimple";
import { jsx as jsx31, jsxs as jsxs24 } from "react/jsx-runtime";
var meta21 = () => [
  { title: "@ngrok/mantle \u2014 Dialog" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers21 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page21() {
  return /* @__PURE__ */ jsxs24("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs24("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx31("h1", { className: "text-5xl font-medium", children: "Dialog" }),
      /* @__PURE__ */ jsx31("p", { className: "font-body text-body text-xl", children: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." }),
      /* @__PURE__ */ jsxs24("div", { children: [
        /* @__PURE__ */ jsxs24(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ jsxs24(Dialog, { children: [
            /* @__PURE__ */ jsx31(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", appearance: "filled", children: "Open dialog" }) }),
            /* @__PURE__ */ jsxs24(DialogContent, { children: [
              /* @__PURE__ */ jsxs24(DialogHeader, { children: [
                /* @__PURE__ */ jsx31(DialogTitle, { children: "Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi" }),
                /* @__PURE__ */ jsx31(DialogCloseIconButton, {})
              ] }),
              /* @__PURE__ */ jsx31(DialogBody, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." }),
              /* @__PURE__ */ jsxs24(DialogFooter, { children: [
                /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }) }),
                /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs24(Dialog, { children: [
            /* @__PURE__ */ jsx31(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", appearance: "filled", children: "Open dialog (no close button)" }) }),
            /* @__PURE__ */ jsxs24(DialogContent, { children: [
              /* @__PURE__ */ jsx31(DialogHeader, { children: /* @__PURE__ */ jsx31(DialogTitle, { children: "Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi" }) }),
              /* @__PURE__ */ jsx31(DialogBody, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." }),
              /* @__PURE__ */ jsxs24(DialogFooter, { children: [
                /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }) }),
                /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs24(Dialog, { children: [
            /* @__PURE__ */ jsx31(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", appearance: "filled", children: "Open dialog (tall boi)" }) }),
            /* @__PURE__ */ jsxs24(DialogContent, { children: [
              /* @__PURE__ */ jsxs24(DialogHeader, { children: [
                /* @__PURE__ */ jsx31(DialogTitle, { children: "Tall boi example" }),
                /* @__PURE__ */ jsx31(DialogCloseIconButton, {})
              ] }),
              /* @__PURE__ */ jsxs24(DialogBody, { className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ jsx31("p", { children: "Consequat velit minim labore esse aliqua laboris non laborum qui labore duis reprehenderit." }),
                /* @__PURE__ */ jsx31("p", { children: "Eiusmod eu consequat ex ipsum ex adipisicing." }),
                /* @__PURE__ */ jsx31("p", { children: "Veniam eu nostrud officia pariatur aliquip dolor laboris cupidatat magna cillum nostrud aliquip ex esse." }),
                /* @__PURE__ */ jsx31("p", { children: "Tempor laborum proident officia do." }),
                /* @__PURE__ */ jsx31("p", { children: "Aliqua laborum id cillum anim." }),
                /* @__PURE__ */ jsx31("p", { children: "Exercitation ex culpa laborum anim." }),
                /* @__PURE__ */ jsx31("p", { children: "Voluptate minim culpa qui anim officia non do labore." }),
                /* @__PURE__ */ jsx31("p", { children: "Ad exercitation do nulla laborum deserunt." }),
                /* @__PURE__ */ jsx31("p", { children: "Quis mollit nostrud sint officia elit eu deserunt nostrud excepteur ea." }),
                /* @__PURE__ */ jsx31("p", { children: "Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex adipisicing." }),
                /* @__PURE__ */ jsx31("p", { children: "Exercitation officia sunt sit sint." }),
                /* @__PURE__ */ jsx31("p", { children: "Velit eu deserunt proident Lorem sit proident ut minim." }),
                /* @__PURE__ */ jsx31("p", { children: "Consequat velit minim labore esse aliqua laboris non laborum qui labore duis reprehenderit." }),
                /* @__PURE__ */ jsx31("p", { children: "Eiusmod eu consequat ex ipsum ex adipisicing." }),
                /* @__PURE__ */ jsx31("p", { children: "Veniam eu nostrud officia pariatur aliquip dolor laboris cupidatat magna cillum nostrud aliquip ex esse." }),
                /* @__PURE__ */ jsx31("p", { children: "Tempor laborum proident officia do." }),
                /* @__PURE__ */ jsx31("p", { children: "Aliqua laborum id cillum anim." }),
                /* @__PURE__ */ jsx31("p", { children: "Exercitation ex culpa laborum anim." }),
                /* @__PURE__ */ jsx31("p", { children: "Voluptate minim culpa qui anim officia non do labore." }),
                /* @__PURE__ */ jsx31("p", { children: "Ad exercitation do nulla laborum deserunt." }),
                /* @__PURE__ */ jsx31("p", { children: "Quis mollit nostrud sint officia elit eu deserunt nostrud excepteur ea." }),
                /* @__PURE__ */ jsx31("p", { children: "Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex adipisicing." }),
                /* @__PURE__ */ jsx31("p", { children: "Exercitation officia sunt sit sint." }),
                /* @__PURE__ */ jsx31("p", { children: "Velit eu deserunt proident Lorem sit proident ut minim." })
              ] }),
              /* @__PURE__ */ jsxs24(DialogFooter, { children: [
                /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }) }),
                /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx31(CodeBlock20, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs24(CodeBlockBody20, { children: [
          /* @__PURE__ */ jsx31(CodeBlockCopyButton20, {}),
          /* @__PURE__ */ jsx31(
            CodeBlockCode20,
            {
              language: "tsx",
              value: fmtCode20`
							import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@ngrok/mantle/dialog";

							<Dialog>
								<DialogTrigger asChild>
									<Button type="button">Open dialog</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Are you absolutely sure?</DialogTitle>
									</DialogHeader>
									<DialogBody>
										This action cannot be undone. This will permanently delete your account and remove your data from our
										servers.
									</DialogBody>
									<DialogFooter>
										<Button type="button">
											Delete
										</Button>
										<Button type="button">
											Cancel
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs24("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx31("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }),
      /* @__PURE__ */ jsxs24("p", { className: "font-body text-body text-xl", children: [
        "In some cases, you might wish to have a tooltip over the dialog trigger. This is helpful if the dialog trigger is an ",
        /* @__PURE__ */ jsx31(InlineCode17, { children: "IconButton" }),
        " and you wish to provide more context to what the button does. You can compose them both together to where the dialog trigger is also the tooltip trigger."
      ] }),
      /* @__PURE__ */ jsxs24("div", { children: [
        /* @__PURE__ */ jsx31(Example, { children: /* @__PURE__ */ jsxs24(Dialog, { children: [
          /* @__PURE__ */ jsxs24(Tooltip5, { children: [
            /* @__PURE__ */ jsx31(TooltipTrigger5, { asChild: !0, children: /* @__PURE__ */ jsx31(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsx31(IconButton2, { type: "button", label: "Delete", size: "sm", icon: /* @__PURE__ */ jsx31(TrashSimple, {}) }) }) }),
            /* @__PURE__ */ jsx31(TooltipContent5, { children: /* @__PURE__ */ jsx31("p", { children: "Delete" }) })
          ] }),
          /* @__PURE__ */ jsxs24(DialogContent, { children: [
            /* @__PURE__ */ jsxs24(DialogHeader, { children: [
              /* @__PURE__ */ jsx31(DialogTitle, { children: "Are you absolutely sure?" }),
              /* @__PURE__ */ jsx31(DialogCloseIconButton, {})
            ] }),
            /* @__PURE__ */ jsx31(DialogBody, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." }),
            /* @__PURE__ */ jsxs24(DialogFooter, { children: [
              /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }) }),
              /* @__PURE__ */ jsx31(DialogClose, { asChild: !0, children: /* @__PURE__ */ jsx31(Button7, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx31(CodeBlock20, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs24(CodeBlockBody20, { children: [
          /* @__PURE__ */ jsx31(CodeBlockCopyButton20, {}),
          /* @__PURE__ */ jsx31(
            CodeBlockCode20,
            {
              language: "tsx",
              value: fmtCode20`
									<Dialog>
										<Tooltip>
											<TooltipTrigger asChild>
												<DialogTrigger asChild>
													<IconButton type="button" label="Delete" size="sm" icon={<TrashSimple />} />
												</DialogTrigger>
											</TooltipTrigger>
											<TooltipContent>
												<p>Delete</p>
											</TooltipContent>
										</Tooltip>

										<DialogContent>
											<DialogHeader>
												<DialogTitle>Are you absolutely sure?</DialogTitle>
												<DialogCloseIconButton />
											</DialogHeader>
											<DialogBody>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</DialogBody>
											<DialogFooter>
												<DialogClose asChild>
													<Button type="button" priority="danger" appearance="filled">
														Delete
													</Button>
												</DialogClose>
												<DialogClose asChild>
													<Button type="button" priority="neutral" appearance="outlined">
														Cancel
													</Button>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								`
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}

// app/routes/components.select.tsx
var components_select_exports = {};
__export(components_select_exports, {
  default: () => Page22,
  headers: () => headers22,
  meta: () => meta22
});
import { Anchor as Anchor12 } from "@ngrok/mantle/anchor";
import { CodeBlock as CodeBlock21, CodeBlockBody as CodeBlockBody21, CodeBlockCode as CodeBlockCode21, CodeBlockCopyButton as CodeBlockCopyButton21, fmtCode as fmtCode21 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode18 } from "@ngrok/mantle/inline-code";
import { Label as Label4 } from "@ngrok/mantle/label";
import {
  Select as Select2,
  SelectContent as SelectContent2,
  SelectGroup as SelectGroup2,
  SelectItem as SelectItem2,
  SelectLabel as SelectLabel2,
  SelectSeparator,
  SelectTrigger as SelectTrigger2,
  SelectValue
} from "@ngrok/mantle/select";
import { useState as useState8 } from "react";
import { Fragment as Fragment2, jsx as jsx32, jsxs as jsxs25 } from "react/jsx-runtime";
var meta22 = () => [
  { title: "@ngrok/mantle \u2014 Select" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers22 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page22() {
  let [example1Value, setExample1Value] = useState8("");
  return /* @__PURE__ */ jsxs25("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs25("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx32("h1", { className: "text-5xl font-medium", children: "Select" }),
      /* @__PURE__ */ jsx32("p", { className: "font-body text-body text-xl", children: "Displays a list of options for the user to pick from\u2014triggered by a button." }),
      /* @__PURE__ */ jsxs25("div", { children: [
        /* @__PURE__ */ jsxs25(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ jsxs25(Label4, { className: "w-full max-w-64", htmlFor: "fruits", children: [
            /* @__PURE__ */ jsx32("p", { children: "Fruits" }),
            /* @__PURE__ */ jsxs25(Select2, { id: "fruits", name: "number", children: [
              /* @__PURE__ */ jsx32(SelectTrigger2, { children: /* @__PURE__ */ jsx32(SelectValue, { placeholder: "Select a fruit" }) }),
              /* @__PURE__ */ jsxs25(SelectContent2, { width: "trigger", children: [
                /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                  /* @__PURE__ */ jsx32(SelectLabel2, { children: "Fruits" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "apple", children: "Apple" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "banana", children: "Banana" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "blueberry", children: "Blueberry" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "grapes", children: "Grapes" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "pineapple", children: "Pineapple" })
                ] }),
                /* @__PURE__ */ jsx32(SelectSeparator, {}),
                /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                  /* @__PURE__ */ jsx32(SelectLabel2, { children: "Vegetables" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "carrot", children: "Carrot" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "cucumber", children: "Cucumber" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "lettuce", children: "Lettuce" }),
                  /* @__PURE__ */ jsx32(SelectItem2, { value: "tomato", children: "Tomato" }),
                  /* @__PURE__ */ jsxs25(SelectItem2, { value: "zucchini", children: [
                    /* @__PURE__ */ jsx32("p", { children: "Zucchini" }),
                    /* @__PURE__ */ jsx32("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs25(Select2, { validation: "error", children: [
            /* @__PURE__ */ jsx32(SelectTrigger2, { className: "max-w-64", children: /* @__PURE__ */ jsx32(SelectValue, { placeholder: "Select a fruit" }) }),
            /* @__PURE__ */ jsxs25(SelectContent2, { children: [
              /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                /* @__PURE__ */ jsx32(SelectLabel2, { children: "Fruits" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "apple", children: "Apple" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "banana", children: "Banana" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "blueberry", children: "Blueberry" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "grapes", children: "Grapes" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "pineapple", children: "Pineapple" })
              ] }),
              /* @__PURE__ */ jsx32(SelectSeparator, {}),
              /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                /* @__PURE__ */ jsx32(SelectLabel2, { children: "Vegetables" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "carrot", children: "Carrot" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "cucumber", children: "Cucumber" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "lettuce", children: "Lettuce" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "tomato", children: "Tomato" }),
                /* @__PURE__ */ jsxs25(SelectItem2, { value: "zucchini", children: [
                  /* @__PURE__ */ jsx32("p", { children: "Zucchini" }),
                  /* @__PURE__ */ jsx32("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs25(Select2, { validation: "success", children: [
            /* @__PURE__ */ jsx32(SelectTrigger2, { className: "max-w-64", children: /* @__PURE__ */ jsx32(SelectValue, { placeholder: "Select a fruit" }) }),
            /* @__PURE__ */ jsxs25(SelectContent2, { children: [
              /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                /* @__PURE__ */ jsx32(SelectLabel2, { children: "Fruits" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "apple", children: "Apple" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "banana", children: "Banana" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "blueberry", children: "Blueberry" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "grapes", children: "Grapes" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "pineapple", children: "Pineapple" })
              ] }),
              /* @__PURE__ */ jsx32(SelectSeparator, {}),
              /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                /* @__PURE__ */ jsx32(SelectLabel2, { children: "Vegetables" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "carrot", children: "Carrot" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "cucumber", children: "Cucumber" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "lettuce", children: "Lettuce" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "tomato", children: "Tomato" }),
                /* @__PURE__ */ jsxs25(SelectItem2, { value: "zucchini", children: [
                  /* @__PURE__ */ jsx32("p", { children: "Zucchini" }),
                  /* @__PURE__ */ jsx32("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs25(Select2, { validation: "warning", children: [
            /* @__PURE__ */ jsx32(SelectTrigger2, { className: "max-w-64", children: /* @__PURE__ */ jsx32(SelectValue, { placeholder: "Select a fruit" }) }),
            /* @__PURE__ */ jsxs25(SelectContent2, { children: [
              /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                /* @__PURE__ */ jsx32(SelectLabel2, { children: "Fruits" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "apple", children: "Apple" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "banana", children: "Banana" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "blueberry", children: "Blueberry" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "grapes", children: "Grapes" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "pineapple", children: "Pineapple" })
              ] }),
              /* @__PURE__ */ jsx32(SelectSeparator, {}),
              /* @__PURE__ */ jsxs25(SelectGroup2, { children: [
                /* @__PURE__ */ jsx32(SelectLabel2, { children: "Vegetables" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "carrot", children: "Carrot" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "cucumber", children: "Cucumber" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "lettuce", children: "Lettuce" }),
                /* @__PURE__ */ jsx32(SelectItem2, { value: "tomato", children: "Tomato" }),
                /* @__PURE__ */ jsxs25(SelectItem2, { value: "zucchini", children: [
                  /* @__PURE__ */ jsx32("p", { children: "Zucchini" }),
                  /* @__PURE__ */ jsx32("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx32(CodeBlock21, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs25(CodeBlockBody21, { children: [
          /* @__PURE__ */ jsx32(CodeBlockCopyButton21, {}),
          /* @__PURE__ */ jsx32(
            CodeBlockCode21,
            {
              language: "tsx",
              value: fmtCode21`
									import { Label } from "@ngrok/mantle/label";
									import {
										Select,
										SelectContent,
										SelectGroup,
										SelectItem,
										SelectLabel,
										SelectSeparator,
										SelectTrigger,
										SelectValue,
									} from "@ngrok/mantle/select";

									<Label className="w-full max-w-64" htmlFor="fruits">
										<p>Fruits</p>
										<Select id="fruits" name="number">
											<SelectTrigger>
												<SelectValue placeholder="Select a fruit" />
											</SelectTrigger>
											<SelectContent width="trigger">
												<SelectGroup>
													<SelectLabel>Fruits</SelectLabel>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
												<SelectSeparator />
												<SelectGroup>
													<SelectLabel>Vegetables</SelectLabel>
													<SelectItem value="carrot">Carrot</SelectItem>
													<SelectItem value="cucumber">Cucumber</SelectItem>
													<SelectItem value="lettuce">Lettuce</SelectItem>
													<SelectItem value="tomato">Tomato</SelectItem>
													<SelectItem value="zucchini">
														<p>Zucchini</p>
														<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</Label>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs25("section", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx32("header", { className: "space-y-4", children: /* @__PURE__ */ jsx32("h2", { id: "examples", className: "text-3xl font-medium", children: "Examples" }) }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs25("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "Custom selected value" }),
          /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
            "By default the selected item's text will be rendered when selected. Sometimes you may need to render something different. You can control the select and pass ",
            /* @__PURE__ */ jsx32(InlineCode18, { children: "children" }),
            " instead."
          ] })
        ] }),
        /* @__PURE__ */ jsxs25("div", { children: [
          /* @__PURE__ */ jsx32(Example, { children: /* @__PURE__ */ jsxs25(Select2, { value: example1Value, onChange: setExample1Value, children: [
            /* @__PURE__ */ jsx32(SelectTrigger2, { className: "w-[180px]", children: /* @__PURE__ */ jsx32(SelectValue, { placeholder: "Select a fruit", children: example1Value === "apple" ? /* @__PURE__ */ jsx32(Fragment2, { children: "\u{1F34E} Apple" }) : /* @__PURE__ */ jsx32(Fragment2, { children: "\u{1F351} Peach" }) }) }),
            /* @__PURE__ */ jsxs25(SelectContent2, { width: "trigger", children: [
              /* @__PURE__ */ jsx32(SelectItem2, { value: "apple", children: "Apple" }),
              /* @__PURE__ */ jsx32(SelectItem2, { value: "peach", children: "Peach" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx32(CodeBlock21, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs25(CodeBlockBody21, { children: [
            /* @__PURE__ */ jsx32(CodeBlockCopyButton21, {}),
            /* @__PURE__ */ jsx32(
              CodeBlockCode21,
              {
                language: "tsx",
                value: fmtCode21`
							import {
								Select,
								SelectContent,
								SelectItem,
								SelectTrigger,
								SelectValue,
							} from "@ngrok/mantle/select";

							<Select value={value} onChange={setValue}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select a fruit">
										{value === "apple" ? <>🍎 Apple!</> : <>🍑 Peach!</>}
									</SelectValue>
								</SelectTrigger>
								<SelectContent width="trigger">
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="peach">Peach</SelectItem>
								</SelectContent>
							</Select>
						`
              }
            )
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs25("section", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs25("header", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx32("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body text-xl", children: [
          "The ",
          /* @__PURE__ */ jsx32(InlineCode18, { children: "Select" }),
          " components are built on top of",
          " ",
          /* @__PURE__ */ jsx32(
            Anchor12,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/select",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Radix Select"
            }
          ),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs25("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "Select" }),
          /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ jsx32(
              Anchor12,
              {
                href: "https://www.radix-ui.com/primitives/docs/components/select#root",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Select.Root"
              }
            ),
            ", plus:"
          ] })
        ] }),
        /* @__PURE__ */ jsxs25(PropsTable, { children: [
          /* @__PURE__ */ jsxs25(PropRow, { children: [
            /* @__PURE__ */ jsx32(PropNameCell, { name: "onChange", optional: !0 }),
            /* @__PURE__ */ jsx32(PropTypeCell, { children: /* @__PURE__ */ jsx32(FuncPropType, { value: "(value: string) => void" }) }),
            /* @__PURE__ */ jsx32(PropDefaultValueCell, {}),
            /* @__PURE__ */ jsx32(PropDescriptionCell, { children: /* @__PURE__ */ jsxs25("p", { children: [
              "Event handler called when the value changes. Use it instead of ",
              /* @__PURE__ */ jsx32(InlineCode18, { children: "onValueChange" }),
              "."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs25(PropRow, { children: [
            /* @__PURE__ */ jsx32(PropNameCell, { name: "validation", optional: !0 }),
            /* @__PURE__ */ jsx32(PropTypeCell, { children: /* @__PURE__ */ jsxs25("ul", { children: [
              /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "error" }) }),
              /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "success" }) }),
              /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "warning" }) }),
              /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(BooleanPropType, { value: !1 }) }),
              /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(FuncPropType, { value: '() => "error" | "success" | "warning" | false' }) })
            ] }) }),
            /* @__PURE__ */ jsx32(PropDefaultValueCell, {}),
            /* @__PURE__ */ jsxs25(PropDescriptionCell, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs25("p", { children: [
                "Use the ",
                /* @__PURE__ */ jsx32(InlineCode18, { children: "validation" }),
                " prop to show if the select trigger has a specific validation status. This will change the border and outline of the select trigger."
              ] }),
              /* @__PURE__ */ jsxs25("p", { children: [
                "The ",
                /* @__PURE__ */ jsx32(InlineCode18, { children: "false" }),
                " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
                /* @__PURE__ */ jsx32(InlineCode18, { children: "undefined" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs25("p", { children: [
                "Setting ",
                /* @__PURE__ */ jsx32(InlineCode18, { children: "validation" }),
                " to ",
                /* @__PURE__ */ jsx32(InlineCode18, { children: "error" }),
                " also sets",
                " ",
                /* @__PURE__ */ jsx32(InlineCode18, { children: "aria-invalid" }),
                "."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs25("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectTrigger" }),
          /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ jsx32(
              Anchor12,
              {
                href: "https://www.radix-ui.com/primitives/docs/components/select#trigger",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Select.Trigger"
              }
            ),
            ", plus:"
          ] })
        ] }),
        /* @__PURE__ */ jsx32(PropsTable, { children: /* @__PURE__ */ jsxs25(PropRow, { children: [
          /* @__PURE__ */ jsx32(PropNameCell, { name: "validation", optional: !0 }),
          /* @__PURE__ */ jsx32(PropTypeCell, { children: /* @__PURE__ */ jsxs25("ul", { children: [
            /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "error" }) }),
            /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "success" }) }),
            /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "warning" }) }),
            /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(BooleanPropType, { value: !1 }) }),
            /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(FuncPropType, { value: '() => "error" | "success" | "warning" | false' }) })
          ] }) }),
          /* @__PURE__ */ jsx32(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs25(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs25("p", { children: [
              "Use the ",
              /* @__PURE__ */ jsx32(InlineCode18, { children: "validation" }),
              " prop to show if the select trigger has a specific validation status. This will change the border and outline of the select trigger."
            ] }),
            /* @__PURE__ */ jsxs25("p", { children: [
              "The ",
              /* @__PURE__ */ jsx32(InlineCode18, { children: "false" }),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ jsx32(InlineCode18, { children: "undefined" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs25("p", { children: [
              "Setting ",
              /* @__PURE__ */ jsx32(InlineCode18, { children: "validation" }),
              " to ",
              /* @__PURE__ */ jsx32(InlineCode18, { children: "error" }),
              " also sets",
              " ",
              /* @__PURE__ */ jsx32(InlineCode18, { children: "aria-invalid" }),
              "."
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectValue" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ jsx32(
            Anchor12,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/select#value",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Select.Value"
            }
          ),
          " ",
          "props."
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs25("header", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectContent" }),
          /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ jsx32(
              Anchor12,
              {
                href: "https://www.radix-ui.com/primitives/docs/components/select#content",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Select.Content"
              }
            ),
            ", plus:"
          ] })
        ] }),
        /* @__PURE__ */ jsx32(PropsTable, { children: /* @__PURE__ */ jsxs25(PropRow, { children: [
          /* @__PURE__ */ jsx32(PropNameCell, { name: "width", optional: !0 }),
          /* @__PURE__ */ jsx32(PropTypeCell, { children: /* @__PURE__ */ jsxs25("ul", { children: [
            /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "trigger" }) }),
            /* @__PURE__ */ jsx32("li", { children: /* @__PURE__ */ jsx32(StringPropType, { value: "content" }) })
          ] }) }),
          /* @__PURE__ */ jsx32(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs25(PropDescriptionCell, { children: [
            /* @__PURE__ */ jsxs25("p", { children: [
              /* @__PURE__ */ jsx32(InlineCode18, { children: "trigger" }),
              " will ensure the content is the same width as the trigger button."
            ] }),
            /* @__PURE__ */ jsxs25("p", { children: [
              /* @__PURE__ */ jsx32(InlineCode18, { children: "content" }),
              " will make it the size of the content itself."
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectGroup" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ jsx32(
            Anchor12,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/select#group",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Select.Group"
            }
          ),
          " ",
          "props."
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectSeparator" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
          "Used to visually separate items in the select. Composed from",
          " ",
          /* @__PURE__ */ jsx32(Link3, { to: "/components/separator", children: "Mantle Separator" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectItem" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ jsx32(
            Anchor12,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/select#item",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Select.Item"
            }
          ),
          " ",
          "props."
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectLabel" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ jsx32(
            Anchor12,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/select#label",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Select.Label"
            }
          ),
          " ",
          "props."
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectScrollUpButton" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ jsx32(
            Anchor12,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/select#scrollupbutton",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Select.ScrollUpButton"
            }
          ),
          " ",
          "props."
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx32("h3", { className: "text-xl font-medium", children: "SelectScrollDownButton" }),
        /* @__PURE__ */ jsxs25("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ jsx32(
            Anchor12,
            {
              href: "https://www.radix-ui.com/primitives/docs/components/select#scrolldownbutton",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Select.ScrollDownButton"
            }
          ),
          " ",
          "props."
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.switch.tsx
var components_switch_exports = {};
__export(components_switch_exports, {
  default: () => Page23,
  headers: () => headers23,
  meta: () => meta23
});
import { CodeBlock as CodeBlock22, CodeBlockBody as CodeBlockBody22, CodeBlockCode as CodeBlockCode22, CodeBlockCopyButton as CodeBlockCopyButton22, fmtCode as fmtCode22 } from "@ngrok/mantle/code-block";
import { Label as Label5 } from "@ngrok/mantle/label";
import { Switch } from "@ngrok/mantle/switch";
import { jsx as jsx33, jsxs as jsxs26 } from "react/jsx-runtime";
var meta23 = () => [
  { title: "@ngrok/mantle \u2014 Switch" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers23 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page23() {
  return /* @__PURE__ */ jsx33("div", { className: "space-y-16", children: /* @__PURE__ */ jsxs26("section", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx33("h1", { className: "text-5xl font-medium", children: "Switch" }),
    /* @__PURE__ */ jsx33("p", { className: "font-body text-body text-xl", children: "A control that allows the user to toggle between checked and not checked." }),
    /* @__PURE__ */ jsxs26("div", { children: [
      /* @__PURE__ */ jsxs26(Example, { className: "mt-4 grid gap-6", children: [
        /* @__PURE__ */ jsxs26(
          Label5,
          {
            htmlFor: "airplane-mode",
            className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default",
            children: [
              /* @__PURE__ */ jsx33(Switch, { id: "airplane-mode", readOnly: !0 }),
              /* @__PURE__ */ jsx33("p", { children: "Airplane Mode" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs26(
          Label5,
          {
            htmlFor: "unchecked",
            className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default",
            children: [
              /* @__PURE__ */ jsx33(Switch, { checked: !1, id: "unchecked", readOnly: !0 }),
              /* @__PURE__ */ jsx33("p", { children: "Unchecked (readonly)" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs26(Label5, { htmlFor: "checked", className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default", children: [
          /* @__PURE__ */ jsx33(Switch, { checked: !0, id: "checked", readOnly: !0 }),
          /* @__PURE__ */ jsx33("p", { children: "Checked (readonly)" })
        ] }),
        /* @__PURE__ */ jsxs26(
          Label5,
          {
            htmlFor: "airplane-mode-disabled-unchecked",
            className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default",
            children: [
              /* @__PURE__ */ jsx33(Switch, { disabled: !0, id: "airplane-mode-disabled-unchecked", readOnly: !0 }),
              /* @__PURE__ */ jsx33("p", { children: "Airplane Mode Disabled Unchecked (readonly)" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs26(
          Label5,
          {
            htmlFor: "airplane-mode-disabled-checked",
            className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default",
            children: [
              /* @__PURE__ */ jsx33(Switch, { checked: !0, disabled: !0, id: "airplane-mode-disabled-checked", readOnly: !0 }),
              /* @__PURE__ */ jsx33("p", { children: "Airplane Mode Disabled Checked (readonly)" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx33(CodeBlock22, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs26(CodeBlockBody22, { children: [
        /* @__PURE__ */ jsx33(CodeBlockCopyButton22, {}),
        /* @__PURE__ */ jsx33(
          CodeBlockCode22,
          {
            language: "tsx",
            value: fmtCode22`
									import { Label } from "@ngrok/mantle/label";
									import { Switch } from "@ngrok/mantle/switch";

									<Label
										htmlFor="airplane-mode"
										className="flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default"
									>
										<Switch id="airplane-mode" />
										<p>Airplane Mode</p>
									</Label>
								`
          }
        )
      ] }) })
    ] })
  ] }) });
}

// app/routes/components.alert.tsx
var components_alert_exports = {};
__export(components_alert_exports, {
  default: () => Page24,
  headers: () => headers24,
  meta: () => meta24
});
import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle/alert";
import { Card as Card2, CardBody as CardBody2 } from "@ngrok/mantle/card";
import { CodeBlock as CodeBlock23, CodeBlockBody as CodeBlockBody23, CodeBlockCode as CodeBlockCode23, CodeBlockCopyButton as CodeBlockCopyButton23, fmtCode as fmtCode23 } from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode19 } from "@ngrok/mantle/inline-code";
import { CheckCircle } from "@phosphor-icons/react/CheckCircle";
import { Info } from "@phosphor-icons/react/Info";
import { Rocket } from "@phosphor-icons/react/Rocket";
import { Warning } from "@phosphor-icons/react/Warning";
import { WarningDiamond } from "@phosphor-icons/react/WarningDiamond";
import { jsx as jsx34, jsxs as jsxs27 } from "react/jsx-runtime";
var meta24 = () => [
  { title: "@ngrok/mantle \u2014 Alert" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers24 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page24() {
  return /* @__PURE__ */ jsxs27("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs27("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx34("h1", { className: "text-5xl font-medium", children: "Alert" }),
      /* @__PURE__ */ jsx34("p", { className: "font-body text-body text-xl", children: "Displays a callout for user attention." }),
      /* @__PURE__ */ jsxs27("div", { children: [
        /* @__PURE__ */ jsxs27(Example, { className: "flex-col gap-2", children: [
          /* @__PURE__ */ jsxs27(Alert, { children: [
            /* @__PURE__ */ jsx34(Rocket, { className: "size-5" }),
            /* @__PURE__ */ jsxs27(AlertContent, { children: [
              /* @__PURE__ */ jsx34(AlertTitle, { children: "Default" }),
              /* @__PURE__ */ jsx34(AlertDescription, { children: "This is a default Alert." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs27(Alert, { priority: "danger", children: [
            /* @__PURE__ */ jsx34(Warning, { className: "size-5" }),
            /* @__PURE__ */ jsxs27(AlertContent, { children: [
              /* @__PURE__ */ jsx34(AlertTitle, { children: "Danger" }),
              /* @__PURE__ */ jsx34(AlertDescription, { children: "This is a danger Alert." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs27(Alert, { priority: "info", children: [
            /* @__PURE__ */ jsx34(Info, { className: "size-5" }),
            /* @__PURE__ */ jsxs27(AlertContent, { children: [
              /* @__PURE__ */ jsx34(AlertTitle, { children: "Info" }),
              /* @__PURE__ */ jsx34(AlertDescription, { children: "This is an info Alert." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs27(Alert, { priority: "success", children: [
            /* @__PURE__ */ jsx34(CheckCircle, { className: "size-5" }),
            /* @__PURE__ */ jsxs27(AlertContent, { children: [
              /* @__PURE__ */ jsx34(AlertTitle, { children: "Success" }),
              /* @__PURE__ */ jsx34(AlertDescription, { children: "This is a success Alert." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs27(Alert, { priority: "warning", children: [
            /* @__PURE__ */ jsx34(WarningDiamond, { className: "size-5" }),
            /* @__PURE__ */ jsxs27(AlertContent, { children: [
              /* @__PURE__ */ jsx34(AlertTitle, { children: "Warning" }),
              /* @__PURE__ */ jsx34(AlertDescription, { children: "This is a warning Alert." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx34(CodeBlock23, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs27(CodeBlockBody23, { children: [
          /* @__PURE__ */ jsx34(CodeBlockCopyButton23, {}),
          /* @__PURE__ */ jsx34(
            CodeBlockCode23,
            {
              language: "tsx",
              value: fmtCode23`
									import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle/alert";

									<Alert>
										<Rocket className="size-5" />
										<AlertContent>
											<AlertTitle>Default</AlertTitle>
											<AlertDescription>This is a default Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger</AlertTitle>
											<AlertDescription>This is a danger Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="info">
										<Info className="size-5" />
										<AlertContent>
											<AlertTitle>Info</AlertTitle>
											<AlertDescription>This is an info Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="success">
										<CheckCircle className="size-5" />
										<AlertContent>
											<AlertTitle>Success</AlertTitle>
											<AlertDescription>This is a success Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="warning">
										<WarningDiamond className="size-5" />
										<AlertContent>
											<AlertTitle>Warning</AlertTitle>
											<AlertDescription>This is a warning Alert.</AlertDescription>
										</AlertContent>
									</Alert>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs27("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx34("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }),
      /* @__PURE__ */ jsxs27("p", { className: "font-body text-body text-xl", children: [
        "You can mix and match what you put inside the ",
        /* @__PURE__ */ jsx34(InlineCode19, { children: "Alert" }),
        " component to create different types of Alert layouts."
      ] }),
      /* @__PURE__ */ jsxs27("div", { children: [
        /* @__PURE__ */ jsxs27(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ jsxs27("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ jsxs27("p", { children: [
              "Danger ",
              /* @__PURE__ */ jsx34(InlineCode19, { children: "Alert" }),
              " with icon"
            ] }),
            /* @__PURE__ */ jsxs27(Alert, { priority: "danger", children: [
              /* @__PURE__ */ jsx34(Warning, { className: "size-5" }),
              /* @__PURE__ */ jsxs27(AlertContent, { children: [
                /* @__PURE__ */ jsx34(AlertTitle, { children: "Danger Will Robinson" }),
                /* @__PURE__ */ jsx34(AlertDescription, { children: "Cupidatat ullamco commodo laborum consectetur ut mollit et nostrud amet elit ut Lorem culpa." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs27("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ jsxs27("p", { children: [
              "Danger ",
              /* @__PURE__ */ jsx34(InlineCode19, { children: "Alert" }),
              " without icon"
            ] }),
            /* @__PURE__ */ jsx34(Alert, { priority: "danger", children: /* @__PURE__ */ jsxs27(AlertContent, { children: [
              /* @__PURE__ */ jsx34(AlertTitle, { children: "Danger Will Robinson" }),
              /* @__PURE__ */ jsx34(AlertDescription, { children: "Cupidatat ullamco commodo laborum consectetur ut mollit et nostrud amet elit ut Lorem culpa." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs27("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ jsxs27("p", { children: [
              "Danger ",
              /* @__PURE__ */ jsx34(InlineCode19, { children: "Alert" }),
              " with icon and no description"
            ] }),
            /* @__PURE__ */ jsxs27(Alert, { priority: "danger", children: [
              /* @__PURE__ */ jsx34(Warning, { className: "size-5" }),
              /* @__PURE__ */ jsx34(AlertContent, { children: /* @__PURE__ */ jsx34(AlertTitle, { children: "Danger Will Robinson" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs27("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ jsxs27("p", { children: [
              "Danger ",
              /* @__PURE__ */ jsx34(InlineCode19, { children: "Alert" }),
              " without icon or description"
            ] }),
            /* @__PURE__ */ jsx34(Alert, { priority: "danger", children: /* @__PURE__ */ jsx34(AlertContent, { children: /* @__PURE__ */ jsx34(AlertTitle, { children: "Danger Will Robinson" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx34(CodeBlock23, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs27(CodeBlockBody23, { children: [
          /* @__PURE__ */ jsx34(CodeBlockCopyButton23, {}),
          /* @__PURE__ */ jsx34(
            CodeBlockCode23,
            {
              language: "tsx",
              value: fmtCode23`
									import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle/alert";
									import { Warning } from "@phosphor-icons/react";

									// Danger Alert with icon
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
											<AlertDescription>This is a danger alert.</AlertDescription>
										</AlertContent>
									</Alert>

									// Danger Alert without icon
									<Alert priority="danger">
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
											<AlertDescription>This is a danger alert.</AlertDescription>
										</AlertContent>
									</Alert>

									// Danger Alert with icon and no description
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
										</AlertContent>
									</Alert>

									// Danger Alert without icon or description
									<Alert priority="danger">
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
										</AlertContent>
									</Alert>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs27("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx34("h2", { id: "example-banner", className: "text-3xl font-medium", children: "Banners" }),
      /* @__PURE__ */ jsxs27("p", { className: "font-body text-body text-xl", children: [
        "For banner-like alerts, set ",
        /* @__PURE__ */ jsx34(InlineCode19, { children: "rounded-none" }),
        " on the ",
        /* @__PURE__ */ jsx34(InlineCode19, { children: "Alert" }),
        " ",
        "component."
      ] }),
      /* @__PURE__ */ jsxs27("div", { children: [
        /* @__PURE__ */ jsx34(Example, { children: /* @__PURE__ */ jsxs27("div", { className: "border-card min-h-56 space-y-4 border", children: [
          /* @__PURE__ */ jsxs27(Alert, { priority: "info", className: "rounded-none", children: [
            /* @__PURE__ */ jsx34(Rocket, { className: "size-5" }),
            /* @__PURE__ */ jsx34(AlertContent, { children: /* @__PURE__ */ jsx34(AlertTitle, { children: "This is an info Alert as a page banner" }) })
          ] }),
          /* @__PURE__ */ jsx34(Card2, { className: "mx-auto max-w-screen-sm", children: /* @__PURE__ */ jsx34(CardBody2, { children: /* @__PURE__ */ jsx34("p", { className: "my-4", children: "Laboris commodo Lorem anim consequat ut dolore proident." }) }) })
        ] }) }),
        /* @__PURE__ */ jsx34(CodeBlock23, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs27(CodeBlockBody23, { children: [
          /* @__PURE__ */ jsx34(CodeBlockCopyButton23, {}),
          /* @__PURE__ */ jsx34(
            CodeBlockCode23,
            {
              language: "tsx",
              value: fmtCode23`
									import { Alert, AlertContent, AlertTitle } from "@ngrok/mantle/alert";
									import { Rocket } from "@phosphor-icons/react";

									<Alert priority="info" className="rounded-none">
										<Rocket className="size-5" />
										<AlertContent>
											<AlertTitle>This is an info Alert as a page banner</AlertTitle>
										</AlertContent>
									</Alert>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs27("section", { className: "mt-16 space-y-4", children: [
      /* @__PURE__ */ jsx34("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsx34(PropsTable, { children: /* @__PURE__ */ jsxs27(PropRow, { children: [
        /* @__PURE__ */ jsx34(PropNameCell, { name: "priority", optional: !0 }),
        /* @__PURE__ */ jsx34(PropTypeCell, { children: /* @__PURE__ */ jsxs27("ul", { children: [
          /* @__PURE__ */ jsx34("li", { children: /* @__PURE__ */ jsx34(StringPropType, { value: "danger" }) }),
          /* @__PURE__ */ jsx34("li", { children: /* @__PURE__ */ jsx34(StringPropType, { value: "default" }) }),
          /* @__PURE__ */ jsx34("li", { children: /* @__PURE__ */ jsx34(StringPropType, { value: "info" }) }),
          /* @__PURE__ */ jsx34("li", { children: /* @__PURE__ */ jsx34(StringPropType, { value: "success" }) }),
          /* @__PURE__ */ jsx34("li", { children: /* @__PURE__ */ jsx34(StringPropType, { value: "warning" }) })
        ] }) }),
        /* @__PURE__ */ jsx34(PropDefaultValueCell, { children: /* @__PURE__ */ jsx34(StringPropType, { value: "outlined" }) }),
        /* @__PURE__ */ jsx34(PropDescriptionCell, { children: /* @__PURE__ */ jsxs27("p", { children: [
          "Indicates the importance or impact level of the ",
          /* @__PURE__ */ jsx34(InlineCode19, { children: "Alert" }),
          ", affecting its color and styling to communicate its purpose to the user."
        ] }) })
      ] }) })
    ] })
  ] });
}

// app/routes/components.badge.tsx
var components_badge_exports = {};
__export(components_badge_exports, {
  default: () => Page25,
  headers: () => headers25,
  meta: () => meta25
});
import { Anchor as Anchor13 } from "@ngrok/mantle/anchor";
import { Badge as Badge2 } from "@ngrok/mantle/badge";
import { CodeBlock as CodeBlock24, CodeBlockBody as CodeBlockBody24, CodeBlockCode as CodeBlockCode24, CodeBlockCopyButton as CodeBlockCopyButton24, fmtCode as fmtCode24 } from "@ngrok/mantle/code-block";
import { colors } from "@ngrok/mantle/color";
import { InlineCode as InlineCode20 } from "@ngrok/mantle/inline-code";
import { GlobeHemisphereWest } from "@phosphor-icons/react/GlobeHemisphereWest";
import { jsx as jsx35, jsxs as jsxs28 } from "react/jsx-runtime";
var meta25 = () => [
  { title: "@ngrok/mantle \u2014 Badge" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers25 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page25() {
  return /* @__PURE__ */ jsxs28("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs28("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx35("h1", { className: "text-5xl font-medium", children: "Badge" }),
      /* @__PURE__ */ jsx35("p", { className: "font-body text-body text-xl", children: "A Badge is a non-interactive component used to highlight important information or to visually indicate the status of an item." }),
      /* @__PURE__ */ jsxs28("div", { children: [
        /* @__PURE__ */ jsx35(Example, { children: /* @__PURE__ */ jsx35("ul", { role: "list", className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5", children: colors.map((color) => /* @__PURE__ */ jsxs28("li", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxs28(Badge2, { appearance: "muted", color, children: [
            "Muted ",
            color
          ] }),
          /* @__PURE__ */ jsxs28(Badge2, { appearance: "muted", color, icon: /* @__PURE__ */ jsx35(GlobeHemisphereWest, {}), children: [
            "Muted ",
            color
          ] })
        ] }, color)) }) }),
        /* @__PURE__ */ jsx35(CodeBlock24, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs28(CodeBlockBody24, { children: [
          /* @__PURE__ */ jsx35(CodeBlockCopyButton24, {}),
          /* @__PURE__ */ jsx35(
            CodeBlockCode24,
            {
              language: "tsx",
              value: fmtCode24`
									import { Badge } from "@ngrok/mantle/badge";
									import { GlobeHemisphereWest } from "@phosphor-icons/react/GlobeHemisphereWest";

									<Badge appearance="muted" color="neutral">
										Muted neutral
									</Badge>
									<Badge appearance="muted" color="neutral" icon={<GlobeHemisphereWest />}>
										Muted neutral
									</Badge>
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs28("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx35("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs28("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx35(InlineCode20, { children: "Badge" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx35(Anchor13, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span", children: "standard HTML span attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs28(PropsTable, { children: [
        /* @__PURE__ */ jsxs28(PropRow, { children: [
          /* @__PURE__ */ jsx35(PropNameCell, { name: "appearance" }),
          /* @__PURE__ */ jsx35(PropTypeCell, { children: /* @__PURE__ */ jsx35("ul", { children: /* @__PURE__ */ jsx35("li", { children: /* @__PURE__ */ jsx35(StringPropType, { value: "muted" }) }) }) }),
          /* @__PURE__ */ jsx35(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx35(PropDescriptionCell, { children: /* @__PURE__ */ jsxs28("p", { children: [
            "Defines the visual style of the ",
            /* @__PURE__ */ jsx35(InlineCode20, { children: "Badge" }),
            ". Currently only supports the",
            " ",
            /* @__PURE__ */ jsx35(InlineCode20, { children: "muted" }),
            " variant."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs28(PropRow, { children: [
          /* @__PURE__ */ jsx35(PropNameCell, { name: "color", optional: !0 }),
          /* @__PURE__ */ jsx35(PropTypeCell, { children: /* @__PURE__ */ jsx35("ul", { children: colors.map((color) => /* @__PURE__ */ jsx35("li", { children: /* @__PURE__ */ jsx35(StringPropType, { value: color }) }, color)) }) }),
          /* @__PURE__ */ jsx35(PropDefaultValueCell, { children: /* @__PURE__ */ jsx35(StringPropType, { value: "neutral" }) }),
          /* @__PURE__ */ jsx35(PropDescriptionCell, { children: /* @__PURE__ */ jsxs28("p", { children: [
            "The color variant of the ",
            /* @__PURE__ */ jsx35(InlineCode20, { children: "Badge" }),
            ". Supports all",
            " ",
            /* @__PURE__ */ jsx35(Link3, { to: "/base/colors", children: "named colors" }),
            ", both functional and from the color palette."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs28(PropRow, { children: [
          /* @__PURE__ */ jsx35(PropNameCell, { name: "icon", optional: !0 }),
          /* @__PURE__ */ jsx35(PropTypeCell, { children: /* @__PURE__ */ jsx35(ReactNodePropType, {}) }),
          /* @__PURE__ */ jsx35(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx35(PropDescriptionCell, { children: "An icon to render inside the badge. Will be automatically sized for you." })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.input.tsx
var components_input_exports = {};
__export(components_input_exports, {
  default: () => Page26,
  headers: () => headers26,
  meta: () => meta26
});
import { Anchor as Anchor14 } from "@ngrok/mantle/anchor";
import {
  CodeBlock as CodeBlock25,
  CodeBlockBody as CodeBlockBody25,
  CodeBlockCode as CodeBlockCode25,
  CodeBlockCopyButton as CodeBlockCopyButton25,
  CodeBlockExpanderButton as CodeBlockExpanderButton3,
  fmtCode as fmtCode25
} from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode21 } from "@ngrok/mantle/inline-code";
import { Input as Input2, InputCapture } from "@ngrok/mantle/input";
import { Label as Label6 } from "@ngrok/mantle/label";
import { Info as Info2 } from "@phosphor-icons/react/Info";
import { MagnifyingGlass } from "@phosphor-icons/react/MagnifyingGlass";
import { Link as Link5 } from "@remix-run/react";
import { jsx as jsx36, jsxs as jsxs29 } from "react/jsx-runtime";
var meta26 = () => [
  { title: "@ngrok/mantle \u2014 Input" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers26 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page26() {
  return /* @__PURE__ */ jsxs29("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs29("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx36("h1", { id: "input", className: "text-5xl font-medium", children: "Input" }),
      /* @__PURE__ */ jsx36("p", { className: "font-body text-body text-xl", children: "Fundamental component for inputs." }),
      /* @__PURE__ */ jsxs29("div", { children: [
        /* @__PURE__ */ jsxs29(Example, { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs29(Label6, { className: "block w-full max-w-80 space-y-1", children: [
            /* @__PURE__ */ jsx36("p", { children: "Username" }),
            /* @__PURE__ */ jsx36(Input2, { placeholder: "Enter a username" })
          ] }),
          /* @__PURE__ */ jsxs29("div", { className: "w-full max-w-80 space-y-2", children: [
            /* @__PURE__ */ jsx36("p", { children: "Validation States:" }),
            /* @__PURE__ */ jsxs29("div", { className: "flex w-full flex-col gap-6", children: [
              /* @__PURE__ */ jsxs29(Label6, { className: "space-y-1", children: [
                /* @__PURE__ */ jsx36("p", { children: "Error" }),
                /* @__PURE__ */ jsx36(Input2, { placeholder: '"validation="error"', validation: "error" })
              ] }),
              /* @__PURE__ */ jsxs29(Label6, { className: "space-y-1", children: [
                /* @__PURE__ */ jsx36("p", { children: "Success" }),
                /* @__PURE__ */ jsx36(Input2, { placeholder: '"validation="success"', validation: "success" })
              ] }),
              /* @__PURE__ */ jsxs29(Label6, { className: "space-y-1", children: [
                /* @__PURE__ */ jsx36("p", { children: "Warning" }),
                /* @__PURE__ */ jsx36(Input2, { placeholder: '"validation="warning"', validation: "warning" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx36(CodeBlock25, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs29(CodeBlockBody25, { children: [
          /* @__PURE__ */ jsx36(CodeBlockCopyButton25, {}),
          /* @__PURE__ */ jsx36(
            CodeBlockCode25,
            {
              language: "tsx",
              value: fmtCode25`
									import { Input } from "@ngrok/mantle/input";

									<Input placeholder="Enter a username" />
									<Input placeholder="Enter a username" validation="error" />
									<Input placeholder="Enter a username" validation="success" />
									<Input placeholder="Enter a username" validation="warning" />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs29("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx36("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }),
      /* @__PURE__ */ jsxs29("p", { className: "font-body text-body text-xl", children: [
        "You can compose additional visual or functional elements within the ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "Input" }),
        " using",
        " ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "children" }),
        ". The examples below show you how to render start and end icons or buttons. The",
        " ",
        /* @__PURE__ */ jsx36(Anchor14, { asChild: !0, children: /* @__PURE__ */ jsx36(Link5, { to: route("/components/password-input"), children: "Password Input" }) }),
        " ",
        "is built using this API under the hood! Keep in mind that you will need to manually pass the",
        " ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "InputCapture" }),
        " component as children too because it is responsible for rendering the actual form ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "input" }),
        " element! We provide an ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "InputCapture" }),
        " ",
        "component for you when you don't use the ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "children" }),
        " API."
      ] }),
      /* @__PURE__ */ jsxs29("p", { className: "font-body text-body text-xl", children: [
        "Note: when composing with interactive content (e.g. a ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "button" }),
        "), you will need to consider whether or not that element should be tab-indexable or receive focus!"
      ] }),
      /* @__PURE__ */ jsxs29("div", { children: [
        /* @__PURE__ */ jsxs29(Example, { className: "grid grid-cols-2 place-items-center gap-6", children: [
          /* @__PURE__ */ jsxs29(Label6, { className: "block w-full max-w-80 space-y-1", children: [
            /* @__PURE__ */ jsx36("p", { children: "Search with start icon" }),
            /* @__PURE__ */ jsxs29(Input2, { className: "max-w-64", placeholder: "Search...", children: [
              /* @__PURE__ */ jsx36(MagnifyingGlass, {}),
              /* @__PURE__ */ jsx36(InputCapture, {})
            ] })
          ] }),
          /* @__PURE__ */ jsxs29(Label6, { className: "block w-full max-w-80 space-y-1", children: [
            /* @__PURE__ */ jsx36("p", { children: "Search with end icon" }),
            /* @__PURE__ */ jsxs29(Input2, { className: "max-w-64", placeholder: "Search...", children: [
              /* @__PURE__ */ jsx36(InputCapture, {}),
              /* @__PURE__ */ jsx36(Info2, {})
            ] })
          ] }),
          /* @__PURE__ */ jsxs29(Label6, { className: "block w-full max-w-80 space-y-1", children: [
            /* @__PURE__ */ jsx36("p", { children: "Search with start and end icons" }),
            /* @__PURE__ */ jsxs29(Input2, { className: "max-w-64", placeholder: "Search...", children: [
              /* @__PURE__ */ jsx36(MagnifyingGlass, {}),
              /* @__PURE__ */ jsx36(InputCapture, {}),
              /* @__PURE__ */ jsx36(Info2, {})
            ] })
          ] }),
          /* @__PURE__ */ jsxs29(Label6, { className: "block w-full max-w-80 space-y-1", children: [
            /* @__PURE__ */ jsx36("p", { children: "Search with start icon (error)" }),
            /* @__PURE__ */ jsxs29(Input2, { className: "max-w-64", placeholder: "Search...", validation: "error", children: [
              /* @__PURE__ */ jsx36(MagnifyingGlass, {}),
              /* @__PURE__ */ jsx36(InputCapture, {})
            ] })
          ] }),
          /* @__PURE__ */ jsxs29(Label6, { className: "block w-full max-w-80 space-y-1", children: [
            /* @__PURE__ */ jsx36("p", { children: "Search with end icon (error)" }),
            /* @__PURE__ */ jsxs29(Input2, { className: "max-w-64", placeholder: "Search...", validation: "error", children: [
              /* @__PURE__ */ jsx36(InputCapture, {}),
              /* @__PURE__ */ jsx36(Info2, {})
            ] })
          ] }),
          /* @__PURE__ */ jsxs29(Label6, { className: "block w-full max-w-80 space-y-1", children: [
            /* @__PURE__ */ jsx36("p", { children: "Search with start and end icons (error)" }),
            /* @__PURE__ */ jsxs29(Input2, { className: "max-w-64", validation: "error", placeholder: "Search...", children: [
              /* @__PURE__ */ jsx36(MagnifyingGlass, {}),
              /* @__PURE__ */ jsx36(InputCapture, {}),
              /* @__PURE__ */ jsx36(Info2, {})
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx36(CodeBlock25, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs29(CodeBlockBody25, { children: [
          /* @__PURE__ */ jsx36(CodeBlockCopyButton25, {}),
          /* @__PURE__ */ jsx36(
            CodeBlockCode25,
            {
              language: "tsx",
              value: fmtCode25`
									import { Input, InputCapture } from "@ngrok/mantle/input";
									import { Label } from "@ngrok/mantle/label";
									import { Info, MagnifyingGlass } from "@phosphor-icons/react";

									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<InputCapture />
											<Info />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
											<Info />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon (error)</p>
										<Input className="max-w-64" placeholder="Search..." validation="error">
											<MagnifyingGlass />
											<InputCapture />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon (error)</p>
										<Input className="max-w-64" placeholder="Search..." validation="error">
											<InputCapture />
											<Info />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons (error)</p>
										<Input className="max-w-64" validation="error" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
											<Info />
										</Input>
									</Label>
								`
            }
          ),
          /* @__PURE__ */ jsx36(CodeBlockExpanderButton3, {})
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs29("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx36("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs29("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx36(InlineCode21, { children: "Input" }),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ jsx36(Anchor14, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input", children: "standard HTML input attributes" }),
        "."
      ] }),
      /* @__PURE__ */ jsx36(PropsTable, { children: /* @__PURE__ */ jsxs29(PropRow, { children: [
        /* @__PURE__ */ jsx36(PropNameCell, { name: "validation", optional: !0 }),
        /* @__PURE__ */ jsx36(PropTypeCell, { children: /* @__PURE__ */ jsxs29("ul", { children: [
          /* @__PURE__ */ jsx36("li", { children: /* @__PURE__ */ jsx36(StringPropType, { value: "error" }) }),
          /* @__PURE__ */ jsx36("li", { children: /* @__PURE__ */ jsx36(StringPropType, { value: "success" }) }),
          /* @__PURE__ */ jsx36("li", { children: /* @__PURE__ */ jsx36(StringPropType, { value: "warning" }) }),
          /* @__PURE__ */ jsx36("li", { children: /* @__PURE__ */ jsx36(BooleanPropType, { value: !1 }) }),
          /* @__PURE__ */ jsx36("li", { children: /* @__PURE__ */ jsx36(FuncPropType, { value: '() => "error" | "success" | "warning" | false' }) })
        ] }) }),
        /* @__PURE__ */ jsx36(PropDefaultValueCell, {}),
        /* @__PURE__ */ jsxs29(PropDescriptionCell, { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs29("p", { children: [
            "Use the ",
            /* @__PURE__ */ jsx36(InlineCode21, { children: "validation" }),
            " prop to show if the input has a specific validation status. This will change the border and outline of the input."
          ] }),
          /* @__PURE__ */ jsxs29("p", { children: [
            "The ",
            /* @__PURE__ */ jsx36(InlineCode21, { children: "false" }),
            " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
            /* @__PURE__ */ jsx36(InlineCode21, { children: "undefined" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs29("p", { children: [
            "Setting ",
            /* @__PURE__ */ jsx36(InlineCode21, { children: "validation" }),
            " to ",
            /* @__PURE__ */ jsx36(InlineCode21, { children: "error" }),
            " also sets",
            " ",
            /* @__PURE__ */ jsx36(InlineCode21, { children: "aria-invalid" }),
            "."
          ] })
        ] })
      ] }) })
    ] })
  ] });
}

// app/routes/components.label.tsx
var components_label_exports = {};
__export(components_label_exports, {
  default: () => Page27,
  headers: () => headers27,
  meta: () => meta27
});
import { CodeBlock as CodeBlock26, CodeBlockBody as CodeBlockBody26, CodeBlockCode as CodeBlockCode26, CodeBlockCopyButton as CodeBlockCopyButton26, fmtCode as fmtCode26 } from "@ngrok/mantle/code-block";
import { Input as Input3 } from "@ngrok/mantle/input";
import { Label as Label7 } from "@ngrok/mantle/label";
import { jsx as jsx37, jsxs as jsxs30 } from "react/jsx-runtime";
var meta27 = () => [
  { title: "@ngrok/mantle \u2014 Label" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers27 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page27() {
  return /* @__PURE__ */ jsx37("div", { className: "space-y-16", children: /* @__PURE__ */ jsxs30("section", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx37("h1", { className: "text-5xl font-medium", children: "Label" }),
    /* @__PURE__ */ jsx37("p", { className: "font-body text-body text-xl", children: "Renders an accessible label associated with controls." }),
    /* @__PURE__ */ jsxs30("div", { children: [
      /* @__PURE__ */ jsxs30(Example, { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs30(Label7, { htmlFor: "name", children: [
          "Name ",
          /* @__PURE__ */ jsx37(Input3, { type: "text", id: "name" })
        ] }),
        /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx37(Label7, { htmlFor: "name-2", children: "Name" }),
          /* @__PURE__ */ jsx37(Input3, { type: "text", id: "name-2" })
        ] }),
        /* @__PURE__ */ jsxs30(Label7, { htmlFor: "name-disabled", children: [
          "Name ",
          /* @__PURE__ */ jsx37(Input3, { type: "text", id: "name", disabled: !0, readOnly: !0, validation: "error", value: "foo" })
        ] })
      ] }),
      /* @__PURE__ */ jsx37(CodeBlock26, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs30(CodeBlockBody26, { children: [
        /* @__PURE__ */ jsx37(CodeBlockCopyButton26, {}),
        /* @__PURE__ */ jsx37(
          CodeBlockCode26,
          {
            language: "tsx",
            value: fmtCode26`
									import { Input } from "@ngrok/mantle/input";
									import { Label } from "@ngrok/mantle/label";

									<Label htmlFor="name">
										Name: <Input type="text" id="name" />
									</Label>

									<div className="flex items-center gap-2">
										<Label htmlFor="name-2">Name:</Label>
										<Input type="text" id="name-2" />
									</div>
								`
          }
        )
      ] }) })
    ] })
  ] }) });
}

// app/routes/components.sheet.tsx
var components_sheet_exports = {};
__export(components_sheet_exports, {
  default: () => Page28,
  headers: () => headers28,
  meta: () => meta28
});
import { Button as Button8, IconButton as IconButton3 } from "@ngrok/mantle/button";
import { CodeBlock as CodeBlock27, CodeBlockBody as CodeBlockBody27, CodeBlockCode as CodeBlockCode27, CodeBlockCopyButton as CodeBlockCopyButton27, fmtCode as fmtCode27 } from "@ngrok/mantle/code-block";
import { Separator as Separator2 } from "@ngrok/mantle/separator";
import {
  Sheet,
  SheetActions,
  SheetBody,
  SheetClose,
  SheetCloseIconButton,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTitleGroup,
  SheetTrigger
} from "@ngrok/mantle/sheet";
import { ListMagnifyingGlass } from "@phosphor-icons/react/ListMagnifyingGlass";
import { TerminalWindow } from "@phosphor-icons/react/TerminalWindow";
import { TrashSimple as TrashSimple2 } from "@phosphor-icons/react/TrashSimple";
import { jsx as jsx38, jsxs as jsxs31 } from "react/jsx-runtime";
var meta28 = () => [
  { title: "@ngrok/mantle \u2014 Sheet" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers28 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page28() {
  return /* @__PURE__ */ jsxs31("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx38("h1", { className: "text-5xl font-medium", children: "Sheet" }),
    /* @__PURE__ */ jsx38("p", { className: "font-body text-body text-xl", children: "A container that overlays the current view from the edge of the screen. It is a lightweight way of allowing users to complete a task without losing contextual information of the view beneath it." }),
    /* @__PURE__ */ jsxs31("div", { children: [
      /* @__PURE__ */ jsx38(Example, { children: /* @__PURE__ */ jsxs31(Sheet, { children: [
        /* @__PURE__ */ jsx38(SheetTrigger, { asChild: !0, children: /* @__PURE__ */ jsx38(Button8, { type: "button", appearance: "filled", children: "Open Sheet" }) }),
        /* @__PURE__ */ jsxs31(SheetContent, { children: [
          /* @__PURE__ */ jsxs31(SheetHeader, { children: [
            /* @__PURE__ */ jsxs31(SheetTitleGroup, { children: [
              /* @__PURE__ */ jsx38(SheetTitle, { children: "Are you absolutely sure?" }),
              /* @__PURE__ */ jsxs31(SheetActions, { children: [
                /* @__PURE__ */ jsx38(IconButton3, { appearance: "ghost", type: "button", icon: /* @__PURE__ */ jsx38(TerminalWindow, {}), label: "Start a Tunnel" }),
                /* @__PURE__ */ jsx38(IconButton3, { appearance: "ghost", type: "button", icon: /* @__PURE__ */ jsx38(ListMagnifyingGlass, {}), label: "See Traffic" }),
                /* @__PURE__ */ jsx38(IconButton3, { appearance: "ghost", type: "button", icon: /* @__PURE__ */ jsx38(TrashSimple2, {}), label: "Delete" }),
                /* @__PURE__ */ jsx38(Separator2, { orientation: "vertical", className: "h-[80%]" }),
                /* @__PURE__ */ jsx38(SheetCloseIconButton, { appearance: "ghost" })
              ] })
            ] }),
            /* @__PURE__ */ jsx38(SheetDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })
          ] }),
          /* @__PURE__ */ jsxs31(SheetBody, { className: "space-y-4", children: [
            /* @__PURE__ */ jsx38("p", { children: "Consequat do voluptate culpa fugiat consequat nostrud duis aliqua minim. Tempor voluptate cillum elit velit. Voluptate aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit proident amet." }),
            /* @__PURE__ */ jsx38("p", { children: "Et aliquip fugiat laborum id enim velit exercitation tempor irure pariatur commodo dolor tempor eu. Consectetur sunt est occaecat quis eiusmod ea cillum sunt sunt labore consequat aute. Aute ad anim do et enim nisi adipisicing sunt culpa magna reprehenderit. Reprehenderit dolor elit cupidatat veniam dolore. Consectetur occaecat ea est elit ipsum." }),
            /* @__PURE__ */ jsx38("p", { children: "Est pariatur exercitation commodo in veniam enim dolor. Labore consequat cupidatat ipsum enim deserunt exercitation ipsum Lorem. Ea dolor adipisicing et labore Lorem." }),
            /* @__PURE__ */ jsx38("p", { children: "Incididunt culpa proident qui in. Nulla do quis pariatur veniam est reprehenderit dolore. Occaecat consectetur incididunt incididunt commodo cillum amet aliqua id pariatur sunt. Laborum amet magna id sunt. Nulla nisi minim et eu incididunt irure fugiat laboris labore nostrud eiusmod irure adipisicing. Exercitation pariatur voluptate occaecat anim irure ad tempor est. Do culpa culpa occaecat ut pariatur elit do exercitation consectetur sint aliqua voluptate." }),
            /* @__PURE__ */ jsx38("p", { children: "Culpa Lorem fugiat mollit est velit enim fugiat reprehenderit consequat eu. Commodo eiusmod irure anim culpa consequat in commodo ad nostrud amet pariatur. Eiusmod velit qui reprehenderit consequat proident esse amet consequat. Exercitation nostrud laborum labore anim nulla consequat elit quis ullamco nisi minim. Voluptate aliqua magna eu proident qui ipsum officia laboris. Ad veniam eiusmod mollit laborum sit pariatur do eu nostrud quis. Adipisicing ea labore duis laboris ex aute ea ut magna sit nisi dolor." }),
            /* @__PURE__ */ jsx38("p", { children: "Amet adipisicing quis fugiat cillum do commodo culpa deserunt minim. Fugiat enim veniam ex ullamco minim laboris labore culpa occaecat ut exercitation occaecat culpa quis. Veniam quis velit enim id veniam nisi non consequat laboris. Reprehenderit fugiat nostrud voluptate esse et nulla mollit eiusmod veniam sunt adipisicing. Aute quis mollit non quis ullamco consectetur labore quis do occaecat. Veniam id laboris adipisicing fugiat." })
          ] }),
          /* @__PURE__ */ jsxs31(SheetFooter, { children: [
            /* @__PURE__ */ jsx38(SheetClose, { asChild: !0, children: /* @__PURE__ */ jsx38(Button8, { type: "button", children: "Close" }) }),
            /* @__PURE__ */ jsx38(Button8, { type: "button", appearance: "filled", children: "Save" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx38(CodeBlock27, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs31(CodeBlockBody27, { children: [
        /* @__PURE__ */ jsx38(CodeBlockCopyButton27, {}),
        /* @__PURE__ */ jsx38(
          CodeBlockCode27,
          {
            language: "tsx",
            value: fmtCode27`
								import { Button, IconButton } from "@ngrok/mantle/button";
								import { Separator } from "@ngrok/mantle/separator";
								import {
									Sheet,
									SheetActions,
									SheetBody,
									SheetClose,
									SheetCloseIconButton,
									SheetContent,
									SheetDescription,
									SheetFooter,
									SheetHeader,
									SheetTitle,
									SheetTitleGroup,
									SheetTrigger,
								} from "@ngrok/mantle/ngrok/mantle/sheet";
								import { ListMagnifyingGlass } from "@phosphor-icons/react/ListMagnifyingGlass";
								import { TerminalWindow } from "@phosphor-icons/react/TerminalWindow";
								import { TrashSimple } from "@phosphor-icons/react/TrashSimple";

								<Sheet>
									<SheetTrigger asChild>
										<Button type="button" appearance="filled">Open Sheet</Button>
									</SheetTrigger>
									<SheetContent>
										<SheetHeader>
											<SheetTitleGroup>
												<SheetTitle>Are you absolutely sure?</SheetTitle>
												<SheetActions>
													<IconButton appearance="ghost" type="button" icon={<TerminalWindow />} label="Start a Tunnel" />
													<IconButton appearance="ghost" type="button" icon={<ListMagnifyingGlass />} label="See Traffic" />
													<IconButton appearance="ghost" type="button" icon={<TrashSimple />} label="Delete" />
													<Separator orientation="vertical" className="h-[80%]" />
													<SheetCloseIconButton appearance="ghost" />
												</SheetActions>
											</SheetTitleGroup>
											<SheetDescription>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</SheetDescription>
										</SheetHeader>
										<SheetBody className="space-y-4">
											<p>
												Lorem ipsum
											</p>
										</SheetBody>
										<SheetFooter>
											<SheetClose asChild>
												<Button type="button">Close</Button>
											</SheetClose>
										</SheetFooter>
									</SheetContent>
								</Sheet>
							`
          }
        )
      ] }) })
    ] })
  ] });
}

// app/routes/components.table.tsx
var components_table_exports = {};
__export(components_table_exports, {
  default: () => Page29,
  headers: () => headers29,
  meta: () => meta29
});
import { CodeBlock as CodeBlock28, CodeBlockBody as CodeBlockBody28, CodeBlockCode as CodeBlockCode28, CodeBlockCopyButton as CodeBlockCopyButton28, fmtCode as fmtCode28 } from "@ngrok/mantle/code-block";
import {
  Table as Table3,
  TableBody as TableBody3,
  TableCaption,
  TableCell as TableCell3,
  TableFooter,
  TableHead as TableHead3,
  TableHeader as TableHeader3,
  TableRow as TableRow3
} from "@ngrok/mantle/table";
import { jsx as jsx39, jsxs as jsxs32 } from "react/jsx-runtime";
var meta29 = () => [
  { title: "@ngrok/mantle \u2014 Table" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers29 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page29() {
  return /* @__PURE__ */ jsxs32("section", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx39("h1", { className: "text-5xl font-medium", children: "Table" }),
    /* @__PURE__ */ jsx39("p", { className: "font-body text-body text-xl", children: "A responsive table component." }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx39(Example, { className: "gap-2", children: /* @__PURE__ */ jsx39(ExampleTable, {}) }),
      /* @__PURE__ */ jsx39(CodeBlock28, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs32(CodeBlockBody28, { children: [
        /* @__PURE__ */ jsx39(CodeBlockCopyButton28, {}),
        /* @__PURE__ */ jsx39(
          CodeBlockCode28,
          {
            language: "tsx",
            value: fmtCode28`
							import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@ngrok/mantle/table";

							<Table>
								<TableCaption>A list of your recent invoices.</TableCaption>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px]">Invoice</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Method</TableHead>
										<TableHead className="text-right">Amount</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{invoices.map((invoice) => (
										<TableRow key={invoice.invoice}>
											<TableCell className="font-medium">{invoice.invoice}</TableCell>
											<TableCell>{invoice.paymentStatus}</TableCell>
											<TableCell>{invoice.paymentMethod}</TableCell>
											<TableCell className="text-right">{invoice.totalAmount}</TableCell>
										</TableRow>
									))}
								</TableBody>
								<TableFooter>
									<TableRow>
										<TableCell colSpan={3}>Total</TableCell>
										<TableCell className="text-right">$2,500.00</TableCell>
									</TableRow>
								</TableFooter>
							</Table>
						`
          }
        )
      ] }) })
    ] })
  ] });
}
var ExampleTable = () => /* @__PURE__ */ jsx39("div", { className: "z-10 mt-4 overflow-hidden rounded-lg border border-gray-300 bg-white dark:bg-gray-100", children: /* @__PURE__ */ jsxs32(Table3, { children: [
  /* @__PURE__ */ jsx39(TableCaption, { children: "A list of your recent invoices." }),
  /* @__PURE__ */ jsx39(TableHeader3, { children: /* @__PURE__ */ jsxs32(TableRow3, { children: [
    /* @__PURE__ */ jsx39(TableHead3, { className: "w-[100px]", children: "Invoice" }),
    /* @__PURE__ */ jsx39(TableHead3, { children: "Status" }),
    /* @__PURE__ */ jsx39(TableHead3, { children: "Method" }),
    /* @__PURE__ */ jsx39(TableHead3, { className: "text-right", children: "Amount" })
  ] }) }),
  /* @__PURE__ */ jsx39(TableBody3, { children: [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card"
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal"
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer"
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card"
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal"
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer"
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card"
    }
  ].map((invoice) => /* @__PURE__ */ jsxs32(TableRow3, { children: [
    /* @__PURE__ */ jsx39(TableCell3, { className: "font-medium", children: invoice.invoice }),
    /* @__PURE__ */ jsx39(TableCell3, { children: invoice.paymentStatus }),
    /* @__PURE__ */ jsx39(TableCell3, { children: invoice.paymentMethod }),
    /* @__PURE__ */ jsx39(TableCell3, { className: "text-right", children: invoice.totalAmount })
  ] }, invoice.invoice)) }),
  /* @__PURE__ */ jsx39(TableFooter, { children: /* @__PURE__ */ jsxs32(TableRow3, { children: [
    /* @__PURE__ */ jsx39(TableCell3, { colSpan: 3, children: "Total" }),
    /* @__PURE__ */ jsx39(TableCell3, { className: "text-right", children: "$2,500.00" })
  ] }) })
] }) });

// app/routes/base.typography.tsx
var base_typography_exports = {};
__export(base_typography_exports, {
  default: () => Page30,
  headers: () => headers30,
  meta: () => meta30
});
import { InlineCode as InlineCode22 } from "@ngrok/mantle/inline-code";
import { Table as Table4, TableBody as TableBody4, TableCell as TableCell4, TableHead as TableHead4, TableHeader as TableHeader4, TableRow as TableRow4 } from "@ngrok/mantle/table";
import { jsx as jsx40, jsxs as jsxs33 } from "react/jsx-runtime";
var meta30 = () => [
  { title: "@ngrok/mantle \u2014 Typography" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers30 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page30() {
  return /* @__PURE__ */ jsxs33("div", { children: [
    /* @__PURE__ */ jsx40("h1", { className: "text-5xl font-medium", children: "Typography" }),
    /* @__PURE__ */ jsx40("p", { className: "font-body text-body mt-4 text-xl", children: "Mantle provides various typography tokens for consistency and readability." }),
    /* @__PURE__ */ jsx40("h2", { className: "mt-8 text-3xl font-medium", children: "Scale" }),
    /* @__PURE__ */ jsx40("p", { className: "font-body text-body mt-3", children: "Mantle provides a general type scale for various headers throughout our products. Do note that our text styling is independent of the actual markup, so a Heading 1 can be styled as a Heading 2 or Heading 5 as appropriate." }),
    /* @__PURE__ */ jsx40("h1", { className: "mt-4 text-5xl font-medium", children: "Heading 1" }),
    /* @__PURE__ */ jsx40("h2", { className: "mt-4 text-3xl font-medium", children: "Heading 2" }),
    /* @__PURE__ */ jsx40("h3", { className: "mt-4 text-2xl font-medium", children: "Heading 3" }),
    /* @__PURE__ */ jsx40("h4", { className: "mt-4 text-xl font-medium", children: "Heading 4" }),
    /* @__PURE__ */ jsx40("h5", { className: "mt-4 text-base font-medium", children: "Heading 5" }),
    /* @__PURE__ */ jsx40("h6", { className: "mt-4 text-xs font-medium uppercase tracking-widest", children: "Heading 6" }),
    /* @__PURE__ */ jsx40("h2", { className: "mt-12 text-3xl font-medium", children: "Colors" }),
    /* @__PURE__ */ jsx40("p", { className: "font-body text-body mt-3", children: "When possible, it\u2019s preferred to render text using the following tokens. This helps provide heirarchy outside of font size, and makes sure our type is the right color across various themes." }),
    /* @__PURE__ */ jsxs33("div", { className: "mt-3 flex flex-col gap-4 overflow-hidden text-xs md:flex-row", children: [
      /* @__PURE__ */ jsxs33("div", { className: "text-strong flex flex-grow flex-col gap-1", children: [
        /* @__PURE__ */ jsx40("div", { className: "h-10 w-full rounded bg-neutral-950" }),
        /* @__PURE__ */ jsxs33("div", { className: "flex items-center justify-between", children: [
          "Strong",
          /* @__PURE__ */ jsx40(InlineCode22, { children: ".text-strong" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs33("div", { className: "flex flex-grow flex-col gap-1", children: [
        /* @__PURE__ */ jsx40("div", { className: "h-10 w-full rounded bg-neutral-950/75" }),
        /* @__PURE__ */ jsxs33("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx40("span", { className: "text-body", children: "Body" }),
          /* @__PURE__ */ jsx40(InlineCode22, { children: ".text-body" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs33("div", { className: "flex flex-grow flex-col gap-1", children: [
        /* @__PURE__ */ jsx40("div", { className: "h-10 w-full rounded bg-neutral-950/60" }),
        /* @__PURE__ */ jsxs33("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx40("span", { className: "text-muted", children: "Muted" }),
          /* @__PURE__ */ jsx40(InlineCode22, { children: ".text-muted" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs33("div", { className: "flex flex-grow flex-col gap-1", children: [
        /* @__PURE__ */ jsx40("div", { className: "h-10 w-full rounded bg-neutral-950/50" }),
        /* @__PURE__ */ jsxs33("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx40("span", { className: "text-placeholder", children: "Placeholder" }),
          /* @__PURE__ */ jsx40(InlineCode22, { children: ".text-placeholder" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx40("h2", { className: "mt-12 text-3xl font-medium", children: "Fonts" }),
    /* @__PURE__ */ jsxs33("p", { className: "font-body text-body mt-3", children: [
      "Mantle specifies Euclid as the default font for UI and headings. It extends Tailwind by providing Nunito Sans as a ",
      /* @__PURE__ */ jsx40(InlineCode22, { children: "font-body" }),
      ". We also use IBM Plex Mono as a monospace typeface."
    ] }),
    /* @__PURE__ */ jsx40("div", { className: "border-card mt-4 overflow-hidden rounded-lg border", children: /* @__PURE__ */ jsxs33(Table4, { children: [
      /* @__PURE__ */ jsx40(TableHeader4, { children: /* @__PURE__ */ jsxs33(TableRow4, { children: [
        /* @__PURE__ */ jsx40(TableHead4, { children: "Class" }),
        /* @__PURE__ */ jsx40(TableHead4, { children: "Fonts" }),
        /* @__PURE__ */ jsx40(TableHead4, { children: "Description" })
      ] }) }),
      /* @__PURE__ */ jsxs33(TableBody4, { className: "text-body text-xs", children: [
        /* @__PURE__ */ jsxs33(TableRow4, { children: [
          /* @__PURE__ */ jsxs33(TableCell4, { className: "space-x-1 space-y-1", children: [
            /* @__PURE__ */ jsx40(InlineCode22, { className: "break-keep", children: "font-sans" }),
            /* @__PURE__ */ jsx40(InlineCode22, { className: "break-keep", children: "default" })
          ] }),
          /* @__PURE__ */ jsxs33(TableCell4, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx40("p", { className: "font-sans", children: "Euclid Square" }),
            /* @__PURE__ */ jsx40("p", { className: "font-mono", children: '"Euclid Square", ui-sans-serif, system-ui, sans-serif' })
          ] }),
          /* @__PURE__ */ jsx40(TableCell4, { children: "The default font for rendering UI and headings." })
        ] }),
        /* @__PURE__ */ jsxs33(TableRow4, { children: [
          /* @__PURE__ */ jsx40(TableCell4, { children: /* @__PURE__ */ jsx40(InlineCode22, { className: "break-keep", children: "font-body" }) }),
          /* @__PURE__ */ jsxs33(TableCell4, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx40("p", { className: "font-body", children: "Nunito Sans" }),
            /* @__PURE__ */ jsx40("p", { className: "font-mono", children: '"Nunito Sans", ui-sans-serif, system-ui, sans-serif' })
          ] }),
          /* @__PURE__ */ jsx40(TableCell4, { children: "Best when used in longform writing like prose documentation." })
        ] }),
        /* @__PURE__ */ jsxs33(TableRow4, { children: [
          /* @__PURE__ */ jsx40(TableCell4, { children: /* @__PURE__ */ jsx40(InlineCode22, { className: "break-keep", children: "font-mono" }) }),
          /* @__PURE__ */ jsxs33(TableCell4, { className: "space-y-1", children: [
            /* @__PURE__ */ jsx40("p", { className: "font-mono", children: "IBM Plex Mono" }),
            /* @__PURE__ */ jsx40("p", { className: "font-mono", children: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' })
          ] }),
          /* @__PURE__ */ jsx40(TableCell4, { children: "Used to render code and tokens. Take care to adjust the size a step down in most applications." })
        ] })
      ] })
    ] }) })
  ] });
}

// app/routes/components.card.tsx
var components_card_exports = {};
__export(components_card_exports, {
  default: () => Page31,
  headers: () => headers31,
  meta: () => meta31
});
import { Card as Card3, CardBody as CardBody3, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";
import { CodeBlock as CodeBlock29, CodeBlockBody as CodeBlockBody29, CodeBlockCode as CodeBlockCode29, CodeBlockCopyButton as CodeBlockCopyButton29, fmtCode as fmtCode29 } from "@ngrok/mantle/code-block";
import { jsx as jsx41, jsxs as jsxs34 } from "react/jsx-runtime";
var meta31 = () => [
  { title: "@ngrok/mantle \u2014 Card" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers31 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page31() {
  return /* @__PURE__ */ jsxs34("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx41("h1", { className: "text-5xl font-medium", children: "Card" }),
    /* @__PURE__ */ jsx41("p", { className: "font-body text-body text-xl", children: "A container used to display content in a box, resembling a physical card." }),
    /* @__PURE__ */ jsxs34("div", { children: [
      /* @__PURE__ */ jsx41(Example, { children: /* @__PURE__ */ jsxs34(Card3, { className: "shadow-lg", children: [
        /* @__PURE__ */ jsx41(CardHeader, { children: /* @__PURE__ */ jsx41(CardTitle, { children: "Card Title Here" }) }),
        /* @__PURE__ */ jsx41(CardBody3, { children: /* @__PURE__ */ jsx41("p", { children: "Laborum in aute officia adipisicing elit velit." }) }),
        /* @__PURE__ */ jsx41(CardFooter, { children: /* @__PURE__ */ jsx41("p", { children: "Card footer" }) })
      ] }) }),
      /* @__PURE__ */ jsx41(CodeBlock29, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs34(CodeBlockBody29, { children: [
        /* @__PURE__ */ jsx41(CodeBlockCopyButton29, {}),
        /* @__PURE__ */ jsx41(
          CodeBlockCode29,
          {
            language: "tsx",
            value: fmtCode29`
							import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";

							<Card>
								<CardHeader>
									<CardTitle>Card Title Here</CardTitle>
								</CardHeader>
								<CardBody>
									<p>Laborum in aute officia adipisicing elit velit.</p>
								</CardBody>
								<CardFooter>
									<p>Card footer</p>
								</CardFooter>
							</Card>
						`
          }
        )
      ] }) })
    ] })
  ] });
}

// app/routes/components.icon.tsx
var components_icon_exports = {};
__export(components_icon_exports, {
  default: () => Page32,
  headers: () => headers32,
  meta: () => meta32
});
import { Anchor as Anchor15 } from "@ngrok/mantle/anchor";
import { CodeBlock as CodeBlock30, CodeBlockBody as CodeBlockBody30, CodeBlockCode as CodeBlockCode30, CodeBlockCopyButton as CodeBlockCopyButton30, fmtCode as fmtCode30 } from "@ngrok/mantle/code-block";
import { Icon as Icon2 } from "@ngrok/mantle/icon";
import { InlineCode as InlineCode23 } from "@ngrok/mantle/inline-code";
import { Fire as Fire2 } from "@phosphor-icons/react/Fire";
import { jsx as jsx42, jsxs as jsxs35 } from "react/jsx-runtime";
var meta32 = () => [
  { title: "@ngrok/mantle \u2014 Icon" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers32 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page32() {
  return /* @__PURE__ */ jsxs35("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxs35("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx42("h1", { id: "icon", className: "text-5xl font-medium", children: "Icon" }),
      /* @__PURE__ */ jsxs35("p", { className: "font-body text-body text-xl", children: [
        "Decorates an svg icon with automatic sizing. Useful when applying base styles to",
        " ",
        /* @__PURE__ */ jsx42(Anchor15, { href: "https://phosphoricons.com", children: "phosphor icons" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs35("div", { children: [
        /* @__PURE__ */ jsxs35(Example, { children: [
          /* @__PURE__ */ jsx42(Icon2, { svg: /* @__PURE__ */ jsx42(Fire2, {}) }),
          /* @__PURE__ */ jsx42(Icon2, { className: "text-danger-600", svg: /* @__PURE__ */ jsx42(Fire2, { weight: "fill" }) })
        ] }),
        /* @__PURE__ */ jsx42(CodeBlock30, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs35(CodeBlockBody30, { children: [
          /* @__PURE__ */ jsx42(CodeBlockCopyButton30, {}),
          /* @__PURE__ */ jsx42(
            CodeBlockCode30,
            {
              language: "tsx",
              value: fmtCode30`
									import { Icon } from "@ngrok/mantle/icon";
									import { Fire } from "@phosphor-icons/react";

									<Icon svg={<Fire />} />
									<Icon className="text-danger-600" svg={<Fire weight="fill" />} />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs35("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs35("h2", { id: "example-class-name", className: "text-3xl font-medium", children: [
        "Merging ",
        /* @__PURE__ */ jsx42(InlineCode23, { children: "className" }),
        "s"
      ] }),
      /* @__PURE__ */ jsxs35("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx42(InlineCode23, { children: "Icon" }),
        " merges ",
        /* @__PURE__ */ jsx42(InlineCode23, { children: "className" }),
        " selectors with the following order of precedence (last one wins):"
      ] }),
      /* @__PURE__ */ jsxs35("ol", { className: "font-body text-body ml-8 list-decimal", children: [
        /* @__PURE__ */ jsx42("li", { children: "Icon base classes" }),
        /* @__PURE__ */ jsx42("li", { children: "svg className" }),
        /* @__PURE__ */ jsx42("li", { children: "Icon className" })
      ] }),
      /* @__PURE__ */ jsxs35("div", { children: [
        /* @__PURE__ */ jsxs35(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ jsxs35("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs35("p", { children: [
              "When ",
              /* @__PURE__ */ jsx42(InlineCode23, { children: "className" }),
              " is not specified:"
            ] }),
            /* @__PURE__ */ jsx42("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx42(Icon2, { svg: /* @__PURE__ */ jsx42(Fire2, {}) }) })
          ] }),
          /* @__PURE__ */ jsxs35("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs35("p", { children: [
              "When ",
              /* @__PURE__ */ jsx42(InlineCode23, { children: "className" }),
              " is only specified on ",
              /* @__PURE__ */ jsx42(InlineCode23, { children: "svg" }),
              ":"
            ] }),
            /* @__PURE__ */ jsx42("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx42(Icon2, { svg: /* @__PURE__ */ jsx42(Fire2, { className: "size-12 sm:size-16" }) }) })
          ] }),
          /* @__PURE__ */ jsxs35("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs35("p", { children: [
              "When ",
              /* @__PURE__ */ jsx42(InlineCode23, { children: "className" }),
              " is specified on both ",
              /* @__PURE__ */ jsx42(InlineCode23, { children: "svg" }),
              " and",
              " ",
              /* @__PURE__ */ jsx42(InlineCode23, { children: "Icon" }),
              ":"
            ] }),
            /* @__PURE__ */ jsx42("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx42(Icon2, { className: "size-20 sm:size-28", svg: /* @__PURE__ */ jsx42(Fire2, { className: "size-12 sm:size-16" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx42(CodeBlock30, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs35(CodeBlockBody30, { children: [
          /* @__PURE__ */ jsx42(CodeBlockCopyButton30, {}),
          /* @__PURE__ */ jsx42(
            CodeBlockCode30,
            {
              language: "tsx",
              value: fmtCode30`
									import { Icon } from "@ngrok/mantle/icon"
									import { Fire } from "@phosphor-icons/react";

									<Icon svg={<Fire />} />
									<Icon svg={<Fire className="size-12 sm:size-16" />} />
									<Icon className="size-20 sm:size-28" svg={<Fire className="size-12 sm:size-16" />} />
								`
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs35("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx42("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }),
      /* @__PURE__ */ jsxs35("p", { className: "font-body text-body text-xl", children: [
        "The ",
        /* @__PURE__ */ jsx42(InlineCode23, { children: "Icon" }),
        " accepts the following props:"
      ] }),
      /* @__PURE__ */ jsxs35(PropsTable, { children: [
        /* @__PURE__ */ jsxs35(PropRow, { children: [
          /* @__PURE__ */ jsx42(PropNameCell, { name: "className", optional: !0 }),
          /* @__PURE__ */ jsx42(PropTypeCell, { children: /* @__PURE__ */ jsx42(StringPropType, {}) }),
          /* @__PURE__ */ jsx42(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs35(PropDescriptionCell, { children: [
            "A string. Specifies the element\u2019s CSS class name. See",
            " ",
            /* @__PURE__ */ jsx42(Anchor15, { href: "https://developer.mozilla.org/en-US/docs/Web/API/Element/className", children: "the MDN docs" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs35(PropRow, { children: [
          /* @__PURE__ */ jsx42(PropNameCell, { name: "style", optional: !0 }),
          /* @__PURE__ */ jsx42(PropTypeCell, { children: /* @__PURE__ */ jsx42(ObjectPropType, { name: "React.CSSProperties" }) }),
          /* @__PURE__ */ jsx42(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsxs35(PropDescriptionCell, { children: [
            "An object with CSS styles, for example ",
            /* @__PURE__ */ jsx42(InlineCode23, { children: "{ fontWeight: 'bold', margin: 20 }" }),
            ". Similarly to the DOM style property, the CSS property names need to be written as camelCase, for example",
            " ",
            /* @__PURE__ */ jsx42(InlineCode23, { children: "fontWeight" }),
            " instead of ",
            /* @__PURE__ */ jsx42(InlineCode23, { children: "font-weight" }),
            ". You can pass strings or numbers as values. If you pass a number, like ",
            /* @__PURE__ */ jsx42(InlineCode23, { children: "width: 100" }),
            ", React will automatically append px (\u201Cpixels\u201D) to the value unless it\u2019s a unitless property. See",
            /* @__PURE__ */ jsx42(Anchor15, { href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style", children: "the MDN docs" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs35(PropRow, { children: [
          /* @__PURE__ */ jsx42(PropNameCell, { name: "svg" }),
          /* @__PURE__ */ jsx42(PropTypeCell, { children: /* @__PURE__ */ jsx42(ReactNodePropType, {}) }),
          /* @__PURE__ */ jsx42(PropDefaultValueCell, {}),
          /* @__PURE__ */ jsx42(PropDescriptionCell, { children: "A single SVG icon passed as a JSX tag." })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/components.tabs.tsx
var components_tabs_exports = {};
__export(components_tabs_exports, {
  default: () => Page33,
  headers: () => headers33,
  meta: () => meta33
});
import { Button as Button9 } from "@ngrok/mantle/button";
import { Card as Card4, CardBody as CardBody4, CardFooter as CardFooter2, CardHeader as CardHeader2, CardTitle as CardTitle2 } from "@ngrok/mantle/card";
import { CodeBlock as CodeBlock31, CodeBlockBody as CodeBlockBody31, CodeBlockCode as CodeBlockCode31, CodeBlockCopyButton as CodeBlockCopyButton31, fmtCode as fmtCode31 } from "@ngrok/mantle/code-block";
import { Input as Input4, PasswordInput as PasswordInput2 } from "@ngrok/mantle/input";
import { TabBadge, Tabs, TabsContent, TabsList, TabsTrigger } from "@ngrok/mantle/tabs";
import { Globe as Globe2 } from "@phosphor-icons/react/Globe";
import { ShieldCheck } from "@phosphor-icons/react/ShieldCheck";
import { User } from "@phosphor-icons/react/User";
import { jsx as jsx43, jsxs as jsxs36 } from "react/jsx-runtime";
var meta33 = () => [
  { title: "@ngrok/mantle \u2014 Tabs" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers33 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page33() {
  return /* @__PURE__ */ jsx43("div", { className: "space-y-16", children: /* @__PURE__ */ jsxs36("section", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx43("h1", { className: "text-5xl font-medium", children: "Tabs" }),
    /* @__PURE__ */ jsx43("p", { className: "font-body text-body text-xl", children: "A set of layered sections of content\u2014known as tab panels\u2014that are displayed one at a time." }),
    /* @__PURE__ */ jsxs36("div", { children: [
      /* @__PURE__ */ jsxs36(Example, { className: "mt-4 grid gap-6", children: [
        /* @__PURE__ */ jsx43(Tabs, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ jsxs36(TabsList, { children: [
          /* @__PURE__ */ jsx43(TabsTrigger, { value: "tab-1", children: "Tab Title" }),
          /* @__PURE__ */ jsx43(TabsTrigger, { value: "tab-2", children: "Tab Title" }),
          /* @__PURE__ */ jsx43(TabsTrigger, { disabled: !0, value: "tab-3", children: "Tab Title" }),
          /* @__PURE__ */ jsx43(TabsTrigger, { value: "tab-4", children: "Tab Title" })
        ] }) }),
        /* @__PURE__ */ jsx43(Tabs, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ jsxs36(TabsList, { children: [
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-1", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title"
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-2", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title"
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { disabled: !0, value: "tab-3", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title"
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-4", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx43(Tabs, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ jsxs36(TabsList, { children: [
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-1", children: [
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-2", children: [
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { disabled: !0, value: "tab-3", children: [
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-4", children: [
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx43(Tabs, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ jsxs36(TabsList, { children: [
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-1", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-2", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { disabled: !0, value: "tab-3", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] }),
          /* @__PURE__ */ jsxs36(TabsTrigger, { value: "tab-4", children: [
            /* @__PURE__ */ jsx43(Globe2, {}),
            "Tab Title",
            /* @__PURE__ */ jsx43(TabBadge, { children: "32" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs36(Tabs, { orientation: "horizontal", defaultValue: "account", className: "w-[400px]", children: [
          /* @__PURE__ */ jsxs36(TabsList, { children: [
            /* @__PURE__ */ jsxs36(TabsTrigger, { value: "account", children: [
              /* @__PURE__ */ jsx43(User, {}),
              "Account",
              /* @__PURE__ */ jsx43(TabBadge, { children: "2" })
            ] }),
            /* @__PURE__ */ jsxs36(TabsTrigger, { value: "password", children: [
              /* @__PURE__ */ jsx43(ShieldCheck, {}),
              "Password"
            ] })
          ] }),
          /* @__PURE__ */ jsx43(TabsContent, { value: "account", children: /* @__PURE__ */ jsxs36(Card4, { children: [
            /* @__PURE__ */ jsxs36(CardHeader2, { children: [
              /* @__PURE__ */ jsx43(CardTitle2, { children: "Account" }),
              /* @__PURE__ */ jsx43("p", { className: "text-muted", children: "Make changes to your account here. Click save when you're done." })
            ] }),
            /* @__PURE__ */ jsxs36(CardBody4, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ jsx43(Input4, { id: "name", defaultValue: "Cody Price" })
              ] }),
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "username", children: "Username" }),
                /* @__PURE__ */ jsx43(Input4, { id: "username", defaultValue: "@cody-dot-js" })
              ] })
            ] }),
            /* @__PURE__ */ jsx43(CardFooter2, { children: /* @__PURE__ */ jsx43(Button9, { type: "button", children: "Save changes" }) })
          ] }) }),
          /* @__PURE__ */ jsx43(TabsContent, { value: "password", children: /* @__PURE__ */ jsxs36(Card4, { children: [
            /* @__PURE__ */ jsxs36(CardHeader2, { children: [
              /* @__PURE__ */ jsx43(CardTitle2, { children: "Password" }),
              /* @__PURE__ */ jsx43("p", { className: "text-muted", children: "Change your password here. After saving, you'll be logged out." })
            ] }),
            /* @__PURE__ */ jsxs36(CardBody4, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "current", children: "Current password" }),
                /* @__PURE__ */ jsx43(PasswordInput2, { id: "current" })
              ] }),
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "new", children: "New password" }),
                /* @__PURE__ */ jsx43(PasswordInput2, { id: "new" })
              ] })
            ] }),
            /* @__PURE__ */ jsx43(CardFooter2, { children: /* @__PURE__ */ jsx43(Button9, { type: "button", children: "Save password" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs36(Tabs, { orientation: "vertical", defaultValue: "account", className: "max-w-xl", children: [
          /* @__PURE__ */ jsxs36(TabsList, { children: [
            /* @__PURE__ */ jsx43(TabsTrigger, { value: "account", children: "Account" }),
            /* @__PURE__ */ jsx43(TabsTrigger, { value: "password", children: "Password" }),
            /* @__PURE__ */ jsx43(TabsTrigger, { value: "disabled-tab", disabled: !0, children: "Disabled tab" })
          ] }),
          /* @__PURE__ */ jsx43(TabsContent, { value: "account", children: /* @__PURE__ */ jsxs36(Card4, { children: [
            /* @__PURE__ */ jsxs36(CardHeader2, { children: [
              /* @__PURE__ */ jsx43(CardTitle2, { children: "Account" }),
              /* @__PURE__ */ jsx43("p", { className: "text-muted", children: "Make changes to your account here. Click save when you're done." })
            ] }),
            /* @__PURE__ */ jsxs36(CardBody4, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ jsx43(Input4, { id: "name", defaultValue: "Cody Price" })
              ] }),
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "username", children: "Username" }),
                /* @__PURE__ */ jsx43(Input4, { id: "username", defaultValue: "@cody-dot-js" })
              ] })
            ] }),
            /* @__PURE__ */ jsx43(CardFooter2, { children: /* @__PURE__ */ jsx43(Button9, { type: "button", children: "Save changes" }) })
          ] }) }),
          /* @__PURE__ */ jsx43(TabsContent, { value: "password", children: /* @__PURE__ */ jsxs36(Card4, { children: [
            /* @__PURE__ */ jsxs36(CardHeader2, { children: [
              /* @__PURE__ */ jsx43(CardTitle2, { children: "Password" }),
              /* @__PURE__ */ jsx43("p", { className: "text-muted", children: "Change your password here. After saving, you'll be logged out." })
            ] }),
            /* @__PURE__ */ jsxs36(CardBody4, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "current", children: "Current password" }),
                /* @__PURE__ */ jsx43(PasswordInput2, { id: "current" })
              ] }),
              /* @__PURE__ */ jsxs36("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx43("label", { htmlFor: "new", children: "New password" }),
                /* @__PURE__ */ jsx43(PasswordInput2, { id: "new" })
              ] })
            ] }),
            /* @__PURE__ */ jsx43(CardFooter2, { children: /* @__PURE__ */ jsx43(Button9, { type: "button", children: "Save password" }) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx43(CodeBlock31, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ jsxs36(CodeBlockBody31, { children: [
        /* @__PURE__ */ jsx43(CodeBlockCopyButton31, {}),
        /* @__PURE__ */ jsx43(
          CodeBlockCode31,
          {
            language: "tsx",
            value: fmtCode31`
									import { Button } from "@ngrok/mantle/button";
									import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";
									import { Input, PasswordInput } from "@ngrok/mantle/input";
									import { TabBadge, Tabs, TabsContent, TabsList, TabsTrigger } from "@ngrok/mantle/tabs";

									<Tabs orientation="horizontal" defaultValue="account" className="w-[400px]">
										<TabsList>
											<TabsTrigger value="account">
												<User />
												Account
												<TabBadge>2</TabBadge>
											</TabsTrigger>
											<TabsTrigger value="password">
												<ShieldCheck />
												Password
											</TabsTrigger>
										</TabsList>
										<TabsContent value="account">
											<Card>
												<CardHeader>
													<CardTitle>Account</CardTitle>
													<p className="text-muted">Make changes to your account here. Click save when you're done.</p>
												</CardHeader>
												<CardBody className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="name">Name</label>
														<Input id="name" defaultValue="Cody Price" />
													</div>
													<div className="space-y-1">
														<label htmlFor="username">Username</label>
														<Input id="username" defaultValue="@cody-dot-js" />
													</div>
												</CardBody>
												<CardFooter>
													<Button type="button">Save changes</Button>
												</CardFooter>
											</Card>
										</TabsContent>
										<TabsContent value="password">
											<Card>
												<CardHeader>
													<CardTitle>Password</CardTitle>
													<p className="text-muted">Change your password here. After saving, you'll be logged out.</p>
												</CardHeader>
												<CardBody className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="current">Current password</label>
														<PasswordInput id="current" />
													</div>
													<div className="space-y-1">
														<label htmlFor="new">New password</label>
														<PasswordInput id="new" />
													</div>
												</CardBody>
												<CardFooter>
													<Button type="button">Save password</Button>
												</CardFooter>
											</Card>
										</TabsContent>
									</Tabs>
								`
          }
        )
      ] }) })
    ] })
  ] }) });
}

// app/routes/base.shadows.tsx
var base_shadows_exports = {};
__export(base_shadows_exports, {
  default: () => Page34,
  headers: () => headers34,
  meta: () => meta34
});
import { jsx as jsx44, jsxs as jsxs37 } from "react/jsx-runtime";
var meta34 = () => [
  { title: "@ngrok/mantle \u2014 Shadows" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers34 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page34() {
  return /* @__PURE__ */ jsxs37("div", { children: [
    /* @__PURE__ */ jsx44("h1", { className: "text-5xl font-medium", children: "Shadows" }),
    /* @__PURE__ */ jsx44("p", { className: "font-body text-body mt-4 text-xl", children: "Tokens for defining elevations." }),
    /* @__PURE__ */ jsxs37("div", { className: "mt-8 flex gap-8", children: [
      /* @__PURE__ */ jsx44("div", { className: "bg-card size-24 rounded-lg shadow-inner" }),
      /* @__PURE__ */ jsx44("div", { className: "bg-card size-24 rounded-lg shadow-sm" }),
      /* @__PURE__ */ jsx44("div", { className: "bg-card size-24 rounded-lg shadow" }),
      /* @__PURE__ */ jsx44("div", { className: "bg-card size-24 rounded-lg shadow-md" }),
      /* @__PURE__ */ jsx44("div", { className: "bg-card size-24 rounded-lg shadow-lg" }),
      /* @__PURE__ */ jsx44("div", { className: "bg-card size-24 rounded-lg shadow-xl" }),
      /* @__PURE__ */ jsx44("div", { className: "bg-card size-24 rounded-lg shadow-2xl" })
    ] })
  ] });
}

// app/routes/base.colors.tsx
var base_colors_exports = {};
__export(base_colors_exports, {
  default: () => Page35,
  headers: () => headers35,
  meta: () => meta35
});
import { Anchor as Anchor16 } from "@ngrok/mantle/anchor";
import { cx as cx5 } from "@ngrok/mantle/cx";
import { InlineCode as InlineCode24 } from "@ngrok/mantle/inline-code";

// app/components/hash-nav-link.tsx
import { Link as Link6, useLocation as useLocation2 } from "@remix-run/react";
import { jsx as jsx45 } from "react/jsx-runtime";
var HashNavLink = ({ className, children, to }) => {
  let location = useLocation2(), hash = typeof to == "string" ? to.split("#").pop() : to.hash, isActive = Boolean(hash && location.hash === `#${hash}`);
  return /* @__PURE__ */ jsx45(
    Link6,
    {
      className: typeof className == "function" ? className(isActive) : className,
      onKeyDown: (event) => {
        event.key === " " && (event.stopPropagation(), event.preventDefault(), event.currentTarget.click());
      },
      tabIndex: 0,
      to,
      children
    }
  );
};

// app/routes/base.colors.tsx
import { jsx as jsx46, jsxs as jsxs38 } from "react/jsx-runtime";
var meta35 = () => [
  { title: "@ngrok/mantle \u2014 Colors" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers35 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page35() {
  return /* @__PURE__ */ jsxs38("div", { className: "relative flex flex-row-reverse gap-9", children: [
    /* @__PURE__ */ jsxs38("nav", { className: "sticky top-6 hidden w-44 self-start lg:block", children: [
      /* @__PURE__ */ jsx46("h3", { className: "text-xs font-medium uppercase tracking-widest", children: "On this page" }),
      /* @__PURE__ */ jsxs38("ul", { className: "text-muted mt-3 flex flex-col gap-2 text-sm", children: [
        /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
          HashNavLink,
          {
            className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
            to: ".#tailwind",
            children: "Tailwind"
          }
        ) }),
        /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
          HashNavLink,
          {
            className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
            to: ".#variables",
            children: "Variables"
          }
        ) }),
        /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
          HashNavLink,
          {
            className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
            to: ".#overrides",
            children: "Overrides"
          }
        ) }),
        /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
          HashNavLink,
          {
            className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
            to: ".#functional-colors",
            children: "Functional Colors"
          }
        ) }),
        /* @__PURE__ */ jsxs38("ul", { className: "ml-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#neutral",
              children: "Neutral"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#accent",
              children: "Accent"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#success",
              children: "Success"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#danger",
              children: "Danger"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#warning",
              children: "Warning"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
          HashNavLink,
          {
            className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
            to: ".#extended-palette",
            children: "Extended Palette"
          }
        ) }),
        /* @__PURE__ */ jsxs38("ul", { className: "ml-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#gray",
              children: "Gray"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#red",
              children: "Red"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#orange",
              children: "Orange"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#amber",
              children: "Amber"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#yellow",
              children: "Yellow"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#lime",
              children: "Lime"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#green",
              children: "Green"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#emerald",
              children: "Emerald"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#teal",
              children: "Teal"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#cyan",
              children: "Cyan"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#sky",
              children: "Sky"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#blue",
              children: "Blue"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#indigo",
              children: "Indigo"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#violet",
              children: "Violet"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#purple",
              children: "Purple"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#fuchsia",
              children: "Fuchsia"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#pink",
              children: "Pink"
            }
          ) }),
          /* @__PURE__ */ jsx46("li", { children: /* @__PURE__ */ jsx46(
            HashNavLink,
            {
              className: (isActive) => cx5("hover:text-strong hover:font-medium", isActive && "text-accent-600 font-medium"),
              to: ".#rose",
              children: "Rose"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs38("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx46("h1", { className: "text-5xl font-medium", children: "Colors" }),
      /* @__PURE__ */ jsx46("p", { className: "font-body text-body mt-4 text-xl", children: "Colors are a key component of any design system. They are used to convey meaning, attract attention, and provide feedback. Mantle\u2019s color system is designed to be accessible and flexible with dark and high contrast modes." }),
      /* @__PURE__ */ jsx46("h2", { id: "tailwind", className: "mt-8 text-3xl font-medium", children: "Tailwind" }),
      /* @__PURE__ */ jsxs38("p", { className: "font-body text-body mt-3", children: [
        "Mantle uses Tailwind under the hood for all its CSS styling. However, we differ from Tailwind when it comes to colors. Mantle provides a full color library that automatically provides a dark and high contrast modes. This is different from standard Tailwind usage that ",
        /* @__PURE__ */ jsx46("em", { children: "requires" }),
        " dark class variations. By simply specifying light colors provided by Mantle, you\u2019ll get dark and high contrast modes for free. If you require additional customization, you can provide dark variant classes as an override."
      ] }),
      /* @__PURE__ */ jsx46("h2", { id: "variables", className: "mt-8 text-3xl font-medium", children: "Variables" }),
      /* @__PURE__ */ jsxs38("p", { className: "font-body text-body mt-3", children: [
        "Mantle\u2019s colors are delivered as CSS variables via Tailwind\u2019s API eg.",
        " ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: ".text-blue-500" }),
        ". They can be directly accessed via",
        " ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: "var(--blue-500)" }),
        " but do note that you\u2019ll need to wrap everything in",
        " ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: "hsl()" }),
        " like so: ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: "hsl(var(--blue-500))" }),
        ". This allows for Tailwind operations like ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: "text-blue-500/25" }),
        "."
      ] }),
      /* @__PURE__ */ jsx46("h2", { id: "overrides", className: "mt-8 text-3xl font-medium", children: "Overrides" }),
      /* @__PURE__ */ jsxs38("p", { className: "font-body text-body mt-3", children: [
        "Most colors should appropriately swap for sensible values in dark and high contrast modes. However, there are often cases where you\u2019ll need to specify an override. The ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: "dark:" }),
        " variant is well-documented on ",
        /* @__PURE__ */ jsx46(Anchor16, { href: "https://tailwindcss.com/docs/dark-mode", children: "Tailwind\u2019s website" }),
        ". Mantle provides additional variants for high contrast and dark high contrast mode with",
        " ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: "high-contrast:" }),
        " and ",
        /* @__PURE__ */ jsx46(InlineCode24, { children: "dark-high-contrast:" }),
        " respectively."
      ] }),
      /* @__PURE__ */ jsx46("h2", { id: "functional-colors", className: "mt-8 text-3xl font-medium", children: "Functional Colors" }),
      /* @__PURE__ */ jsx46("p", { className: "font-body text-body mt-3", children: "Mantle generally limits its color choices to the following functional colors for primary actions, and various states like danger and warnings." }),
      /* @__PURE__ */ jsx46("h3", { id: "neutral", className: "mt-8 text-xl font-medium", children: "Neutral" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-neutral-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "accent", className: "mt-8 text-xl font-medium", children: "Accent" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-950 h-10 w-full rounded" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-900 h-10 w-full rounded" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-800 h-10 w-full rounded" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-700 h-10 w-full rounded" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-600 h-10 w-full rounded" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-500 h-10 w-full rounded" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-400 h-10 w-full rounded" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-300 h-10 w-full rounded" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-200 h-10 w-full rounded" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-100 h-10 w-full rounded" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-accent-50 h-10 w-full rounded" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "success", className: "mt-8 flex items-center gap-2 text-xl font-medium", children: "Success" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-950 h-10 w-full rounded" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-900 h-10 w-full rounded" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-800 h-10 w-full rounded" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-700 h-10 w-full rounded" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-600 h-10 w-full rounded" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-500 h-10 w-full rounded" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-400 h-10 w-full rounded" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-300 h-10 w-full rounded" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-200 h-10 w-full rounded" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-100 h-10 w-full rounded" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-success-50 h-10 w-full rounded" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "danger", className: "mt-8 text-xl font-medium", children: "Danger" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-950 h-10 w-full rounded" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-900 h-10 w-full rounded" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-800 h-10 w-full rounded" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-700 h-10 w-full rounded" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-600 h-10 w-full rounded" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-500 h-10 w-full rounded" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-400 h-10 w-full rounded" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-300 h-10 w-full rounded" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-200 h-10 w-full rounded" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-100 h-10 w-full rounded" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-danger-50 h-10 w-full rounded" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "warning", className: "mt-8 text-xl font-medium", children: "Warning" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-950 h-10 w-full rounded" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-900 h-10 w-full rounded" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-800 h-10 w-full rounded" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-700 h-10 w-full rounded" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-600 h-10 w-full rounded" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-500 h-10 w-full rounded" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-400 h-10 w-full rounded" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-300 h-10 w-full rounded" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-200 h-10 w-full rounded" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-100 h-10 w-full rounded" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "bg-warning-50 h-10 w-full rounded" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h2", { id: "extended-palette", className: "mt-16 text-3xl font-medium", children: "Extended Palette" }),
      /* @__PURE__ */ jsx46("p", { className: "font-body text-body mt-3", children: "Mantle also supports the entirety of Tailwind\u2019s color palette in light, dark, and high contrast variants. These are to be used when there is no functional meaning behind the color choice. However, we\u2019ve left out the extended collection of Tailwind\u2019s grays eg. slate, zinc, etc. since we only want to use our own custom branded gray." }),
      /* @__PURE__ */ jsx46("h3", { id: "gray", className: "mt-8 text-xl font-medium", children: "Gray" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-gray-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "red", className: "mt-8 text-xl font-medium", children: "Red" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-red-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "orange", className: "mt-8 text-xl font-medium", children: "Orange" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-orange-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "amber", className: "mt-8 text-xl font-medium", children: "Amber" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-amber-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "yellow", className: "mt-8 text-xl font-medium", children: "Yellow" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-yellow-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "lime", className: "mt-8 text-xl font-medium", children: "Lime" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-lime-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "green", className: "mt-8 flex items-center gap-2 text-xl font-medium", children: "Green" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-green-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "emerald", className: "mt-8 text-xl font-medium", children: "Emerald" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-emerald-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "teal", className: "mt-8 text-xl font-medium", children: "Teal" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-teal-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "cyan", className: "mt-8 text-xl font-medium", children: "Cyan" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-cyan-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "sky", className: "mt-8 text-xl font-medium", children: "Sky" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-sky-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "blue", className: "mt-8 text-xl font-medium", children: "Blue" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-blue-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "indigo", className: "mt-8 text-xl font-medium", children: "Indigo" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-indigo-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "violet", className: "mt-8 text-xl font-medium", children: "Violet" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-violet-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "purple", className: "mt-8 text-xl font-medium", children: "Purple" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-purple-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "fuchsia", className: "mt-8 text-xl font-medium", children: "Fuchsia" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-fuchsia-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "pink", className: "mt-8 text-xl font-medium", children: "Pink" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-pink-50" }),
          "50"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("h3", { id: "rose", className: "mt-8 text-xl font-medium", children: "Rose" }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-950" }),
          "950"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-900" }),
          "900"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-800" }),
          "800"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-700" }),
          "700"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-600" }),
          "600"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-500" }),
          "500"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-400" }),
          "400"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-300" }),
          "300"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-200" }),
          "200"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-100" }),
          "100"
        ] }),
        /* @__PURE__ */ jsxs38("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ jsx46("div", { className: "h-10 w-full rounded bg-rose-50" }),
          "50"
        ] })
      ] })
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Page36,
  headers: () => headers36,
  meta: () => meta36
});
import { Anchor as Anchor17 } from "@ngrok/mantle/anchor";
import {
  CodeBlock as CodeBlock32,
  CodeBlockBody as CodeBlockBody32,
  CodeBlockCode as CodeBlockCode32,
  CodeBlockCopyButton as CodeBlockCopyButton32,
  CodeBlockHeader as CodeBlockHeader3,
  fmtCode as fmtCode32
} from "@ngrok/mantle/code-block";
import { InlineCode as InlineCode25 } from "@ngrok/mantle/inline-code";
import { Table as Table5, TableBody as TableBody5, TableCell as TableCell5, TableHead as TableHead5, TableHeader as TableHeader5, TableRow as TableRow5 } from "@ngrok/mantle/table";
import { jsx as jsx47, jsxs as jsxs39 } from "react/jsx-runtime";
var meta36 = () => [
  { title: "@ngrok/mantle" },
  { name: "description", content: "mantle is ngrok's UI library and design system" }
], headers36 = () => ({
  "Cache-Control": "max-age=300, stale-while-revalidate=604800"
});
function Page36() {
  return /* @__PURE__ */ jsxs39("div", { children: [
    /* @__PURE__ */ jsx47("h1", { className: "text-5xl font-medium", children: "Mantle" }),
    /* @__PURE__ */ jsxs39("p", { className: "font-weight font-body text-body mt-4 text-xl", children: [
      "Mantle is ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://ngrok.com", children: "ngrok" }),
      "\u2019s UI library and design system that powers its front-end."
    ] }),
    /* @__PURE__ */ jsx47("h2", { id: "overview", className: "mt-8 text-3xl font-medium", children: "Overview" }),
    /* @__PURE__ */ jsx47("h3", { id: "dependencies", className: "mt-6 text-xl font-medium", children: "Dependencies" }),
    /* @__PURE__ */ jsxs39("p", { className: "font-body text-body mt-3", children: [
      "Mantle\u2019s styling is composed using ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://tailwindcss.com", children: "Tailwind" }),
      ". Its",
      " ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://react.dev", children: "React" }),
      " components are inspired by",
      " ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://ui.shadcn.com", children: "shadcn/ui" }),
      "\u2019s markup and ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://www.radix-ui.com", children: "Radix" }),
      "\u2019s primitives. Its documentation is built in ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://remix.run/", children: "Remix" }),
      "."
    ] }),
    /* @__PURE__ */ jsx47("h3", { id: "status", className: "mt-8 text-xl font-medium", children: "Status" }),
    /* @__PURE__ */ jsx47("p", { className: "font-body text-body mt-3", children: "Mantle is a work in progress that\u2019s currently adding components. It intends to replace new and existing ngrok user interfaces." }),
    /* @__PURE__ */ jsxs39("p", { className: "font-body text-body mt-3", children: [
      "Mantle is available in its alpha state on",
      " ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://www.npmjs.com/package/@ngrok/mantle", children: "NPM" }),
      ". It is open source and available on",
      " ",
      /* @__PURE__ */ jsx47(Anchor17, { href: "https://github.com/ngrok-oss/mantle", children: "GitHub" }),
      "."
    ] }),
    /* @__PURE__ */ jsx47("h2", { className: "mt-12 text-3xl font-medium", children: "Setup" }),
    /* @__PURE__ */ jsxs39("p", { className: "font-body text-body mt-3", children: [
      "Start by installing ",
      /* @__PURE__ */ jsx47(InlineCode25, { children: "@ngrok/mantle" }),
      " with your preferred package manager:"
    ] }),
    /* @__PURE__ */ jsx47("div", { className: "border-card mt-4 overflow-hidden rounded-lg border", children: /* @__PURE__ */ jsxs39(Table5, { children: [
      /* @__PURE__ */ jsx47(TableHeader5, { children: /* @__PURE__ */ jsxs39(TableRow5, { children: [
        /* @__PURE__ */ jsx47(TableHead5, { children: "Package Manager" }),
        /* @__PURE__ */ jsx47(TableHead5, { children: "Command" })
      ] }) }),
      /* @__PURE__ */ jsxs39(TableBody5, { children: [
        /* @__PURE__ */ jsxs39(TableRow5, { children: [
          /* @__PURE__ */ jsx47(TableCell5, { className: "font-body", children: "npm" }),
          /* @__PURE__ */ jsx47(TableCell5, { children: /* @__PURE__ */ jsx47(CodeBlock32, { children: /* @__PURE__ */ jsxs39(CodeBlockBody32, { children: [
            /* @__PURE__ */ jsx47(CodeBlockCopyButton32, {}),
            /* @__PURE__ */ jsx47(CodeBlockCode32, { language: "sh", value: fmtCode32`npm install -E @ngrok/mantle` })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs39(TableRow5, { children: [
          /* @__PURE__ */ jsx47(TableCell5, { className: "font-body", children: "yarn" }),
          /* @__PURE__ */ jsx47(TableCell5, { children: /* @__PURE__ */ jsx47(CodeBlock32, { children: /* @__PURE__ */ jsxs39(CodeBlockBody32, { children: [
            /* @__PURE__ */ jsx47(CodeBlockCopyButton32, {}),
            /* @__PURE__ */ jsx47(CodeBlockCode32, { language: "sh", value: fmtCode32`yarn add -E @ngrok/mantle` })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs39(TableRow5, { children: [
          /* @__PURE__ */ jsx47(TableCell5, { className: "font-body", children: "pnpm" }),
          /* @__PURE__ */ jsx47(TableCell5, { children: /* @__PURE__ */ jsx47(CodeBlock32, { children: /* @__PURE__ */ jsxs39(CodeBlockBody32, { children: [
            /* @__PURE__ */ jsx47(CodeBlockCopyButton32, {}),
            /* @__PURE__ */ jsx47(CodeBlockCode32, { language: "sh", value: fmtCode32`pnpm add -E @ngrok/mantle` })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs39(TableRow5, { children: [
          /* @__PURE__ */ jsx47(TableCell5, { className: "font-body", children: "bun" }),
          /* @__PURE__ */ jsx47(TableCell5, { children: /* @__PURE__ */ jsx47(CodeBlock32, { children: /* @__PURE__ */ jsxs39(CodeBlockBody32, { children: [
            /* @__PURE__ */ jsx47(CodeBlockCopyButton32, {}),
            /* @__PURE__ */ jsx47(CodeBlockCode32, { language: "sh", value: fmtCode32`bun add -E @ngrok/mantle` })
          ] }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs39("section", { children: [
      /* @__PURE__ */ jsx47("h2", { className: "mt-8 text-xl font-medium", children: "Tailwind Configuration" }),
      /* @__PURE__ */ jsxs39("p", { className: "font-body text-body mt-3", children: [
        "Then, add the ",
        /* @__PURE__ */ jsx47(Anchor17, { href: "https://tailwindcss.com/docs/presets", children: "tailwind preset" }),
        " and mantle content to your tailwind configuration:"
      ] }),
      /* @__PURE__ */ jsxs39(CodeBlock32, { className: "mt-4", children: [
        /* @__PURE__ */ jsx47(CodeBlockHeader3, { children: "tailwind.config.ts" }),
        /* @__PURE__ */ jsxs39(CodeBlockBody32, { children: [
          /* @__PURE__ */ jsx47(CodeBlockCopyButton32, {}),
          /* @__PURE__ */ jsx47(
            CodeBlockCode32,
            {
              language: "ts",
              value: fmtCode32`
								import { createRequire } from "node:module";
								import { mantlePreset, resolveMantleContentGlob } from "@ngrok/mantle/tailwind-preset";
								import type { Config } from "tailwindcss";

								const require = createRequire(import.meta.url);

								export default {
									presets: [mantlePreset],
									content: [resolveMantleContentGlob(require), "./app/**/*.tsx"], // 👈 don't forget to swap out app content glob here!
									// ... the rest of your tailwind config!
								} satisfies Config;
							`
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs39("section", { children: [
      /* @__PURE__ */ jsx47("h2", { className: "mt-8 text-xl font-medium", children: "Application Scaffolding" }),
      /* @__PURE__ */ jsxs39("p", { className: "font-body text-body mt-3", children: [
        "In your application\u2019s entry/root, import the ",
        /* @__PURE__ */ jsx47(InlineCode25, { children: "mantle.css" }),
        " file to apply the mantle styles:"
      ] }),
      /* @__PURE__ */ jsxs39(CodeBlock32, { className: "mt-4", children: [
        /* @__PURE__ */ jsx47(CodeBlockHeader3, { children: "root.tsx" }),
        /* @__PURE__ */ jsxs39(CodeBlockBody32, { children: [
          /* @__PURE__ */ jsx47(CodeBlockCopyButton32, {}),
          /* @__PURE__ */ jsx47(
            CodeBlockCode32,
            {
              language: "tsx",
              value: fmtCode32`
							import { StrictMode } from "react";
							import { createRoot } from "react-dom/client";

							// 👇 add this import to your root file to apply mantle styles! 👇
							import "@ngrok/mantle/mantle.css";
							
							const container = window.document.getElementById("app");
							
							if (!container) {
								throw new Error("Something went wrong: cannot render application! Please refresh the page to try again.");
							}
							
							const root = createRoot(container);
							
							root.render(
								<StrictMode>
									<App />
								</StrictMode>,
							);
						`
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs39("p", { className: "font-body text-body mt-8", children: [
        "Next, you should add the ",
        /* @__PURE__ */ jsx47(Link3, { to: "/components/theme-provider", children: "Theme Provider" }),
        " to your application to provide the mantle theme to your components. You are now ready to use mantle components in your application!"
      ] }),
      /* @__PURE__ */ jsxs39("p", { className: "font-body text-body mt-4", children: [
        "You are now ready to use mantle components in your application! For example, you can use the",
        " ",
        /* @__PURE__ */ jsx47(Link3, { to: "/components/button", children: "Button" }),
        "!"
      ] })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QHOX2YUT.js", imports: ["/build/_shared/chunk-LXOI3BT3.js", "/build/_shared/chunk-YBB4Z6DW.js", "/build/_shared/chunk-SQBGVNFG.js", "/build/_shared/chunk-QDA5CGMH.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZAMWQL6X.js", imports: ["/build/_shared/chunk-BD44QYBD.js", "/build/_shared/chunk-ODGZY62S.js", "/build/_shared/chunk-LED24UZ7.js", "/build/_shared/chunk-HBL2DZLX.js", "/build/_shared/chunk-SMSJSCZJ.js", "/build/_shared/chunk-5UUARVAH.js", "/build/_shared/chunk-2RA6QBTR.js", "/build/_shared/chunk-EN7PWXPS.js", "/build/_shared/chunk-V6NRL2B2.js", "/build/_shared/chunk-2SMIENYH.js", "/build/_shared/chunk-3YZGYUY3.js", "/build/_shared/chunk-LD7P7WUX.js", "/build/_shared/chunk-AFUBJ33G.js", "/build/_shared/chunk-UEOFND7X.js", "/build/_shared/chunk-F4CGZL4B.js", "/build/_shared/chunk-QLWHGWSQ.js", "/build/_shared/chunk-4CQPBNMS.js", "/build/_shared/chunk-D36BACC2.js", "/build/_shared/chunk-YYUGFPNA.js", "/build/_shared/chunk-B65FA2P7.js", "/build/_shared/chunk-AN5AQZWP.js", "/build/_shared/chunk-AFVJBJ7U.js", "/build/_shared/chunk-WWFNUYL5.js", "/build/_shared/chunk-UYLQA7CX.js", "/build/_shared/chunk-5U3QKZBD.js", "/build/_shared/chunk-3YTQ7E44.js", "/build/_shared/chunk-I4CY5NX7.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UWWIV3ZQ.js", imports: ["/build/_shared/chunk-BEWXWEVD.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/base.colors": { id: "routes/base.colors", parentId: "root", path: "base/colors", index: void 0, caseSensitive: void 0, module: "/build/routes/base.colors-H7OJBXOF.js", imports: ["/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/base.shadows": { id: "routes/base.shadows", parentId: "root", path: "base/shadows", index: void 0, caseSensitive: void 0, module: "/build/routes/base.shadows-AO6RFPB6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/base.tailwind-variants": { id: "routes/base.tailwind-variants", parentId: "root", path: "base/tailwind-variants", index: void 0, caseSensitive: void 0, module: "/build/routes/base.tailwind-variants-ZZTXLECQ.js", imports: ["/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KK737ADX.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/base.typography": { id: "routes/base.typography", parentId: "root", path: "base/typography", index: void 0, caseSensitive: void 0, module: "/build/routes/base.typography-4M75BUAQ.js", imports: ["/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KK737ADX.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.alert": { id: "routes/components.alert", parentId: "root", path: "components/alert", index: void 0, caseSensitive: void 0, module: "/build/routes/components.alert-T2WPOQMQ.js", imports: ["/build/_shared/chunk-FZI76252.js", "/build/_shared/chunk-M7TSVJTU.js", "/build/_shared/chunk-MJO5TXUY.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.anchor": { id: "routes/components.anchor", parentId: "root", path: "components/anchor", index: void 0, caseSensitive: void 0, module: "/build/routes/components.anchor-FV5FV74X.js", imports: ["/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.badge": { id: "routes/components.badge", parentId: "root", path: "components/badge", index: void 0, caseSensitive: void 0, module: "/build/routes/components.badge-KUBUCOTW.js", imports: ["/build/_shared/chunk-BEWXWEVD.js", "/build/_shared/chunk-3BCQHHZN.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.button": { id: "routes/components.button", parentId: "root", path: "components/button", index: void 0, caseSensitive: void 0, module: "/build/routes/components.button-7RIQ7KST.js", imports: ["/build/_shared/chunk-EFNGN3AP.js", "/build/_shared/chunk-TRM4O6NC.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.card": { id: "routes/components.card", parentId: "root", path: "components/card", index: void 0, caseSensitive: void 0, module: "/build/routes/components.card-HW5NWS5H.js", imports: ["/build/_shared/chunk-M7TSVJTU.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.checkbox": { id: "routes/components.checkbox", parentId: "root", path: "components/checkbox", index: void 0, caseSensitive: void 0, module: "/build/routes/components.checkbox-7XU6EYH6.js", imports: ["/build/_shared/chunk-QATG3HH7.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.code-block": { id: "routes/components.code-block", parentId: "root", path: "components/code-block", index: void 0, caseSensitive: void 0, module: "/build/routes/components.code-block-N5O2VO4D.js", imports: ["/build/_shared/chunk-M7TSVJTU.js", "/build/_shared/chunk-KVCFXNHB.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.dialog": { id: "routes/components.dialog", parentId: "root", path: "components/dialog", index: void 0, caseSensitive: void 0, module: "/build/routes/components.dialog-WBKKV6QQ.js", imports: ["/build/_shared/chunk-2LZGKDOK.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.dropdown-menu": { id: "routes/components.dropdown-menu", parentId: "root", path: "components/dropdown-menu", index: void 0, caseSensitive: void 0, module: "/build/routes/components.dropdown-menu-OSFMQSXK.js", imports: ["/build/_shared/chunk-3JYITFQH.js", "/build/_shared/chunk-T664WHEH.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.icon": { id: "routes/components.icon", parentId: "root", path: "components/icon", index: void 0, caseSensitive: void 0, module: "/build/routes/components.icon-VY3RITSQ.js", imports: ["/build/_shared/chunk-EFNGN3AP.js", "/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.icon-button": { id: "routes/components.icon-button", parentId: "root", path: "components/icon-button", index: void 0, caseSensitive: void 0, module: "/build/routes/components.icon-button-ONVIDOXD.js", imports: ["/build/_shared/chunk-XBHCEYFL.js", "/build/_shared/chunk-TRM4O6NC.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.inline-code": { id: "routes/components.inline-code", parentId: "root", path: "components/inline-code", index: void 0, caseSensitive: void 0, module: "/build/routes/components.inline-code-RA5FK7YX.js", imports: ["/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.input": { id: "routes/components.input", parentId: "root", path: "components/input", index: void 0, caseSensitive: void 0, module: "/build/routes/components.input-CGMM2IBI.js", imports: ["/build/_shared/chunk-FZI76252.js", "/build/_shared/chunk-TRM4O6NC.js", "/build/_shared/chunk-QATG3HH7.js", "/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-E2EIXG5P.js", "/build/_shared/chunk-MJO5TXUY.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.label": { id: "routes/components.label", parentId: "root", path: "components/label", index: void 0, caseSensitive: void 0, module: "/build/routes/components.label-6NH67SIN.js", imports: ["/build/_shared/chunk-QATG3HH7.js", "/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-E2EIXG5P.js", "/build/_shared/chunk-MJO5TXUY.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.media-object": { id: "routes/components.media-object", parentId: "root", path: "components/media-object", index: void 0, caseSensitive: void 0, module: "/build/routes/components.media-object-YL4UZFVP.js", imports: ["/build/_shared/chunk-QJ26DRS5.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.password-input": { id: "routes/components.password-input", parentId: "root", path: "components/password-input", index: void 0, caseSensitive: void 0, module: "/build/routes/components.password-input-KX3ZBWEV.js", imports: ["/build/_shared/chunk-QATG3HH7.js", "/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-E2EIXG5P.js", "/build/_shared/chunk-MJO5TXUY.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.preview.calendar": { id: "routes/components.preview.calendar", parentId: "root", path: "components/preview/calendar", index: void 0, caseSensitive: void 0, module: "/build/routes/components.preview.calendar-Z2IYCJQI.js", imports: ["/build/_shared/chunk-T664WHEH.js", "/build/_shared/chunk-GDSAJ3YE.js", "/build/_shared/chunk-3BCQHHZN.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.preview.popover": { id: "routes/components.preview.popover", parentId: "root", path: "components/preview/popover", index: void 0, caseSensitive: void 0, module: "/build/routes/components.preview.popover-ZXZ2ZJCE.js", imports: ["/build/_shared/chunk-GDSAJ3YE.js", "/build/_shared/chunk-3BCQHHZN.js", "/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-E2EIXG5P.js", "/build/_shared/chunk-MJO5TXUY.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.preview.tooltip": { id: "routes/components.preview.tooltip", parentId: "root", path: "components/preview/tooltip", index: void 0, caseSensitive: void 0, module: "/build/routes/components.preview.tooltip-XJATEZUP.js", imports: ["/build/_shared/chunk-GDSAJ3YE.js", "/build/_shared/chunk-3BCQHHZN.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.progress-donut": { id: "routes/components.progress-donut", parentId: "root", path: "components/progress-donut", index: void 0, caseSensitive: void 0, module: "/build/routes/components.progress-donut-7S3ZETK3.js", imports: ["/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.radio-group": { id: "routes/components.radio-group", parentId: "root", path: "components/radio-group", index: void 0, caseSensitive: void 0, module: "/build/routes/components.radio-group-C7F5EHYY.js", imports: ["/build/_shared/chunk-E2EIXG5P.js", "/build/_shared/chunk-MJO5TXUY.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.select": { id: "routes/components.select", parentId: "root", path: "components/select", index: void 0, caseSensitive: void 0, module: "/build/routes/components.select-ZLZLTQAA.js", imports: ["/build/_shared/chunk-BEWXWEVD.js", "/build/_shared/chunk-QATG3HH7.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.separator": { id: "routes/components.separator", parentId: "root", path: "components/separator", index: void 0, caseSensitive: void 0, module: "/build/routes/components.separator-O3VG76RT.js", imports: ["/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.sheet": { id: "routes/components.sheet", parentId: "root", path: "components/sheet", index: void 0, caseSensitive: void 0, module: "/build/routes/components.sheet-6JTFBHWI.js", imports: ["/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-2LZGKDOK.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.skeleton": { id: "routes/components.skeleton", parentId: "root", path: "components/skeleton", index: void 0, caseSensitive: void 0, module: "/build/routes/components.skeleton-OGFGMZL7.js", imports: ["/build/_shared/chunk-BEWXWEVD.js", "/build/_shared/chunk-QJ26DRS5.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.switch": { id: "routes/components.switch", parentId: "root", path: "components/switch", index: void 0, caseSensitive: void 0, module: "/build/routes/components.switch-RT6ZYO2O.js", imports: ["/build/_shared/chunk-QATG3HH7.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.table": { id: "routes/components.table", parentId: "root", path: "components/table", index: void 0, caseSensitive: void 0, module: "/build/routes/components.table-25UJ5JDP.js", imports: ["/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.tabs": { id: "routes/components.tabs", parentId: "root", path: "components/tabs", index: void 0, caseSensitive: void 0, module: "/build/routes/components.tabs-3GQ7HDMI.js", imports: ["/build/_shared/chunk-3JYITFQH.js", "/build/_shared/chunk-XBHCEYFL.js", "/build/_shared/chunk-M7TSVJTU.js", "/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-E2EIXG5P.js", "/build/_shared/chunk-MJO5TXUY.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.text-area": { id: "routes/components.text-area", parentId: "root", path: "components/text-area", index: void 0, caseSensitive: void 0, module: "/build/routes/components.text-area-IWSQQVIC.js", imports: ["/build/_shared/chunk-QATG3HH7.js", "/build/_shared/chunk-R6Q5KFLB.js", "/build/_shared/chunk-OWVN64HW.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.theme-provider": { id: "routes/components.theme-provider", parentId: "root", path: "components/theme-provider", index: void 0, caseSensitive: void 0, module: "/build/routes/components.theme-provider-VP5R6EE4.js", imports: ["/build/_shared/chunk-KVCFXNHB.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.unreleased.data-table": { id: "routes/components.unreleased.data-table", parentId: "root", path: "components/unreleased/data-table", index: void 0, caseSensitive: void 0, module: "/build/routes/components.unreleased.data-table-EM2DLLDV.js", imports: ["/build/_shared/chunk-GDSAJ3YE.js", "/build/_shared/chunk-3BCQHHZN.js", "/build/_shared/chunk-KNSIEFAX.js", "/build/_shared/chunk-KK737ADX.js", "/build/_shared/chunk-FSLJRMMD.js", "/build/_shared/chunk-U623FORG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "35728f1d", hmr: void 0, url: "/build/manifest-35728F1D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1, unstable_lazyRouteDiscovery: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/components.unreleased.data-table": {
    id: "routes/components.unreleased.data-table",
    parentId: "root",
    path: "components/unreleased/data-table",
    index: void 0,
    caseSensitive: void 0,
    module: components_unreleased_data_table_exports
  },
  "routes/components.preview.calendar": {
    id: "routes/components.preview.calendar",
    parentId: "root",
    path: "components/preview/calendar",
    index: void 0,
    caseSensitive: void 0,
    module: components_preview_calendar_exports
  },
  "routes/components.preview.popover": {
    id: "routes/components.preview.popover",
    parentId: "root",
    path: "components/preview/popover",
    index: void 0,
    caseSensitive: void 0,
    module: components_preview_popover_exports
  },
  "routes/components.preview.tooltip": {
    id: "routes/components.preview.tooltip",
    parentId: "root",
    path: "components/preview/tooltip",
    index: void 0,
    caseSensitive: void 0,
    module: components_preview_tooltip_exports
  },
  "routes/components.password-input": {
    id: "routes/components.password-input",
    parentId: "root",
    path: "components/password-input",
    index: void 0,
    caseSensitive: void 0,
    module: components_password_input_exports
  },
  "routes/components.progress-donut": {
    id: "routes/components.progress-donut",
    parentId: "root",
    path: "components/progress-donut",
    index: void 0,
    caseSensitive: void 0,
    module: components_progress_donut_exports
  },
  "routes/components.theme-provider": {
    id: "routes/components.theme-provider",
    parentId: "root",
    path: "components/theme-provider",
    index: void 0,
    caseSensitive: void 0,
    module: components_theme_provider_exports
  },
  "routes/components.dropdown-menu": {
    id: "routes/components.dropdown-menu",
    parentId: "root",
    path: "components/dropdown-menu",
    index: void 0,
    caseSensitive: void 0,
    module: components_dropdown_menu_exports
  },
  "routes/components.media-object": {
    id: "routes/components.media-object",
    parentId: "root",
    path: "components/media-object",
    index: void 0,
    caseSensitive: void 0,
    module: components_media_object_exports
  },
  "routes/base.tailwind-variants": {
    id: "routes/base.tailwind-variants",
    parentId: "root",
    path: "base/tailwind-variants",
    index: void 0,
    caseSensitive: void 0,
    module: base_tailwind_variants_exports
  },
  "routes/components.icon-button": {
    id: "routes/components.icon-button",
    parentId: "root",
    path: "components/icon-button",
    index: void 0,
    caseSensitive: void 0,
    module: components_icon_button_exports
  },
  "routes/components.inline-code": {
    id: "routes/components.inline-code",
    parentId: "root",
    path: "components/inline-code",
    index: void 0,
    caseSensitive: void 0,
    module: components_inline_code_exports
  },
  "routes/components.radio-group": {
    id: "routes/components.radio-group",
    parentId: "root",
    path: "components/radio-group",
    index: void 0,
    caseSensitive: void 0,
    module: components_radio_group_exports
  },
  "routes/components.code-block": {
    id: "routes/components.code-block",
    parentId: "root",
    path: "components/code-block",
    index: void 0,
    caseSensitive: void 0,
    module: components_code_block_exports
  },
  "routes/components.separator": {
    id: "routes/components.separator",
    parentId: "root",
    path: "components/separator",
    index: void 0,
    caseSensitive: void 0,
    module: components_separator_exports
  },
  "routes/components.text-area": {
    id: "routes/components.text-area",
    parentId: "root",
    path: "components/text-area",
    index: void 0,
    caseSensitive: void 0,
    module: components_text_area_exports
  },
  "routes/components.checkbox": {
    id: "routes/components.checkbox",
    parentId: "root",
    path: "components/checkbox",
    index: void 0,
    caseSensitive: void 0,
    module: components_checkbox_exports
  },
  "routes/components.skeleton": {
    id: "routes/components.skeleton",
    parentId: "root",
    path: "components/skeleton",
    index: void 0,
    caseSensitive: void 0,
    module: components_skeleton_exports
  },
  "routes/components.anchor": {
    id: "routes/components.anchor",
    parentId: "root",
    path: "components/anchor",
    index: void 0,
    caseSensitive: void 0,
    module: components_anchor_exports
  },
  "routes/components.button": {
    id: "routes/components.button",
    parentId: "root",
    path: "components/button",
    index: void 0,
    caseSensitive: void 0,
    module: components_button_exports
  },
  "routes/components.dialog": {
    id: "routes/components.dialog",
    parentId: "root",
    path: "components/dialog",
    index: void 0,
    caseSensitive: void 0,
    module: components_dialog_exports
  },
  "routes/components.select": {
    id: "routes/components.select",
    parentId: "root",
    path: "components/select",
    index: void 0,
    caseSensitive: void 0,
    module: components_select_exports
  },
  "routes/components.switch": {
    id: "routes/components.switch",
    parentId: "root",
    path: "components/switch",
    index: void 0,
    caseSensitive: void 0,
    module: components_switch_exports
  },
  "routes/components.alert": {
    id: "routes/components.alert",
    parentId: "root",
    path: "components/alert",
    index: void 0,
    caseSensitive: void 0,
    module: components_alert_exports
  },
  "routes/components.badge": {
    id: "routes/components.badge",
    parentId: "root",
    path: "components/badge",
    index: void 0,
    caseSensitive: void 0,
    module: components_badge_exports
  },
  "routes/components.input": {
    id: "routes/components.input",
    parentId: "root",
    path: "components/input",
    index: void 0,
    caseSensitive: void 0,
    module: components_input_exports
  },
  "routes/components.label": {
    id: "routes/components.label",
    parentId: "root",
    path: "components/label",
    index: void 0,
    caseSensitive: void 0,
    module: components_label_exports
  },
  "routes/components.sheet": {
    id: "routes/components.sheet",
    parentId: "root",
    path: "components/sheet",
    index: void 0,
    caseSensitive: void 0,
    module: components_sheet_exports
  },
  "routes/components.table": {
    id: "routes/components.table",
    parentId: "root",
    path: "components/table",
    index: void 0,
    caseSensitive: void 0,
    module: components_table_exports
  },
  "routes/base.typography": {
    id: "routes/base.typography",
    parentId: "root",
    path: "base/typography",
    index: void 0,
    caseSensitive: void 0,
    module: base_typography_exports
  },
  "routes/components.card": {
    id: "routes/components.card",
    parentId: "root",
    path: "components/card",
    index: void 0,
    caseSensitive: void 0,
    module: components_card_exports
  },
  "routes/components.icon": {
    id: "routes/components.icon",
    parentId: "root",
    path: "components/icon",
    index: void 0,
    caseSensitive: void 0,
    module: components_icon_exports
  },
  "routes/components.tabs": {
    id: "routes/components.tabs",
    parentId: "root",
    path: "components/tabs",
    index: void 0,
    caseSensitive: void 0,
    module: components_tabs_exports
  },
  "routes/base.shadows": {
    id: "routes/base.shadows",
    parentId: "root",
    path: "base/shadows",
    index: void 0,
    caseSensitive: void 0,
    module: base_shadows_exports
  },
  "routes/base.colors": {
    id: "routes/base.colors",
    parentId: "root",
    path: "base/colors",
    index: void 0,
    caseSensitive: void 0,
    module: base_colors_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
