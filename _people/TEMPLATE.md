---
# Canonical schema for a person. Copy this file to _people/<surname>-<given>.md
# and delete what does not apply. Excluded from the build.
#
# The file name matters: the /people/ index sorts on it, so lead with the
# surname. Use ASCII in the file name even when the name carries diacritics
# (Dueñez -> duenez-eduardo.md).

# REQUIRED. The person's name, as they write it. This is the page title.
title: Ada Lovelace

# REQUIRED. One of the ids in _data/people_groups.yml.
group: faculty

# Academic rank or standing. Free text, printed verbatim.
rank: Assistant Professor

# For collaborators outside the Department of Mathematics. Omit `department`
# for department members; omit `institution` for anyone at UTSA.
department: Computer Science
institution: Texas A&M San Antonio

# An extra hat the person wears, printed as a flag on the index.
role: Student seminar coordinator

email: ada.lovelace@utsa.edu

# Official profile page, personal site, or both. Any that are absent simply
# produce no button.
profile: https://sciences.utsa.edu/faculty/profiles/lovelace-ada.html
website: https://example.edu/~lovelace

# Free-form list, printed as tags. Lower case unless a proper noun.
interests:
  - analytic number theory
  - quantum error correction
---

Optional prose. A paragraph or two, no more — this is a directory, not a CV.
Math uses the same delimiters as everywhere else: \\( E_i^\dagger E_j \\).

Talks the person has given are listed automatically on their page; they are
matched by `speaker.name` on the talk record, so it must equal `title` here
exactly.
