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
      if (data.editorial) {
        setPage(data);
        showArticleLenghts(data);
      }
      window.wp_user = data;
    })
    .catch((e) => console.error("fetch failed", e));
});

function updateTimeDisplay(sliderSelector, targetSelector, unit) {
  let slider = document.querySelector(sliderSelector);
  let target = document.querySelector(targetSelector);
  target.innerText = `${slider.value} ${unit}`;
  // console.log(sliderSelector, slider.value);
}
updateTimeDisplay("#form-longest_article", "#max-output", "minutes");
updateTimeDisplay("#form-shortest_article", "#min-output", "minutes");
updateTimeDisplay("#form-history_depth", "#history-output", "weeks");

document
  .getElementById("form-longest_article")
  .addEventListener("input", () =>
    updateTimeDisplay("#form-longest_article", "#max-output", "minutes")
  );
document
  .getElementById("form-shortest_article")
  .addEventListener("input", () =>
    updateTimeDisplay("#form-shortest_article", "#min-output", "minutes")
  );
document
  .getElementById("form-history_depth")
  .addEventListener("input", () =>
    updateTimeDisplay("#form-history_depth", "#history-output", "weeks")
  );
document
  .getElementById("update-the-graph-btn")
  .addEventListener("click", () => drawGraphOfTTR());

if ("{{user.allow_code}}" == "allow_code") {
  document.getElementById("form-allow_code").checked = true;
}

document
  .getElementById("all-good-btn")
  .addEventListener("click", (e) => collectEditorial(e));

function setPage(user) {
  let ed = user.editorial;
  console.log(user, "ready to set the sliders");
  setSliderVal("#form-longest_article", ed.longest_article);
  updateTimeDisplay("#form-longest_article", "#max-output", "minutes");

  setSliderVal("#form-shortest_article", ed.shortest_article);
  updateTimeDisplay("#form-shortest_article", "#min-output", "minutes");

  setSliderVal("#form-history_depth", ed.weeks_to_select_from);
  updateTimeDisplay("#form-history_depth", "#history-output", "weeks");

  document
    .getElementById("paper-colour")
    .querySelector(`option[value=${ed.paper_colour}]`).selected = true;
}

function collectEditorial(event) {
  // triggered by the button being clicked
  // collects up the slider settings,
  // packages them into the user object
  // and patches it back to the server
  event.preventDefault();
  let user = window.wp_user;
  let editorial = {
    allow_code: false,
    editorial_checked: true,
    // history: user.editorial.history || [], //doesn't work until there's an editorial
    longest_article: getSliderVal("#form-longest_article"),
    shortest_article: getSliderVal("#form-shortest_article"),
    paper_colour: document.getElementById("paper-colour").value,
    minutes_of_content_wanted: 60,
    weeks_to_select_from: getSliderVal("#form-history_depth"),
  };
  let body = JSON.stringify({ user: user, payload: editorial });

  fetch(contextAwareURL() + "/update-editorial", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        window.location = "home";
      }
    })
    .catch((e) => console.error("fetch failed", e));

  document.getElementById("all-good-btn").innerText = "hold on a sec...";
}

function getSliderVal(selector) {
  return parseInt(document.querySelector(selector).value, 10);
}

function setSliderVal(selector, value) {
  document.querySelector(selector).value = value;
}

function showArticleLenghts(data) {
  let body = data.pocket;
  body.for_timing = true;
  fetch(contextAwareURL() + "/sample-pocket-articles", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body), // body data type must match "Content-Type" header
    //docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  })
    .then((response) => response.json())
    .then((data) => {
      window.waldenPond_articleData = Object.values(data);
      document.getElementById("plotlyDiv").classList.remove("hide");
      document.getElementById("update-the-graph-btn").classList.remove("hide");
      document.getElementById("graph-loading-message").classList.add("hide");
      drawGraphOfTTR();
    })
    .catch((e) => console.error("fetch failed", e));
}

function drawGraphOfTTR() {
  // If the data hasn't showed up yet, don't do anything
  if (!window.waldenPond_articleData) return;

  const longest_article = getSliderVal("#form-longest_article");
  const shortest_article = getSliderVal("#form-shortest_article");
  const weeks_to_select_from = getSliderVal("#form-history_depth");

  const wpd = window.waldenPond_articleData;

  const allTTR = wpd.map((a) => a.time_to_read);
  const total_time = allTTR.reduce((a, b) => a + (b || 0), 0);
  console.log(total_time, "minutes of content");

  const deepTimeCutoff = weeks_to_select_from * 7 * 24 * 60 * 60;
  const inRangeTTR = wpd
    .filter(
      (x) => parseInt(x.time_added, 10) > Date.now() / 1000 - deepTimeCutoff
    )
    .map((x) => x.time_to_read)
    .filter((x) => x > shortest_article && x < longest_article);
  const inRangeTime = inRangeTTR.reduce((a, b) => a + (b || 0), 0);
  console.log(inRangeTime, "minutes of content in range");
  const xbins = { size: 1 };
  var traces = [
    {
      x: allTTR,
      type: "histogram",
      name: "All Articles",
      xbins: xbins,
    },
    {
      x: inRangeTTR,
      type: "histogram",
      name: "In Slider Range",
      xbins: xbins,
    },
  ];
  let layout = {
    title:
      `You have ${total_time} minutes of content in your Pocket` +
      "<br>" +
      `${inRangeTime} minutes of it is in range`,
    barmode: "overlay",
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    xaxis: { title: "Time to read", range: [0, 60] },
    // yaxis: { title: "Count" },
  };
  Plotly.newPlot("plotlyDiv", traces, layout);
}
