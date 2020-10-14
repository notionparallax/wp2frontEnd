window.addEventListener("userReady", function () {
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/user-data", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body, // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then((response) => response.json())
    .then((user) => {
      console.log("I'm in home", user);
      if (user.meta && user.meta.subscription_active) {
        console.log("all aboard🚂");
        document.getElementById("regular-home").classList.remove("hide");
        document.getElementById("editorial-control").classList.remove("hide");
      } else {
        document.getElementById("getting_started").classList.remove("hide");
        setSignupProgressTicks(user); //set the check marks or not
      }
    })
    .catch((e) => {
      document.querySelector(".page-content").innerHTML =
        "Nothing's loading. This is super frustrating, and I'm working on it. " +
        "If it's urgent, email me and I'll change the database by hand. 😥";
      console.error("fetch failed", e);
    });
});

function setSignupProgressTicks(user) {
  let ticks = { pocket_set: false, money_set: false };

  if (
    user &&
    user.pocket &&
    user.pocket.pocket_access_token &&
    user.pocket.pocket_request_token
  ) {
    document.querySelector("span.check.pocket_access").innerHTML = "✔️";
    ticks.pocket_set = true;

    document.getElementById("stripe-link").classList.remove("disabled");
  }
  if (user && user.stripe && user.stripe.complete_event) {
    document.querySelector("span.check.payment").innerHTML = "✔️";
    ticks.money_set = true;
  }

  if (ticks.pocket_set) {
    document.getElementById("editorial-control").classList.remove("hide");
  }
  if (ticks.pocket_set && ticks.money_set) {
    if (user.meta.subscription_active === false) {
      let body = JSON.stringify(window.wp_user);
      fetch(contextAwareURL() + "/mark_user_as_onboarded", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: { "Content-Type": "application/json" },
        body: body, // body data type must match "Content-Type" header
        //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      })
        .then((response) => response.json())
        .then((d) => {
          console.log(d);
          if (d.success) {
            alert("You're fully signed up and ready to go! Congratulations.");
            document.getElementById("getting_started").classList.add("hide");
            document.getElementById("regular-home").classList.remove("hide");
          }
        });
    }
  }
}
