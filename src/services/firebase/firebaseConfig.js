// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG3bIPBjcpg3Kb-js6PvqQYhuXxNAAomM",
  authDomain: "black-hw.firebaseapp.com",
  projectId: "black-hw",
  storageBucket: "black-hw.appspot.com",
  messagingSenderId: "595204260404",
  appId: "1:595204260404:web:b25bd38c91ad73a35a4061",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);