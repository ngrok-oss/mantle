import {
  IconBase
} from "/build/_shared/chunk-AY4ASLMH.js";
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
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/badge/src/badge.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Badge = ({ appearance, children, className, color = "neutral", icon, ...props }) => {
  const bgColor = computeBgColor(color, appearance);
  const textColor = computeTextColor(color, appearance);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "span",
    {
      className: cx(
        "inline-flex w-fit shrink-0 cursor-default items-center gap-1 rounded px-1.5 py-0.5 text-sm font-medium sm:text-xs",
        icon && "ps-1",
        bgColor,
        textColor,
        className
      ),
      ...props,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconBase, { className: "size-5 sm:size-4", svg: icon }, void 0, false, {
          fileName: "packages/badge/src/badge.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "packages/badge/src/badge.tsx",
      lineNumber: 33,
      columnNumber: 3
    },
    this
  );
};
var mutedBgColorLookup = {
  amber: "bg-amber-700/20",
  blue: "bg-blue-700/20",
  cyan: "bg-cyan-700/20",
  emerald: "bg-emerald-700/20",
  fuchsia: "bg-fuchsia-700/20",
  gray: "bg-gray-700/20",
  green: "bg-green-700/20",
  indigo: "bg-indigo-700/20",
  lime: "bg-lime-700/20",
  orange: "bg-orange-700/20",
  pink: "bg-pink-700/20",
  purple: "bg-purple-700/20",
  red: "bg-red-700/20",
  rose: "bg-rose-700/20",
  sky: "bg-sky-700/20",
  teal: "bg-teal-700/20",
  violet: "bg-violet-700/20",
  yellow: "bg-yellow-700/20",
  accent: "bg-accent-700/20",
  danger: "bg-danger-700/20",
  neutral: "bg-neutral-700/20",
  success: "bg-success-700/20",
  warning: "bg-warning-700/20"
};
function computeBgColor(color, appearance) {
  switch (appearance) {
    case "muted":
      return mutedBgColorLookup[color];
    default:
      invariant(false, `Invalid appearance: ${String(appearance)}`);
  }
}
var textColorMutedLookup = {
  amber: "text-amber-700",
  blue: "text-blue-700",
  cyan: "text-cyan-700",
  emerald: "text-emerald-700",
  fuchsia: "text-fuchsia-700",
  gray: "text-gray-700",
  green: "text-green-700",
  indigo: "text-indigo-700",
  lime: "text-lime-700",
  orange: "text-orange-700",
  pink: "text-pink-700",
  purple: "text-purple-700",
  red: "text-red-700",
  rose: "text-rose-700",
  sky: "text-sky-700",
  teal: "text-teal-700",
  violet: "text-violet-700",
  yellow: "text-yellow-700",
  accent: "text-accent-700",
  danger: "text-danger-700",
  neutral: "text-neutral-700",
  success: "text-success-700",
  warning: "text-warning-700"
};
function computeTextColor(color, appearance) {
  switch (appearance) {
    case "muted":
      return textColorMutedLookup[color];
    default:
      invariant(false, `Invalid appearance: ${String(appearance)}`);
  }
}

export {
  Badge
};
//# sourceMappingURL=/build/_shared/chunk-7JQTAYD5.js.map
