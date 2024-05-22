// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aviral-blog.firebaseapp.com",
  projectId: "aviral-blog",
  storageBucket: "aviral-blog.appspot.com",
  messagingSenderId: "806085621670",
  appId: "1:806085621670:web:075fc93d5fcd56af6b4167",
  measurementId: "G-LG7GFH0EFF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);