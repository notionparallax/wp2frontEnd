// console.log("in history.js");
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
      if (data.editorial && data.editorial.history) {
        showHistory(data.editorial.history);
      }
      window.wp_user = data;
    })
    .catch((e) => console.error("fetch failed", e));
});

function showHistory(history) {
  for (editionName in history) {
    const edition = history[editionName];
    const dateISO = edition.date;
    const articles = edition.articles;
    console.log(edition, dateISO);
    const editionContainer = document.createElement("div");
    editionContainer.id = `${editionName}-container`;
    let title = document.createElement("h2");
    title.innerText = editionName.replace("_", " ");
    editionContainer.appendChild(title);
    document.getElementById("history-container").appendChild(editionContainer);
    const templateID = "article-template";
    showArticles(articles, templateID, `${editionName}-container`);
    // for (articleID in articles) {
    //   console.log(articles[articleID]);
    // }
  }
}
