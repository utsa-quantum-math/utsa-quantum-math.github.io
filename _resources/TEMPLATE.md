---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: false

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Quantum Theory for Mathematicians"

# Groups the index page. Free text — "Lecture notes", "Reading list",
# "Software", "Link" are the categories envisioned so far, but nothing is
# hard-coded; the index groups by whatever values show up. Leave it out and
# the resource lands under "Other".
category: Reading list

# Who provided it. Plain text, not resolved against _people/ — a resource can
# come from someone with no record here, and this is attribution, not a byline.
contributor: "José A. Morales Escalante"

# One plain-text sentence, shown on the index row.
summary: "One-line description of what this is and why it is useful."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
url: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets). Same shape as
# a talk's `references:`. `url` here is a path into this repo, typically
# under _resources/, and is not filtered through the top-level `url:` above.
files:
  - text: "Lecture 1"
    url: /resources/some-folder/lecture-01.pdf
    label: PDF

tags: [topic one, topic two]
---

Optional prose. Math uses the same delimiters as everywhere else:
\\( E_i^\dagger E_j \\).
