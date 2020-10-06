// console.log("in auth.js");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var microsoftcock = new firebase.auth.OAuthProvider("microsoft.com");

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function () {
          // The widget is rendered, Hide the loader.
          document.getElementById("loader").style.display = "none";

          setTimeout(function () {
            document.querySelectorAll(
              '[data-provider-id="google.com"] >span'
            )[1].innerText = "Sign in/Sign up with Google";
            document.querySelectorAll(
              '[data-provider-id="github.com"] >span'
            )[1].innerText = "Sign in/Sign up with GitHub";
            // document.querySelectorAll(
            //   '[data-provider-id="twitter.com"] >span'
            // )[1].innerText = "Sign in/Sign up with Twitter";
            document.querySelectorAll(
              '[data-provider-id="password"] >span'
            )[1].innerText = "Sign in/Sign up with email";
          }, 100);
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "home",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // "microsoft.com",
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: "tos",
      // Privacy policy url.
      privacyPolicyUrl: "privacy",
    };

    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  false
);
