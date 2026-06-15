---
"@ngrok/mantle": patch
---

Update `react-day-picker` to `10.0.1` (from `9.14.0`) and bump the `tailwindcss` peer dependency to `^4.3.1`. The `Calendar` component already used the v9+ API surface — no removed navigation/focus/event props, formatter or label aliases, or renamed `classNames` keys — so this is a transparent dependency bump with no public API changes.
