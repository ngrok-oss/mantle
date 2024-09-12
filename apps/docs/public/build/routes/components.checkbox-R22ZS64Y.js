import {
  Label
} from "/build/_shared/chunk-7PO2QPUK.js";
import {
  composeRefs
} from "/build/_shared/chunk-NG7IOVW6.js";
import {
  BooleanPropType,
  FuncPropType,
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
  Anchor
} from "/build/_shared/chunk-4SICMU5M.js";
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
import "/build/_shared/chunk-L6J2GUHO.js";
import {
  clsx_default
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

// packages/checkbox/src/checkbox.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var isIndeterminate = (checked) => checked === "indeterminate";
var Checkbox = (0, import_react.forwardRef)(
  ({
    "aria-invalid": _ariaInvalid,
    className,
    checked: _checked,
    defaultChecked: _defaultChecked,
    defaultValue = "on",
    onClick,
    readOnly,
    validation: _validation,
    ...props
  }, ref) => {
    const innerRef = (0, import_react.useRef)(null);
    const [defaultChecked] = (0, import_react.useState)(_defaultChecked);
    const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
    const validation = isInvalid ? "error" : typeof _validation === "function" ? _validation() : _validation;
    const ariaInvalid = _ariaInvalid ?? validation === "error";
    (0, import_react.useEffect)(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = isIndeterminate(_checked);
      }
    }, [_checked]);
    (0, import_react.useEffect)(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = isIndeterminate(defaultChecked);
      }
    }, [defaultChecked]);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-checked": isIndeterminate(_checked) ? "mixed" : _checked,
        "aria-invalid": ariaInvalid,
        className: clsx_default(
          "shrink-0 cursor-pointer select-none appearance-none rounded border border-form bg-form disabled:cursor-default disabled:opacity-50",
          "bg-center bg-no-repeat focus:outline-none",
          "focus-visible:border-accent-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-accent",
          "checked:border-accent-500 checked:bg-accent-500 checked:bg-checked-icon",
          "indeterminate:border-accent-500 indeterminate:bg-accent-500 indeterminate:bg-indeterminate-icon",
          "data-validation-success:border-success-600 data-validation-success:checked:bg-success-500 data-validation-success:indeterminate:bg-success-500 focus-visible:data-validation-success:border-success-600 focus-visible:data-validation-success:ring-focus-success",
          "data-validation-warning:border-warning-600 data-validation-warning:checked:bg-warning-500 data-validation-warning:indeterminate:bg-warning-500 focus-visible:data-validation-warning:border-warning-600 focus-visible:data-validation-warning:ring-focus-warning",
          "data-validation-error:border-danger-600 data-validation-error:checked:bg-danger-500 data-validation-error:indeterminate:bg-danger-500 focus-visible:data-validation-error:border-danger-600 focus-visible:data-validation-error:ring-focus-danger",
          "where:block where:size-4 where:p-0",
          className
        ),
        checked: isIndeterminate(_checked) ? void 0 : _checked,
        "data-validation": validation || void 0,
        defaultChecked: isIndeterminate(defaultChecked) ? void 0 : defaultChecked,
        defaultValue,
        onClick: (event) => {
          if (readOnly) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        },
        readOnly,
        ref: composeRefs(innerRef, ref),
        type: "checkbox",
        ...props
      },
      void 0,
      false,
      {
        fileName: "packages/checkbox/src/checkbox.tsx",
        lineNumber: 60,
        columnNumber: 4
      },
      this
    );
  }
);
Checkbox.displayName = "Checkbox";

// app/routes/components.checkbox.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.checkbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.checkbox.tsx"
  );
  import.meta.hot.lastModified = "1724091104713.877";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Checkbox"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Checkbox" }, void 0, false, {
        fileName: "app/routes/components.checkbox.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A form control that allows the user to toggle between checked and not checked." }, void 0, false, {
        fileName: "app/routes/components.checkbox.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "terms", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { name: "terms", id: "terms" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 52,
              columnNumber: 9
            }, this),
            "Accept terms and conditions"
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 51,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "unchecked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { id: "unchecked", name: "unchecked", checked: false, readOnly: true }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 56,
              columnNumber: 9
            }, this),
            "Unchecked (static)"
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 55,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "checked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { id: "checked", name: "checked", checked: true, readOnly: true }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 60,
              columnNumber: 9
            }, this),
            "Checked (static)"
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 59,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "indeterminate", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { id: "indeterminate", name: "indeterminate", defaultChecked: "indeterminate", readOnly: true }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 64,
              columnNumber: 9
            }, this),
            "Indeterminate (static)"
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 63,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "disabled-unchecked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { disabled: true, id: "unchecked", name: "unchecked", checked: false, readOnly: true }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 68,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "opacity-50", children: "Disabled Unchecked (static)" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 69,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 67,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "disabled-checked", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { disabled: true, id: "checked", name: "checked", checked: true, readOnly: true }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 72,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "opacity-50", children: "Disabled Checked (static)" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 73,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 71,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "disabled-indeterminate", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { disabled: true, id: "indeterminate", name: "indeterminate", defaultChecked: "indeterminate", readOnly: true }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 76,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "opacity-50", children: "Disabled Indeterminate (static)" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 77,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 75,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 49,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 83,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							import { Checkbox } from "@ngrok/mantle/checkbox";
							import { Label } from "@ngrok/mantle/label";

							<Label htmlFor="terms" className="flex items-center gap-2">
								<Checkbox name="terms" id="terms" />
								Accept terms and conditions
							</Label>
							<Label htmlFor="unchecked" className="flex items-center gap-2">
								<Checkbox id="unchecked" name="unchecked" checked={false} />
								Unchecked
							</Label>
							<Label htmlFor="checked" className="flex items-center gap-2">
								<Checkbox id="checked" name="checked" checked />
								Checked
							</Label>
							<Label htmlFor="indeterminate" className="flex items-center gap-2">
								<Checkbox id="indeterminate" name="indeterminate" checked="indeterminate" />
								Indeterminate
							</Label>
						` }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 84,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 81,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.checkbox.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.checkbox.tsx",
      lineNumber: 43,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.checkbox.tsx",
        lineNumber: 110,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Checkbox" }, void 0, false, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 114,
          columnNumber: 10
        }, this),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox", children: "standard HTML checkbox input attributes" }, void 0, false, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 115,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.checkbox.tsx",
        lineNumber: 113,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropsTable, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "checked", optional: true }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 122,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanPropType, {}, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 126,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 125,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "indeterminate" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 129,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 128,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 124,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 123,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 133,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
            "Whether the checkbox is checked or not. Setting this to ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "indeterminate" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 136,
              columnNumber: 65
            }, this),
            " will show the indeterminate state. This is useful for when the checkbox is in a parent-child relationship, but this requires manual, controlled state."
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 135,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 134,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 121,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "defaultChecked", optional: true }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 143,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanPropType, {}, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 147,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 146,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "indeterminate" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 150,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 149,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 145,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 144,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 154,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state." }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 156,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 155,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 142,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "validation", optional: true }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 163,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "error" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 167,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 166,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "success" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 170,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 169,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "warning" }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 173,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 172,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 176,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 175,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FuncPropType, { value: `() => "error" | "success" | "warning" | false` }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 179,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 178,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 165,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 164,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 183,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Use the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.checkbox.tsx",
                lineNumber: 186,
                columnNumber: 17
              }, this),
              " prop to show if the checkbox has a specific validation status. This will change the border and outline of the checkbox."
            ] }, void 0, true, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 185,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "The ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
                fileName: "app/routes/components.checkbox.tsx",
                lineNumber: 190,
                columnNumber: 13
              }, this),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "undefined" }, void 0, false, {
                fileName: "app/routes/components.checkbox.tsx",
                lineNumber: 191,
                columnNumber: 36
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 189,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Setting ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.checkbox.tsx",
                lineNumber: 194,
                columnNumber: 17
              }, this),
              " to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "error" }, void 0, false, {
                fileName: "app/routes/components.checkbox.tsx",
                lineNumber: 194,
                columnNumber: 56
              }, this),
              " also sets",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "aria-invalid" }, void 0, false, {
                fileName: "app/routes/components.checkbox.tsx",
                lineNumber: 195,
                columnNumber: 9
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.checkbox.tsx",
              lineNumber: 193,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.checkbox.tsx",
            lineNumber: 184,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.checkbox.tsx",
          lineNumber: 162,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.checkbox.tsx",
        lineNumber: 120,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.checkbox.tsx",
      lineNumber: 109,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.checkbox.tsx",
    lineNumber: 42,
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
//# sourceMappingURL=/build/routes/components.checkbox-R22ZS64Y.js.map
