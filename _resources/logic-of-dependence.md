---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Tame and wild theories"

subtitle: "An introduction to the logic of dependence and independence"

# Groups the index page. Free text — "Lecture notes", "Reading list",
# "Software", "Preprints", "Link" are the categories envisioned so far, but
# nothing is hard-coded; the index groups by whatever values show up. Leave it
# out and the resource lands under "Other". Spell an existing category exactly
# as it already appears elsewhere — a typo silently starts a second group.
category: Lecture notes

# Who provided it. Plain text, not resolved against _people/ — a resource can
# come from someone with no record here, and this is attribution, not a byline.
# For a preprint this is the author list, in print order, e.g.
# "Jane Doe, John Smith, and Ada Lovelace".
contributor: "José Iovino"

rights: "© 2026 José Iovino. All rights reserved. Work in progress: please link to this page rather than posting copies."

# One plain-text sentence, shown on the index row.
summary: "An introduction to the logic of dependence and independence: stable, NIP and simple theories, from forbidden configurations to calculi of independence."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Tame and wild theories: An introduction to the logic of dependence and independence"
    url: /assets/notes/logic_of_dependence.pdf
    label: PDF
  # - text: "arXiv preprint"
  #   url: https://arxiv.org/abs/0000.00000
  #   label: arXiv

tags: [dependence, independence, stability, NIP, simplicity, VC-dimension, forking, random graph, Fraïssé limits, model theory]
---

Mathematics is full of independence: of vectors, of transcendental numbers, of events. In each case the notion obeys recognizably the same laws. These lecture notes ask when those laws hold in a first-order theory, and find the answer in Shelah's dividing lines. Stable theories, defined by forbidding long orders, carry a unique notion of independent extension, built on definability of types and on Grothendieck's double limit criterion. NIP theories, the negation of the independence property, are characterized by convergent subsequences and VC-dimension. Simple theories, Shelah's treeless theories, lose uniqueness but keep amalgamation: dividing and the tree property, the Rado graph and Fraïssé limits, dividing along Morley sequences, the symmetry of forking, the independence theorem, and the characterization of these theories by their independence relations.