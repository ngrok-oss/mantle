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

// packages/card/src/card.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Card = (0, import_react.forwardRef)(({ className, children, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    ref,
    className: cx("relative divide-y divide-card-muted rounded-md border border-card bg-card", className),
    ...rest,
    children
  },
  void 0,
  false,
  {
    fileName: "packages/card/src/card.tsx",
    lineNumber: 14,
    columnNumber: 2
  },
  this
));
Card.displayName = "Card";
var CardBody = (0, import_react.forwardRef)(({ className, children, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cx("p-6", className), ...rest, children }, void 0, false, {
  fileName: "packages/card/src/card.tsx",
  lineNumber: 28,
  columnNumber: 2
}, this));
CardBody.displayName = "CardBody";
var CardFooter = (0, import_react.forwardRef)(({ className, children, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cx("px-6 py-3", className), ...rest, children }, void 0, false, {
  fileName: "packages/card/src/card.tsx",
  lineNumber: 38,
  columnNumber: 2
}, this));
CardFooter.displayName = "CardFooter";
var CardHeader = (0, import_react.forwardRef)(({ className, children, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cx("px-6 py-3", className), ...rest, children }, void 0, false, {
  fileName: "packages/card/src/card.tsx",
  lineNumber: 48,
  columnNumber: 2
}, this));
CardHeader.displayName = "CardHeader";
var CardTitle = (0, import_react.forwardRef)(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "h3";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Comp, { ref, className: cx("text-base font-medium text-strong", className), ...props }, void 0, false, {
    fileName: "packages/card/src/card.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
});
CardTitle.displayName = "CardTitle";

export {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle
};
//# sourceMappingURL=/build/_shared/chunk-ALBVFRJR.js.map
