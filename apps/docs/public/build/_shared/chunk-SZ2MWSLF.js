import {
  Primitive
} from "/build/_shared/chunk-YXKBN4EE.js";
import {
  Slot
} from "/build/_shared/chunk-3LE3N7DD.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-ET7BOX4G.js";
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

// node_modules/.pnpm/@radix-ui+react-separator@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-separator/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator = React.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator;

// packages/separator/src/separator.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SeparatorGroupContext = (0, import_react.createContext)({});
var HorizontalSeparatorGroup = ({
  className,
  children,
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SeparatorGroupContext.Provider, { value: { orientation: "horizontal" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Comp,
    {
      "data-horizontal-separator-group": true,
      className: cx("group flex items-center gap-2 [&_*:not([data-separator])]:shrink-0", className),
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "packages/separator/src/separator.tsx",
      lineNumber: 29,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "packages/separator/src/separator.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
};
var Separator2 = (0, import_react.forwardRef)(
  ({ className, orientation: propOrientation, decorative = true, ...props }, ref) => {
    const ctx = (0, import_react.useContext)(SeparatorGroupContext);
    const orientation = ctx.orientation ?? propOrientation ?? "horizontal";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Root,
      {
        ref,
        "data-separator": true,
        "aria-orientation": decorative ? void 0 : orientation,
        decorative,
        orientation,
        className: cx(
          "bg-gray-500/20 dark-high-contrast:bg-black high-contrast:bg-black dark:bg-gray-600/20",
          orientation === "horizontal" ? "h-px w-full group-data-[horizontal-separator-group]:flex-1" : "h-full w-px",
          className
        ),
        ...props
      },
      void 0,
      false,
      {
        fileName: "packages/separator/src/separator.tsx",
        lineNumber: 52,
        columnNumber: 4
      },
      this
    );
  }
);
Separator2.displayName = "Separator";

export {
  HorizontalSeparatorGroup,
  Separator2 as Separator
};
//# sourceMappingURL=/build/_shared/chunk-SZ2MWSLF.js.map
