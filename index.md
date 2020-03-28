---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<h1 class="name-title">Walden Pond</h1>

<blockquote class="value-prop">
We make web articles for you to read in your cabin. <span class="secondary-prop">(Or on a plane, a train, or your sofa)</span>
</blockquote>

<div id="firebaseui-auth-container"></div>

<div id="loader">Loading...

</div>

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

<script src="js/auth.js"></script>
