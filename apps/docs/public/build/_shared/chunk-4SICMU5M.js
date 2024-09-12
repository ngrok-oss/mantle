import {
  Slot
} from "/build/_shared/chunk-3LE3N7DD.js";
import {
  cx
} from "/build/_shared/chunk-ACY2JGBA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ANPTKELO.js";
import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/anchor/src/anchor.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var anchorClassNames = (className) => cx(
  "cursor-pointer rounded bg-transparent text-accent-600 hover:underline focus:outline-none focus-visible:ring focus-visible:ring-focus-accent",
  className
);
var Anchor = (0, import_react.forwardRef)(({ asChild, className, rel: propRel, ...props }, ref) => {
  const Component = asChild ? Slot : "a";
  const rel = resolveRel(propRel);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, { className: anchorClassNames(className), ref, rel, ...props }, void 0, false, {
    fileName: "packages/anchor/src/anchor.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
});
Anchor.displayName = "Anchor";
function resolveRel(rel) {
  if (Array.isArray(rel)) {
    const uniqueRel = new Set(rel);
    const result = [...uniqueRel].map((item) => item?.trim()).filter(Boolean).sort().join(" ");
    return result || void 0;
  }
  return rel?.trim() || void 0;
}

export {
  Anchor
};
//# sourceMappingURL=/build/_shared/chunk-4SICMU5M.js.map
