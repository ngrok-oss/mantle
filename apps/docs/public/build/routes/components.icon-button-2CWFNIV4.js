import {
  G
} from "/build/_shared/chunk-XVB6PEYH.js";
import {
  route
} from "/build/_shared/chunk-P5F6MQHX.js";
import {
  Link
} from "/build/_shared/chunk-TFWTF37R.js";
import {
  IconButton
} from "/build/_shared/chunk-4ETGGIWM.js";
import "/build/_shared/chunk-SHVMSGFH.js";
import "/build/_shared/chunk-ATBEVGT6.js";
import "/build/_shared/chunk-76G7XZOH.js";
import "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
import {
  BooleanPropType,
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "/build/_shared/chunk-PH4L52LR.js";
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

// app/routes/components.icon-button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.icon-button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.icon-button.tsx"
  );
  import.meta.hot.lastModified = "1724091104714.5457";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Icon Button"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
var DisabledTooltip = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { asChild: true, children }, void 0, false, {
    fileName: "app/routes/components.icon-button.tsx",
    lineNumber: 47,
    columnNumber: 3
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { children: "Tooltips work on disabled buttons!" }, void 0, false, {
    fileName: "app/routes/components.icon-button.tsx",
    lineNumber: 48,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "app/routes/components.icon-button.tsx",
  lineNumber: 46,
  columnNumber: 7
}, this);
_c = DisabledTooltip;
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { id: "icon-button", className: "text-5xl font-medium", children: "Icon Button" }, void 0, false, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Initiates an action, such as completing a task or submitting information. Renders only a single icon as children with an accessible, screen-reader-only label." }, void 0, false, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Size xs" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 64,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", size: "xs", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 66,
                columnNumber: 97
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 66,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", size: "xs", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 67,
                columnNumber: 100
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 67,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 65,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 63,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Size sm" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 71,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", size: "sm", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 73,
                columnNumber: 97
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 73,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", size: "sm", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 74,
                columnNumber: 100
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 74,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 72,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 70,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Size md" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 78,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 80,
                columnNumber: 87
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 80,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 81,
                columnNumber: 90
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 81,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 79,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 77,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Disabled" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 85,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisabledTooltip, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { disabled: true, type: "button", appearance: "ghost", label: "prestige worldwide", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 88,
                columnNumber: 97
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 88,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 87,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisabledTooltip, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { disabled: true, type: "button", appearance: "outlined", label: "prestige worldwide", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 91,
                columnNumber: 100
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 91,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 90,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 86,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 84,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 62,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 98,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="xs" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="xs" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="sm" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="sm" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="md" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="md" icon={<Globe />} />
								` }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 99,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 97,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 96,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.icon-button.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "example-loading", className: "text-3xl font-medium", children: "isLoading" }, void 0, false, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 118,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "isLoading" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 122,
          columnNumber: 6
        }, this),
        " determines whether or not the icon button is in a loading state, default",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 123,
          columnNumber: 6
        }, this),
        ". Setting ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "isLoading" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 123,
          columnNumber: 46
        }, this),
        " will replace the icon with a spinner. It will also disable user interaction with the button and set ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "aria-disabled" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 124,
          columnNumber: 77
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 121,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "idle" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 129,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 131,
                columnNumber: 87
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 131,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 132,
                columnNumber: 90
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 132,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 130,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 128,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "isLoading" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 136,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "ghost", label: "prestige worldwide", isLoading: true, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 138,
                columnNumber: 97
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 138,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { type: "button", appearance: "outlined", label: "prestige worldwide", isLoading: true, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 139,
                columnNumber: 100
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 139,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 137,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 135,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 127,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 145,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<IconButton type="button" appearance="ghost" label="prestige worldwide" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" isLoading icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" isLoading icon={<Globe />} />
								` }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 146,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 144,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 143,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.icon-button.tsx",
      lineNumber: 117,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }, void 0, false, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 162,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "When you want to render ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "italic", children: "something else" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 166,
          columnNumber: 30
        }, this),
        " as a",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "IconButton" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 167,
          columnNumber: 6
        }, this),
        ", you can use the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 167,
          columnNumber: 59
        }, this),
        " prop to compose. This is useful when you want to splat the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "IconButton" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 168,
          columnNumber: 40
        }, this),
        " styling onto a",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Link" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 169,
          columnNumber: 6
        }, this),
        " from ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "remix" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 169,
          columnNumber: 41
        }, this),
        " or ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "react-router" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 169,
          columnNumber: 75
        }, this),
        ". Keep in mind that when you use ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 170,
          columnNumber: 37
        }, this),
        " the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "type" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 170,
          columnNumber: 74
        }, this),
        " prop will",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "NOT" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 171,
          columnNumber: 6
        }, this),
        " be passed to the child component."
      ] }, void 0, true, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 165,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { appearance: "outlined", asChild: true, label: "prestige worldwide", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(G, {}, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 175,
          columnNumber: 82
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: route("/base/colors") }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 176,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 175,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 174,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 181,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";
									import { Link } from "react-router-dom";

									<IconButton appearance="outlined" asChild label="prestige worldwide" icon={<Globe />}>
										<Link to={route("/base/colors")} />
									</IconButton>
								` }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 182,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 180,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 179,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 173,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.icon-button.tsx",
      lineNumber: 161,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 197,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "IconButton" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 201,
          columnNumber: 10
        }, this),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button", children: "standard HTML button attributes" }, void 0, false, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 202,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 200,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropsTable, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "appearance", optional: true }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 209,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "ghost" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 213,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 212,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "outlined" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 216,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 215,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 211,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 210,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "outlined" }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 221,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 220,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Defines the visual style of the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 225,
              columnNumber: 41
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 224,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 223,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 208,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "asChild", optional: true }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 230,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 232,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 231,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 235,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 234,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Use the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this),
            " prop to compose the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 239,
              columnNumber: 70
            }, this),
            " styling and functionality onto alternative element types or your own React components."
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 238,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 237,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 229,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "label" }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 245,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 247,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 246,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 249,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The accessible label for the icon. This label will be visually hidden but announced to screen reader users, similar to alt text for img tags." }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 251,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 250,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 244,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "isLoading", optional: true }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 258,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 260,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 259,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 263,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 262,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Determines whether or not the icon button is in a loading state, default ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 267,
              columnNumber: 82
            }, this),
            ". Setting ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "isLoading" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 268,
              columnNumber: 17
            }, this),
            " will replace the icon with a spinner. It will also disable user interaction with the button and set ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "aria-disabled" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 269,
              columnNumber: 50
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 266,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 265,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 257,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "size", optional: true }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 274,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "xs" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 278,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 277,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "sm" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 281,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 280,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "md" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 284,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 283,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 276,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 275,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "md" }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 289,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 288,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "The size of the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "IconButton" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 293,
              columnNumber: 25
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 292,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 291,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 273,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "type" }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 298,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "button" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 302,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 301,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "reset" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 305,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 304,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "submit" }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 308,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 307,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 300,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 299,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 312,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "The default behavior of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "IconButton" }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 315,
                columnNumber: 37
              }, this),
              ". Unlike the native",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "button" }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 316,
                columnNumber: 9
              }, this),
              " element, unless you use the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 316,
                columnNumber: 69
              }, this),
              " prop,",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "this prop is required and has no default value" }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 317,
                columnNumber: 9
              }, this),
              ". See",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type", children: "the MDN docs" }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 318,
                columnNumber: 9
              }, this),
              " ",
              "for more information."
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 314,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: '"button"' }, void 0, false, {
                  fileName: "app/routes/components.icon-button.tsx",
                  lineNumber: 326,
                  columnNumber: 11
                }, this),
                ": The button has no default behavior, and does nothing when pressed by default."
              ] }, void 0, true, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 325,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 324,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: '"reset"' }, void 0, false, {
                  fileName: "app/routes/components.icon-button.tsx",
                  lineNumber: 332,
                  columnNumber: 11
                }, this),
                ": The button resets all the controls to their initial values."
              ] }, void 0, true, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 331,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 330,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: '"submit"' }, void 0, false, {
                  fileName: "app/routes/components.icon-button.tsx",
                  lineNumber: 337,
                  columnNumber: 11
                }, this),
                ": The button submits the form data to the server."
              ] }, void 0, true, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 336,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.icon-button.tsx",
                lineNumber: 335,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.icon-button.tsx",
              lineNumber: 323,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.icon-button.tsx",
            lineNumber: 313,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.icon-button.tsx",
          lineNumber: 297,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.icon-button.tsx",
        lineNumber: 207,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.icon-button.tsx",
      lineNumber: 196,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.icon-button.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_c2 = Page;
var _c;
var _c2;
$RefreshReg$(_c, "DisabledTooltip");
$RefreshReg$(_c2, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.icon-button-2CWFNIV4.js.map
