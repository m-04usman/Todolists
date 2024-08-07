// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_6-pli-WiCpnyrEcIXD4GIciH9OSz9RY",
  authDomain: "todos-list-ca6b1.firebaseapp.com",
  projectId: "todos-list-ca6b1",
  storageBucket: "todos-list-ca6b1.appspot.com",
  messagingSenderId: "36993110507",
  appId: "1:36993110507:web:68e48b77565ade153b89ae",
  measurementId: "G-52HX2W9ZJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
