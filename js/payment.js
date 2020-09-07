window.addEventListener("userReady", function () {
  if (window.location.href.includes("test")) {
    console.log("using test stripe key");
    var stripe = Stripe("pk_test_oqvBwVn1rocov0b3aHDawOWL");
  } else {
    console.log("using live stripe key");
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
            cancelUrl: "https://waldenpond.press/payment",
            customerEmail: window.wp_user.email,
            clientReferenceId: window.wp_user.uid,
            // billingAddressCollection: 'required',
            shippingAddressCollection: {
              // prettier-ignore
              allowedCountries: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MK", "ML", "MM", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PS", "PT", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
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
    console.log("asking Stripe for a redirect URL");
    let body = JSON.stringify(window.wp_user);
    fetch(contextAwareURL() + "/create_billing_portal", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: { "Content-Type": "application/json" },
      body: body, // body data type must match "Content-Type" header
      //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty("e")) throw data.e;
        console.log(data);
        if (data.hasOwnProperty("specialWPmessage")) {
          console.warn(data.specialWPmessage);
        }
        window.location.replace(data.session.url);
      })
      .catch((e) => console.error("fetch failed", e));
  });
});
