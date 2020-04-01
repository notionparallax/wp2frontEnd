---
layout: default
---

# 💰💵💴💶💷💳💸🤑💲

This is a subscription for 1 issue of Walden Pond every month.

<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->

<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_Gzyj9CJSY7885d"
  role="link"
  class="disabled"> Checkout</button>

<div id="error-message"></div>

Currently there isn't a button to automatically cancel your subscription, which is a total dick move, but this link will send an email to me, and I'll do it for you: [cancel my subscription](mailto:ben@notionparallax.co.uk?cc=user@email.com&subject=Cancel my Walden Pond subscription please&body=No hard feelings)

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
  https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-analytics.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-auth.js"></script>

<script src="js/helpers.js"></script>
<script src="js/init-firebase.js"></script>
<script src="js/firebase-user.js"></script>
<script src="js/payment.js"></script>
