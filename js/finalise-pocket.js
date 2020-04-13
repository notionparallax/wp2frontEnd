window.addEventListener("userReady", function () {
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/issue-pocket-access-token", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body, // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("trip2", data);
      getSampleArticles(data.pocket);
    })
    .catch((e) => console.error("fetch failed", e));
});

function getSampleArticles(pocketKeys) {
  let body = JSON.stringify(pocketKeys);
  fetch(contextAwareURL() + "/sample-pocket-articles", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body, // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("articles", data);
      showArticles(data, "article-template", "articles-container");
      document.querySelector("#waiting").classList = "hide";
      document.querySelector("#done").classList = "show";
    })
    .catch((e) => console.error("fetch failed", e));
}
