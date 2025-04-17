// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyap1TIeh4dDgQ0zAAtuuCJhAMGF-jNf0",
  authDomain: "jetzero-stage.firebaseapp.com",
  projectId: "jetzero-stage",
  storageBucket: "jetzero-stage.firebasestorage.app",
  messagingSenderId: "1017232866850",
  appId: "1:1017232866850:web:0c250e4d0d3b110016947b",
  measurementId: "G-47R4ERB457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };