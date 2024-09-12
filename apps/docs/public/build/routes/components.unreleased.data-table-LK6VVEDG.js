import {
  UnreleasedBadge
} from "/build/_shared/chunk-LFKMADC2.js";
import "/build/_shared/chunk-7JQTAYD5.js";
import "/build/_shared/chunk-AY4ASLMH.js";
import {
  Anchor
} from "/build/_shared/chunk-4SICMU5M.js";
import {
  InlineCode
} from "/build/_shared/chunk-B5JUMWCL.js";
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

// packages/data-table/src/data-table.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var DataTable = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Coming Soon..." }, void 0, false, {
  fileName: "packages/data-table/src/data-table.tsx",
  lineNumber: 1,
  columnNumber: 25
}, this);

// app/routes/components.unreleased.data-table.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.unreleased.data-table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.unreleased.data-table.tsx"
  );
  import.meta.hot.lastModified = "1724091104718.4866";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Unreleased Data Table"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { id: "data-table", className: "text-5xl font-medium", children: "Data Table" }, void 0, false, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 44,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UnreleasedBadge, {}, void 0, false, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 47,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.unreleased.data-table.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "Tables purposefully designed for dynamic, application data with features like sorting, filtering, and pagination. Powered by",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor, { href: "https://tanstack.com/table/latest/docs/introduction", children: "TanStack Table" }, void 0, false, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 52,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.unreleased.data-table.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "flex-col gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTable, {}, void 0, false, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 55,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.unreleased.data-table.tsx",
            lineNumber: 60,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { DNE } from "@ngrok/mantle/data-table";

									<DNE />
								` }, void 0, false, {
            fileName: "app/routes/components.unreleased.data-table.tsx",
            lineNumber: 61,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 58,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.unreleased.data-table.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.unreleased.data-table.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.unreleased.data-table.tsx",
        lineNumber: 71,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "DataTable" }, void 0, false, {
          fileName: "app/routes/components.unreleased.data-table.tsx",
          lineNumber: 75,
          columnNumber: 10
        }, this),
        " accepts the following props in addition to..."
      ] }, void 0, true, {
        fileName: "app/routes/components.unreleased.data-table.tsx",
        lineNumber: 74,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.unreleased.data-table.tsx",
      lineNumber: 70,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.unreleased.data-table.tsx",
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
//# sourceMappingURL=/build/routes/components.unreleased.data-table-LK6VVEDG.js.map
