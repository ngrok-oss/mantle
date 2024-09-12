import {
  Close,
  Content,
  Description,
  I,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger
} from "/build/_shared/chunk-77TEQJIV.js";
import {
  Separator
} from "/build/_shared/chunk-SZ2MWSLF.js";
import {
  R
} from "/build/_shared/chunk-CK4ERQXV.js";
import "/build/_shared/chunk-OYR227OB.js";
import {
  IconButton
} from "/build/_shared/chunk-4ETGGIWM.js";
import {
  Button
} from "/build/_shared/chunk-SHVMSGFH.js";
import "/build/_shared/chunk-ATBEVGT6.js";
import {
  cva
} from "/build/_shared/chunk-76G7XZOH.js";
import "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
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

// packages/sheet/src/sheet.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Sheet = Root;
var SheetTrigger = Trigger;
var SheetClose = Close;
var SheetPortal = Portal;
var SheetOverlay = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Overlay,
  {
    className: cx(
      "fixed inset-0 z-40 bg-overlay backdrop-blur-sm data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:animate-in data-state-open:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  false,
  {
    fileName: "packages/sheet/src/sheet.tsx",
    lineNumber: 44,
    columnNumber: 2
  },
  this
));
SheetOverlay.displayName = Overlay.displayName;
var SheetVariants = cva(
  "fixed z-40 flex flex-col bg-dialog shadow-lg outline-none transition ease-in-out focus-within:outline-none data-state-closed:duration-100 data-state-closed:animate-out data-state-open:duration-100 data-state-open:animate-in",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-dialog data-state-closed:slide-out-to-top data-state-open:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t border-dialog data-state-closed:slide-out-to-bottom data-state-open:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-full border-r border-dialog data-state-closed:slide-out-to-left data-state-open:slide-in-from-left sm:max-w-[30rem]",
        right: "inset-y-0 right-0 h-full w-full border-l border-dialog data-state-closed:slide-out-to-right data-state-open:slide-in-from-right sm:max-w-[30rem]"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = (0, import_react.forwardRef)(
  ({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetOverlay, {}, void 0, false, {
      fileName: "packages/sheet/src/sheet.tsx",
      lineNumber: 84,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { ref, className: cx(SheetVariants({ side }), className), ...props, children }, void 0, false, {
      fileName: "packages/sheet/src/sheet.tsx",
      lineNumber: 85,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "packages/sheet/src/sheet.tsx",
    lineNumber: 83,
    columnNumber: 3
  }, this)
);
SheetContent.displayName = Content.displayName;
var SheetCloseIconButton = ({
  size = "md",
  type = "button",
  label = "Close Sheet",
  appearance = "ghost",
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { appearance, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(R, {}, void 0, false, {
  fileName: "packages/sheet/src/sheet.tsx",
  lineNumber: 106,
  columnNumber: 45
}, this), label, size, type, ...props }, void 0, false, {
  fileName: "packages/sheet/src/sheet.tsx",
  lineNumber: 106,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "packages/sheet/src/sheet.tsx",
  lineNumber: 105,
  columnNumber: 2
}, this);
var SheetBody = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx("scrollbar flex-1 overflow-y-auto p-6 text-body", className), ...props }, void 0, false, {
  fileName: "packages/sheet/src/sheet.tsx",
  lineNumber: 115,
  columnNumber: 2
}, this);
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    className: cx(
      "flex shrink-0 flex-col gap-2 border-b border-dialog-muted py-4 pl-6 pr-4",
      "has-[.icon-button]:pr-4",
      // when there are actions in the header, shorten the padding
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/sheet/src/sheet.tsx",
    lineNumber: 123,
    columnNumber: 2
  },
  this
);
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    className: cx("flex shrink-0 justify-end gap-2 border-t border-dialog-muted px-6 py-2.5", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/sheet/src/sheet.tsx",
    lineNumber: 138,
    columnNumber: 2
  },
  this
);
var SheetTitle = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Title,
  {
    ref,
    className: cx("flex-1 truncate text-lg font-medium text-strong", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/sheet/src/sheet.tsx",
    lineNumber: 152,
    columnNumber: 2
  },
  this
));
SheetTitle.displayName = Title.displayName;
var SheetTitleGroup = (0, import_react.forwardRef)(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx("flex items-center justify-between gap-2", className), ...props, ref, children }, void 0, false, {
    fileName: "packages/sheet/src/sheet.tsx",
    lineNumber: 165,
    columnNumber: 3
  }, this)
);
SheetTitleGroup.displayName = "SheetTitleGroup";
var SheetDescription = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { ref, className: cx("text-sm text-body", className), ...props }, void 0, false, {
  fileName: "packages/sheet/src/sheet.tsx",
  lineNumber: 179,
  columnNumber: 2
}, this));
SheetDescription.displayName = Description.displayName;
var SheetActions = (0, import_react.forwardRef)(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx("flex h-full items-center gap-2", className), ...props, ref, children }, void 0, false, {
    fileName: "packages/sheet/src/sheet.tsx",
    lineNumber: 188,
    columnNumber: 3
  }, this)
);
SheetActions.displayName = "SheetActions";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/ListMagnifyingGlass.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/ListMagnifyingGlass.mjs
var import_react2 = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76h64a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm80,40H40a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Zm120.49,20.49a12,12,0,0,1-17,0l-18.08-18.08a44,44,0,1,1,17-17l18.08,18.07A12,12,0,0,1,240.49,200.49ZM184,164a20,20,0,1,0-20-20A20,20,0,0,0,184,164Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M216,144a32,32,0,1,1-32-32A32,32,0,0,1,216,144Z", opacity: "0.2" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,2.34L217.36,166A40,40,0,1,0,206,177.36l20.3,20.3a8,8,0,0,0,11.32-11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70h72a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm88,52H40a6,6,0,0,0,0,12h88a6,6,0,0,0,0-12Zm108.24,10.24a6,6,0,0,1-8.48,0l-21.49-21.48a38.06,38.06,0,1,1,8.49-8.49l21.48,21.49A6,6,0,0,1,236.24,196.24ZM184,170a26,26,0,1,0-26-26A26,26,0,0,0,184,170Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68h72a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm88,56H40a4,4,0,0,0,0,8h88a4,4,0,0,0,0-8Zm106.83,6.83a4,4,0,0,1-5.66,0l-22.72-22.72a36.06,36.06,0,1,1,5.66-5.66l22.72,22.72A4,4,0,0,1,234.83,194.83ZM184,172a28,28,0,1,0-28-28A28,28,0,0,0,184,172Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/ListMagnifyingGlass.mjs
var m = Object.defineProperty;
var f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty;
var p = Object.prototype.propertyIsEnumerable;
var e = (i2, a4, s2) => a4 in i2 ? m(i2, a4, { enumerable: true, configurable: true, writable: true, value: s2 }) : i2[a4] = s2;
var o = (i2, a4) => {
  for (var s2 in a4 || (a4 = {}))
    g.call(a4, s2) && e(i2, s2, a4[s2]);
  if (t2)
    for (var s2 of t2(a4))
      p.call(a4, s2) && e(i2, s2, a4[s2]);
  return i2;
};
var r = (i2, a4) => f(i2, n(a4));
var w = (0, import_react3.forwardRef)((i2, a4) => /* @__PURE__ */ import_react3.default.createElement(b, r(o({ ref: a4 }, i2), { weights: t })));
w.displayName = "ListMagnifyingGlass";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/TerminalWindow.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/TerminalWindow.mjs
var import_react4 = __toESM(require_react(), 1);
var t3 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(
      "path",
      {
        d: "M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/TerminalWindow.mjs
var n2 = Object.defineProperty;
var f2 = Object.defineProperties;
var p2 = Object.getOwnPropertyDescriptors;
var m2 = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var c2 = Object.prototype.propertyIsEnumerable;
var a3 = (o2, e2, r2) => e2 in o2 ? n2(o2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : o2[e2] = r2;
var i = (o2, e2) => {
  for (var r2 in e2 || (e2 = {}))
    s.call(e2, r2) && a3(o2, r2, e2[r2]);
  if (m2)
    for (var r2 of m2(e2))
      c2.call(e2, r2) && a3(o2, r2, e2[r2]);
  return o2;
};
var t4 = (o2, e2) => f2(o2, p2(e2));
var R2 = (0, import_react5.forwardRef)((o2, e2) => /* @__PURE__ */ import_react5.default.createElement(b, t4(i({ ref: e2 }, o2), { weights: t3 })));
R2.displayName = "TerminalWindow";

// app/routes/components.sheet.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.sheet.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.sheet.tsx"
  );
  import.meta.hot.lastModified = "1724091104717.7026";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Sheet"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Sheet" }, void 0, false, {
      fileName: "app/routes/components.sheet.tsx",
      lineNumber: 44,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A container that overlays the current view from the edge of the screen. It is a lightweight way of allowing users to complete a task without losing contextual information of the view beneath it." }, void 0, false, {
      fileName: "app/routes/components.sheet.tsx",
      lineNumber: 45,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Sheet, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Open Sheet" }, void 0, false, {
          fileName: "app/routes/components.sheet.tsx",
          lineNumber: 54,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.sheet.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetTitleGroup, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetTitle, { children: "Are you absolutely sure?" }, void 0, false, {
                fileName: "app/routes/components.sheet.tsx",
                lineNumber: 61,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetActions, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconButton, { appearance: "ghost", type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(R2, {}, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 63,
                  columnNumber: 62
                }, this), label: "Start a Tunnel" }, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 63,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconButton, { appearance: "ghost", type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(w, {}, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 64,
                  columnNumber: 62
                }, this), label: "See Traffic" }, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 64,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconButton, { appearance: "ghost", type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, {}, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 65,
                  columnNumber: 62
                }, this), label: "Delete" }, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 65,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Separator, { orientation: "vertical", className: "h-[80%]" }, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 66,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetCloseIconButton, { appearance: "ghost" }, void 0, false, {
                  fileName: "app/routes/components.sheet.tsx",
                  lineNumber: 67,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.sheet.tsx",
                lineNumber: 62,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 60,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 70,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.sheet.tsx",
            lineNumber: 59,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetBody, { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Consequat do voluptate culpa fugiat consequat nostrud duis aliqua minim. Tempor voluptate cillum elit velit. Voluptate aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit proident amet." }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 76,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Et aliquip fugiat laborum id enim velit exercitation tempor irure pariatur commodo dolor tempor eu. Consectetur sunt est occaecat quis eiusmod ea cillum sunt sunt labore consequat aute. Aute ad anim do et enim nisi adipisicing sunt culpa magna reprehenderit. Reprehenderit dolor elit cupidatat veniam dolore. Consectetur occaecat ea est elit ipsum." }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 80,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Est pariatur exercitation commodo in veniam enim dolor. Labore consequat cupidatat ipsum enim deserunt exercitation ipsum Lorem. Ea dolor adipisicing et labore Lorem." }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 86,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Incididunt culpa proident qui in. Nulla do quis pariatur veniam est reprehenderit dolore. Occaecat consectetur incididunt incididunt commodo cillum amet aliqua id pariatur sunt. Laborum amet magna id sunt. Nulla nisi minim et eu incididunt irure fugiat laboris labore nostrud eiusmod irure adipisicing. Exercitation pariatur voluptate occaecat anim irure ad tempor est. Do culpa culpa occaecat ut pariatur elit do exercitation consectetur sint aliqua voluptate." }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 90,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Culpa Lorem fugiat mollit est velit enim fugiat reprehenderit consequat eu. Commodo eiusmod irure anim culpa consequat in commodo ad nostrud amet pariatur. Eiusmod velit qui reprehenderit consequat proident esse amet consequat. Exercitation nostrud laborum labore anim nulla consequat elit quis ullamco nisi minim. Voluptate aliqua magna eu proident qui ipsum officia laboris. Ad veniam eiusmod mollit laborum sit pariatur do eu nostrud quis. Adipisicing ea labore duis laboris ex aute ea ut magna sit nisi dolor." }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 97,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Amet adipisicing quis fugiat cillum do commodo culpa deserunt minim. Fugiat enim veniam ex ullamco minim laboris labore culpa occaecat ut exercitation occaecat culpa quis. Veniam quis velit enim id veniam nisi non consequat laboris. Reprehenderit fugiat nostrud voluptate esse et nulla mollit eiusmod veniam sunt adipisicing. Aute quis mollit non quis ullamco consectetur labore quis do occaecat. Veniam id laboris adipisicing fugiat." }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 105,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.sheet.tsx",
            lineNumber: 75,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SheetClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", children: "Close" }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 115,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 114,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Save" }, void 0, false, {
              fileName: "app/routes/components.sheet.tsx",
              lineNumber: 117,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.sheet.tsx",
            lineNumber: 113,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.sheet.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.sheet.tsx",
        lineNumber: 52,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.sheet.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.sheet.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
								import { Button, IconButton } from "@ngrok/mantle/button";
								import { Separator } from "@ngrok/mantle/separator";
								import {
									Sheet,
									SheetActions,
									SheetBody,
									SheetClose,
									SheetCloseIconButton,
									SheetContent,
									SheetDescription,
									SheetFooter,
									SheetHeader,
									SheetTitle,
									SheetTitleGroup,
									SheetTrigger,
								} from "@/ngrok/mantle/sheet";
								import { ListMagnifyingGlass } from "@phosphor-icons/react/ListMagnifyingGlass";
								import { TerminalWindow } from "@phosphor-icons/react/TerminalWindow";
								import { TrashSimple } from "@phosphor-icons/react/TrashSimple";

								<Sheet>
									<SheetTrigger asChild>
										<Button type="button" appearance="filled">Open Sheet</Button>
									</SheetTrigger>
									<SheetContent>
										<SheetHeader>
											<SheetTitleGroup>
												<SheetTitle>Are you absolutely sure?</SheetTitle>
												<SheetActions>
													<IconButton appearance="ghost" type="button" icon={<TerminalWindow />} label="Start a Tunnel" />
													<IconButton appearance="ghost" type="button" icon={<ListMagnifyingGlass />} label="See Traffic" />
													<IconButton appearance="ghost" type="button" icon={<TrashSimple />} label="Delete" />
													<Separator orientation="vertical" className="h-[80%]" />
													<SheetCloseIconButton appearance="ghost" />
												</SheetActions>
											</SheetTitleGroup>
											<SheetDescription>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</SheetDescription>
										</SheetHeader>
										<SheetBody className="space-y-4">
											<p>
												Lorem ipsum
											</p>
										</SheetBody>
										<SheetFooter>
											<SheetClose asChild>
												<Button type="button">Close</Button>
											</SheetClose>
										</SheetFooter>
									</SheetContent>
								</Sheet>
							` }, void 0, false, {
          fileName: "app/routes/components.sheet.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.sheet.tsx",
        lineNumber: 125,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.sheet.tsx",
        lineNumber: 124,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.sheet.tsx",
      lineNumber: 50,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.sheet.tsx",
    lineNumber: 43,
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
//# sourceMappingURL=/build/routes/components.sheet-32LZPT6K.js.map
