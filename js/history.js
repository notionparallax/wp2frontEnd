console.log("in new_history.js");

(() => showPlaceholderHistory())();
let cleared = false;

window.addEventListener("userReady", function () {
  try_to_populate_history_from_history_subcollection();
});

function try_to_populate_history_from_history_subcollection() {
  console.log("populate_history_from_history_subcollection");
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/history-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body, // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then((response) => response.json())
    .then((data) => {
      showHistory(data);
      window.wp_history = data;
    })
    .catch((e) => {
      console.warn("fetch failed, trying with editorial history", e);
      populate_history_from_editorial_history();
    });
}

function populate_history_from_editorial_history() {
  console.log("populate_history_from_editorial_history");
  let body = JSON.stringify(window.wp_user);
  fetch(contextAwareURL() + "/user-data", {
    method: "POST",
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
}

function edNum(edString) {
  let numStr = edString.replace("edition_", "");
  return parseInt(numStr, 10);
}
function sortByEditionNumber(a, b) {
  if (edNum(a) > edNum(b)) {
    return 1;
  } else {
    return -1;
  }
}
function showHistory(history) {
  keys = Object.keys(history);
  if (keys[0] === "error") {
    throw "nothing here to work with";
  } else {
    Object.keys(history)
      .sort(sortByEditionNumber)
      .reverse()
      .forEach((editionName) => {
        if (!cleared) {
          document.getElementById("edition_42-container").remove();
          cleared = true;
        }

        const edition = history[editionName];
        const articles = edition.articles;
        const editionContainer = document.createElement("div");
        editionContainer.id = `${editionName}-container`;
        editionContainer.classList.add(`edition-container`);
        let title = document.createElement("h2");
        title.innerText = editionName.replace("_", " ");
        editionContainer.appendChild(title);
        document
          .getElementById("history-container")
          .appendChild(editionContainer);
        const templateID = "article-template";
        showArticles(articles, templateID, `${editionName}-container`);
      });

    document
      .querySelectorAll(".history-container .preview-title a")
      .forEach((el) =>
        el.addEventListener("click", (e) => {
          const t = e.target;
          const edition = t.closest(".edition-container").id.split("-")[0];
          gtag("event", "history_pocket_link", { edition });
        })
      );
    document.querySelectorAll(".history-container .meta a").forEach((el) =>
      el.addEventListener("click", (e) => {
        const t = e.target;
        const edition = t.closest(".edition-container").id.split("-")[0];
        gtag("event", "history_source_link", { edition });
      })
    );
  }
}

function showPlaceholderHistory() {
  const history = {
    edition_42: {
      articles: {
        1: {
          resolved_title:
            "One moment please, the elves are fetching your history.",
          excerpt:
            "Why, sometimes I've believed as many as six impossible things before breakfast.",
        },
        2: {
          resolved_title: "（*＾-＾*",
          excerpt:
            "It's no use going back to yesterday, because I was a different person then.",
        },
        3: {
          resolved_title: "ƪ(˘⌣˘)ʃ",
          excerpt:
            "It takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!",
        },
        4: {
          resolved_title: "(●ˇ∀ˇ●)",
          excerpt:
            "'And what is the use of a book,' thought Alice, 'without pictures or conversation?'",
        },
        5: {
          resolved_title: "(⌐■_■)",
          excerpt:
            "Why, sometimes I've believed as many as six impossible things before breakfast.",
        },
        6: {
          resolved_title: "（*＾-＾*",
          excerpt:
            "It's no use going back to yesterday, because I was a different person then.",
        },
        7: {
          resolved_title: "ƪ(˘⌣˘)ʃ",
          excerpt:
            "It takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!",
        },
        8: {
          resolved_title: "(●ˇ∀ˇ●)",
          excerpt:
            "'And what is the use of a book,' thought Alice, 'without pictures or conversation?'",
        },
      },
    },
  };

  const edition = history["edition_42"];
  const articles = edition.articles;
  const editionContainer = document.createElement("div");
  editionContainer.id = `edition_42-container`;
  editionContainer.classList.add(`edition-container`);
  editionContainer.classList.add(`history-placeholder`);
  let title = document.createElement("h2");
  title.innerHTML = "Loading Your History&hellip;";
  editionContainer.appendChild(title);
  document.getElementById("history-container").appendChild(editionContainer);
  const templateID = "article-template";
  showArticles(articles, templateID, `edition_42-container`);
}
