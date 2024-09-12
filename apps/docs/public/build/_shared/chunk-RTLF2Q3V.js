import {
  invariant
} from "/build/_shared/chunk-L6J2GUHO.js";
import {
  clsx_default
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

// packages/theme-provider/src/preload-fonts.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var cdnBase = "https://cdn.ngrok.com/static/fonts";
var fonts = [
  "euclid-square/EuclidSquare-Regular-WebS.woff",
  "euclid-square/EuclidSquare-RegularItalic-WebS.woff",
  "euclid-square/EuclidSquare-Medium-WebS.woff",
  "euclid-square/EuclidSquare-Semibold-WebS.woff",
  "euclid-square/EuclidSquare-MediumItalic-WebS.woff",
  "ibm-plex-mono/IBMPlexMono-Text.woff",
  "ibm-plex-mono/IBMPlexMono-TextItalic.woff",
  "ibm-plex-mono/IBMPlexMono-SemiBold.woff",
  "ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff"
];
var fontHref = (font) => [cdnBase, font].join("/");
var PreloadFonts = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: fonts.map((font) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "preload", href: fontHref(font), as: "font", type: "font/woff", crossOrigin: "anonymous" }, font, false, {
  fileName: "packages/theme-provider/src/preload-fonts.tsx",
  lineNumber: 26,
  columnNumber: 4
}, this)) }, void 0, false, {
  fileName: "packages/theme-provider/src/preload-fonts.tsx",
  lineNumber: 24,
  columnNumber: 2
}, this);

// packages/theme-provider/src/theme-provider.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var prefersDarkModeMediaQuery = "(prefers-color-scheme: dark)";
var prefersHighContrastMediaQuery = "(prefers-contrast: more)";
var themes = ["system", "light", "dark", "light-high-contrast", "dark-high-contrast"];
var theme = (value) => value;
function isTheme(value) {
  if (typeof value !== "string") {
    return false;
  }
  return themes.includes(value);
}
var DEFAULT_STORAGE_KEY = "mantle-ui-theme";
var initialState = ["system", () => null];
var ThemeProviderContext = (0, import_react.createContext)(initialState);
var isBrowser = () => typeof window !== "undefined";
function getStoredTheme(storageKey, defaultTheme = "system") {
  const fallbackTheme = defaultTheme ?? "system";
  if (isBrowser()) {
    const storedTheme = window.localStorage.getItem(storageKey);
    return isTheme(storedTheme) ? storedTheme : fallbackTheme;
  }
  return fallbackTheme;
}
function ThemeProvider({ children, defaultTheme = "system", storageKey = DEFAULT_STORAGE_KEY }) {
  const [theme2, setTheme] = (0, import_react.useState)(() => {
    const initialTheme = getStoredTheme(storageKey, defaultTheme);
    applyTheme(initialTheme);
    return initialTheme;
  });
  (0, import_react.useEffect)(() => {
    const storedTheme = getStoredTheme(storageKey, defaultTheme);
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, [defaultTheme, storageKey]);
  (0, import_react.useEffect)(() => {
    const prefersDarkMql = window.matchMedia(prefersDarkModeMediaQuery);
    const prefersHighContrastMql = window.matchMedia(prefersHighContrastMediaQuery);
    const onChange = () => {
      const storedTheme = getStoredTheme(storageKey, defaultTheme);
      if (storedTheme !== "system") {
        return;
      }
      applyTheme("system");
    };
    prefersDarkMql.addEventListener("change", onChange);
    prefersHighContrastMql.addEventListener("change", onChange);
    return () => {
      prefersDarkMql.removeEventListener("change", onChange);
      prefersHighContrastMql.removeEventListener("change", onChange);
    };
  }, [defaultTheme, storageKey]);
  const value = (0, import_react.useMemo)(
    () => [
      theme2,
      (theme3) => {
        window.localStorage.setItem(storageKey, theme3);
        setTheme(theme3);
        applyTheme(theme3);
      }
    ],
    [storageKey, theme2]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeProviderContext.Provider, { value, children }, void 0, false, {
    fileName: "packages/theme-provider/src/theme-provider.tsx",
    lineNumber: 139,
    columnNumber: 9
  }, this);
}
function useTheme() {
  const context = (0, import_react.useContext)(ThemeProviderContext);
  invariant(context, "useTheme must be used within a ThemeProvider");
  return context;
}
function applyTheme(theme2) {
  if (!isBrowser()) {
    return;
  }
  const htmlElement = window.document.documentElement;
  htmlElement.classList.remove(...themes);
  const prefersDarkMode = window.matchMedia(prefersDarkModeMediaQuery).matches;
  const prefersHighContrast = window.matchMedia(prefersHighContrastMediaQuery).matches;
  const newTheme = resolveTheme(theme2, { prefersDarkMode, prefersHighContrast });
  htmlElement.classList.add(newTheme);
  htmlElement.dataset.appliedTheme = newTheme;
  htmlElement.dataset.theme = theme2;
}
function resolveTheme(theme2, { prefersDarkMode, prefersHighContrast }) {
  if (theme2 === "system") {
    return determineThemeFromMediaQuery({ prefersDarkMode, prefersHighContrast });
  }
  return theme2;
}
function determineThemeFromMediaQuery({
  prefersDarkMode,
  prefersHighContrast
}) {
  if (prefersHighContrast) {
    return prefersDarkMode ? "dark-high-contrast" : "light-high-contrast";
  }
  return prefersDarkMode ? "dark" : "light";
}
function preventWrongThemeFlashScriptContent({
  defaultTheme = "system",
  storageKey = DEFAULT_STORAGE_KEY
}) {
  return `
(function() {
	const themes = ${JSON.stringify(themes)};
	const isTheme = (value) => typeof value === "string" && themes.includes(value);
	const fallbackTheme = "${defaultTheme}" ?? "system";
	const maybeStoredTheme = window.localStorage.getItem("${storageKey}");
	const hasStoredTheme = isTheme(maybeStoredTheme);
	if (!hasStoredTheme) {
		window.localStorage.setItem("${storageKey}", fallbackTheme);
	}
	const themePreference = hasStoredTheme ? maybeStoredTheme : fallbackTheme;
	const prefersDarkMode = window.matchMedia("${prefersDarkModeMediaQuery}").matches;
	const prefersHighContrast = window.matchMedia("${prefersHighContrastMediaQuery}").matches;
	let initialTheme = themePreference;
	if (initialTheme === "system") {
		if (prefersHighContrast) {
			initialTheme = prefersDarkMode ? "dark-high-contrast" : "light-high-contrast";
		} else {
			initialTheme = prefersDarkMode ? "dark" : "light";
		}
	}
	const htmlElement = document.documentElement;
	htmlElement.classList.remove(...themes);
	htmlElement.classList.add(initialTheme);
	htmlElement.dataset.appliedTheme = initialTheme;
	htmlElement.dataset.theme = themePreference;
})();
`.trim();
}
var MantleThemeHeadContent = ({
  defaultTheme = "system",
  storageKey = DEFAULT_STORAGE_KEY
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: preventWrongThemeFlashScriptContent({ defaultTheme, storageKey })
      }
    },
    void 0,
    false,
    {
      fileName: "packages/theme-provider/src/theme-provider.tsx",
      lineNumber: 268,
      columnNumber: 3
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PreloadFonts, {}, void 0, false, {
    fileName: "packages/theme-provider/src/theme-provider.tsx",
    lineNumber: 273,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "packages/theme-provider/src/theme-provider.tsx",
  lineNumber: 267,
  columnNumber: 2
}, this);
function useInitialHtmlThemeProps(props) {
  const { className = "", defaultTheme = "system", storageKey = DEFAULT_STORAGE_KEY } = props ?? {};
  return (0, import_react.useMemo)(() => {
    if (!isBrowser()) {
      return {
        className: clsx_default(className),
        "data-applied-theme": "system",
        "data-theme": "system"
      };
    }
    const prefersDarkMode = window.matchMedia(prefersDarkModeMediaQuery).matches;
    const prefersHighContrast = window.matchMedia(prefersHighContrastMediaQuery).matches;
    const initialTheme = getStoredTheme(storageKey, defaultTheme);
    const reolvedTheme = resolveTheme(initialTheme, { prefersDarkMode, prefersHighContrast });
    return {
      className: clsx_default(className, reolvedTheme),
      "data-applied-theme": reolvedTheme,
      "data-theme": initialTheme
    };
  }, [className, defaultTheme, storageKey]);
}

export {
  PreloadFonts,
  theme,
  isTheme,
  ThemeProvider,
  useTheme,
  preventWrongThemeFlashScriptContent,
  MantleThemeHeadContent,
  useInitialHtmlThemeProps
};
//# sourceMappingURL=/build/_shared/chunk-RTLF2Q3V.js.map
