---
"@ngrok/mantle": patch
---

`Button` and `IconButton` now default `type` to `"button"` instead of requiring it.

The `type` prop is relaxed from required to optional on both components; when omitted it renders `type="button"`, matching the wider React ecosystem (Radix, shadcn, MUI, …) and neutralizing the native `<button>` accidental-form-submit footgun. This is backward compatible — every existing call site already passes `type`, so nothing changes for them; omitting `type` simply stops being a compile error.

Forms note: because the default is now `"button"`, a `Button`/`IconButton` that relies on **native** form submission must opt in with `type="submit"`.

When `asChild` is used, `type` continues to have no effect and is not forwarded to the child.
