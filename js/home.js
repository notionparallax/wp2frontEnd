window.addEventListener("load", function() {
  fetch("https://todo-ljb4cakpxq-uc.a.run.app/list")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      let me = data.filter(d => d.name === "Ben Doherty")[0];
      populatePage(me);
    });
});

function populatePage(personData) {
  console.log(personData);

  // Populate all the simple fields
  document.querySelectorAll("span").forEach(x => {
    let k = x.classList.value;
    let relaventData = personData[k];
    if (relaventData) {
      console.log(k, relaventData);
      x.innerHTML = relaventData;
    }
  });

  //set the check marks or not
  document.querySelectorAll("span.check").forEach(x => {
    let k = x.classList[1];
    let relaventData = personData[k];
    if (relaventData) {
      x.innerHTML = "✔️";
    }
  });

  document.querySelector(".profile-preview").src = personData.picture;
}
