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

// app/routes/components.anchor.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.anchor.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.anchor.tsx"
  );
  import.meta.hot.lastModified = "1724091104713.1094";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Anchor"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Anchor" }, void 0, false, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Fundamental component for rendering links to external addresses." }, void 0, false, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.anchor.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 font-body text-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<Anchor>" }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 46,
          columnNumber: 10
        }, this),
        " element, with its ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "href" }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 46,
          columnNumber: 68
        }, this),
        " attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."
      ] }, void 0, true, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Content within each ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<Anchor>" }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 51,
          columnNumber: 26
        }, this),
        " should indicate the link\u2019s destination. If the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "href" }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 52,
          columnNumber: 10
        }, this),
        " attribute is present, pressing the enter key while focused on the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<Anchor>" }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 53,
          columnNumber: 6
        }, this),
        " element will activate it."
      ] }, void 0, true, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "See the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a", children: "MDN docs" }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 56,
          columnNumber: 14
        }, this),
        " for more information."
      ] }, void 0, true, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "If you need to link to an internal application route, prefer using the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://reactrouter.com/en/main/components/link", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "react-router-dom" }, void 0, false, {
            fileName: "app/routes/components.anchor.tsx",
            lineNumber: 62,
            columnNumber: 7
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<Link>" }, void 0, false, {
            fileName: "app/routes/components.anchor.tsx",
            lineNumber: 62,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 61,
          columnNumber: 6
        }, this),
        " ",
        "or the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://remix.run/docs/en/main/components/link", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "@remix-run/react" }, void 0, false, {
            fileName: "app/routes/components.anchor.tsx",
            lineNumber: 66,
            columnNumber: 7
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<Link>" }, void 0, false, {
            fileName: "app/routes/components.anchor.tsx",
            lineNumber: 66,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 65,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.anchor.tsx",
      lineNumber: 44,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "This link will go to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://ngrok.com/", children: "ngrok.com" }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 75,
          columnNumber: 28
        }, this),
        "!"
      ] }, void 0, true, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 74,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 73,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							import { Anchor } from "@ngrok/mantle/anchor";

							<p>
								This link will go to <Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
							</p>
						` }, void 0, false, {
          fileName: "app/routes/components.anchor.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 79,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.anchor.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.anchor.tsx",
      lineNumber: 72,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.anchor.tsx",
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
//# sourceMappingURL=/build/routes/components.anchor-MYGH3JNO.js.map
