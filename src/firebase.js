import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
// import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBDlG1e4EPIHpMuoAMVS5jAOsgI1CvuhbM",
  authDomain: "admin-panel-972b4.firebaseapp.com",
  projectId: "admin-panel-972b4",
  storageBucket: "admin-panel-972b4.firebasestorage.app",
  messagingSenderId: "247909740583",
  appId: "1:247909740583:web:144786ab694beaf9c29e02",
  measurementId: "G-JF8VQCBP0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export const firestore = firebase.firestore();
