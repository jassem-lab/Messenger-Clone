import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRpGG5ss69kXirC-36qATaOVaOLnpLH7Y",
  authDomain: "messenger-e3169.firebaseapp.com",
  databaseURL: "https://messenger-e3169.firebaseio.com",
  projectId: "messenger-e3169",
  storageBucket: "messenger-e3169.appspot.com",
  messagingSenderId: "1081483277395",
  appId: "1:1081483277395:web:566a2f094cd4c6d51e02a6",
  measurementId: "G-8JGL95H4XR"
});

const db = firebaseApp.firestore();

export default db;
