import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDo6l61Igjk5FOUvbjzhpZCzRmWoWlbsFk",
  authDomain: "adminpanel-afa0f.firebaseapp.com",
  projectId: "adminpanel-afa0f",
  storageBucket: "adminpanel-afa0f.appspot.com",
  messagingSenderId: "834817197395",
  appId: "1:834817197395:web:85dde3c46bd54eb0778da6",
  measurementId: "G-34RNW87FY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
