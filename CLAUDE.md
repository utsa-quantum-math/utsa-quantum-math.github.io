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
Required keys: `series`, `date`, `end`, `title`, `speaker.name`. Everything
else is optional and the templates test for presence before rendering, so an
absent `slides:` key simply means no slides button.

`series` on a talk must match the `slug` of a file in `_series/`.

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

## Known rough edges

- **No per-talk `.ics`.** Talk pages offer a Google Calendar template link and
  a link to the series calendar. A per-talk file needs a Jekyll generator
  plugin in `_plugins/`. Phase 3.
- **`DTSTAMP` in the `.ics` is offset by the site timezone** (it prints build
  time as if it were UTC). Cosmetic: `DTSTAMP` only affects update ordering.
  Fixed properly by the same generator plugin.
- **Fonts load from Google Fonts.** Self-hosting Source Serif 4 in
  `assets/fonts/` is a small improvement if the dependency bothers you.
- `_people/` and `_resources/` exist but are unused; `people.md` and
  `resources.md` are placeholder pages.

## Phasing

- **Phase 0 (done):** repo, collections, layouts, one series, one talk, CI.
- **Phase 1:** import the ~12 historical talks from
  `https://sciences.utsa.edu/mathematics/quantum-mathematics/seminars.html`;
  write the real landing-page copy; add real Fall talks.
- **Phase 2:** `_people` and `_resources` for real; an Action that converts a
  filled `new-talk` issue into a PR.
- **Phase 3:** auto-generated flyer PDFs from a print stylesheet; Pagefind
  search; tag index pages; per-talk `.ics`.

## Non-goals

Anything that reintroduces a gatekeeper. If a proposed feature means a change
has to wait on a person, it is the wrong feature.
