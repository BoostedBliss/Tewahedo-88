## 2025-02-28 - O(N*M) Lookup Bottleneck in React Render Loop
**Learning:** Found a specific performance bottleneck where large global state arrays (like `highlights` or `bookmarks`) were being iteratively searched inside a `map` loop for every verse rendered in a chapter. This nested O(N*M) iteration causes unnecessary rendering delays on large text blocks.
**Action:** Always memoize global arrays into O(1) structures (`Map`, `Set`) at the top of the component render cycle before iterating through long lists of items that need to perform lookups against those arrays.
