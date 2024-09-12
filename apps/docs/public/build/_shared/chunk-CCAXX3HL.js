import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "/build/_shared/chunk-E4E5W3BR.js";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "/build/_shared/chunk-PH4L52LR.js";
import {
  require_prism
} from "/build/_shared/chunk-MLYZRSVN.js";
import {
  invariant
} from "/build/_shared/chunk-L6J2GUHO.js";
import {
  cx
} from "/build/_shared/chunk-ACY2JGBA.js";
import {
  createHotContext
} from "/build/_shared/chunk-T2SS4IJE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ANPTKELO.js";
import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// app/components/props-table.tsx
var import_prismjs = __toESM(require_prism(), 1);
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/props-table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/props-table.tsx"
  );
  import.meta.hot.lastModified = "1724091104712.0063";
}
var PropsTable = ({
  children,
  className,
  style
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx("overflow-hidden rounded-lg border border-gray-300", className), style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Prop" }, void 0, false, {
      fileName: "app/components/props-table.tsx",
      lineNumber: 37,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Type" }, void 0, false, {
      fileName: "app/components/props-table.tsx",
      lineNumber: 38,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Default" }, void 0, false, {
      fileName: "app/components/props-table.tsx",
      lineNumber: 39,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Description" }, void 0, false, {
      fileName: "app/components/props-table.tsx",
      lineNumber: 40,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 35,
    columnNumber: 4
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { className: "font-body text-xs text-body", children }, void 0, false, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 43,
    columnNumber: 4
  }, this)
] }, void 0, true, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 33,
  columnNumber: 7
}, this);
_c = PropsTable;
var PropRow = ({
  children,
  className,
  style
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { className, style, children }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 51,
  columnNumber: 7
}, this);
_c2 = PropRow;
var PropNameCell = ({
  className,
  name,
  optional,
  style
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { className: cx("align-top font-mono", className), style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex items-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "token attr-name", children: name }, void 0, false, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 62,
    columnNumber: 4
  }, this),
  optional && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { children: "?" }, void 0, false, {
      fileName: "app/components/props-table.tsx",
      lineNumber: 64,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { children: "This prop is optional." }, void 0, false, {
      fileName: "app/components/props-table.tsx",
      lineNumber: 65,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 63,
    columnNumber: 17
  }, this)
] }, void 0, true, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 60,
  columnNumber: 7
}, this);
_c3 = PropNameCell;
var PropTypeCell = ({
  children,
  className,
  style
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { className: cx("align-top font-mono", className), style, children }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 74,
  columnNumber: 7
}, this);
_c4 = PropTypeCell;
var PropDefaultValueCell = ({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: "\u2014" }, void 0, false, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 79,
    columnNumber: 14
  }, this),
  className,
  style
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { className: cx("align-top font-mono", className), style, children }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 82,
  columnNumber: 7
}, this);
_c5 = PropDefaultValueCell;
var PropDescriptionCell = ({
  children,
  className,
  style
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { className: cx("align-top", className), style, children }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 90,
  columnNumber: 7
}, this);
_c6 = PropDescriptionCell;
var ObjectPropType = ({
  name
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-600", children: name }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 96,
  columnNumber: 7
}, this);
_c7 = ObjectPropType;
var ReactNodePropType = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-600", children: "ReactNode" }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 98,
  columnNumber: 40
}, this);
_c8 = ReactNodePropType;
var BooleanPropType = ({
  value
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-purple-600", children: typeof value === "undefined" ? "boolean" : String(value) }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 102,
  columnNumber: 7
}, this);
_c9 = BooleanPropType;
var StringPropType = ({
  value
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "token attr-value", children: value ?? "string" }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 106,
  columnNumber: 7
}, this);
_c10 = StringPropType;
var NumberPropType = ({
  value
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "token number", children: value ?? "number" }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 110,
  columnNumber: 7
}, this);
_c11 = NumberPropType;
var FuncPropType = ({
  value
}) => {
  _s();
  const trimmedCode = value?.trim() ?? "";
  const [highlightedCodeInnerHtml, setHighlightedCodeInnerHtml] = (0, import_react.useState)(trimmedCode);
  (0, import_react.useEffect)(() => {
    const grammar = import_prismjs.default.languages.typescript;
    invariant(grammar, "Couldn't load Prism grammar for typescript!");
    const newHighlightedCodeInnerHtml = import_prismjs.default.highlight(trimmedCode, grammar, "typescript");
    setHighlightedCodeInnerHtml(newHighlightedCodeInnerHtml);
  }, [trimmedCode]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "language-typescript", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { dangerouslySetInnerHTML: {
    __html: highlightedCodeInnerHtml
  } }, void 0, false, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 126,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/props-table.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
};
_s(FuncPropType, "A3eZdQWPzY43vvWTg2s/UGKpUFY=");
_c12 = FuncPropType;
var UndefinedPropType = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "italic text-amber-600", children: "undefined" }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 133,
  columnNumber: 40
}, this);
_c13 = UndefinedPropType;
var NullPropType = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "italic text-amber-600", children: "null" }, void 0, false, {
  fileName: "app/components/props-table.tsx",
  lineNumber: 135,
  columnNumber: 35
}, this);
_c14 = NullPropType;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
$RefreshReg$(_c, "PropsTable");
$RefreshReg$(_c2, "PropRow");
$RefreshReg$(_c3, "PropNameCell");
$RefreshReg$(_c4, "PropTypeCell");
$RefreshReg$(_c5, "PropDefaultValueCell");
$RefreshReg$(_c6, "PropDescriptionCell");
$RefreshReg$(_c7, "ObjectPropType");
$RefreshReg$(_c8, "ReactNodePropType");
$RefreshReg$(_c9, "BooleanPropType");
$RefreshReg$(_c10, "StringPropType");
$RefreshReg$(_c11, "NumberPropType");
$RefreshReg$(_c12, "FuncPropType");
$RefreshReg$(_c13, "UndefinedPropType");
$RefreshReg$(_c14, "NullPropType");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PropsTable,
  PropRow,
  PropNameCell,
  PropTypeCell,
  PropDefaultValueCell,
  PropDescriptionCell,
  ObjectPropType,
  ReactNodePropType,
  BooleanPropType,
  StringPropType,
  NumberPropType,
  FuncPropType
};
//# sourceMappingURL=/build/_shared/chunk-CCAXX3HL.js.map
