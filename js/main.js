window.addEventListener("load", function() {
  console.log("in main.js");
  let hamburger = document.querySelector(".hamburger svg");
  if (hamburger) {
    console.log("set click on burger");
    hamburger.onclick = function() {
      document.querySelector(".profile").classList.toggle("menu-active");
    };
  }

  let signOutButton = document.getElementById("sign-out");
  if (signOutButton) {
    signOutButton.onclick = function() {
      firebase.auth().signOut();
      console.log(document.cookie);
    };
  }
});
