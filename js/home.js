window.addEventListener("userReady", function() {
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/user-data", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then(response => response.json())
    .then(data => {
      populatePage(data);
      setSignupProgressTicks(data); //set the check marks or not
    })
    .catch(e => console.error("fetch failed", e));
});

function populatePage(user) {
  console.log(user);

  let fba = user.from_firebase_auth;
  let e = user.editorial;
  let ad = user.stripe.address;
  let p = user.pocket;
  let sub = user.stripe.sub || { currency: " " };
  document.querySelector(".profile-preview").src = fba.picture;
  document.querySelector(".allow_code").src = e.allow_code ? "do" : "don't";

  things_to_update = [
    [".minutes_of_content_wanted", e.minutes_of_content_wanted],
    [".minutes_of_content_wanted", e.minutes_of_content_wanted],
    [".shortest_article", e.shortest_article],
    [".longest_article", e.longest_article],
    // [".weeks_to_select_from", e.weeks_to_select_from],
    [".name", fba.name],
    [".email", fba.email],
    [".user_id", user.uid],
    [".name", fba.name],
    [".address1", ad.line1],
    [".address2", ad.line2, " "],
    [".city", ad.city],
    [".postal_code", ad.postal_code],
    [".state", ad.state],
    [".country", ad.country],
    [".pocket_request_token", p.pocket_request_token],
    [".pocket_access_token", p.pocket_access_token],
    [".currency", sub.currency],
    [".price", `$${sub.amount / 100}`]
  ];
  things_to_update.forEach(x => setPageValue(x[0], x[1], x[2]));

  function setPageValue(selector, value, defaultSubstitution) {
    try {
      if (value) {
        document
          .querySelectorAll(selector)
          .forEach(el => (el.innerHTML = value));
      } else {
        console.warn(`couldn't set value on ${selector}, no value`);
        document.querySelector(selector).innerHTML = defaultSubstitution || "?";
      }
    } catch (e) {
      console.warn(`couldn't set value on ${selector}: ${e}`, e);
    }
  }
}

function setSignupProgressTicks(user) {
  let ticks = {
    editorial_set: false,
    pocket_set: false,
    money_set: false
  };
  if (user && user.editorial && user.editorial.editorial_checked == true) {
    document.querySelector("span.check.editorial_checked").innerHTML = "✔️";
    ticks.editorial_set = true;
  }
  if (
    user &&
    user.pocket &&
    user.pocket.pocket_access_token &&
    user.pocket.pocket_request_token
  ) {
    document.querySelector("span.check.pocket_access").innerHTML = "✔️";
    ticks.pocket_set = true;
  }
  if (user && user.stripe && user.stripe.complete_event) {
    document.querySelector("span.check.payment").innerHTML = "✔️";
    ticks.money_set = true;
  }

  if (ticks.editorial_set && ticks.pocket_set && ticks.money_set) {
    document.querySelector(".fully-activated").classList.remove("hide");
    document.querySelector("#activate-button").classList.remove("hide");
    document.querySelector("#tips").classList.remove("hide");

    document.querySelector("#getting_started").classList.add("hide");
  }
}
