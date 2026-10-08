---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Classification of bipartite observables III: simplicity and mixtures"

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
summary: "Part III of a series with Eduardo Dueñez. Simple unstable observables from the Pauli group and the Rado graph, and how mixing preparations destroys simplicity."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Classification of bipartite observables III"
    url: /assets/notes/Quantum_simple_unstable.pdf
    label: PDF
  # - text: "arXiv preprint"
  #   url: https://arxiv.org/abs/0000.00000
  #   label: arXiv

tags: [simplicity, forking, Fraïssé limits, Pauli group, quantum error correction, model theory]
---

The Pauli group on countably many qubits, taken modulo phases and with
commutation as its relation, is the Fraïssé limit of the finite spaces with
an alternating form over the two-element field, and the Rado graph is the
Fraïssé limit of the finite graphs. Both are simple unstable structures in
the sense of Shelah, and both define bipartite observables. We show that
mixing preparations destroys simplicity: for every observable with the
independence property, the theory of its mixed preparations and probes has the
tree property of the second kind, so that a simple observable has no
independence property. The two examples reach this by different routes. For
the Pauli group, actual mixtures suffice: averaging over cosets of stabilizer
groups, the index of the first parity check to fire in a block is a dividing
condition. For the Rado graph, no sequence of actual mixtures ever divides, and
the tree appears only among idealized preparations. The difference is that
the responses of the Pauli group are the characters of a compact group, while
those of the Rado graph see only marginals.
