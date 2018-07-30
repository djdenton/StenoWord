// src/firebase.js
import firebase from 'firebase/app'
import 'firebase/database'
const config = {
    apiKey: "AIzaSyBFErnCaSdbeJMKjkpz_-Fn3emriLwIOLI",
    authDomain: "dictation-prototype.firebaseapp.com",
    databaseURL: "https://dictation-prototype.firebaseio.com",
    projectId: "dictation-prototype",
    storageBucket: "dictation-prototype.appspot.com",
    messagingSenderId: "805593500412"
  };
firebase.initializeApp(config);
export default firebase;