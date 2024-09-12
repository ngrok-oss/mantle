import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-ALBVFRJR.js";
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

// app/routes/components.card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.card.tsx"
  );
  import.meta.hot.lastModified = "1724091104713.727";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Card"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Card" }, void 0, false, {
      fileName: "app/routes/components.card.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A container used to display content in a box, resembling a physical card." }, void 0, false, {
      fileName: "app/routes/components.card.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Card Title Here" }, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 48,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Laborum in aute officia adipisicing elit velit." }, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 51,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Card footer" }, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 54,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.card.tsx",
        lineNumber: 46,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.card.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";

							<Card>
								<CardHeader>
									<CardTitle>Card Title Here</CardTitle>
								</CardHeader>
								<CardBody>
									<p>Laborum in aute officia adipisicing elit velit.</p>
								</CardBody>
								<CardFooter>
									<p>Card footer</p>
								</CardFooter>
							</Card>
						` }, void 0, false, {
          fileName: "app/routes/components.card.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.card.tsx",
        lineNumber: 59,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.card.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.card.tsx",
      lineNumber: 44,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.card.tsx",
    lineNumber: 38,
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
//# sourceMappingURL=/build/routes/components.card-WRLWC5VW.js.map
