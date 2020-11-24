import firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPdrdkVlNRkiwpaFNPUBk52LruMvCMwU8",
  authDomain: "imessage-clone-c5ea3.firebaseapp.com",
  databaseURL: "https://imessage-clone-c5ea3.firebaseio.com",
  projectId: "imessage-clone-c5ea3",
  storageBucket: "imessage-clone-c5ea3.appspot.com",
  messagingSenderId: "420024699784",
  appId: "1:420024699784:web:1dd780214a8a9cc035083d",
  measurementId: "G-4M5TTZSYW0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
