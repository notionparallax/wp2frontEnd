document.addEventListener("DOMContentLoaded", function () {
  let lx = document.querySelector(".link-expander");

  lx.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const newState = Array.from(lx.classList).includes("out") ? "in" : "out";
    gtag("event", "shortlink_drawer_" + newState);
    lx.classList.toggle("out");
  });

  lx.querySelector("input").addEventListener("input", (e) => {
    let goLink = lx.querySelector("a");
    if (e.target.value.length >= 4) {
      goLink.href = `https://pond.page.link/${e.target.value}`;
      goLink.classList.add("live");
    } else {
      goLink.classList.remove("live");
    }
  });

  lx.querySelector("a").addEventListener("click", (e) => {
    code = lx.querySelector("input").value;
    gtag("event", "shortlink_expanded", { link: code });
  });
});
