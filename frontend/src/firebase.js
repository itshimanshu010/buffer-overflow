// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB60sDXmmfZUvOhwTbxcAhY5kWu-ZMCX5k",
  authDomain: "bufferoverflow-e27df.firebaseapp.com",
  projectId: "bufferoverflow-e27df",
  storageBucket: "bufferoverflow-e27df.appspot.com",
  messagingSenderId: "231207074489",
  appId: "1:231207074489:web:baad95d2efe0f3a4197968",
  measurementId: "G-Z90JVBV21N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

