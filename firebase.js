import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later,, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3fZOzq7214MNp9vOEcZYdEvlgTwaAbe4",
  authDomain: "facebook-clone-bbd78.firebaseapp.com",
  projectId: "facebook-clone-bbd78",
  storageBucket: "facebook-clone-bbd78.appspot.com",
  messagingSenderId: "308445262928",
  appId: "1:308445262928:web:f964909ae6f01aa9d00d55",
  measurementId: "G-WB9RCJKEM4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
