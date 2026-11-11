---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Classification of bipartite observables II: NIP observables and Todorčević's trichotomy"

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
summary: "This is the second paper in a series that reads the dividing lines of Shelah’s classification theory as properties of bipartite quantum observables. For an observable of two independently prepared systems, Alice’s and Bob’s, we study its idealized responses: the expectation values of Alice’s limiting preparations, as functions of Bob’s preparations, which serve as probes, with Bob’s system idealized first. We show that the observable is NIP, that is, no sequence of Alice’s preparations lets Bob’s probes realize every finite pattern of high and low values at a fixed positive gap, exactly when all idealized responses are of the first Baire class, pointwise limits of sequences of continuous functions; they then form a separable Rosenthal compactum. Because Alice can mix preparations, this compactum is convex, and hereditary separability forces it to be metrizable, so that NIP observables occupy three of the four topological classes defined by metrizability and Todorčević’s trichotomy. Comparisons of photon numbers, of positions and of events in spacetime realize these three classes, and trees of preparations realize the seven minimal families of the Argyros–Dodos–Kanellopoulos heptachotomy. For the ferromagnetic transverse-field Ising model at positive temperature, the finite-volume magnetizations with offset longitudinal fields form a stable family when the spontaneous magnetization vanishes, and a family whose closure is first countable but not hereditarily separable when it does not."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Classification of bipartite observables II"
    url: /assets/notes/Qbipartite_2_NIP.pdf
    label: PDF
  - text: "arXiv:2610.12908"
    url: https://arxiv.org/abs/2610.12908
    label: arXiv

tags: [NIP, Rosenthal compacta, Todorčević's trichotomy, model theory, quantum information, Ising model]
---

This is the second paper in a series that reads the dividing lines of Shelah’s classification theory as properties of bipartite quantum observables. For an observable of two independently prepared systems, Alice’s and Bob’s, we study its idealized responses: the expectation values of Alice’s limiting preparations, as functions of Bob’s preparations, which serve as probes, with Bob’s system idealized first. We show that the observable is NIP, that is, no sequence of Alice’s preparations lets Bob’s probes realize every finite pattern of high and low values at a fixed positive gap, exactly when all idealized responses are of the first Baire class, pointwise limits of sequences of continuous functions; they then form a separable Rosenthal compactum. Because Alice can mix preparations, this compactum is convex, and hereditary separability forces it to be metrizable, so that NIP observables occupy three of the four topological classes defined by metrizability and Todorčević’s trichotomy. Comparisons of photon numbers, of positions and of events in spacetime realize these three classes, and trees of preparations realize the seven minimal families of the Argyros–Dodos–Kanellopoulos heptachotomy. For the ferromagnetic transverse-field Ising model at positive temperature, the finite-volume magnetizations with offset longitudinal fields form a stable family when the spontaneous magnetization vanishes, and a family whose closure is first countable but not hereditarily separable when it does not.
