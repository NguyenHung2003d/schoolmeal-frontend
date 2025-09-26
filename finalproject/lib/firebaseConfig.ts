import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2JPSCxH23j34TvQ8-5sOU4C-aH8ChsL0",
  authDomain: "finalproject-db510.firebaseapp.com",
  projectId: "finalproject-db510",
  storageBucket: "finalproject-db510.firebasestorage.app",
  messagingSenderId: "364684980154",
  appId: "1:364684980154:web:4996252649b5a2eaebb783",
  measurementId: "G-37XEN27E08",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
