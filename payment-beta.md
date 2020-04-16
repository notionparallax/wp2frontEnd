---
layout: default
---

# 💰💵💴💶💷💳💸🤑💲

This is a subscription for 1 issue of Walden Pond every month.

As a Beta user it's \$5 a month.

<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->

<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_H4pyqo7qsD0TQL"
  role="link"
  class="disabled">Subscribe with Stripe</button>

<div id="error-message"></div>

Currently there isn't a button to automatically cancel your subscription, which is a total dick move, but this link will send an email to me, and I'll do it for you: [cancel my subscription](mailto:ben@notionparallax.co.uk?cc=user@email.com&subject=Cancel my Walden Pond subscription please&body=No hard feelings)

{% include base-scripts.md %}

<script src="js/payment.js"></script>
