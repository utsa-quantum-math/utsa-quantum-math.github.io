---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Shelah's dividing lines in quantum measurement: 32 variations in three parts"

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
contributor: "José Iovino"

# One plain-text sentence, shown on the index row.
summary: "A survey of the three-part series: stability, NIP and simplicity as a classification of bipartite observables, written for model theorists and operator theorists."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Shelah's dividing lines in quantum measurement"
    url: /assets/notes/Bipartite_observables_survey.pdf
    label: PDF
  # - text: "arXiv preprint"
  #   url: https://arxiv.org/abs/0000.00000
  #   label: arXiv

tags: [stability, NIP, simplicity, model theory, operator theory, quantum information, ultrapowers]
---

A bipartite observable compares a preparation of one quantum system with a
probe of another, and its expectation is a formula of real-valued logic. The
paper is addressed to two communities, model theorists and operator theorists
working in quantum information, and uses their common tool, the ultrapower, to
translate between them. We show that three dividing lines of Shelah in model theory (stability, NIP and
simplicity) classify bipartite observables, that each has a Fraïssé limit
at its heart, and that each acquires a dictionary into physics. Stability is
the independence of a measurement from the order of two idealized limits.
NIP, the absence of the independence property, sorts physical orders, from photon numbers to the causal order of
spacetime, into the classes of the trichotomy of Todorčević. Simplicity
is met in quantum error correction, where forking separates harmless
undetectable errors from logical ones. The three parts are organized
around one theorem, the double limit criterion of Grothendieck, and each
determines what mixing quantum states does: it realizes idealized preparations when the observable
is stable, makes hereditary separability imply metrizability for NIP
observables, and, for
observables diagonal in a product basis, destroys simplicity in the presence
of the independence property.
