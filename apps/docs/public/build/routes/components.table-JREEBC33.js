import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "/build/_shared/chunk-E4E5W3BR.js";
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

// app/routes/components.table.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.table.tsx"
  );
  import.meta.hot.lastModified = "1724091104718.0046";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Table"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Table" }, void 0, false, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A responsive table component." }, void 0, false, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { className: "gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExampleTable, {}, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 43,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.table.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@ngrok/mantle/table";

							<Table>
								<TableCaption>A list of your recent invoices.</TableCaption>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px]">Invoice</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Method</TableHead>
										<TableHead className="text-right">Amount</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{invoices.map((invoice) => (
										<TableRow key={invoice.invoice}>
											<TableCell className="font-medium">{invoice.invoice}</TableCell>
											<TableCell>{invoice.paymentStatus}</TableCell>
											<TableCell>{invoice.paymentMethod}</TableCell>
											<TableCell className="text-right">{invoice.totalAmount}</TableCell>
										</TableRow>
									))}
								</TableBody>
								<TableFooter>
									<TableRow>
										<TableCell colSpan={3}>Total</TableCell>
										<TableCell className="text-right">$2,500.00</TableCell>
									</TableRow>
								</TableFooter>
							</Table>
						` }, void 0, false, {
          fileName: "app/routes/components.table.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 46,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.table.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c = Page;
var ExampleTable = () => {
  const invoices = [{
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card"
  }, {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal"
  }, {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer"
  }, {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card"
  }, {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal"
  }, {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer"
  }, {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-10 mt-4 overflow-hidden rounded-lg border border-gray-300 bg-white dark:bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCaption, { children: "A list of your recent invoices." }, void 0, false, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 124,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { className: "w-[100px]", children: "Invoice" }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Status" }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 128,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Method" }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 129,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { className: "text-right", children: "Amount" }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 126,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 125,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: invoices.map((invoice) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { className: "font-medium", children: invoice.invoice }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 135,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: invoice.paymentStatus }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 136,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: invoice.paymentMethod }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 137,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { className: "text-right", children: invoice.totalAmount }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 138,
        columnNumber: 8
      }, this)
    ] }, invoice.invoice, true, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 134,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 133,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { colSpan: 3, children: "Total" }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 143,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { className: "text-right", children: "$2,500.00" }, void 0, false, {
        fileName: "app/routes/components.table.tsx",
        lineNumber: 144,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 142,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/components.table.tsx",
      lineNumber: 141,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.table.tsx",
    lineNumber: 123,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/components.table.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
};
_c2 = ExampleTable;
var _c;
var _c2;
$RefreshReg$(_c, "Page");
$RefreshReg$(_c2, "ExampleTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.table-JREEBC33.js.map
