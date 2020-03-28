console.log("in auth.js");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALDPnYGsg5CA0cuznLke-Jm5Yc82Jq3Bk",
  authDomain: "walden-pond-2.firebaseapp.com",
  databaseURL: "https://walden-pond-2.firebaseio.com",
  projectId: "walden-pond-2",
  storageBucket: "walden-pond-2.appspot.com",
  messagingSenderId: "771291632963",
  appId: "1:771291632963:web:531e5ff7bb47bdd20f0bf6",
  measurementId: "G-KYKF8Z3L7X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.addEventListener(
  "DOMContentLoaded",
  function() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          // The widget is rendered, Hide the loader.
          document.getElementById("loader").style.display = "none";
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "home.html",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: "tos.html",
      // Privacy policy url.
      privacyPolicyUrl: "privacy.html"
    };

    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  false
);
