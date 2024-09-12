import {
  Link
} from "/build/_shared/chunk-S5JMZHQR.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-76VEOZXT.js";
import "/build/_shared/chunk-3V5PLWGK.js";
import "/build/_shared/chunk-ZYLV2OEO.js";
import "/build/_shared/chunk-SZ2MWSLF.js";
import "/build/_shared/chunk-TFWTF37R.js";
import "/build/_shared/chunk-OYR227OB.js";
import {
  Label
} from "/build/_shared/chunk-7PO2QPUK.js";
import "/build/_shared/chunk-NG7IOVW6.js";
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

// app/routes/components.select.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.select.tsx"
  );
  import.meta.hot.lastModified = "1724091104717.4785";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Select"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  _s();
  const [example1Value, setExample1Value] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Select" }, void 0, false, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Displays a list of options for the user to pick from\u2014triggered by a button." }, void 0, false, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "w-full max-w-64", htmlFor: "fruits", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Fruits" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 57,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { id: "fruits", name: "number", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a fruit" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 60,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 59,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { width: "trigger", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Fruits" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "banana", children: "Banana" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "grapes", children: "Grapes" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "pineapple", children: "Pineapple" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 63,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectSeparator, {}, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 71,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Vegetables" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "carrot", children: "Carrot" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "cucumber", children: "Cucumber" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "lettuce", children: "Lettuce" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "tomato", children: "Tomato" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "zucchini", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Zucchini" }, void 0, false, {
                      fileName: "app/routes/components.select.tsx",
                      lineNumber: 79,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." }, void 0, false, {
                      fileName: "app/routes/components.select.tsx",
                      lineNumber: 80,
                      columnNumber: 12
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 72,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 62,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 58,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 56,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { validation: "error", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "max-w-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a fruit" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 88,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 87,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Fruits" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 92,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 93,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "banana", children: "Banana" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 94,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 95,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "grapes", children: "Grapes" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 96,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "pineapple", children: "Pineapple" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 97,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 91,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectSeparator, {}, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 99,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Vegetables" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 101,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "carrot", children: "Carrot" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 102,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "cucumber", children: "Cucumber" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 103,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "lettuce", children: "Lettuce" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 104,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "tomato", children: "Tomato" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 105,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "zucchini", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Zucchini" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 106,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 100,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 90,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 86,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { validation: "success", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "max-w-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a fruit" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 116,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 115,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Fruits" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 120,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 121,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "banana", children: "Banana" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 122,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 123,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "grapes", children: "Grapes" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 124,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "pineapple", children: "Pineapple" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 125,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 119,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectSeparator, {}, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 127,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Vegetables" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 129,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "carrot", children: "Carrot" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 130,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "cucumber", children: "Cucumber" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 131,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "lettuce", children: "Lettuce" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 132,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "tomato", children: "Tomato" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 133,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "zucchini", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Zucchini" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 134,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 128,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 118,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 114,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { validation: "warning", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "max-w-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a fruit" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 143,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 142,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Fruits" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 147,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 148,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "banana", children: "Banana" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 149,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 150,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "grapes", children: "Grapes" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 151,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "pineapple", children: "Pineapple" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 152,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 146,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectSeparator, {}, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 154,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Vegetables" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 156,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "carrot", children: "Carrot" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 157,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "cucumber", children: "Cucumber" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 158,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "lettuce", children: "Lettuce" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 159,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "tomato", children: "Tomato" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 160,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "zucchini", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Zucchini" }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Ex sit voluptate incididunt pariatur velit consequat reprehenderit." }, void 0, false, {
                    fileName: "app/routes/components.select.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 161,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 155,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 145,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 141,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 55,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 171,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Label } from "@ngrok/mantle/label";
									import {
										Select,
										SelectContent,
										SelectGroup,
										SelectItem,
										SelectLabel,
										SelectSeparator,
										SelectTrigger,
										SelectValue,
									} from "@ngrok/mantle/select";

									<Label className="w-full max-w-64" htmlFor="fruits">
										<p>Fruits</p>
										<Select id="fruits" name="number">
											<SelectTrigger>
												<SelectValue placeholder="Select a fruit" />
											</SelectTrigger>
											<SelectContent width="trigger">
												<SelectGroup>
													<SelectLabel>Fruits</SelectLabel>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
												<SelectSeparator />
												<SelectGroup>
													<SelectLabel>Vegetables</SelectLabel>
													<SelectItem value="carrot">Carrot</SelectItem>
													<SelectItem value="cucumber">Cucumber</SelectItem>
													<SelectItem value="lettuce">Lettuce</SelectItem>
													<SelectItem value="tomato">Tomato</SelectItem>
													<SelectItem value="zucchini">
														<p>Zucchini</p>
														<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</Label>
								` }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 172,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 170,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 169,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.select.tsx",
      lineNumber: 48,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "examples", className: "text-3xl font-medium", children: "Examples" }, void 0, false, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 223,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 222,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "Custom selected value" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 230,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
            "By default the selected item's text will be rendered when selected. Sometimes you may need to render something different. You can control the select and pass ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "children" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 233,
              columnNumber: 65
            }, this),
            " instead."
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 231,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 229,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { value: example1Value, onChange: setExample1Value, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a fruit", children: example1Value === "apple" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: "\u{1F34E} Apple" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 241,
              columnNumber: 40
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: "\u{1F351} Peach" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 241,
              columnNumber: 56
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 240,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 239,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { width: "trigger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 245,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "peach", children: "Peach" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 246,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 244,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 238,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 237,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 252,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							import {
								Select,
								SelectContent,
								SelectItem,
								SelectTrigger,
								SelectValue,
							} from "@ngrok/mantle/select";

							<Select value={value} onChange={setValue}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select a fruit">
										{value === "apple" ? <>🍎 Apple!</> : <>🍑 Peach!</>}
									</SelectValue>
								</SelectTrigger>
								<SelectContent width="trigger">
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="peach">Peach</SelectItem>
								</SelectContent>
							</Select>
						` }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 253,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 251,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 250,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 236,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 228,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.select.tsx",
      lineNumber: 221,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 282,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
          "The ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Select" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 286,
            columnNumber: 11
          }, this),
          " components are built on top of",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select", target: "_blank", rel: "noopener noreferrer", children: "Radix Select" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 287,
            columnNumber: 7
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 285,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 281,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "Select" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 296,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#root", target: "_blank", rel: "noopener noreferrer", children: "Select.Root" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 300,
              columnNumber: 8
            }, this),
            ", plus:"
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 298,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 295,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropsTable, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "onChange", optional: true }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 309,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FuncPropType, { value: "(value: string) => void" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 311,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 310,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 313,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Event handler called when the value changes. Use it instead of ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "onValueChange" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 316,
                columnNumber: 73
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 315,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 314,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 308,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "validation", optional: true }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 321,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "error" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 325,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 324,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "success" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 328,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 327,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "warning" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 331,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 330,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 334,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 333,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FuncPropType, { value: `() => "error" | "success" | "warning" | false` }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 337,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 336,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 323,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 322,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 341,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Use the ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 344,
                  columnNumber: 18
                }, this),
                " prop to show if the select trigger has a specific validation status. This will change the border and outline of the select trigger."
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 343,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "The ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 348,
                  columnNumber: 14
                }, this),
                " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "undefined" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 349,
                  columnNumber: 37
                }, this),
                "."
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 347,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Setting ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 352,
                  columnNumber: 18
                }, this),
                " to ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "error" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 352,
                  columnNumber: 57
                }, this),
                " also sets",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "aria-invalid" }, void 0, false, {
                  fileName: "app/routes/components.select.tsx",
                  lineNumber: 353,
                  columnNumber: 10
                }, this),
                "."
              ] }, void 0, true, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 351,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 342,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 320,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 307,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 294,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectTrigger" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 362,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#trigger", target: "_blank", rel: "noopener noreferrer", children: "Select.Trigger" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 366,
              columnNumber: 8
            }, this),
            ", plus:"
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 364,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 361,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropsTable, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "validation", optional: true }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 375,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "error" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 379,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 378,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "success" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 382,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 381,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "warning" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 385,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 384,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 388,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 387,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FuncPropType, { value: `() => "error" | "success" | "warning" | false` }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 391,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 390,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 377,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 376,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 395,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Use the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 398,
                columnNumber: 18
              }, this),
              " prop to show if the select trigger has a specific validation status. This will change the border and outline of the select trigger."
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 397,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "The ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 402,
                columnNumber: 14
              }, this),
              " type is useful when using short-circuiting logic so that you don't need to use a ternary with ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "undefined" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 403,
                columnNumber: 37
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 401,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Setting ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "validation" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 406,
                columnNumber: 18
              }, this),
              " to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "error" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 406,
                columnNumber: 57
              }, this),
              " also sets",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "aria-invalid" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 407,
                columnNumber: 10
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 405,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 396,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 374,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 373,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 360,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectValue" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 415,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#value", target: "_blank", rel: "noopener noreferrer", children: "Select.Value" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 419,
            columnNumber: 7
          }, this),
          " ",
          "props."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 417,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 414,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectContent" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 428,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#content", target: "_blank", rel: "noopener noreferrer", children: "Select.Content" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 432,
              columnNumber: 8
            }, this),
            ", plus:"
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 430,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 427,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropsTable, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "width", optional: true }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 441,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "trigger" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 445,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 444,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "content" }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 448,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 447,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 443,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 442,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 452,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "trigger" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 455,
                columnNumber: 10
              }, this),
              " will ensure the content is the same width as the trigger button."
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 454,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "content" }, void 0, false, {
                fileName: "app/routes/components.select.tsx",
                lineNumber: 458,
                columnNumber: 10
              }, this),
              " will make it the size of the content itself."
            ] }, void 0, true, {
              fileName: "app/routes/components.select.tsx",
              lineNumber: 457,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 453,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 440,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 439,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 426,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectGroup" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 466,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#group", target: "_blank", rel: "noopener noreferrer", children: "Select.Group" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 470,
            columnNumber: 7
          }, this),
          " ",
          "props."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 468,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 465,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectSeparator" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 478,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
          "Used to visually separate items in the select. Composed from",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/components/separator", children: "Mantle Separator" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 482,
            columnNumber: 7
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 480,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 477,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectItem" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 487,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#item", target: "_blank", rel: "noopener noreferrer", children: "Select.Item" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 491,
            columnNumber: 7
          }, this),
          " ",
          "props."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 489,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 486,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectLabel" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 499,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#label", target: "_blank", rel: "noopener noreferrer", children: "Select.Label" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 503,
            columnNumber: 7
          }, this),
          " ",
          "props."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 501,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 498,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectScrollUpButton" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 511,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#scrollupbutton", target: "_blank", rel: "noopener noreferrer", children: "Select.ScrollUpButton" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 515,
            columnNumber: 7
          }, this),
          " ",
          "props."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 513,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 510,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "SelectScrollDownButton" }, void 0, false, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 523,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: [
          "Radix",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://www.radix-ui.com/primitives/docs/components/select#scrolldownbutton", target: "_blank", rel: "noopener noreferrer", children: "Select.ScrollDownButton" }, void 0, false, {
            fileName: "app/routes/components.select.tsx",
            lineNumber: 527,
            columnNumber: 7
          }, this),
          " ",
          "props."
        ] }, void 0, true, {
          fileName: "app/routes/components.select.tsx",
          lineNumber: 525,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.select.tsx",
        lineNumber: 522,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.select.tsx",
      lineNumber: 280,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.select.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Page, "ffMu8FCyKagKOJ6u2+UEbzG2kn0=");
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.select-5KQKBXPP.js.map
