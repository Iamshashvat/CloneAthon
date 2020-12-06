import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSYoOFUHOiZ52FrQSd-1DguePeuV7RnYk",
  authDomain: "clone-147b8.firebaseapp.com",
  databaseURL: "https://clone-147b8.firebaseio.com",
  projectId: "clone-147b8",
  storageBucket: "clone-147b8.appspot.com",
  messagingSenderId: "511454692366",
  appId: "1:511454692366:web:d74751eccafc287e18a85f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
