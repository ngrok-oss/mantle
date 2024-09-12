import {
  Link
} from "/build/_shared/chunk-S5JMZHQR.js";
import {
  MediaObject,
  MediaObjectContent,
  MediaObjectMedia
} from "/build/_shared/chunk-HZN7EN2J.js";
import "/build/_shared/chunk-TFWTF37R.js";
import "/build/_shared/chunk-4SICMU5M.js";
import {
  InlineCode
} from "/build/_shared/chunk-B5JUMWCL.js";
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
import "/build/_shared/chunk-POHPDT6N.js";
import "/build/_shared/chunk-VJGIG3I4.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/skeleton/src/skeleton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: cx(
        "h-4 animate-pulse rounded-md bg-gray-300/25 dark-high-contrast:bg-black/30 high-contrast:bg-black/30 dark:bg-gray-950/10",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "packages/skeleton/src/skeleton.tsx",
      lineNumber: 15,
      columnNumber: 3
    },
    this
  );
}

// app/routes/components.skeleton.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.skeleton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.skeleton.tsx"
  );
  import.meta.hot.lastModified = "1724091104717.7854";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Skeleton"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Skeleton" }, void 0, false, {
        fileName: "app/routes/components.skeleton.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4 font-body text-xl text-body", children: [
        "Use to show a placeholder while content is loading. By using a ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "Skeleton" }, void 0, false, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 45,
          columnNumber: 69
        }, this),
        ", you can give the user an idea of what the content will look like, reducing the perceived loading time and CLS (Cumulative Layout Shift)."
      ] }, void 0, true, {
        fileName: "app/routes/components.skeleton.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "w-full" }, void 0, false, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 50,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 55,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
						import { Skeleton } from "@ngrok/mantle/skeleton";

						<Skeleton className="w-full" />
					` }, void 0, false, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 56,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 53,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.skeleton.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.skeleton.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-medium", children: [
          "Skeleton ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/components/media-object", children: "Media Object" }, void 0, false, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 69,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 68,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 font-body text-body", children: "The Skeleton component can be included within components. You can also pass Tailwind utility classes for further control." }, void 0, false, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 71,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.skeleton.tsx",
        lineNumber: 67,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MediaObject, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MediaObjectMedia, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "h-12 w-12 rounded-full" }, void 0, false, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 79,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MediaObjectContent, { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "w-[250px]" }, void 0, false, {
              fileName: "app/routes/components.skeleton.tsx",
              lineNumber: 83,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "w-[200px]" }, void 0, false, {
              fileName: "app/routes/components.skeleton.tsx",
              lineNumber: 84,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 82,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 77,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 90,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { MediaObject, MediaObjectMedia, MediaObjectContent } from "@ngrok/mantle/media-object";
									import { Skeleton } from "@ngrok/skeleton";

									<MediaObject>
										<MediaObjectMedia>
											<Skeleton className="h-12 w-12 rounded-full" />
										</MediaObjectMedia>
										<MediaObjectContent className="space-y-3">
											<Skeleton className="w-[250px]" />
											<Skeleton className="w-[200px]" />
										</MediaObjectContent>
									</MediaObject>
								` }, void 0, false, {
            fileName: "app/routes/components.skeleton.tsx",
            lineNumber: 91,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 89,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.skeleton.tsx",
          lineNumber: 88,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.skeleton.tsx",
        lineNumber: 76,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.skeleton.tsx",
      lineNumber: 66,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.skeleton.tsx",
    lineNumber: 41,
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
//# sourceMappingURL=/build/routes/components.skeleton-356FVIW7.js.map
