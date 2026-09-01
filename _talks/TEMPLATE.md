---
# Copy this file to _talks/YYYY-MM-DD-lastname.md and fill it in.
# Delete any key you do not need — empty keys are fine, but absent is cleaner.
# Only series, date, end, title and speaker.name are required.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the talk will not appear.
published: false

series: qec-2026-fall              # must match the slug of a file in _series/
date: 2026-10-03 15:00:00 -05:00   # KEEP THE OFFSET: -05:00 during CDT, -06:00 during CST
end:  2026-10-03 16:00:00 -05:00
title: "Title of the talk"
summary: "One plain-text sentence. No LaTeX here — this goes into the calendar entry."

speaker:
  name: Firstname Lastname
  affiliation: Their institution
  url: https://their.homepage/

location:
  room: BSB 3.03.02
  campus: main campus
  map: https://map.utsa.edu/
  online: ""                       # Zoom link, if any

tags: [topic one, topic two]

flyer:  /assets/flyers/YYYY-MM-DD.pdf
slides: /assets/slides/YYYY-MM-DD-lastname.pdf
notes:  /assets/notes/YYYY-MM-DD.pdf
video:  ""

references:
  - text: "Author, Title of the paper"
    url: https://arxiv.org/abs/0000.00000
    label: arXiv

canceled: false
---

The abstract goes here, in free-form Markdown. Display math uses
\\[ ... \\] and inline math uses \\( ... \\). Links, lists and emphasis all
work as usual.
