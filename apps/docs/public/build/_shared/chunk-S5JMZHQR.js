import {
  Link
} from "/build/_shared/chunk-TFWTF37R.js";
import {
  Anchor
} from "/build/_shared/chunk-4SICMU5M.js";
import {
  createHotContext
} from "/build/_shared/chunk-T2SS4IJE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ANPTKELO.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// app/components/link.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/link.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/link.tsx"
  );
  import.meta.hot.lastModified = "1724091104711.7554";
}
var Link2 = ({
  hash,
  rawTo,
  search,
  to,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: {
  pathname: to ?? rawTo,
  search,
  hash
}, ...props }, void 0, false, {
  fileName: "app/components/link.tsx",
  lineNumber: 30,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/components/link.tsx",
  lineNumber: 29,
  columnNumber: 7
}, this);
_c = Link2;
var _c;
$RefreshReg$(_c, "Link");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Link2 as Link
};
//# sourceMappingURL=/build/_shared/chunk-S5JMZHQR.js.map
