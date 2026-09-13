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
  <p class="lede">Reading lists, lecture notes, software, and links shared by the group.</p>

  {%- if site.resources.size > 0 -%}
  {%- assign groups = site.resources | group_by: "category" | sort: "name" -%}
  {%- for g in groups -%}
  <h2 class="section">{{ g.name | default: "Other" }}</h2>
  <ul class="talk-list">
    {%- assign items = g.items | sort: "title" -%}
    {%- for r in items %}{% include resource-row.html resource=r %}{% endfor -%}
  </ul>
  {%- endfor -%}
  {%- else %}
  <p class="empty">Nothing here yet.</p>
  {%- endif %}
</div>
