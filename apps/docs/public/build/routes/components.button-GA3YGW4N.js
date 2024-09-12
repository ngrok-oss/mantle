import {
  I
} from "/build/_shared/chunk-PGDU4Z6Q.js";
import {
  route
} from "/build/_shared/chunk-P5F6MQHX.js";
import {
  Link
} from "/build/_shared/chunk-TFWTF37R.js";
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

// app/routes/components.button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.button.tsx"
  );
  import.meta.hot.lastModified = "1724786079149.3262";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Button"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
var DisabledTooltip = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { asChild: true, children }, void 0, false, {
    fileName: "app/routes/components.button.tsx",
    lineNumber: 47,
    columnNumber: 3
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { children: "Tooltips work on disabled buttons!" }, void 0, false, {
    fileName: "app/routes/components.button.tsx",
    lineNumber: 48,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "app/routes/components.button.tsx",
  lineNumber: 46,
  columnNumber: 7
}, this);
_c = DisabledTooltip;
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { id: "button", className: "text-5xl font-medium", children: "Button" }, void 0, false, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Initiates an action, such as completing a task or submitting information" }, void 0, false, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Default" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 63,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "ghost", priority: "default", children: "Ghost" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 65,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "filled", priority: "default", children: "Filled" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 68,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "outlined", priority: "default", children: "Outlined" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 71,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "link", priority: "default", children: "Link" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 74,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 64,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 62,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Neutral" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 80,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "ghost", priority: "neutral", children: "Ghost" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 82,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "filled", priority: "neutral", children: "Filled" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 85,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "outlined", priority: "neutral", children: "Outlined" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 88,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "link", priority: "neutral", children: "Link" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 91,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 81,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 79,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Danger" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 97,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "ghost", priority: "danger", children: "Ghost" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 99,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "filled", priority: "danger", children: "Filled" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 102,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "outlined", priority: "danger", children: "Outlined" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 105,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "link", priority: "danger", children: "Link" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 108,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 98,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 96,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Disabled" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 114,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisabledTooltip, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: true, type: "button", appearance: "ghost", priority: "default", children: "Ghost" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 117,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 116,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisabledTooltip, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: true, type: "button", appearance: "filled", priority: "default", children: "Filled" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 122,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 121,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisabledTooltip, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: true, type: "button", appearance: "outlined", priority: "default", children: "Outlined" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 127,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 126,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisabledTooltip, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: true, type: "button", appearance: "link", priority: "default", children: "Link" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 132,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 131,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 115,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 113,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 61,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 141,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Button } from "@ngrok/mantle/button";

									<Button type="button">Outlined</Button>
									<Button type="button" appearance="filled">Filled</Button>
									<Button type="button" appearance="ghost">Ghost</Button>
									<Button type="button" appearance="link">Link</Button>

									<Button type="button" priority="neutral">Outlined</Button>
									<Button type="button" priority="neutral" appearance="filled">Filled</Button>
									<Button type="button" priority="neutral" appearance="ghost">Ghost</Button>
									<Button type="button" priority="neutral" appearance="link">Link</Button>

									<Button type="button" priority="danger">Outlined</Button>
									<Button type="button" priority="danger" appearance="filled">Filled</Button>
									<Button type="button" priority="danger" appearance="ghost">Ghost</Button>
									<Button type="button" priority="danger" appearance="link">Link</Button>

									<Button disabled type="button" appearance="ghost" priority="default">
										Ghost
									</Button>
									<Button disabled type="button" appearance="filled" priority="default">
										Filled
									</Button>
									<Button disabled type="button" appearance="outlined" priority="default">
										Outlined
									</Button>
									<Button disabled type="button" appearance="link" priority="default">
										Link
									</Button>
								` }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 142,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 140,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 139,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.button.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "example-icon", className: "text-3xl font-medium", children: "Icon and Positioning" }, void 0, false, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 179,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "Use the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "icon" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 183,
          columnNumber: 14
        }, this),
        " prop to add an icon to the button. By default, it will render on the logical start side of the button. Use the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "iconPlacement" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 184,
          columnNumber: 48
        }, this),
        " prop to change the side the icon is rendered on."
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 182,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 190,
            columnNumber: 36
          }, this), children: "Icon Start" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 190,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 193,
            columnNumber: 36
          }, this), iconPlacement: "end", children: "Icon End" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 193,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 189,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 188,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 200,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<Button type="button" icon={<Fire weight="fill" />}>Icon Start</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End
									</Button>
								` }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 201,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 199,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 198,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 187,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.button.tsx",
      lineNumber: 178,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "example-loading", className: "text-3xl font-medium", children: "isLoading" }, void 0, false, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 216,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "isLoading" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 220,
          columnNumber: 6
        }, this),
        " determines whether or not the button is in a loading state, default",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 221,
          columnNumber: 6
        }, this),
        ". Setting ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "isLoading" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 221,
          columnNumber: 46
        }, this),
        " will replace any",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "icon" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 222,
          columnNumber: 6
        }, this),
        " with a spinner, or add one if an icon wasn't given. It will also disable user interaction with the button and set ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "aria-disabled" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 223,
          columnNumber: 42
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 219,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "Idle" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 228,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", children: "No Icon + Idle" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 230,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 231,
                columnNumber: 37
              }, this), children: "Icon Start + Idle" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 231,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 234,
                columnNumber: 37
              }, this), iconPlacement: "end", children: "Icon End + Idle" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 234,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 229,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 239,
                columnNumber: 55
              }, this), children: "Link + Icon Start + Idle" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 239,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 242,
                columnNumber: 55
              }, this), iconPlacement: "end", children: "Link + Icon End + Idle" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 242,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 238,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 227,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-center font-mono text-xs", children: "isLoading" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 248,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", isLoading: true, children: "No Icon + isLoading" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 250,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 253,
                columnNumber: 37
              }, this), isLoading: true, children: "Icon Start + isLoading" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 253,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 256,
                columnNumber: 37
              }, this), iconPlacement: "end", isLoading: true, children: "Icon End + isLoading" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 256,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 249,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 261,
                columnNumber: 55
              }, this), isLoading: true, children: "Link + Icon Start + isLoading" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 261,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", appearance: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 264,
                columnNumber: 55
              }, this), iconPlacement: "end", isLoading: true, children: "Link + Icon End + isLoading" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 264,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 260,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 247,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 226,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 272,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<Button type="button">No Icon + Idle</Button>
									<Button type="button" icon={<Fire weight="fill" />}>Icon Start + Idle</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End + Idle
									</Button>
									<Button type="button" isLoading>No Icon + isLoading</Button>
									<Button type="button" icon={<Fire weight="fill" />} isLoading>
										Icon Start + isLoading
									</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end" isLoading>
										Icon End + isLoading
									</Button>
								` }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 273,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 271,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 270,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 225,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.button.tsx",
      lineNumber: 215,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }, void 0, false, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 296,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "When you want to render ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "italic", children: "something else" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 300,
          columnNumber: 30
        }, this),
        " as a ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 300,
          columnNumber: 82
        }, this),
        ", you can use the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 301,
          columnNumber: 22
        }, this),
        " prop to compose. This is useful when you want to splat the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 302,
          columnNumber: 6
        }, this),
        " styling onto a ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Link" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 302,
          columnNumber: 53
        }, this),
        " from",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "remix" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 303,
          columnNumber: 6
        }, this),
        " or ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "react-router" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 303,
          columnNumber: 40
        }, this),
        ". Keep in mind that when you use",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 304,
          columnNumber: 6
        }, this),
        " the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "type" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 304,
          columnNumber: 43
        }, this),
        " prop will ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "NOT" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 304,
          columnNumber: 83
        }, this),
        " be passed to the child component."
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 299,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { appearance: "filled", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 309,
          columnNumber: 41
        }, this), asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: route("/base/colors"), children: "See our colors!" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 310,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 309,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 308,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 315,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";
									import { Link } from "react-router-dom";

									<Button appearance="filled" icon={<Fire weight="fill" />} asChild>
										<Link to="/base/colors">See our colors!</Link>
									</Button>
								` }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 316,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 314,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 313,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 307,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.button.tsx",
      lineNumber: 295,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 331,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 335,
          columnNumber: 10
        }, this),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button", children: "standard HTML button attributes" }, void 0, false, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 336,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 334,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropsTable, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "appearance", optional: true }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 343,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "ghost" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 347,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 346,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "filled" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 350,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 349,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "outlined" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 353,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 352,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "link" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 356,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 355,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 345,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 344,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "outlined" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 361,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 360,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Defines the visual style of the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 365,
              columnNumber: 41
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 364,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 363,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 342,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "asChild", optional: true }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 370,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 372,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 371,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 375,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 374,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Use the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 379,
              columnNumber: 17
            }, this),
            " prop to compose the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 379,
              columnNumber: 70
            }, this),
            " styling and functionality onto alternative element types or your own React components."
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 378,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 377,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 369,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "icon", optional: true }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 385,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReactNodePropType, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 387,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 386,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 389,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: [
            "An icon to render inside the button. If the ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "state" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 391,
              columnNumber: 52
            }, this),
            " is",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "pending" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 392,
              columnNumber: 8
            }, this),
            ", then the icon will automatically be replaced with a spinner."
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 390,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 384,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "iconPlacement", optional: true }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 396,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "start" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 400,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 399,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "end" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 403,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 402,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 398,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 397,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "start" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 408,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 407,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "The side that the icon will render on, if one is present. If ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: 'state="pending"' }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 412,
              columnNumber: 70
            }, this),
            ", then the loading icon will also render on this side."
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 411,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 410,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 395,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "isLoading", optional: true }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 418,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 420,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 419,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanPropType, { value: false }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 423,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 422,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Determines whether or not the button is in a loading state, default ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "false" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 427,
              columnNumber: 77
            }, this),
            ". Setting ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "isLoading" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 428,
              columnNumber: 17
            }, this),
            " will replace any ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "icon" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 428,
              columnNumber: 69
            }, this),
            " with a spinner, or add one if an icon wasn't given. It will also disable user interaction with the button and set ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "aria-disabled" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 430,
              columnNumber: 13
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 426,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 425,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 417,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "priority", optional: true }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 435,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "default" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 439,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 438,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "danger" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 442,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 441,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "neutral" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 445,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 444,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 437,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 436,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "default" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 450,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 449,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Indicates the importance or impact level of the button, affecting its color and styling to communicate its purpose to the user." }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 453,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 452,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 434,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropNameCell, { name: "type" }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 460,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "button" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 464,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 463,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "reset" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 467,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 466,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringPropType, { value: "submit" }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 470,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 469,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 462,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 461,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 474,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PropDescriptionCell, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "The default behavior of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "Button" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 477,
                columnNumber: 37
              }, this),
              ". Unlike the native",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "button" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 478,
                columnNumber: 9
              }, this),
              " element, unless you use the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "asChild" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 478,
                columnNumber: 69
              }, this),
              " prop,",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "this prop is required and has no default value" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 479,
                columnNumber: 9
              }, this),
              ". See",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type", children: "the MDN docs" }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 480,
                columnNumber: 9
              }, this),
              " ",
              "for more information."
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 476,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: '"button"' }, void 0, false, {
                  fileName: "app/routes/components.button.tsx",
                  lineNumber: 488,
                  columnNumber: 11
                }, this),
                ": The button has no default behavior, and does nothing when pressed by default."
              ] }, void 0, true, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 487,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 486,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: '"reset"' }, void 0, false, {
                  fileName: "app/routes/components.button.tsx",
                  lineNumber: 494,
                  columnNumber: 11
                }, this),
                ": The button resets all the controls to their initial values."
              ] }, void 0, true, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 493,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 492,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: '"submit"' }, void 0, false, {
                  fileName: "app/routes/components.button.tsx",
                  lineNumber: 499,
                  columnNumber: 11
                }, this),
                ": The button submits the form data to the server."
              ] }, void 0, true, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 498,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.button.tsx",
                lineNumber: 497,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.button.tsx",
              lineNumber: 485,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.button.tsx",
            lineNumber: 475,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.button.tsx",
          lineNumber: 459,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.button.tsx",
        lineNumber: 341,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.button.tsx",
      lineNumber: 330,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.button.tsx",
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
//# sourceMappingURL=/build/routes/components.button-GA3YGW4N.js.map
