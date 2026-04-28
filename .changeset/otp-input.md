---
"@ngrok/mantle": minor
---

Add `OtpInput`, a compound component for capturing one-time passcodes (OTP). Built on top of [`input-otp`](https://github.com/guilhermerodz/input-otp), it renders a single hidden input that handles paste, autofill, and IME correctly while displaying each character in its own styled slot. Composes as `OtpInput.Root` > `OtpInput.Group` > `OtpInput.Slot` with optional `OtpInput.Separator` between groups. Re-exports the `REGEXP_ONLY_DIGITS`, `REGEXP_ONLY_CHARS`, and `REGEXP_ONLY_DIGITS_AND_CHARS` pattern helpers for restricting accepted characters.
