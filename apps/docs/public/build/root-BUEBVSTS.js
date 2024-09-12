import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from "/build/_shared/chunk-76VEOZXT.js";
import "/build/_shared/chunk-3V5PLWGK.js";
import {
  MantleThemeHeadContent,
  ThemeProvider,
  isTheme,
  theme,
  useInitialHtmlThemeProps,
  useTheme
} from "/build/_shared/chunk-RTLF2Q3V.js";
import {
  I
} from "/build/_shared/chunk-Y2RWYPIB.js";
import "/build/_shared/chunk-ZYLV2OEO.js";
import "/build/_shared/chunk-SZ2MWSLF.js";
import {
  R
} from "/build/_shared/chunk-CK4ERQXV.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-TFWTF37R.js";
import "/build/_shared/chunk-OYR227OB.js";
import "/build/_shared/chunk-NG7IOVW6.js";
import "/build/_shared/chunk-4ETGGIWM.js";
import {
  Button
} from "/build/_shared/chunk-SHVMSGFH.js";
import "/build/_shared/chunk-ATBEVGT6.js";
import "/build/_shared/chunk-76G7XZOH.js";
import "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
import {
  useIsomorphicLayoutEffect,
  usePrefersReducedMotion
} from "/build/_shared/chunk-PFGKW4LA.js";
import {
  TooltipProvider
} from "/build/_shared/chunk-PH4L52LR.js";
import "/build/_shared/chunk-YB45JGV3.js";
import "/build/_shared/chunk-IC4IMGCE.js";
import "/build/_shared/chunk-TYVC565J.js";
import "/build/_shared/chunk-DJ4VH3J3.js";
import "/build/_shared/chunk-UPCWMVF7.js";
import "/build/_shared/chunk-YXKBN4EE.js";
import "/build/_shared/chunk-JDR2CS4I.js";
import "/build/_shared/chunk-B3GOHHOF.js";
import "/build/_shared/chunk-3LE3N7DD.js";
import "/build/_shared/chunk-ET7BOX4G.js";
import {
  b
} from "/build/_shared/chunk-L6J2GUHO.js";
import {
  cx
} from "/build/_shared/chunk-ACY2JGBA.js";
import {
  createHotContext
} from "/build/_shared/chunk-T2SS4IJE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ANPTKELO.js";
import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import "/build/_shared/chunk-VJGIG3I4.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// assets/mantle.css
var mantle_default = "/build/_assets/mantle-X4BXHW6L.css";

// app/components/auto-scroll-to-hash.tsx
var import_react2 = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/auto-scroll-to-hash.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/auto-scroll-to-hash.tsx"
  );
  import.meta.hot.lastModified = "1724091104711.2766";
}
function AutoScrollToHash({
  disabled = false
}) {
  _s();
  useAutoScrollToHash({
    disabled
  });
  return null;
}
_s(AutoScrollToHash, "3mX4NJmYRrBFaeGN3rBtQIWlcNg=", false, function() {
  return [useAutoScrollToHash];
});
_c = AutoScrollToHash;
function useAutoScrollToHash({
  disabled = false
} = {}) {
  _s2();
  const {
    hash
  } = useLocation();
  const scrollBehavior = useScrollBehavior();
  useIsomorphicLayoutEffect(() => {
    const elementId = hash.replace(/^#/, "");
    if (disabled) {
      return () => {
      };
    }
    let handle = 0;
    if (elementId) {
      handle = window.requestAnimationFrame(() => {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({
          behavior: scrollBehavior
        });
      });
    }
    return () => {
      window.cancelAnimationFrame(handle);
    };
  });
}
_s2(useAutoScrollToHash, "C1lRAzStDi2HwLBlUZhi2MhgwwU=", false, function() {
  return [useLocation, useScrollBehavior, useIsomorphicLayoutEffect];
});
function useScrollBehavior() {
  _s3();
  const prefersReducedMotion = usePrefersReducedMotion();
  return (0, import_react2.useMemo)(() => prefersReducedMotion ? "auto" : "smooth", [prefersReducedMotion]);
}
_s3(useScrollBehavior, "xNsaRHkmjhs4/i7ilBHn0XhU12g=", false, function() {
  return [usePrefersReducedMotion];
});
var _c;
$RefreshReg$(_c, "AutoScrollToHash");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/List.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/List.mjs
var import_react3 = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M216,64V192H40V64Z", opacity: "0.2" }), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/List.mjs
var s = Object.defineProperty;
var f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
var m = (e, t2, o) => t2 in e ? s(e, t2, { enumerable: true, configurable: true, writable: true, value: o }) : e[t2] = o;
var a2 = (e, t2) => {
  for (var o in t2 || (t2 = {}))
    c.call(t2, o) && m(e, o, t2[o]);
  if (r)
    for (var o of r(t2))
      n.call(t2, o) && m(e, o, t2[o]);
  return e;
};
var i = (e, t2) => f(e, p(t2));
var L = (0, import_react4.forwardRef)((e, t2) => /* @__PURE__ */ import_react4.default.createElement(b, i(a2({ ref: t2 }, e), { weights: t })));
L.displayName = "List";

// app/components/navigation-context.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/navigation-context.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/navigation-context.tsx"
  );
  import.meta.hot.lastModified = "1724091104711.9192";
}
var NavigationContext = (0, import_react5.createContext)(void 0);
var NavigationProvider = ({
  children
}) => {
  _s4();
  const [showNavigation, setShowNavigation] = (0, import_react5.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationContext.Provider, { value: {
    showNavigation,
    setShowNavigation
  }, children }, void 0, false, {
    fileName: "app/components/navigation-context.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s4(NavigationProvider, "WBLWMKGi51Flt43n6A7glvt2nIQ=");
_c2 = NavigationProvider;
var useNavigation = () => {
  _s22();
  const context = (0, import_react5.useContext)(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
_s22(useNavigation, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c2;
$RefreshReg$(_c2, "NavigationProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav-link.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/nav-link.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/nav-link.tsx"
  );
  import.meta.hot.lastModified = "1724091104711.8386";
}
function NavLink2({
  className,
  hash,
  rawTo,
  search,
  to,
  ...props
}) {
  _s5();
  const {
    setShowNavigation
  } = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: {
    pathname: to ?? rawTo,
    search,
    hash
  }, className: (args) => cx("block py-1 text-muted hover:text-strong", args.isActive && "font-medium text-accent-600 hover:text-accent-600", typeof className === "function" ? className(args) : className), onClick: (e) => {
    setShowNavigation(false);
    if (props.onClick)
      props.onClick(e);
  }, ...props }, void 0, false, {
    fileName: "app/components/nav-link.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s5(NavLink2, "Uj8/wB2PETOHjjaQawbAqCJHJ9w=", false, function() {
  return [useNavigation];
});
_c3 = NavLink2;
var _c3;
$RefreshReg$(_c3, "NavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout.tsx"
  );
  import.meta.hot.lastModified = "1724091104711.6746";
}
var NgrokLogo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { width: "82", height: "34", className: "hidden xs:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { fill: "hsl(var(--blue-600))", d: "M27.888 13.4c-1.136-1.257-2.54-1.89-4.21-1.89-1.028 0-1.976.198-2.847.599a6.99 6.99 0 0 0-2.258 1.636 7.864 7.864 0 0 0-1.498 2.446c-.367.935-.55 1.947-.55 3.041 0 1.072.17 2.05.507 2.933a6.614 6.614 0 0 0 1.43 2.26 6.562 6.562 0 0 0 2.19 1.474c.845.353 1.772.53 2.78.53.456 0 .879-.035 1.263-.1a4.987 4.987 0 0 0 1.101-.318c.35-.15.692-.34 1.033-.569a8.894 8.894 0 0 0 1.059-.874v3.734h-.005v.362h-4.661l-3.505 3.98v.684H32.87V11.902h-4.981V13.4Zm-.013 6.844a3.646 3.646 0 0 1-.687 1.042 3.15 3.15 0 0 1-2.267.943 3.22 3.22 0 0 1-1.28-.25 3.072 3.072 0 0 1-1.021-.693 3.363 3.363 0 0 1-.674-1.042 3.316 3.316 0 0 1-.248-1.292c0-.444.085-.861.26-1.249a3.23 3.23 0 0 1 .705-1.012 3.552 3.552 0 0 1 1.016-.693 2.931 2.931 0 0 1 1.238-.263c.422 0 .828.082 1.225.25.393.163.738.396 1.033.693.294.297.525.637.704 1.025.175.388.26.814.26 1.28-.004.443-.089.865-.264 1.261ZM13.989 13.633a5.356 5.356 0 0 0-1.802-1.373 4.263 4.263 0 0 0-.5-.19 5.671 5.671 0 0 0-.806-.185H7.33l-2.347 2.7v-2.644H0v14.246h4.982v-9.612H9.66l.389-.009v9.617h4.981v-8.91c0-.758-.072-1.435-.217-2.029a3.964 3.964 0 0 0-.824-1.61ZM47.52 11.902h-5.434l-2.16 2.455v-2.455H34.94v14.247h4.994l.004-9.536h3.624L47.52 12.1v-.198ZM74 18.483l6.813-6.34v-.241h-6.566l-5.225 5.138V3.099H64.04v23.045h4.982v-5.8l5.477 5.8h6.703v-.271l-7.203-7.39ZM60.586 13.525c-.76-.676-1.66-1.201-2.698-1.58-1.037-.38-2.16-.569-3.372-.569-1.23 0-2.365.194-3.398.582a8.44 8.44 0 0 0-2.685 1.593 7.29 7.29 0 0 0-1.763 2.39 6.984 6.984 0 0 0-.632 2.96c0 1.166.21 2.226.632 3.177a7.305 7.305 0 0 0 1.75 2.455 7.727 7.727 0 0 0 2.655 1.585c1.03.37 2.148.556 3.36.556 1.23 0 2.37-.185 3.428-.556 1.054-.37 1.96-.891 2.71-1.572a7.37 7.37 0 0 0 1.776-2.416c.431-.934.65-1.964.65-3.096 0-1.129-.214-2.162-.633-3.097a7.23 7.23 0 0 0-1.78-2.412Zm-3.112 6.745a3.644 3.644 0 0 1-.687 1.042 3.053 3.053 0 0 1-1.016.693c-.397.168-.811.25-1.25.25-.44 0-.859-.082-1.256-.25a3.01 3.01 0 0 1-1.016-.693 3.558 3.558 0 0 1-.687-1.042 3.225 3.225 0 0 1-.26-1.318c0-.444.085-.862.26-1.25.175-.387.401-.727.687-1.024a2.99 2.99 0 0 1 1.016-.694c.397-.168.811-.25 1.255-.25.44 0 .858.082 1.251.25a2.95 2.95 0 0 1 1.016.694c.286.297.512.646.687 1.042.175.396.26.818.26 1.262 0 .46-.085.892-.26 1.288Z" }, void 0, false, {
  fileName: "app/components/layout.tsx",
  lineNumber: 33,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/components/layout.tsx",
  lineNumber: 32,
  columnNumber: 25
}, this);
_c4 = NgrokLogo;
var MantleLogo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "94", height: "34", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { fill: "hsl(var(--gray-600))", d: "M23.492 25.826V17.45c0-1.239-.306-2.21-.916-2.913-.61-.702-1.433-1.054-2.469-1.054-.924 0-1.71.278-2.357.833-.63.536-1.082 1.276-1.36 2.219.037.259.056.462.056.61v8.682h-1.942V17.45c0-1.239-.305-2.21-.915-2.913-.61-.702-1.434-1.054-2.47-1.054-.887 0-1.654.25-2.301.75-.63.48-1.082 1.137-1.36 1.969v9.625H5.517v-13.87h1.941v1.61c.925-1.258 2.303-1.887 4.133-1.887 1.831 0 3.2.814 4.106 2.441 1.072-1.627 2.635-2.44 4.688-2.44 1.553 0 2.783.49 3.69 1.47.905.98 1.358 2.311 1.358 3.994v8.682h-1.941ZM34.888 26.104c-2.034 0-3.717-.694-5.049-2.08-1.313-1.406-1.97-3.117-1.97-5.133 0-2.015.657-3.717 1.97-5.104 1.332-1.405 3.015-2.108 5.049-2.108 2.016 0 3.624.657 4.826 1.97v-1.692h1.942v13.87h-1.942v-1.693c-1.202 1.313-2.81 1.97-4.826 1.97Zm.083-1.803c1.073 0 2.016-.232 2.83-.694a5.205 5.205 0 0 0 1.913-1.83v-5.77a5.205 5.205 0 0 0-1.914-1.831c-.813-.463-1.756-.694-2.829-.694-1.498 0-2.728.527-3.69 1.581-.942 1.036-1.414 2.312-1.414 3.828 0 1.517.472 2.802 1.415 3.856.961 1.036 2.191 1.554 3.689 1.554ZM45.454 25.826v-13.87h1.942v1.942c.943-1.479 2.46-2.219 4.55-2.219 1.534 0 2.783.49 3.744 1.47.98.98 1.47 2.312 1.47 3.995v8.682H55.22v-8.405c0-1.257-.333-2.228-.999-2.912-.647-.685-1.553-1.027-2.718-1.027-1.055 0-1.933.287-2.636.86-.684.555-1.174 1.304-1.47 2.247v9.237h-1.942ZM66.04 25.965c-1.146 0-2.108-.342-2.885-1.026-.758-.685-1.137-1.674-1.137-2.968v-8.184h-3.523v-1.83h3.523V8.1h1.942v3.856h4.327v1.83H63.96v8.017c0 .832.203 1.443.61 1.83.426.39.971.583 1.637.583.74 0 1.424-.175 2.053-.527l.582 1.665c-.777.407-1.71.61-2.802.61ZM70.629 25.826V5.576h1.941v20.25H70.63ZM82.368 26.104c-2.127 0-3.847-.685-5.16-2.053-1.313-1.387-1.97-3.107-1.97-5.16 0-2.034.676-3.744 2.026-5.131 1.35-1.387 3.07-2.08 5.16-2.08 1.867 0 3.42.628 4.66 1.886 1.238 1.257 1.858 2.968 1.858 5.131v.527H77.236c0 1.443.48 2.654 1.442 3.634.962.962 2.192 1.443 3.69 1.443 1.11 0 2.015-.213 2.718-.638.721-.444 1.34-1.1 1.859-1.97l1.58 1.026c-1.312 2.257-3.365 3.385-6.157 3.385Zm-4.966-8.6h9.515c-.185-1.239-.694-2.219-1.526-2.94-.832-.721-1.85-1.082-3.051-1.082-1.202 0-2.275.37-3.218 1.11-.924.721-1.498 1.692-1.72 2.912Z" }, void 0, false, {
    fileName: "app/components/layout.tsx",
    lineNumber: 37,
    columnNumber: 3
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { fill: "hsl(var(--blue-500))", d: "M0 0v5h2v24H0v5h5v-2h84v2h5v-5h-2V5h2V0h-5v2H5V0H0Zm4 1v3H1V1h3Zm85 2v2h2v24h-2v2H5v-2H3V5h2V3h84ZM1 30h3v3H1v-3Zm92 0v3h-3v-3h3ZM90 1h3v3h-3V1Z" }, void 0, false, {
    fileName: "app/components/layout.tsx",
    lineNumber: 38,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "app/components/layout.tsx",
  lineNumber: 36,
  columnNumber: 26
}, this);
_c22 = MantleLogo;
function Layout({
  children,
  className,
  currentVersion,
  style
}) {
  _s6();
  const [currentTheme, setTheme] = useTheme();
  const {
    showNavigation,
    setShowNavigation
  } = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: cx("mx-auto h-full max-w-7xl sm:px-4", className), style, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex h-20 items-center gap-4 px-4 sm:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { type: "button", appearance: "outlined", priority: "neutral", className: "w-11 sm:w-9 md:hidden", onClick: () => {
        setShowNavigation(!showNavigation);
      }, children: [
        !showNavigation && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(L, { className: "h-6 w-6 shrink-0" }, void 0, false, {
          fileName: "app/components/layout.tsx",
          lineNumber: 58,
          columnNumber: 26
        }, this),
        showNavigation && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(R, { className: "h-6 w-6 shrink-0" }, void 0, false, {
          fileName: "app/components/layout.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "static top-auto flex sm:top-[1.4rem] md:fixed", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NgrokLogo, {}, void 0, false, {
          fileName: "app/components/layout.tsx",
          lineNumber: 64,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MantleLogo, {}, void 0, false, {
          fileName: "app/components/layout.tsx",
          lineNumber: 65,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout.tsx",
        lineNumber: 63,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-mono text-xs text-strong md:ml-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://github.com/ngrok-oss/mantle/releases", children: currentVersion }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 69,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 68,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { value: currentTheme, onChange: (value) => {
        const maybeNewTheme = isTheme(value) ? value : void 0;
        if (maybeNewTheme) {
          setTheme(maybeNewTheme);
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Theme Switcher" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 80,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectTrigger, { className: "w-min", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(I, { className: "mr-1 h-6 w-6" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 82,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 81,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout.tsx",
          lineNumber: 78,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectLabel, { children: "Choose a theme" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 87,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: theme("system"), children: "System" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 88,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: theme("light"), children: "Light" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 89,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: theme("dark"), children: "Dark" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 90,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: theme("light-high-contrast"), children: "Light High Contrast" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 91,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: theme("dark-high-contrast"), children: "Dark High Contrast" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 92,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout.tsx",
          lineNumber: 86,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/components/layout.tsx",
          lineNumber: 85,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout.tsx",
        lineNumber: 72,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout.tsx",
      lineNumber: 54,
      columnNumber: 4
    }, this),
    showNavigation && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed bottom-0 left-0 right-0 top-20 z-50 bg-card p-4 md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigation, { className: "scrollbar h-full overflow-auto overscroll-contain" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 98,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 97,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bottom-0 hidden w-44 md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed bottom-0 top-20 w-44", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigation, { className: "scrollbar scroll-shadow h-full overflow-auto py-4" }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 102,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 101,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { className: "w-0 flex-1 bg-card p-4 shadow-2xl sm:mb-4 sm:rounded-lg md:p-9 lg:mb-9", children }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 106,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout.tsx",
      lineNumber: 100,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s6(Layout, "W2GvmM9WRZ7712z1HVdOyW5oBZY=", false, function() {
  return [useTheme, useNavigation];
});
_c32 = Layout;
var prodReadyComponents = ["Alert", "Anchor", "Badge", "Button", "Card", "Checkbox", "Code Block", "Dialog", "Dropdown Menu", "Icon Button", "Icon", "Inline Code", "Input", "Label", "Media Object", "Password Input", "Progress Donut", "Radio Group", "Select", "Separator", "Sheet", "Skeleton", "Switch", "Table", "Tabs", "Text Area", "Theme Provider"];
var previewComponents = [
  //,
  "Calendar",
  "Popover",
  "Tooltip"
];
var prodReadyComponentRouteLookup = {
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
};
var previewComponentsRouteLookup = {
  Calendar: "/components/preview/calendar",
  Popover: "/components/preview/popover",
  Tooltip: "/components/preview/tooltip"
};
function Navigation({
  className,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: cx("text-sm", className), style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-2 text-xs font-medium uppercase tracking-wider", children: "Welcome" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 168,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: "/", prefetch: "intent", children: "Overview & Setup" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 171,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 170,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Base" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 176,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: "/base/colors", prefetch: "intent", children: "Colors" }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 179,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: "/base/shadows", prefetch: "intent", children: "Shadows" }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 185,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 184,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: "/base/typography", prefetch: "intent", children: "Typography" }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 190,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 189,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: "/base/tailwind-variants", prefetch: "intent", children: "Tailwind Variants" }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 195,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 194,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout.tsx",
      lineNumber: 178,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Components" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 201,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-2", children: prodReadyComponents.map((component) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: prodReadyComponentRouteLookup[component], prefetch: "intent", children: component }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 204,
      columnNumber: 8
    }, this) }, component, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 203,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 202,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Preview Components" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 210,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-2", children: previewComponents.map((component) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: previewComponentsRouteLookup[component], prefetch: "intent", children: component }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 213,
      columnNumber: 8
    }, this) }, component, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 212,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 211,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mt-6 text-xs font-medium uppercase tracking-wider", children: "Unreleased Components" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 219,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink2, { to: "/components/unreleased/data-table", prefetch: "intent", children: "Data Table" }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 221,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 220,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout.tsx",
    lineNumber: 167,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/layout.tsx",
    lineNumber: 166,
    columnNumber: 10
  }, this);
}
_c42 = Navigation;
var _c4;
var _c22;
var _c32;
var _c42;
$RefreshReg$(_c4, "NgrokLogo");
$RefreshReg$(_c22, "MantleLogo");
$RefreshReg$(_c32, "Layout");
$RefreshReg$(_c42, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : [], {
  rel: "stylesheet",
  href: mantle_default
}];
function App() {
  _s7();
  const {
    currentVersion,
    commitSha,
    deploymentId
  } = useLoaderData();
  const initialHtmlThemeProps = useInitialHtmlThemeProps({
    className: "h-full"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { id: "ngrok", ...initialHtmlThemeProps, lang: "en-US", dir: "ltr", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MantleThemeHeadContent, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "author", content: "ngrok" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "commit-sha", content: commitSha }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "deployment-id", content: deploymentId }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "h-full min-h-full overflow-y-scroll bg-base", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThemeProvider, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AutoScrollToHash, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 69,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavigationProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { currentVersion, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 72,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 70,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s7(App, "JRcL02Mg8TeFFQwVaKS5bx9C+x0=", false, function() {
  return [useLoaderData, useInitialHtmlThemeProps];
});
_c5 = App;
var _c5;
$RefreshReg$(_c5, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-BUEBVSTS.js.map
