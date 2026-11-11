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
summary: "This is the third paper in a series that reads the dividing lines of Shelah’s classification theory as properties of bipartite quantum observables. Here we study simplicity through two countable structures with simple unstable theories: the Rado graph, and the symplectic space of labels of Pauli strings of finite support, in which addition records the products of the strings and the symplectic form records their commutation. In the second structure, forking characterizes the logical errors of stabilizer codes on finitely many qubits: an error undetectable by the checks of a code is logical exactly when its type over the stabilizer labels and a complete set of logical-operator labels forks over the stabilizer labels, and the independence theorem has a finite-dimensional counterpart, a rule for gluing syndromes. A two-valued relation between nonempty countable sets of labels defines a diagonal bipartite observable, whose real-valued theory describes Alice’s probability mixtures of labels and their expected responses at Bob’s probes. Mixing changes the classification: if the relation has the independence property, this theory has the tree property of the second kind. For the observable of the symplectic form, actual mixtures of checks witness this property for the response itself; for the observable of the Rado graph, every array that witnesses it for a quantifier-free formula in Bob’s probe contains idealized preparations, which lie outside the original structure."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Classification of bipartite observables III"
    url: /assets/notes/Qbipartite_3_simple_unstable.pdf
    label: PDF
  # - text: "arXiv preprint"
  #   url: https://arxiv.org/abs/0000.00000
  #   label: arXiv

tags: [quantum error correction, stabilizer codes, Rado graph, simplicity, forking, Fraïssé limits, Pauli group, model theory]
---

This is the third paper in a series that reads the dividing lines of Shelah’s classification theory as properties of bipartite quantum observables. Here we study simplicity through two countable structures with simple unstable theories: the Rado graph, and the symplectic space of labels of Pauli strings of finite support, in which addition records the products of the strings and the symplectic form records their commutation. In the second structure, forking characterizes the logical errors of stabilizer codes on finitely many qubits: an error undetectable by the checks of a code is logical exactly when its type over the stabilizer labels and a complete set of logical-operator labels forks over the stabilizer labels, and the independence theorem has a finite-dimensional counterpart, a rule for gluing syndromes. A two-valued relation between nonempty countable sets of labels defines a diagonal bipartite observable, whose real-valued theory describes Alice’s probability mixtures of labels and their expected responses at Bob’s probes. Mixing changes the classification: if the relation has the independence property, this theory has the tree property of the second kind. For the observable of the symplectic form, actual mixtures of checks witness this property for the response itself; for the observable of the Rado graph, every array that witnesses it for a quantifier-free formula in Bob’s probe contains idealized preparations, which lie outside the original structure.
