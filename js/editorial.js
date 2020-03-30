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
      if (data.editorial) {
        setPage(data);
      }
      window.wp_user = data;
    })
    .catch(e => console.error("fetch failed", e));
});

function updateTimeDisplay(sliderSelector, targetSelector) {
  let slider = document.querySelector(sliderSelector);
  let target = document.querySelector(targetSelector);
  target.innerText = `${slider.value} minutes`;
  console.log();
}
updateTimeDisplay("#form-longest_article", "#max-output");
updateTimeDisplay("#form-shortest_article", "#min-output");

document
  .getElementById("form-longest_article")
  .addEventListener("input", () =>
    updateTimeDisplay("#form-longest_article", "#max-output")
  );
document
  .getElementById("form-shortest_article")
  .addEventListener("input", () =>
    updateTimeDisplay("#form-shortest_article", "#min-output")
  );

if ("{{user.allow_code}}" == "allow_code") {
  document.getElementById("form-allow_code").checked = true;
}

document
  .getElementById("all-good-btn")
  .addEventListener("click", e => collectEditorial(e));

function setPage(user) {
  console.log(user, "ready to set the sliders");
  setSliderVal("#form-longest_article", user.editorial.longest_article);
  updateTimeDisplay("#form-longest_article", "#max-output");

  setSliderVal("#form-shortest_article", user.editorial.shortest_article);
  updateTimeDisplay("#form-shortest_article", "#min-output");
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
    minutes_of_content_wanted: 60,
    weeks_to_select_from: 200
  };
  user.editorial = editorial;

  fetch("http://localhost:8000" + "/update", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location = "home";
      }
    })
    .catch(e => console.error("fetch failed", e));

  document.getElementById("all-good-btn").innerText = "hold on a sec...";
}

function getSliderVal(selector) {
  return parseInt(document.querySelector(selector).value, 10);
}

function setSliderVal(selector, value) {
  document.querySelector(selector).value = value;
}
