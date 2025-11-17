---
"@ngrok/mantle": minor
---

Add Slot component with automatic className merging

Introduces a new `@ngrok/mantle/slot` component that wraps Radix UI's Slot with automatic Tailwind CSS className merging using `cx`. All internal components now use the Mantle Slot instead of importing directly from Radix UI, providing consistent className merge behavior across the design system where child classes take priority over parent classes.
