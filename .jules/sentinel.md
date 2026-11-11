## 2024-05-24 - [Weak PRNG for ID Generation]
**Vulnerability:** Found `Math.random().toString(36)` being used to generate unique IDs for highlights and bookmarks.
**Learning:** This is a weak PRNG which is not cryptographically secure and can lead to predictability and collisions.
**Prevention:** Always use the standard `crypto.randomUUID()` browser API for secure UUID generation.
