# CLAUDE.md

Context for anyone (human or Claude Code) working on this repository.

## What this is

The site of the quantum mathematics research group in the Department of
Mathematics at The University of Texas at San Antonio. It exists because the
group's official page lives in a university CMS that nobody in the group can
edit: every change is an IT ticket with a multi-day turnaround, and the result
cannot hold abstracts, slides, flyers, or links.

This site is user-owned and user-controlled. The design goal is that adding a
seminar talk takes ninety seconds and requires nobody's permission.

## The central design decision

A seminar meeting is a **record**, not a page. One Markdown file in `_talks/`
holds structured front matter plus a free-form abstract. Everything else — the
meeting page, the series index, the archive, the calendar feed, the RSS feed,
and (later) the flyer — is a *view* of that record.

Consequence: **never hand-write a listing.** If something needs to appear in
two places, it belongs in front matter and the two places both read it.

## Stack

- Jekyll 4.3, built by GitHub Actions (`.github/workflows/build.yml`), not by
  the legacy Pages builder. This is deliberate: it unlocks arbitrary plugins
  and Jekyll versions.
- No theme gem. Layouts and CSS are ours, in `_layouts/`, `_includes/`, and
  `assets/css/site.css`. Do not introduce Minimal Mistakes, AcademicPages, or
  `github-pages` (the metagem pins an old Jekyll and defeats the point).
- No JS framework, no build step beyond Jekyll. KaTeX loads from a CDN.
- Ruby pinned in `.ruby-version`. `Gemfile.lock` is committed.

Local loop:

```
bundle install
bundle exec jekyll serve --livereload
```

## Collections and schema

| Collection  | Directory     | URL              |
|-------------|---------------|------------------|
| `talks`     | `_talks/`     | `/talks/:name/`  |
| `series`    | `_series/`    | `/seminars/:name/` |
| `people`    | `_people/`    | `/people/:name/` |
| `resources` | `_resources/` | `/resources/:name/` |
| news        | `_posts/`     | `/news/:year/:month/:day/:title/` |

`_talks/TEMPLATE.md` is the canonical schema and is excluded from the build.
Required keys: `series`, `date`, `end`, `title`, `speaker`. Everything
else is optional and the templates test for presence before rendering, so an
absent `slides:` key simply means no slides button.

`series` on a talk must match the `slug` of a file in `_series/`.

`speaker` on a talk is either a slug into `_people/` or an inline mapping with
`name`/`affiliation`/`url` for a visitor who has no record. Both forms are
resolved in one place, `_includes/speaker.html`, which assigns `sp_name`,
`sp_affiliation`, `sp_href` and `sp_unresolved` for its caller; every consumer
— talk page, listing row, RSS, both `.ics` — goes through it, so speaker
display is changed there and nowhere else. A slug that matches no record
renders as "unknown speaker: &lt;slug&gt;" rather than a blank byline.

A talk may set a top-level `affiliation:` to override the person record for
that meeting alone. A record says where someone is now; a talk says where they
were then, and the two drift — Jingbo Liu spoke in February 2026 from Texas
A&M and is now a visiting professor here.

`_people/TEMPLATE.md` is the equivalent schema for a person, also excluded.
Required keys: `title` (the person's name — a person record's title *is* their
name) and `group`. `group` must match an `id` in `_data/people_groups.yml`; a
value that does not is not silently dropped, it surfaces under an "Ungrouped"
heading on `/people/` so the typo is visible.

`_resources/TEMPLATE.md` is the equivalent schema for a resource, also
excluded. Only `title` is required. `category` is free text that groups
`/resources/` into sections — "Lecture notes", "Reading list", "Software" and
"Preprints" are the ones in use, but the index groups by whatever values show
up, so a typo silently starts a second section rather than erroring. A
resource holds either a single `url:` (an external link) or one or more
`files:` (local downloads, same `{text, url, label}` shape as a talk's
`references:`); a `files:` entry can point at a local PDF under
`assets/resources/` or at an external link (arXiv, DOI) in the same list.
**Preprints authored by the group** are resources with `category: Preprints`:
the PDF goes under `assets/resources/preprints/`, `contributor:` holds the
author list in print order, and the abstract goes in the body like a talk's
abstract. See "Adding a resource or preprint" below.

## Conventions that are easy to violate

**Timezones.** Every `date:` and `end:` carries an explicit UTC offset:
`-05:00` during CDT (March–November), `-06:00` during CST. Do not omit it. The
site renders in `America/Chicago` (set in `_config.yml`), and the `.ics`
templates emit `TZID=America/Chicago` with a `VTIMEZONE` block, so an explicit
offset is what keeps the two consistent across the DST boundary.

**Math delimiters.** Use `\\(` … `\\)` for inline and `\\[` … `\\]` for
display, doubling the backslash. Markdown consumes a single `\(` as an escaped
parenthesis; the doubling is what makes `\(` survive into the HTML for KaTeX
to find. Avoid `$$`, which kramdown intercepts. `input: GFM` is set partly
because GFM does not treat intra-word underscores as emphasis, which is what
keeps `E_i^\dagger E_j` from turning into italics. Verified against a real
build: kramdown emits `\(` … `\)` into the HTML, matching the delimiter list
in `_includes/katex.html`, and `E_i^\dagger E_j` survives unmangled.

**Future dates.** `future: true` is set in `_config.yml` and must stay set.
Jekyll otherwise drops future-dated documents from collections as well as
from `_posts`, which silently removes every upcoming talk from the seminar
index, the archive, and both feeds — the opposite of what this site is for.

**Terms, not bare years.** Listings print "Spring 2025" rather than "2025",
computed by `_includes/term.html`: January–May is Spring, June–July Summer,
August–December Fall. A bare year does not say which academic year a talk
belongs to — January and September of the same calendar year sit in different
ones — and the listing rows are otherwise identical whether a talk is from
this month or from 2021.

**The academic year runs 1 August to 31 July.** `/seminars/` splits on it:
this year's meetings under "This academic year", everything older under
"Archived (past) talks". Nothing normally happens in June or July, so the
boundary falls in a gap. The split is computed from `site.time`, so it rolls
over on its own — the nightly rebuild in `build.yml` is what makes that
happen without a push. Dates are compared as `YYYYMMDD` integers because
Liquid will not order a Time against a constructed value.

**`summary:`** is plain text with no LaTeX. It goes into calendar entries,
which cannot render math.

**Never delete a talk.** Set `canceled: true`. Deleting breaks circulated
links and erases the record.

**Never add a UTSA logo, wordmark, or the Roadrunner.** Palette only. The
footer disclaimer stating that this is not an official university publication
stays.

## Design tokens

Defined at the top of `assets/css/site.css`.

- Midnight `#032044` — structure, headings, masthead, date chips
- Terracotta `#b5502a` (dark `#8c3d1f`) — links and accents, desaturated from
  UTSA's `#F15A22` so it reads scholarly rather than athletic
- Paper `#fdfcfa`, sunk `#f4f1ea`, rules `#e0ddd4`
- Ink `#1f1f1c`, muted `#5f5f58`, faint `#7a7a72`
- Source Serif 4 for headings and prose; system sans for UI chrome
- Measure capped at 34rem for prose

Restraint is the point. No hero images, no cards with shadows, no motion.

## Adding a new series

1. Add `_series/<slug>.md` with `slug`, `title`, `subtitle`, `start`,
   `active: true`, `calendar: /seminars/<slug>.ics`.
2. Copy `seminars/qec-2026-fall.ics` to `seminars/<slug>.ics` and change the
   two occurrences of the slug in its front matter. (Per-series calendars are
   one file each because generating them dynamically needs a plugin; see
   Known rough edges.)
3. Talks join it by setting `series: <slug>`.

## Adding a person

1. Copy `_people/TEMPLATE.md` to `_people/<surname>-<given>.md`. The file name
   is load-bearing: `/people/` sorts on it, so lead with the surname. Keep the
   file name ASCII even when the name has diacritics — `Dueñez` is
   `duenez-eduardo.md`, and the diacritics live in `title:`.
2. Set `group:` to an id from `_data/people_groups.yml`. New categories go in
   that file; the index reads it for both grouping and order.
3. A person's page lists the talks they have given. Talks join by setting
   `speaker: <file name without .md>`, so renaming a person is free but
   renaming their *file* breaks every talk pointing at it.

## Adding a resource or preprint

Full contributor-facing steps are in `CONTRIBUTING.md`. Short version:

1. Put the file(s) under `assets/resources/` — a preprint's own PDF goes in
   `assets/resources/preprints/<slug>.pdf`. Keep individual files well under
   GitHub's 100&nbsp;MB hard limit (it silently rejects the push); a large
   dataset or video belongs on an external host with a link in `files:`
   instead of in this repo.
2. Copy `_resources/TEMPLATE.md` to `_resources/<slug>.md`. Set `category:` to
   an existing value — `Preprints` for the group's own papers — spelled
   exactly as it already appears, since a mismatched spelling starts a second,
   near-duplicate section on `/resources/` instead of erroring.
3. List the download(s) under `files:`. An arXiv or DOI link is just another
   entry in the same list as the local PDF, not a separate field.
4. For a preprint, put the abstract in the body the same way a talk's
   abstract goes in its body — same Markdown, same math delimiters.

## Known rough edges

- **No per-talk `.ics`.** Talk pages offer a Google Calendar template link and
  a link to the series calendar. A per-talk file needs a Jekyll generator
  plugin in `_plugins/`. Phase 3.
- **`DTSTAMP` in the `.ics` is offset by the site timezone** (it prints build
  time as if it were UTC). Cosmetic: `DTSTAMP` only affects update ordering.
  Fixed properly by the same generator plugin.
- **Fonts load from Google Fonts.** Self-hosting Source Serif 4 in
  `assets/fonts/` is a small improvement if the dependency bothers you.
- **Meetings before 2026 have no recorded time, room or abstract.** The
  department's listing never published them. Those talks carry
  `time_unknown: true`, which prints the date without a time; `date`/`end`
  still hold the series' usual 3–4 pm slot because sorting and the `.ics` need
  real values. The `.ics` therefore asserts a time the page does not. Anyone
  with better records should fill them in.
- **No file-size check on `assets/resources/` uploads.** GitHub rejects a
  push over 100&nbsp;MB per file and warns from 50&nbsp;MB; nothing in this
  repo enforces that before you push. Compress PDFs before adding them, and
  link out to an external host for anything large instead of committing it.

## Phasing

- **Phase 0 (done):** repo, collections, layouts, one series, one talk, CI.
- **Phase 1:** archive imported — nine meetings from 2021, 2022, 2025 and
  early 2026, taken from
  `https://sciences.utsa.edu/mathematics/quantum-mathematics/seminars.html`
  into the `quantum-math` series. Remaining: write the real landing-page copy;
  add the rest of the Fall talks.
- **Phase 2:** `_people` done — nine records from the department faculty page,
  grouped by `_data/people_groups.yml`. `speaker:` slug linking done.
  `_resources` done — category-grouped downloads, used for lecture notes,
  reading lists, and preprints. Remaining:
  1. An Action that converts a filled `new-talk` issue into a PR.
- **Phase 3:** auto-generated flyer PDFs from a print stylesheet; Pagefind
  search; tag index pages; per-talk `.ics`.

## Non-goals

Anything that reintroduces a gatekeeper. If a proposed feature means a change
has to wait on a person, it is the wrong feature.
