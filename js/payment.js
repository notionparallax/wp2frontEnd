window.addEventListener("userReady", function () {
  if (window.location.href.includes("test")) {
    var stripe = Stripe("pk_test_oqvBwVn1rocov0b3aHDawOWL");
  } else {
    var stripe = Stripe("pk_live_q1dcaunx7RfFnw9n8A6K3yHa");
  }

  document
    .querySelectorAll("[id^='checkout-button-']")
    .forEach((checkoutButton) => {
      const checkoutID = checkoutButton.id.split("checkout-button-")[1];

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
            successUrl: "https://waldenpond.press/home",
            cancelUrl: "https://waldenpond.press/canceled",
            customerEmail: window.wp_user.email,
            clientReferenceId: window.wp_user.uid,
            // billingAddressCollection: 'required',
            shippingAddressCollection: {
              // prettier-ignore
              allowedCountries: ["AU",'CA','US',"AQ","AT","BE","BG","CY","CZ","DE",
                               "DK","EE","ES","FI","FR","GB","GR","HU","IE","IT",
                               "LT","LU","LV","MT","NL","PL","PT","RO","SE","SI",
                               "SK",]
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

  const managePaymentButton = document.getElementById("manage-payment-button");
  // .setAttribute("action", contextAwareURL() + "/create_billing_portal");
  managePaymentButton.addEventListener("click", () => {
    let body = JSON.stringify(window.wp_user);
    fetch(contextAwareURL() + "/create_billing_portal", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: { "Content-Type": "application/json" },
      body: body, // body data type must match "Content-Type" header
      //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.session.url);
      })
      .catch((e) => console.error("fetch failed", e));
  });
});
