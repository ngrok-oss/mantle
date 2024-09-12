import {
  invariant
} from "/build/_shared/chunk-L6J2GUHO.js";
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

// packages/icon/src/_icon-base.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var IconBase = ({ className, style, svg }) => {
  const icon = import_react.Children.only(svg);
  invariant((0, import_react.isValidElement)(icon), "Icon must be passed a single SVG icon as a JSX tag.");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: (0, import_react.cloneElement)(icon, {
    className: cx("shrink-0", icon.props.className, className),
    style: { ...icon.props.style, ...style }
  }) }, void 0, false, {
    fileName: "packages/icon/src/_icon-base.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
};

export {
  IconBase
};
//# sourceMappingURL=/build/_shared/chunk-AY4ASLMH.js.map
