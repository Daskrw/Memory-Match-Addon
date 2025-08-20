// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMQu94tf4my3KvFZth_n-bWvXj5Z2c5LA",
  authDomain: "aj-taa-fixed.firebaseapp.com",
  databaseURL: "https://aj-taa-fixed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aj-taa-fixed",
  storageBucket: "aj-taa-fixed.firebasestorage.app",
  messagingSenderId: "816240311620",
  appId: "1:816240311620:web:09cf64eca2df004550ab11",
  measurementId: "G-SWK0WLZ97T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
