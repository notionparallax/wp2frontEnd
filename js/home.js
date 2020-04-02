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
  let sub = user.stripe.sub;
  document.querySelector(".profile-preview").src = fba.picture;
  setPageValue(".minutes_of_content_wanted", e.minutes_of_content_wanted);
  setPageValue(".minutes_of_content_wanted", e.minutes_of_content_wanted);
  setPageValue(".shortest_article", e.shortest_article);
  setPageValue(".longest_article", e.longest_article);
  document.querySelector(".allow_code").src = e.allow_code ? "do" : "don't";
  // setPageValue(".weeks_to_select_from", e.weeks_to_select_from);
  setPageValue(".name", fba.name);
  setPageValue(".email", fba.email);
  setPageValue(".user_id", user.uid);
  setPageValue(".name", fba.name);
  setPageValue(".address1", ad.line1);
  setPageValue(".address2", ad.line2, " ");
  setPageValue(".city", ad.city);
  setPageValue(".postal_code", ad.postal_code);
  setPageValue(".state", ad.state);
  setPageValue(".country", ad.country);
  setPageValue(".pocket_request_token", p.pocket_request_token);
  setPageValue(".pocket_access_token", p.pocket_access_token);
  setPageValue(".currency", sub.currency);
  setPageValue(".price", `$${sub.amount / 100}`);

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
  if (user && user.editorial && user.editorial.editorial_checked == true) {
    document.querySelector("span.check.editorial_checked").innerHTML = "✔️";
  }
  if (
    user &&
    user.pocket &&
    user.pocket.pocket_access_token &&
    user.pocket.pocket_request_token
  ) {
    document.querySelector("span.check.pocket_access_token").innerHTML = "✔️";
  }
  if (user && user.stripe && user.stripe.complete_event) {
    document.querySelector("span.check.payment").innerHTML = "✔️";
  }
}
