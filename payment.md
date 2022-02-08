---
layout: default
title: 💰💵💴💶💷💳💸🤑💲
---

Walden Pond comes out once a month, you can get 1, 2 or 4 hours of content in each edition.

Once you've signed up, you can change the length of your editions, or cancel your subscription at any time.

<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->

<div class="payment-grid">
<div class="print-title">

# Printed

</div>
<div class="title-1-hr">
<!-- <img src="./img/50_page_book.png"> -->

# 1 hour

</div>
<div class="title-2-hr">
<!-- <img src="./img/50_page_book.png"> -->

# 2 hours

</div>
<div class="title-4-hr">
<!-- <img src="./img/50_page_book.png"> -->

# 4 hours

</div>
<div class="print-1-hr">
<button
  id="checkout-button-plan_HGJqSiZXIdOaxk"
  role="link"
  tabindex="0"
  class="disabled checkout-button"
  title="Subscribe with Stripe">
<span class="text-description">1 hour</span>
<span class="product-name">⏳📖</span>
<!-- <span class="Subscribe-with-Stripe">Subscribe with Stripe</span> -->
<span class="price" title="USD">$10</span>
</button>
</div>
<div class="print-2-hr">
<button
  id="checkout-button-plan_HGJvNc7jY9ZRrR"
  role="link"
  tabindex="0"
  class="disabled checkout-button"
  title="Subscribe with Stripe">
<span class="text-description">2 hours</span>
<span class="product-name">⏳⏳📖</span>
<!-- <span class="Subscribe-with-Stripe">Subscribe with Stripe</span> -->
<span class="price" title="USD">$12</span>
</button>
</div>
<div class="print-4-hr">
<button
  id="checkout-button-plan_HGJyibrCINh1Uf"
  role="link"
  tabindex="0"
  class="disabled checkout-button"
  title="Subscribe with Stripe">
<span class="text-description">4 hours</span>
<span class="product-name">⏳⏳⏳⏳📖</span>
<!-- <span class="Subscribe-with-Stripe">Subscribe with Stripe</span> -->
<span class="price" title="USD">$14</span>
</button>
</div>
</div>

<div id="error-message"></div>

Click this button to change or cancel your subscription. It'll take you to Stripe's website. We don't ever see your payment details.

<button id="manage-payment-button">Manage billing</button>

{% include base-scripts.md %}

<script src="js/payment.js"></script>
