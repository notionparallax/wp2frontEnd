window.addEventListener("userReady", function () {
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/user-data", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body, // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("I'm in home", data);
      if (userHasCompletedOnboarding(data)) {
        setSignupProgressTicks(data); //set the check marks or not
      } else {
        console.log("start onboarding");
      }
    })
    .catch((e) => console.error("fetch failed", e));
});

function userHasCompletedOnboarding(user) {
  return (
    user.pocket.pocket_access_token &&
    user.pocket.pocket_request_token &&
    user.stripe.complete_event
  );
}

function setSignupProgressTicks(user) {
  let ticks = {
    pocket_set: false,
    money_set: false,
  };
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

  // if (ticks.editorial_set && ticks.pocket_set && ticks.money_set) {
  //   document.querySelector(".fully-activated").classList.remove("hide");
  //   document.querySelector("#tips").classList.remove("hide");

  //   document.querySelector("#getting_started").classList.add("hide");
  // }
}
