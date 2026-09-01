# Adding a talk

Three ways, in order of how much you want to be involved.

## 1. Ask (thirty seconds)

Open an issue using the **Propose a seminar talk** form:
<https://github.com/utsa-quantum-math/utsa-quantum-math.github.io/issues/new/choose>

Fill in the fields, submit. A maintainer turns it into a page. No account
setup beyond a free GitHub account.

## 2. Do it in the browser (two minutes, no software)

1. Open [`_talks/TEMPLATE.md`](_talks/TEMPLATE.md) and copy its contents.
2. Go to the `_talks` folder, click **Add file → Create new file**.
3. Name it `YYYY-MM-DD-lastname.md`, paste, and edit.
4. Scroll down, write a one-line description of the change, and commit.

The site rebuilds itself within a couple of minutes.

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

## 3. Locally

```
git clone https://github.com/utsa-quantum-math/utsa-quantum-math.github.io
cd utsa-quantum-math.github.io
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

# Adding slides, notes, or a flyer

Drop the file in `assets/slides/`, `assets/notes/`, or `assets/flyers/`, then
add the matching key to the talk's front matter:

```yaml
slides: /assets/slides/2026-09-12-doe.pdf
```

The button appears on the talk page automatically. Do this after the talk; the
page is meant to keep accumulating.

# Correcting or canceling

Every page has an **Edit this page** link in the footer that takes you
straight to the editor for that file.

To cancel a meeting, set `canceled: true`. Do not delete the file — links to
it may already be circulating.
