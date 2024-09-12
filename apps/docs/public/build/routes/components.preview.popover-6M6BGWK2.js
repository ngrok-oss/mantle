import {
  Combination_default,
  FocusScope,
  hideOthers,
  useFocusGuards
} from "/build/_shared/chunk-OYR227OB.js";
import {
  PreviewBadge
} from "/build/_shared/chunk-LFKMADC2.js";
import "/build/_shared/chunk-7JQTAYD5.js";
import {
  Input
} from "/build/_shared/chunk-O6A7XH6E.js";
import "/build/_shared/chunk-VMZZWZYH.js";
import "/build/_shared/chunk-NG7IOVW6.js";
import "/build/_shared/chunk-4ETGGIWM.js";
import {
  Button
} from "/build/_shared/chunk-SHVMSGFH.js";
import "/build/_shared/chunk-ATBEVGT6.js";
import "/build/_shared/chunk-76G7XZOH.js";
import "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
import {
  Anchor,
  Arrow,
  Content,
  Root2,
  createPopperScope
} from "/build/_shared/chunk-YB45JGV3.js";
import "/build/_shared/chunk-IC4IMGCE.js";
import {
  DismissableLayer,
  Portal
} from "/build/_shared/chunk-TYVC565J.js";
import {
  Presence,
  useId
} from "/build/_shared/chunk-DJ4VH3J3.js";
import {
  composeEventHandlers,
  createContextScope,
  useControllableState
} from "/build/_shared/chunk-UPCWMVF7.js";
import {
  Primitive
} from "/build/_shared/chunk-YXKBN4EE.js";
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
import {
  Slot,
  useComposedRefs
} from "/build/_shared/chunk-3LE3N7DD.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-ET7BOX4G.js";
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

// node_modules/.pnpm/@radix-ui+react-popover@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = React.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = React.useState(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: React.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    React.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent = React.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent.displayName = CONTENT_NAME;
var PopoverContentModal = React.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = React.useRef(false);
    React.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          if (!isRightClickOutsideRef.current)
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = React.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = React.useRef(false);
    const hasPointerDownOutsideRef = React.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current)
              context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    useFocusGuards();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Content,
              {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME = "PopoverClose";
var PopoverClose = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root22 = Popover;
var Trigger = PopoverTrigger;
var Portal2 = PopoverPortal;
var Content2 = PopoverContent;

// packages/popover/src/popover.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Popover2 = Root22;
var PopoverTrigger2 = Trigger;
var PopoverContent2 = (0, import_react.forwardRef)(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Content2,
  {
    ref,
    align,
    sideOffset,
    className: cx(
      "text-popover-foreground z-50 w-72 rounded-md border border-popover bg-popover p-4 shadow-md outline-none data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/popover/src/popover.tsx",
    lineNumber: 41,
    columnNumber: 3
  },
  this
) }, void 0, false, {
  fileName: "packages/popover/src/popover.tsx",
  lineNumber: 40,
  columnNumber: 2
}, this));
PopoverContent2.displayName = "PopoverContent";

// app/routes/components.preview.popover.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.preview.popover.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.preview.popover.tsx"
  );
  import.meta.hot.lastModified = "1724091104715.425";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Popover"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Popover" }, void 0, false, {
        fileName: "app/routes/components.preview.popover.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PreviewBadge, {}, void 0, false, {
        fileName: "app/routes/components.preview.popover.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.preview.popover.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Displays rich content in a portal, triggered by a button." }, void 0, false, {
      fileName: "app/routes/components.preview.popover.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PopoverTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Open popover" }, void 0, false, {
          fileName: "app/routes/components.preview.popover.tsx",
          lineNumber: 51,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.preview.popover.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PopoverContent2, { className: "w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "grid gap-4", onSubmit: (event) => {
          event.preventDefault();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "font-medium leading-none", children: "Dimensions" }, void 0, false, {
              fileName: "app/routes/components.preview.popover.tsx",
              lineNumber: 60,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-gray-700", children: "Set the dimensions for the layer." }, void 0, false, {
              fileName: "app/routes/components.preview.popover.tsx",
              lineNumber: 61,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.preview.popover.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-3 items-center gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "width", children: "Width" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 65,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "width", defaultValue: "100%", className: "col-span-2 h-8" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 66,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.preview.popover.tsx",
              lineNumber: 64,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-3 items-center gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "maxWidth", children: "Max. width" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 69,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "maxWidth", defaultValue: "300px", className: "col-span-2 h-8" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 70,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.preview.popover.tsx",
              lineNumber: 68,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-3 items-center gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "height", children: "Height" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 73,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "height", defaultValue: "25px", className: "col-span-2 h-8" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 74,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.preview.popover.tsx",
              lineNumber: 72,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-3 items-center gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "maxHeight", children: "Max. height" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 77,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "maxHeight", defaultValue: "none", className: "col-span-2 h-8" }, void 0, false, {
                fileName: "app/routes/components.preview.popover.tsx",
                lineNumber: 78,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.preview.popover.tsx",
              lineNumber: 76,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.preview.popover.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.preview.popover.tsx",
          lineNumber: 56,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.preview.popover.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.preview.popover.tsx",
        lineNumber: 49,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.preview.popover.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.preview.popover.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
								import { Popover, PopoverContent, PopoverTrigger } from "@ngrok/mantle/popover";

								<Popover>
									<PopoverTrigger asChild>
										<Button>Open popover</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80">
										<p>Reprehenderit veniam excepteur incididunt et ut eu.</p>
									</PopoverContent>
								</Popover>
							` }, void 0, false, {
          fileName: "app/routes/components.preview.popover.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.preview.popover.tsx",
        lineNumber: 86,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.preview.popover.tsx",
        lineNumber: 85,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.preview.popover.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.preview.popover.tsx",
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
//# sourceMappingURL=/build/routes/components.preview.popover-6M6BGWK2.js.map
