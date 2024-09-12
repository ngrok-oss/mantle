import {
  usePrevious
} from "/build/_shared/chunk-3V5PLWGK.js";
import {
  Label
} from "/build/_shared/chunk-7PO2QPUK.js";
import {
  parseBooleanish
} from "/build/_shared/chunk-ATBEVGT6.js";
import {
  useSize
} from "/build/_shared/chunk-IC4IMGCE.js";
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
import {
  useComposedRefs
} from "/build/_shared/chunk-3LE3N7DD.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-ET7BOX4G.js";
import "/build/_shared/chunk-L6J2GUHO.js";
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

// node_modules/.pnpm/@radix-ui+react-switch@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-switch/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      ...switchProps
    } = props;
    const [button, setButton] = React.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React.useRef(false);
    const isFormControl = button ? Boolean(button.closest("form")) : true;
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current)
                event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        BubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = React.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "input",
    {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch;
var Thumb = SwitchThumb;

// packages/switch/src/switch.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Switch2 = (0, import_react.forwardRef)(
  ({ "aria-readonly": _ariaReadOnly, className, readOnly: _readOnly, onChange, ...props }, ref) => {
    const readOnly = parseBooleanish(_readOnly ?? _ariaReadOnly);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Root,
      {
        "aria-readonly": readOnly,
        className: cx(
          "peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full outline-none sm:h-5 sm:w-9",
          "disabled:cursor-default disabled:opacity-50",
          "focus-visible:border-accent-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-accent",
          "data-state-checked:bg-blue-500 data-state-unchecked:bg-gray-400",
          className
        ),
        onChange: (event) => {
          if (readOnly) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          onChange?.(event);
        },
        ref,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Thumb,
          {
            className: clsx_default(
              "pointer-events-none block size-5 rounded-full bg-[#fff] shadow-md ring-0 transition-transform sm:size-4",
              "data-state-checked:translate-x-[1.125rem] data-state-unchecked:translate-x-[0.125rem]"
            )
          },
          void 0,
          false,
          {
            fileName: "packages/switch/src/switch.tsx",
            lineNumber: 42,
            columnNumber: 5
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "packages/switch/src/switch.tsx",
        lineNumber: 21,
        columnNumber: 4
      },
      this
    );
  }
);
Switch2.displayName = "Switch";

// app/routes/components.switch.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.switch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.switch.tsx"
  );
  import.meta.hot.lastModified = "1724091104717.8828";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Switch"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Switch" }, void 0, false, {
      fileName: "app/routes/components.switch.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A control that allows the user to toggle between checked and not checked." }, void 0, false, {
      fileName: "app/routes/components.switch.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "mt-4 grid gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "airplane-mode", className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Switch2, { id: "airplane-mode", readOnly: true }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 48,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Airplane Mode" }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 49,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.switch.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "unchecked", className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Switch2, { checked: false, id: "unchecked", readOnly: true }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 52,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Unchecked (readonly)" }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 53,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.switch.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "checked", className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Switch2, { checked: true, id: "checked", readOnly: true }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 56,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Checked (readonly)" }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 57,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.switch.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "airplane-mode-disabled-unchecked", className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Switch2, { disabled: true, id: "airplane-mode-disabled-unchecked", readOnly: true }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 60,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Airplane Mode Disabled Unchecked (readonly)" }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 61,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.switch.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "airplane-mode-disabled-checked", className: "flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Switch2, { checked: true, disabled: true, id: "airplane-mode-disabled-checked", readOnly: true }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 64,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Airplane Mode Disabled Checked (readonly)" }, void 0, false, {
            fileName: "app/routes/components.switch.tsx",
            lineNumber: 65,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.switch.tsx",
          lineNumber: 63,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.switch.tsx",
        lineNumber: 46,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.switch.tsx",
          lineNumber: 70,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Label } from "@ngrok/mantle/label";
									import { Switch } from "@ngrok/mantle/switch";

									<Label
										htmlFor="airplane-mode"
										className="flex cursor-pointer items-center gap-2 has-[:disabled]:cursor-default"
									>
										<Switch id="airplane-mode" />
										<p>Airplane Mode</p>
									</Label>
								` }, void 0, false, {
          fileName: "app/routes/components.switch.tsx",
          lineNumber: 71,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.switch.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/components.switch.tsx",
        lineNumber: 68,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.switch.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.switch.tsx",
    lineNumber: 40,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/components.switch.tsx",
    lineNumber: 39,
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
//# sourceMappingURL=/build/routes/components.switch-PPJ5JRI7.js.map
