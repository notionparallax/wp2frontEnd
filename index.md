---
layout: index
---

<p class="reset"><img src="./img/frontPageImage.jpg" class="mega-image"></p>

<h1 class="name-title">Walden Pond</h1>

<blockquote class="value-prop">
A little paper zine, full of articles for you to read in your cabin.<span class="secondary-prop">(Or, on the beach, on a plane, a train, or your sofa)</span>

</blockquote>

<div id="firebaseui-auth-container"></div>

<div id="loader">Loading...

</div>

_Walden Pond_ is a little paper zine that comes once a month in the mail ✉. It's full of a selection of the articles you've saved to [Pocket](https://getpocket.com), so you know that you're interested in everything inside. Each issue has an hour of reading, the battery will never run out, it's clear in bright sunlight 😎 and has a low-latency pen interface (or pencil) 📝.

<div class="quick-story">

{% include quick_story.md %}

</div>

<div class="long-story">

{% include long_story.md %}

</div>

<div class="use-case">

{% include use_case.md %}

</div>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
  https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-analytics.js"></script>

<script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
<link
  type="text/css"
  rel="stylesheet"
  href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
/>
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-auth.js"></script>

<script src="js/helpers.js"></script>
<script src="js/init-firebase.js"></script>
<script src="js/auth.js"></script>
<script src="js/firebase-user.js"></script>
