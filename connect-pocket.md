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

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
  https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-analytics.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-auth.js"></script>

<script src="js/helpers.js"></script>
<script src="js/init-firebase.js"></script>
<script src="js/firebase-user.js"></script>
<script src="js/pocket.js"></script>