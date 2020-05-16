---
layout: default
---

## Connect to your Pocket

Follow this link to authorise us to see your Pocket.

<div class="auth-with-pocket">
  <a href="" class="button disabled" id="pocket-auth-link">
    Authenticate with
    <img alt="pocket" src="https://getpocket.com/i/v3/pocket_logo.png" />
  </a>
</div>

If you've already authorised us, this will give you an error. If you want to re-authorise, go <a href="https://getpocket.com/connected_applications">here</a> to de-authorise us first.

<div id="articles-container" class="articles-container">
  {% include pocket_article_template.html %}
</div>

{% include base-scripts.md %}

<script src="js/pocket.js"></script>
<script src="js/finalise-pocket.js"></script>
