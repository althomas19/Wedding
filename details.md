---
layout: page
title: Schedule
subtitle: Everything you need to know about our wedding weekend
---

<div style="text-align: center; max-width: 800px; margin: 0 auto;">

{% for event_data in site.data.events %}
  {% assign event = event_data[1] %}

  {% unless forloop.first %}
  <hr>
  {% endunless %}

  <h2 style="margin-bottom: 0.25rem;">{{ event.name }}</h2>

  {% if event.icon %}
  <div style="width: 70px; height: 70px; margin: 0.25rem auto 1rem;">
    {{ event.icon }}
  </div>
  {% endif %}

  <p><strong>{{ event.day }}</strong><br>
  <strong>{{ event.time }}</strong></p>

  <p><strong>{{ event.venue }}</strong><br>
  <a href="{{ event.map_link }}" target="_blank">{{ event.address }}</a></p>

  {% if event.attire != "" %}
  <p><strong>Attire:</strong> {{ event.attire }}</p>
  {% endif %}

  <p>{{ event.description }}</p>

{% endfor %}

</div>

---

<div class="text-center" style="margin-top: 3rem;">
  <a href="{{ '/rsvp' | relative_url }}" class="btn btn-primary">RSVP Now</a>
  <a href="{{ '/travel' | relative_url }}" class="btn btn-outline" style="margin-left: 1rem;">Travel Info</a>
</div>
