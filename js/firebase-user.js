window.addEventListener("load", function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.wp_user = user;
      console.log("wp_user", window.wp_user);

      var event = new Event("userReady");
      window.dispatchEvent(event);
      document.querySelector(".page-content").classList.remove("invisible");
      document.querySelector("body").classList.remove("loading");
      document.querySelector("#header-profile-picture").src = user.photoURL;
    } else {
      // User is signed out.
      // ...
    }
  });
});
