---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Classification of bipartite observables II: NIP observables and the Todorčević trichotomy"

# Groups the index page. Free text — "Lecture notes", "Reading list",
# "Software", "Preprints", "Link" are the categories envisioned so far, but
# nothing is hard-coded; the index groups by whatever values show up. Leave it
# out and the resource lands under "Other". Spell an existing category exactly
# as it already appears elsewhere — a typo silently starts a second group.
category: Preprints

# Who provided it. Plain text, not resolved against _people/ — a resource can
# come from someone with no record here, and this is attribution, not a byline.
# For a preprint this is the author list, in print order, e.g.
# "Jane Doe, John Smith, and Ada Lovelace".
contributor: "Eduardo Dueñez and José Iovino"

# One plain-text sentence, shown on the index row.
summary: "Part II of a series with Eduardo Dueñez. NIP observables, Rosenthal compacta, and the Todorčević trichotomy, with physical orders in each class and the transverse-field Ising model."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Classification of bipartite observables II"
    url: /assets/notes/Quantum_NIP.pdf
    label: PDF
  # - text: "arXiv preprint"
  #   url: https://arxiv.org/abs/0000.00000
  #   label: arXiv

tags: [NIP, Rosenthal compacta, Todorčević trichotomy, model theory, quantum information, Ising model]
---


A bipartite observable is NIP exactly when its idealized responses are of the
first Baire class, so that they form a Rosenthal compactum and the Todorčević
trichotomy acquires a physical meaning. Each of its three classes contains a
physical order (the comparison of photon numbers, the comparison of positions,
and the causal order of spacetime), and for the Ising model in a transverse
field the responses of the symmetric state in the ordered phase form an
uncountable discrete set.
