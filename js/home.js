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
    })
    .catch(e => console.error("fetch failed", e));
});

function populatePage(user) {
  console.log(user);

  setSignupProgressTicks(user); //set the check marks or not

  document.querySelector(".profile-preview").src =
    user.from_firebase_auth.picture;
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
