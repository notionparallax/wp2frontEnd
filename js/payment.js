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
              allowedCountries: 
              ['CD', 'ES', 'BJ', 'RU', 'MW', 'YT', 'CM', 'SG', 'PM', 'SJ', 'MA', 
               'BV', 'NG', 'WF', 'UA', 'CI', 'MT', 'SH', 'PY', 'FR', 'DZ', 'DM', 
               'AX', 'SM', 'FI', 'MV', 'PN', 'IE', 'MN', 'VA', 'VU', 'LY', 'DE', 
               'HT', 'KR', 'PT', 'SK', 'SR', 'EE', 'PA', 'AL', 'BH', 'GH', 'ME', 
               'GD', 'KM', 'VC', 'DJ', 'AF', 'SV', 'BO', 'HU', 'IT', 'EC', 'IM', 
               'TF', 'TG', 'CO', 'ID', 'LT', 'BT', 'DO', 'TO', 'IL', 'TC', 'TM', 
               'MU', 'LB', 'KZ', 'CA', 'CN', 'GG', 'GW', 'RO', 'GR', 'IN', 'TT', 
               'AE', 'CR', 'RW', 'MK', 'MO', 'SX', 'NA', 'PF', 'BQ', 'KY', 'AW', 
               'LU', 'OM', 'GN', 'PH', 'MR', 'MS', 'PG', 'TK', 'UG', 'BB', 'KG', 
               'KW', 'VG', 'TZ', 'YE', 'IS', 'JO', 'MQ', 'AT', 'RS', 'CK', 'MM', 
               'SS', 'EH', 'BD', 'CH', 'IO', 'UY', 'GS', 'MG', 'KI', 'FO', 'GM', 
               'AG', 'BM', 'PS', 'GA', 'LC', 'NO', 'NI', 'LV', 'JE', 'KE', 'LR', 
               'BL', 'TD', 'ZM', 'ER', 'BW', 'CW', 'FK', 'BR', 'AR', 'HK', 'NZ', 
               'TV', 'WS', 'CG', 'AO', 'FJ', 'SN', 'BZ', 'MD', 'AZ', 'PK', 'SC', 
               'NE', 'SB', 'MY', 'GP', 'UZ', 'TH', 'GB', 'KN', 'IQ', 'HR', 'MZ', 
               'NP', 'SA', 'HN', 'GF', 'SO', 'BF', 'NU', 'ST', 'CL', 'TJ', 'DK', 
               'PE', 'CV', 'GT', 'LI', 'SL', 'LK', 'US', 'KH', 'GY', 'TL', 'CY', 
               'GI', 'BE', 'GL', 'EG', 'BI', 'BG', 'ML', 'NR', 'SZ', 'VN', 'ZA', 
               'XK', 'BA', 'LS', 'AI', 'CZ', 'JP', 'QA', 'NL', 'SI', 'ET', 'VE', 
               'SE', 'TW', 'BY', 'AM', 'AD', 'JM', 'LA', 'MC', 'MX', 'TN', 'RE',
               'BS', 'AU', 'GE', 'TR', 'GQ', 'PL', 'MF', 'ZW', 'NC', 'CF', 'BN'],
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
