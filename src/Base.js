import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyD2pBl4EOkxv03Matt8swZi6y30Ju7A-DQ",
  authDomain: "shotkode-project.firebaseapp.com",
  projectId: "shotkode-project",
  storageBucket: "shotkode-project.appspot.com",
  messagingSenderId: "1089810658350",
  appId: "1:1089810658350:web:483a168f4729cfacf11bbf",
});
