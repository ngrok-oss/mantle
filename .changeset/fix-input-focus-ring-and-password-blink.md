---
"@ngrok/mantle": patch
---

Fix Input focus ring showing as black when clicking the PasswordInput visibility toggle by using `focus-within` for both ring size and color. Add a blink animation to the PasswordInput eye icon toggle that respects `prefers-reduced-motion`.
