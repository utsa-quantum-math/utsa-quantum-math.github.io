# Adding a talk

## 1. Ask (thirty seconds, no software)

Open an issue using the **Propose a seminar talk** form:
<https://github.com/utsa-quantum-math/utsa-quantum-math.github.io/issues/new/choose>

Fill in the fields, submit. A maintainer turns it into a page. No account
setup beyond a free GitHub account.

## 2. In your editor (recommended)

**One-time setup**, if you haven't done this before:

1. Install [VS Code](https://code.visualstudio.com/) (any editor with Git
   built in works the same way — GitHub Desktop is another good option).
   VS Code will offer to install Git for you the first time you need it.
2. In VS Code, press `Cmd/Ctrl+Shift+P`, type **Git: Clone**, and paste
   `https://github.com/utsa-quantum-math/utsa-quantum-math.github.io`. Pick a
   folder on your computer, and open it when VS Code asks.

**Each time you add a talk:**

1. In the file explorer (left sidebar), open `_talks/TEMPLATE.md`, select
   all the text, and copy it.
2. Right-click the `_talks` folder → **New File**, and name it
   `YYYY-MM-DD-lastname.md`.
3. Paste in the template, and edit the fields directly in the editor. Save
   (`Cmd/Ctrl+S`).
4. Click the **Source Control** icon in the left sidebar (or
   `Cmd/Ctrl+Shift+G`). Your new file shows up under "Changes" — click the
   **+** next to it to stage it, type a one-line summary in the message box
   at the top, click **Commit**, then click **Sync Changes** (this both
   pushes your commit and pulls anyone else's).

The site rebuilds itself within a couple of minutes of the push.

Only five fields are required: `series`, `date`, `end`, `title`, and
`speaker`. Delete the lines you do not need.

For the speaker, if the person has a file in `_people/`, just give its name
without the `.md` — `speaker: lastname-firstname`. Their details are filled in
from that file and the talk appears on their page. For a visitor who has no
file, write `name:`, `affiliation:` and `url:` under `speaker:` instead.

Three things people get wrong:

- **Keep the timezone offset** on `date` and `end`. It is `-05:00` from March
  to November and `-06:00` otherwise.
- **Write math as `\\( x \\)` or `\\[ x \\]`**, with the backslash doubled.
- **Check the speaker slug matches a file in `_people/`.** If it does not, the
  page will say "unknown speaker" instead of their name.

Want to see your change rendered before pushing it? Open a terminal in the
project folder (VS Code: **Terminal → New Terminal**) and run:

```
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. This step is optional.

## Alternate: on GitHub.com, without installing anything

1. Open [`_talks/TEMPLATE.md`](_talks/TEMPLATE.md) and copy its contents.
2. Go to the `_talks` folder, click **Add file → Create new file**.
3. Name it `YYYY-MM-DD-lastname.md`, paste, and edit.
4. Scroll down, write a one-line description of the change, and commit.

Everything else above (required fields, the speaker field, the three common
mistakes) applies here too.

# Sharing a file for download

Use this for anything the group wants to make publicly downloadable: a
preprint or paper, lecture notes, a reading list, software, a useful link.

**This has nothing to do with any seminar talk.** It does not need a speaker,
a date, or a series — it is just the group's general "downloads" shelf, at
`/resources/` on the site. (If you're instead adding the slides, notes, or
flyer for one specific talk, skip to "Attaching a file to one specific talk"
below — that's a different, simpler step.)

## 1. Ask (thirty seconds, no GitHub experience needed)

Open an issue using the **Share a preprint or resource** form:
<https://github.com/utsa-quantum-math/utsa-quantum-math.github.io/issues/new/choose>

Attach the file to the issue (drag it into the text box) or paste a link to
where it already lives (arXiv, Google Drive, etc.), fill in the rest, and
submit. A maintainer will do the rest.

## 2. In your editor (recommended)

Assumes you've done the one-time VS Code + clone setup described in "Adding
a talk" above.

**Step A — add the file to the project.**

In the file explorer, find the `assets/resources` folder — use
`assets/resources/preprints` if this is one of the group's own
preprints/papers. Drag your file from Finder/File Explorer directly into
that folder in VS Code's sidebar to copy it in.

**Step B — create the page that describes it.**

1. Open [`_resources/TEMPLATE.md`](_resources/TEMPLATE.md), select all,
   and copy it.
2. Right-click the `_resources` folder → **New File**, and name it
   something short and plain, all lowercase, words separated by dashes,
   ending in `.md` — for example `smith-2026-error-correction.md`. This
   name becomes part of the page's web address, so keep it simple and
   don't rename it later.
3. Paste in the text you copied, then fill in:
   - `title` — the name of the paper or item. This is the only field you
     must fill in; delete any other line you don't need.
   - `category` — what kind of thing this is. Use `Preprints` for the
     group's own papers, `Student seminar notes` for notes from the student
     seminar, and `Course notes` for notes from a course. Otherwise reuse
     one of the other categories already in the template (`Reading list`,
     `Software`, `Link`), copying its spelling exactly — a different spelling makes a
     confusing extra section on the page instead of an error.
   - `contributor` — who it's by. For a preprint, list every author.
   - `summary` — one plain sentence describing it, shown in the listing.
   - `files:` — replace the example line with the address of the file you
     added in Step A, for example
     `/assets/resources/preprints/smith-2026-error-correction.pdf`.
4. If there's an abstract or description, write it below the second `---`
   line, as plain text (the same math notation used everywhere else on the
   site works here too: `\\( ... \\)` and `\\[ ... \\]`).
5. Save, then use the **Source Control** panel to stage, commit, and
   **Sync Changes**, same as adding a talk.

The site rebuilds itself automatically within a couple of minutes, and the
new entry appears on `/resources/`.

**One hard limit:** keep each file under 100 MB — GitHub refuses anything
larger. For a large data set or video, put it on Google Drive (or similar)
and paste that link into `files:` instead of adding the file itself.

## Alternate: on GitHub.com, without installing anything

**Step A — upload the file.**

1. On github.com, open the `assets/resources` folder (or
   `assets/resources/preprints` for the group's own papers).
2. Click **Add file → Upload files**, drag your file in, and commit.

**Step B — create the page that describes it.**

1. Open [`_resources/TEMPLATE.md`](_resources/TEMPLATE.md) and copy its text.
2. Go to the `_resources` folder, click **Add file → Create new file**, and
   name it as described above.
3. Paste in the template and fill in the same fields as described above.
4. Scroll down, describe the change in a sentence, and click **Commit
   changes**.

# Attaching a file to one specific talk

This is different from "Sharing a file for download" above: use this only
when a file belongs to one particular seminar meeting — its slides, its
notes, or its flyer.

Add the file to `assets/slides/`, `assets/notes/`, or `assets/flyers/` (drag
it into the folder in your editor, or use **Add file → Upload files** on
GitHub.com), then add the matching key to that talk's own file:

```yaml
slides: /assets/slides/2026-09-12-doe.pdf
```

The button appears on the talk page automatically. Do this after the talk;
the page is meant to keep accumulating.

# Correcting or canceling

**In your editor:** open the file, fix it, and commit and push as usual.

**On GitHub.com:** every page has an **Edit this page** link in the footer
that opens GitHub's own editor for that file directly.

To cancel a meeting, set `canceled: true`. Do not delete the file — links to
it may already be circulating. The same goes for anything under
`_resources/`: if a preprint is withdrawn or replaced by a newer version,
say so in the text rather than deleting the page.

## Interactive Kochen–Specker graphics

For the sphere explorer and certificate page in `assets/notes/`, read
[`KOCHEN_SPECKER_VISUALS.md`](assets/notes/KOCHEN_SPECKER_VISUALS.md) before editing.
Change sphere colors in `ks-visual-palette.css`, layout in `ks49-explorer.css`,
and publish those assets with the HTML. Keep data changes separate from design.

## Rosetta Stone course announcement

The main landing page is `/resources/rosetta-stone-course/`. Its resource record
is `_resources/rosetta-stone-course.md`, under the canonical category `Course notes`
(displayed as **Course lecture notes**). It renders the complete interactive page
directly from `_includes/rosetta-course-content.html`. `/courses/rosetta-stone/`
is only a redirect to it, so there is one copy of the page and one address. The homepage announcement reads the same course data.

Edit `_data/rosetta_course.json` for the term, instructor, research assistant,
book authors, contact address, route, and eight translation-hub readings. The
current term is Spring 2027. José Iovino is the sole instructor; Olivia Aubone
is the research assistant. Book authorship remains separate from teaching roles.
Do not invent meeting times or enrollment details. The manuscript is not uploaded.

The clickable hub uses a typographic center: **Limits and independence**. The
author rejected the dot-matrix motif, so do not restore it. The legacy pattern
SVG remains at its original URL but is not displayed. Colors, labels and spoke
coordinates come from the translation data. Spokes connect readings, not theorem
implications. Quantum measurement is selected initially. The subject buttons are
the only control: on wide screens the selected reading sits beside the hub, on
narrow screens below it (scrolled into view on selection). Without JavaScript
every reading is shown. Each reading's "Continue" link goes to its own route step
(`route-<ink>` ids) or, for model theory, to the model theory section.

Each route unit lists its lectures under `chapters` in the course data: one
lecture per section of the book, numbered as in the book. Regenerate the list
from the book's `\chapter`/`\section` headings when the book's sections change.
The route steps carry small step laboratories drawn by `assets/js/rosetta-course.js`
(intervals and Sauer–Shelah, Rademacher independence, the golden rotation and its
idempotent return, real versus imaginary Newton orbits); the quantum step points
to the single-spin response plot.

The quantum response visual is the explicitly labeled single-spin model
m(h) = tanh[β(h − a)]. β is inverse thermal energy and h,a use compatible energy
units. At fixed β the offset family is pointwise ordered; three curves have at
most four low–high patterns, not the eight required by independence. β→∞ gives
a jump with value zero at h=a. Do not present this finite-spin, zero-temperature
illustration as an Ising thermodynamic-limit theorem or a full bipartite response
family. The static fallback is `assets/rosetta-course-response.svg`.

`page.stylesheet` adds scoped CSS through `_includes/head.html`; `page.script`
adds a deferred page-local script through `_layouts/default.html`. The course
uses `assets/css/rosetta-course.css` and `assets/js/rosetta-course.js`, with native
keyboard-operable controls and no framework or autoplay animation. Version queries
refresh changed assets without changing their stable public paths.

The one-page letter-size printable flyer is
`assets/flyers/rosetta-stone-course.pdf`. It names the same instructor and research
assistant, uses a typographic hub, and contains a QR code to the main Resources
landing page. Keep the human-readable URL alongside the code. The QR code was
verified by decoding a rasterization of the final PDF. Regenerate and recheck it
if the destination changes. Do not post the draft manuscript with the flyer.
