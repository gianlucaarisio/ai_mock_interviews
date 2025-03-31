// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmZw-u2EjWCAJYoWFvG9V2ZhrrDUSaZpI",
  authDomain: "prepwise-62002.firebaseapp.com",
  projectId: "prepwise-62002",
  storageBucket: "prepwise-62002.firebasestorage.app",
  messagingSenderId: "59213851321",
  appId: "1:59213851321:web:88531de7d7df6fccd90968",
  measurementId: "G-D4DX6S2F5D",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
