---
# Canonical schema for a resource. Copy this file to _resources/<slug>.md and
# delete what does not apply. Excluded from the build.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the resource will not appear.
published: true

# REQUIRED. The resource's name. This is the page title and the index row.
title: "Shelah's dividing lines in quantum measurement: 30 variations in three parts"

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
summary: "In this memoir we show that Shelah’s dividing lines become, through bipartite observables, distinctions among quantum measurements. Ultrapowers, an instrument common to logic and operator theory, supply the account of idealization on which these distinctions rest. An observable is stable exactly when the two orders of idealization agree, and the idealized responses of a stable observable are then approximated uniformly by finite mixtures of actual preparations, with the probing system idealized first; the uniform form of stability controls adaptive discrimination and fixed-threshold prediction at every positive margin. NIP, the absence of the independence property, sorts physical orders, from the counting of photons to the causal order of a spacetime with one dimension of space, by the topology of their limiting responses, through Todorčević’s trichotomy. Simplicity is at work in quantum error correction, where forking separates, among the nontrivial errors that no check detects, those that do no harm from those that do. Mixing, the operation that distinguishes quantum observables from arbitrary formulas, leaves its mark on each line, and on the last most sharply: for diagonal observables, mixing turns the independence property of the pure responses into the tree property of the second kind, so that a simple diagonal observable is NIP. For the Pauli group, actual mixtures of checks already witness this tree property, whereas for the random graph no quantifier-free formula in one probe variable has a tree property witnessed by actual preparations. We formulate the physical examples for the logician, and explain types and independence to the physicist and operator theorist. Both will find a single theorem of Grothendieck at the bottom of stability, and its broken form beneath NIP. A reader who belongs to neither community may also read the memoir, provided that ultrafilters hold no terrors, being less alarming than their name."

# For a single external link (a book, a repo, a website). Omit if this
# resource is one or more local files instead — use `files:` for those.
# link: https://example.edu/resource

# For one or more local files (lecture notes, slides, datasets, a preprint
# PDF). Same shape as a talk's `references:`. `url` here is a path under
# assets/resources/ in this repo — an arXiv or DOI link can sit alongside a
# local PDF as another entry in the same list.
files:
  - text: "Shelah's dividing lines in quantum measurement"
    url: /assets/notes/Qbipartite_survey.pdf
    label: PDF
  # - text: "arXiv preprint"
  #   url: https://arxiv.org/abs/0000.00000
  #   label: arXiv

tags: [stability, NIP, simplicity, model theory, operator theory, quantum information, ultrapowers]
---

In this memoir we show that Shelah’s dividing lines become, through bipartite observables, distinctions among quantum measurements. Ultrapowers, an instrument common to logic and operator theory, supply the account of idealization on which these distinctions rest. An observable is stable exactly when the two orders of idealization agree, and the idealized responses of a stable observable are then approximated uniformly by finite mixtures of actual preparations, with the probing system idealized first; the uniform form of stability controls adaptive discrimination and fixed-threshold prediction at every positive margin. NIP, the absence of the independence property, sorts physical orders, from the counting of photons to the causal order of a spacetime with one dimension of space, by the topology of their limiting responses, through Todorčević’s trichotomy. Simplicity is at work in quantum error correction, where forking separates, among the nontrivial errors that no check detects, those that do no harm from those that do. Mixing, the operation that distinguishes quantum observables from arbitrary formulas, leaves its mark on each line, and on the last most sharply: for diagonal observables, mixing turns the independence property of the pure responses into the tree property of the second kind, so that a simple diagonal observable is NIP. For the Pauli group, actual mixtures of checks already witness this tree property, whereas for the random graph no quantifier-free formula in one probe variable has a tree property witnessed by actual preparations. We formulate the physical examples for the logician, and explain types and independence to the physicist and operator theorist. Both will find a single theorem of Grothendieck at the bottom of stability, and its broken form beneath NIP. A reader who belongs to neither community may also read the memoir, provided that ultrafilters hold no terrors, being less alarming than their name.
