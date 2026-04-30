---
"@ngrok/mantle": patch
---

`OtpInput.Root` now accepts a `validation` prop (`"error" | "success" | "warning" | false`, or a function returning one). When set, every slot's borders and the active focus ring are recolored with the matching validation hue, mirroring the styling contract of `Input`. `validation="error"` additionally sets `aria-invalid` on the underlying input so assistive tech announces the failure state.
