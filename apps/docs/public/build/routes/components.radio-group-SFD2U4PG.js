import "/build/_shared/chunk-O6A7XH6E.js";
import "/build/_shared/chunk-VMZZWZYH.js";
import "/build/_shared/chunk-NG7IOVW6.js";
import {
  require_react_dom
} from "/build/_shared/chunk-JDR2CS4I.js";
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
  Slot
} from "/build/_shared/chunk-3LE3N7DD.js";
import "/build/_shared/chunk-ET7BOX4G.js";
import "/build/_shared/chunk-L6J2GUHO.js";
import {
  clsx_default,
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

// node_modules/.pnpm/@react-aria+utils@3.25.2_react@18.3.1/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};

// node_modules/.pnpm/@react-aria+utils@3.25.2_react@18.3.1/node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react2 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f7 = ref.current;
    return f7 === null || f7 === void 0 ? void 0 : f7(...args);
  }, []);
}

// node_modules/.pnpm/@react-aria+utils@3.25.2_react@18.3.1/node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el)
    return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};

// node_modules/.pnpm/@react-aria+utils@3.25.2_react@18.3.1/node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  let res = null;
  return () => {
    if (res == null)
      res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

// node_modules/.pnpm/@react-aria+utils@3.25.2_react@18.3.1/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType)
    return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}

// node_modules/.pnpm/@react-aria+interactions@3.22.2_react@18.3.1/node_modules/@react-aria/interactions/dist/utils.mjs
var import_react3 = __toESM(require_react(), 1);
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react3.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e4) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e4);
  });
  return (0, import_react3.useCallback)((e4) => {
    if (e4.target instanceof HTMLButtonElement || e4.target instanceof HTMLInputElement || e4.target instanceof HTMLTextAreaElement || e4.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e4.target;
      let onBlurHandler = (e5) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e5));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}

// node_modules/.pnpm/@react-aria+interactions@3.22.2_react@18.3.1/node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react4 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react4.useCallback)((e4) => {
    if (e4.target === e4.currentTarget) {
      if (onBlurProp)
        onBlurProp(e4);
      if (onFocusChange)
        onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react4.useCallback)((e4) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e4.target);
    if (e4.target === e4.currentTarget && ownerDocument.activeElement === e4.target) {
      if (onFocusProp)
        onFocusProp(e4);
      if (onFocusChange)
        onFocusChange(true);
      onSyntheticFocus(e4);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/.pnpm/@react-aria+interactions@3.22.2_react@18.3.1/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react5 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e4) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e4);
}
function $507fabe10e71c6fb$var$isValidKey(e4) {
  return !(e4.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e4.altKey || e4.ctrlKey || e4.key === "Control" || e4.key === "Shift" || e4.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e4) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e4)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e4);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e4) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e4.type === "mousedown" || e4.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e4);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e4) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e4)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e4) {
  if (e4.target === window || e4.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e4);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element)))
    return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener)
    documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject))
    return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined")
  $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e4) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e4 === null || e4 === void 0 ? void 0 : e4.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e4 === null || e4 === void 0 ? void 0 : e4.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e4 === null || e4 === void 0 ? void 0 : e4.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e4 === null || e4 === void 0 ? void 0 : e4.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e4 === null || e4 === void 0 ? void 0 : e4.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e4 === null || e4 === void 0 ? void 0 : (_e_target = e4.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e4 === null || e4 === void 0 ? void 0 : e4.target) instanceof IHTMLTextAreaElement || (e4 === null || e4 === void 0 ? void 0 : e4.target) instanceof IHTMLElement && (e4 === null || e4 === void 0 ? void 0 : e4.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e4 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e4.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react5.useEffect)(() => {
    let handler = (modality, e4) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e4))
        return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/.pnpm/@react-aria+interactions@3.22.2_react@18.3.1/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react6 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react6.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react6.useCallback)((e4) => {
    if (state.current.isFocusWithin && !e4.currentTarget.contains(e4.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin)
        onBlurWithin(e4);
      if (onFocusWithinChange)
        onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react6.useCallback)((e4) => {
    if (!state.current.isFocusWithin && document.activeElement === e4.target) {
      if (onFocusWithin)
        onFocusWithin(e4);
      if (onFocusWithinChange)
        onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e4);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled)
    return {
      focusWithinProps: {
        // These should not have been null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/.pnpm/@react-aria+interactions@3.22.2_react@18.3.1/node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react7 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e4) {
  if (e4.pointerType === "touch")
    $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else
    document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else
      document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react7.useState)(false);
  let state = (0, import_react7.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react7.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = (0, import_react7.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart)
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered)
        return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd)
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e4) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e4.pointerType === "mouse")
          return;
        triggerHoverStart(e4, e4.pointerType);
      };
      hoverProps2.onPointerLeave = (e4) => {
        if (!isDisabled && e4.currentTarget.contains(e4.target))
          triggerHoverEnd2(e4, e4.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e4) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e4, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e4) => {
        if (!isDisabled && e4.currentTarget.contains(e4.target))
          triggerHoverEnd2(e4, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state
  ]);
  (0, import_react7.useEffect)(() => {
    if (isDisabled)
      triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/.pnpm/@react-aria+focus@3.18.2_react@18.3.1/node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react8 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react8.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react8.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react8.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react8.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react8.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t4, e4, n5) => e4 in t4 ? i(t4, e4, { enumerable: true, configurable: true, writable: true, value: n5 }) : t4[e4] = n5;
var r = (t4, e4, n5) => (d(t4, typeof e4 != "symbol" ? e4 + "" : e4, n5), n5);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.handoffState = "pending", this.currentId = 0, this.current = e4);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/owner.js
function u(r5) {
  return s.isServer ? null : r5 instanceof Node ? r5.ownerDocument : r5 != null && r5.hasOwnProperty("current") && r5.current instanceof Node ? r5.current.ownerDocument : document;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o9) => setTimeout(() => {
    throw o9;
  }));
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n5 = [], r5 = { addEventListener(e4, t4, s5, a5) {
    return e4.addEventListener(t4, s5, a5), r5.add(() => e4.removeEventListener(t4, s5, a5));
  }, requestAnimationFrame(...e4) {
    let t4 = requestAnimationFrame(...e4);
    return r5.add(() => cancelAnimationFrame(t4));
  }, nextFrame(...e4) {
    return r5.requestAnimationFrame(() => r5.requestAnimationFrame(...e4));
  }, setTimeout(...e4) {
    let t4 = setTimeout(...e4);
    return r5.add(() => clearTimeout(t4));
  }, microTask(...e4) {
    let t4 = { current: true };
    return t(() => {
      t4.current && e4[0]();
    }), r5.add(() => {
      t4.current = false;
    });
  }, style(e4, t4, s5) {
    let a5 = e4.style.getPropertyValue(t4);
    return Object.assign(e4.style, { [t4]: s5 }), this.add(() => {
      Object.assign(e4.style, { [t4]: a5 });
    });
  }, group(e4) {
    let t4 = o2();
    return e4(t4), this.add(() => t4.dispose());
  }, add(e4) {
    return n5.includes(e4) || n5.push(e4), () => {
      let t4 = n5.indexOf(e4);
      if (t4 >= 0)
        for (let s5 of n5.splice(t4, 1))
          s5();
    };
  }, dispose() {
    for (let e4 of n5.splice(0))
      e4();
  } };
  return r5;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e4] = (0, import_react9.useState)(o2);
  return (0, import_react9.useEffect)(() => () => e4.dispose(), [e4]), e4;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react10 = __toESM(require_react(), 1);
var n = (e4, t4) => {
  s.isServer ? (0, import_react10.useEffect)(e4, t4) : (0, import_react10.useLayoutEffect)(e4, t4);
};

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e4) {
  let r5 = (0, import_react11.useRef)(e4);
  return n(() => {
    r5.current = e4;
  }, [e4]), r5;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t4) {
  let e4 = s3(t4);
  return import_react12.default.useCallback((...r5) => e4.current(...r5), [e4]);
};

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/internal/disabled.js
var import_react13 = __toESM(require_react(), 1);
var e = (0, import_react13.createContext)(void 0);
function a2() {
  return (0, import_react13.useContext)(e);
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/render.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r5) {
  return Array.from(new Set(r5.flatMap((n5) => typeof n5 == "string" ? n5.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/match.js
function u2(r5, n5, ...a5) {
  if (r5 in n5) {
    let e4 = n5[r5];
    return typeof e4 == "function" ? e4(...a5) : e4;
  }
  let t4 = new Error(`Tried to handle "${r5}" but there is no handler defined. Only defined handlers are: ${Object.keys(n5).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t4, u2), t4;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/render.js
var M = ((a5) => (a5[a5.None = 0] = "None", a5[a5.RenderStrategy = 1] = "RenderStrategy", a5[a5.Static = 2] = "Static", a5))(M || {});
var O = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(O || {});
function H({ ourProps: r5, theirProps: n5, slot: e4, defaultTag: a5, features: s5, visible: t4 = true, name: l5, mergeRefs: i6 }) {
  i6 = i6 != null ? i6 : A;
  let o9 = N(n5, r5);
  if (t4)
    return b(o9, e4, a5, l5, i6);
  let y3 = s5 != null ? s5 : 0;
  if (y3 & 2) {
    let { static: f7 = false, ...u9 } = o9;
    if (f7)
      return b(u9, e4, a5, l5, i6);
  }
  if (y3 & 1) {
    let { unmount: f7 = true, ...u9 } = o9;
    return u2(f7 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return b({ ...u9, hidden: true, style: { display: "none" } }, e4, a5, l5, i6);
    } });
  }
  return b(o9, e4, a5, l5, i6);
}
function b(r5, n5 = {}, e4, a5, s5) {
  let { as: t4 = e4, children: l5, refName: i6 = "ref", ...o9 } = h(r5, ["unmount", "static"]), y3 = r5.ref !== void 0 ? { [i6]: r5.ref } : {}, f7 = typeof l5 == "function" ? l5(n5) : l5;
  "className" in o9 && o9.className && typeof o9.className == "function" && (o9.className = o9.className(n5)), o9["aria-labelledby"] && o9["aria-labelledby"] === o9.id && (o9["aria-labelledby"] = void 0);
  let u9 = {};
  if (n5) {
    let d3 = false, p4 = [];
    for (let [c5, T6] of Object.entries(n5))
      typeof T6 == "boolean" && (d3 = true), T6 === true && p4.push(c5.replace(/([A-Z])/g, (g2) => `-${g2.toLowerCase()}`));
    if (d3) {
      u9["data-headlessui-state"] = p4.join(" ");
      for (let c5 of p4)
        u9[`data-${c5}`] = "";
    }
  }
  if (t4 === import_react14.Fragment && (Object.keys(m(o9)).length > 0 || Object.keys(m(u9)).length > 0))
    if (!(0, import_react14.isValidElement)(f7) || Array.isArray(f7) && f7.length > 1) {
      if (Object.keys(m(o9)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${a5} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m(o9)).concat(Object.keys(m(u9))).map((d3) => `  - ${d3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d3) => `  - ${d3}`).join(`
`)].join(`
`));
    } else {
      let d3 = f7.props, p4 = d3 == null ? void 0 : d3.className, c5 = typeof p4 == "function" ? (...F2) => t3(p4(...F2), o9.className) : t3(p4, o9.className), T6 = c5 ? { className: c5 } : {}, g2 = N(f7.props, m(h(o9, ["ref"])));
      for (let F2 in u9)
        F2 in g2 && delete u9[F2];
      return (0, import_react14.cloneElement)(f7, Object.assign({}, g2, u9, y3, { ref: s5(f7.ref, y3.ref) }, T6));
    }
  return (0, import_react14.createElement)(t4, Object.assign({}, h(o9, ["ref"]), t4 !== import_react14.Fragment && y3, t4 !== import_react14.Fragment && u9), f7);
}
function A(...r5) {
  return r5.every((n5) => n5 == null) ? void 0 : (n5) => {
    for (let e4 of r5)
      e4 != null && (typeof e4 == "function" ? e4(n5) : e4.current = n5);
  };
}
function N(...r5) {
  var a5;
  if (r5.length === 0)
    return {};
  if (r5.length === 1)
    return r5[0];
  let n5 = {}, e4 = {};
  for (let s5 of r5)
    for (let t4 in s5)
      t4.startsWith("on") && typeof s5[t4] == "function" ? ((a5 = e4[t4]) != null || (e4[t4] = []), e4[t4].push(s5[t4])) : n5[t4] = s5[t4];
  if (n5.disabled || n5["aria-disabled"])
    for (let s5 in e4)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s5) && (e4[s5] = [(t4) => {
        var l5;
        return (l5 = t4 == null ? void 0 : t4.preventDefault) == null ? void 0 : l5.call(t4);
      }]);
  for (let s5 in e4)
    Object.assign(n5, { [s5](t4, ...l5) {
      let i6 = e4[s5];
      for (let o9 of i6) {
        if ((t4 instanceof Event || (t4 == null ? void 0 : t4.nativeEvent) instanceof Event) && t4.defaultPrevented)
          return;
        o9(t4, ...l5);
      }
    } });
  return n5;
}
function D(...r5) {
  var a5;
  if (r5.length === 0)
    return {};
  if (r5.length === 1)
    return r5[0];
  let n5 = {}, e4 = {};
  for (let s5 of r5)
    for (let t4 in s5)
      t4.startsWith("on") && typeof s5[t4] == "function" ? ((a5 = e4[t4]) != null || (e4[t4] = []), e4[t4].push(s5[t4])) : n5[t4] = s5[t4];
  for (let s5 in e4)
    Object.assign(n5, { [s5](...t4) {
      let l5 = e4[s5];
      for (let i6 of l5)
        i6 == null || i6(...t4);
    } });
  return n5;
}
function W(r5) {
  var n5;
  return Object.assign((0, import_react14.forwardRef)(r5), { displayName: (n5 = r5.displayName) != null ? n5 : r5.name });
}
function m(r5) {
  let n5 = Object.assign({}, r5);
  for (let e4 in n5)
    n5[e4] === void 0 && delete n5[e4];
  return n5;
}
function h(r5, n5 = []) {
  let e4 = Object.assign({}, r5);
  for (let a5 of n5)
    a5 in e4 && delete e4[a5];
  return e4;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react15 = __toESM(require_react(), 1);
function T(l5, r5, c5) {
  let [i6, s5] = (0, import_react15.useState)(c5), e4 = l5 !== void 0, t4 = (0, import_react15.useRef)(e4), u9 = (0, import_react15.useRef)(false), d3 = (0, import_react15.useRef)(false);
  return e4 && !t4.current && !u9.current ? (u9.current = true, t4.current = e4, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e4 && t4.current && !d3.current && (d3.current = true, t4.current = e4, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e4 ? l5 : i6, o4((n5) => (e4 || s5(n5), r5 == null ? void 0 : r5(n5)))];
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-default-value.js
var import_react16 = __toESM(require_react(), 1);
function l(e4) {
  let [t4] = (0, import_react16.useState)(e4);
  return t4;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react17 = __toESM(require_react(), 1);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/internal/form-fields.js
var import_react18 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/form.js
function e2(i6 = {}, s5 = null, t4 = []) {
  for (let [r5, n5] of Object.entries(i6))
    o6(t4, f3(s5, r5), n5);
  return t4;
}
function f3(i6, s5) {
  return i6 ? i6 + "[" + s5 + "]" : s5;
}
function o6(i6, s5, t4) {
  if (Array.isArray(t4))
    for (let [r5, n5] of t4.entries())
      o6(i6, f3(s5, r5.toString()), n5);
  else
    t4 instanceof Date ? i6.push([s5, t4.toISOString()]) : typeof t4 == "boolean" ? i6.push([s5, t4 ? "1" : "0"]) : typeof t4 == "string" ? i6.push([s5, t4]) : typeof t4 == "number" ? i6.push([s5, `${t4}`]) : t4 == null ? i6.push([s5, ""]) : e2(t4, s5, i6);
}
function p2(i6) {
  var t4, r5;
  let s5 = (t4 = i6 == null ? void 0 : i6.form) != null ? t4 : i6.closest("form");
  if (s5) {
    for (let n5 of s5.elements)
      if (n5 !== i6 && (n5.tagName === "INPUT" && n5.type === "submit" || n5.tagName === "BUTTON" && n5.type === "submit" || n5.nodeName === "INPUT" && n5.type === "image")) {
        n5.click();
        return;
      }
    (r5 = s5.requestSubmit) == null || r5.call(s5);
  }
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "span";
var s4 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(s4 || {});
function l2(t4, r5) {
  var n5;
  let { features: d3 = 1, ...e4 } = t4, o9 = { ref: r5, "aria-hidden": (d3 & 2) === 2 ? true : (n5 = e4["aria-hidden"]) != null ? n5 : void 0, hidden: (d3 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d3 & 4) === 4 && (d3 & 2) !== 2 && { display: "none" } } };
  return H({ ourProps: o9, theirProps: e4, slot: {}, defaultTag: a3, name: "Hidden" });
}
var T2 = W(l2);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/internal/form-fields.js
var f4 = (0, import_react18.createContext)(null);
function c2({ children: t4 }) {
  let e4 = (0, import_react18.useContext)(f4);
  if (!e4)
    return import_react18.default.createElement(import_react18.default.Fragment, null, t4);
  let { target: r5 } = e4;
  return r5 ? (0, import_react_dom.createPortal)(import_react18.default.createElement(import_react18.default.Fragment, null, t4), r5) : null;
}
function j2({ data: t4, form: e4, disabled: r5, onReset: n5, overrides: F2 }) {
  let [i6, a5] = (0, import_react18.useState)(null), p4 = p();
  return (0, import_react18.useEffect)(() => {
    if (n5 && i6)
      return p4.addEventListener(i6, "reset", n5);
  }, [i6, e4, n5]), import_react18.default.createElement(c2, null, import_react18.default.createElement(C, { setForm: a5, formId: e4 }), e2(t4).map(([s5, v2]) => import_react18.default.createElement(T2, { features: s4.Hidden, ...m({ key: s5, as: "input", type: "hidden", hidden: true, readOnly: true, form: e4, disabled: r5, name: s5, value: v2, ...F2 }) })));
}
function C({ setForm: t4, formId: e4 }) {
  return (0, import_react18.useEffect)(() => {
    if (e4) {
      let r5 = document.getElementById(e4);
      r5 && t4(r5);
    }
  }, [t4, e4]), e4 ? null : import_react18.default.createElement(T2, { features: s4.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r5) => {
    if (!r5)
      return;
    let n5 = r5.closest("form");
    n5 && t4(n5);
  } });
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/internal/id.js
var import_react19 = __toESM(require_react(), 1);
var e3 = (0, import_react19.createContext)(void 0);
function u5() {
  return (0, import_react19.useContext)(e3);
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/bugs.js
function r4(n5) {
  let e4 = n5.parentElement, l5 = null;
  for (; e4 && !(e4 instanceof HTMLFieldSetElement); )
    e4 instanceof HTMLLegendElement && (l5 = e4), e4 = e4.parentElement;
  let t4 = (e4 == null ? void 0 : e4.getAttribute("disabled")) === "";
  return t4 && i4(l5) ? false : t4;
}
function i4(n5) {
  if (!n5)
    return false;
  let e4 = n5.previousElementSibling;
  for (; e4 !== null; ) {
    if (e4 instanceof HTMLLegendElement)
      return false;
    e4 = e4.previousElementSibling;
  }
  return true;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/components/description/description.js
var import_react21 = __toESM(require_react(), 1);

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react20 = __toESM(require_react(), 1);
var u6 = Symbol();
function y(...t4) {
  let n5 = (0, import_react20.useRef)(t4);
  (0, import_react20.useEffect)(() => {
    n5.current = t4;
  }, [t4]);
  let c5 = o4((e4) => {
    for (let o9 of n5.current)
      o9 != null && (typeof o9 == "function" ? o9(e4) : o9.current = e4);
  });
  return t4.every((e4) => e4 == null || (e4 == null ? void 0 : e4[u6])) ? void 0 : c5;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/components/description/description.js
"use client";
var a4 = (0, import_react21.createContext)(null);
a4.displayName = "DescriptionContext";
function f5() {
  let r5 = (0, import_react21.useContext)(a4);
  if (r5 === null) {
    let e4 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e4, f5), e4;
  }
  return r5;
}
function G() {
  var r5, e4;
  return (e4 = (r5 = (0, import_react21.useContext)(a4)) == null ? void 0 : r5.value) != null ? e4 : void 0;
}
function U() {
  let [r5, e4] = (0, import_react21.useState)([]);
  return [r5.length > 0 ? r5.join(" ") : void 0, (0, import_react21.useMemo)(() => function(t4) {
    let i6 = o4((n5) => (e4((s5) => [...s5, n5]), () => e4((s5) => {
      let o9 = s5.slice(), p4 = o9.indexOf(n5);
      return p4 !== -1 && o9.splice(p4, 1), o9;
    }))), l5 = (0, import_react21.useMemo)(() => ({ register: i6, slot: t4.slot, name: t4.name, props: t4.props, value: t4.value }), [i6, t4.slot, t4.name, t4.props, t4.value]);
    return import_react21.default.createElement(a4.Provider, { value: l5 }, t4.children);
  }, [e4])];
}
var S2 = "p";
function C2(r5, e4) {
  let d3 = (0, import_react17.useId)(), t4 = a2(), { id: i6 = `headlessui-description-${d3}`, ...l5 } = r5, n5 = f5(), s5 = y(e4);
  n(() => n5.register(i6), [i6, n5.register]);
  let o9 = t4 || false, p4 = (0, import_react21.useMemo)(() => ({ ...n5.slot, disabled: o9 }), [n5.slot, o9]), D3 = { ref: s5, ...n5.props, id: i6 };
  return H({ ourProps: D3, theirProps: l5, slot: p4, defaultTag: S2, name: n5.name || "Description" });
}
var _ = W(C2);
var w2 = Object.assign(_, {});

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r5) => (r5.Space = " ", r5.Enter = "Enter", r5.Escape = "Escape", r5.Backspace = "Backspace", r5.Delete = "Delete", r5.ArrowLeft = "ArrowLeft", r5.ArrowUp = "ArrowUp", r5.ArrowRight = "ArrowRight", r5.ArrowDown = "ArrowDown", r5.Home = "Home", r5.End = "End", r5.PageUp = "PageUp", r5.PageDown = "PageDown", r5.Tab = "Tab", r5))(o8 || {});

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/components/label/label.js
var import_react22 = __toESM(require_react(), 1);
"use client";
var c4 = (0, import_react22.createContext)(null);
c4.displayName = "LabelContext";
function P3() {
  let r5 = (0, import_react22.useContext)(c4);
  if (r5 === null) {
    let l5 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l5, P3), l5;
  }
  return r5;
}
function I(r5) {
  var a5, e4, o9;
  let l5 = (e4 = (a5 = (0, import_react22.useContext)(c4)) == null ? void 0 : a5.value) != null ? e4 : void 0;
  return ((o9 = r5 == null ? void 0 : r5.length) != null ? o9 : 0) > 0 ? [l5, ...r5].filter(Boolean).join(" ") : l5;
}
function z({ inherit: r5 = false } = {}) {
  let l5 = I(), [a5, e4] = (0, import_react22.useState)([]), o9 = r5 ? [l5, ...a5].filter(Boolean) : a5;
  return [o9.length > 0 ? o9.join(" ") : void 0, (0, import_react22.useMemo)(() => function(t4) {
    let s5 = o4((i6) => (e4((p4) => [...p4, i6]), () => e4((p4) => {
      let u9 = p4.slice(), d3 = u9.indexOf(i6);
      return d3 !== -1 && u9.splice(d3, 1), u9;
    }))), m4 = (0, import_react22.useMemo)(() => ({ register: s5, slot: t4.slot, name: t4.name, props: t4.props, value: t4.value }), [s5, t4.slot, t4.name, t4.props, t4.value]);
    return import_react22.default.createElement(c4.Provider, { value: m4 }, t4.children);
  }, [e4])];
}
var N2 = "label";
function G2(r5, l5) {
  var y3;
  let a5 = (0, import_react17.useId)(), e4 = P3(), o9 = u5(), g2 = a2(), { id: t4 = `headlessui-label-${a5}`, htmlFor: s5 = o9 != null ? o9 : (y3 = e4.props) == null ? void 0 : y3.htmlFor, passive: m4 = false, ...i6 } = r5, p4 = y(l5);
  n(() => e4.register(t4), [t4, e4.register]);
  let u9 = o4((L) => {
    let b3 = L.currentTarget;
    if (b3 instanceof HTMLLabelElement && L.preventDefault(), e4.props && "onClick" in e4.props && typeof e4.props.onClick == "function" && e4.props.onClick(L), b3 instanceof HTMLLabelElement) {
      let n5 = document.getElementById(b3.htmlFor);
      if (n5) {
        let E3 = n5.getAttribute("disabled");
        if (E3 === "true" || E3 === "")
          return;
        let x2 = n5.getAttribute("aria-disabled");
        if (x2 === "true" || x2 === "")
          return;
        (n5 instanceof HTMLInputElement && (n5.type === "radio" || n5.type === "checkbox") || n5.role === "radio" || n5.role === "checkbox" || n5.role === "switch") && n5.click(), n5.focus({ preventScroll: true });
      }
    }
  }), d3 = g2 || false, C3 = (0, import_react22.useMemo)(() => ({ ...e4.slot, disabled: d3 }), [e4.slot, d3]), f7 = { ref: p4, ...e4.props, id: t4, htmlFor: s5, onClick: u9 };
  return m4 && ("onClick" in f7 && (delete f7.htmlFor, delete f7.onClick), "onClick" in i6 && delete i6.onClick), H({ ourProps: f7, theirProps: i6, slot: C3, defaultTag: s5 ? N2 : "div", name: e4.name || "Label" });
}
var U2 = W(G2);
var K = Object.assign(U2, {});

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
var import_react23 = __toESM(require_react(), 1);
function l4(e4, r5) {
  return e4 !== null && r5 !== null && typeof e4 == "object" && typeof r5 == "object" && "id" in e4 && "id" in r5 ? e4.id === r5.id : e4 === r5;
}
function u8(e4 = l4) {
  return (0, import_react23.useCallback)((r5, t4) => {
    if (typeof e4 == "string") {
      let o9 = e4;
      return (r5 == null ? void 0 : r5[o9]) === (t4 == null ? void 0 : t4[o9]);
    }
    return e4(r5, t4);
  }, [e4]);
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/utils/focus-management.js
var f6 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var p3 = ["[data-autofocus]"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var F = ((n5) => (n5[n5.First = 1] = "First", n5[n5.Previous = 2] = "Previous", n5[n5.Next = 4] = "Next", n5[n5.Last = 8] = "Last", n5[n5.WrapAround = 16] = "WrapAround", n5[n5.NoScroll = 32] = "NoScroll", n5[n5.AutoFocus = 64] = "AutoFocus", n5))(F || {});
var T5 = ((o9) => (o9[o9.Error = 0] = "Error", o9[o9.Overflow = 1] = "Overflow", o9[o9.Success = 2] = "Success", o9[o9.Underflow = 3] = "Underflow", o9))(T5 || {});
var y2 = ((t4) => (t4[t4.Previous = -1] = "Previous", t4[t4.Next = 1] = "Next", t4))(y2 || {});
function b2(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(f6)).sort((r5, t4) => Math.sign((r5.tabIndex || Number.MAX_SAFE_INTEGER) - (t4.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S3(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(p3)).sort((r5, t4) => Math.sign((r5.tabIndex || Number.MAX_SAFE_INTEGER) - (t4.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h3 = ((t4) => (t4[t4.Strict = 0] = "Strict", t4[t4.Loose = 1] = "Loose", t4))(h3 || {});
var H3 = ((t4) => (t4[t4.Keyboard = 0] = "Keyboard", t4[t4.Mouse = 1] = "Mouse", t4))(H3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e4) => {
  e4.metaKey || e4.altKey || e4.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e4) => {
  e4.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e4.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
var w3 = ["textarea", "input"].join(",");
function O2(e4) {
  var r5, t4;
  return (t4 = (r5 = e4 == null ? void 0 : e4.matches) == null ? void 0 : r5.call(e4, w3)) != null ? t4 : false;
}
function _2(e4, r5 = (t4) => t4) {
  return e4.slice().sort((t4, u9) => {
    let o9 = r5(t4), c5 = r5(u9);
    if (o9 === null || c5 === null)
      return 0;
    let l5 = o9.compareDocumentPosition(c5);
    return l5 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l5 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P4(e4, r5, { sorted: t4 = true, relativeTo: u9 = null, skipElements: o9 = [] } = {}) {
  let c5 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4.ownerDocument, l5 = Array.isArray(e4) ? t4 ? _2(e4) : e4 : r5 & 64 ? S3(e4) : b2(e4);
  o9.length > 0 && l5.length > 1 && (l5 = l5.filter((s5) => !o9.some((a5) => a5 != null && "current" in a5 ? (a5 == null ? void 0 : a5.current) === s5 : a5 === s5))), u9 = u9 != null ? u9 : c5.activeElement;
  let n5 = (() => {
    if (r5 & 5)
      return 1;
    if (r5 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r5 & 1)
      return 0;
    if (r5 & 2)
      return Math.max(0, l5.indexOf(u9)) - 1;
    if (r5 & 4)
      return Math.max(0, l5.indexOf(u9)) + 1;
    if (r5 & 8)
      return l5.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M2 = r5 & 32 ? { preventScroll: true } : {}, m4 = 0, d3 = l5.length, i6;
  do {
    if (m4 >= d3 || m4 + d3 <= 0)
      return 0;
    let s5 = x2 + m4;
    if (r5 & 16)
      s5 = (s5 + d3) % d3;
    else {
      if (s5 < 0)
        return 3;
      if (s5 >= d3)
        return 1;
    }
    i6 = l5[s5], i6 == null || i6.focus(M2), m4 += n5;
  } while (i6 !== c5.activeElement);
  return r5 & 6 && O2(i6) && i6.select(), 2;
}

// node_modules/.pnpm/@headlessui+react@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react24 = __toESM(require_react(), 1);
"use client";
var Le = ((e4) => (e4[e4.RegisterOption = 0] = "RegisterOption", e4[e4.UnregisterOption = 1] = "UnregisterOption", e4))(Le || {});
var ke = { [0](o9, t4) {
  let e4 = [...o9.options, { id: t4.id, element: t4.element, propsRef: t4.propsRef }];
  return { ...o9, options: _2(e4, (a5) => a5.element.current) };
}, [1](o9, t4) {
  let e4 = o9.options.slice(), a5 = o9.options.findIndex((O3) => O3.id === t4.id);
  return a5 === -1 ? o9 : (e4.splice(a5, 1), { ...o9, options: e4 });
} };
var j3 = (0, import_react24.createContext)(null);
j3.displayName = "RadioGroupDataContext";
function J(o9) {
  let t4 = (0, import_react24.useContext)(j3);
  if (t4 === null) {
    let e4 = new Error(`<${o9} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e4, J), e4;
  }
  return t4;
}
var X = (0, import_react24.createContext)(null);
X.displayName = "RadioGroupActionsContext";
function z2(o9) {
  let t4 = (0, import_react24.useContext)(X);
  if (t4 === null) {
    let e4 = new Error(`<${o9} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e4, z2), e4;
  }
  return t4;
}
function Fe(o9, t4) {
  return u2(t4.type, ke, o9, t4);
}
var Ie = "div";
function Ue(o9, t4) {
  let e4 = (0, import_react17.useId)(), a5 = a2(), { id: O3 = `headlessui-radiogroup-${e4}`, value: m4, form: P5, name: i6, onChange: f7, by: c5, disabled: p4 = a5 || false, defaultValue: I2, ...y3 } = o9, T6 = u8(c5), [v2, C3] = (0, import_react24.useReducer)(Fe, { options: [] }), n5 = v2.options, [U3, h4] = z(), [D3, L] = U(), A2 = (0, import_react24.useRef)(null), M2 = y(A2, t4), l5 = l(I2), [s5, _3] = T(m4, f7, l5), R3 = (0, import_react24.useMemo)(() => n5.find((r5) => !r5.propsRef.current.disabled), [n5]), b3 = (0, import_react24.useMemo)(() => n5.some((r5) => T6(r5.propsRef.current.value, s5)), [n5, s5]), d3 = o4((r5) => {
    var u9;
    if (p4 || T6(r5, s5))
      return false;
    let k2 = (u9 = n5.find((H4) => T6(H4.propsRef.current.value, r5))) == null ? void 0 : u9.propsRef.current;
    return k2 != null && k2.disabled ? false : (_3 == null || _3(r5), true);
  }), de = o4((r5) => {
    let k2 = A2.current;
    if (!k2)
      return;
    let u9 = u(k2), H4 = n5.filter((g2) => g2.propsRef.current.disabled === false).map((g2) => g2.element.current);
    switch (r5.key) {
      case o8.Enter:
        p2(r5.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (r5.preventDefault(), r5.stopPropagation(), P4(H4, F.Previous | F.WrapAround) === T5.Success) {
          let E3 = n5.find((N3) => N3.element.current === (u9 == null ? void 0 : u9.activeElement));
          E3 && d3(E3.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (r5.preventDefault(), r5.stopPropagation(), P4(H4, F.Next | F.WrapAround) === T5.Success) {
          let E3 = n5.find((N3) => N3.element.current === (u9 == null ? void 0 : u9.activeElement));
          E3 && d3(E3.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          r5.preventDefault(), r5.stopPropagation();
          let g2 = n5.find((E3) => E3.element.current === (u9 == null ? void 0 : u9.activeElement));
          g2 && d3(g2.propsRef.current.value);
        }
        break;
    }
  }), q = o4((r5) => (C3({ type: 0, ...r5 }), () => C3({ type: 1, id: r5.id }))), ue = (0, import_react24.useMemo)(() => ({ value: s5, firstOption: R3, containsCheckedOption: b3, disabled: p4, compare: T6, ...v2 }), [s5, R3, b3, p4, T6, v2]), ce = (0, import_react24.useMemo)(() => ({ registerOption: q, change: d3 }), [q, d3]), fe = { ref: M2, id: O3, role: "radiogroup", "aria-labelledby": U3, "aria-describedby": D3, onKeyDown: de }, Te = (0, import_react24.useMemo)(() => ({ value: s5 }), [s5]), me = (0, import_react24.useCallback)(() => {
    if (l5 !== void 0)
      return d3(l5);
  }, [d3, l5]);
  return import_react24.default.createElement(L, { name: "RadioGroup.Description" }, import_react24.default.createElement(h4, { name: "RadioGroup.Label" }, import_react24.default.createElement(X.Provider, { value: ce }, import_react24.default.createElement(j3.Provider, { value: ue }, i6 != null && import_react24.default.createElement(j2, { disabled: p4, data: { [i6]: s5 || "on" }, overrides: { type: "radio", checked: s5 != null }, form: P5, onReset: me }), H({ ourProps: fe, theirProps: y3, slot: Te, defaultTag: Ie, name: "RadioGroup" })))));
}
var Me = "div";
function Se(o9, t4) {
  var R3;
  let e4 = J("RadioGroup.Option"), a5 = z2("RadioGroup.Option"), O3 = (0, import_react17.useId)(), { id: m4 = `headlessui-radiogroup-option-${O3}`, value: P5, disabled: i6 = e4.disabled || false, autoFocus: f7 = false, ...c5 } = o9, p4 = (0, import_react24.useRef)(null), I2 = y(p4, t4), [y3, T6] = z(), [v2, C3] = U(), n5 = s3({ value: P5, disabled: i6 });
  n(() => a5.registerOption({ id: m4, element: p4, propsRef: n5 }), [m4, a5, p4, n5]);
  let U3 = o4((b3) => {
    var d3;
    if (r4(b3.currentTarget))
      return b3.preventDefault();
    a5.change(P5) && ((d3 = p4.current) == null || d3.focus());
  }), h4 = ((R3 = e4.firstOption) == null ? void 0 : R3.id) === m4, { isFocusVisible: D3, focusProps: L } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f7 }), { isHovered: A2, hoverProps: M2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i6 }), l5 = e4.compare(e4.value, P5), s5 = D({ ref: I2, id: m4, role: "radio", "aria-checked": l5 ? "true" : "false", "aria-labelledby": y3, "aria-describedby": v2, "aria-disabled": i6 ? true : void 0, tabIndex: (() => i6 ? -1 : l5 || !e4.containsCheckedOption && h4 ? 0 : -1)(), onClick: i6 ? void 0 : U3, autoFocus: f7 }, L, M2), _3 = (0, import_react24.useMemo)(() => ({ checked: l5, disabled: i6, active: D3, hover: A2, focus: D3, autofocus: f7 }), [l5, i6, A2, D3, f7]);
  return import_react24.default.createElement(C3, { name: "RadioGroup.Description" }, import_react24.default.createElement(T6, { name: "RadioGroup.Label" }, H({ ourProps: s5, theirProps: c5, slot: _3, defaultTag: Me, name: "RadioGroup.Option" })));
}
var He = "span";
function we(o9, t4) {
  var R3;
  let e4 = J("Radio"), a5 = z2("Radio"), O3 = (0, import_react17.useId)(), m4 = u5(), P5 = a2(), { id: i6 = m4 || `headlessui-radio-${O3}`, value: f7, disabled: c5 = e4.disabled || P5 || false, autoFocus: p4 = false, ...I2 } = o9, y3 = (0, import_react24.useRef)(null), T6 = y(y3, t4), v2 = I(), C3 = G(), n5 = s3({ value: f7, disabled: c5 });
  n(() => a5.registerOption({ id: i6, element: y3, propsRef: n5 }), [i6, a5, y3, n5]);
  let U3 = o4((b3) => {
    var d3;
    if (r4(b3.currentTarget))
      return b3.preventDefault();
    a5.change(f7) && ((d3 = y3.current) == null || d3.focus());
  }), { isFocusVisible: h4, focusProps: D3 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p4 }), { isHovered: L, hoverProps: A2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: c5 }), M2 = ((R3 = e4.firstOption) == null ? void 0 : R3.id) === i6, l5 = e4.compare(e4.value, f7), s5 = D({ ref: T6, id: i6, role: "radio", "aria-checked": l5 ? "true" : "false", "aria-labelledby": v2, "aria-describedby": C3, "aria-disabled": c5 ? true : void 0, tabIndex: (() => c5 ? -1 : l5 || !e4.containsCheckedOption && M2 ? 0 : -1)(), autoFocus: p4, onClick: c5 ? void 0 : U3 }, D3, A2), _3 = (0, import_react24.useMemo)(() => ({ checked: l5, disabled: c5, hover: L, focus: h4, autofocus: p4 }), [l5, c5, L, h4, p4]);
  return H({ ourProps: s5, theirProps: I2, slot: _3, defaultTag: He, name: "Radio" });
}
var Ne = W(Ue);
var We = W(Se);
var Be = W(we);
var Ve = K;
var Ke = w2;
var Tt = Object.assign(Ne, { Option: We, Radio: Be, Label: Ve, Description: Ke });

// packages/radio-group/src/radio-group.tsx
var import_react26 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var RadioGroup = (0, import_react26.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tt, { ...props, ref }, void 0, false, {
  fileName: "packages/radio-group/src/radio-group.tsx",
  lineNumber: 17,
  columnNumber: 2
}, this));
RadioGroup.displayName = "RadioGroup";
var RadioStateContext = (0, import_react26.createContext)({
  autofocus: false,
  checked: false,
  disabled: false,
  focus: false,
  hover: false
});
var RadioItem = (0, import_react26.forwardRef)(({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Be,
  {
    className: cx(
      "group/radio flex cursor-default gap-2 py-1 text-base focus:outline-none aria-enabled:cursor-pointer sm:text-sm [&_label]:cursor-inherit",
      className
    ),
    as: "div",
    ...props,
    ref,
    children: (ctx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioStateContext.Provider, { value: ctx, children }, void 0, false, {
      fileName: "packages/radio-group/src/radio-group.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  },
  void 0,
  false,
  {
    fileName: "packages/radio-group/src/radio-group.tsx",
    lineNumber: 52,
    columnNumber: 2
  },
  this
));
RadioItem.displayName = "RadioItem";
var DefaultRadioIndicator = ({ checked, disabled, focus, hover }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "span",
  {
    className: cx(
      "flex size-4 items-center justify-center rounded-full border border-form",
      disabled && "cursor-default opacity-50",
      checked && "border-accent-500 bg-accent-500",
      focus && !disabled && "border-accent-600 ring-4 ring-focus-accent",
      hover && "border-accent-600"
    ),
    children: checked && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-[#fff]" }, void 0, false, {
      fileName: "packages/radio-group/src/radio-group.tsx",
      lineNumber: 84,
      columnNumber: 15
    }, this)
  },
  void 0,
  false,
  {
    fileName: "packages/radio-group/src/radio-group.tsx",
    lineNumber: 75,
    columnNumber: 2
  },
  this
);
var RadioIndicator = ({ children, className, ...props }) => {
  const ctx = (0, import_react26.useContext)(RadioStateContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: cx("radio-indicator inline-flex size-6 select-none items-center justify-center sm:size-5", className),
      ...props,
      children: children == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DefaultRadioIndicator, { ...ctx }, void 0, false, {
        fileName: "packages/radio-group/src/radio-group.tsx",
        lineNumber: 105,
        columnNumber: 5
      }, this) : typeof children === "function" ? children(ctx) : children
    },
    void 0,
    false,
    {
      fileName: "packages/radio-group/src/radio-group.tsx",
      lineNumber: 100,
      columnNumber: 3
    },
    this
  );
};
var RadioGroupList = (0, import_react26.forwardRef)(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, { className: clsx_default("-space-y-px", className), ...props, ref }, void 0, false, {
    fileName: "packages/radio-group/src/radio-group.tsx",
    lineNumber: 119,
    columnNumber: 9
  }, this);
});
RadioGroupList.displayName = "RadioGroupList";
var RadioListItem = (0, import_react26.forwardRef)(({ children, className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Be,
    {
      as: "div",
      className: cx(
        "group/radio relative flex select-none gap-2 border border-form px-3 py-2 text-base sm:text-sm [&_label]:cursor-inherit",
        "focus:outline-none aria-enabled:cursor-pointer",
        "first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
        "aria-disabled:border-form/50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
        "aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 not-disabled:hover:aria-checked:border-accent-600",
        "has-[.radio-indicator:first-child]:pl-2 has-[.radio-indicator:last-child]:pr-2",
        className
      ),
      ref,
      ...props,
      children: (ctx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioStateContext.Provider, { value: ctx, children }, void 0, false, {
        fileName: "packages/radio-group/src/radio-group.tsx",
        lineNumber: 146,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "packages/radio-group/src/radio-group.tsx",
        lineNumber: 145,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "packages/radio-group/src/radio-group.tsx",
      lineNumber: 130,
      columnNumber: 3
    },
    this
  );
});
RadioListItem.displayName = "RadioListItem";
var RadioCard = (0, import_react26.forwardRef)(({ children, className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Be,
    {
      as: "div",
      className: clsx_default(
        "group/radio relative rounded-md border border-card bg-card p-4 text-base sm:text-sm [&_label]:cursor-inherit",
        "focus:outline-none aria-enabled:cursor-pointer",
        "first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
        "aria-disabled:border-form/50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
        "aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 aria-enabled:hover:aria-checked:border-accent-600",
        className
      ),
      ...props,
      ref,
      children: (ctx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioStateContext.Provider, { value: ctx, children }, void 0, false, {
        fileName: "packages/radio-group/src/radio-group.tsx",
        lineNumber: 178,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "packages/radio-group/src/radio-group.tsx",
        lineNumber: 177,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "packages/radio-group/src/radio-group.tsx",
      lineNumber: 163,
      columnNumber: 3
    },
    this
  );
});
RadioCard.displayName = "RadioCard";
var RadioItemContent = ({ asChild = false, children, className, ...props }) => {
  const ctx = (0, import_react26.useContext)(RadioStateContext);
  const Component = asChild ? Slot : "div";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, { className: clsx_default("min-w-0 flex-1", ctx.disabled && "opacity-50", className), ...props, children }, void 0, false, {
    fileName: "packages/radio-group/src/radio-group.tsx",
    lineNumber: 195,
    columnNumber: 3
  }, this);
};
var RadioButtonGroup = (0, import_react26.forwardRef)(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, { className: clsx_default("flex flex-row flex-nowrap -space-x-px", className), ...props, ref }, void 0, false, {
    fileName: "packages/radio-group/src/radio-group.tsx",
    lineNumber: 205,
    columnNumber: 9
  }, this);
});
RadioButtonGroup.displayName = "RadioButtonGroup";
var RadioButton = (0, import_react26.forwardRef)(({ children, className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Be,
    {
      as: "div",
      className: cx(
        "group/radio relative flex flex-1 select-none items-center justify-center gap-2 border border-form px-3 py-2 text-base sm:text-sm [&_label]:cursor-inherit",
        "focus:outline-none aria-enabled:cursor-pointer",
        "first-of-type:rounded-bl-md first-of-type:rounded-tl-md last-of-type:rounded-br-md last-of-type:rounded-tr-md",
        "aria-disabled:opacity-50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
        "aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 not-disabled:hover:aria-checked:border-accent-600",
        "has-[.radio-indicator:first-child]:pl-2 has-[.radio-indicator:last-child]:pr-2",
        className
      ),
      ref,
      ...props,
      children: (ctx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioStateContext.Provider, { value: ctx, children }, void 0, false, {
        fileName: "packages/radio-group/src/radio-group.tsx",
        lineNumber: 232,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "packages/radio-group/src/radio-group.tsx",
        lineNumber: 231,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "packages/radio-group/src/radio-group.tsx",
      lineNumber: 216,
      columnNumber: 3
    },
    this
  );
});
RadioButton.displayName = "RadioButton";

// app/routes/components.radio-group.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.radio-group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.radio-group.tsx"
  );
  import.meta.hot.lastModified = "1724091104715.6821";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Radio Group"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Radio Group" }, void 0, false, {
      fileName: "app/routes/components.radio-group.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "A set of checkable buttons\u2014known as radio buttons\u2014where no more than one of the buttons can be checked at a time." }, void 0, false, {
      fileName: "app/routes/components.radio-group.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "mt-4 grid gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioGroup, { defaultValue: "comfortable", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItem, { value: "default", id: "simple-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 49,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "simple-1", children: "Default" }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 51,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 50,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 48,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItem, { value: "comfortable", id: "simple-2", disabled: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 55,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "simple-2", children: "Comfortable" }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 57,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 56,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 54,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItem, { value: "compact", id: "simple-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 61,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "simple-3", children: "Compact" }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 63,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 62,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 60,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItem, { value: "roomy", id: "simple-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 67,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "simple-4", children: "Roomy" }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 69,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 68,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 66,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.radio-group.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioButtonGroup, { defaultValue: "production", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioButton, { value: "development", children: "Development" }, void 0, false, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 75,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioButton, { disabled: true, value: "staging", children: "Staging" }, void 0, false, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 76,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioButton, { value: "production", children: "Production" }, void 0, false, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 79,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.radio-group.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioGroupList, { defaultValue: "comfortable", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioListItem, { value: "default", disabled: true, id: "rli1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 84,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-medium text-strong", htmlFor: "rli1", children: "Default" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 86,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-body", children: "Laborum esse cillum incididunt est dolore." }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 89,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 85,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 83,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioListItem, { value: "comfortable", id: "rli2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 93,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-medium text-strong", htmlFor: "rli2", children: "Comfortable" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 95,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-body", children: "Ea laboris tempor laborum officia ea adipisicing exercitation." }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 98,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 94,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 92,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioListItem, { value: "compact", id: "rli3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 102,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-medium text-strong", htmlFor: "rli3", children: "Compact" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 104,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-body", children: "Adipisicing est dolore velit magna dolor voluptate velit." }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 107,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 103,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 101,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioListItem, { value: "roomy", id: "rli4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 111,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioItemContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-medium text-strong", htmlFor: "rli4", children: "Roomy" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 113,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-body", children: "Tempor dolore Lorem exercitation id nisi aliquip elit." }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 116,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 112,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 110,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.radio-group.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioGroup, { className: "grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4", defaultValue: "existing", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioCard, { className: "flex", value: "newsletter", id: "radiocard-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "radiocard-1", className: "block text-sm font-medium text-strong", children: "Newsletter" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 124,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 flex items-center text-sm text-gray-500", children: "Last message sent an hour ago" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 127,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-6 text-sm font-medium", children: "621 users" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 128,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 123,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 130,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 122,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioCard, { className: "flex", value: "existing", id: "radiocard-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "radiocard-2", className: "block text-sm font-medium text-strong", children: "Existing Customers" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 134,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 flex items-center text-sm text-gray-500", children: "Last message sent 2 weeks ago" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 137,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-6 text-sm font-medium", children: "1200 users" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 138,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 133,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 140,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 132,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioCard, { className: "flex", value: "trial", id: "radiocard-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "radiocard-3", className: "block text-sm font-medium text-strong", children: "Trial Users" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 144,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 flex items-center text-sm text-gray-500", children: "Last message sent 4 days ago" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 147,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-6 text-sm font-medium", children: "2740 Users" }, void 0, false, {
                fileName: "app/routes/components.radio-group.tsx",
                lineNumber: 148,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 143,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioIndicator, {}, void 0, false, {
              fileName: "app/routes/components.radio-group.tsx",
              lineNumber: 150,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.radio-group.tsx",
            lineNumber: 142,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.radio-group.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.radio-group.tsx",
        lineNumber: 46,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
          fileName: "app/routes/components.radio-group.tsx",
          lineNumber: 156,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import {
										RadioButton,
										RadioButtonGroup,
										RadioCard,
										RadioGroup,
										RadioGroupList,
										RadioIndicator,
										RadioItem,
										RadioItemContent,
										RadioListItem,
									} from "@ngrok/mantle/radio-group";

									<RadioGroup defaultValue="comfortable">
										<RadioItem className="py-1" value="default" id="simple-1">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-1">Default</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="comfortable" id="simple-2" disabled>
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-2">Comfortable</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="compact" id="simple-3">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-3">Compact</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="roomy" id="simple-4">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-4">Roomy</label>
											</RadioItemContent>
										</RadioItem>
									</RadioGroup>

									<RadioButtonGroup defaultValue="production">
										<RadioButton value="development">Development</RadioButton>
										<RadioButton value="staging">Staging</RadioButton>
										<RadioButton value="production">Production</RadioButton>
									</RadioButtonGroup>

									<RadioGroupList defaultValue="comfortable">
										<RadioListItem value="default" disabled id="rli1">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli1">
													Default
												</label>
												<p className="text-body">Laborum esse cillum incididunt est dolore.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="comfortable" id="rli2">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli2">
													Comfortable
												</label>
												<p className="text-body">Ea laboris tempor laborum officia ea adipisicing exercitation.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="compact" id="rli3">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli3">
													Compact
												</label>
												<p className="text-body">Adipisicing est dolore velit magna dolor voluptate velit.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="roomy" id="rli4">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli4">
													Roomy
												</label>
												<p className="text-body">Tempor dolore Lorem exercitation id nisi aliquip elit.</p>
											</RadioItemContent>
										</RadioListItem>
									</RadioGroupList>

									<RadioGroup className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4" defaultValue="existing">
										<RadioCard className="flex" value="newsletter" id="radiocard-1">
											<div className="flex-1">
												<label htmlFor="radiocard-1" className="block text-sm font-medium text-strong">
													Newsletter
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent an hour ago</p>
												<p className="mt-6 text-sm font-medium">621 users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
										<RadioCard className="flex" value="existing" id="radiocard-2">
											<div className="flex-1">
												<label htmlFor="radiocard-2" className="block text-sm font-medium text-strong">
													Existing Customers
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 2 weeks ago</p>
												<p className="mt-6 text-sm font-medium">1200 users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
										<RadioCard className="flex" value="trial" id="radiocard-3">
											<div className="flex-1">
												<label htmlFor="radiocard-3" className="block text-sm font-medium text-strong">
													Trial Users
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 4 days ago</p>
												<p className="mt-6 text-sm font-medium">2740 Users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
									</RadioGroup>
								` }, void 0, false, {
          fileName: "app/routes/components.radio-group.tsx",
          lineNumber: 157,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.radio-group.tsx",
        lineNumber: 155,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/components.radio-group.tsx",
        lineNumber: 154,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.radio-group.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.radio-group.tsx",
    lineNumber: 39,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/components.radio-group.tsx",
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
//# sourceMappingURL=/build/routes/components.radio-group-SFD2U4PG.js.map
