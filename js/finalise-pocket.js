window.addEventListener("userReady", function() {
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/issue-pocket-access-token", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then(response => response.json())
    .then(data => {
      console.log("trip2", data);
      getSampleArticles(data.pocket);
    })
    .catch(e => console.error("fetch failed", e));
});

function getSampleArticles(pocketKeys) {
  let body = JSON.stringify(pocketKeys);
  fetch(contextAwareURL() + "/sample-pocket-articles", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then(response => response.json())
    .then(data => {
      console.log("articles", data);
      showArticles(data);
      document.querySelector("#waiting").classList = "hide";
      document.querySelector("#done").classList = "show";
    })
    .catch(e => console.error("fetch failed", e));
}

function showArticles(articles) {
  let template = document.getElementById("article-template");
  let container = document.getElementById("articles-container");

  let fillerImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDJC3iiBbaebl2VaHmxnimTjwKbHr4FjAtf45uTI3ewzIiQLIv&usqp=CAU";

  for (let [key, article] of Object.entries(articles)) {
    let clone = template.content.cloneNode(true);
    clone.querySelector("img").src = article.top_image_url
      ? article.top_image_url
      : fillerImg;

    clone.querySelector("h3 a").innerText = article.given_title
      ? article.given_title
      : "Spooky! no title 👻";
    clone.querySelector("h3 a").href = article.given_url
      ? article.given_url
      : "";

    clone.querySelector(".exerpt").innerText = article.excerpt
      ? article.excerpt
      : "";

    clone.querySelector(".meta .minutes").innerText = article.time_to_read
      ? article.time_to_read
      : "?";

    container.appendChild(clone);
  }

  let example = {
    domain_metadata: {
      greyscale_logo:
        "https://logo.clearbit.com/fs.blog?size=800&greyscale=true",
      logo: "https://logo.clearbit.com/fs.blog?size=800",
      name: "Shane Parrish"
    },
    excerpt:
      "Our devotion to our values gets tested in the face of a true crisis. But it’s also an opportunity to reconnect, recommit, and sometimes, bake some bread.",
    favorite: "0",
    given_title: "How to Find What You Truly Value",
    given_url: "https://fs.blog/2020/03/find-what-you-truly-value/",
    has_image: "1",
    has_video: "0",
    is_article: "1",
    is_index: "0",
    item_id: "2932895595",
    lang: "en",
    listen_duration_estimate: 307,
    resolved_id: "2932895595",
    resolved_title: "What You Truly Value",
    resolved_url: "https://fs.blog/2020/03/find-what-you-truly-value/",
    sort_id: 0,
    status: "0",
    time_added: "1585577539",
    time_favorited: "0",
    time_read: "0",
    time_to_read: 4,
    time_updated: "1585577540",
    top_image_url:
      "https://149366099.v2.pressablecdn.com/wp-content/uploads/2020/03/How-to-Find-What-You-Truly-Value.png",
    word_count: "793"
  };
}
