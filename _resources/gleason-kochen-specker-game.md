---
title: "Finite refutations in countably additive quantum probability"
category: Preprints
author_sort: "Aubone Iovino  Finite refutations in countably additive quantum probability"
contributor: "Olivia Aubone and José Iovino"
rights: "© 2026 Olivia Aubone and José Iovino. All rights reserved. Work in progress: please link to this page rather than posting copies."
summary: "The page shows an interactive picture of a 49-ray Kochen–Specker set found by our computer search, and links to the paper, a note on its contributions, and an animation of the refutation game."
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

<div class="ks49-embed" style="margin:1rem 0 1.5rem">
<iframe src="/assets/notes/Kochen_Specker_set.html" title="The 49-ray Kochen–Specker set: an interactive picture" loading="lazy" style="display:block;width:100%;height:900px;border:1px solid #e3dce8;border-radius:10px;background:#fff"></iframe>
</div>

A computer search over rays with small integer coordinates, drawn from {0, ±1, ±2, ±5}, found 49 directions in three-dimensional space that contain 36 triples of mutually perpendicular directions. No way of marking the directions true or false gives every triple exactly one true direction; the best attempt satisfies 35 of the 36 triples. Deleting any one ray, together with the triples that contain it, leaves a system that can be marked. These facts were checked by a SAT solver. The set is the smallest the search has produced, in about 165,647 attempts; whether smaller sets of this kind exist is open as far as the search goes.

Turn the sphere above and try to mark the rays yourself; the picture also opens [on its own page](/assets/notes/Kochen_Specker_set.html).
