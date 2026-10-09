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

What does it mean for one thing to be independent of another? Mathematics gives the answer many times over, for vectors, for transcendental numbers, for events, and each time for its own domain. Yet the answers agree in their laws. These lecture notes ask whether the agreement is an accident, and they answer the question for first-order theories. The answer depends on the theory, and the dependence can be stated exactly.

A theory is stable if no formula orders arbitrarily long sequences. Its types are then definable, and independence obeys all the classical laws, uniqueness of independent extensions included. A theory is treeless (simple, in the later terminology) if no formula grows a certain tree. Uniqueness is then lost, but independent extensions can still be amalgamated; the random graph and the Fraïssé limits with disjoint 3-amalgamation are the examples, and the independence theorem is the general statement. A theory has the negation of the independence property if no formula shatters arbitrarily large finite sets. The stable theories are exactly the treeless theories that have it.

A formula is a function with values 0 and 1, and nothing prevents the values from being real. Stability then becomes the exchange of two iterated limits, and Grothendieck's double limit criterion, Rosenthal's dichotomy and the reflexive Banach spaces enter. The types of the logician and the limits of the analyst are the same objects under two modes of presentation.
