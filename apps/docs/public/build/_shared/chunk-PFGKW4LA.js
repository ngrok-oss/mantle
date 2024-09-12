import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/hooks/src/use-isomorphic-layout-effect.tsx
var import_react = __toESM(require_react(), 1);
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;

// packages/hooks/src/use-prefers-reduced-motion.tsx
var import_react2 = __toESM(require_react(), 1);
var query = "(prefers-reduced-motion: no-preference)";
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    const mediaQueryList = window.matchMedia(query);
    setPrefersReducedMotion(!mediaQueryList.matches);
    function listener(event) {
      setPrefersReducedMotion(!event.matches);
    }
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);
  return prefersReducedMotion;
}

// packages/hooks/src/use-random-stable-id.tsx
var import_react3 = __toESM(require_react(), 1);
var useRandomStableId = (prefix = "mantle") => (0, import_react3.useMemo)(() => randomStableId(prefix), [prefix]);
function randomStableId(prefix = "mantle") {
  const _prefix = prefix.trim() || "mantle";
  return [_prefix, randomPostfix()].join("-");
}
function randomPostfix() {
  return Math.random().toString(36).substring(2, 9);
}

export {
  useIsomorphicLayoutEffect,
  usePrefersReducedMotion,
  useRandomStableId
};
//# sourceMappingURL=/build/_shared/chunk-PFGKW4LA.js.map
