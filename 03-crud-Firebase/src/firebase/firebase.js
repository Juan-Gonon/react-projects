// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0i8wPr25XW88dwlgcjjesMGKQtqL4xZk",
  authDomain: "fir-crud-64293.firebaseapp.com",
  projectId: "fir-crud-64293",
  storageBucket: "fir-crud-64293.appspot.com",
  messagingSenderId: "1054593844106",
  appId: "1:1054593844106:web:028adab61e241013b5be73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)