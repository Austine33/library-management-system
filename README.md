## Schema Decisions

**Why Book references Genre instead of embedding it**

Each Book stores a `genreId` foreign key pointing to a row in the Genre table,
rather than copying the genre's data inside every book record.

- **No repeated data:** "Science" is stored once. If I embedded it, the same
  text would be copied into every science book.
- **Easy updates:** Renaming a genre means changing one row, and every book
  reflects it automatically.
- **Consistency:** The database guarantees a book can only point to a genre
  that exists, so typos like "Scince" can't creep in.
- **Easy queries:** I can list all books in a genre, or count books per genre,
  using a simple relation.

**Other decisions**
- `Role` is an enum (PATRON, LIBRARIAN) so a user can only have valid roles.
- `email` is unique on User so two accounts can't share one email.