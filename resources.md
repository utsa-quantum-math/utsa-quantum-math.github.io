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
    category follows, alphabetically.
  {%- endcomment -%}
  {%- assign order = "Student seminar notes|Course notes|Preprints" | split: "|" -%}
  {%- assign groups = site.resources | group_by: "category" | sort: "name" -%}
  {%- for cat in order -%}
  {%- assign g = groups | where: "name", cat | first -%}
  {%- if g %}
  <h2 class="section">{{ g.name }}</h2>
  <ul class="talk-list">
    {%- assign items = g.items | sort: "title" -%}
    {%- for r in items %}{% include resource-row.html resource=r %}{% endfor -%}
  </ul>
  {%- endif -%}
  {%- endfor -%}
  {%- for g in groups -%}
  {%- unless order contains g.name %}
  <h2 class="section">{{ g.name | default: "Other" }}</h2>
  <ul class="talk-list">
    {%- assign items = g.items | sort: "title" -%}
    {%- for r in items %}{% include resource-row.html resource=r %}{% endfor -%}
  </ul>
  {%- endunless -%}
  {%- endfor -%}
  {%- else %}
  <p class="empty">Nothing here yet.</p>
  {%- endif %}
</div>
