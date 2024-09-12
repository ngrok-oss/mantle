import {
  Close,
  Content,
  Description,
  I,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger
} from "/build/_shared/chunk-77TEQJIV.js";
import {
  R
} from "/build/_shared/chunk-CK4ERQXV.js";
import "/build/_shared/chunk-OYR227OB.js";
import {
  IconButton
} from "/build/_shared/chunk-4ETGGIWM.js";
import {
  Button
} from "/build/_shared/chunk-SHVMSGFH.js";
import "/build/_shared/chunk-ATBEVGT6.js";
import "/build/_shared/chunk-76G7XZOH.js";
import "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
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
import "/build/_shared/chunk-VJGIG3I4.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/dialog/src/dialog.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Dialog = Root;
var DialogTrigger = Trigger;
var DialogPortal = Portal;
var DialogClose = Close;
var DialogOverlay = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Overlay,
  {
    ref,
    className: cx(
      "fixed inset-0 z-50 bg-overlay backdrop-blur-sm data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:animate-in data-state-open:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/dialog/src/dialog.tsx",
    lineNumber: 20,
    columnNumber: 2
  },
  this
));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = (0, import_react.forwardRef)(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
      fileName: "packages/dialog/src/dialog.tsx",
      lineNumber: 34,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-4 z-50 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Content,
      {
        className: cx(
          "flex max-h-full w-full max-w-lg flex-1 flex-col",
          "outline-none focus-within:outline-none",
          "rounded-xl border border-dialog bg-dialog shadow-lg transition-transform duration-200",
          "data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
          className
        ),
        ref,
        ...props,
        children
      },
      void 0,
      false,
      {
        fileName: "packages/dialog/src/dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
      },
      this
    ) }, void 0, false, {
      fileName: "packages/dialog/src/dialog.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "packages/dialog/src/dialog.tsx",
    lineNumber: 33,
    columnNumber: 3
  }, this)
);
DialogContent.displayName = Content.displayName;
var DialogHeader = ({ className, children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    className: cx(
      "relative flex shrink-0 items-center justify-between gap-2 border-b border-dialog-muted px-6 py-4 text-strong",
      "has-[.icon-button]:pr-4",
      // when there are actions in the header, shorten the padding
      className
    ),
    ...props,
    children
  },
  void 0,
  false,
  {
    fileName: "packages/dialog/src/dialog.tsx",
    lineNumber: 56,
    columnNumber: 2
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogCloseIconButton = ({
  size = "md",
  type = "button",
  label = "Close Dialog",
  appearance = "ghost",
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { appearance, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(R, {}, void 0, false, {
  fileName: "packages/dialog/src/dialog.tsx",
  lineNumber: 78,
  columnNumber: 45
}, this), label, size, type, ...props }, void 0, false, {
  fileName: "packages/dialog/src/dialog.tsx",
  lineNumber: 78,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "packages/dialog/src/dialog.tsx",
  lineNumber: 77,
  columnNumber: 2
}, this);
var DialogBody = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cx("scrollbar flex-1 overflow-y-auto p-6 text-body", className), ...props }, void 0, false, {
  fileName: "packages/dialog/src/dialog.tsx",
  lineNumber: 83,
  columnNumber: 2
}, this);
DialogBody.displayName = "DialogBody";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    className: cx("flex shrink-0 flex-row-reverse gap-2 border-t border-dialog-muted px-6 py-4", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/dialog/src/dialog.tsx",
    lineNumber: 88,
    columnNumber: 2
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { ref, className: cx("truncate text-lg font-medium text-strong", className), ...props }, void 0, false, {
  fileName: "packages/dialog/src/dialog.tsx",
  lineNumber: 99,
  columnNumber: 2
}, this));
DialogTitle.displayName = Title.displayName;
var DialogDescription = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { ref, className: cx("text-muted", className), ...props }, void 0, false, {
  fileName: "packages/dialog/src/dialog.tsx",
  lineNumber: 107,
  columnNumber: 2
}, this));
DialogDescription.displayName = Description.displayName;

// app/routes/components.dialog.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.dialog.tsx"
  );
  import.meta.hot.lastModified = "1724787629729.5225";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Dialog"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Dialog" }, void 0, false, {
        fileName: "app/routes/components.dialog.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." }, void 0, false, {
        fileName: "app/routes/components.dialog.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Open dialog" }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 53,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 52,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 59,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogCloseIconButton, {}, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 60,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 58,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogBody, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 62,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 68,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 67,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 73,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 72,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 66,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 57,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 51,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Open dialog (no close button)" }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 82,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 81,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi" }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 88,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 87,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogBody, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 90,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 96,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 95,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 101,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 100,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 94,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 86,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 80,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Open dialog (tall boi)" }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 110,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 109,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Tall boi example" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 116,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogCloseIconButton, {}, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 117,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 115,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogBody, { className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Consequat velit minim labore esse aliqua laboris non laborum qui labore duis reprehenderit." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 120,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Eiusmod eu consequat ex ipsum ex adipisicing." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 121,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Veniam eu nostrud officia pariatur aliquip dolor laboris cupidatat magna cillum nostrud aliquip ex esse." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 122,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Tempor laborum proident officia do." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 126,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Aliqua laborum id cillum anim." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 127,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Exercitation ex culpa laborum anim." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 128,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Voluptate minim culpa qui anim officia non do labore." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 129,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Ad exercitation do nulla laborum deserunt." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 130,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Quis mollit nostrud sint officia elit eu deserunt nostrud excepteur ea." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 131,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex adipisicing." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 132,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Exercitation officia sunt sit sint." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 133,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Velit eu deserunt proident Lorem sit proident ut minim." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 134,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Consequat velit minim labore esse aliqua laboris non laborum qui labore duis reprehenderit." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 135,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Eiusmod eu consequat ex ipsum ex adipisicing." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 136,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Veniam eu nostrud officia pariatur aliquip dolor laboris cupidatat magna cillum nostrud aliquip ex esse." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 137,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Tempor laborum proident officia do." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 141,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Aliqua laborum id cillum anim." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 142,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Exercitation ex culpa laborum anim." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 143,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Voluptate minim culpa qui anim officia non do labore." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 144,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Ad exercitation do nulla laborum deserunt." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 145,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Quis mollit nostrud sint officia elit eu deserunt nostrud excepteur ea." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 146,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex adipisicing." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 147,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Exercitation officia sunt sit sint." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 148,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Velit eu deserunt proident Lorem sit proident ut minim." }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 149,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 119,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 153,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 152,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 158,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "app/routes/components.dialog.tsx",
                  lineNumber: 157,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 151,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 114,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 108,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 50,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 168,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@ngrok/mantle/dialog";

							<Dialog>
								<DialogTrigger asChild>
									<Button type="button">Open dialog</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Are you absolutely sure?</DialogTitle>
									</DialogHeader>
									<DialogBody>
										This action cannot be undone. This will permanently delete your account and remove your data from our
										servers.
									</DialogBody>
									<DialogFooter>
										<Button type="button">
											Delete
										</Button>
										<Button type="button">
											Cancel
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						` }, void 0, false, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 169,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 167,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 166,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.dialog.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.dialog.tsx",
      lineNumber: 43,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "composition", className: "text-3xl font-medium", children: "Composition" }, void 0, false, {
        fileName: "app/routes/components.dialog.tsx",
        lineNumber: 201,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "In some cases, you might wish to have a tooltip over the dialog trigger. This is helpful if the dialog trigger is an ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "IconButton" }, void 0, false, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 206,
          columnNumber: 12
        }, this),
        " and you wish to provide more context to what the button does. You can compose them both together to where the dialog trigger is also the tooltip trigger."
      ] }, void 0, true, {
        fileName: "app/routes/components.dialog.tsx",
        lineNumber: 204,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconButton, { type: "button", label: "Delete", size: "sm", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, {}, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 215,
              columnNumber: 68
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 214,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 213,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Delete" }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 219,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 218,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 212,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Are you absolutely sure?" }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 225,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogCloseIconButton, {}, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 226,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 224,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogBody, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." }, void 0, false, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 228,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "danger", appearance: "filled", children: "Delete" }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 234,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 233,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", priority: "neutral", appearance: "outlined", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 239,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.dialog.tsx",
                lineNumber: 238,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.dialog.tsx",
              lineNumber: 232,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 223,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 211,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 210,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 249,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									<Dialog>
										<Tooltip>
											<TooltipTrigger asChild>
												<DialogTrigger asChild>
													<IconButton type="button" label="Delete" size="sm" icon={<TrashSimple />} />
												</DialogTrigger>
											</TooltipTrigger>
											<TooltipContent>
												<p>Delete</p>
											</TooltipContent>
										</Tooltip>

										<DialogContent>
											<DialogHeader>
												<DialogTitle>Are you absolutely sure?</DialogTitle>
												<DialogCloseIconButton />
											</DialogHeader>
											<DialogBody>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</DialogBody>
											<DialogFooter>
												<DialogClose asChild>
													<Button type="button" priority="danger" appearance="filled">
														Delete
													</Button>
												</DialogClose>
												<DialogClose asChild>
													<Button type="button" priority="neutral" appearance="outlined">
														Cancel
													</Button>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								` }, void 0, false, {
            fileName: "app/routes/components.dialog.tsx",
            lineNumber: 250,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 248,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.dialog.tsx",
          lineNumber: 247,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.dialog.tsx",
        lineNumber: 209,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.dialog.tsx",
      lineNumber: 200,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.dialog.tsx",
    lineNumber: 42,
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
//# sourceMappingURL=/build/routes/components.dialog-QAWJXLKF.js.map
