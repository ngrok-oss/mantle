---
"@ngrok/mantle": patch
---

Add horizontal overflow scrolling to `Tabs.List` with scroll-position-aware edge shadows. When the tab list overflows its container it scrolls horizontally; fade shadows appear on whichever sides have hidden content and disappear when you reach an edge or when there is no overflow. Keyboard arrow-key navigation smoothly scrolls the focused trigger into view. Scroll bounce is disabled on the list.
