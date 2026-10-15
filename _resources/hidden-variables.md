---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Topological and logical aspects of the problem of hidden variables in quantum mechanics"

subtitle: "Lecture notes"

# Groups the index page. Free text — "Lecture notes", "Reading list",
# "Software", "Preprints", "Link" are the categories envisioned so far, but
# nothing is hard-coded; the index groups by whatever values show up. Leave it
# out and the resource lands under "Other". Spell an existing category exactly
# as it already appears elsewhere — a typo silently starts a second group.
category: Student seminar notes

# Who provided it. Plain text, not resolved against _people/ — a resource can
# come from someone with no record here, and this is attribution, not a byline.
# For a preprint this is the author list, in print order, e.g.
# "Jane Doe, John Smith, and Ada Lovelace".
contributor: "José Iovino"

rights: "© 2026 José Iovino. All rights reserved. Work in progress: please link to this page rather than posting copies."

# One plain-text sentence, shown on the index row.
summary: "Notes for students on the Bell–Kochen–Specker theorem. Bell's proof, through Gleason's Theorem, and Kochen and Specker's finite proof are linked by the compactness theorem of propositional logic; quantum measures, unlike classical ones, have no counterpart of Dirac measures and do not form a lattice; a timeline traces the history of the problem."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Topological and logical aspects of the problem of hidden variables in quantum mechanics"
    url: /assets/notes/Bell-Kochen-Specker.pdf
    label: PDF
  # - text: "arXiv preprint"
  #   url: https://arxiv.org/abs/0000.00000
  #   label: arXiv

tags: [quantum foundations, logic]
---

The compactness theorem of propositional logic converts Bell's proof of the Bell–Kochen–Specker theorem into a proof that finitely many rays, of the kind that Kochen and Specker found by hand, already exclude non-contextual hidden variables.
