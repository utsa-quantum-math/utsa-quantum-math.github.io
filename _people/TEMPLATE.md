---
# Canonical schema for a person. Copy this file to _people/<surname>-<given>.md
# and delete what does not apply. Excluded from the build.
#
# The file name matters: the /people/ index sorts on it, so lead with the
# surname. Use ASCII in the file name even when the name carries diacritics
# (Dueñez -> duenez-eduardo.md).

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the person will not appear.
published: false

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

Talks the person has given are listed automatically on their page. A talk
joins them by setting `speaker:` to this file's name without the `.md`, so
renaming the person is safe — renaming the *file* is what breaks the link.
