---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Classification of bipartite observables I: stable and uniformly stable observables"

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
summary: "Part I of a series with Eduardo Dueñez. Stability of a bipartite observable as independence from the order of two idealized limits, with Grothendieck's double limit criterion as the unifying theorem."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Classification of bipartite observables I"
    url: /assets/notes/Quantum_stability.pdf
    label: PDF
  - text: "arXiv:2610.11002"
    url: https://arxiv.org/abs/2610.11002
    label: arXiv

tags: [stability, model theory, quantum information, double limits, Grothendieck]
---


When two quantum systems are prepared independently and each is driven to an
idealized limit, the expectation of a bipartite observable may depend on which
system is idealized first; we call the observable stable when it does not. We
characterize stability by the simulation of idealized preparations by finite
mixtures, show that under uniform stability the number of preparations that
\\(n\\) probes can tell apart is bounded by a polynomial in \\(n\\), and trace these
results to a single double limit criterion that appears in topology, in
functional analysis and, as Shelah's stability, in model theory.
