---
layout: page
title: Travel & Accommodations
subtitle: Where to stay and how to get there
---

## Day Of Wedding Shuttle Information
We will be arranging shuttles from the hotels below to The Mount and back after the wedding ends. However, The Mount's parking lot can accommodate cars for all of our guests. Please see the FAQ for more details. Our website will be updated with shuttle information in the weeks leading up to our wedding weekend!

---

## Traveling from New York City or Boston

If you will be flying to join our wedding weekend, _we recommend going in and out of Boston_.

**Boston:** If coming from Boston, guests can rent a car and drive two hours to Lenox, take an Amtrak train to Pittsfield, MA, or there are buses from South Station to Lenox (with a transfer in Lee, MA).

**NYC:** Guests will have several options to travel to Lenox, MA if coming from New York City. Guests may rent a car and drive two and a half hours to Lenox, take a train from Penn Station to Pittsfield, MA, or there are buses from Port Authority to Lenox (sometimes with transfers in Hartford, CT, or Springfield, CT).

**Taxi services are limited and Uber/Lyft do not operate in Lenox, MA - renting a car is recommended.**

---

## Hotel Blocks

We have reserved room blocks with discounts at the following hotels for your convenience. All of the hotels are on Route 20 (also known as Pittsfield Road) in Lenox and are within 5 miles of The Mount. All blocks are held until **August 16th** unless otherwise noted and the discount will expire. Please be aware that our wedding will take place during peak "Leaf Peeper" season, so hotels and inns will likely be at full occupancy. We **strongly** reccomend that you book accomodations early.

See FAQs for details about using hotel reward programs.

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

## Things to Do in the Berkshires

While you're in town, here are some local attractions and activities:

- **MASS MoCA** - Contemporary art museum in a converted factory complex
- **Norman Rockwell Museum** - Collection of American illustrator's works
- **The Clark Museum** - Exceptional collection of Impressionist paintings
- **Local Dining** - Explore Lenox's charming downtown restaurants and cafes

---

<div class="text-center" style="margin-top: 3rem;">
  <a href="{{ '/details' | relative_url }}" class="btn btn-primary">View Schedule</a>
  <a href="{{ '/faq' | relative_url }}" class="btn btn-outline" style="margin-left: 1rem;">View FAQs</a>
</div>
