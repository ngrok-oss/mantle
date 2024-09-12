import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// packages/compose-refs/src/compose-refs.tsx
var import_react = __toESM(require_react(), 1);
function composeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        ref.current = node;
      }
    });
  };
}

export {
  composeRefs
};
//# sourceMappingURL=/build/_shared/chunk-NG7IOVW6.js.map
