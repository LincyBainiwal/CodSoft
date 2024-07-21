// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanagerapp-1647d.firebaseapp.com",
  projectId: "taskmanagerapp-1647d",
  storageBucket: "taskmanagerapp-1647d.appspot.com",
  messagingSenderId: "2976010711",
  appId: "1:2976010711:web:76f762b8ae273d5fa93b92",
  measurementId: "G-KETTNKVJB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);