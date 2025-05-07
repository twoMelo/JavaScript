// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBzjNawI7uC4qvDf1_wmSh5I03nR1vReGY",
  authDomain: "tds2-2025-autenticar.firebaseapp.com",
  projectId: "tds2-2025-autenticar",
  storageBucket: "tds2-2025-autenticar.appspot.com",
  messagingSenderId: "510058066069",
  appId: "1:510058066069:web:051224d9ebda2482e23b14",
  measurementId: "G-0V7ZLKK0P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const autenticacao = getAuth(app);
