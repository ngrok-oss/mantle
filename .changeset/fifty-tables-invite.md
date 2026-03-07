---
"@ngrok/mantle": patch
---

Improve code block utility performance by speeding up indentation normalization and `fmtCode`, adding LRU caching for repeated syntax highlighting, and replacing linear language/indentation lookups with set membership checks. Also normalize CRLF input correctly, rename the indentation normalizer to `normalize-indentation`, and guard line-number expansion against excessively large ranges.
