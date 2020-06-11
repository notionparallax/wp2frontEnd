document.addEventListener("DOMContentLoaded", function () {
  let lx = document.querySelector(".link-expander");
  lx.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
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
});
