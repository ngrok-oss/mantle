import {
  Label
} from "/build/_shared/chunk-7PO2QPUK.js";
import {
  cva
} from "/build/_shared/chunk-76G7XZOH.js";
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

// packages/text-area/src/text-area.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var textAreaVariants = cva(
  "border-input flex min-h-24 w-full rounded-md border bg-form px-3 py-[calc(theme(spacing[2.5])-1px)] text-base focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 data-drag-over:border-dashed data-drag-over:ring-4 sm:py-[calc(theme(spacing[2])-1px)] sm:text-sm",
  {
    variants: {
      /**
       * The visual style of the textarea.
       */
      appearance: {
        monospaced: "font-mono text-[0.9375rem] sm:text-[0.8125rem]"
      }
    }
  }
);
var TextArea = (0, import_react.forwardRef)(
  ({
    appearance,
    "aria-invalid": _ariaInvalid,
    className,
    onDragEnter,
    onDragLeave,
    onDropCapture,
    validation: _validation,
    ...props
  }, ref) => {
    const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
    const validation = isInvalid ? "error" : typeof _validation === "function" ? _validation() : _validation;
    const ariaInvalid = _ariaInvalid ?? validation === "error";
    const [isDragOver, setIsDragOver] = (0, import_react.useState)(false);
    const _ref = (0, import_react.useRef)(null);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        "aria-invalid": ariaInvalid,
        "data-validation": validation || void 0,
        className: cx(
          appearance === "monospaced" && "font-mono text-[0.9375rem] sm:text-[0.8125rem]",
          "border-input flex min-h-24 w-full rounded-md border bg-form px-3 py-[calc(theme(spacing[2.5])-1px)] focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 data-drag-over:border-dashed data-drag-over:ring-4 sm:py-[calc(theme(spacing[2])-1px)] sm:text-sm",
          "placeholder:text-placeholder data-drag-over:border-dashed",
          "border-form text-strong ring-focus-accent focus:border-accent-600 data-drag-over:border-accent-600",
          "data-validation-error:border-danger-600 data-validation-error:ring-focus-danger data-validation-error:focus-visible:border-danger-600 data-validation-error:data-drag-over:border-danger-600",
          "data-validation-success:border-success-600 data-validation-success:ring-focus-success data-validation-success:focus-visible:border-success-600 data-validation-success:data-drag-over:border-success-600",
          "data-validation-warning:border-warning-600 data-validation-warning:ring-focus-warning data-validation-warning:focus-visible:border-warning-600 data-validation-warning:data-drag-over:border-warning-600",
          //,
          className
        ),
        "data-drag-over": isDragOver,
        onDragEnter: (event) => {
          setIsDragOver(true);
          onDragEnter?.(event);
        },
        onDragLeave: (event) => {
          setIsDragOver(false);
          onDragLeave?.(event);
        },
        onDropCapture: (event) => {
          setIsDragOver(false);
          _ref.current?.focus();
          onDropCapture?.(event);
        },
        ref: (node) => {
          _ref.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        },
        ...props
      },
      void 0,
      false,
      {
        fileName: "packages/text-area/src/text-area.tsx",
        lineNumber: 53,
        columnNumber: 4
      },
      this
    );
  }
);
TextArea.displayName = "TextArea";

// app/routes/components.text-area.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.text-area.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.text-area.tsx"
  );
  import.meta.hot.lastModified = "1724091104718.2397";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 TextArea"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
async function handleDrop(event) {
  event.preventDefault();
  const files = Array.from(event.dataTransfer.files);
  const fileData = await Promise.all(files.map((file) => file.text()));
  const textArea = event.target;
  textArea.value = fileData.join("\n");
}
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { id: "textarea", className: "text-5xl font-medium", children: "TextArea" }, void 0, false, {
        fileName: "app/routes/components.text-area.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Displays a form textarea or a component that looks like a textarea." }, void 0, false, {
        fileName: "app/routes/components.text-area.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Default TextArea" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 61,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextArea, { onDrop: (event) => handleDrop(event), placeholder: "Tell us about your experience\u2026" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 62,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 60,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Monospaced TextArea" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 65,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextArea, { onDrop: (event) => handleDrop(event), appearance: "monospaced", placeholder: "Tell us about your experience\u2026" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 66,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 64,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Error TextArea" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 69,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextArea, { onDrop: (event) => handleDrop(event), placeholder: "Tell us about your experience\u2026", validation: "error" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 70,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 68,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Success TextArea" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 73,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextArea, { onDrop: (event) => handleDrop(event), placeholder: "Tell us about your experience\u2026", validation: "success" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 74,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 72,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Warning TextArea" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 77,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextArea, { onDrop: (event) => handleDrop(event), placeholder: "Tell us about your experience\u2026", validation: "warning" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 78,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 76,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.text-area.tsx",
          lineNumber: 59,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 83,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { TextArea } from "@ngrok/mantle/text-area";

									<TextArea placeholder="Tell us about your experience…" />
									<TextArea appearance="monospaced" placeholder="Tell us about your experience…" />
									<TextArea placeholder="Tell us about your experience…" validation="error" />
								` }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 84,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.text-area.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.text-area.tsx",
          lineNumber: 81,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.text-area.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.text-area.tsx",
      lineNumber: 50,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.text-area.tsx",
        lineNumber: 97,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "TextArea" }, void 0, false, {
          fileName: "app/routes/components.text-area.tsx",
          lineNumber: 101,
          columnNumber: 10
        }, this),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea", children: "standard HTML textarea attributes" }, void 0, false, {
          fileName: "app/routes/components.text-area.tsx",
          lineNumber: 102,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.text-area.tsx",
        lineNumber: 100,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropsTable, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "appearance", optional: true }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 109,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "monospaced" }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 113,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 112,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 111,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 110,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 117,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
            "Defines the visual style of the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "TextArea" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 120,
              columnNumber: 41
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 119,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 118,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.text-area.tsx",
          lineNumber: 108,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "validation", optional: true }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 125,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "error" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 129,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 128,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "success" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 132,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 131,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "warning" }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 135,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 134,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 138,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 137,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FuncPropType, { value: `() => "error" | "success" | "warning" | false` }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 141,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 140,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 127,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 126,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 145,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Use the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.text-area.tsx",
                lineNumber: 148,
                columnNumber: 17
              }, this),
              " prop to show if the textarea has a specific validation status. This will change the border and outline of the textarea."
            ] }, void 0, true, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 147,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "The ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
                fileName: "app/routes/components.text-area.tsx",
                lineNumber: 152,
                columnNumber: 13
              }, this),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "undefined" }, void 0, false, {
                fileName: "app/routes/components.text-area.tsx",
                lineNumber: 153,
                columnNumber: 36
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 151,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "Setting ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.text-area.tsx",
                lineNumber: 156,
                columnNumber: 17
              }, this),
              " to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "error" }, void 0, false, {
                fileName: "app/routes/components.text-area.tsx",
                lineNumber: 156,
                columnNumber: 56
              }, this),
              " also sets",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "aria-invalid" }, void 0, false, {
                fileName: "app/routes/components.text-area.tsx",
                lineNumber: 157,
                columnNumber: 9
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.text-area.tsx",
              lineNumber: 155,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.text-area.tsx",
            lineNumber: 146,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.text-area.tsx",
          lineNumber: 124,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.text-area.tsx",
        lineNumber: 107,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.text-area.tsx",
      lineNumber: 96,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.text-area.tsx",
    lineNumber: 49,
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
//# sourceMappingURL=/build/routes/components.text-area-HX6FXZWC.js.map
