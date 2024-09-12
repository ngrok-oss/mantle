import {
  D,
  I,
  k
} from "/build/_shared/chunk-VMZZWZYH.js";
import {
  composeRefs
} from "/build/_shared/chunk-NG7IOVW6.js";
import {
  b
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

// packages/input/src/input.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Input = (0, import_react.forwardRef)(({ children, className, ...props }, forwardedRef) => {
  const hasChildren = Boolean(children);
  const innerRef = (0, import_react.useRef)(null);
  if (hasChildren) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputContainer, { className, forwardedRef, innerRef, ...props, children }, void 0, false, {
      fileName: "packages/input/src/input.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputContainer, { ...props, className, forwardedRef, innerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputCapture, { ...props }, void 0, false, {
    fileName: "packages/input/src/input.tsx",
    lineNumber: 35,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "packages/input/src/input.tsx",
    lineNumber: 34,
    columnNumber: 3
  }, this);
});
Input.displayName = "Input";
var InputCapture = (0, import_react.forwardRef)(
  ({ "aria-invalid": _ariaInvalid, className, validation: _validation, ...restProps }, ref) => {
    const {
      "aria-invalid": ctxAriaInvalid,
      forwardedRef: ctxForwardedRef,
      innerRef: ctxInnerRef,
      validation: ctxValidation,
      ...ctx
    } = (0, import_react.useContext)(InputContext);
    const validation = ctxValidation ?? _validation;
    const ariaInvalid = ctxAriaInvalid ?? _ariaInvalid ?? validation === "error";
    const props = { ...ctx, ...restProps, type: restProps.type ?? ctx.type ?? "text" };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1 text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-invalid": ariaInvalid,
        "data-validation": validation || void 0,
        className: cx("w-full bg-form placeholder:text-placeholder focus:outline-none", className),
        ref: composeRefs(ref, ctxForwardedRef, ctxInnerRef),
        ...props
      },
      void 0,
      false,
      {
        fileName: "packages/input/src/input.tsx",
        lineNumber: 62,
        columnNumber: 5
      },
      this
    ) }, void 0, false, {
      fileName: "packages/input/src/input.tsx",
      lineNumber: 61,
      columnNumber: 4
    }, this);
  }
);
InputCapture.displayName = "InputCapture";
var InputContext = (0, import_react.createContext)({ validation: void 0, innerRef: { current: null } });
var InputContainer = ({
  "aria-invalid": _ariaInvalid,
  "aria-disabled": _ariaDisabled,
  children,
  className,
  disabled,
  forwardedRef,
  innerRef,
  style,
  type,
  validation: _validation,
  ...props
}) => {
  const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
  const validation = isInvalid ? "error" : typeof _validation === "function" ? _validation() : _validation;
  const ariaInvalid = _ariaInvalid ?? validation === "error";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    InputContext.Provider,
    {
      value: {
        "aria-invalid": _ariaInvalid,
        "aria-disabled": _ariaDisabled,
        disabled,
        type,
        validation,
        ...props,
        forwardedRef,
        innerRef
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          "aria-invalid": ariaInvalid,
          "aria-disabled": disabled ?? _ariaDisabled,
          "data-validation": validation || void 0,
          className: cx(
            "h-11 text-base sm:h-9 sm:text-sm",
            "relative flex w-full items-center gap-1.5 rounded-md border bg-form px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-within:outline-none focus-within:ring-4 focus-visible:outline-none focus-visible:ring-4",
            "aria-disabled:opacity-50",
            "has-[input:not(:first-child)]:ps-2.5 has-[input:not(:last-child)]:pe-2.5 [&>:not(input)]:shrink-0 [&_svg]:size-6 sm:[&_svg]:size-5",
            "border-form text-strong has-[:focus-visible]:border-accent-600 has-[:focus-visible]:ring-focus-accent",
            "data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:ring-focus-success",
            "data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:ring-focus-warning",
            "data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:ring-focus-danger",
            className
          ),
          onClick: () => {
            innerRef?.current?.focus();
          },
          style,
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidationFeedback, { name: props.name, validation }, void 0, false, {
              fileName: "packages/input/src/input.tsx",
              lineNumber: 155,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "packages/input/src/input.tsx",
          lineNumber: 134,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "packages/input/src/input.tsx",
      lineNumber: 122,
      columnNumber: 3
    },
    this
  );
};
var ValidationFeedback = ({ name, validation }) => {
  switch (validation) {
    case "error":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none order-last select-none text-danger-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: clsx_default("The value entered for the", name, "input has failed validation.") }, void 0, false, {
          fileName: "packages/input/src/input.tsx",
          lineNumber: 169,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { "aria-hidden": true, weight: "fill" }, void 0, false, {
          fileName: "packages/input/src/input.tsx",
          lineNumber: 170,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "packages/input/src/input.tsx",
        lineNumber: 168,
        columnNumber: 5
      }, this);
    case "success":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none order-last select-none text-success-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, { weight: "fill" }, void 0, false, {
        fileName: "packages/input/src/input.tsx",
        lineNumber: 176,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "packages/input/src/input.tsx",
        lineNumber: 175,
        columnNumber: 5
      }, this);
    case "warning":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none order-last select-none text-warning-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D, { weight: "fill" }, void 0, false, {
        fileName: "packages/input/src/input.tsx",
        lineNumber: 182,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "packages/input/src/input.tsx",
        lineNumber: 181,
        columnNumber: 5
      }, this);
    default:
      return null;
  }
};

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Eye.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/Eye.mjs
var import_react2 = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Eye.mjs
var i = Object.defineProperty;
var p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
var m = (o, e2, r) => e2 in o ? i(o, e2, { enumerable: true, configurable: true, writable: true, value: r }) : o[e2] = r;
var a = (o, e2) => {
  for (var r in e2 || (e2 = {}))
    c.call(e2, r) && m(o, r, e2[r]);
  if (t2)
    for (var r of t2(e2))
      n.call(e2, r) && m(o, r, e2[r]);
  return o;
};
var f = (o, e2) => p(o, s(e2));
var w = (0, import_react3.forwardRef)((o, e2) => /* @__PURE__ */ import_react3.default.createElement(b, f(a({ ref: e2 }, o), { weights: t })));
w.displayName = "Eye";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/EyeClosed.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/EyeClosed.mjs
var import_react4 = __toESM(require_react(), 1);
var l = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M234.42,162A12,12,0,1,1,213.58,174l-16.86-29.5a127.19,127.19,0,0,1-30.17,13.86L171.84,190a12,12,0,0,1-9.87,13.8,11.22,11.22,0,0,1-2,.17,12,12,0,0,1-11.82-10L143,163.17a136.5,136.5,0,0,1-30.06,0L107.84,194A12,12,0,0,1,96,204a11.22,11.22,0,0,1-2-.17A12,12,0,0,1,84.16,190l5.29-31.72a127.19,127.19,0,0,1-30.17-13.86L42.42,174A12,12,0,1,1,21.58,162L40,129.85a159.73,159.73,0,0,1-17.31-18.31A12,12,0,0,1,41.34,96.46C57.38,116.32,85.44,140,128,140s70.62-23.68,86.66-43.54a12,12,0,0,1,18.67,15.08A159.73,159.73,0,0,1,216,129.85Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(
      "path",
      {
        d: "M224,104c-16.81,20.81-47.63,48-96,48s-79.19-27.19-96-48c16.81-20.81,47.63-48,96-48S207.19,83.19,224,104Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M230.94,164A8,8,0,1,1,217.05,172l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a152.8,152.8,0,0,1-19.3-20,8,8,0,0,1,0-10.06C44.56,75.72,77.55,48,128,48s83.44,27.72,102.22,51a8,8,0,0,1,0,10.06,152.8,152.8,0,0,1-19.3,20Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M229.21,165a6,6,0,0,1-10.42,6l-20-35.08a122,122,0,0,1-39,18.09l6.17,37a6,6,0,0,1-4.93,6.91,6.85,6.85,0,0,1-1,.08,6,6,0,0,1-5.91-5L148,156.44a128.86,128.86,0,0,1-40,0L101.92,193A6,6,0,0,1,96,198a6.85,6.85,0,0,1-1-.08A6,6,0,0,1,90.08,191l6.17-37a122,122,0,0,1-39-18.09L37.21,171a6,6,0,1,1-10.42-6l20.85-36.48a152,152,0,0,1-20.31-20.77,6,6,0,0,1,9.34-7.54C53.54,121.11,83.07,146,128,146s74.46-24.89,91.33-45.77a6,6,0,0,1,9.34,7.54,152,152,0,0,1-20.31,20.77Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M226,171.47a3.92,3.92,0,0,1-2,.53,4,4,0,0,1-3.47-2l-21.15-37a120,120,0,0,1-41.91,19.53L164,191.34a4,4,0,0,1-3.29,4.6,3.79,3.79,0,0,1-.67.06,4,4,0,0,1-3.94-3.34l-6.41-38.5a128.17,128.17,0,0,1-43.28,0L100,192.66A4,4,0,0,1,96,196a3.88,3.88,0,0,1-.67-.06,4,4,0,0,1-3.29-4.6l6.48-38.83A120,120,0,0,1,56.62,133L35.47,170A4,4,0,0,1,32,172a3.92,3.92,0,0,1-2-.53A4,4,0,0,1,28.53,166l21.68-37.94a148.24,148.24,0,0,1-21.32-21.56,4,4,0,1,1,6.22-5C52.25,122.71,82.29,148,128,148s75.75-25.29,92.89-46.51a4,4,0,1,1,6.22,5,148.24,148.24,0,0,1-21.32,21.56L227.47,166A4,4,0,0,1,226,171.47Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/EyeClosed.mjs
var f2 = Object.defineProperty;
var i2 = Object.defineProperties;
var p2 = Object.getOwnPropertyDescriptors;
var t3 = Object.getOwnPropertySymbols;
var c2 = Object.prototype.hasOwnProperty;
var d = Object.prototype.propertyIsEnumerable;
var m2 = (o, e2, r) => e2 in o ? f2(o, e2, { enumerable: true, configurable: true, writable: true, value: r }) : o[e2] = r;
var a3 = (o, e2) => {
  for (var r in e2 || (e2 = {}))
    c2.call(e2, r) && m2(o, r, e2[r]);
  if (t3)
    for (var r of t3(e2))
      d.call(e2, r) && m2(o, r, e2[r]);
  return o;
};
var s2 = (o, e2) => i2(o, p2(e2));
var w2 = (0, import_react5.forwardRef)((o, e2) => /* @__PURE__ */ import_react5.default.createElement(b, s2(a3({ ref: e2 }, o), { weights: l })));
w2.displayName = "EyeClosed";

// packages/input/src/password-input.tsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var PasswordInput = (0, import_react6.forwardRef)(
  ({ maskHiddenValue = false, onBlur, onFocus, onValueVisibilityChange, showValue = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = (0, import_react6.useState)(showValue);
    const type = showPassword ? "text" : "password";
    const EyeCon = showPassword ? w : w2;
    (0, import_react6.useEffect)(() => {
      setShowPassword(showValue);
    }, [showValue]);
    const [isFocused, setIsFocused] = (0, import_react6.useState)(false);
    const shouldMaskHiddenValue = maskHiddenValue && !showPassword && !isFocused;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Input,
      {
        onBlur: (event) => {
          setIsFocused(false);
          onBlur?.(event);
        },
        onFocus: (event) => {
          setIsFocused(true);
          onFocus?.(event);
        },
        type,
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputCapture, { className: clsx_default(shouldMaskHiddenValue && "max-w-6") }, void 0, false, {
            fileName: "packages/input/src/password-input.tsx",
            lineNumber: 57,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              type: "button",
              tabIndex: -1,
              className: "ml-1 cursor-pointer bg-inherit p-0 text-body hover:text-strong",
              onClick: () => {
                setShowPassword(!showPassword);
                onValueVisibilityChange?.(!showPassword);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
                  "Turn password visibility ",
                  showPassword ? "off" : "on"
                ] }, void 0, true, {
                  fileName: "packages/input/src/password-input.tsx",
                  lineNumber: 67,
                  columnNumber: 6
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EyeCon, { "aria-hidden": true }, void 0, false, {
                  fileName: "packages/input/src/password-input.tsx",
                  lineNumber: 68,
                  columnNumber: 6
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "packages/input/src/password-input.tsx",
              lineNumber: 58,
              columnNumber: 5
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "packages/input/src/password-input.tsx",
        lineNumber: 44,
        columnNumber: 4
      },
      this
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export {
  Input,
  InputCapture,
  PasswordInput
};
//# sourceMappingURL=/build/_shared/chunk-O6A7XH6E.js.map
