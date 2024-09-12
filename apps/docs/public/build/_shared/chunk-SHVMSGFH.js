import {
  parseBooleanish
} from "/build/_shared/chunk-ATBEVGT6.js";
import {
  cva
} from "/build/_shared/chunk-76G7XZOH.js";
import {
  Icon
} from "/build/_shared/chunk-O7WT66KO.js";
import {
  Slot
} from "/build/_shared/chunk-3LE3N7DD.js";
import {
  b,
  invariant
} from "/build/_shared/chunk-L6J2GUHO.js";
import {
  clsx_default,
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

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/CircleNotch.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/CircleNotch.mjs
var import_react = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,176A72,72,0,0,1,92,65.64a8,8,0,0,1,8,13.85,56,56,0,1,0,56,0,8,8,0,0,1,8-13.85A72,72,0,0,1,128,200Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M230,128a102,102,0,0,1-204,0c0-40.18,23.35-76.86,59.5-93.45a6,6,0,0,1,5,10.9C58.61,60.09,38,92.49,38,128a90,90,0,0,0,180,0c0-35.51-20.61-67.91-52.5-82.55a6,6,0,0,1,5-10.9C206.65,51.14,230,87.82,230,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M228,128a100,100,0,0,1-200,0c0-39.4,22.9-75.37,58.33-91.63a4,4,0,1,1,3.34,7.27C57.07,58.6,36,91.71,36,128a92,92,0,0,0,184,0c0-36.29-21.07-69.4-53.67-84.36a4,4,0,1,1,3.34-7.27C205.1,52.63,228,88.6,228,128Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/CircleNotch.mjs
var i = Object.defineProperty;
var f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var l = Object.prototype.propertyIsEnumerable;
var c = (o, e2, r) => e2 in o ? i(o, e2, { enumerable: true, configurable: true, writable: true, value: r }) : o[e2] = r;
var m = (o, e2) => {
  for (var r in e2 || (e2 = {}))
    s.call(e2, r) && c(o, r, e2[r]);
  if (t2)
    for (var r of t2(e2))
      l.call(e2, r) && c(o, r, e2[r]);
  return o;
};
var a = (o, e2) => f(o, p(e2));
var w = (0, import_react2.forwardRef)((o, e2) => /* @__PURE__ */ import_react2.default.createElement(b, a(m({ ref: e2 }, o), { weights: t })));
w.displayName = "CircleNotch";

// packages/button/src/button.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-base focus-within:outline-none focus-visible:ring-4 disabled:cursor-default disabled:opacity-50 sm:text-sm [&>*]:focus-within:outline-none",
  {
    variants: {
      /**
       * Defines the visual style of the Button.
       */
      appearance: {
        filled: "h-11 border border-transparent bg-filled-accent px-3 font-medium text-on-filled focus-visible:border-accent-600 focus-visible:ring-focus-accent not-disabled:hover:bg-filled-accent-hover not-disabled:active:bg-filled-accent-active sm:h-9",
        ghost: "h-11 border border-transparent px-3 font-medium text-accent-600 focus-visible:ring-focus-accent not-disabled:hover:bg-accent-500/10 not-disabled:hover:text-accent-700 not-disabled:active:bg-accent-500/15 not-disabled:active:text-accent-700 sm:h-9",
        outlined: "h-11 border border-accent-600 bg-form px-3 font-medium text-accent-600 focus-visible:ring-focus-accent not-disabled:hover:border-accent-700 not-disabled:hover:bg-accent-500/10 not-disabled:hover:text-accent-700 not-disabled:active:border-accent-700 not-disabled:active:bg-accent-500/15 not-disabled:active:text-accent-700 sm:h-9",
        link: "group border-transparent text-accent-600 focus-visible:ring-focus-accent not-disabled:hover:underline"
      },
      /**
       * Whether or not the button is in a loading state, default `false`. Setting `isLoading` will
       * replace any `icon` with a spinner, or add one if an icon wasn't given.
       * It will also disable user interaction with the button and set `disabled`.
       */
      isLoading: {
        false: "",
        true: "opacity-50"
      },
      /**
       * Indicates the importance or impact level of the button, affecting its
       * color and styling to communicate its purpose to the user
       */
      priority: {
        danger: "",
        default: "",
        neutral: ""
      }
    },
    defaultVariants: {
      appearance: "outlined",
      isLoading: false,
      priority: "default"
    },
    compoundVariants: [
      {
        appearance: "ghost",
        priority: "danger",
        class: "border-transparent text-danger-600 focus-visible:ring-focus-danger not-disabled:hover:bg-danger-500/10 not-disabled:hover:text-danger-700 not-disabled:active:bg-danger-500/15 not-disabled:active:text-danger-700"
      },
      {
        appearance: "outlined",
        priority: "danger",
        class: "border-danger-600 bg-form text-danger-600 focus-visible:ring-focus-danger not-disabled:hover:border-danger-700 not-disabled:hover:bg-danger-500/10 not-disabled:hover:text-danger-700 not-disabled:active:border-danger-700 not-disabled:active:bg-danger-500/15 not-disabled:active:text-danger-700"
      },
      {
        appearance: "filled",
        priority: "danger",
        class: "border-transparent bg-filled-danger focus-visible:border-danger-600 focus-visible:ring-focus-danger not-disabled:hover:bg-filled-danger-hover not-disabled:active:bg-filled-danger-active"
      },
      {
        appearance: "link",
        priority: "danger",
        class: "text-danger-600 focus-visible:ring-focus-danger"
      },
      {
        appearance: "ghost",
        priority: "neutral",
        class: "border-transparent text-strong focus-visible:ring-focus-accent not-disabled:hover:bg-neutral-500/10 not-disabled:hover:text-strong not-disabled:active:bg-neutral-500/15 not-disabled:active:text-strong"
      },
      {
        appearance: "outlined",
        priority: "neutral",
        class: "border-form bg-form text-strong focus-visible:border-accent-600 focus-visible:ring-focus-accent not-disabled:hover:border-neutral-400 not-disabled:hover:bg-form-hover not-disabled:hover:text-strong not-disabled:active:border-neutral-400 not-disabled:active:bg-neutral-500/10 not-disabled:active:text-strong focus-visible:not-disabled:active:border-accent-600"
      },
      {
        appearance: "filled",
        priority: "neutral",
        class: "border-transparent bg-filled-neutral focus-visible:border-neutral-600 focus-visible:ring-focus-neutral not-disabled:hover:bg-filled-neutral-hover not-disabled:active:bg-filled-neutral-active"
      },
      {
        appearance: "link",
        priority: "neutral",
        class: "text-strong focus-visible:ring-focus-accent"
      }
    ]
  }
);
var Button = (0, import_react3.forwardRef)(
  ({
    "aria-disabled": _ariaDisabled,
    appearance = "outlined",
    asChild,
    children,
    className,
    disabled: _disabled,
    icon: propIcon,
    iconPlacement = "start",
    isLoading = false,
    priority = "default",
    type,
    ...props
  }, ref) => {
    const disabled = parseBooleanish(_ariaDisabled ?? _disabled ?? isLoading);
    const icon = isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(w, { className: "animate-spin" }, void 0, false, {
      fileName: "packages/button/src/button.tsx",
      lineNumber: 200,
      columnNumber: 28
    }, this) : propIcon;
    const hasSpecialIconPadding = icon && appearance !== "link";
    const buttonProps = {
      "aria-disabled": disabled,
      className: cx(
        buttonVariants({ appearance, priority, isLoading }),
        hasSpecialIconPadding && iconPlacement === "start" && "ps-2.5",
        hasSpecialIconPadding && iconPlacement === "end" && "pe-2.5",
        className
      ),
      "data-loading": isLoading,
      disabled,
      ref,
      ...props
    };
    if (asChild) {
      const singleChild = import_react3.Children.only(children);
      invariant(
        (0, import_react3.isValidElement)(singleChild),
        "When using `asChild`, Button must be passed a single child as a JSX tag."
      );
      const grandchildren = singleChild.props?.children;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { ...buttonProps, children: (0, import_react3.cloneElement)(
        singleChild,
        {},
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InnerContent, { appearance, icon, iconPlacement, children: grandchildren }, void 0, false, {
          fileName: "packages/button/src/button.tsx",
          lineNumber: 234,
          columnNumber: 7
        }, this)
      ) }, void 0, false, {
        fileName: "packages/button/src/button.tsx",
        lineNumber: 230,
        columnNumber: 5
      }, this);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ...buttonProps, type, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InnerContent, { appearance, icon, iconPlacement, children }, void 0, false, {
      fileName: "packages/button/src/button.tsx",
      lineNumber: 244,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "packages/button/src/button.tsx",
      lineNumber: 243,
      columnNumber: 4
    }, this);
  }
);
Button.displayName = "Button";
var InnerContent = ({ appearance, children, icon, iconPlacement }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "span",
  {
    className: clsx_default(
      "inline-flex items-center gap-1.5 focus-within:outline-none focus-visible:outline-none",
      appearance === "link" && "not-disabled:group-hover:underline"
    ),
    children: [
      icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { svg: icon, className: clsx_default(iconPlacement === "end" && "order-last") }, void 0, false, {
        fileName: "packages/button/src/button.tsx",
        lineNumber: 265,
        columnNumber: 12
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "packages/button/src/button.tsx",
    lineNumber: 259,
    columnNumber: 2
  },
  this
);

export {
  w,
  buttonVariants,
  Button
};
//# sourceMappingURL=/build/_shared/chunk-SHVMSGFH.js.map
