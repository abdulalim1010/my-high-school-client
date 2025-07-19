// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwFsrgmh7wJNZxiaxSFwfyykNnuOVTp34",
  authDomain: "high-school-a0e05.firebaseapp.com",
  projectId: "high-school-a0e05",
  storageBucket: "high-school-a0e05.firebasestorage.app",
  messagingSenderId: "82736669076",
  appId: "1:82736669076:web:df473f00ee417f0fb42f81"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);