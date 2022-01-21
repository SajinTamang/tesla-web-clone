import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsRqw5E-CAr6-7TU-rZnCToyVC4teWOyA",
  authDomain: "tesla-clone-ad022.firebaseapp.com",
  projectId: "tesla-clone-ad022",
  storageBucket: "tesla-clone-ad022.appspot.com",
  messagingSenderId: "652185939131",
  appId: "1:652185939131:web:56a9e44832b38057ec8d9e",
  measurementId: "G-7WDZLSQ3N8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();
