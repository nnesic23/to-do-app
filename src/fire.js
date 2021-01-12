import firebase from "firebase";
var config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */ apiKey: "unreadablestuff",
  authDomain:
    "https://to-do-app-434ff-default-rtdb.europe-west1.firebasedatabase.app/firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: "757908050326",
};
var fire = firebase.initializeApp(config);
export default fire;
