import {
  Link,
  useLocation
} from "/build/_shared/chunk-TFWTF37R.js";
import {
  Anchor
} from "/build/_shared/chunk-4SICMU5M.js";
import {
  InlineCode
} from "/build/_shared/chunk-B5JUMWCL.js";
import "/build/_shared/chunk-JDR2CS4I.js";
import "/build/_shared/chunk-3LE3N7DD.js";
import "/build/_shared/chunk-ET7BOX4G.js";
import {
  cx
} from "/build/_shared/chunk-ACY2JGBA.js";
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

// app/components/hash-nav-link.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/hash-nav-link.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/hash-nav-link.tsx"
  );
  import.meta.hot.lastModified = "1724091104711.5361";
}
var HashNavLink = ({
  className,
  children,
  to
}) => {
  _s();
  const location = useLocation();
  const hash = typeof to === "string" ? to.split("#").pop() : to.hash;
  const isActive = Boolean(hash && location.hash === `#${hash}`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: typeof className === "function" ? className(isActive) : className, onKeyDown: (event) => {
    if (event.key === " ") {
      event.stopPropagation();
      event.preventDefault();
      event.currentTarget.click();
    }
  }, tabIndex: 0, to, children }, void 0, false, {
    fileName: "app/components/hash-nav-link.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s(HashNavLink, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = HashNavLink;
var _c;
$RefreshReg$(_c, "HashNavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/base.colors.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/base.colors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/base.colors.tsx"
  );
  import.meta.hot.lastModified = "1724091104712.545";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Colors"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-row-reverse gap-9", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "sticky top-6 hidden w-44 self-start lg:block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xs font-medium uppercase tracking-widest", children: "On this page" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "mt-3 flex flex-col gap-2 text-sm text-muted", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#tailwind", children: "Tailwind" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 45,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#variables", children: "Variables" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 50,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#overrides", children: "Overrides" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 55,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#functional-colors", children: "Functional Colors" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 60,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "ml-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#neutral", children: "Neutral" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 67,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 66,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#accent", children: "Accent" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 72,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 71,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#success", children: "Success" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 77,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 76,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#danger", children: "Danger" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 82,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 81,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#warning", children: "Warning" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 87,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 86,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 65,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#extended-palette", children: "Extended Palette" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 92,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "ml-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#gray", children: "Gray" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 99,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 98,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#red", children: "Red" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 104,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 103,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#orange", children: "Orange" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 109,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 108,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#amber", children: "Amber" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 114,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 113,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#yellow", children: "Yellow" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 119,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 118,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#lime", children: "Lime" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 124,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 123,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#green", children: "Green" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 129,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 128,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#emerald", children: "Emerald" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 134,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 133,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#teal", children: "Teal" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 139,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 138,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#cyan", children: "Cyan" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 144,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 143,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#sky", children: "Sky" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 149,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 148,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#blue", children: "Blue" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 155,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 154,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#indigo", children: "Indigo" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 160,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 159,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#violet", children: "Violet" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 165,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 164,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#purple", children: "Purple" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 170,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 169,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#fuchsia", children: "Fuchsia" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 175,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 174,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#pink", children: "Pink" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 180,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 179,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HashNavLink, { className: (isActive) => cx("hover:font-medium hover:text-strong", isActive && "font-medium text-accent-600"), to: ".#rose", children: "Rose" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 185,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 184,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 97,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/base.colors.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Colors" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 193,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4 font-body text-xl text-body", children: "Colors are a key component of any design system. They are used to convey meaning, attract attention, and provide feedback. Mantle\u2019s color system is designed to be accessible and flexible with dark and high contrast modes." }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 194,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "tailwind", className: "mt-8 text-3xl font-medium", children: "Tailwind" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 200,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 font-body text-body", children: [
        "Mantle uses Tailwind under the hood for all its CSS styling. However, we differ from Tailwind when it comes to colors. Mantle provides a full color library that automatically provides a dark and high contrast modes. This is different from standard Tailwind usage that ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("em", { children: "requires" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 206,
          columnNumber: 53
        }, this),
        " dark class variations. By simply specifying light colors provided by Mantle, you\u2019ll get dark and high contrast modes for free. If you require additional customization, you can provide dark variant classes as an override."
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 203,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "variables", className: "mt-8 text-3xl font-medium", children: "Variables" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 211,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 font-body text-body", children: [
        "Mantle\u2019s colors are delivered as CSS variables via Tailwind\u2019s API eg.",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: ".text-blue-500" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 216,
          columnNumber: 6
        }, this),
        ". They can be directly accessed via",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "var(--blue-500)" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 217,
          columnNumber: 6
        }, this),
        " but do note that you\u2019ll need to wrap everything in",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "hsl()" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 218,
          columnNumber: 6
        }, this),
        " like so: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "hsl(var(--blue-500))" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 218,
          columnNumber: 46
        }, this),
        ". This allows for Tailwind operations like ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "text-blue-500/25" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 219,
          columnNumber: 31
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 214,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "overrides", className: "mt-8 text-3xl font-medium", children: "Overrides" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 222,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 font-body text-body", children: [
        "Most colors should appropriately swap for sensible values in dark and high contrast modes. However, there are often cases where you\u2019ll need to specify an override. The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "dark:" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 227,
          columnNumber: 70
        }, this),
        " variant is well-documented on ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor, { href: "https://tailwindcss.com/docs/dark-mode", children: "Tailwind\u2019s website" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 228,
          columnNumber: 25
        }, this),
        ". Mantle provides additional variants for high contrast and dark high contrast mode with",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "high-contrast:" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 230,
          columnNumber: 6
        }, this),
        " and ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "dark-high-contrast:" }, void 0, false, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 230,
          columnNumber: 50
        }, this),
        " respectively."
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 225,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "functional-colors", className: "mt-8 text-3xl font-medium", children: "Functional Colors" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 233,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 font-body text-body", children: "Mantle generally limits its color choices to the following functional colors for primary actions, and various states like danger and warnings." }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 236,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "neutral", className: "mt-8 text-xl font-medium", children: "Neutral" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 241,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 246,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 245,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 250,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 249,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 254,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 253,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 258,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 257,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 262,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 261,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 266,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 265,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 270,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 269,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 274,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 273,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 278,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 277,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 282,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 281,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-neutral-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 286,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 285,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 244,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "accent", className: "mt-8 text-xl font-medium", children: "Accent" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 291,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 296,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 295,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 300,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 299,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 304,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 303,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 308,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 307,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 312,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 311,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 316,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 315,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 320,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 319,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 324,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 323,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 328,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 327,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 332,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 331,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-accent-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 336,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 335,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 294,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "success", className: "mt-8 flex items-center gap-2 text-xl font-medium", children: "Success" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 341,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 346,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 345,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 350,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 349,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 354,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 353,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 358,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 357,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 362,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 361,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 366,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 365,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 370,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 369,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 374,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 373,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 378,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 377,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 382,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 381,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-success-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 386,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 385,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 344,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "danger", className: "mt-8 text-xl font-medium", children: "Danger" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 391,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 396,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 395,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 400,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 399,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 404,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 403,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 408,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 407,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 412,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 411,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 416,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 415,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 420,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 419,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 424,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 423,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 428,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 427,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 432,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 431,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-danger-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 436,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 435,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 394,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "warning", className: "mt-8 text-xl font-medium", children: "Warning" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 441,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 446,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 445,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 450,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 449,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 454,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 453,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 458,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 457,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 462,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 461,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 466,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 465,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 470,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 469,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 474,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 473,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 478,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 477,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 482,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 481,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-warning-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 486,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 485,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 444,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "extended-palette", className: "mt-16 text-3xl font-medium", children: "Extended Palette" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 491,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 font-body text-body", children: "Mantle also supports the entirety of Tailwind\u2019s color palette in light, dark, and high contrast variants. These are to be used when there is no functional meaning behind the color choice. However, we\u2019ve left out the extended collection of Tailwind\u2019s grays eg. slate, zinc, etc. since we only want to use our own custom branded gray." }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 494,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "gray", className: "mt-8 text-xl font-medium", children: "Gray" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 500,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 505,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 504,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 509,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 508,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 513,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 512,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 517,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 516,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 521,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 520,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 525,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 524,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 529,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 528,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 533,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 532,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 537,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 536,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 541,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 540,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-gray-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 545,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 544,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 503,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "red", className: "mt-8 text-xl font-medium", children: "Red" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 549,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 554,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 553,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 558,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 557,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 562,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 561,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 566,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 565,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 570,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 569,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 574,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 573,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 578,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 577,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 582,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 581,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 586,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 585,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 590,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 589,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-red-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 594,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 593,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 552,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "orange", className: "mt-8 text-xl font-medium", children: "Orange" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 598,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 603,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 602,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 607,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 606,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 611,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 610,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 615,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 614,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 619,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 618,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 623,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 622,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 627,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 626,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 631,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 630,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 635,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 634,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 639,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 638,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-orange-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 643,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 642,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 601,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "amber", className: "mt-8 text-xl font-medium", children: "Amber" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 647,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 652,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 651,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 656,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 655,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 660,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 659,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 664,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 663,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 668,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 667,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 672,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 671,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 676,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 675,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 680,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 679,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 684,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 683,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 688,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 687,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-amber-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 692,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 691,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 650,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "yellow", className: "mt-8 text-xl font-medium", children: "Yellow" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 696,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 701,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 700,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 705,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 704,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 709,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 708,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 713,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 712,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 717,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 716,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 721,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 720,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 725,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 724,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 729,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 728,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 733,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 732,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 737,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 736,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-yellow-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 741,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 740,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 699,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "lime", className: "mt-8 text-xl font-medium", children: "Lime" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 745,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 750,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 749,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 754,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 753,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 758,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 757,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 762,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 761,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 766,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 765,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 770,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 769,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 774,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 773,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 778,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 777,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 782,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 781,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 786,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 785,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-lime-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 790,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 789,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 748,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "green", className: "mt-8 flex items-center gap-2 text-xl font-medium", children: "Green" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 794,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 799,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 798,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 803,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 802,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 807,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 806,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 811,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 810,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 815,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 814,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 819,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 818,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 823,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 822,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 827,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 826,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 831,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 830,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 835,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 834,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-green-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 839,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 838,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 797,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "emerald", className: "mt-8 text-xl font-medium", children: "Emerald" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 843,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 848,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 847,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 852,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 851,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 856,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 855,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 860,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 859,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 864,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 863,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 868,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 867,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 872,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 871,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 876,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 875,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 880,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 879,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 884,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 883,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-emerald-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 888,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 887,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 846,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "teal", className: "mt-8 text-xl font-medium", children: "Teal" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 892,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 897,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 896,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 901,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 900,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 905,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 904,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 909,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 908,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 913,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 912,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 917,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 916,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 921,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 920,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 925,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 924,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 929,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 928,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 933,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 932,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-teal-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 937,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 936,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 895,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "cyan", className: "mt-8 text-xl font-medium", children: "Cyan" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 941,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 946,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 945,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 950,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 949,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 954,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 953,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 958,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 957,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 962,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 961,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 966,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 965,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 970,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 969,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 974,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 973,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 978,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 977,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 982,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 981,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-cyan-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 986,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 985,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 944,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "sky", className: "mt-8 text-xl font-medium", children: "Sky" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 991,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 996,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 995,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1e3,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 999,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1004,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1003,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1008,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1007,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1012,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1011,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1016,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1015,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1020,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1019,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1024,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1023,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1028,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1027,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1032,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1031,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-sky-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1036,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1035,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 994,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "blue", className: "mt-8 text-xl font-medium", children: "Blue" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1041,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1046,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1045,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1050,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1049,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1054,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1053,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1058,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1057,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1062,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1061,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1066,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1065,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1070,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1069,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1074,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1073,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1078,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1077,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1082,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1081,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-blue-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1086,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1085,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1044,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "indigo", className: "mt-8 text-xl font-medium", children: "Indigo" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1091,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1096,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1095,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1100,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1099,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1104,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1103,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1108,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1107,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1112,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1111,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1116,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1115,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1120,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1119,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1124,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1123,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1128,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1127,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1132,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1131,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-indigo-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1136,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1135,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1094,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "violet", className: "mt-8 text-xl font-medium", children: "Violet" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1141,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1146,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1145,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1150,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1149,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1154,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1153,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1158,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1157,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1162,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1161,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1166,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1165,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1170,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1169,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1174,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1173,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1178,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1177,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1182,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1181,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-violet-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1186,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1185,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1144,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "purple", className: "mt-8 text-xl font-medium", children: "Purple" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1190,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1195,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1194,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1199,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1198,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1203,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1202,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1207,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1206,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1211,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1210,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1215,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1214,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1219,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1218,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1223,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1222,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1227,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1226,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1231,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1230,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-purple-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1235,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1234,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1193,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "fuchsia", className: "mt-8 text-xl font-medium", children: "Fuchsia" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1239,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1244,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1243,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1248,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1247,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1252,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1251,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1256,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1255,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1260,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1259,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1264,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1263,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1268,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1267,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1272,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1271,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1276,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1275,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1280,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1279,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-fuchsia-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1284,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1283,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1242,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "pink", className: "mt-8 text-xl font-medium", children: "Pink" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1289,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1294,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1293,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1298,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1297,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1302,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1301,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1306,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1305,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1310,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1309,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1314,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1313,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1318,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1317,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1322,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1321,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1326,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1325,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1330,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1329,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-pink-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1334,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1333,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1292,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { id: "rose", className: "mt-8 text-xl font-medium", children: "Rose" }, void 0, false, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1338,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-950" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1343,
            columnNumber: 7
          }, this),
          "950"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1342,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-900" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1347,
            columnNumber: 7
          }, this),
          "900"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1346,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-800" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1351,
            columnNumber: 7
          }, this),
          "800"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1350,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-700" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1355,
            columnNumber: 7
          }, this),
          "700"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1354,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-600" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1359,
            columnNumber: 7
          }, this),
          "600"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1358,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-500" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1363,
            columnNumber: 7
          }, this),
          "500"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1362,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-400" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1367,
            columnNumber: 7
          }, this),
          "400"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1366,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-300" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1371,
            columnNumber: 7
          }, this),
          "300"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1370,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-200" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1375,
            columnNumber: 7
          }, this),
          "200"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1374,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-100" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1379,
            columnNumber: 7
          }, this),
          "100"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1378,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-grow flex-col gap-1 font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-10 w-full rounded bg-rose-50" }, void 0, false, {
            fileName: "app/routes/base.colors.tsx",
            lineNumber: 1383,
            columnNumber: 7
          }, this),
          "50"
        ] }, void 0, true, {
          fileName: "app/routes/base.colors.tsx",
          lineNumber: 1382,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/base.colors.tsx",
        lineNumber: 1341,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/base.colors.tsx",
      lineNumber: 192,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/base.colors.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c2 = Page;
var _c2;
$RefreshReg$(_c2, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/base.colors-PH6YJXDV.js.map
