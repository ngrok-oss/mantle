import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Check.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/lib/IconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/lib/context.mjs
var import_react = __toESM(require_react(), 1);
var o = (0, import_react.createContext)({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/lib/IconBase.mjs
var y = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty;
var g = Object.prototype.propertyIsEnumerable;
var d = (t3, o2, e2) => o2 in t3 ? y(t3, o2, { enumerable: true, configurable: true, writable: true, value: e2 }) : t3[o2] = e2;
var l = (t3, o2) => {
  for (var e2 in o2 || (o2 = {}))
    f.call(o2, e2) && d(t3, e2, o2[e2]);
  if (c)
    for (var e2 of c(o2))
      g.call(o2, e2) && d(t3, e2, o2[e2]);
  return t3;
};
var a = (t3, o2) => {
  var e2 = {};
  for (var r2 in t3)
    f.call(t3, r2) && o2.indexOf(r2) < 0 && (e2[r2] = t3[r2]);
  if (t3 != null && c)
    for (var r2 of c(t3))
      o2.indexOf(r2) < 0 && g.call(t3, r2) && (e2[r2] = t3[r2]);
  return e2;
};
var h = (0, import_react2.forwardRef)((t3, o2) => {
  const m2 = t3, {
    alt: e2,
    color: r2,
    size: n2,
    weight: s2,
    mirrored: p2,
    children: u,
    weights: C
  } = m2, v = a(m2, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), x = (0, import_react2.useContext)(o), {
    color: B = "currentColor",
    size: i2,
    weight: I = "regular",
    mirrored: E = false
  } = x, R = a(x, [
    "color",
    "size",
    "weight",
    "mirrored"
  ]);
  return /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    l(l({
      ref: o2,
      xmlns: "http://www.w3.org/2000/svg",
      width: n2 != null ? n2 : i2,
      height: n2 != null ? n2 : i2,
      fill: r2 != null ? r2 : B,
      viewBox: "0 0 256 256",
      transform: p2 || E ? "scale(-1, 1)" : void 0
    }, R), v),
    !!e2 && /* @__PURE__ */ import_react2.default.createElement("title", null, e2),
    u,
    C.get(s2 != null ? s2 : I)
  );
});
h.displayName = "IconBase";
var b = h;

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/Check.mjs
var import_react3 = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Check.mjs
var f2 = Object.defineProperty;
var i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var h2 = Object.prototype.propertyIsEnumerable;
var m = (o2, e2, r2) => e2 in o2 ? f2(o2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : o2[e2] = r2;
var a2 = (o2, e2) => {
  for (var r2 in e2 || (e2 = {}))
    s.call(e2, r2) && m(o2, r2, e2[r2]);
  if (t2)
    for (var r2 of t2(e2))
      h2.call(e2, r2) && m(o2, r2, e2[r2]);
  return o2;
};
var c2 = (o2, e2) => i(o2, p(e2));
var w2 = (0, import_react4.forwardRef)((o2, e2) => /* @__PURE__ */ import_react4.default.createElement(b, c2(a2({ ref: e2 }, o2), { weights: t })));
w2.displayName = "Check";

// node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

export {
  invariant,
  b,
  w2 as w
};
//# sourceMappingURL=/build/_shared/chunk-L6J2GUHO.js.map
