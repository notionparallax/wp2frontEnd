window.addEventListener("userReady", function() {
  let body = JSON.stringify(window.wp_user);
  fetch("http://localhost:8000" + "/user-data", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then(response => response.json())
    .then(data => {
      console.log(data, "Would do something with this, but not yet");
      populatePage(data);
    })
    .catch(e => console.error("fetch failed", e));
});

function populatePage(user) {
  console.log(user);

  // Populate all the simple fields
  // document.querySelectorAll("span").forEach(x => {
  //   let k = x.classList.value;
  //   let relaventData = personData[k];
  //   if (relaventData) {
  //     // console.log(k, relaventData);
  //     x.innerHTML = relaventData;
  //   }
  // });

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
  if (user && user.stripe) {
    document.querySelector("span.check.payment").innerHTML = "✔️";
  }
}
