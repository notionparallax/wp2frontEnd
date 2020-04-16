window.addEventListener("userReady", function () {
  var stripe = Stripe("pk_live_q1dcaunx7RfFnw9n8A6K3yHa");

  var checkoutButton = document.querySelector("[id^='checkout-button-']");
  var checkoutID = checkoutButton.id.split("checkout-button-")[1];

  checkoutButton.addEventListener("click", function () {
    // When the customer clicks on the button, redirect them to Checkout.
    stripe
      .redirectToCheckout({
        items: [{ plan: checkoutID, quantity: 1 }],

        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: "https://waldenpond.press/success",
        cancelUrl: "https://waldenpond.press/canceled",
        customerEmail: window.wp_user.email,
        clientReferenceId: window.wp_user.uid,
        // billingAddressCollection: 'required',
        shippingAddressCollection: {
          allowedCountries: ["AU"], // Just AU for the moment...
        },
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  });

  checkoutButton.classList.remove("disabled");
});
