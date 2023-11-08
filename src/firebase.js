import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
// import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCanXPlxnE9Qur8Gk06QZXRU24Xbhmqo3w",
  authDomain: "newdisneyself.firebaseapp.com",
  projectId: "newdisneyself",
  storageBucket: "newdisneyself.appspot.com",
  messagingSenderId: "515855049457",
  appId: "1:515855049457:web:8e0d0533d8e5c2356dff50",
  measurementId: "G-5X1BGCV5Y9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export const firestore = firebase.firestore();
