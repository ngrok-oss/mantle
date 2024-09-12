import {
  Item,
  Root,
  createRovingFocusGroupScope
} from "/build/_shared/chunk-2M7YGNNJ.js";
import {
  I
} from "/build/_shared/chunk-Y2RWYPIB.js";
import {
  createCollection,
  useDirection
} from "/build/_shared/chunk-ZYLV2OEO.js";
import {
  Separator
} from "/build/_shared/chunk-SZ2MWSLF.js";
import {
  l
} from "/build/_shared/chunk-MEWQDBIQ.js";
import {
  Combination_default,
  FocusScope,
  hideOthers,
  useFocusGuards
} from "/build/_shared/chunk-OYR227OB.js";
import "/build/_shared/chunk-4ETGGIWM.js";
import {
  Button
} from "/build/_shared/chunk-SHVMSGFH.js";
import "/build/_shared/chunk-ATBEVGT6.js";
import "/build/_shared/chunk-76G7XZOH.js";
import "/build/_shared/chunk-O7WT66KO.js";
import "/build/_shared/chunk-AY4ASLMH.js";
import {
  PropDefaultValueCell,
  PropDescriptionCell,
  PropNameCell,
  PropRow,
  PropTypeCell,
  PropsTable,
  StringPropType
} from "/build/_shared/chunk-CCAXX3HL.js";
import "/build/_shared/chunk-E4E5W3BR.js";
import {
  Anchor as Anchor2
} from "/build/_shared/chunk-4SICMU5M.js";
import {
  InlineCode
} from "/build/_shared/chunk-B5JUMWCL.js";
import "/build/_shared/chunk-PH4L52LR.js";
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
  useCallbackRef,
  useControllableState
} from "/build/_shared/chunk-UPCWMVF7.js";
import {
  Primitive,
  dispatchDiscreteCustomEvent
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
  composeRefs,
  useComposedRefs
} from "/build/_shared/chunk-3LE3N7DD.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-ET7BOX4G.js";
import {
  b,
  w
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
import "/build/_shared/chunk-VJGIG3I4.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.1_@types+react-dom@18.3.0_@types+react@18.3.4_react-dom@18._pl3oi7q2qqcmpdkf6umlkiczru/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var React2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-menu@2.1.1_@types+react-dom@18.3.0_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-menu/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection, useCollection, createCollectionScope] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = React.useState(null);
  const isUsingKeyboardRef = React.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React.useEffect(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: React.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
  forceMount: void 0
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME);
var MenuContent = React.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }
);
var MenuRootContentModal = React.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const ref = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React.useEffect(() => {
      const content = ref.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }
);
var MenuRootContentNonModal = React.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
});
var MenuContentImpl = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React.useState(null);
    const contentRef = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = React.useRef(0);
    const searchRef = React.useRef("");
    const pointerGraceTimerRef = React.useRef(0);
    const pointerGraceIntentRef = React.useRef(null);
    const pointerDirRef = React.useRef("right");
    const lastPointerXRef = React.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot, allowPinchZoom: true } : void 0;
    const handleTypeaheadSearch = (key) => {
      const search = searchRef.current + key;
      const items = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
      const values = items.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "")
          timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    };
    React.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = React.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: React.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event))
              event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: React.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event))
              return;
            contentRef.current?.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: React.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event))
              event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
              event.preventDefault();
              contentRef.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Root,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current)
                        event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Content,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab")
                              event.preventDefault();
                            if (!isModifierKey && isCharacterKey)
                              handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content)
                            return;
                          if (!FIRST_LAST_KEYS.includes(event.key))
                            return;
                          event.preventDefault();
                          const items = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key))
                            candidateNodes.reverse();
                          focusFirst(candidateNodes);
                        }),
                        onBlur: composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
MenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "MenuGroup";
var MenuGroup = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }
);
MenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "MenuLabel";
var MenuLabel = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, { ...labelProps, ref: forwardedRef });
  }
);
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = React.forwardRef(
  (props, forwardedRef) => {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME, props.__scopeMenu);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = React.useRef(false);
    const handleSelect = () => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
        dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          props.onPointerDown?.(event);
          isPointerDownRef.current = true;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          if (!isPointerDownRef.current)
            event.currentTarget?.click();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (disabled || isTypingAhead && event.key === " ")
            return;
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }
);
MenuItem.displayName = ITEM_NAME;
var MenuItemImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = React.useState(false);
    const [textContent, setTextContent] = React.useState("");
    React.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Collection.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }
);
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = React.forwardRef(
  (props, forwardedRef) => {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MenuItem,
      {
        role: "menuitemcheckbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          checkboxItemProps.onSelect,
          () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME,
  { value: void 0, onValueChange: () => {
  } }
);
var MenuRadioGroup = React.forwardRef(
  (props, forwardedRef) => {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = useCallbackRef(onValueChange);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }
);
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = React.forwardRef(
  (props, forwardedRef) => {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MenuItem,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          radioItemProps.onSelect,
          () => context.onValueChange?.(value),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Presence,
      {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }
);
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }
);
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenuArrow";
var MenuArrow = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
MenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
  const popperScope = usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = React.useState(null);
  const [content, setContent] = React.useState(null);
  const handleOpenChange = useCallbackRef(onOpenChange);
  React.useEffect(() => {
    if (parentMenuContext.open === false)
      handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [parentMenuContext.open, handleOpenChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MenuSubProvider,
        {
          scope: __scopeMenu,
          contentId: useId(),
          triggerId: useId(),
          trigger,
          onTriggerChange: setTrigger,
          children
        }
      )
    }
  ) });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = React.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = { __scopeMenu: props.__scopeMenu };
    const clearOpenTimer = React.useCallback(() => {
      if (openTimerRef.current)
        window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    React.useEffect(() => clearOpenTimer, [clearOpenTimer]);
    React.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MenuItemImpl,
      {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": getOpenState(context.open),
        ...props,
        ref: composeRefs(forwardedRef, subContext.onTriggerChange),
        onClick: (event) => {
          props.onClick?.(event);
          if (props.disabled || event.defaultPrevented)
            return;
          event.currentTarget.focus();
          if (!context.open)
            context.onOpenChange(true);
        },
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse((event) => {
            contentContext.onItemEnter(event);
            if (event.defaultPrevented)
              return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
              contentContext.onPointerGraceIntentChange(null);
              openTimerRef.current = window.setTimeout(() => {
                context.onOpenChange(true);
                clearOpenTimer();
              }, 100);
            }
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse((event) => {
            clearOpenTimer();
            const contentRect = context.content?.getBoundingClientRect();
            if (contentRect) {
              const side = context.content?.dataset.side;
              const rightSide = side === "right";
              const bleed = rightSide ? -5 : 5;
              const contentNearEdge = contentRect[rightSide ? "left" : "right"];
              const contentFarEdge = contentRect[rightSide ? "right" : "left"];
              contentContext.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: event.clientX + bleed, y: event.clientY },
                  { x: contentNearEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.bottom },
                  { x: contentNearEdge, y: contentRect.bottom }
                ],
                side
              });
              window.clearTimeout(pointerGraceTimerRef.current);
              pointerGraceTimerRef.current = window.setTimeout(
                () => contentContext.onPointerGraceIntentChange(null),
                300
              );
            } else {
              contentContext.onTriggerLeave(event);
              if (event.defaultPrevented)
                return;
              contentContext.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (props.disabled || isTypingAhead && event.key === " ")
            return;
          if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
            context.onOpenChange(true);
            context.content?.focus();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = React.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MenuContentImpl,
      {
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId,
        ...subContentProps,
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event) => {
          if (rootContext.isUsingKeyboardRef.current)
            ref.current?.focus();
          event.preventDefault();
        },
        onCloseAutoFocus: (event) => event.preventDefault(),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
          if (event.target !== subContext.trigger)
            context.onOpenChange(false);
        }),
        onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
          rootContext.onClose();
          event.preventDefault();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isKeyDownInside = event.currentTarget.contains(event.target);
          const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
          if (isKeyDownInside && isCloseKey) {
            context.onOpenChange(false);
            subContext.trigger?.focus();
            event.preventDefault();
          }
        })
      }
    ) }) }) });
  }
);
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i5 = 0, j = polygon.length - 1; i5 < polygon.length; j = i5++) {
    const xi = polygon[i5].x;
    const yi = polygon[i5].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root3 = Menu;
var Anchor22 = MenuAnchor;
var Portal2 = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator2 = MenuSeparator;
var Arrow2 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

// node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.1_@types+react-dom@18.3.0_@types+react@18.3.4_react-dom@18._pl3oi7q2qqcmpdkf6umlkiczru/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = React2.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React2.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Root3, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Anchor22, { asChild: true, ...menuScope, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open)
              event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled)
            return;
          if (["Enter", " "].includes(event.key))
            context.onOpenToggle();
          if (event.key === "ArrowDown")
            context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key))
            event.preventDefault();
        })
      }
    ) });
  }
);
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Portal2, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME2 = "DropdownMenuContent";
var DropdownMenuContent = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME2, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React2.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Content2,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current)
            context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick)
            hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
DropdownMenuContent.displayName = CONTENT_NAME2;
var GROUP_NAME2 = "DropdownMenuGroup";
var DropdownMenuGroup = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
DropdownMenuGroup.displayName = GROUP_NAME2;
var LABEL_NAME2 = "DropdownMenuLabel";
var DropdownMenuLabel = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
DropdownMenuLabel.displayName = LABEL_NAME2;
var ITEM_NAME2 = "DropdownMenuItem";
var DropdownMenuItem = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
DropdownMenuItem.displayName = ITEM_NAME2;
var CHECKBOX_ITEM_NAME2 = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = React2.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME2;
var RADIO_GROUP_NAME2 = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = React2.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME2;
var RADIO_ITEM_NAME2 = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = React2.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME2;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = React2.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME2 = "DropdownMenuSeparator";
var DropdownMenuSeparator = React2.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Separator2, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME2;
var ARROW_NAME2 = "DropdownMenuArrow";
var DropdownMenuArrow = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
DropdownMenuArrow.displayName = ARROW_NAME2;
var DropdownMenuSub = (props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
var SUB_TRIGGER_NAME2 = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = React2.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME2;
var SUB_CONTENT_NAME2 = "DropdownMenuSubContent";
var DropdownMenuSubContent = React2.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME2;
var Root22 = DropdownMenu;
var Trigger = DropdownMenuTrigger;
var Portal22 = DropdownMenuPortal;
var Content22 = DropdownMenuContent;
var Group2 = DropdownMenuGroup;
var Label2 = DropdownMenuLabel;
var Item22 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioGroup2 = DropdownMenuRadioGroup;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Sub2 = DropdownMenuSub;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;

// packages/dropdown-menu/src/dropdown-menu.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var DropdownMenu2 = Root22;
var DropdownMenuTrigger2 = Trigger;
var DropdownMenuGroup2 = Group2;
var DropdownMenuPortal2 = Portal22;
var DropdownMenuSub2 = Sub2;
var DropdownMenuRadioGroup2 = RadioGroup2;
var DropdownMenuSubTrigger2 = (0, import_react.forwardRef)(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  SubTrigger2,
  {
    className: cx(
      "focus:bg-accent data-state-open:bg-accent relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-9 text-base outline-none sm:text-sm",
      "data-highlighted:bg-popover-hover data-state-open:bg-popover-hover",
      "[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ref,
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute right-2 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(l, { className: "size-5 shrink-0 sm:size-4", weight: "bold" }, void 0, false, {
        fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 4
      }, this) }, void 0, false, {
        fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
        lineNumber: 39,
        columnNumber: 3
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 27,
    columnNumber: 2
  },
  this
));
DropdownMenuSubTrigger2.displayName = "DropdownMenuSubTrigger";
var DropdownMenuSubContent2 = (0, import_react.forwardRef)(({ className, loop = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPortal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  SubContent2,
  {
    className: cx(
      "scrollbar",
      "text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded border border-popover bg-popover p-1.25 shadow-xl data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "my-2 max-h-[calc(var(--radix-dropdown-menu-content-available-height)_-_16px)] overflow-auto",
      className
    ),
    loop,
    ref,
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
) }, void 0, false, {
  fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
  lineNumber: 50,
  columnNumber: 2
}, this));
DropdownMenuSubContent2.displayName = "DropdownMenuSubContent";
var DropdownMenuContent2 = (0, import_react.forwardRef)(
  ({ className, loop = true, width, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPortal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Content22,
    {
      ref,
      className: cx(
        "scrollbar",
        "text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded border border-popover bg-popover p-1.25 shadow-xl outline-none",
        "data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
        "my-2 max-h-[calc(var(--radix-dropdown-menu-content-available-height)_-_16px)] overflow-auto",
        width === "trigger" && "w-[var(--radix-dropdown-menu-trigger-width)]",
        className
      ),
      loop,
      ...props
    },
    void 0,
    false,
    {
      fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
      lineNumber: 76,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 75,
    columnNumber: 3
  }, this)
);
DropdownMenuContent2.displayName = "DropdownMenuContent";
var DropdownMenuItem2 = (0, import_react.forwardRef)(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Item22,
  {
    ref,
    className: cx(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer select-none items-center rounded px-2 py-1.5 text-base font-normal outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-popover-hover data-active-item:dark:bg-popover-hover sm:text-sm",
      "[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 100,
    columnNumber: 2
  },
  this
));
DropdownMenuItem2.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem2 = (0, import_react.forwardRef)(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  CheckboxItem2,
  {
    ref,
    className: cx(
      "relative flex cursor-pointer select-none items-center gap-2 rounded py-1.5 pl-2 pr-9 text-base font-normal text-strong outline-none data-disabled:pointer-events-none data-disabled:opacity-50 sm:text-sm",
      "data-highlighted:bg-popover-hover data-highlighted:dark:bg-popover-hover",
      "aria-checked:!bg-filled-accent aria-checked:font-medium aria-checked:text-on-filled",
      "[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute right-2 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(w, { className: "size-5 shrink-0 sm:size-4", weight: "bold" }, void 0, false, {
        fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
        lineNumber: 130,
        columnNumber: 4
      }, this) }, void 0, false, {
        fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 3
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 117,
    columnNumber: 2
  },
  this
));
DropdownMenuCheckboxItem2.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioItem2 = (0, import_react.forwardRef)(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    RadioItem2,
    {
      className: cx(
        "relative flex cursor-pointer select-none items-center gap-2 rounded py-1.5 pl-2 pr-9 text-base font-normal text-strong outline-none data-disabled:pointer-events-none data-disabled:opacity-50 sm:text-sm",
        "data-highlighted:bg-popover-hover data-highlighted:dark:bg-popover-hover",
        "aria-checked:!bg-filled-accent aria-checked:font-medium aria-checked:text-on-filled",
        "[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
        className
      ),
      ref,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute right-2 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(w, { className: "size-5 shrink-0 sm:size-4", weight: "bold" }, void 0, false, {
          fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
          lineNumber: 159,
          columnNumber: 6
        }, this) }, void 0, false, {
          fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
          lineNumber: 158,
          columnNumber: 5
        }, this) }, void 0, false, {
          fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
          lineNumber: 157,
          columnNumber: 4
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
      lineNumber: 146,
      columnNumber: 3
    },
    this
  )
);
DropdownMenuRadioItem2.displayName = "DropdownMenuRadioItem";
var DropdownMenuLabel2 = (0, import_react.forwardRef)(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Label2,
  {
    ref,
    className: cx("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 174,
    columnNumber: 2
  },
  this
));
DropdownMenuLabel2.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator2 = (0, import_react.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { ref, className: cx("-mx-1.25 my-1 w-auto", className), ...props }, void 0, false, {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 184,
    columnNumber: 3
  }, this)
);
DropdownMenuSeparator2.displayName = "DropdownMenuSeparator";
var DropdownMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cx("ml-auto text-xs tracking-widest opacity-60", className), ...props }, void 0, false, {
    fileName: "packages/dropdown-menu/src/dropdown-menu.tsx",
    lineNumber: 190,
    columnNumber: 9
  }, this);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Desktop.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/Desktop.mjs
var import_react2 = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,36H48A28,28,0,0,0,20,64V172a28,28,0,0,0,28,28h68v12H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V200h68a28,28,0,0,0,28-28V64A28,28,0,0,0,208,36ZM48,60H208a4,4,0,0,1,4,4v72H44V64A4,4,0,0,1,48,60ZM208,176H48a4,4,0,0,1-4-4V160H212v12A4,4,0,0,1,208,176Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        d: "M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,42H48A22,22,0,0,0,26,64V176a22,22,0,0,0,22,22h74v20H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V198h74a22,22,0,0,0,22-22V64A22,22,0,0,0,208,42ZM48,54H208a10,10,0,0,1,10,10v82H38V64A10,10,0,0,1,48,54ZM208,186H48a10,10,0,0,1-10-10V158H218v18A10,10,0,0,1,208,186Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M208,44H48A20,20,0,0,0,28,64V176a20,20,0,0,0,20,20h76v24H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V196h76a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44ZM48,52H208a12,12,0,0,1,12,12v84H36V64A12,12,0,0,1,48,52ZM208,188H48a12,12,0,0,1-12-12V156H220v20A12,12,0,0,1,208,188Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Desktop.mjs
var s = Object.defineProperty;
var f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
var m = (o, e2, t6) => e2 in o ? s(o, e2, { enumerable: true, configurable: true, writable: true, value: t6 }) : o[e2] = t6;
var a2 = (o, e2) => {
  for (var t6 in e2 || (e2 = {}))
    c.call(e2, t6) && m(o, t6, e2[t6]);
  if (r)
    for (var t6 of r(e2))
      n.call(e2, t6) && m(o, t6, e2[t6]);
  return o;
};
var p = (o, e2) => f(o, i(e2));
var D = (0, import_react3.forwardRef)((o, e2) => /* @__PURE__ */ import_react3.default.createElement(b, p(a2({ ref: e2 }, o), { weights: t })));
D.displayName = "Desktop";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Gear.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/Gear.mjs
var import_react4 = __toESM(require_react(), 1);
var L = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(
      "path",
      {
        d: "M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm.17,42.83-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,212.1,174.34Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Gear.mjs
var i2 = Object.defineProperty;
var p2 = Object.defineProperties;
var s2 = Object.getOwnPropertyDescriptors;
var a4 = Object.getOwnPropertySymbols;
var c2 = Object.prototype.hasOwnProperty;
var n2 = Object.prototype.propertyIsEnumerable;
var t2 = (r3, e2, o) => e2 in r3 ? i2(r3, e2, { enumerable: true, configurable: true, writable: true, value: o }) : r3[e2] = o;
var m2 = (r3, e2) => {
  for (var o in e2 || (e2 = {}))
    c2.call(e2, o) && t2(r3, o, e2[o]);
  if (a4)
    for (var o of a4(e2))
      n2.call(e2, o) && t2(r3, o, e2[o]);
  return r3;
};
var f2 = (r3, e2) => p2(r3, s2(e2));
var I2 = (0, import_react5.forwardRef)((r3, e2) => /* @__PURE__ */ import_react5.default.createElement(b, f2(m2({ ref: e2 }, r3), { weights: L })));
I2.displayName = "Gear";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Moon.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/Moon.mjs
var import_react6 = __toESM(require_react(), 1);
var t3 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(
      "path",
      {
        d: "M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react6.default.createElement("path", { d: "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Moon.mjs
var i3 = Object.defineProperty;
var n3 = Object.defineProperties;
var p3 = Object.getOwnPropertyDescriptors;
var t4 = Object.getOwnPropertySymbols;
var s3 = Object.prototype.hasOwnProperty;
var c3 = Object.prototype.propertyIsEnumerable;
var m3 = (e2, o, r3) => o in e2 ? i3(e2, o, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[o] = r3;
var a5 = (e2, o) => {
  for (var r3 in o || (o = {}))
    s3.call(o, r3) && m3(e2, r3, o[r3]);
  if (t4)
    for (var r3 of t4(o))
      c3.call(o, r3) && m3(e2, r3, o[r3]);
  return e2;
};
var f3 = (e2, o) => n3(e2, p3(o));
var M = (0, import_react7.forwardRef)((e2, o) => /* @__PURE__ */ import_react7.default.createElement(b, f3(a5({ ref: o }, e2), { weights: t3 })));
M.displayName = "Moon";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/SignOut.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/SignOut.mjs
var import_react8 = __toESM(require_react(), 1);
var t5 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("path", { d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(
      "path",
      {
        d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react8.default.createElement("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("path", { d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("path", { d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/SignOut.mjs
var f4 = Object.defineProperty;
var n4 = Object.defineProperties;
var p4 = Object.getOwnPropertyDescriptors;
var r2 = Object.getOwnPropertySymbols;
var s4 = Object.prototype.hasOwnProperty;
var c4 = Object.prototype.propertyIsEnumerable;
var m4 = (e2, t6, o) => t6 in e2 ? f4(e2, t6, { enumerable: true, configurable: true, writable: true, value: o }) : e2[t6] = o;
var a7 = (e2, t6) => {
  for (var o in t6 || (t6 = {}))
    s4.call(t6, o) && m4(e2, o, t6[o]);
  if (r2)
    for (var o of r2(t6))
      c4.call(t6, o) && m4(e2, o, t6[o]);
  return e2;
};
var i4 = (e2, t6) => n4(e2, p4(t6));
var w2 = (0, import_react9.forwardRef)((e2, t6) => /* @__PURE__ */ import_react9.default.createElement(b, i4(a7({ ref: t6 }, e2), { weights: t5 })));
w2.displayName = "SignOut";

// app/routes/components.dropdown-menu.tsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.dropdown-menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.dropdown-menu.tsx"
  );
  import.meta.hot.lastModified = "1724091104714.3606";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 DropdownMenu"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  _s();
  const [selectedTheme, setSelectedTheme] = (0, import_react10.useState)("system");
  const [enableNotifications, setEnableNotifications] = (0, import_react10.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Dropdown Menu" }, void 0, false, {
        fileName: "app/routes/components.dropdown-menu.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Displays a menu to the user \u2014 such as a set of actions or functions \u2014 triggered by a button." }, void 0, false, {
        fileName: "app/routes/components.dropdown-menu.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Open Menu" }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 62,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 61,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent2, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuLabel2, { children: "micah@ngrok.com" }, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 67,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 68,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioGroup2, { value: selectedTheme, onValueChange: (value) => {
                setSelectedTheme(value);
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "system", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(D, {}, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                  }, this),
                  "System Preference"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 72,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "light", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, {}, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                  }, this),
                  "Light Mode"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 76,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "dark", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(M, {}, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                  }, this),
                  "Dark Mode"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 80,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "light-high-contrast", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                  }, this),
                  "Light High Contrast"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 84,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "dark-high-contrast", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(M, { weight: "fill" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                  }, this),
                  "Dark High Contrast"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 88,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 69,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 93,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I2, {}, void 0, false, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 95,
                  columnNumber: 10
                }, this),
                "User Settings"
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 94,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 98,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuCheckboxItem2, { checked: enableNotifications, onCheckedChange: (value) => {
                setEnableNotifications(value);
              }, children: "Enable Notifications" }, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 99,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuGroup2, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Team" }, void 0, false, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 105,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSub2, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSubTrigger2, { children: "Invite users" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSubContent2, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 109,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Message" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 110,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 111,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 112,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 113,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 114,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 115,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 116,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 117,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 118,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 119,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 120,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 121,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "More..." }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 122,
                      columnNumber: 12
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 106,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: [
                  "New Team",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuShortcut, { children: "\u2318+T" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 125,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 104,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 130,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(w2, {}, void 0, false, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 132,
                  columnNumber: 10
                }, this),
                "Log out"
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 131,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 66,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 60,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", appearance: "filled", children: "Content Width Matches Trigger Width (Extra Wide)" }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 140,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 139,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent2, { width: "trigger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuLabel2, { children: "micah@ngrok.com" }, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 145,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 146,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioGroup2, { value: selectedTheme, onValueChange: (value) => {
                setSelectedTheme(value);
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "system", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(D, {}, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                  }, this),
                  "System Preference"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 150,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "light", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, {}, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                  }, this),
                  "Light Mode"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 154,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "dark", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(M, {}, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                  }, this),
                  "Dark Mode"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 158,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "light-high-contrast", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I, { weight: "fill" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                  }, this),
                  "Light High Contrast"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 162,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem2, { value: "dark-high-contrast", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(M, { weight: "fill" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                  }, this),
                  "Dark High Contrast"
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 166,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 147,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 171,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(I2, {}, void 0, false, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 173,
                  columnNumber: 10
                }, this),
                "User Settings"
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 172,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 176,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuCheckboxItem2, { checked: enableNotifications, onCheckedChange: (value) => {
                setEnableNotifications(value);
              }, children: "Enable Notifications" }, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 177,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuGroup2, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Team" }, void 0, false, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 183,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSub2, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSubTrigger2, { children: "Invite users" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSubContent2, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 187,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Message" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 188,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 189,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 190,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 191,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 192,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 193,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 194,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 195,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 196,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 197,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "Email" }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 198,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 199,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: "More..." }, void 0, false, {
                      fileName: "app/routes/components.dropdown-menu.tsx",
                      lineNumber: 200,
                      columnNumber: 12
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 184,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { children: [
                  "New Team",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuShortcut, { children: "\u2318+T" }, void 0, false, {
                    fileName: "app/routes/components.dropdown-menu.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 203,
                  columnNumber: 10
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 182,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 208,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(w2, {}, void 0, false, {
                  fileName: "app/routes/components.dropdown-menu.tsx",
                  lineNumber: 210,
                  columnNumber: 10
                }, this),
                "Log out"
              ] }, void 0, true, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 209,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 144,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 138,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 59,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 218,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
						import { Button } from "@ngrok/mantle/button";
						import {
							DropdownMenu,
							DropdownMenuContent,
							DropdownMenuItem,
							DropdownMenuLabel,
							DropdownMenuRadioItem,
							DropdownMenuSeparator,
							DropdownMenuTrigger,
						} from "@ngrok/mantle/dropdown-menu";

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button appearance="filled" type="button">Open Menu</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>micah@ngrok.com</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuRadioItem name="theme" value="system">
									<Desktop />
									System Preference
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light">
									<Sun />
									Light Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark">
									<Moon />
									Dark Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light-high-contrast">
									<Sun weight="fill" />
									Light High Contrast
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark-high-contrast">
									<Moon weight="fill" />
									Dark High Contrast
								</DropdownMenuRadioItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Gear />
									User Settings
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<SignOut />
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					` }, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 219,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 217,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 216,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.dropdown-menu.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 278,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
          "The ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "DropdownMenu" }, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 282,
            columnNumber: 11
          }, this),
          " components are built on top of",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor2, { href: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu", target: "_blank", rel: "noopener noreferrer", children: "Radix Dropdown Menu" }, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 283,
            columnNumber: 7
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 281,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.dropdown-menu.tsx",
        lineNumber: 277,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-medium", children: "DropdownMenuContent" }, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 292,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-body", children: [
            "All props from Radix",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor2, { href: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content", target: "_blank", rel: "noopener noreferrer", children: "DropdownMenu.Content" }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 296,
              columnNumber: 8
            }, this),
            ", plus:"
          ] }, void 0, true, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 294,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 291,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropsTable, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "width", optional: true }, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 305,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "trigger" }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 309,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 308,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "content" }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 312,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 311,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 307,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 306,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, {}, void 0, false, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 316,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "trigger" }, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 319,
                columnNumber: 10
              }, this),
              " will ensure the dropdown content is the same width as the trigger button."
            ] }, void 0, true, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 318,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "content" }, void 0, false, {
                fileName: "app/routes/components.dropdown-menu.tsx",
                lineNumber: 323,
                columnNumber: 10
              }, this),
              " will make the dropdown content use the intrinsic content width."
            ] }, void 0, true, {
              fileName: "app/routes/components.dropdown-menu.tsx",
              lineNumber: 322,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.dropdown-menu.tsx",
            lineNumber: 317,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 304,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.dropdown-menu.tsx",
          lineNumber: 303,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.dropdown-menu.tsx",
        lineNumber: 290,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.dropdown-menu.tsx",
      lineNumber: 276,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.dropdown-menu.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Page, "AqS5BTZkaWQVeX351nsla5HzERs=");
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.dropdown-menu-S7RSYING.js.map
