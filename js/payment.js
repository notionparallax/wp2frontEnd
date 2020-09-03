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
              allowedCountries: ['MN','MD','GE','VN','EC','IQ','KY','AG', 
                      'UG','BZ','YT','MA','AR','KG','FK','AU','MZ','DE','GH', 
                      'SO','FO','NG','VG','GG','HM','LS','PA','DZ','CK','AZ', 
                      'SI','ML','MC','BY','PF','PT','SK','DM','TD','SJ','CI', 
                      'LI','PM','LR','GD','BN','TV','CA','TT','MQ','US','IR', 
                      'PS','LK','SY','BL','PY','MU','TJ','NU','NO','SR','BF', 
                      'BW','GL','MY','AF','MT','AT','LU','MV','LB','MF','RO', 
                      'GS','SN','HR','XK','GN','CO','IT','KH','CR','JM','NA', 
                      'WS','AW','TF','CC','PN','PK','MW','FR','SS','BE','EE', 
                      'SM','VE','HK','GT','CH','AO','BJ','KP','TH','LV','SX', 
                      'DK','KR','BS','EG','HT','PE','GA','BB','CD','CL','AN', 
                      'CF','PL','BA','TL','NR','ZA','RE','TG','FJ','ES','TW', 
                      'HU','IM','NI','NE','VU','VA','VC','BG','MS','ST','CV', 
                      'RU','MX','SC','NL','DO','RW','IN','LC','SD','MG','JP', 
                      'UA','WF','GM','RS','AI','MO','NC','HN','QA','AM','IE', 
                      'ET','BO','TN','TR','BM','FI','KI','NP','KZ','BR','YE', 
                      'SB','UM','EH','NF','ER','CW','GY','LA','BV','CY','LT', 
                      'KN','JO','CX','BH','GQ','GF','BI','DJ','SG','SZ','AD', 
                      'TM','CU','ZW','AL','TC','TO','GI','ME','CN','UZ','GR', 
                      'MK','ID','KW','BT','CM','ZM','PH','GB','PG','UY','CZ', 
                      'IS','IL','KE','SE','SV','IO','SA','AX','OM','GW','SH', 
                      'TZ','NZ','BD','KM','SL','BQ','GP','MM','LY','AE','MR', 
                      'CG','JE','TK'],
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
