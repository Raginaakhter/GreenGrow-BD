// src/firebase/Firebase.config.js


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCAB7T0Qp6JsDvnWbS8ySEat1xmML5sKXc",
  authDomain: "user-pass-email-a55f5.firebaseapp.com",
  projectId: "user-pass-email-a55f5",
  storageBucket: "user-pass-email-a55f5.firebasestorage.app",
  messagingSenderId: "539609320127",
  appId: "1:539609320127:web:2e3891d10a6de1b487540a",
  measurementId: "G-S9MKC2D56V"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export default auth;


export { app };