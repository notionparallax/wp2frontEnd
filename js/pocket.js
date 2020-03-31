window.addEventListener("userReady", function() {
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/issue-pocket-auth-url", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let el = document.getElementById("pocket-auth-link");
      el.href = data.authURL;
      el.classList.remove("disabled");
    })
    .catch(e => console.error("fetch failed", e));
});
