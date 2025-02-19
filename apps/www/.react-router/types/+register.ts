import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/components/preview/alert-dialog": {};
  "/components/preview/data-table": {};
  "/components/preview/hover-card": {};
  "/components/preview/pagination": {};
  "/components/preview/accordion": {};
  "/components/preview/calendar": {};
  "/components/preview/combobox": {};
  "/components/preview/popover": {};
  "/components/preview/tooltip": {};
  "/components/password-input": {};
  "/components/progress-donut": {};
  "/components/theme-provider": {};
  "/components/dropdown-menu": {};
  "/components/preview/toast": {};
  "/components/media-object": {};
  "/components/preview/flag": {};
  "/base/tailwind-variants": {};
  "/components/icon-button": {};
  "/components/inline-code": {};
  "/components/radio-group": {};
  "/components/code-block": {};
  "/components/separator": {};
  "/components/text-area": {};
  "/components/checkbox": {};
  "/components/skeleton": {};
  "/components/anchor": {};
  "/components/button": {};
  "/components/dialog": {};
  "/components/select": {};
  "/components/switch": {};
  "/components/alert": {};
  "/components/badge": {};
  "/components/input": {};
  "/components/label": {};
  "/components/sheet": {};
  "/components/table": {};
  "/base/typography": {};
  "/components/card": {};
  "/components/icon": {};
  "/components/tabs": {};
  "/base/shadows": {};
  "/base/colors": {};
};