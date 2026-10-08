---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Classification of bipartite observables III: simplicity, mixtures and quantum error correction"

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
summary: "Part III of a series with Eduardo Dueñez. The Rado graph, the paradigm of a simple unstable theory, and its counterpart in quantum error correction, the Pauli group: logical errors as forking, Pauli channels as probes, and the two routes by which mixing produces the tree property of the second kind."

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

tags: [quantum error correction, stabilizer codes, Rado graph, simplicity, forking, Fraïssé limits, Pauli group, model theory]
---

The paradigm of a simple unstable theory in the sense of Shelah is the theory
of the random graph, the Fraïssé limit of the finite graphs. Its counterpart
in quantum error correction is the Pauli group on countably many qubits, taken
modulo phases and with commutation as its relation: the Fraïssé limit of the
finite alternating spaces over the two-element field, whose form computes the
syndromes of stabilizer codes. We show that simplicity theory reads as a theory
of error correction: Clifford encoding circuits implement the homogeneity of
the limit, a logical error is an undetectable error whose type over the
stabilizer group and the logical operators forks over the stabilizer group, and
the independence theorem of Kim and Pillay is the gluing of syndromes. Both
structures define bipartite observables, and for both, mixing preparations
produces the tree property of the second kind. The two paradigms reach it by
different routes, dictated by their probes. The probes of the Pauli observable
are the Pauli channels; the indicator of each syndrome sector is the difference
of the responses of two uniform mixtures, and actual mixtures witness the tree.
The probes of the Rado observable see only marginals, conditions given by
actual mixtures are compatible on disjoint blocks, and the tree lives among
idealized preparations.
