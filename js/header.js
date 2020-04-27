// console.log("in header.js");
let hamburger = document.querySelector(".hamburger svg");
if (hamburger) {
  // console.log("set click on burger");
  hamburger.onclick = function () {
    document.querySelector(".profile").classList.toggle("menu-active");
  };
}

let signOutButton = document.getElementById("sign-out");
if (signOutButton) {
  signOutButton.onclick = function () {
    firebase
      .auth()
      .signOut()
      .then(() => (window.location = "https://waldenpond.press/")) // Sign-out successful.
      .catch((error) => console.error("Sign out error:", error));
    console.log(document.cookie);
  };
}
