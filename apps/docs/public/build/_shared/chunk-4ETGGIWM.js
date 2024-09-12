import {
  w
} from "/build/_shared/chunk-SHVMSGFH.js";
import {
  parseBooleanish
} from "/build/_shared/chunk-ATBEVGT6.js";
import {
  cva
} from "/build/_shared/chunk-76G7XZOH.js";
import {
  Icon
} from "/build/_shared/chunk-O7WT66KO.js";
import {
  Slot
} from "/build/_shared/chunk-3LE3N7DD.js";
import {
  cx
} from "/build/_shared/chunk-ACY2JGBA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ANPTKELO.js";
import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/button/src/icon-button.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var iconButtonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md border focus-within:outline-none focus-visible:ring-4 disabled:cursor-default disabled:opacity-50",
  {
    variants: {
      /**
       * Defines the visual style of the Button.
       */
      appearance: {
        ghost: "border-transparent text-strong focus-visible:ring-focus-accent not-disabled:hover:bg-neutral-500/10 not-disabled:hover:text-strong not-disabled:active:bg-neutral-500/15 not-disabled:active:text-strong",
        outlined: "border-form bg-form text-strong focus-visible:border-accent-600 focus-visible:ring-focus-accent not-disabled:hover:border-neutral-400 not-disabled:hover:bg-form-hover not-disabled:hover:text-strong not-disabled:active:border-neutral-400 not-disabled:active:bg-neutral-500/10 not-disabled:active:text-strong focus-visible:not-disabled:active:border-accent-600"
      },
      /**
       * Whether or not the button is in a loading state, default `false`. Setting `isLoading` will
       * replace the `icon` with a spinner.
       * It will also disable user interaction with the button and set `aria-disabled`.
       */
      isLoading: {
        false: "",
        true: "opacity-50"
      },
      /**
       * The size of the IconButton.
       */
      size: {
        xs: "size-7 sm:size-6",
        sm: "size-9 sm:size-7",
        md: "size-11 sm:size-9"
      }
    },
    defaultVariants: {
      appearance: "outlined",
      size: "md"
    }
  }
);
var IconButton = (0, import_react.forwardRef)(
  ({
    "aria-disabled": _ariaDisabled,
    appearance,
    asChild = false,
    children,
    className,
    disabled: _disabled,
    icon: propIcon,
    isLoading = false,
    label,
    size,
    type,
    ...props
  }, ref) => {
    const disabled = parseBooleanish(_ariaDisabled ?? _disabled ?? isLoading);
    const icon = isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(w, { className: "animate-spin" }, void 0, false, {
      fileName: "packages/button/src/icon-button.tsx",
      lineNumber: 146,
      columnNumber: 28
    }, this) : propIcon;
    const buttonProps = {
      "aria-disabled": disabled,
      className: cx("icon-button", iconButtonVariants({ appearance, isLoading, size }), className),
      "data-loading": isLoading,
      "data-size": size,
      disabled,
      ref,
      ...props
    };
    if (asChild) {
      const singleChild = import_react.Children.only(children);
      const isValidChild = (0, import_react.isValidElement)(singleChild);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { ...buttonProps, children: isValidChild && (0, import_react.cloneElement)(singleChild, {}, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { svg: icon }, void 0, false, {
        fileName: "packages/button/src/icon-button.tsx",
        lineNumber: 162,
        columnNumber: 81
      }, this)) }, void 0, false, {
        fileName: "packages/button/src/icon-button.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ...buttonProps, type, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: label }, void 0, false, {
        fileName: "packages/button/src/icon-button.tsx",
        lineNumber: 167,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { svg: icon }, void 0, false, {
        fileName: "packages/button/src/icon-button.tsx",
        lineNumber: 168,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "packages/button/src/icon-button.tsx",
      lineNumber: 166,
      columnNumber: 4
    }, this);
  }
);
IconButton.displayName = "IconButton";

export {
  IconButton
};
//# sourceMappingURL=/build/_shared/chunk-4ETGGIWM.js.map
