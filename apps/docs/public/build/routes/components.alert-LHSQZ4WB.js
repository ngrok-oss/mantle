import {
  R
} from "/build/_shared/chunk-TAXEKZGW.js";
import {
  Card,
  CardBody
} from "/build/_shared/chunk-ALBVFRJR.js";
import {
  D,
  I,
  k
} from "/build/_shared/chunk-VMZZWZYH.js";
import {
  cva
} from "/build/_shared/chunk-76G7XZOH.js";
import {
  PropDefaultValueCell,
  PropDescriptionCell,
  PropNameCell,
  PropRow,
  PropTypeCell,
  PropsTable,
  StringPropType
} from "/build/_shared/chunk-CCAXX3HL.js";
import "/build/_shared/chunk-E4E5W3BR.js";
import {
  InlineCode
} from "/build/_shared/chunk-B5JUMWCL.js";
import "/build/_shared/chunk-PH4L52LR.js";
import "/build/_shared/chunk-YB45JGV3.js";
import "/build/_shared/chunk-IC4IMGCE.js";
import "/build/_shared/chunk-TYVC565J.js";
import "/build/_shared/chunk-DJ4VH3J3.js";
import "/build/_shared/chunk-UPCWMVF7.js";
import "/build/_shared/chunk-YXKBN4EE.js";
import "/build/_shared/chunk-JDR2CS4I.js";
import {
  Example
} from "/build/_shared/chunk-JVSA6SEF.js";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockCode,
  CodeBlockCopyButton,
  fmtCode
} from "/build/_shared/chunk-MLYZRSVN.js";
import "/build/_shared/chunk-B3GOHHOF.js";
import "/build/_shared/chunk-3LE3N7DD.js";
import "/build/_shared/chunk-ET7BOX4G.js";
import {
  b
} from "/build/_shared/chunk-L6J2GUHO.js";
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
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import "/build/_shared/chunk-VJGIG3I4.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/alert/src/alert.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var alertVariants = cva("relative flex w-full gap-1.5 rounded-md border p-2.5 text-sm", {
  variants: {
    /**
     * The priority of the Alert. Indicates the importance or impact level of the Alert,
     * affecting its color and styling to communicate its purpose to the user.
     * @default "default"
     */
    priority: {
      danger: "border-danger-500/50 bg-danger-500/10 text-danger-700",
      default: "border-neutral-500/50 bg-neutral-500/10 text-neutral-700",
      info: "border-accent-500/50 bg-accent-500/10 text-accent-700",
      success: "border-success-500/50 bg-success-500/10 text-success-700",
      warning: "border-warning-500/50 bg-warning-500/10 text-warning-700"
    }
  },
  defaultVariants: {
    priority: "default"
  }
});
var Alert = (0, import_react.forwardRef)(
  ({ className, priority = "default", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cx(alertVariants({ priority }), className), ...props }, void 0, false, {
    fileName: "packages/alert/src/alert.tsx",
    lineNumber: 34,
    columnNumber: 3
  }, this)
);
Alert.displayName = "Alert";
var AlertContent = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cx("min-w-0 flex-1", className), ...props }, void 0, false, {
  fileName: "packages/alert/src/alert.tsx",
  lineNumber: 43,
  columnNumber: 2
}, this));
AlertContent.displayName = "AlertContent";
var AlertTitle = (0, import_react.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { ref, className: cx("font-medium", className), ...props }, void 0, false, {
    fileName: "packages/alert/src/alert.tsx",
    lineNumber: 51,
    columnNumber: 36
  }, this)
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = (0, import_react.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cx("text-sm", className), ...props }, void 0, false, {
    fileName: "packages/alert/src/alert.tsx",
    lineNumber: 59,
    columnNumber: 36
  }, this)
);
AlertDescription.displayName = "AlertDescription";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Rocket.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/Rocket.mjs
var import_react2 = __toESM(require_react(), 1);
var l = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M156,228a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,228ZM128,116a16,16,0,1,0-16-16A16,16,0,0,0,128,116Zm99.53,40.7-12.36,55.63a19.9,19.9,0,0,1-12.88,14.53A20.16,20.16,0,0,1,195.6,228a19.87,19.87,0,0,1-12.29-4.27L157.17,204H98.83L72.69,223.74A19.87,19.87,0,0,1,60.4,228a20.16,20.16,0,0,1-6.69-1.15,19.9,19.9,0,0,1-12.88-14.53L28.47,156.7a20.1,20.1,0,0,1,4.16-17.14l27.83-33.4A127,127,0,0,1,69.11,69.7c13.27-33.25,37-54.1,46.64-61.52a20,20,0,0,1,24.5,0c9.6,7.42,33.37,28.27,46.64,61.52a127,127,0,0,1,8.65,36.46l27.83,33.4A20.1,20.1,0,0,1,227.53,156.7ZM101.79,180h52.42c19.51-35.7,23-69.78,10.39-101.4C154.4,53,136.2,35.9,128,29.12,119.8,35.9,101.6,53,91.4,78.6,78.78,110.22,82.28,144.3,101.79,180Zm-22.55,8.72a168,168,0,0,1-16.92-47.3l-10,12,10.58,47.64Zm124.43-35.31-10-12a168,168,0,0,1-16.92,47.3l16.33,12.33Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        d: "M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224Zm71.62-68.17-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83Zm-139.23,34Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM140,100a12,12,0,1,0-12,12A12,12,0,0,0,140,100Zm68,52.36-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M150,224a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,224ZM128,110a10,10,0,1,0-10-10A10,10,0,0,0,128,110Zm93.67,45.4L209.31,211A14,14,0,0,1,187,219l-27.79-21H96.82L69,219a14,14,0,0,1-22.34-8L34.33,155.4a14.06,14.06,0,0,1,2.91-12l29-34.76a121.28,121.28,0,0,1,8.48-36.71c12.72-31.88,35.52-51.88,44.73-59a14,14,0,0,1,17.16,0c9.21,7.12,32,27.12,44.73,59a121.28,121.28,0,0,1,8.48,36.71l29,34.76A14.06,14.06,0,0,1,221.67,155.4ZM98.26,186h59.48c21.93-38.46,26.12-75.33,12.43-109.62-11.95-30-34.35-48.87-40.93-54a2,2,0,0,0-2.48,0c-6.58,5.09-29,24-40.93,54C72.14,110.67,76.33,147.54,98.26,186ZM87,190.4c-12-21.49-18.9-42.6-20.62-63.19L46.46,151.08a2,2,0,0,0-.42,1.71l12.37,55.64a2,2,0,0,0,3.2,1.13l.13-.11Zm122.57-39.32-19.89-23.87c-1.72,20.59-8.6,41.7-20.62,63.19l25.23,19,.13.11a2,2,0,0,0,3.2-1.13L210,152.79A2,2,0,0,0,209.54,151.08Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M148,224a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,224ZM128,108a8,8,0,1,0-8-8A8,8,0,0,0,128,108Zm91.72,47L207.35,210.6a11.9,11.9,0,0,1-7.72,8.71,12.17,12.17,0,0,1-4,.69,11.94,11.94,0,0,1-7.43-2.6L159.85,196H96.15L67.81,217.4a11.94,11.94,0,0,1-7.43,2.6,12.17,12.17,0,0,1-4-.69,11.9,11.9,0,0,1-7.72-8.71L36.28,155a12,12,0,0,1,2.5-10.28l29.35-35.23c3.3-53.33,41.83-86.68,52.52-94.94a12,12,0,0,1,14.7,0c10.69,8.26,49.22,41.61,52.52,94.94l29.35,35.23A12,12,0,0,1,219.72,155ZM97.11,188h61.78C214.07,92.49,145,32.05,130.46,20.84a4,4,0,0,0-4.92,0C111,32.05,41.93,92.49,97.11,188Zm-7.52,2.93C75.12,165.56,68.93,142.52,68,122.06L44.92,149.8a4,4,0,0,0-.83,3.43l12.36,55.63a4,4,0,0,0,6.41,2.26l.09-.07ZM211.08,149.8,188,122.06c-.89,20.46-7.08,43.5-21.55,68.87l26.64,20.12.09.07a4,4,0,0,0,6.41-2.26l12.36-55.63A4,4,0,0,0,211.08,149.8Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Rocket.mjs
var f = Object.defineProperty;
var i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var R2 = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t;
var a2 = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      R2.call(e, t) && m(o, t, e[t]);
  return o;
};
var c = (o, e) => i(o, p(e));
var w = (0, import_react3.forwardRef)((o, e) => /* @__PURE__ */ import_react3.default.createElement(b, c(a2({ ref: e }, o), { weights: l })));
w.displayName = "Rocket";

// app/routes/components.alert.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.alert.tsx"
  );
  import.meta.hot.lastModified = "1724091104713.02";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Alert"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Alert" }, void 0, false, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Displays a callout for user attention." }, void 0, false, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(w, { className: "size-5" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 53,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Default" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 55,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "This is a default Alert." }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 56,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 54,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 52,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "danger", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, { className: "size-5" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 60,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Danger" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 62,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "This is a danger Alert." }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 63,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 61,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 59,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "info", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(R, { className: "size-5" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 67,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Info" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 69,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "This is an info Alert." }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 70,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 68,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 66,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "success", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(k, { className: "size-5" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 74,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Success" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 76,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "This is a success Alert." }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 77,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 75,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 73,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "warning", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(D, { className: "size-5" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 81,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Warning" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 83,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "This is a warning Alert." }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 84,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 82,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 80,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 51,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 90,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle/alert";

									<Alert>
										<Rocket className="size-5" />
										<AlertContent>
											<AlertTitle>Default</AlertTitle>
											<AlertDescription>This is a default Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger</AlertTitle>
											<AlertDescription>This is a danger Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="info">
										<Info className="size-5" />
										<AlertContent>
											<AlertTitle>Info</AlertTitle>
											<AlertDescription>This is an info Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="success">
										<CheckCircle className="size-5" />
										<AlertContent>
											<AlertTitle>Success</AlertTitle>
											<AlertDescription>This is a success Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="warning">
										<WarningDiamond className="size-5" />
										<AlertContent>
											<AlertTitle>Warning</AlertTitle>
											<AlertDescription>This is a warning Alert.</AlertDescription>
										</AlertContent>
									</Alert>
								` }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 91,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 89,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 88,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.alert.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }, void 0, false, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 136,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "You can mix and match what you put inside the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Alert" }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 140,
          columnNumber: 52
        }, this),
        " component to create different types of Alert layouts."
      ] }, void 0, true, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 139,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Danger ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Alert" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 147,
                columnNumber: 16
              }, this),
              " with icon"
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 146,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "danger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, { className: "size-5" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 150,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Danger Will Robinson" }, void 0, false, {
                  fileName: "app/routes/components.alert.tsx",
                  lineNumber: 152,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "Cupidatat ullamco commodo laborum consectetur ut mollit et nostrud amet elit ut Lorem culpa." }, void 0, false, {
                  fileName: "app/routes/components.alert.tsx",
                  lineNumber: 153,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 151,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 149,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 145,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Danger ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Alert" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 161,
                columnNumber: 16
              }, this),
              " without icon"
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 160,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "danger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Danger Will Robinson" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 165,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "Cupidatat ullamco commodo laborum consectetur ut mollit et nostrud amet elit ut Lorem culpa." }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 166,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 164,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 163,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 159,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Danger ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Alert" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 174,
                columnNumber: 16
              }, this),
              " with icon and no description"
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 173,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "danger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, { className: "size-5" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 177,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Danger Will Robinson" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 179,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 178,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 176,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 172,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-sm space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Danger ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Alert" }, void 0, false, {
                fileName: "app/routes/components.alert.tsx",
                lineNumber: 185,
                columnNumber: 16
              }, this),
              " without icon or description"
            ] }, void 0, true, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 184,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "danger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Danger Will Robinson" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 189,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 188,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 187,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 183,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 144,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 196,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle/alert";
									import { Warning } from "@phosphor-icons/react";

									// Danger Alert with icon
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
											<AlertDescription>This is a danger alert.</AlertDescription>
										</AlertContent>
									</Alert>

									// Danger Alert without icon
									<Alert priority="danger">
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
											<AlertDescription>This is a danger alert.</AlertDescription>
										</AlertContent>
									</Alert>

									// Danger Alert with icon and no description
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
										</AlertContent>
									</Alert>

									// Danger Alert without icon or description
									<Alert priority="danger">
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
										</AlertContent>
									</Alert>
								` }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 197,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 195,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 194,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 143,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.alert.tsx",
      lineNumber: 135,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "example-banner", className: "text-3xl font-medium", children: "Banners" }, void 0, false, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 239,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "For banner-like alerts, set ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "rounded-none" }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 243,
          columnNumber: 34
        }, this),
        " on the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Alert" }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 243,
          columnNumber: 79
        }, this),
        " ",
        "component."
      ] }, void 0, true, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 242,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-56 space-y-4 border border-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { priority: "info", className: "rounded-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(w, { className: "size-5" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 250,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "This is an info Alert as a page banner" }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 252,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.alert.tsx",
              lineNumber: 251,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 249,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "mx-auto max-w-screen-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "my-4", children: "Laboris commodo Lorem anim consequat ut dolore proident." }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 257,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 256,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 255,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 248,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 247,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 264,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Alert, AlertContent, AlertTitle } from "@ngrok/mantle/alert";
									import { Rocket } from "@phosphor-icons/react";

									<Alert priority="info" className="rounded-none">
										<Rocket className="size-5" />
										<AlertContent>
											<AlertTitle>This is an info Alert as a page banner</AlertTitle>
										</AlertContent>
									</Alert>
								` }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 265,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 263,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 262,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 246,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.alert.tsx",
      lineNumber: 238,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "mt-16 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 282,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropsTable, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "priority", optional: true }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 287,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "danger" }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 291,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 290,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "default" }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 294,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 293,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "info" }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 297,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 296,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "success" }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 300,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 299,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "warning" }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 303,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 302,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 289,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 288,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "outlined" }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 308,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 307,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          "Indicates the importance or impact level of the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Alert" }, void 0, false, {
            fileName: "app/routes/components.alert.tsx",
            lineNumber: 312,
            columnNumber: 57
          }, this),
          ", affecting its color and styling to communicate its purpose to the user."
        ] }, void 0, true, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 311,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.alert.tsx",
          lineNumber: 310,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 286,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.alert.tsx",
        lineNumber: 285,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.alert.tsx",
      lineNumber: 281,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.alert.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.alert-LHSQZ4WB.js.map
