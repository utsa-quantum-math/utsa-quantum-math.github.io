---
# Copy this file to _talks/YYYY-MM-DD-lastname.md and fill it in.
# Delete any key you do not need — empty keys are fine, but absent is cleaner.
# Only series, date, end, title and speaker are required.

# Belt and braces. `exclude:` in _config.yml already keeps this file out of the
# build; this line means it still renders nothing if that entry is ever lost.
# Delete it in your copy, or the talk will not appear.
published: false

series: qec-2026-fall              # must match the slug of a file in _series/
date: 2026-09-11 15:00:00 -05:00   # KEEP THE OFFSET: -05:00 during CDT, -06:00 during CST
end:  2026-09-11 16:00:00 -05:00
title: "Title of the talk"
summary: "One plain-text sentence. No LaTeX here — this goes into the calendar entry."

# SPEAKER — two forms, pick one.
#
# 1. Anyone with a record in _people/: give the slug, which is that record's
#    file name. Name, affiliation and link are read from the record, the talk
#    shows up automatically on their page, and renaming them breaks nothing.
#    A slug that matches no record renders as "unknown speaker: <slug>" rather
#    than failing quietly.
#
#      speaker: lastname-firstname
#
# 2. A visitor with no record: give the details inline.
speaker:
  name: Firstname Lastname
  affiliation: Their institution
  url: https://their.homepage/

# Overrides the affiliation for this talk only. A person record says where
# someone is now; this says where they were then. Use it when a speaker has
# moved since. Works with both forms above.
affiliation: "Where they were at the time"

# For imported meetings whose time was never recorded. The page then prints
# the date alone. Keep date/end at the series' usual slot regardless — sorting
# and the .ics both need real values.
time_unknown: false

location:
  room: FLN 4.01.20 (Math Seminar Room)
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
