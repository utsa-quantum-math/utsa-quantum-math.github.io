# Maintaining the Kochen–Specker visuals

Read this before editing the 49-ray explorer. Preserve the mathematical data and
interaction behavior when changing its appearance.

## Files and responsibilities

- `Kochen_Specker_set.html`: rotating sphere, assignment controls, data table.
  The `DATA` object contains coordinates `R`, normalized vectors `U`, bases `B`,
  a best assignment `best`, and its certified score `bestOk`. Drawing and input
  handlers follow it. Never change the data to achieve a visual effect.
- `ks-visual-palette.css`: **the single palette for the sphere explorer**,
  including semantic colors, light/dark overrides, and typography families.
  To change its colors, edit this file. Do not add colors to the canvas code.
- `ks49-explorer.css`: layout, spacing, responsive behavior; all colors use the
  palette's CSS custom properties. Keep colors out of this file.
- `Kochen_Specker_refinement.html`: separate certificate/provenance explanation,
  with SVG interactions and an occurrence-detachment example.
  Its layout is `ks-refinement-exhibit.css`, behavior is
  `ks-refinement-exhibit.js`, and verified configurations/witnesses are
  `ks-refinement-data.js`. It reads shared semantic colors from
  `ks-visual-palette.css`. It is not the rotating-sphere page. Updating one does not update the
  other. Keep the purple/pink identity coherent across both.

## Palette roles, not graph-specific colors

`--accent` marks a ray assigned true and primary actions. `--focus` is the pink
selection ring, independent of truth value. `--ok`, `--gap`, and `--bad` indicate
one, zero, and multiple true rays in a basis. `--line` is untouched geometry. `--detail` is a decorative accent, independent
of selection.
Status arcs also use solid, dotted and dashed patterns; labels and numerical
counts remain available. Avoid unlabelled red/green distinctions. Colors are
read through `css()` on each drawing, so palette edits require no algorithm edits.
If adding a semantic role, define it in BOTH light and dark palettes.

## Future configurations

Never assume the next graph has 49 rays or 36 bases. The algorithm derives `N`
and `NB` from the data. Update the page title, introduction, fact strip, notes,
canvas accessible label, and filename/link labels if the configuration changes.
Update all five data fields together; `best` must have length `R.length`,
`bestOk` must be verified, and indices in `B` must refer to existing vectors.
The dates and search counts in the prose describe an actual search, not a UI
counter: change them only from verified search records.

The page uses **basis constraints**. Any criticality statement must explicitly
state that removing a ray removes incident bases. This does not establish
criticality when all surviving orthogonal-pair constraints are also imposed.
Occurrence detachment on the refinement page is a different operation.

## Before publishing

1. Check light and dark themes, wide and narrow widths, actual canvas opacity,
   and readable labels. No glow, decorative icons, shadows, or rounded stat cards.
2. Test best assignment, Clear, rotation toggle, ray selection, selected-ray
   filtering, drag rotation, and all table rows. Counts must sum to `NB`.
3. Confirm that CSS links load and no console errors occur. Bump stylesheet
   query versions in the HTML whenever changing the assets to avoid stale caches.
4. Commit HTML and both stylesheets together. Publish through the repository's
   normal GitHub Pages workflow, then verify BOTH the sphere URL and refinement
   URL. Do not replace one with the other.

## Refinement exhibit invariants

Keep the branching animation, and make all terminal positions keyboard-selectable.
The drawn tree is schematic: infinite branching does NOT establish unbounded
play length. The paper leaves the existence of a bounded-length winning strategy
open. Do not restore a “no uniform bound” claim. Only plays reaching all required
parity commitments reach the parity module; earlier terminal positions exist.
The guided play is an explanatory schematic, not a complete implementation of
the model existence game. Keep its tolerance choices explicit.

Keep the full 49-ray detachment example, as well as the link to the distinct
rotating-sphere page. The 18-ray parity data and the 49-ray witness data must
remain separate. Test all 18 and 92 cases after changing the data or drawing.
Use an open composition with mathematical typography. Do not reintroduce
chat bubbles, pill controls, glow effects, or decorative diagram cards.

For mobile, the tree is recomposed vertically; dependency prerequisites have
a text view; the full parity matrix remains available in a disclosure. Avoid
shrinking a desktop diagram until its mathematical labels become unreadable.
Publish all three refinement assets with the HTML, and bump their query versions
when they change.
