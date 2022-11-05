// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL9LRHq4M3TIBirDzIQ0yHKO_KFEg_XeM",
  authDomain: "tour-italy.firebaseapp.com",
  projectId: "tour-italy",
  storageBucket: "tour-italy.appspot.com",
  messagingSenderId: "392968965053",
  appId: "1:392968965053:web:19c32d936a164f522860d4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;