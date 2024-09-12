// packages/types/src/booleanish.tsx
function parseBooleanish(value) {
  if (typeof value === "boolean") {
    return value;
  } else {
    return value === "true";
  }
}

export {
  parseBooleanish
};
//# sourceMappingURL=/build/_shared/chunk-ATBEVGT6.js.map
