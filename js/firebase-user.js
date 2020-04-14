window.addEventListener("load", function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      //   var displayName = user.displayName;
      //   var email = user.email;
      //   var emailVerified = user.emailVerified;
      //   var photoURL = user.photoURL;
      //   var isAnonymous = user.isAnonymous;
      //   var uid = user.uid;
      //   var providerData = user.providerData;
      // ...
      window.wp_user = user;
      console.log("wp_user", window.wp_user);

      var event = new Event("userReady");
      window.dispatchEvent(event);
    } else {
      // User is signed out.
      // ...
    }
  });
});
