function contextAwareURL(url) {
  let h = window.location.host.split(":")[0];
  if (h == "127.0.0.1" || h == "localhost" || h == "0.0.0.0") {
    url = "http://localhost:8080";
  } else {
    // url = "https://todo-ljb4cakpxq-uc.a.run.app";
    url = "https://api.waldenpond.press";
  }
  return url;
}

function showArticles(articles, templateID, containerID) {
  let template = document.getElementById(templateID);
  let container = document.getElementById(containerID);

  let fillerImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDJC3iiBbaebl2VaHmxnimTjwKbHr4FjAtf45uTI3ewzIiQLIv&usqp=CAU";

  let editionLinks = [];
  for (let [key, article] of Object.entries(articles)) {
    let clone = template.content.cloneNode(true);

    clone.querySelector("img.feature-img").src = article.top_image_url
      ? article.top_image_url
      : fillerImg;

    clone.querySelector("img.domain-meta").src = article.domain_metadata
      ? article.domain_metadata.greyscale_logo
      : "";
    clone.querySelector("img.domain-meta").title = article.domain_metadata
      ? article.domain_metadata.name
      : "";

    clone.querySelector("h3 a").innerText =
      article.given_title || article.resolved_title
        ? article.given_title || article.resolved_title
        : "Spooky! no title 👻";

    pocketLink = `https://getpocket.com/read/${key}`;
    clone.querySelector("h3 a").href = pocketLink;
    editionLinks.push(pocketLink);
    // article.given_url ? article.given_url : "";

    clone.querySelector(".exerpt").innerText = article.excerpt
      ? article.excerpt
      : "";

    clone.querySelector(".meta .minutes").innerText = article.time_to_read
      ? article.time_to_read
      : "?";

    clone.querySelector(".meta a").href = article.resolved_url
      ? article.resolved_url
      : "";

    container.appendChild(clone);
  }
  let megaLink = document.createElement("span");
  megaLink.innerText = "💥";
  megaLink.classList.add("explode-all-articles");
  megaLink.title =
    "Click this to open the pocket page for all the articles in this edition.";
  megaLink.onclick = () => {
    alert(
      "This will almost certainly be blocked by your popup blocker, you'll " +
        "need to tell the browser that you're OK with that and then click it again."
    );
    for (let i = 0; i < editionLinks.length; i++) {
      const link = editionLinks[i];
      window.open(link);
    }
  };
  // console.log(containerID, editionLinks);
  container.querySelector("h2").appendChild(megaLink);

  let example = {
    domain_metadata: {
      greyscale_logo:
        "https://logo.clearbit.com/fs.blog?size=800&greyscale=true",
      logo: "https://logo.clearbit.com/fs.blog?size=800",
      name: "Shane Parrish",
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
    word_count: "793",
  };
}
