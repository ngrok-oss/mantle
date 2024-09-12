import {
  useLayoutEffect2
} from "/build/_shared/chunk-UPCWMVF7.js";
import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.4_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
var React = __toESM(require_react(), 1);
function useSize(element) {
  const [size, setSize] = React.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}

export {
  useSize
};
//# sourceMappingURL=/build/_shared/chunk-IC4IMGCE.js.map
