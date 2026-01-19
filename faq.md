---
layout: page
title: FAQ
subtitle: Frequently asked questions
---

{% for item in site.data.faq %}
<div class="card" style="margin-bottom: 1.5rem;">
  <h3 style="color: #8B9D83; margin-bottom: 1rem;">{{ item.question }}</h3>
  <p style="margin: 0;">{{ item.answer }}</p>
</div>
{% endfor %}

---

<div class="text-center" style="margin-top: 3rem;">
  <h3>Still have questions?</h3>
  <p style="font-size: 1.1rem; margin: 1rem 0 2rem;">
    Feel free to reach out to us directly!
  </p>
  <p>
    <strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a>
  </p>
</div>
