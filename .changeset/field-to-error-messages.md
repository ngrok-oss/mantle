---
"@ngrok/mantle": patch
---

Add `toErrorMessages`, a first-class helper exported from `@ngrok/mantle/field` for normalizing TanStack React Form's mixed `field.state.meta.errors` array into a clean `string[]` for `Field.Errors`. Folds together the shapes TanStack Form yields across its built-in validators — plain strings, `{ message }` issue objects (Zod / Standard Schema), thrown `Error` instances, and the falsy slots Standard Schema can produce — into trimmed, non-empty strings without coupling Mantle to a specific form library.

```tsx
import { Field, toErrorMessages } from "@ngrok/mantle/field";

<Field.Errors messages={toErrorMessages(field.state.meta.errors)} />;
```

Also exports the `FieldError` input type (`{ message?: string } | string | null | undefined | false`) for callers that want to type their own error arrays against the helper's contract.
