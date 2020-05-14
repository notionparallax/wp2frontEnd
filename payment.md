---
layout: default
---

# 💰💵💴💶💷💳💸🤑💲

This is a subscription for 1 issue of Walden Pond every month.

<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->

# printed

<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_HGJqSiZXIdOaxk"
  role="link"
  class="disabled">
<span class="product-name">1 hour print</span>
<span class="sub-with-stripe">Subscribe with Stripe</span>
</button>
<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_HGJvNc7jY9ZRrR"
  role="link"
  class="disabled">
<span class="product-name">2 hour print</span>
<span class="sub-with-stripe">Subscribe with Stripe</span>
</button>
<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_HGJyibrCINh1Uf"
  role="link"
  class="disabled">
<span class="product-name">4 hour print</span>
<span class="sub-with-stripe">Subscribe with Stripe</span>
</button>

# PDF

<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_HGK3aYMCcwkWcM"
  role="link"
  class="disabled">
<span class="product-name">1 hour</span>
<span class="sub-with-stripe">Subscribe with Stripe</span>
</button>
<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_HGK2EUGJYdT4Ug"
  role="link"
  class="disabled">
<span class="product-name">2 hour</span>
<span class="sub-with-stripe">Subscribe with Stripe</span>
</button>
<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-plan_HGK2lal9ACxPNz"
  role="link"
  class="disabled">
<span class="product-name">4 hour</span>
<span class="sub-with-stripe">Subscribe with Stripe</span>
</button>

<div id="error-message"></div>

Currently there isn't a button to automatically cancel your subscription, which is a total dick move, but this link will send an email to me, and I'll do it for you: [cancel my subscription](mailto:ben@notionparallax.co.uk?cc=user@email.com&subject=Cancel my Walden Pond subscription please&body=No hard feelings)

<button id="manage-payment-button">Manage billing</button>

{% include base-scripts.md %}

<script src="js/payment.js"></script>
