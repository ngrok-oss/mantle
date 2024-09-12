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
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// app/components/example.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/example.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/example.tsx"
  );
  import.meta.hot.lastModified = "1724091104711.447";
}
function Example({
  children,
  className,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx("flex items-center justify-center rounded-lg rounded-b-none border border-b-0 border-gray-300 p-4 md:p-16", className), style, children }, void 0, false, {
    fileName: "app/components/example.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Example
};
//# sourceMappingURL=/build/_shared/chunk-JVSA6SEF.js.map
