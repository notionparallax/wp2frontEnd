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
  role="link">Checkout</button>

<div id="error-message"></div>

Currently there isn't a button to automatically cancel your subscription, which is a total dick move, but this link will send an email to me, and I'll do it for you: [cancel my subscription](mailto:ben@notionparallax.co.uk?cc=user@email.com&subject=Cancel my Walden Pond subscription please&body=No hard feelings)

<script>
(function() {
  var stripe = Stripe('pk_test_oqvBwVn1rocov0b3aHDawOWL');

  var checkoutButton = document.getElementById('checkout-button-plan_Gzyj9CJSY7885d');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{plan: 'plan_Gzyj9CJSY7885d', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: 'https://notionparallax.co.uk/success',
      cancelUrl: 'https://notionparallax.co.uk/canceled',
      // billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['AU'], // Just AU for the moment...
      }
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
</script>
