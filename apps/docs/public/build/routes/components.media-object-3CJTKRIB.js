import {
  MediaObject,
  MediaObjectContent,
  MediaObjectMedia
} from "/build/_shared/chunk-HZN7EN2J.js";
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

// app/routes/components.media-object.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.media-object.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.media-object.tsx"
  );
  import.meta.hot.lastModified = "1724091104715.1016";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Media Object"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Media Object" }, void 0, false, {
        fileName: "app/routes/components.media-object.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-4 font-body text-xl text-body", children: "The Media Object is an image/icon (media) to the left, with descriptive content (title and subtitle/description) to the right." }, void 0, false, {
        fileName: "app/routes/components.media-object.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.media-object.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4 font-body text-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Change the spacing between the media and content by passing a ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "gap-*" }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 50,
          columnNumber: 68
        }, this),
        " class. The default ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "gap" }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 51,
          columnNumber: 14
        }, this),
        " is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "gap-4" }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 51,
          columnNumber: 46
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.media-object.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Use ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "flexbox" }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 54,
          columnNumber: 10
        }, this),
        " utilities to change the alignment of the media and content."
      ] }, void 0, true, {
        fileName: "app/routes/components.media-object.tsx",
        lineNumber: 53,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Compose the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<MediaObject>" }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 57,
          columnNumber: 18
        }, this),
        " with the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<MediaObjectMedia>" }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 58,
          columnNumber: 6
        }, this),
        " and ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineCode, { children: "<MediaObjectContent>" }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 58,
          columnNumber: 60
        }, this),
        " ",
        "components as direct children."
      ] }, void 0, true, {
        fileName: "app/routes/components.media-object.tsx",
        lineNumber: 56,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaObject, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaObjectMedia, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExampleMedia, {}, void 0, false, {
            fileName: "app/routes/components.media-object.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.media-object.tsx",
            lineNumber: 65,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaObjectContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-bold", children: "Lorem ipsum" }, void 0, false, {
              fileName: "app/routes/components.media-object.tsx",
              lineNumber: 69,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4 mt-1", children: "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto." }, void 0, false, {
              fileName: "app/routes/components.media-object.tsx",
              lineNumber: 70,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat." }, void 0, false, {
              fileName: "app/routes/components.media-object.tsx",
              lineNumber: 74,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.media-object.tsx",
            lineNumber: 68,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 64,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 63,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.media-object.tsx",
            lineNumber: 80,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@ngrok/mantle/media-object";

							<MediaObject>
								<MediaObjectMedia>
									<ExampleMedia />
								</MediaObjectMedia>
								<MediaObjectContent>
									<h4 className="text-lg font-bold">Lorem ipsum</h4>
									<p className="mb-4 mt-1">
										Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
										quidem ipsam quia iusto.
									</p>
									<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
								</MediaObjectContent>
							</MediaObject>
						` }, void 0, false, {
            fileName: "app/routes/components.media-object.tsx",
            lineNumber: 81,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.media-object.tsx",
          lineNumber: 78,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.media-object.tsx",
        lineNumber: 62,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.media-object.tsx",
      lineNumber: 48,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.media-object.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c = Page;
var ExampleMedia = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-16 w-16 border border-gray-300 bg-white text-gray-300", preserveAspectRatio: "none", stroke: "currentColor", fill: "none", viewBox: "0 0 200 200", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { vectorEffect: "non-scaling-stroke", strokeWidth: 1, d: "M0 0l200 200M0 200L200 0" }, void 0, false, {
  fileName: "app/routes/components.media-object.tsx",
  lineNumber: 106,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/routes/components.media-object.tsx",
  lineNumber: 105,
  columnNumber: 28
}, this);
_c2 = ExampleMedia;
var _c;
var _c2;
$RefreshReg$(_c, "Page");
$RefreshReg$(_c2, "ExampleMedia");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.media-object-3CJTKRIB.js.map
