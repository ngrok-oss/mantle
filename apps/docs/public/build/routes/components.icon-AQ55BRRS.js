import {
  I
} from "/build/_shared/chunk-PGDU4Z6Q.js";
import {
  Icon
} from "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
import {
  ObjectPropType,
  PropDefaultValueCell,
  PropDescriptionCell,
  PropNameCell,
  PropRow,
  PropTypeCell,
  PropsTable,
  ReactNodePropType,
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
import "/build/_shared/chunk-POHPDT6N.js";
import "/build/_shared/chunk-VJGIG3I4.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// app/routes/components.icon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.icon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.icon.tsx"
  );
  import.meta.hot.lastModified = "1724091104714.683";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Icon"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { id: "icon", className: "text-5xl font-medium", children: "Icon" }, void 0, false, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "Decorates an svg icon with automatic sizing. Useful when applying base styles to",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://phosphoricons.com", children: "phosphor icons" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 49,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { svg: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 53,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 53,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "text-danger-600", svg: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 54,
            columnNumber: 46
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 54,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 52,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 58,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Icon } from "@ngrok/mantle/icon";
									import { Fire } from "@phosphor-icons/react";

									<Icon svg={<Fire />} />
									<Icon className="text-danger-600" svg={<Fire weight="fill" />} />
								` }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 59,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 56,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.icon.tsx",
      lineNumber: 43,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "example-class-name", className: "text-3xl font-medium", children: [
        "Merging ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "className" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 73,
          columnNumber: 14
        }, this),
        "s"
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 72,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Icon" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 76,
          columnNumber: 10
        }, this),
        " merges ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "className" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 76,
          columnNumber: 47
        }, this),
        " selectors with the following order of precedence (last one wins):"
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 75,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "ml-8 list-decimal font-body text-body", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Icon base classes" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 80,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "svg className" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 81,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Icon className" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 82,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 79,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "When ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "className" }, void 0, false, {
                fileName: "app/routes/components.icon.tsx",
                lineNumber: 88,
                columnNumber: 14
              }, this),
              " is not specified:"
            ] }, void 0, true, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 87,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { svg: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, {}, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 91,
              columnNumber: 20
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 91,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 90,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 86,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "When ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "className" }, void 0, false, {
                fileName: "app/routes/components.icon.tsx",
                lineNumber: 96,
                columnNumber: 14
              }, this),
              " is only specified on ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "svg" }, void 0, false, {
                fileName: "app/routes/components.icon.tsx",
                lineNumber: 96,
                columnNumber: 70
              }, this),
              ":"
            ] }, void 0, true, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 95,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { svg: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { className: "size-12 sm:size-16" }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 99,
              columnNumber: 20
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 99,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 98,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 94,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "When ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "className" }, void 0, false, {
                fileName: "app/routes/components.icon.tsx",
                lineNumber: 104,
                columnNumber: 14
              }, this),
              " is specified on both ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "svg" }, void 0, false, {
                fileName: "app/routes/components.icon.tsx",
                lineNumber: 104,
                columnNumber: 70
              }, this),
              " and",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Icon" }, void 0, false, {
                fileName: "app/routes/components.icon.tsx",
                lineNumber: 105,
                columnNumber: 9
              }, this),
              ":"
            ] }, void 0, true, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 103,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-20 sm:size-28", svg: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { className: "size-12 sm:size-16" }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 108,
              columnNumber: 51
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 108,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 107,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 102,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 85,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 114,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Icon } from "@ngrok/mantle/icon"
									import { Fire } from "@phosphor-icons/react";

									<Icon svg={<Fire />} />
									<Icon svg={<Fire className="size-12 sm:size-16" />} />
									<Icon className="size-20 sm:size-28" svg={<Fire className="size-12 sm:size-16" />} />
								` }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 115,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 112,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 84,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.icon.tsx",
      lineNumber: 71,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Icon" }, void 0, false, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 133,
          columnNumber: 10
        }, this),
        " accepts the following props:"
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 132,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropsTable, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "className", optional: true }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 137,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 139,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 138,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 141,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: [
            "A string. Specifies the element\u2019s CSS class name. See",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/API/Element/className", children: "the MDN docs" }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 144,
              columnNumber: 8
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 142,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 136,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "style", optional: true }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 148,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ObjectPropType, { name: "React.CSSProperties" }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 150,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 149,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 152,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: [
            "An object with CSS styles, for example ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: `{ fontWeight: 'bold', margin: 20 }` }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 154,
              columnNumber: 47
            }, this),
            ". Similarly to the DOM style property, the CSS property names need to be written as camelCase, for example",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "fontWeight" }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 156,
              columnNumber: 8
            }, this),
            " instead of ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "font-weight" }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 156,
              columnNumber: 55
            }, this),
            ". You can pass strings or numbers as values. If you pass a number, like ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "width: 100" }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 157,
              columnNumber: 57
            }, this),
            ", React will automatically append px (\u201Cpixels\u201D) to the value unless it\u2019s a unitless property. See",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style", children: "the MDN docs" }, void 0, false, {
              fileName: "app/routes/components.icon.tsx",
              lineNumber: 159,
              columnNumber: 8
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 153,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 147,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "svg" }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 163,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReactNodePropType, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 165,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 164,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 167,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: "A single SVG icon passed as a JSX tag." }, void 0, false, {
            fileName: "app/routes/components.icon.tsx",
            lineNumber: 168,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon.tsx",
          lineNumber: 162,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon.tsx",
        lineNumber: 135,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.icon.tsx",
      lineNumber: 128,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.icon.tsx",
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
//# sourceMappingURL=/build/routes/components.icon-AQ55BRRS.js.map
