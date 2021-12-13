// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Jf-IN7LBUYRymaqlb3Xb4AOPz8BQQCw",
  authDomain: "instagram-clone-b0561.firebaseapp.com",
  projectId: "instagram-clone-b0561",
  storageBucket: "instagram-clone-b0561.appspot.com",
  messagingSenderId: "258443672461",
  appId: "1:258443672461:web:47d9f4eb2143a95ee05bc4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
