---title: "Finite refutations in countably additive quantum probability"
category: Preprints
position: 1
contributor: "Olivia Aubone and José Iovino"
rights: "© 2026 Olivia Aubone and José Iovino. All rights reserved. Work in progress: please link to this page rather than posting copies."
summary: "We axiomatize countably additive quantum probability and prove a completeness theorem for finite refutation beyond compactness: inconsistency is witnessed by refutations each of whose branches ends in finitely many jointly unsatisfiable commitments. Adjoining the hypothesis that every event has a predetermined, context-independent outcome makes the theory inconsistent, although every finite subset of the resulting axioms has a model. For a countable theory of closed bounds on sentence values in our real-valued infinitary logic, inconsistency is equivalent to a winning strategy for a challenger in a game against a model builder. The challenger chooses each test in response to the builder's commitments, and the plays that follow a winning strategy form such a refutation. For the quantum theory with predetermined outcomes, every winning strategy must branch infinitely at some node. In the strategy we construct, countable additivity locates the four-dimensional subspace in which a finite parity argument of Kochen–Specker type applies. In their standard models, our axioms describe the closed subspaces and the density-operator probabilities of a separable infinite-dimensional complex Hilbert space. We prove in ZFC that the sets of probability values definable uniformly across standard models are exactly the σ-projective subsets of the unit interval."
top_links:
  - text: "Read the paper (PDF)"
    url: /assets/notes/GKS.pdf
  - text: "Read the note: Can quantum outcomes be fixed in advance?"
    url: /assets/notes/GKS-contributions.pdf
  - text: "Explore the 49-ray Kochen–Specker set"
    url: /assets/notes/Kochen_Specker_set.html
files:
  - text: "Finite refutations in countably additive quantum probability"
    url: /assets/notes/GKS.pdf
    label: PDF
  - text: "Can quantum outcomes be fixed in advance? A note on what the paper brings to physics, logic and mathematics"
    url: /assets/notes/GKS-contributions.pdf
    label: PDF
  - text: "arXiv:2611.05656"
    url: https://arxiv.org/abs/2611.05656
    label: arXiv
  - text: "The refutation game, animated: one play of the strategy, step by step"
    url: /assets/notes/GKS_game_animation.html
    label: Interactive
  - text: "How our finite obstructions refine the Kochen–Specker theorem: an interactive comparison"
    url: /assets/notes/Kochen_Specker_refinement.html
    label: Interactive
  - text: "The smallest Kochen–Specker set found by our computer search: an interactive picture"
    url: /assets/notes/Kochen_Specker_set.html
    label: Interactive
tags: [quantum foundations, logic]
---

## The 49-ray Kochen–Specker set

A computer search over rays with small integer coordinates, drawn from {0, ±1, ±2, ±5}, found 49 directions in three-dimensional space that contain 36 triples of mutually perpendicular directions. No way of marking the directions true or false gives every triple exactly one true direction; the best attempt satisfies 35 of the 36 triples. Deleting any one ray, together with the triples that contain it, leaves a system that can be marked. These facts were checked by a SAT solver. The set is the smallest the search has produced, in about 165,647 attempts; whether smaller sets of this kind exist is open as far as the search goes.

In the [interactive picture](/assets/notes/Kochen_Specker_set.html) you can turn the sphere and try to mark the rays yourself.
