// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "coursecraftai-69b33.firebaseapp.com",
  projectId: "coursecraftai-69b33",
  storageBucket: "coursecraftai-69b33.firebasestorage.app",
  messagingSenderId: "719901914510",
  appId: "1:719901914510:web:931787343d4b80e5cc60df",
  measurementId: "G-TBDT05JCL3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)