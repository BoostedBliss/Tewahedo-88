## 2024-05-24 - O(1) Hash Map Lookup for Highlights and Bookmarks

**Learning:** During list rendering in React, calling `Array.prototype.find()` or `.some()` for every item creates an $O(N \times M)$ operation (where $N$ is verses, $M$ is highlights/bookmarks). This can cause noticeable lag during rendering, especially for long lists of elements.

**Action:** Before rendering lists, precompute a hash map (`Map` or `Set`) using `useMemo` so that lookups inside the map loop become $O(1)$. This reduces the time complexity from $O(N \times M)$ to $O(N + M)$ and noticeably speeds up interactions.
