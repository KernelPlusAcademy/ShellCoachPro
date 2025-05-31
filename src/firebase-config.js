// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4uVJOZ1ZWls6hK1b94Bm-waDgyJfYehM",
  authDomain: "shellcoach-eacb2.firebaseapp.com",
  projectId: "shellcoach-eacb2",
  storageBucket: "shellcoach-eacb2.firebasestorage.app",
  messagingSenderId: "97519723209",
  appId: "1:97519723209:web:0ec3a0260bd3174b486318",
  measurementId: "G-GFFE53HN8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
