import {
  Label
} from "/build/_shared/chunk-7PO2QPUK.js";
import {
  Input
} from "/build/_shared/chunk-O6A7XH6E.js";
import "/build/_shared/chunk-VMZZWZYH.js";
import "/build/_shared/chunk-NG7IOVW6.js";
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

// app/routes/components.label.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.label.tsx"
  );
  import.meta.hot.lastModified = "1724091104714.9993";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Label"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Label" }, void 0, false, {
      fileName: "app/routes/components.label.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Renders an accessible label associated with controls." }, void 0, false, {
      fileName: "app/routes/components.label.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "grid gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "name", children: [
          "Name: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", id: "name" }, void 0, false, {
            fileName: "app/routes/components.label.tsx",
            lineNumber: 46,
            columnNumber: 14
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.label.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "name-2", children: "Name:" }, void 0, false, {
            fileName: "app/routes/components.label.tsx",
            lineNumber: 49,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", id: "name-2" }, void 0, false, {
            fileName: "app/routes/components.label.tsx",
            lineNumber: 50,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.label.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "name-disabled", children: [
          "Name: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", id: "name", disabled: true, readOnly: true, validation: "error", value: "foo" }, void 0, false, {
            fileName: "app/routes/components.label.tsx",
            lineNumber: 53,
            columnNumber: 14
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.label.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.label.tsx",
        lineNumber: 44,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.label.tsx",
          lineNumber: 58,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { Input } from "@ngrok/mantle/input";
									import { Label } from "@ngrok/mantle/label";

									<Label htmlFor="name">
										Name: <Input type="text" id="name" />
									</Label>

									<div className="flex items-center gap-2">
										<Label htmlFor="name-2">Name:</Label>
										<Input type="text" id="name-2" />
									</div>
								` }, void 0, false, {
          fileName: "app/routes/components.label.tsx",
          lineNumber: 59,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.label.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/components.label.tsx",
        lineNumber: 56,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.label.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.label.tsx",
    lineNumber: 40,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/components.label.tsx",
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
//# sourceMappingURL=/build/routes/components.label-EO32HIK5.js.map
