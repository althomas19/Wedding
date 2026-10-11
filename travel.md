---
layout: page
title: Things to Do
---

Our wedding falls during peak fall foliage season, and there's a lot to explore in the area. Here are some of our favorites!

{% for category in site.data.activities.categories %}
## {{ category.name }}

<div class="grid grid-2" style="margin-top: 2rem; gap: 2rem;">
{% for activity in category.activities %}
  <div class="card">
    <h3>{{ activity.name }}</h3>
    <p><strong>{{ activity.location }}</strong></p>
    <p>{{ activity.description }}</p>

    {% if activity.link != "" %}
    <a href="{{ activity.link }}" target="_blank" class="btn btn-outline" style="margin-top: 1rem;">Learn More</a>
    {% endif %}
  </div>
{% endfor %}
</div>
<br>

---
{% endfor %}

## Where Everyone's Staying

Our room block hotels are all on Route 20 (also known as Pittsfield Road) in Lenox and are within 5 miles of The Mount. See the [Day of Transportation]({{ '/transportation' | relative_url }}) page for shuttle details and the FAQs for details about using hotel reward programs.

<div class="grid grid-2" style="margin-top: 2rem; gap: 2rem;">
{% for hotel in site.data.accommodations.hotels %}
  <div class="card">
    <h3>{{ hotel.name }}</h3>
    <p><strong>{{ hotel.address }}</strong></p>
    <p>{{ hotel.description }}</p>

    {% if hotel.booking_link %}
    <a href="{{ hotel.booking_link }}" target="_blank" class="btn btn-outline" style="margin-top: 1rem;">Book Now</a>
    {% endif %}
  </div>
{% endfor %}
</div>
<br>

---

## Getting Here

**Boston:** Rent a car and drive two hours to Lenox, take an Amtrak train to Pittsfield, MA, or take a bus from South Station to Lenox (with a transfer in Lee, MA).

**NYC:** Rent a car and drive two and a half hours to Lenox, take a train from Penn Station to Pittsfield, MA, or take a bus from Port Authority to Lenox (sometimes with transfers in Hartford, CT, or Springfield, CT).

**Taxi services are limited and Uber/Lyft do not operate in Lenox, MA - a car is recommended for getting around.**

<div class="text-center" style="margin-top: 3rem;">
  <a href="{{ '/details' | relative_url }}" class="btn btn-primary">View Schedule</a>
  <a href="{{ '/faq' | relative_url }}" class="btn btn-outline" style="margin-left: 1rem;">View FAQs</a>
</div>
