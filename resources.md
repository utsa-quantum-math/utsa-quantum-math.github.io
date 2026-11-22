---
layout: default
title: Resources
permalink: /resources/
---
{%- comment -%}
  Generated from the _resources collection, grouped by `category`. Do not
  hand-write entries here.
{%- endcomment -%}
<div class="wrap">
  <h1>Resources</h1>
  <p class="lede">Seminar and course notes, preprints, and other material shared by the group.</p>

  {%- if site.resources.size > 0 -%}
  {%- comment -%}
    Sections listed in `order` come first, in that order; any other
    category follows, alphabetically. Within a section, resources with a
    `position` come first, in that order; the rest follow by title.
  {%- endcomment -%}
  {%- assign order = "Preprints|Student research|Student seminar notes|Course notes" | split: "|" -%}
  {%- assign groups = site.resources | group_by: "category" | sort: "name" -%}
  {%- for cat in order -%}
  {%- assign g = groups | where: "name", cat | first -%}
  {%- if g %}
  <h2 class="section"{% if g.name == "Course notes" %} id="course-lecture-notes"{% endif %}>{% if g.name == "Course notes" %}Course lecture notes{% else %}{{ g.name }}{% endif %}</h2>
  <ul class="talk-list">
    {%- assign withpos = g.items | where_exp: "r", "r.position" | sort: "position" -%}{%- assign nopos = g.items | where_exp: "r", "r.position == nil" | sort: "title" -%}{%- assign items = withpos | concat: nopos -%}
    {%- for r in items %}{% include resource-row.html resource=r %}{% endfor -%}
  </ul>
  {%- endif -%}
  {%- endfor -%}
  {%- for g in groups -%}
  {%- unless order contains g.name %}
  <h2 class="section">{{ g.name | default: "Other" }}</h2>
  <ul class="talk-list">
    {%- assign withpos = g.items | where_exp: "r", "r.position" | sort: "position" -%}{%- assign nopos = g.items | where_exp: "r", "r.position == nil" | sort: "title" -%}{%- assign items = withpos | concat: nopos -%}
    {%- for r in items %}{% include resource-row.html resource=r %}{% endfor -%}
  </ul>
  {%- endunless -%}
  {%- endfor -%}
  {%- else %}
  <p class="empty">Nothing here yet.</p>
  {%- endif %}
</div>
