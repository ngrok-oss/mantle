---
"@ngrok/mantle": patch
---

Add explicit generic type parameters to `isValidElement` calls in `Button` and `Slot` for React 19 type compatibility. React 19 changed `ReactElement.props` from `any` to `unknown`, requiring explicit type annotations to access props safely. This change is fully backwards compatible with React 18.
