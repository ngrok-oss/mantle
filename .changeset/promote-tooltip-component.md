---
"@ngrok/mantle": minor
---

Promote Tooltip component out of preview

The Tooltip component has been promoted from preview to stable. This includes:

- Updated documentation route from `/components/preview/tooltip` to `/components/tooltip`
- Updated all JSDoc URLs to reflect the new documentation path
- Added comprehensive API reference for TooltipProvider, Tooltip.Root, Tooltip.Trigger, and Tooltip.Content
- Improved tooltip arrow styling with proper positioning and background matching
- Fixed Tailwind 4 dev mode class scanning by adding `@source "../src"` to mantle.css
