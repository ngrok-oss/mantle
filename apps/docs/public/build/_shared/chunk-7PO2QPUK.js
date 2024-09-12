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

// packages/label/src/label.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Label = (0, import_react.forwardRef)(
  ({ "aria-disabled": _ariaDisabled, children, className, disabled, onMouseDown, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "label",
    {
      "aria-disabled": disabled ?? _ariaDisabled,
      className: cx(
        "cursor-pointer peer-disabled:cursor-default has-[:disabled]:cursor-default aria-disabled:cursor-default",
        className
      ),
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) {
          return;
        }
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      },
      ref,
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "packages/label/src/label.tsx",
      lineNumber: 11,
      columnNumber: 3
    },
    this
  )
);
Label.displayName = "Label";

export {
  Label
};
//# sourceMappingURL=/build/_shared/chunk-7PO2QPUK.js.map
