import {
  Label
} from "/build/_shared/chunk-7PO2QPUK.js";
import {
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
import "/build/_shared/chunk-ACY2JGBA.js";
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

// app/routes/components.password-input.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.password-input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.password-input.tsx"
  );
  import.meta.hot.lastModified = "1724091104715.2295";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 PasswordInput"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
var ControlledVisibility = () => {
  _s();
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { showValue: showPassword, onValueVisibilityChange: setShowPassword }, void 0, false, {
      fileName: "app/routes/components.password-input.tsx",
      lineNumber: 48,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", onClick: () => {
      setShowPassword((v) => !v);
    }, children: [
      showPassword ? "Hide" : "Show",
      " Password"
    ] }, void 0, true, {
      fileName: "app/routes/components.password-input.tsx",
      lineNumber: 49,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.password-input.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s(ControlledVisibility, "daguiRHWMFkqPgCh/ppD7CF5VuQ=");
_c = ControlledVisibility;
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { id: "password-input", className: "text-5xl font-medium", children: "Password Input" }, void 0, false, {
        fileName: "app/routes/components.password-input.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Fundamental component for password inputs." }, void 0, false, {
        fileName: "app/routes/components.password-input.tsx",
        lineNumber: 64,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Password" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 68,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {}, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 69,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 67,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Password (error)" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 72,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { validation: "error" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 73,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 71,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Controlled Visibility" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 76,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledVisibility, {}, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 77,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 75,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "block w-full max-w-64 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Masked Hidden Value" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 80,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { maskHiddenValue: true }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 81,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 79,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 66,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 86,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { PasswordInput } from "@ngrok/mantle/input";

									<PasswordInput />
									<PasswordInput invalid />
								` }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 87,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 85,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 84,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.password-input.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.password-input.tsx",
      lineNumber: 60,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.password-input.tsx",
        lineNumber: 99,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "PasswordInput" }, void 0, false, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 103,
          columnNumber: 10
        }, this),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input", children: "standard HTML input attributes" }, void 0, false, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 104,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.password-input.tsx",
        lineNumber: 102,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropsTable, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "maskHiddenValue", optional: true }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 111,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, {}, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 113,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 112,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 116,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 115,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Mask the true length of the password input with a fixed width when the value is hidden and the input is not focused." }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 119,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 118,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 110,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "onValueVisibilityChange", optional: true }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 126,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FuncPropType, { value: "(value: boolean) => void" }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 128,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 127,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 130,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Callback for when the visibility of the password value changes." }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 132,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 131,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 125,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "showValue", optional: true }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 136,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, {}, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 138,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 137,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 141,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 140,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Show/hide the password value as a controlled state" }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 144,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 143,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 135,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "validation", optional: true }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 148,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "error" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 152,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 151,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "success" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 155,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 154,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "warning" }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 158,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 157,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 161,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 160,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FuncPropType, { value: `() => "error" | "success" | "warning" | false` }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 164,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 163,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 150,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 149,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 168,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Use the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.password-input.tsx",
                lineNumber: 171,
                columnNumber: 17
              }, this),
              " prop to show if the input has a specific validation status. This will change the border and outline of the input."
            ] }, void 0, true, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 170,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "The ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
                fileName: "app/routes/components.password-input.tsx",
                lineNumber: 175,
                columnNumber: 13
              }, this),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "undefined" }, void 0, false, {
                fileName: "app/routes/components.password-input.tsx",
                lineNumber: 176,
                columnNumber: 36
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 174,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Setting ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.password-input.tsx",
                lineNumber: 179,
                columnNumber: 17
              }, this),
              " to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "error" }, void 0, false, {
                fileName: "app/routes/components.password-input.tsx",
                lineNumber: 179,
                columnNumber: 56
              }, this),
              " also sets",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "aria-invalid" }, void 0, false, {
                fileName: "app/routes/components.password-input.tsx",
                lineNumber: 180,
                columnNumber: 9
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.password-input.tsx",
              lineNumber: 178,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.password-input.tsx",
            lineNumber: 169,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.password-input.tsx",
          lineNumber: 147,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.password-input.tsx",
        lineNumber: 109,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.password-input.tsx",
      lineNumber: 98,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.password-input.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c2 = Page;
var _c;
var _c2;
$RefreshReg$(_c, "ControlledVisibility");
$RefreshReg$(_c2, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.password-input-5AUMCTCF.js.map
