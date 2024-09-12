import {
  useRandomStableId
} from "/build/_shared/chunk-PFGKW4LA.js";
import {
  NumberPropType,
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
  Anchor
} from "/build/_shared/chunk-4SICMU5M.js";
import {
  InlineCode
} from "/build/_shared/chunk-B5JUMWCL.js";
import "/build/_shared/chunk-PH4L52LR.js";
import "/build/_shared/chunk-YB45JGV3.js";
import "/build/_shared/chunk-IC4IMGCE.js";
import "/build/_shared/chunk-TYVC565J.js";
import "/build/_shared/chunk-DJ4VH3J3.js";
import "/build/_shared/chunk-UPCWMVF7.js";
import "/build/_shared/chunk-YXKBN4EE.js";
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
import "/build/_shared/chunk-3LE3N7DD.js";
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

// packages/progress/src/progress-donut.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var defaultMax = 100;
var viewboxSize = 32;
var ProgressContext = (0, import_react.createContext)({
  max: defaultMax,
  radius: 16,
  strokeWidth: "0.25rem",
  value: 0
});
var ProgressDonut = ({
  children,
  className,
  max: _max = defaultMax,
  strokeWidth: _strokeWidth = 4,
  style,
  value: _value,
  ...props
}) => {
  const max = isValidMaxNumber(_max) ? _max : defaultMax;
  const value = isValidValueNumber(_value, max) ? _value : _value == null ? 0 : "indeterminate";
  const strokeWidthPx = deriveStrokeWidthPx(_strokeWidth);
  const strokeWidthRem = pxToRem(strokeWidthPx);
  const radius = circleRadius(strokeWidthPx);
  const valueNow = isNumber(value) ? value : void 0;
  const ctx = (0, import_react.useMemo)(
    () => ({
      max,
      radius,
      strokeWidth: strokeWidthRem,
      value
    }),
    [max, radius, strokeWidthRem, value]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "svg",
    {
      "aria-valuemax": max,
      "aria-valuemin": 0,
      "aria-valuenow": valueNow,
      className: clsx_default(
        "origin-center",
        value === "indeterminate" && "animate-spin",
        value !== "indeterminate" && "-rotate-90 transform-gpu",
        cx("size-6 text-gray-200 animation-duration-[15s] dark:text-gray-300", className)
      ),
      "data-max": max,
      "data-min": 0,
      "data-value": valueNow,
      role: "progressbar",
      viewBox: `0 0 ${viewboxSize} ${viewboxSize}`,
      style: {
        "--spin-start-deg": "45deg",
        "--spin-end-deg": "405deg"
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "circle",
          {
            cx: viewboxSize / 2,
            cy: viewboxSize / 2,
            fill: "transparent",
            r: radius,
            stroke: "currentColor",
            strokeWidth: pxToRem(strokeWidthPx)
          },
          void 0,
          false,
          {
            fileName: "packages/progress/src/progress-donut.tsx",
            lineNumber: 121,
            columnNumber: 5
          },
          this
        ),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "packages/progress/src/progress-donut.tsx",
      lineNumber: 100,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "packages/progress/src/progress-donut.tsx",
    lineNumber: 99,
    columnNumber: 3
  }, this);
};
var indeterminateTailPercent = 0.6;
var ProgressDonutIndicator = ({ className, style }) => {
  const gradientId = useRandomStableId();
  const ctx = (0, import_react.useContext)(ProgressContext);
  const circumferenceValue = circumference(ctx.radius);
  const progressValue = ctx.value == "indeterminate" ? indeterminateTailPercent : ctx.value / ctx.max;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { className: cx("text-accent-600", className), style, children: [
    ctx.value == "indeterminate" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", { id: gradientId, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", { className: "stop-opacity-100 stop-color-current", offset: "0%" }, void 0, false, {
        fileName: "packages/progress/src/progress-donut.tsx",
        lineNumber: 156,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", { className: "stop-opacity-0 stop-color-current", offset: "95%" }, void 0, false, {
        fileName: "packages/progress/src/progress-donut.tsx",
        lineNumber: 157,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "packages/progress/src/progress-donut.tsx",
      lineNumber: 155,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "packages/progress/src/progress-donut.tsx",
      lineNumber: 154,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "circle",
      {
        cx: viewboxSize / 2,
        cy: viewboxSize / 2,
        fill: "transparent",
        r: ctx.radius,
        stroke: ctx.value == "indeterminate" ? `url(#${gradientId})` : "currentColor",
        strokeDasharray: circumferenceValue,
        strokeDashoffset: `${(1 - progressValue) * circumferenceValue}px`,
        strokeLinecap: "round",
        strokeWidth: ctx.strokeWidth
      },
      void 0,
      false,
      {
        fileName: "packages/progress/src/progress-donut.tsx",
        lineNumber: 161,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, true, {
    fileName: "packages/progress/src/progress-donut.tsx",
    lineNumber: 152,
    columnNumber: 3
  }, this);
};
function circleRadius(strokeWidth) {
  const value = Number.isNaN(strokeWidth) ? 4 : strokeWidth;
  const clampedStrokeWidth = clamp(value, { min: 1, max: 16 });
  return (viewboxSize - clampedStrokeWidth) / 2;
}
function clamp(value, { min, max }) {
  return Math.min(max, Math.max(min, value));
}
function pxToRem(value) {
  return `${value / 16}rem`;
}
function deriveStrokeWidthPx(strokeWidth) {
  let value = 4;
  if (strokeWidth == null) {
    return value;
  }
  if (typeof strokeWidth === "number") {
    value = strokeWidth;
  } else if (strokeWidth.endsWith("rem")) {
    value = Number(strokeWidth.replace("rem", "")) * 16;
  } else {
    value = Number(strokeWidth);
  }
  const stroke = Number.isNaN(value) ? 4 : value;
  return clamp(stroke, { min: 1, max: 12 });
}
function circumference(radius) {
  return 2 * Math.PI * radius;
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0;
}
function isValidMaxNumber(value) {
  return isNumber(value) && !Number.isNaN(value) && value > 0;
}

// app/routes/components.progress-donut.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.progress-donut.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.progress-donut.tsx"
  );
  import.meta.hot.lastModified = "1724091104715.6104";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Progress Donut"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Progress Donut" }, void 0, false, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Displays an indicator showing the completion progress of a task as a circular progress bar." }, void 0, false, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 46,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The indicator color is inherited via ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "currentColor" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 50,
          columnNumber: 43
        }, this),
        ". Override the default (",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "accent-600" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 51,
          columnNumber: 6
        }, this),
        ") by setting the",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "ProgressDonutIndicator" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 52,
          columnNumber: 6
        }, this),
        "'s text color."
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { className: "flex-col gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonut, { value: 60, className: "size-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonutIndicator, {}, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 57,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 56,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonut, { value: 60, className: "size-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonutIndicator, { className: "text-fuchsia-600" }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 61,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 60,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-1.5 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonut, { value: 100, className: "size-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonutIndicator, {}, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 67,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 66,
                columnNumber: 9
              }, this),
              "Data transfer out"
            ] }, void 0, true, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 65,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-1.5 text-xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid w-6 place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonut, { value: 100, className: "size-4", strokeWidth: "0.315rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonutIndicator, {}, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 75,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 74,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 73,
                columnNumber: 9
              }, this),
              "Included"
            ] }, void 0, true, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 72,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-1.5 text-xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid w-6 place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonut, { className: "size-4", value: "indeterminate", strokeWidth: "0.315rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonutIndicator, {}, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 84,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 83,
                columnNumber: 10
              }, this) }, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 82,
                columnNumber: 9
              }, this),
              "Additional"
            ] }, void 0, true, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 81,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 64,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 55,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 93,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut value={60} className="size-10">
										<ProgressDonutIndicator />
									</ProgressDonut>

									<ProgressDonut value={60} className="size-10">
										<ProgressDonutIndicator className="text-fuchsia-600" />
									</ProgressDonut>

									<div className="flex flex-col gap-2">
										<div className="flex items-center gap-1.5 text-sm">
											<ProgressDonut value={100} className="size-6">
												<ProgressDonutIndicator />
											</ProgressDonut>
											Data transfer out
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={100} className="size-4" strokeWidth="0.315rem">
													<ProgressDonutIndicator />
												</ProgressDonut>
											</div>
											Included
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={25} className="size-4" strokeWidth="0.315rem">
													<ProgressDonutIndicator className="text-success-600" />
												</ProgressDonut>
											</div>
											Additional
										</div>
									</div>
								` }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 94,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 91,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.progress-donut.tsx",
      lineNumber: 44,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "indeterminate", className: "text-3xl font-medium", children: "Indeterminate Value" }, void 0, false, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 137,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "You can set the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "value" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 141,
          columnNumber: 22
        }, this),
        " prop to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: '"indeterminate"' }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 141,
          columnNumber: 61
        }, this),
        " to show the progress bar in an indeterminate state."
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 140,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonut, { className: "size-10", value: "indeterminate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonutIndicator, {}, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 147,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 146,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 145,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 152,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut className="size-10" value="indeterminate">
										<ProgressDonutIndicator />
									</ProgressDonut>
								` }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 153,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 151,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 150,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 144,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.progress-donut.tsx",
      lineNumber: 136,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "dynamic-colors", className: "text-3xl font-medium", children: "Dynamic Colors" }, void 0, false, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 165,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The color of the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "ProgressDonutIndicator" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 169,
          columnNumber: 23
        }, this),
        " is inherited from the parent text color using",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "currentColor" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 170,
          columnNumber: 6
        }, this),
        ". Using this, you can easily change the color of it based on the current progress value."
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 168,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-w-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DynamicColorsExample, {}, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 176,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 175,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 174,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 181,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									const Example = () => {
										const [value, setValue] = useState(0);

										function computeColor() {
											switch (true) {
												case value <= 20:
													return "text-accent-600";
												case value <= 40:
													return "text-success-600";
												case value <= 60:
													return "text-warning-600";
												case value <= 80:
													return "text-fuchsia-600";
												default:
													return "text-danger-600";
											}
										};

										return (
											<form className="space-y-4">
												<ProgressDonut value={value} className="size-10">
													<ProgressDonutIndicator className={computeColor()} />
												</ProgressDonut>
												<label className="block space-y-1">
													<p>Value:</p>
													<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} /> (
													{value}%)
												</label>
											</form>
										);
									};
								` }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 182,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 180,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 179,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 173,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.progress-donut.tsx",
      lineNumber: 164,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "api", className: "text-3xl font-medium", children: "API Reference" }, void 0, false, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 222,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-body text-xl text-body", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: "ProgressDonut" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 226,
          columnNumber: 10
        }, this),
        " accepts the following props in addition to the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor, { href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg#attributes", children: "standard HTML svg attributes" }, void 0, false, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 227,
          columnNumber: 6
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 225,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropsTable, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "max", optional: true }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 234,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NumberPropType, {}, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 236,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 235,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NumberPropType, { value: 100 }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 239,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 238,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "The maximum value of the progress bar. This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0. The default value is 100." }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 242,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 241,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 233,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "strokeWidth", optional: true }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 250,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NumberPropType, {}, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 254,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 253,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "`${number}rem`" }, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 257,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 256,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 252,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 251,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "0.25rem" }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 262,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 261,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "The width of the progress bar stroke. Note, we clamp the stroke width to a minimum of 1px and max of 12px since it is proportional to the viewbox size (0 0 32 32)." }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 265,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 264,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 249,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropNameCell, { name: "value", optional: true }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 272,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropTypeCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NumberPropType, {}, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 276,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 275,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringPropType, { value: "indeterminate" }, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 279,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 278,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 274,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 273,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDefaultValueCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NumberPropType, { value: 0 }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 284,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 283,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropDescriptionCell, { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "The current value of the progress bar. This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 100 if max is omitted." }, void 0, false, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 287,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "If set to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineCode, { children: '"indeterminate"' }, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 293,
                columnNumber: 19
              }, this),
              ", the progress bar is considered",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "indeterminate" }, void 0, false, {
                fileName: "app/routes/components.progress-donut.tsx",
                lineNumber: 294,
                columnNumber: 9
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/routes/components.progress-donut.tsx",
              lineNumber: 292,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.progress-donut.tsx",
            lineNumber: 286,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.progress-donut.tsx",
          lineNumber: 271,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 232,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.progress-donut.tsx",
      lineNumber: 221,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.progress-donut.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c = Page;
var DynamicColorsExample = () => {
  _s();
  const [value, setValue] = (0, import_react2.useState)(0);
  function computeColor() {
    switch (true) {
      case value <= 20:
        return "text-accent-600";
      case value <= 40:
        return "text-success-600";
      case value <= 60:
        return "text-warning-600";
      case value <= 80:
        return "text-fuchsia-600";
      default:
        return "text-danger-600";
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonut, { value, className: "size-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressDonutIndicator, { className: computeColor() }, void 0, false, {
      fileName: "app/routes/components.progress-donut.tsx",
      lineNumber: 322,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/components.progress-donut.tsx",
      lineNumber: 321,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Value:" }, void 0, false, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 325,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "range", min: 0, max: 100, value, onChange: (e) => setValue(Number(e.target.value)) }, void 0, false, {
        fileName: "app/routes/components.progress-donut.tsx",
        lineNumber: 326,
        columnNumber: 5
      }, this),
      " (",
      value,
      "%)"
    ] }, void 0, true, {
      fileName: "app/routes/components.progress-donut.tsx",
      lineNumber: 324,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.progress-donut.tsx",
    lineNumber: 320,
    columnNumber: 10
  }, this);
};
_s(DynamicColorsExample, "qPBOvRc2Co1iWTsdTL0g7j/rpjU=");
_c2 = DynamicColorsExample;
var _c;
var _c2;
$RefreshReg$(_c, "Page");
$RefreshReg$(_c2, "DynamicColorsExample");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.progress-donut-CIFTAFXD.js.map
