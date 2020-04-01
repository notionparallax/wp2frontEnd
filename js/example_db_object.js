// useful bits from from firebase auth:
/*
refreshToken: "AEu4IL2VCWiBoKC4HljDHCSck0ZIqH98R913Q30WADuytmAYXidEaY87cd62rWclGa_ffq0haVDXwpJxYv9h2WxMZG4cbnFpq-B3tWxq1W-ulCHPh7qLbzuIFJpsgYE6vo38yX1xbaqvhUB6wM7K0j65h55YdDMUJfQNkFwgC4g-BRpT9NrVYW7PBUCVAPTCQFEfpjqs1QScnhlMaDGYrp1UFR7fyI4slCy5-jn8hy2361N9cIs9pCO5mIEg5v8_fcrVVV4aKOH5XnGoD82nRRupJtLCEip6oo5fMKmNM-00HzJAX-EmT0Aa-IA1u6vFgLypTxwWN83U-FIPMu7agCBt3j2VSZhX-5eLRtl6iEY3kxR5h43tfvMKEIVN03FHA1Bzo3q49RKAXkpKgT7WaQoW0C_EYYMJ4x093hkeQGMt8MYS25WB46w"
uid: "Nbpl5r5DPmXHmWGM10QAUiPpiub2"
displayName: "Ben Doherty"
photoURL: "https://lh3.googleusercontent.com/a-/AOh14GhlLfCXVVfobF6WmGY-Axld3zHdgkjMcAzrG2J5qQ"
email: "ben@notionparallax.co.uk"
emailVerified: true
phoneNumber: null
isAnonymous: false
tenantId: null
metadata: ah {a: "1585393699793", b: "1585531684237", lastSignInTime: "Mon, 30 Mar 2020 01:28:04 GMT", creationTime: "Sat, 28 Mar 2020 11:08:19 GMT"}
providerData: [{…}]
*/

// old db contents
let aUser = {
  meta: {
    active: false
  },
  pocket: {
    pocket_access_token: "49f76b7a-f12d-c193-7782-56f7d8",
    pocket_request_token: "e9b89e8c-b646-4351-60f2-b9b83f"
  },
  editorial: {
    allow_code: false,
    editorial_checked: "allok",
    history: [
      {
        issue_number: 1,
        articles: [1, 2, 3, 4]
      }
    ],
    longest_article: 34,
    minutes_of_content_wanted: 60,
    shortest_article: 6,
    weeks_to_select_from: 200
  },
  from_firebase_auth: {
    email: "ben@notionparallax.co.uk",
    id: "5649050225344512",
    name: "Ben Doherty",
    picture:
      "https://lh3.googleusercontent.com/-p-RpGw96cEM/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcWkNESvqW807baR2fndqCgUeH8Ww/mo/photo.jpg",
    auth_obj: {
      x: "THE WHOLE AUTH OBJECT (because I'm sure I'll need it later...)"
    }
  },
  stripe: {
    checkout_session: {
      x: "THE WHOLE SESSION OBJECT (because I'm sure I'll need it later...)"
    },
    name: "Ben Doherty",
    address: {
      line1: "BVN, Level 11",
      line2: "255 Pitt Street",
      city: "Sydney",
      state: "New South Wales",
      postal_code: "2000",
      country: "Australia"
    },
    display_items: [
      {
        amount: 1500,
        currency: "usd",
        custom: {
          description: "Comfortable cotton t-shirt",
          images: null,
          name: "T-shirt"
        },
        quantity: 2,
        type: "custom"
      }
    ]
  },
  user_id: "WPZCsLzBIsNTtoYYv2HD7cHH6ya2"
};
/*
// stripe data
"id": "cs_test_NN2ZOoNTeucBmyDESTSwgcL78imHGXueN2cLsTU06evGyqXVHcYMRGMm",
"object": "checkout.session",
"billing_address_collection": null,
"cancel_url": "https://example.com/cancel",
"client_reference_id": null,
"customer": null,
"customer_email": null,
"display_items": [
    {
    "amount": 1500,
    "currency": "usd",
    "custom": {
        "description": "Comfortable cotton t-shirt",
        "images": null,
        "name": "T-shirt"
    },
    "quantity": 2,
    "type": "custom"
    }
],
"livemode": false,
"locale": null,
"metadata": {},
"mode": null,
"payment_intent": "pi_1GRsY8H2GxkDfKS5wDF7xMX2",
"payment_method_types": [
    "card"
],
"setup_intent": null,
"shipping": null,
"shipping_address_collection": null,
"submit_type": null,
"subscription": null,
"success_url": "https://example.com/success"

//stripe customer object, if expanded
"id": "cus_H0DWoCsUjqNGHz",
"object": "customer",
"address": {
    .address.city,
    .address.country,
    .address.line1,
    .address.line2,
    .address.postal_code,
    .address.state,
},
"balance": 0,
"created": 1585534244,
"currency": "aud",
"default_source": null,
"delinquent": false,
"description": null,
"discount": null,
"email": null,
"invoice_prefix": "3A833B1",
"invoice_settings": {
    "custom_fields": null,
    "default_payment_method": null,
    "footer": null
},
"livemode": false,
"metadata": {},
"name": null,
"next_invoice_sequence": 1,
"phone": null,
"preferred_locales": [],
"shipping": {
    .address.city,
    .address.country,
    .address.line1,
    .address.line2,
    .address.postal_code,
    .address.state,
},
"sources": {
    "object": "list",
    "data": [],
    "has_more": false,
    "url": "/v1/customers/cus_H0DWoCsUjqNGHz/sources"
},
"subscriptions": {
    "object": "list",
    "data": [],
    "has_more": false,
    "url": "/v1/customers/cus_H0DWoCsUjqNGHz/subscriptions"
},
"tax_exempt": "none",
"tax_ids": {
    "object": "list",
    "data": [],
    "has_more": false,
    "url": "/v1/customers/cus_H0DWoCsUjqNGHz/tax_ids"
}
*/
