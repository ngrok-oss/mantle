import {
  Item,
  Root,
  createRovingFocusGroupScope
} from "/build/_shared/chunk-2M7YGNNJ.js";
import {
  G
} from "/build/_shared/chunk-XVB6PEYH.js";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-ALBVFRJR.js";
import {
  useDirection
} from "/build/_shared/chunk-ZYLV2OEO.js";
import {
  Input,
  PasswordInput
} from "/build/_shared/chunk-O6A7XH6E.js";
import "/build/_shared/chunk-VMZZWZYH.js";
import "/build/_shared/chunk-NG7IOVW6.js";
import "/build/_shared/chunk-4ETGGIWM.js";
import {
  Button
} from "/build/_shared/chunk-SHVMSGFH.js";
import "/build/_shared/chunk-ATBEVGT6.js";
import "/build/_shared/chunk-76G7XZOH.js";
import "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
import {
  Presence,
  useId
} from "/build/_shared/chunk-DJ4VH3J3.js";
import {
  composeEventHandlers,
  createContextScope,
  useControllableState
} from "/build/_shared/chunk-UPCWMVF7.js";
import {
  Primitive
} from "/build/_shared/chunk-YXKBN4EE.js";
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
import {
  require_jsx_runtime
} from "/build/_shared/chunk-ET7BOX4G.js";
import {
  b
} from "/build/_shared/chunk-L6J2GUHO.js";
import {
  clsx_default,
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

// node_modules/.pnpm/@radix-ui+react-tabs@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-tabs/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key))
                context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React.useRef(isSelected);
    React.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2 = Tabs;
var List = TabsList;
var Trigger = TabsTrigger;
var Content = TabsContent;

// packages/tabs/src/tabs.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var TabsStateContext = (0, import_react.createContext)({ orientation: "horizontal" });
var Tabs2 = (0, import_react.forwardRef)(
  ({ className, children, orientation = "horizontal", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Root2,
    {
      className: cx("flex gap-4", orientation === "horizontal" ? "flex-col" : "flex-row", className),
      orientation,
      ref,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsStateContext.Provider, { value: { orientation }, children }, void 0, false, {
        fileName: "packages/tabs/src/tabs.tsx",
        lineNumber: 26,
        columnNumber: 4
      }, this)
    },
    void 0,
    false,
    {
      fileName: "packages/tabs/src/tabs.tsx",
      lineNumber: 20,
      columnNumber: 3
    },
    this
  )
);
Tabs2.displayName = "Tabs";
var TabsList2 = (0, import_react.forwardRef)(
  ({ className, ...props }, ref) => {
    const ctx = (0, import_react.useContext)(TabsStateContext);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      List,
      {
        "aria-orientation": ctx.orientation,
        className: cx(
          "flex border-gray-200",
          ctx.orientation === "horizontal" ? "flex-row items-center gap-6 border-b" : "flex-col items-end gap-[0.875rem] self-stretch border-r",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "packages/tabs/src/tabs.tsx",
        lineNumber: 37,
        columnNumber: 4
      },
      this
    );
  }
);
TabsList2.displayName = "TabsList";
var TabsTrigger2 = (0, import_react.forwardRef)(
  ({ children, className, ...props }, ref) => {
    const ctx = (0, import_react.useContext)(TabsStateContext);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Trigger,
      {
        className: cx(
          "group/tab-trigger relative flex cursor-pointer items-center gap-1 whitespace-nowrap py-3 text-sm font-medium text-gray-600",
          ctx.orientation === "horizontal" && "rounded-tl-md rounded-tr-md",
          ctx.orientation === "vertical" && "rounded-bl-md rounded-tl-md pr-3",
          "outline-none ring-focus-accent",
          "disabled:cursor-default disabled:opacity-50",
          "focus-visible:ring-4",
          "[&>svg]:size-6 [&>svg]:shrink-0 [&>svg]:sm:size-5",
          "not-disabled:hover:text-gray-900 not-disabled:hover:data-state-active:text-blue-600",
          "data-state-active:text-blue-600",
          className
        ),
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "span",
            {
              "aria-hidden": true,
              className: clsx_default(
                "absolute z-1 group-data-state-active/tab-trigger:bg-blue-600",
                ctx.orientation === "horizontal" && "-bottom-px left-0 right-0 h-[0.1875rem]",
                ctx.orientation === "vertical" && "-right-px bottom-0 top-0 w-[0.1875rem]"
              )
            },
            void 0,
            false,
            {
              fileName: "packages/tabs/src/tabs.tsx",
              lineNumber: 77,
              columnNumber: 5
            },
            this
          ),
          children
        ]
      },
      void 0,
      true,
      {
        fileName: "packages/tabs/src/tabs.tsx",
        lineNumber: 61,
        columnNumber: 4
      },
      this
    );
  }
);
TabsTrigger2.displayName = "TabsTrigger";
var TabBadge = ({ className, children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "span",
  {
    className: cx(
      "rounded-full bg-gray-500/20 px-1.5 text-xs font-medium text-gray-600",
      "group-data-state-active/tab-trigger:bg-blue-500/20 group-data-state-active/tab-trigger:text-blue-700 group-hover/tab-trigger:group-enabled/tab-trigger:group-data-state-active/tab-trigger:text-blue-700",
      "group-hover/tab-trigger:group-enabled/tab-trigger:text-gray-700",
      className
    ),
    ...props,
    children
  },
  void 0,
  false,
  {
    fileName: "packages/tabs/src/tabs.tsx",
    lineNumber: 93,
    columnNumber: 2
  },
  this
);
var TabsContent2 = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Content,
  {
    ref,
    className: cx("outline-none focus-visible:ring-4 focus-visible:ring-focus-accent", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/tabs/src/tabs.tsx",
    lineNumber: 110,
    columnNumber: 2
  },
  this
));
TabsContent2.displayName = "TabsContent";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/ShieldCheck.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/ShieldCheck.mjs
var import_react2 = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,35.71-13.09,64.69-38.91,86.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V60H204ZM79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        d: "M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,68c0,38.44-14.23,69.63-42.29,92.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11C58.23,181.63,44,150.44,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-41.17-10.83a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/ShieldCheck.mjs
var c = Object.defineProperty;
var f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty;
var s = Object.prototype.propertyIsEnumerable;
var m = (o, e2, r) => e2 in o ? c(o, e2, { enumerable: true, configurable: true, writable: true, value: r }) : o[e2] = r;
var a2 = (o, e2) => {
  for (var r in e2 || (e2 = {}))
    p.call(e2, r) && m(o, r, e2[r]);
  if (t2)
    for (var r of t2(e2))
      s.call(e2, r) && m(o, r, e2[r]);
  return o;
};
var i = (o, e2) => f(o, h(e2));
var w = (0, import_react3.forwardRef)((o, e2) => /* @__PURE__ */ import_react3.default.createElement(b, i(a2({ ref: e2 }, o), { weights: t })));
w.displayName = "ShieldCheck";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/User.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/User.mjs
var import_react4 = __toESM(require_react(), 1);
var t3 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z", opacity: "0.2" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/User.mjs
var f2 = Object.defineProperty;
var i2 = Object.defineProperties;
var p2 = Object.getOwnPropertyDescriptors;
var t4 = Object.getOwnPropertySymbols;
var c2 = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
var m2 = (r, e2, o) => e2 in r ? f2(r, e2, { enumerable: true, configurable: true, writable: true, value: o }) : r[e2] = o;
var a3 = (r, e2) => {
  for (var o in e2 || (e2 = {}))
    c2.call(e2, o) && m2(r, o, e2[o]);
  if (t4)
    for (var o of t4(e2))
      n.call(e2, o) && m2(r, o, e2[o]);
  return r;
};
var s2 = (r, e2) => i2(r, p2(e2));
var R = (0, import_react5.forwardRef)((r, e2) => /* @__PURE__ */ import_react5.default.createElement(b, s2(a3({ ref: e2 }, r), { weights: t3 })));
R.displayName = "User";

// app/routes/components.tabs.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.tabs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.tabs.tsx"
  );
  import.meta.hot.lastModified = "1724091104718.0935";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Tabs"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Tabs" }, void 0, false, {
      fileName: "app/routes/components.tabs.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A set of layered sections of content\u2014known as tab panels\u2014that are displayed one at a time." }, void 0, false, {
      fileName: "app/routes/components.tabs.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "mt-4 grid gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs2, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsList2, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-1", children: "Tab Title" }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-2", children: "Tab Title" }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { disabled: true, value: "tab-3", children: "Tab Title" }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-4", children: "Tab Title" }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 53,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs2, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsList2, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 65,
              columnNumber: 10
            }, this),
            "Tab Title"
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 69,
              columnNumber: 10
            }, this),
            "Tab Title"
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { disabled: true, value: "tab-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 73,
              columnNumber: 10
            }, this),
            "Tab Title"
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 77,
              columnNumber: 10
            }, this),
            "Tab Title"
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 63,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 62,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs2, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsList2, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-1", children: [
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 86,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-2", children: [
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 90,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { disabled: true, value: "tab-3", children: [
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 94,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-4", children: [
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 98,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 83,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs2, { orientation: "horizontal", defaultValue: "tab-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsList2, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 105,
              columnNumber: 10
            }, this),
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 107,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 110,
              columnNumber: 10
            }, this),
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 112,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 109,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { disabled: true, value: "tab-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 115,
              columnNumber: 10
            }, this),
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 117,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 114,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "tab-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(G, {}, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 120,
              columnNumber: 10
            }, this),
            "Tab Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "32" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 122,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 119,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 103,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs2, { orientation: "horizontal", defaultValue: "account", className: "w-[400px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsList2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "account", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(R, {}, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 129,
                columnNumber: 10
              }, this),
              "Account",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBadge, { children: "2" }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 131,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 128,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "password", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(w, {}, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 134,
                columnNumber: 10
              }, this),
              "Password"
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 133,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 127,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsContent2, { value: "account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Account" }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 141,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-muted", children: "Make changes to your account here. Click save when you're done." }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 142,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 140,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 146,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "name", defaultValue: "Cody Price" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 147,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 145,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "username", children: "Username" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 150,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "username", defaultValue: "@cody-dot-js" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 151,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 149,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 144,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", children: "Save changes" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 155,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 154,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 139,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 138,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsContent2, { value: "password", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Password" }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 162,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-muted", children: "Change your password here. After saving, you'll be logged out." }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 163,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 161,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "current", children: "Current password" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 167,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput, { id: "current" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 168,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 166,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "new", children: "New password" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 171,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput, { id: "new" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 172,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 170,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 165,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", children: "Save password" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 176,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 175,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 160,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 159,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs2, { orientation: "vertical", defaultValue: "account", className: "max-w-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsList2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "account", children: "Account" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 183,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "password", children: "Password" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 184,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger2, { value: "disabled-tab", disabled: true, children: "Disabled tab" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 185,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 182,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsContent2, { value: "account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Account" }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 192,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-muted", children: "Make changes to your account here. Click save when you're done." }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 193,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 191,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 197,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "name", defaultValue: "Cody Price" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 198,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 196,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "username", children: "Username" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 201,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "username", defaultValue: "@cody-dot-js" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 202,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 200,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 195,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", children: "Save changes" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 206,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 205,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 189,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsContent2, { value: "password", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Password" }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 213,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-muted", children: "Change your password here. After saving, you'll be logged out." }, void 0, false, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 214,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 212,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "current", children: "Current password" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 218,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput, { id: "current" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 219,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 217,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "new", children: "New password" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 222,
                  columnNumber: 12
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput, { id: "new" }, void 0, false, {
                  fileName: "app/routes/components.tabs.tsx",
                  lineNumber: 223,
                  columnNumber: 12
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.tabs.tsx",
                lineNumber: 221,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 216,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", children: "Save password" }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 227,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.tabs.tsx",
              lineNumber: 226,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 211,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.tabs.tsx",
            lineNumber: 210,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 181,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.tabs.tsx",
        lineNumber: 51,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 235,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";
									import { Input, PasswordInput } from "@ngrok/mantle/input";
									import { TabBadge, Tabs, TabsContent, TabsList, TabsTrigger } from "@ngrok/mantle/tabs";

									<Tabs orientation="horizontal" defaultValue="account" className="w-[400px]">
										<TabsList>
											<TabsTrigger value="account">
												<User />
												Account
												<TabBadge>2</TabBadge>
											</TabsTrigger>
											<TabsTrigger value="password">
												<ShieldCheck />
												Password
											</TabsTrigger>
										</TabsList>
										<TabsContent value="account">
											<Card>
												<CardHeader>
													<CardTitle>Account</CardTitle>
													<p className="text-muted">Make changes to your account here. Click save when you're done.</p>
												</CardHeader>
												<CardBody className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="name">Name</label>
														<Input id="name" defaultValue="Cody Price" />
													</div>
													<div className="space-y-1">
														<label htmlFor="username">Username</label>
														<Input id="username" defaultValue="@cody-dot-js" />
													</div>
												</CardBody>
												<CardFooter>
													<Button type="button">Save changes</Button>
												</CardFooter>
											</Card>
										</TabsContent>
										<TabsContent value="password">
											<Card>
												<CardHeader>
													<CardTitle>Password</CardTitle>
													<p className="text-muted">Change your password here. After saving, you'll be logged out.</p>
												</CardHeader>
												<CardBody className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="current">Current password</label>
														<PasswordInput id="current" />
													</div>
													<div className="space-y-1">
														<label htmlFor="new">New password</label>
														<PasswordInput id="new" />
													</div>
												</CardBody>
												<CardFooter>
													<Button type="button">Save password</Button>
												</CardFooter>
											</Card>
										</TabsContent>
									</Tabs>
								` }, void 0, false, {
          fileName: "app/routes/components.tabs.tsx",
          lineNumber: 236,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.tabs.tsx",
        lineNumber: 234,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/components.tabs.tsx",
        lineNumber: 233,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.tabs.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.tabs.tsx",
    lineNumber: 45,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/components.tabs.tsx",
    lineNumber: 44,
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
//# sourceMappingURL=/build/routes/components.tabs-QWFGCPF5.js.map
