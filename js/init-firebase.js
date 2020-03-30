document.addEventListener("DOMContentLoaded", function() {
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
});
