// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9wVCzSlxVcrakJKd6jWibV3D0B1PNd7o",
  authDomain: "slate-55a49.firebaseapp.com",
  projectId: "slate-55a49",
  storageBucket: "slate-55a49.firebasestorage.app",
  messagingSenderId: "1042061784997",
  appId: "1:1042061784997:web:f5fd67c3333c95c37e1a4c",
  measurementId: "G-0J54JGPLJE"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app) 

export {db}