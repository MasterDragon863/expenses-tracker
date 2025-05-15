// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm0nmnx8XnIQVUnPxVzss_y333NOvVmkQ",
  authDomain: "expense-tracker-1c3a7.firebaseapp.com",
  projectId: "expense-tracker-1c3a7",
  storageBucket: "expense-tracker-1c3a7.firebasestorage.app",
  messagingSenderId: "562554680113",
  appId: "1:562554680113:web:202d711516d8174caeb610",
  measurementId: "G-WJG64WWGB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();