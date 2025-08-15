
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAB7T0Qp6JsDvnWbS8ySEat1xmML5sKXc",
  authDomain: "user-pass-email-a55f5.firebaseapp.com",
  projectId: "user-pass-email-a55f5",
  storageBucket: "user-pass-email-a55f5.firebasestorage.app",
  messagingSenderId: "539609320127",
  appId: "1:539609320127:web:2e3891d10a6de1b487540a",
  measurementId: "G-S9MKC2D56V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;
