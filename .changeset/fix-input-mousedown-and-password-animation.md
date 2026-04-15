---
"@ngrok/mantle": patch
---

Fix InputContainer focus ring flicker by preventing mousedown default on non-input children. Use `flushSync` in PasswordInput to animate the eye icon inline in the click handler after React commits the new icon to the DOM. Remove `pointer-events-none` from validation feedback icons.
