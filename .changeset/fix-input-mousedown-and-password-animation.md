---
"@ngrok/mantle": patch
---

Fix InputContainer focus ring flicker by preventing mousedown default on non-input children. Animate the PasswordInput eye icon (instead of the button) after React commits the new icon to the DOM. Remove `pointer-events-none` from validation feedback icons.
